# SEO e visibilidade em IA: limpeza do blog

Origem: handoff de SEO de 11/10/2026 (Fase 1 até 18/10, Fase 2 até 31/10, Fase 3 até 14/11). A Lorrayne aprova conteúdo e decide o que sai.

## O que o diagnóstico errou (conferido no site em 11/10)

- O blog tinha **597 posts** no sitemap, não ~270: 517 migrados do WordPress (`lib/blog-data.ts`) e 80 da automação (banco SQLite na VPS).
- O sitemap **não estava cortado**: XML válido, 662 URLs, todas respondendo 200.
- **Já havia JSON-LD**: Organization e WebSite em toda página, Article e BreadcrumbList nos posts, FAQPage nas páginas de SEO.
- O regex de tema do handoff marcava 11 posts bons da automação para remoção (não tinha imobiliário nem estética) e deixava passar notícia de chip e de resultado trimestral (aceitava "dados" e "receita" soltos). A triagem usada está em `lib/blog-triagem.ts`.

## Feito em 11/10

- **410:** `proxy.ts` responde 410 com `X-Robots-Tag: noindex` para os slugs de `lib/blog-removidos.ts`. Entraram os 10 casos confirmados do item 1.2.
- **301:** o canônico da família "habilidades" ganhou o slug `habilidades-time-tecnico-gerar-receita`; os 79 redirects de ago/2026 apontam direto para ele (um salto). As quatro consolidações do item 1.3 entraram em `lib/blog-redirects.ts`. Nada das origens foi juntado: o que tinham de diferente eram "cases" e ROI sem fonte.
- Os posts removidos e redirecionados saíram de `lib/blog-data.ts`, e com isso do sitemap, do /blog e do llms-full.txt. `lib/blog-removidos.test.ts` impede slug nas duas listas, redirect em cadeia, destino inexistente e link interno para post removido.
- **Sitemap com datas reais:** `lib/datas-paginas.ts` usa o último commit nos arquivos de cada página; listas (blog, pilares, notícias) usam o conteúdo mais novo. Duas leituras seguidas devolvem as mesmas datas.
- **Canonical:** 633 das 662 URLs não tinham. O layout agora declara `canonical: './'`, resolvido para o caminho de cada página, sem query string.
- Legenda de imagem do WordPress (`[caption]`) saiu da renderização dos posts antigos.
- **JSON-LD:** autor dos posts com o mesmo nome do nó Organization; BreadcrumbList no comparativo, nas integrações, no glossário e no /blog; SoftwareApplication do Fykos só em /o-fykos (o teste do Google acusa erro sem preço, e o Fykos não tem preço público).
- **Inventário:** `scripts/inventario-blog.mjs` gera o CSV para a decisão da Lorrayne.

## Quando o CSV voltar com as decisões

1. Linhas com `410`: slug em `lib/blog-removidos.ts` e bloco removido de `lib/blog-data.ts` (post da automação: apagar a linha em `data/blog-posts.db` na VPS).
2. Linhas com `301`: par em `lib/blog-redirects.ts` e bloco removido de `lib/blog-data.ts`.
3. Rodar `node --test lib/*.test.ts`: o teste de consistência pega cadeia, sobreposição e link interno quebrado.
4. Depois do deploy: `curl -sI` em amostras, sitemap sem as URLs, reenviar o sitemap no Search Console.

## Depende da Lorrayne

- Decisão do CSV (prazo 14/10).
- `sameAs` da Organization: hoje LinkedIn e GitHub; confirmar que são os perfis oficiais e mandar os outros.
- Autoria real: nome, bio curta e se a pessoa assina também os posts antigos que ficarem.
- Lista de integrações reais (Syonet, NBS, Dealernet, Dealerspace) antes de qualquer página `/integracoes/<sistema>`.
- Textos e fontes dos comparativos. O `dexi-vs-syonet` atual tem afirmações sem fonte sobre o concorrente e números sobre o Fykos ("< 30 segundos", "qualquer DMS").
- A automação do blog publica sozinha, sem revisão humana, e roda duas vezes por dia (crontab do root às 07:00 de segunda a sábado e `/etc/cron.d/dexi-blog-post` às 09:00). O handoff pede revisão humana antes de publicar.
