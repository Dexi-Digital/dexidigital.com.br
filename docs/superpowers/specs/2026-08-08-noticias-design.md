# Seção de Notícias (Tech/IA) — Design

## Objetivo

Criar uma seção `/noticias` no site que agrega manchetes de tecnologia e
inteligência artificial de duas APIs externas (GNews e WorldNewsAPI), com o
objetivo de atrair tráfego orgânico/SEO e engajamento. Notícias com viés
negativo sobre tech/IA (demissões, crises, ataques, processos) são filtradas
fora do feed.

## Restrição legal de conteúdo

As APIs de notícias licenciam **manchete + resumo curto (snippet) + link para
a fonte**, não o artigo completo. O site funciona como **agregador puro**:
mostra título + resumo curto + imagem (quando houver) + link externo para o
veículo original. Nunca armazenamos ou exibimos o campo de texto completo do
artigo (`content`/`text` das APIs) — só usamos `description`/`summary`,
truncados a ~200 caracteres quando necessário.

## Arquitetura

- **Sem Supabase para isso.** Banco interno na própria VPS: SQLite via
  `node:sqlite` (módulo nativo do Node, disponível desde a v22.5, sem
  dependência externa nem compilação — confirmado disponível no Node v24.x
  que roda tanto local quanto na VPS).
- Arquivo do banco: `data/news.db` (na raiz do projeto, tanto local quanto na
  VPS — deve ser adicionado ao `.gitignore`, é dado gerado, não versionado).
- **Ingestão**: script standalone `scripts/ingest-news.mjs`, executado 1x/dia
  via **crontab da VPS** (não Supabase Edge Function, não endpoint HTTP
  exposto publicamente). Sem necessidade de proteger nenhuma rota com
  segredo, já que a ingestão nunca é acionável via web.
- **Leitura**: a página `/noticias` é um Server Component que lê direto do
  SQLite a cada request (leitura local em arquivo é rápida o suficiente; sem
  necessidade de cache adicional do Next.js por cima).

## Modelo de dados

```sql
CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,        -- sha256 do url, hex
  source TEXT NOT NULL,       -- 'gnews' | 'worldnews'
  source_name TEXT,           -- nome do veículo (ex: "G1", "Olhar Digital")
  title TEXT NOT NULL,
  summary TEXT,               -- snippet curto, nunca o artigo completo
  url TEXT NOT NULL UNIQUE,
  image_url TEXT,
  published_at TEXT NOT NULL, -- ISO 8601, data reportada pela fonte
  fetched_at TEXT NOT NULL    -- ISO 8601, quando ingerimos
);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at DESC);
```

## Ingestão (`scripts/ingest-news.mjs`)

**Termos de busca**: `['inteligência artificial', 'tecnologia']`. Para cada
termo, chama as duas APIs — total de 4 requisições por execução, 1x/dia.

- **GNews**: `GET https://gnews.io/api/v4/search?q=<termo>&lang=pt&max=10&apikey=<GNEWS_API_KEY>`
  - Campos usados: `title`, `description`, `url`, `image`, `publishedAt`,
    `source.name`.
- **WorldNewsAPI**: `GET https://api.worldnewsapi.com/search-news?text=<termo>&language=pt&number=10&earliest-publish-date=<hoje-15d ISO>&api-key=<WORLDNEWS_API_KEY>`
  - Autenticação via query param `api-key` (confirmado funcional).
  - Campos usados: `title`, `summary` (fallback: truncar `text` a ~200
    caracteres se `summary` ausente), `url`, `image`, `publish_date`,
    `source_country`. Nunca usar `text` completo além do fallback truncado.

**Pipeline, nessa ordem:**
1. Fetch das 4 combinações (termo × API). Se uma chamada falhar (erro de
   rede, timeout, resposta não-2xx), loga o erro e segue com as demais — uma
   API fora do ar não derruba a ingestão inteira.
2. Normaliza cada resultado para `{ source, sourceName, title, summary, url, imageUrl, publishedAt }`.
3. Deduplica por `url` exata e por título normalizado (minúsculo, sem
   acento/pontuação) — evita mostrar a mesma notícia vinda das duas fontes.
4. Filtro negativo: descarta qualquer item cujo `title` ou `summary`
   contenha (case/acento-insensitive) alguma palavra da lista em
   `lib/news-filters.ts` (ver abaixo).
5. Filtro de data: descarta itens com `publishedAt` mais antigo que 15 dias.
6. Grava no SQLite com `INSERT OR IGNORE` (idempotente — rodar 2x seguidas
   não duplica, por causa do `UNIQUE(url)`).
7. Limpeza: `DELETE FROM news WHERE published_at < (agora - 15 dias)`.

**Lista de palavras negativas (`lib/news-filters.ts`)** — array de strings,
match por substring case/acento-insensitive contra `title + ' ' + summary`:

```
demiss, demite, demitiu, corte de vaga, corte de emprego, corte de custo,
desliga funcion, reducao de pessoal, layoff, vazamento de dados,
ataque hacker, ciberataque, invasao, processo judicial, acao judicial,
multa, multad, prejuizo, preju, crise, fraude, falencia, recall,
escandal, polemic, acusad, banid, proibid, colapso, queda livre,
hackead, golpe, phishing, malware, ransomware, censura, boicote,
greve, protesto, denuncia, investigacao, apagao, falha grave,
bug critico, inseguranca, plagio, discrimina, desemprego
```

(Lista comparada após normalizar acentos — "não" e "nao" tratados iguais.
Fácil de estender depois; vive num arquivo próprio, não hardcoded no script.)

## Segredos

- `GNEWS_API_KEY` e `WORLDNEWS_API_KEY` — variáveis server-only, **sem**
  prefixo `NEXT_PUBLIC_`. Vivem em `.env.local` (local e VPS) e nunca chegam
  ao cliente.
- O script de ingestão roda via `node --env-file=.env.local scripts/ingest-news.mjs`
  (flag nativa do Node 20.6+, sem precisar de `dotenv`).
- Entrada de crontab na VPS (horário sugerido: 06:00 BRT):
  ```
  0 6 * * * cd /root/dexidigital.com.br && node --env-file=.env.local scripts/ingest-news.mjs >> logs/news-ingest.log 2>&1
  ```

## Página `/noticias`

- Server Component, lê do SQLite a cada request
  (`SELECT * FROM news ORDER BY published_at DESC`).
- Layout: grid de cards seguindo o padrão visual já usado em `/blog` e
  `/cases` — imagem (placeholder da marca quando a API não trouxer imagem),
  nome da fonte, título, snippet, data relativa ("há 2 dias"), botão
  "Leia no [Fonte] →" (`target="_blank" rel="noopener noreferrer"`) linkando
  pro artigo original.
- CTA: bloco padrão do site (mesmo padrão de `TrackedCTA` usado em outras
  páginas de conteúdo, ex. "Agendar diagnóstico gratuito").
- Estado vazio: se não houver linhas no banco (ex. antes da primeira
  execução do cron), mostra um estado vazio elegante — nunca uma tela de
  erro para o visitante.
- Metadata própria (title/description) para SEO.

## Navegação e SEO

- Link em `components/layout/Footer.tsx` (não no Header, por decisão do
  usuário).
- Entrada em `app/sitemap.ts`: `{ url: '/noticias', changeFrequency: 'daily', priority: 0.6 }`.

## Fora de escopo (não implementar agora)

- Curadoria manual (remover uma notícia específica via admin) — não há
  painel admin; se necessário depois, dá pra apagar direto no SQLite via
  SSH.
- Uso do campo `sentiment` nativo do WorldNewsAPI como filtro adicional —
  mantemos só o filtro por palavra-chave para as duas fontes, por
  consistência. Pode ser revisitado depois.
- Categorização por seções (IA vs. Tecnologia geral) — feed único por
  enquanto.
- Paginação — lista simples dos itens dentro da janela de 15 dias; se o
  volume crescer muito, revisitar.

## Teste antes de confiar no cron

Rodar o script manualmente (local e na VPS) e conferir:
1. Retorna itens de ambas as APIs.
2. Um exemplo como "Microsoft demite 10 mil funcionários após adoção de IA"
   é efetivamente barrado pelo filtro negativo.
3. Rodar o script 2x seguidas não duplica linhas (idempotência do
   `INSERT OR IGNORE`).
