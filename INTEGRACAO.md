# Integração dos dois ZIPs — o que foi feito

**Base pública:** `site-para-publicar-SEO-v2-corrigido.zip` (visual, textos, SEO, correções mobile, fotos dos cases).
**Adicionado do `site-v6.zip`:** pasta `_editor/` e os atalhos `ABRIR-EDITOR.bat` / `ABRIR-EDITOR.command`.

## Arquitetura (não mudou)
O editor é um servidor local (Python, só em `127.0.0.1`, token por sessão, sem senhas). Ele grava:
`js/projects-data.js` (cases), `js/config.js` (contato, preços, marca) e `sitemap.xml`, e envia as fotos para `public/images/projects/<slug>/`.
O site público lê exatamente esses mesmos arquivos. Uma única fonte de dados: o que você salva no editor aparece no site.

## Único ajuste no editor
O editor regenerava o `sitemap.xml` com o domínio antigo (`.com.br`) e incluindo as páginas de cada case, que no site atual são `noindex`.
Agora ele gera o mesmo sitemap do site publicado (domínio vindo do config, sem as páginas `noindex`).

## Cases (3, sem duplicar nem perder)
Os dois ZIPs tinham os mesmos 3 endereços (slugs): `corte-barbearia`, `mesa-restaurante`, `servico-local`.
Vale a versão mais recente (ZIP 1): Retiro Desperta! 2k26, Praça Rippa e SEU SERVIÇO., com as fotos reais.
Os textos antigos do ZIP 2 (CORTE., mesa.) ficaram guardados em `_editor/original-v6/`, e as imagens `.svg` conceituais continuam em `public/images/projects/`.

## Seção "Sobre mim"
Foto em `public/images/brand/igor-cabral.jpg` (já incluída). Para trocar, substitua o arquivo mantendo o nome. Se o arquivo não existir, o bloco volta ao fundo escuro com o texto, sem erro.

## Seção "Instagram é vitrine. Site é endereço."
Mantida a solução do ZIP 1: no desktop, efeito sticky original; no celular, o título fica fixo e cada benefício entra um por vez cobrindo o anterior, sem sobreposição de texto.

## Segurança
Sem senhas, chaves ou tokens no código. O token do editor é gerado a cada abertura. `_editor/`, `ABRIR-EDITOR.*`, `GUIA-EDICAO.md` e este arquivo ficam fora do deploy (`.vercelignore`).
