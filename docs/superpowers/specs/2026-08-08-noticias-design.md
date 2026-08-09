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
   API fora do ar não derruba a ingestão inteira. Confirmado em produção:
   um 429 (rate limit) do GNews não interrompeu a ingestão das outras 3
   combinações.
2. Normaliza cada resultado para `{ source, sourceName, title, summary, url, imageUrl, publishedAt }`.
3. Deduplica por `url` exata e por título normalizado (minúsculo, sem
   acento/pontuação) — evita mostrar a mesma notícia vinda das duas fontes.
4. **Filtro de relevância (positivo)**: descarta qualquer item cujo
   **título** não contenha um termo de tech/IA da lista em
   `lib/news-filters.ts` (`isTechOrAiNews`). Adicionado depois do design
   original ao testar com dados reais — as APIs fazem busca textual ampla
   (inclusive no corpo do artigo) e sem esse filtro o feed trazia bastante
   notícia fora do tema (eleições, carnaval, obituário) só porque a palavra
   aparecia de passagem no resumo. Checar só o título (não o resumo) foi o
   que efetivamente resolveu — o resumo é trecho de corpo de texto e cita
   termos tech de forma tangencial com frequência maior do que o esperado.
5. Filtro negativo: descarta qualquer item cujo `title` ou `summary`
   contenha (case/acento-insensitive) alguma palavra da lista em
   `lib/news-filters.ts` (`isNegativeNews`, ver abaixo).
6. Filtro de data: descarta itens com `publishedAt` mais antigo que 15 dias.
7. Grava no SQLite com `INSERT OR IGNORE` (idempotente — confirmado rodando
   o script 2x seguidas em produção: a segunda rodada gravou 0 itens novos).
8. Limpeza: `DELETE FROM news WHERE published_at < (agora - 15 dias)`.

**Lista de palavras negativas (`lib/news-filters.ts`, `isNegativeNews`)** —
array de strings, match por substring case/acento-insensitive contra
`title + ' ' + summary`. Regra de composição: quando a primeira palavra de
uma frase de duas palavras pode flexionar no plural (ex: "ação" → "ações"),
a frase quebra como substring — por isso frases assim viraram stems de uma
palavra só (`hacker`, `judicial`, `queda`, `falha`, `bug`) em vez de frases
fixas (bug real encontrado e corrigido durante a implementação: "ataque
hacker" não batia com "ataques hackers"):

```
demiss, demite, demitiu, corte de vaga, corte de emprego, corte de custo,
desliga funcion, reducao de pessoal, reducoes de pessoal, layoff,
vazamento de dados, hacker, ciberataque, invasao, judicial,
multa, multad, prejuizo, preju, crise, fraude, falencia, recall,
escandal, polemic, acusad, banid, proibid, colapso, queda,
hackead, golpe, phishing, malware, ransomware, censura, boicote,
greve, protesto, denuncia, investigacao, apagao, falha,
bug, inseguranca, plagio, discrimina, desemprego
```

**Lista de relevância positiva (`lib/news-filters.ts`, `isTechOrAiNews`)** —
adicionada depois do design original (ver seção de Ingestão acima). Termos
curtos (`ia`, `ai`, `ti`, `ml`, `ar`, `vr`, `5g`, `tech`, `app`) usam
fronteira de palavra (`\b`) via regex para não colidir com substrings de
outras palavras (ex: "ia" dentro de "história"); termos mais longos usam
substring simples:

```
tecnologia, tecnologico, inteligencia artificial, ia generativa, chatgpt,
openai, gemini, copilot, claude, anthropic, llm, machine learning,
aprendizado de maquina, algoritmo, software, aplicativo, digital, robo,
robotica, automacao, startup, smartphone, celular, computador, internet,
nuvem, cloud, big data, ciberseguranca, blockchain, criptomoeda, bitcoin,
realidade virtual, realidade aumentada, drone, wearable, semicondutor,
processador, google, microsoft, apple, samsung, nvidia, tesla, gadget
```

("inovacao" e "streaming" foram removidos da lista depois de causarem falsos
positivos com dados reais: uma notícia de carnaval e uma lista "o que ver na
TV", respectivamente.)

(Ambas as listas comparadas após normalizar acentos — "não" e "nao" tratados
iguais. Fáceis de estender depois; vivem num arquivo próprio, não
hardcoded no script.)

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
