# Automação do Blog — Fases 2 e 3 — Design

## Contexto

Continuação da Fase 1 (infra GEO, `2026-08-09-geo-infra-fase1-design.md`).
Fonte: `estrategia-blog.md` + `calendario-conteudo-dexi-2026-S2.xlsx`
(fornecidos pela usuária), decompostos em 3 fases + 1 projeto à parte (ver
spec da Fase 1). Este documento cobre as Fases 2 e 3.

**Decisões de negócio confirmadas com a usuária nesta sessão:**
- Automotivo e Construção têm dado proprietário; Clínicas não tem prova
  sólida ainda, mas a usuária quer publicar sobre o tema mesmo assim.
- **Sem Supabase para o blog** — os posts (600 legados + novos automatizados)
  não usam o Supabase. Supabase continua servindo só os `leads`, como já
  fazia. Banco interno (SQLite, `node:sqlite`) na VPS, mesmo padrão já
  validado nas notícias.
- **Os 600 posts legados não são migrados.** `lib/blog-data.ts` continua
  como está, sem nenhuma mudança — zero risco pra URLs já indexadas. O
  banco novo só recebe posts gerados a partir de agora.
- LLM: **Gemini** (`gemini-flash-latest`, testado e funcional com a chave
  fornecida).
- Fluxo de publicação: **sem aprovação humana**. O `Validator` automático é
  o único gate — se o post passa nas checagens, publica direto; se falha,
  fica como `draft`.
- **Antes de ligar qualquer automação recorrente (cron)**, gerar um lote de
  3 posts de teste e a usuária revisa a qualidade.

## Fase 2 — Banco interno do blog

### Schema (SQLite, `data/blog-posts.db`)

```sql
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY,             -- slug
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,           -- markdown, mesmo formato de lib/blog-data.ts
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  author TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  focus_keyword TEXT,
  status TEXT NOT NULL,            -- 'draft' | 'published'
  vertical TEXT,                   -- Automotivo | Clínicas de procedimentos | Construção e incorporação
  cluster TEXT,
  pillar_link TEXT,                -- ex: /base-morta-de-leads
  validator_report TEXT,           -- JSON com o resultado de cada checagem
  created_at TEXT NOT NULL,
  published_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status, published_at DESC);
```

### `lib/blog-db.ts`

Espelha `lib/news-db.ts`. Funções: `getPublishedDbPosts()`,
`getDbPostBySlug(slug)`, `insertPost(post, status)`, `publishPost(id)`,
`markAsDraft(id, validatorReport)`.

### Integração com o blog existente

`lib/blog-data.ts` expõe `BlogArticle` (slug, title, excerpt, category,
readTime, date, author, metaDescription, focusKeyword, content). Os posts
do banco novo usam a mesma forma (adaptador em `lib/blog-db.ts` que
converte a linha do SQLite pra `BlogArticle`, com `date` = `published_at`).

- `app/blog/page.tsx`: `[...getAllArticles(), ...getPublishedDbPosts()]`,
  ordenado por data, igual já faz hoje só com o array estático.
- `app/blog/[slug]/page.tsx`: tenta `getArticleBySlug` (legado) primeiro,
  se não achar tenta `getDbPostBySlug` (banco). Mesmo template de
  renderização pros dois — já funciona porque a forma é idêntica.

## Fase 3 — Motor de geração (Gemini)

### Escopo: só Faixa B (satélite)

102 pautas importadas de `calendario-conteudo-dexi-2026-S2.xlsx`, filtradas
pra `Faixa == 'B'`, exportadas em `scripts/seed-data/faixa-b-topics.json`
(102 itens, campos: date, week, weekday, vertical, cluster, faixa, type,
title, keyword, requiredData, dataSource, geoFormat, pillarLink,
productionMode, owner, status). Faixa A (âncora, exige dado proprietário e
escrita humana pesada) e Faixa C (calculadoras/glossários/comparativos,
projeto de ferramentas à parte) ficam fora da automação.

### Schema (SQLite, `data/topic-bank.db`)

```sql
CREATE TABLE IF NOT EXISTS topics (
  id TEXT PRIMARY KEY,              -- hash do título normalizado
  title TEXT NOT NULL,
  vertical TEXT NOT NULL,
  cluster TEXT NOT NULL,
  keyword TEXT NOT NULL,
  required_data TEXT,
  data_source TEXT,
  pillar_link TEXT,
  status TEXT NOT NULL,             -- 'backlog' | 'generated' | 'skipped_duplicate'
  generated_post_id TEXT,           -- referencia blog_posts.id quando gerado
  created_at TEXT NOT NULL
);
```

### Pipeline (`scripts/generate-blog-post.mjs`)

Roda um item por vez (assinatura de script standalone, mesmo padrão de
`ingest-news.mjs`, disparado manualmente ou via cron):

1. **Seleciona a próxima pauta**: primeira linha `topics` com
   `status='backlog'`, ordenada por `week` (segue a ordem do calendário).
2. **`Deduplicator`**: normaliza o título da pauta e compara (similaridade
   de palavras-chave em comum, sem chamada de API extra) contra títulos já
   publicados (`blog_posts` + posts legados de `lib/blog-data.ts`, mesma
   vertical). Se muito parecido (>60% de palavras significativas em
   comum), marca a pauta como `skipped_duplicate` e passa pra próxima.
3. **`Generator`**: monta um prompt com a pauta (título, keyword, dado
   exigido, fonte do dado, vertical, cluster, link do pilar) + as regras
   obrigatórias da spec técnica do documento original:
   - Bloco "Resposta rápida" de 40–60 palavras no topo.
   - Pelo menos 1 H2 em forma de pergunta.
   - Toda afirmação numérica com entidade nomeada + data.
   - Tabela em HTML (Markdown table), nunca imagem.
   - Pelo menos 2 links internos pro `pillarLink` da pauta (como link
     Markdown relativo).
   Chama a API do Gemini (`gemini-flash-latest`, REST, chave em
   `GEMINI_API_KEY`), pede o post em Markdown com título, excerpt e corpo
   claramente demarcados.
4. **`Validator`**: aplica as checagens automáticas sobre o texto gerado:
   - Tem bloco de resposta rápida com 30–70 palavras (margem sobre o
     40–60 pedido, pra não ser rígido demais) logo no início?
   - Tem pelo menos 1 H2 terminando em `?`?
   - Tem pelo menos uma afirmação com padrão "Segundo [algo]" ou
     "De acordo com [algo]" próxima de um número?
   - Tem pelo menos 2 links Markdown apontando pro `pillarLink` da pauta?
   - (Regra dura, só vertical Clínicas) não contém claim de resultado
     clínico (termos como "cura", "elimina", "garante resultado").
   Grava o relatório (`validator_report`, JSON com cada checagem
   true/false) independente do resultado.
5. **Publica ou não**: passou em tudo → `blog_posts.status='published'`,
   `published_at=agora`. Falhou em qualquer checagem →
   `blog_posts.status='draft'` (não aparece no `/blog`, fica só no banco
   pra revisão manual depois). De qualquer forma, marca a pauta em
   `topics` como `generated` e associa o `generated_post_id`.

### Antes do cron

Rodar o script 3x manualmente (pautas reais do backlog), a usuária revisa
o resultado (`/blog` local ou consulta direta ao banco) antes de decidir
a frequência do cron. Frequência sugerida depois da validação: 2/semana
por vertical (6/semana no total), batendo o ritmo do calendário original
(102 posts ÷ 17 semanas ≈ 6/semana).

## Fora de escopo (mantido da Fase 1)

- Faixa A (âncoras com dado proprietário) — continua sendo escrita humana,
  fora da automação.
- Faixa C (calculadoras, glossários, comparativos) — projeto de engenharia
  à parte.
- `FAQPage` schema — ainda não incluído nesta fase; pode entrar depois como
  extensão do `Generator`/`Validator` (pedir bloco de FAQ estruturado e
  injetar o schema), mas não é parte do escopo aprovado agora.
- `llm_probe.py` (bateria mensal de prompts pra medir citação em LLM) —
  monitoramento, não geração; não especificado agora.
