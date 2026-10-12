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

## Feito em 12/10

- **Inventário aplicado:** a Lorrayne mandou seguir a sugestão da triagem. Saíram com 410 os 495 posts do WordPress marcados 410, mais dois que a triagem deixou passar (notícia de câncer e TI hospitalar). Todos os destinos dos 89 redirects estavam entre eles, então as origens também passaram a responder 410 e `lib/blog-redirects.ts` ficou vazio. Os 5 posts do WordPress que sobraram passaram pelo revisor (abaixo): 4 reprovados e 1 com correção pedida. Texto fixo do WordPress não passa pelo redator, então saíram todos com 410 e o blog ficou só com os posts da automação.
- **Automação do blog:** o agendamento duplicado do crontab do root (07:00, segunda a sábado) saiu; backup em `/root/crontab-backup-2026-10-12.txt`. Fica só `/etc/cron.d/dexi-blog-post`, às 09:00 de Brasília.
- **Agente revisor** (`lib/revisor-blog.ts`), porque não há ninguém para revisar post a post. O post só vai ao ar com "aprovado":
  1. checagens fixas sem IA (sobra de prompt, texto em inglês, "emite boleto", "carteira de ativos", ROI garantido);
  2. cada link externo citado é aberto pelo leitor da Jina e o texto da página vai para o revisor: número de mercado sem link, com link que não abre ou cuja página não mostra o número é tratado como inventado;
  3. um modelo diferente do redator (gemini-3.8-flash; o redator é o gemini-3.5-flash) confere tudo contra `lib/regras-editoriais.ts` e aponta trecho, regra e correção.
  - "corrigir": o redator reescreve e o revisor confere de novo, até 2 vezes. "reprovado", "pendente" (falha do modelo) ou sem aprovação depois das correções: rascunho, fora do site. O parecer fica em `blog_posts.review_report`.
  - O validador estrutural deixou de exigir um número com fonte em todo post: essa exigência empurrava o modelo a inventar a fonte.
  - A chave do Gemini está no plano gratuito: sem modelos Pro e sem busca do Google. Por isso a conferência de fonte abre os links em vez de pesquisar.
- **Revisão dos posts que já estavam no ar:** `scripts/revisar-blog.mjs` (ver cabeçalho). Corrige no mesmo endereço o que dá para corrigir e marca "removido" o resto; post "removido" responde 410 pelo `proxy.ts`, sem precisar entrar em `lib/blog-removidos.ts`. Roda todo dia às 10:30 de Brasília (`/etc/cron.d/dexi-blog-revisao`, `--aplicar --limite 4`), depois do post do dia.
- **Cota do Gemini:** a chave está no plano gratuito, com 20 chamadas por dia por modelo. O post do dia gasta de 2 a 6; com o limite de 4 posts por execução, a revisão dos 80 antigos leva perto de três semanas. Com faturamento ativado na chave, dá para subir o `--limite` e terminar em um dia. Modelo sobrecarregado (503) ou sem cota fica de lado e o reserva assume (`MODELOS_REDATOR`, `MODELOS_REVISOR`, trocáveis por `GEMINI_MODELOS_REDATOR` e `GEMINI_MODELOS_REVISOR`).
- **Comparativos:** os dois eram texto de IA sem fonte. O de Syonet saiu (301 para o de CRM); o de CRM foi reescrito só com o posicionamento aprovado; entrou `/comparativo/robo-de-atendimento-vs-inteligencia-comercial` (item 3.3 do handoff). A página mostra a data de revisão e, quando houver, as fontes.
- **sameAs:** Instagram oficial (@dexi.digital) entrou; LinkedIn e GitHub conferidos (existem e são da Dexi).

## Feito em 12/10, segunda parte: páginas de SEO e integrações

- A Lorrayne confirmou que **não existe integração pronta** com nenhum sistema de mercado: a Dexi integra quando o projeto de um cliente precisa. Isso entrou em `lib/regras-editoriais.ts` (vale para o blog e o revisor) e saiu do site: chips "Syonet / AutoConf / NBS em breve" em /automotivo e /o-fykos, exemplos com Syonet nos textos legais dos dois sites (data de atualização 12/10).
- **Saíram com 410** (`lib/paginas-removidas.ts`, servido pelo `proxy.ts`): Checklist de Qualidade e o PDF que nunca existiu; integrações com portais e com Google/Meta Ads; soluções de integração com DMS, atendimento omnichannel e CRM unificado.
- **/servicos/ia-para-empresas** (Concierge Digital "treinado em Neurolinguística", perfilamento psicológico) virou 308 para /o-fykos; rodapé, 404, glossário legado e redirects antigos apontam direto para /o-fykos.
- Reescritos só com o que o Fykos faz: fábricas, grupos, /setores/automotivo-premium, soluções, guias, glossário, pilares, WhatsApp, /servicos e as duas páginas de serviço, /metodologia (sem prazos de implementação), FAQ (uso de IA alinhado à política de privacidade), calculadora ("premissa" no lugar de "validado em duas operações").
- Varredura do texto renderizado das 58 páginas fora do blog: sem travessão e sem as afirmações proibidas.
- Ficou de fora, para a Lorrayne: /cases (dados de operação real) e o card "Sócio Fundador" sem nome em /sobre.

## Quando o CSV voltar com as decisões

1. Linhas com `410`: slug em `lib/blog-removidos.ts` e bloco removido de `lib/blog-data.ts` (post da automação: apagar a linha em `data/blog-posts.db` na VPS).
2. Linhas com `301`: par em `lib/blog-redirects.ts` e bloco removido de `lib/blog-data.ts`.
3. Rodar `node --test lib/*.test.ts`: o teste de consistência pega cadeia, sobreposição e link interno quebrado.
4. Depois do deploy: `curl -sI` em amostras, sitemap sem as URLs, reenviar o sitemap no Search Console.

## Depende da Lorrayne (atualizado em 12/10)

Resolvido em 12/10: decisão do CSV, automação do blog, `sameAs`, textos dos comparativos (eram de IA). Autoria: a Organization continua como autora (não precisa ser pessoa; ver relatório de 12/10).

Ainda em aberto:

- Página `/integracoes/<sistema>` só quando houver integração feita para um cliente (em 12/10 não há nenhuma).
- Comparativo com concorrente citado por nome (Syonet, Dealerspace) só com fatos tirados do material público dele, com link e data em `fontes`.
