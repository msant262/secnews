/* CyberSec News — newsletter data + renderers */
var NEWSLETTERS = [
  { id:"2026-06-05", edition:"#22", date:"05 JUN 2026", title:"15 alertas da semana: borda explorada, supply chain com marca grande, vazamentos em massa e IA virando superfície real",
    summary:"Semana pesada em segurança: cPanel com ransomware, Red Hat npm/Miasma, PAN-OS, Android explorado, Windows Netlogon, Kali365, ShinyHunters e falhas em agentes de IA.",
    tags:["Ransomware","Supply Chain","CISA KEV","AI Security","Data Breach"], stories:15, crit:5, file:"newsletters/2026-06-05.html" },
  { id:"2026-04-30", edition:"#21", date:"30 ABR 2026", title:"Zero-day no cPanel explorado há meses, supply chain massivo no PyTorch Lightning e SAP npm, e falha \u201cCopy Fail\u201d dá root em todos os Linux",
    summary:"Zero-day crítico no cPanel/WHM explorado desde fevereiro, PyTorch Lightning e SAP npm comprometidos em ataques supply chain, escalação de privilégio no Linux desde 2017, e Coreia do Norte usando IA para gerar malware em pacotes npm.",
    tags:["Zero-Day","Supply Chain","CVE","Linux","APT"], stories:8, crit:3, file:"newsletters/2026-04-30.html" },
  { id:"2026-04-12", edition:"#20", date:"12 ABR 2026", title:"Zero-day no Adobe Acrobat, ransomware na ChipSoft paralisando hospitais, CPU-Z trojanizado e breach massivo na Adobe",
    summary:"Zero-day crítico no Adobe Acrobat Reader explorado há meses, ransomware em massa na ChipSoft paralisando hospitais holandeses, ferramentas CPUID trojanizadas distribuindo STX RAT, e vazamento de 13 milhões de tickets da Adobe.",
    tags:["Zero-Day","Ransomware","Adobe","Supply Chain"], stories:7, crit:2, file:"newsletters/2026-04-12.html" },
  { id:"2026-04-06", edition:"#19", date:"06 ABR 2026", title:"Coreia do Norte compromete Axios, campanha massiva do TeamPCP, zero-days no FortiClient EMS e Chrome, e CVSS 10.0 no Juju",
    summary:"Supply chain devastador compromete Axios (100M+ downloads/semana), campanha TeamPCP em massa, zero-days no FortiClient EMS e Chrome, vulnerabilidade CVSS 10.0 no Juju, e muito mais.",
    tags:["Supply Chain","Zero-Day","NPM","Chrome"], stories:9, crit:3, file:"newsletters/2026-04-06.html" },
  { id:"2026-03-30", edition:"#13", date:"30 MAR 2026", title:"Ataques de suprimento em massa, vulnerabilidades críticas e ameaças emergentes",
    summary:"DarkSword iOS exploit kit com 6 vulnerabilidades, Trivy scanner backdoored em supply chain massivo, GlassWorm force-push malware em 433+ repositórios, PTC Windchill com CVSS 10.0, e Chrome zero-days.",
    tags:["Supply Chain","Zero-Day","Linux","Chrome"], stories:8, crit:2, file:"newsletters/2026-03-30.html" },
  { id:"2026-03-22", edition:"#15", date:"22 MAR 2026", title:"Zero-days em firewall Cisco e n8n, supply chain no Trivy e GlassWorm, e falhas críticas no Linux e Veeam",
    summary:"Cisco Firewall zero-day com CVSS 10.0, n8n zero-click expondo credenciais, Trivy scanner backdoored, GlassWorm em 433+ repositórios Python, CrackArmor no Linux, Telnetd RCE, Veeam RCE (CVSS 9.9), e DarkSword iOS exploit kit.",
    tags:["Zero-Day","Linux","Supply Chain","iOS"], stories:9, crit:3, file:"newsletters/2026-03-22.html" },
  { id:"2026-03-15", edition:"#14", date:"15 MAR 2026", title:"Zero-days do Chrome, vulnerabilidades críticas em Veeam e Linux, e novo vetor de ataque em infraestrutura corporativa",
    summary:"Google corrige dois zero-days do Chrome (CVSS 8.8), Veeam corrige sete RCEs críticas (CVSS 9.9), CrackArmor no Linux, Stryker atacada por grupo iraniano, Telus Digital com vazamento de 1PB, e Operação Synergia III.",
    tags:["Zero-Day","Chrome","Linux","APT"], stories:7, crit:2, file:"newsletters/2026-03-15.html" },
  { id:"2026-03-16", edition:"#12", date:"16 MAR 2026", title:"Zero-days ativos no Chrome e vulnerabilidades críticas em soluções de backup",
    summary:"Google corrige dois zero-days do Chrome em exploração ativa, Veeam corrige múltiplas RCE críticas, Microsoft Office com falha RCE via Preview Pane, grupo iraniano ataca empresa médica dos EUA, e nova tática de flood de phishing em SOCs.",
    tags:["Zero-Day","Chrome","Veeam","APT"], stories:6, crit:2, file:"newsletters/2026-03-16.html" }
];

function tagHtml(tags){ return tags.map(function(t){ return '<span class="badge">'+t+'</span>'; }).join(''); }

/* Editorial cards (Direction A + list) */
function renderFeed(id, limit){
  var c = document.getElementById(id); if(!c) return;
  var items = limit ? NEWSLETTERS.slice(0, limit) : NEWSLETTERS;
  c.innerHTML = items.map(function(nl){
    return '<a class="nl-card card card-hover card-line reveal" href="'+nl.file+'">'+
      '<div class="nl-card-top"><span class="nl-ed">'+nl.edition+'</span>'+
        '<span class="mono-tag">'+nl.date+'</span></div>'+
      '<h3 class="nl-card-title">'+nl.title+'</h3>'+
      '<p class="nl-card-sum">'+nl.summary+'</p>'+
      '<div class="nl-card-foot"><div class="tags">'+tagHtml(nl.tags.slice(0,3))+'</div>'+
        '<span class="nl-read">Ler <svg class="arr" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>'+
    '</a>';
  }).join('');
}

/* Console rows (Direction B) */
function renderRows(id, limit){
  var c = document.getElementById(id); if(!c) return;
  var items = limit ? NEWSLETTERS.slice(0, limit) : NEWSLETTERS;
  c.innerHTML = items.map(function(nl,i){
    return '<a class="feed-row reveal" href="'+nl.file+'">'+
      '<span class="fr-idx mono-tag">'+String(i+1).padStart(2,'0')+'</span>'+
      '<span class="fr-ed">'+nl.edition+'</span>'+
      '<span class="fr-date mono-tag">'+nl.date+'</span>'+
      '<span class="fr-title">'+nl.title+'</span>'+
      '<span class="fr-meta"><span class="sev sev-critical">'+nl.crit+' crít</span><span class="mono-tag">'+nl.stories+' itens</span></span>'+
    '</a>';
  }).join('');
}

/* Archive timeline (newsletter list page) */
function renderArchive(id){
  var c = document.getElementById(id); if(!c) return;
  var rows = NEWSLETTERS.slice(1).map(function(nl){
    return '<a class="arc-item reveal" href="'+nl.file+'">'+
      '<div class="arc-rail"><span class="arc-dot"></span></div>'+
      '<div class="arc-body">'+
        '<div class="arc-meta"><span class="nl-ed sm">'+nl.edition+'</span><span class="mono-tag">'+nl.date+'</span>'+
          '<span class="sev sev-critical">'+nl.crit+' críticas</span></div>'+
        '<h3 class="arc-title">'+nl.title+'</h3>'+
        '<p class="arc-sum">'+nl.summary+'</p>'+
        '<div class="tags">'+tagHtml(nl.tags)+'</div>'+
      '</div></a>';
  }).join('');
  c.innerHTML = rows;
}
