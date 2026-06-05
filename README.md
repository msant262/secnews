# CyberSec News

Site estático da CyberSec News.

## Publicar uma nova newsletter

1. Criar o HTML da edição:

```bash
python3 scripts/create-newsletter.py 2026-05-07 22 "Título da edição"
```

2. Editar `newsletters/YYYY-MM-DD.html` com o conteúdo final.
3. Adicionar a edição no topo do array `NEWSLETTERS` em `js/newsletters.js`:

```js
{ id:"2026-05-07", edition:"#22", date:"07 MAI 2026", title:"Título da edição",
  summary:"Resumo curto para o card do arquivo.",
  tags:["Zero-Day","Supply Chain"], stories:8, crit:2, file:"newsletters/2026-05-07.html" },
```

4. Se for a edição mais recente, atualizar `edicao.html` para redirecionar para ela.
5. Validar localmente:

```bash
python3 -m http.server 8087 --bind 127.0.0.1
```

Arquivos de layout compartilhado:
- `css/okami.css`
- `css/components.css`
- `js/site.js`
- `js/newsletters.js`
