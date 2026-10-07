# igor cabral. — design & web

Site institucional, HTML/CSS/JS puro (sem framework, sem etapa de build). Escolhido por três motivos: performance máxima, SEO simples com uma página real por URL, e deploy sem complicação — arrastar a pasta para qualquer host já funciona.

## Estrutura de arquivos

```
igorcabral-site/
├── index.html                 → Home
├── servicos.html               → Serviços
├── sobre.html                  → Sobre (com placeholders para você preencher)
├── contato.html                → Contato
├── projetos/
│   ├── index.html               → Listagem de projetos (lê de js/projects-data.js)
│   └── projeto.html             → Página de cada case (montada automaticamente pelo slug)
├── css/
│   └── style.css                → Todo o design system do site
├── js/
│   ├── config.js                 → WhatsApp, Instagram, e-mail e preços (gerado pelo editor)
│   ├── projects-data.js          → Dados dos projetos (gerado pelo editor)
│   └── main.js                   → Menu mobile, FAQ, animações, preenchimento automático de links
├── public/images/
│   ├── profile/                  → Foto de perfil
│   ├── projects/                 → Fotos dos projetos
│   ├── system/                   → Favicon e imagem de compartilhamento (og-image)
│   └── README.md                 → Especificação de cada imagem necessária
├── _editor/                     → Editor local (não vai para o site)
├── ABRIR-EDITOR.bat / .command  → Atalhos para abrir o editor
├── sitemap.xml                  → Atualizado automaticamente pelo editor
├── robots.txt
└── README.md                    → Este arquivo
```

## O que alterar, e onde

| O que você quer mudar | Arquivo |
|---|---|
| Número de WhatsApp, Instagram, e-mail, preços | **Editor** → aba “Dados do site” |
| Adicionar, editar, ordenar ou remover projetos | **Editor** → aba “Projetos” |
| Texto da página Sobre | `sobre.html` (procure os comentários `ATENÇÃO IGOR`) |
| Cores, tipografia, espaçamento | `css/style.css` (tudo centralizado no topo, em `:root`) |

Nunca é necessário editar o número de WhatsApp, e-mail ou Instagram em mais de um lugar — o editor grava em `js/config.js` e todas as páginas puxam de lá automaticamente.

## Copy de cada página (resumo)

- **Home**: hero com a headline "Seu negócio já existe na internet. Só não tem endereço.", seguida de problema → benefícios → projetos → como funciona → diferenciais → serviços → FAQ → CTA final.
- **Serviços**: detalha Sites, Landing pages e Presença digital.
- **Sobre**: estrutura pronta, com trechos claramente marcados para você substituir por texto real (nunca invente biografia).
- **Contato**: página enxuta com um único objetivo — levar ao WhatsApp.
- **Projetos**: listagem + páginas individuais com contexto, problema, solução (e resultado, apenas quando houver dado real).

## SEO — title e description por página

| Página | Title | Description |
|---|---|---|
| `/` | igor cabral. — Criação de sites para pequenos negócios em Joinville | Sites profissionais e rápidos para barbearias, salões, restaurantes, clínicas e prestadores de serviço... |
| `/servicos.html` | Serviços — igor cabral. design & web | Sites institucionais, landing pages e presença digital para pequenos negócios em Joinville... |
| `/sobre.html` | Sobre — igor cabral. design & web | Conheça Igor Cabral, responsável por todo o design e desenvolvimento dos sites... |
| `/contato.html` | Contato — igor cabral. design & web | Fale com Igor Cabral pelo WhatsApp e conte sobre o seu negócio... |
| `/projetos/` | Projetos — igor cabral. design & web | Veja os sites e landing pages já criados... |

Cada projeto individual recebe title e description automaticamente a partir do nome e da descrição curta cadastrados no editor.

## Dependências

Nenhuma biblioteca externa de JavaScript. Apenas:
- **Google Fonts** (Archivo) — carregada via `@import` no `style.css`.

Nenhum framework de CSS, nenhum bundler, nenhum passo de build. Isso mantém o site rápido e fácil de manter mesmo sem conhecimento técnico avançado.

## Deploy

Qualquer uma destas opções funciona sem configuração adicional:

1. **Netlify / Vercel**: arraste a pasta inteira do projeto para o painel (ou conecte um repositório Git). Nenhum comando de build é necessário — deixe o campo de build vazio e o diretório de publicação como raiz (`/`).
2. **GitHub Pages**: suba os arquivos para um repositório e ative o Pages nas configurações, apontando para a branch principal.
3. **Qualquer hospedagem compartilhada**: envie os arquivos por FTP para a pasta pública (`public_html` ou equivalente).

Depois do deploy, aponte o domínio **igorcabral.com.br** para o host escolhido (registro DNS tipo A ou CNAME, conforme a documentação do provedor) e ative HTTPS — a maioria dos hosts acima faz isso automaticamente.

## Antes de publicar

- [ ] Substituir as imagens placeholder (ver `public/images/README.md`)
- [ ] Preencher a página Sobre com texto real
- [ ] Adicionar os projetos reais pelo editor (a página de cada case e o `sitemap.xml` são criados sozinhos)
- [ ] Testar o link de WhatsApp e o formulário de contato em um celular real

## Google Analytics 4 e SEO

O site inclui integração preparada para Google Analytics 4 em `js/config.js`. Substitua `G-XXXXXXXXXX` pelo ID de medição real da propriedade GA4. O carregamento da análise ocorre somente após o visitante aceitar a análise no aviso de privacidade.

O Google Analytics é uma ferramenta de medição e **não é um fator direto de ranqueamento**. Para SEO, também configure o domínio no Google Search Console, envie `https://igorcabral.com.br/sitemap.xml`, mantenha páginas rápidas e conteúdo relevante e monitore Core Web Vitals.

## 404

`404.html` é a página personalizada de erro. Em hospedagens estáticas que exigem configuração adicional, a plataforma deve ser configurada para usar esse arquivo como fallback de 404.

## Editor local (V6)

Para criar e editar projetos, mudar contatos e publicar **sem mexer em código**, use o editor:

- **Windows:** dois cliques em `ABRIR-EDITOR.bat`
- **Mac / Linux:** dois cliques em `ABRIR-EDITOR.command`

Tudo é salvo automaticamente, as fotos são otimizadas sozinhas e o botão **Publicar** envia o site (GitHub/Vercel) ou gera um ZIP pronto para hospedar. Passo a passo em `GUIA-EDICAO.md`.

A pasta `_editor/` e os atalhos estão no `.vercelignore` e não vão para o site público.
