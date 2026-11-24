# Guia rápido — como editar o site

Você **não precisa mexer em código**. Tudo é feito pelo editor.

## 1. Abrir o editor
- **Windows:** dois cliques em `ABRIR-EDITOR.bat`
- **Mac / Linux:** dois cliques em `ABRIR-EDITOR.command`

O navegador abre sozinho. Deixe a janela preta aberta enquanto estiver editando.
(Precisa do Python instalado — é gratuito: python.org/downloads)

## 2. Criar um projeto
1. Clique em **+ Novo projeto** e digite só o nome.
2. Arraste as fotos para a área tracejada (a primeira vira a capa).
3. Preencha tipo, segmento e uma descrição curta.
4. Clique em **Pronto**.

Pronto. Não existe botão de salvar: **tudo é salvo automaticamente** (veja "Tudo salvo" no topo).
As fotos são reduzidas e convertidas para WebP sozinhas, e o endereço do projeto e o sitemap são criados automaticamente.

## 3. Mudar as coisas
| Quero… | Como |
|---|---|
| Trocar a ordem dos projetos | Arraste o cartão (ou use as setas ← →) |
| Mostrar / tirar da página inicial | Clique na etiqueta **★ Na home** do cartão |
| Trocar a capa | No projeto, passe o mouse na foto e clique **★ Capa** |
| Remover uma foto | Passe o mouse na foto e clique no **×** |
| Duplicar ou excluir um projeto | Abra o projeto e use os botões no rodapé |
| Mudar WhatsApp, e-mail, Instagram, preços | Aba **Dados do site** |

A página inicial mostra os **3 primeiros** projetos marcados como "Na home". Projetos novos entram no começo da lista.

## 4. Publicar
Clique em **Publicar** (canto superior direito).
- Se a pasta estiver ligada ao GitHub, o botão envia tudo e a Vercel atualiza o site em ~1 minuto.
- Se não estiver, o botão oferece um ZIP pronto para enviar à hospedagem (sem o editor dentro).

## 5. Segurança
- Projetos e fotos excluídos vão para `_editor/lixeira` (dá para recuperar).
- Cópias dos arquivos de dados ficam em `_editor/backups` (últimas 40).
- A pasta `_editor` e os atalhos **não vão para o site** (estão no `.vercelignore` e fora do ZIP de publicação).
