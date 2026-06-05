/* ============================================================
   CYBERSEC NEWS — shared site chrome (Okami identity)
   Injects header + footer, handles mobile menu, reveal, A/B switch.
   Usage: <body data-page="home" data-variant="a"> ... <script src="js/site.js"></script>
   ============================================================ */
(function () {
  /* ---- brand mark: hexagon shield + threat pulse + cyan blip (clean at small sizes) ---- */
  var MARK = '<svg class="brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M16 2.6 L27.3 9 V22 L16 28.4 L4.7 22 V9 Z" style="stroke:var(--ok-orange)" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M7.6 16 H11.4 L13.7 10.8 L17.2 21.4 L19.3 16 H22.4" style="stroke:var(--ok-bone)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<circle cx="24.3" cy="16" r="1.7" style="fill:var(--ok-cyan)"/>' +
    '</svg>';
  window.CSN_MARK = MARK;

  var BASE = '';
  function local(path) { return BASE + path; }

  function brand() {
    return '<a class="nav-brand" href="' + local('index.html') + '" title="CyberSec News">' + MARK +
      '<span class="brand-word">CYBERSEC<b>NEWS</b></span></a>';
  }

  /* social icons */
  var IC = {
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.6.6 0 0 1-.86.2c-2.35-1.43-5.3-1.76-8.79-.96a.62.62 0 1 1-.28-1.21c3.82-.88 7.1-.5 9.73 1.11.3.18.39.57.2.86zm1.23-2.74a.78.78 0 0 1-1.07.26c-2.69-1.66-6.8-2.14-9.98-1.17a.78.78 0 1 1-.45-1.49c3.64-1.1 8.17-.57 11.25 1.33.36.22.48.7.25 1.07zm.1-2.85C14.82 8.94 9.5 8.76 6.42 9.7a.93.93 0 1 1-.54-1.78c3.53-1.07 9.4-.87 13.1 1.33a.93.93 0 1 1-.95 1.6z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21H17.6v-5.4c0-1.3 0-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.62.07 4.81s0 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.56 2.2 15.19 2.2 12s0-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.2 8.8 2.2 12 2.2zm0 1.9c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.6-.07-4.74-.07zm0 3.24a4.66 4.66 0 1 1 0 9.32 4.66 4.66 0 0 1 0-9.32zm0 7.69a3.03 3.03 0 1 0 0-6.06 3.03 3.03 0 0 0 0 6.06zm5.94-7.9a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0z"/></svg>'
  };

  var SOCIAL = [
    ['https://www.youtube.com/@CyberSecNews', 'YouTube', IC.youtube],
    ['https://open.spotify.com/show/4E8K5cTNWYnU6XiihlzNPV', 'Spotify', IC.spotify],
    ['https://www.linkedin.com/in/marcosvssantos/', 'LinkedIn', IC.linkedin],
    ['#', 'Instagram', IC.instagram]
  ];
  function socialHtml() {
    return SOCIAL.map(function (s) {
      return '<a href="' + s[0] + '" target="_blank" rel="noopener" title="' + s[1] + '">' + s[2] + '</a>';
    }).join('');
  }

  /* platform strip */
  var PLAT = [
    ['Spotify', 'https://open.spotify.com/show/4E8K5cTNWYnU6XiihlzNPV', IC.spotify],
    ['Apple Podcasts', 'https://podcasts.apple.com/de/podcast/cybersec-news/id1740119597',
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-1.6 19.87c-.13-.4-.12-.95-.02-1.4l.66-2.8c-.3-.6-.46-1.27-.46-1.97a3.42 3.42 0 0 1 6.84 0c0 .7-.16 1.37-.46 1.97l.66 2.8c.1.45.11 1 .98 1.4A10 10 0 0 0 12 2zm0 4.3a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4zm0 9.1c.78 0 1.41.63 1.41 1.41 0 .27-.08.53-.21.74l-.01 2.93A1.2 1.2 0 0 1 12 21.6a1.2 1.2 0 0 1-1.18-1.12l-.01-2.93a1.4 1.4 0 0 1-.21-.74c0-.78.63-1.41 1.4-1.41z"/></svg>'],
    ['Deezer', 'https://www.deezer.com/en/show/1000843631',
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h4v3h-4zM19 9.5h4v3h-4zM13.7 9.5h4v3h-4zM19 14h4v3h-4zM13.7 14h4v3h-4zM8.3 14h4v3h-4zM1 18.5h4v3H1zM6.3 18.5h4v3h-4zM11.7 18.5h4v3h-4zM17 18.5h4v3h-4z"/></svg>'],
    ['YouTube', 'https://www.youtube.com/@CyberSecNews', IC.youtube],
    ['Amazon Music', 'https://music.amazon.com.br/podcasts/e95fb2ce-9840-49a5-a337-442be147d668/cybersec-news',
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4.6a3.3 3.3 0 0 1 3.3 3.3v2.3a3.3 3.3 0 0 1-6.05 1.83l1.5-.98a1.5 1.5 0 0 0 2.75-.85V9.9a1.5 1.5 0 0 0-3 0v.6H8.7v-.6A3.3 3.3 0 0 1 12 6.6zM6.4 16.2c3.5 1.9 7.7 1.9 11.2 0l.5.9c-3.8 2.2-8.4 2.2-12.2 0z"/></svg>']
  ];
  window.platformsHtml = function () {
    return PLAT.map(function (p) {
      return '<a class="plat" href="' + p[1] + '" target="_blank" rel="noopener">' + p[2] + p[0] + '</a>';
    }).join('');
  };

  /* category → accent. Orange = primary; cyan + magenta spread across data tags */
  var TAGMAP = {
    'supply chain': 'magenta', 'npm': 'magenta', 'apt': 'magenta', 'ransomware': 'magenta', 'dprk': 'magenta', 'phishing': 'magenta',
    'zero-day': 'cyan', 'cve': 'cyan', 'chrome': 'cyan', 'cloud': 'cyan', 'ios': 'cyan', 'firewall': 'cyan',
    'linux': 'orange', 'malware': 'orange', 'backup': 'orange', 'adobe': 'orange', 'microsoft': 'orange',
    'veeam': 'orange', 'fintech': 'orange', 'defi': 'orange'
  };
  window.colorizeTags = function (root) {
    (root || document).querySelectorAll('.badge').forEach(function (b) {
      if (b.classList.contains('no-color')) return;
      if (/badge-(orange|cyan|magenta|solid)/.test(b.className)) return;
      var c = TAGMAP[b.textContent.trim().toLowerCase()];
      if (c) b.classList.add('badge-' + c);
    });
  };

  var NAV = [
    ['home', 'Home', 'index.html'],
    ['newsletter', 'Newsletter', 'newsletter.html'],
    ['equipe', 'Equipe', 'equipe.html'],
    ['patrocinios', 'Patrocínios', 'patrocinios.html'],
    ['contato', 'Contato', 'contato.html']
  ];

  function buildHeader(active) {
    var items = NAV.map(function (n, i) {
      var idx = String(i + 1).padStart(2, '0');
      var on = n[0] === active ? ' active' : '';
      return '<li><a class="nav-link' + on + '" href="' + local(n[2]) + '"><span class="idx">' + idx + '</span>' + n[1] + '</a></li>';
    }).join('');
    return '<header class="nav"><div class="container nav-inner">' +
      brand() +
      '<button class="nav-toggle" aria-label="Menu" id="navToggle"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>' +
      '<ul class="nav-menu" id="navMenu">' + items + '</ul>' +
      '<div class="nav-right"><div class="nav-social">' + socialHtml() + '</div>' +
        '<a class="btn btn-primary btn-sm lead-magenta" href="' + local('apoie.html') + '" style="margin-left:4px">Apoie</a></div>' +
      '</div></header>';
  }

  function buildFooter() {
    var year = new Date().getFullYear();
    return '<footer class="footer"><div class="container">' +
      '<div class="footer-grid">' +
        '<div><div class="nav-brand" style="pointer-events:none">' + MARK +
          '<span class="brand-word">CYBERSEC<b>NEWS</b></span></div>' +
          '<p class="footer-blurb">Newsletter semanal de cibersegurança com análise técnica profunda e recomendações práticas para quem opera na linha de frente.</p>' +
          '<div class="nav-social" style="margin-top:20px;display:flex">' + socialHtml() + '</div></div>' +
        '<div><h5>Navegação</h5><ul>' +
          NAV.map(function (n) { return '<li><a href="' + local(n[2]) + '">' + n[1] + '</a></li>'; }).join('') +
          '<li><a href="' + local('apoie.html') + '">Apoie o projeto</a></li></ul></div>' +
        '<div><h5>Plataformas</h5><ul>' +
          '<li><a href="https://open.spotify.com/show/4E8K5cTNWYnU6XiihlzNPV" target="_blank" rel="noopener">Spotify</a></li>' +
          '<li><a href="https://podcasts.apple.com/de/podcast/cybersec-news/id1740119597" target="_blank" rel="noopener">Apple Podcasts</a></li>' +
          '<li><a href="https://www.deezer.com/en/show/1000843631" target="_blank" rel="noopener">Deezer</a></li>' +
          '<li><a href="https://www.youtube.com/@CyberSecNews" target="_blank" rel="noopener">YouTube</a></li>' +
          '<li><a href="' + local('logos.html') + '">Sistema de marca</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-bottom"><span>© ' + year + ' CYBERSEC NEWS · São Bernardo do Campo · SP</span>' +
        '<span>VISUAL_SYSTEM = OKAMI · v0.2.0</span></div>' +
      '</div></footer>';
  }

  function init() {
    var body = document.body;
    BASE = body.getAttribute('data-base') || '';
    var active = body.getAttribute('data-page') || '';
    var headSlot = document.getElementById('site-header');
    var footSlot = document.getElementById('site-footer');
    if (headSlot) headSlot.innerHTML = buildHeader(active);
    if (footSlot) footSlot.innerHTML = buildFooter();

    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    if (toggle && menu) toggle.addEventListener('click', function () { menu.classList.toggle('open'); });

    /* variant switch removed for production: the delivered redesign uses the editorial home. */

    /* reveal */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    window.colorizeTags();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
