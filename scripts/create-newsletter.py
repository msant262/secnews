#!/usr/bin/env python3
"""Create a CyberSec News edition scaffold.
Usage:
  python3 scripts/create-newsletter.py 2026-05-07 22 "Título da edição"
Then edit newsletters/YYYY-MM-DD.html and add metadata in js/newsletters.js.
"""
from pathlib import Path
import sys, html

if len(sys.argv) < 4:
    print('Usage: python3 scripts/create-newsletter.py YYYY-MM-DD EDITION_NUMBER "Título"')
    sys.exit(1)

date, edition_num, title = sys.argv[1], sys.argv[2].lstrip('#'), sys.argv[3]
out = Path('newsletters') / f'{date}.html'
if out.exists():
    raise SystemExit(f'{out} already exists')
style = Path('newsletters/2026-04-30.html').read_text(encoding='utf-8').split('<style>',1)[1].split('</style>',1)[0]
page = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>CyberSec News #{edition_num} — {html.escape(date)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{html.escape(title)}">
<link rel="stylesheet" href="../css/okami.css">
<link rel="stylesheet" href="../css/components.css">
<style>{style}</style>
</head>
<body class="dark-v" data-page="newsletter" data-base="../">
<div class="read-progress" id="progress"></div>
<div id="site-header"></div>
<main>
  <section class="section read-hero lead-orange">
    <div class="container">
      <a class="read-back" href="../newsletter.html">← Todas as edições</a>
      <div class="read-meta"><span class="nl-ed">#{edition_num}</span><span class="mono-tag">DATA POR EXTENSO</span><span class="mono-tag">10 min de leitura</span></div>
      <h1>{html.escape(title)}</h1>
      <div class="tags"><span class="badge">Zero-Day</span><span class="badge">Supply Chain</span></div>
      <div class="threat">
        <div class="threat-cell t-crit"><span class="threat-n">0</span><span class="threat-l">críticas</span></div>
        <div class="threat-cell t-high"><span class="threat-n">0</span><span class="threat-l">altas</span></div>
        <div class="threat-cell t-med"><span class="threat-n">0</span><span class="threat-l">médias</span></div>
      </div>
    </div>
  </section>
  <section class="section pt-0"><div class="container"><div class="read-layout">
    <aside class="toc"><div class="toc-head">Nesta edição</div><ul class="toc-list"><li><a class="toc-link" href="#a1"><span class="toc-dot med"></span>Primeira notícia</a></li></ul><div class="toc-foot"><a class="btn btn-outline btn-block" href="../newsletter.html">Arquivo</a></div></aside>
    <article class="article-col">
      <div class="read-intro"><p>INTRODUÇÃO DA EDIÇÃO.</p></div>
      <section class="art" id="a1" data-sev="medium">
        <div class="art-num">01</div><div><div class="art-head"><span class="sev sev-medium">Médio</span></div><h2>Primeira notícia</h2><p>Texto da notícia.</p><div class="callout"><strong>Ação:</strong> recomendação prática.</div></div>
      </section>
    </article>
  </div></div></section>
</main>
<div id="site-footer"></div>
<script src="../js/site.js"></script>
<script>(function(){{var bar=document.getElementById('progress');function onScroll(){{var h=document.documentElement;var max=h.scrollHeight-h.clientHeight;bar.style.width=(max?((h.scrollTop/max)*100):0)+'%';}}addEventListener('scroll',onScroll,{{passive:true}});onScroll();}})();</script>
</body>
</html>
'''
out.write_text(page, encoding='utf-8')
print(out)
print('Now add an item to js/newsletters.js with file:"newsletters/' + date + '.html"')
