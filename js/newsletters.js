/* CyberSec News — newsletter data + renderers */
var NEWSLETTERS = [
  { id:"2026-08-17", edition:"#33", date:"17 AGO 2026", title:"KEV no stack de dados; agentes e modelos agora entram no plano de contenção",
    summary:"MLflow, Windows IKE, vCenter, SharePoint, macOS e Ray chegaram ao KEV; o incidente LiteLLM/Trivy mostrou o raio de explosão de CI comprometido; e OpenAI, Anthropic, Google, xAI e controles de chips colocaram capacidade, agentes e infraestrutura de IA na pauta operacional.",
    tags:["CISA KEV","Supply Chain","AI Security","Frontier Models"], stories:15, crit:6, file:"newsletters/2026-08-17.html" },
  { id:"2026-08-10", edition:"#32", date:"10 AGO 2026", title:"KEV em tudo que administra; IA no terminal, no peso aberto e na agenda de governo",
    summary:"LoadMaster, TeamCity, N-central, Langflow e Tomcat entraram no KEV; Cisco FMC e Metabase expuseram o custo de zero-days; e VPNs seguem na mira de ransomware. Na IA, OpenAI e Anthropic mexeram em salvaguardas de fronteira, Meta lançou Muse Code, Alibaba abriu a nova geração Qwen e Mistral levou moderação para open weights.",
    tags:["CISA KEV","Zero-Day","VPN","AI Agents","Open Weights"], stories:15, crit:5, file:"newsletters/2026-08-10.html" },
  { id:"2026-08-03", edition:"#31", date:"03 AGO 2026", title:"KEV na borda e agentes de fronteira: a semana em que “ambiente de teste” deixou de ser desculpa",
    summary:"Cisco FMC, Arista VeloCloud e FortiOS entraram no KEV; JFrog corrigiu Artifactory; e pipelines de datasets mostraram como HDF5 e Jinja2 viram leitura e execução. Na IA, GPT-5.6 chegou em GA, OpenAI/Hugging Face detalharam uma intrusão durante avaliação, Anthropic revelou três incidentes em evals, Mythos mexeu com cripto e GLM-5.2 apareceu na resposta forense.",
    tags:["CISA KEV","Supply Chain","AI Agents","Frontier AI","PQC"], stories:15, crit:4, file:"newsletters/2026-08-03.html" },
  { id:"2026-07-27", edition:"#30", date:"27 JUL 2026", title:"SharePoint, Langflow, Fastjson e VPNs em exploração; Opus 5 e Presence levam agentes para produção",
    summary:"Semana com SharePoint roubando machine keys, Check Point SmartConsole explorado, Langflow no KEV da CISA, Fastjson 1.x com RCE crítica, Cl0p em Windchill/FlexPLM, GlobalProtect explorado, GitHub e PyPI colocando cooldown contra supply chain, SourTrade montando malware no browser, DNS de Wi-Fi de hotel roubando Microsoft 365 e ClickFix no Steam; na IA, Claude Opus 5 mexe na fronteira de custo, OpenAI Presence industrializa agentes, segurança long-horizon vira prioridade, Hermes mostra agente em pós-exploração e coding agents começam a parecer intrusão para EDR.",
    tags:["CISA KEV","RCE","Supply Chain","VPN","AI Agents"], stories:15, crit:5, file:"newsletters/2026-07-27.html" },
  { id:"2026-07-20", edition:"#29", date:"20 JUL 2026", title:"FortiSandbox, Oracle, WordPress e AsyncAPI; Kimi K3 e Qwen 3.8 sobem a régua da IA aberta",
    summary:"Semana com FortiSandbox e Oracle E-Business Suite no KEV da CISA, WordPress Core em RCE, AsyncAPI comprometido via GitHub Actions, SonicWall SMA explorado por zero-days, NGINX corrigindo falhas, ACR Stealer, ViPNet, 7-Zip e ransomware na Fairlife; e IA puxando estratégia com NadMesh, GPT-Red, agentes com privilégio mínimo, Android aberto a assistentes rivais, ROI agentic, Kimi K3 e Qwen 3.8 acelerando a disputa de modelos open-weight.",
    tags:["CISA KEV","RCE","Supply Chain","AI Agents","Open Weights"], stories:17, crit:4, file:"newsletters/2026-07-20.html" },
  { id:"2026-07-13", edition:"#28", date:"13 JUL 2026", title:"ShareFile em alerta, Gitea explorado, CMS no KEV e agentes de IA virando risco de build",
    summary:"Semana com CISA colocando Adobe ColdFusion, Joomla/Langflow, iCagenda e Balbooa no KEV; Progress mandando clientes ShareFile derrubarem Storage Zone Controllers; Gitea Docker sendo explorado por auth bypass; U-Boot, WordPress, RedHook, Injective SDK, OpenMandriva e AssuranceAmerica mostrando que supply chain e dados pessoais seguem caros; e IA puxando a pauta com GPT-5.6 Sol, Claude Fable 5, Microsoft usando AI para achar bugs, Friendly Fire e GitLost/GhostApproval.",
    tags:["CISA KEV","Exploited","Supply Chain","AI Agents","Frontier AI"], stories:15, crit:3, file:"newsletters/2026-07-13.html" },
  { id:"2026-07-06", edition:"#27", date:"06 JUL 2026", title:"SharePoint e SimpleHelp no KEV, Oracle EBS exposto, NetNut desmontado e IA entrando no ransomware",
    summary:"Semana com SharePoint e SimpleHelp entrando no KEV da CISA, Oracle E-Business Suite já sendo explorado, Bad Epoll dando root em Linux/Android, Google derrubando parte da rede NetNut, Coreia do Norte espalhando 108 pacotes maliciosos, ARToken/EvilTokens industrializando phishing de Microsoft 365, breaches em Medtronic e Aflac, e IA aparecendo em ransomware agentic, browsers vulneráveis a prompt injection, GeneBench-Pro, GPT-5.6 Sol e movimentação forte de modelos da Anthropic.",
    tags:["CISA KEV","Exploited","Supply Chain","Data Breach","AI Agents"], stories:16, crit:4, file:"newsletters/2026-07-06.html" },
  { id:"2026-06-29", edition:"#26", date:"29 JUN 2026", title:"Cisco, Windchill e UniFi no KEV; KDDI vaza logins; IA acelera com Sol, Mythos, Fugu e Ornith",
    summary:"Semana com CISA correndo atrás de Cisco Unified CM, PTC Windchill/FlexPLM, Ubiquiti e Lantronix no KEV; KDDI expondo até 14,2 milhões de logins; Polymarket perdendo US$ 3 milhões em supply chain; Bluekit evoluindo para Browser-in-the-Middle; e IA virando disputa de frontier models com GPT-5.6 Sol, Mythos liberado para organizações confiáveis, Sakana Fugu roteando modelos e Ornith-1.0 trazendo self-scaffolding RL para coding agents.",
    tags:["CISA KEV","Supply Chain","Frontier AI","Data Breach","AI Agents"], stories:15, crit:4, file:"newsletters/2026-06-29.html" },
  { id:"2026-06-22", edition:"#25", date:"22 JUN 2026", title:"Splunk e Cisco no KEV, Fortinet sangrando credenciais, NGINX crítico e agentes de IA virando superfície real",
    summary:"Semana com Splunk e Cisco explorados e entrando no KEV da CISA, FortiSandbox e FortiBleed pressionando appliances Fortinet, F5 soltando patch emergencial do NGINX, Gravity SMTP vazando tokens, DragonForce escondendo C2 em relays do Teams, Klue expondo Salesforce via OAuth, e IA aparecendo em AutoJack, Mastra, JetBrains, Agentjacking e espionagem mirando pesquisa de IA.",
    tags:["CISA KEV","Fortinet","Supply Chain","AI Security","Data Breach"], stories:15, crit:5, file:"newsletters/2026-06-22.html" },
  { id:"2026-06-15", edition:"#24", date:"15 JUN 2026", title:"Patch Tuesday monstro, VPN zero-day, AUR envenenado e governo dos EUA puxando freio em modelo de IA",
    summary:"Microsoft veio com 200 falhas e 6 zero-days, Check Point e Ivanti sofreram exploração em VPN/appliance, Arch AUR foi envenenado, PeopleSoft e phpBB quebraram autenticação, e IA entrou na pauta com agentes, worm, exploit dev, AppSec e Fable 5/Mythos 5 suspensos por ordem do governo dos EUA.",
    tags:["Zero-Day","Supply Chain","Data Breach","AI Security","RCE"], stories:15, crit:5, file:"newsletters/2026-06-15.html" },
  { id:"2026-06-08", edition:"#23", date:"08 JUN 2026", title:"WordPress sangrando, SD-WAN sem patch, supply chain npm e IA acelerando o ataque",
    summary:"Semana com C0XMO em DD-WRT, Silent Ransom Group mirando law firms, Everest/Kirki explorados no WordPress, Cisco SD-WAN zero-day, SolarWinds Serv-U no KEV, IronWorm no npm e IA acelerando ransomware, pesquisa de bugs e fraude.",
    tags:["Zero-Day","Supply Chain","WordPress","AI Security","Data Breach"], stories:15, crit:5, file:"newsletters/2026-06-08.html" },
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
