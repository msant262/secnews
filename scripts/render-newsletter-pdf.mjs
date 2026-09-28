#!/usr/bin/env node
/**
 * Render one standalone CyberSec News edition with Chromium.
 *
 * Usage (on Lenovo):
 *   PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs \
 *   CHROME_PATH=/path/to/chrome \
 *   node scripts/render-newsletter-pdf.mjs newsletters/YYYY-MM-DD.html output.pdf
 *
 * The renderer intentionally opens the edition HTML, not a text extraction or
 * a generated article fragment. It waits for the shared styles and JS chrome,
 * then prints backgrounds. That prevents a valid-looking but unstyled PDF.
 */
import { access, mkdir, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const [sourceArg, outputArg] = process.argv.slice(2);
if (!sourceArg || !outputArg) {
  console.error('Usage: render-newsletter-pdf.mjs <edition.html> <output.pdf>');
  process.exit(2);
}

const source = resolve(sourceArg);
const output = resolve(outputArg);
const playwrightModule = process.env.PLAYWRIGHT_MODULE ?? 'playwright';
const chromePath = process.env.CHROME_PATH;

await access(source);
await mkdir(dirname(output), { recursive: true });

const { chromium } = await import(playwrightModule);
const browser = await chromium.launch({
  headless: true,
  executablePath: chromePath,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    deviceScaleFactor: 1,
  });
  page.setDefaultTimeout(45_000);
  await page.goto(pathToFileURL(source).href, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => {
    const body = document.body;
    const stylesLoaded = [...document.styleSheets].length >= 3;
    const chromeLoaded = Boolean(document.querySelector('#site-header .nav'));
    const styled = getComputedStyle(body).backgroundColor === 'rgb(6, 6, 9)';
    return stylesLoaded && chromeLoaded && styled;
  });

  const check = await page.evaluate(() => ({
    stylesheets: [...document.styleSheets].map((sheet) => sheet.href || 'inline'),
    bodyBackground: getComputedStyle(document.body).backgroundColor,
    articles: document.querySelectorAll('section.art').length,
    header: Boolean(document.querySelector('#site-header .nav')),
  }));
  if (check.articles === 0 || !check.header || check.bodyBackground !== 'rgb(6, 6, 9)') {
    throw new Error(`Edition did not render as a styled page: ${JSON.stringify(check)}`);
  }

  await page.emulateMedia({ media: 'screen' });
  await page.pdf({
    path: output,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    preferCSSPageSize: false,
  });
  const pdfBytes = (await stat(output)).size;
  // A raw browser print of this edition is roughly 70 KB. Styled editions use
  // embedded fonts/background resources and have consistently been much larger.
  // Refuse a suspiciously tiny output instead of letting a superficially valid
  // `%PDF-` file reach review.
  if (pdfBytes < 250_000) {
    throw new Error(`Rendered PDF is suspiciously small (${pdfBytes} bytes); refusing unstyled candidate`);
  }
  console.log(JSON.stringify({ ok: true, source, output, pdfBytes, check }, null, 2));
} finally {
  await browser.close();
}
