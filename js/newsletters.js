var NEWSLETTERS = [
  {
    id: "2026-04-06",
    edition: "#19",
    date: "06 de Abril, 2026",
    title: "Coreia do Norte compromete Axios, campanha massiva do TeamPCP, zero-days no FortiClient EMS e Chrome, e CVSS 10.0 no Juju",
    summary: "Nesta edição: supply chain devastador compromete Axios (100M+ downloads/semana), campanha TeamPCP em massa, zero-days no FortiClient EMS e Chrome, vulnerabilidade CVSS 10.0 no Juju, e muito mais.",
    tags: ["Supply Chain", "Zero-Day", "NPM", "Ransomware", "Chrome"],
    file: "newsletters/2026-04-06.html"
  },
  {
    id: "2026-03-30",
    edition: "#13",
    date: "30 de Março, 2026",
    title: "Ataques de Suprimento em Massa, Vulnerabilidades Críticas e Ameaças Emergentes",
    summary: "Nesta edição: DarkSword iOS exploit kit com 6 vulnerabilidades, Trivy scanner backdoored em supply chain massivo, GlassWorm force-push malware em 433+ repositórios, PTC Windchill com CVSS 10.0, e Chrome zero-days.",
    tags: ["Supply Chain", "Zero-Day", "Linux", "Chrome", "Ransomware"],
    file: "newsletters/2026-03-30.html"
  },
  {
    id: "2026-03-22",
    edition: "#15",
    date: "22 de Março, 2026",
    title: "Zero-days em Firewall Cisco e n8n, Supply Chain no Trivy e GlassWorm, e Falhas Críticas no Linux e Veeam",
    summary: "Nesta edição: Cisco Firewall zero-day com CVSS 10.0, n8n zero-click expondo credenciais, Trivy scanner backdoored, GlassWorm em 433+ repositórios Python, CrackArmor no Linux, Telnetd RCE, Veeam RCE (CVSS 9.9), e DarkSword iOS exploit kit.",
    tags: ["Zero-Day", "Linux", "Supply Chain", "Backup", "iOS"],
    file: "newsletters/2026-03-22.html"
  },
  {
    id: "2026-03-15",
    edition: "#14",
    date: "15 de Março, 2026",
    title: "Zero-days do Chrome, vulnerabilidades críticas em Veeam e Linux, e novo vetor de ataque em infraestrutura corporativa",
    summary: "Nesta edição: Google corrige dois zero-days do Chrome (CVSS 8.8), Veeam corrige sete RCEs críticas (CVSS 9.9), CrackArmor no Linux, Stryker atacada por grupo iraniano, Telus Digital com vazamento de 1PB, e Operação Synergia III.",
    tags: ["Zero-Day", "Chrome", "Linux", "APT", "Backup"],
    file: "newsletters/2026-03-15.html"
  },
  {
    id: "2026-03-16",
    edition: "#12",
    date: "16 de Março, 2026",
    title: "Zero-days ativos no Chrome e vulnerabilidades críticas em soluções de backup",
    summary: "Nesta edição: Google corrige dois zero-days do Chrome em exploração ativa, Veeam corrige múltiplas vulnerabilidades RCE críticas, Microsoft Office com falha RCE via Preview Pane, grupo iraniano ataca empresa médica dos EUA, e nova tática de flood de phishing em SOCs.",
    tags: ["Zero-Day", "Chrome", "Veeam", "Microsoft", "APT"],
    file: "newsletters/2026-03-16.html"
  }
];

function renderNewsletterCards(containerId, limit) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var items = limit ? NEWSLETTERS.slice(0, limit) : NEWSLETTERS;

  var html = '<div class="row">';
  for (var i = 0; i < items.length; i++) {
    var nl = items[i];
    var tagsHtml = '';
    for (var t = 0; t < nl.tags.length; t++) {
      tagsHtml += '<span class="nl-tag">' + nl.tags[t] + '</span>';
    }

    html += '<div class="col-lg-4 col-md-6">' +
      '<div class="newsletter-card">' +
        '<div class="nl-card-header">' +
          '<span class="nl-edition">' + nl.edition + '</span>' +
          '<span class="nl-date"><i class="fa fa-calendar-alt"></i> ' + nl.date + '</span>' +
        '</div>' +
        '<h3 class="nl-title">' + nl.title + '</h3>' +
        '<p class="nl-summary">' + nl.summary + '</p>' +
        '<div class="nl-tags">' + tagsHtml + '</div>' +
        '<a href="' + nl.file + '" class="btn-default nl-read-btn"><i class="fa fa-book-open"></i> Ler Newsletter <span></span></a>' +
      '</div>' +
    '</div>';
  }
  html += '</div>';

  container.innerHTML = html;
}

function renderNewsletterPage(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  if (NEWSLETTERS.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#c5c5c5;">Nenhuma newsletter publicada ainda.</p>';
    return;
  }

  var html = '';

  // Featured latest newsletter
  var latest = NEWSLETTERS[0];
  var latestTags = '';
  for (var t = 0; t < latest.tags.length; t++) {
    latestTags += '<span class="nl-tag">' + latest.tags[t] + '</span>';
  }

  html += '<div class="nl-featured">' +
    '<div class="nl-featured-badge"><i class="fa fa-star"></i> Edição mais recente</div>' +
    '<div class="row align-items-center">' +
      '<div class="col-lg-7">' +
        '<div class="nl-featured-content">' +
          '<div class="nl-featured-meta">' +
            '<span class="nl-edition-lg">' + latest.edition + '</span>' +
            '<span class="nl-date"><i class="fa fa-calendar-alt"></i> ' + latest.date + '</span>' +
          '</div>' +
          '<h2 class="nl-featured-title">' + latest.title + '</h2>' +
          '<p class="nl-featured-summary">' + latest.summary + '</p>' +
          '<div class="nl-tags">' + latestTags + '</div>' +
          '<a href="' + latest.file + '" class="btn-default"><i class="fa fa-book-open"></i> Ler Newsletter Completa <span></span></a>' +
        '</div>' +
      '</div>' +
      '<div class="col-lg-5">' +
        '<div class="nl-featured-visual">' +
          '<div class="nl-featured-icon-wrap">' +
            '<i class="fa fa-newspaper"></i>' +
          '</div>' +
          '<div class="nl-featured-stats">' +
            '<div class="nl-stat">' +
              '<span class="nl-stat-number">' + NEWSLETTERS.length + '</span>' +
              '<span class="nl-stat-label">Edições</span>' +
            '</div>' +
            '<div class="nl-stat">' +
              '<span class="nl-stat-number">Semanal</span>' +
              '<span class="nl-stat-label">Frequência</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  // Timeline for all editions
  if (NEWSLETTERS.length > 1) {
    html += '<div class="nl-timeline-header">' +
      '<h3><i class="fa fa-archive"></i> Todas as Edições</h3>' +
    '</div>';

    html += '<div class="nl-timeline">';
    for (var i = 1; i < NEWSLETTERS.length; i++) {
      var nl = NEWSLETTERS[i];
      var tagsHtml = '';
      for (var tt = 0; tt < nl.tags.length; tt++) {
        tagsHtml += '<span class="nl-tag">' + nl.tags[tt] + '</span>';
      }

      html += '<div class="nl-timeline-item">' +
        '<div class="nl-timeline-dot"></div>' +
        '<div class="nl-timeline-card">' +
          '<div class="nl-timeline-top">' +
            '<div class="nl-timeline-meta">' +
              '<span class="nl-edition-sm">' + nl.edition + '</span>' +
              '<span class="nl-date"><i class="fa fa-calendar-alt"></i> ' + nl.date + '</span>' +
            '</div>' +
            '<div class="nl-tags">' + tagsHtml + '</div>' +
          '</div>' +
          '<h4 class="nl-timeline-title">' + nl.title + '</h4>' +
          '<p class="nl-timeline-summary">' + nl.summary + '</p>' +
          '<a href="' + nl.file + '" class="nl-timeline-link"><i class="fa fa-arrow-right"></i> Ler edição completa</a>' +
        '</div>' +
      '</div>';
    }
    html += '</div>';
  }

  container.innerHTML = html;
}
