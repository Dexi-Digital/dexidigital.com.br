# Automação do Blog (Fases 2 e 3) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Banco interno pro blog (sem Supabase, sem migrar os 600 posts legados) + motor de geração de posts via Gemini pras 102 pautas da Faixa B do calendário, com Validator automático como único gate de publicação.

**Architecture:** SQLite (`node:sqlite`) em dois bancos: `data/blog-posts.db` (posts novos) e `data/topic-bank.db` (pautas da Faixa B). Script standalone `scripts/generate-blog-post.mjs` roda a cada execução: pega a próxima pauta, deduplica contra conteúdo já publicado, gera via Gemini, valida, publica ou marca como rascunho. `app/blog/page.tsx` e `/blog/[slug]` passam a mesclar `lib/blog-data.ts` (legado, intocado) com o banco novo.

**Tech Stack:** `node:sqlite` (nativo, Node 24+), Gemini REST API (`gemini-flash-latest`), TypeScript + scripts `.mjs` (mesmo padrão de `ingest-news.mjs`).

## Global Constraints

- Sem Supabase para blog — só SQLite interno na VPS. Supabase continua só para `leads`.
- `lib/blog-data.ts` (600 posts legados) não é modificado.
- `GEMINI_API_KEY` é secret server-only, sem prefixo `NEXT_PUBLIC_`.
- Só Faixa B (102 pautas satélite) é automatizada. Faixa A e C ficam fora.
- Publicação direta sem aprovação humana — o `Validator` automático é o único gate.
- Sem framework de testes no projeto — verificação manual (`node -e`, `tsc --noEmit`, rodar o script de verdade), mesmo padrão já usado nas notícias.

---

### Task 1: Banco de posts do blog (`lib/blog-db.ts`)

**Files:**
- Create: `lib/blog-db.ts`
- Modify: `.gitignore` (adicionar `/data` já cobre os dois bancos novos — já existe da Fase de notícias, conferir que cobre `data/blog-posts.db` e `data/topic-bank.db` também, já que são todos dentro de `/data`)

**Interfaces:**
- Produces:
  - `interface DbBlogPost { id, slug, title, excerpt, content, category, readTime, author, metaDescription, focusKeyword, vertical, cluster, pillarLink, status, publishedAt }`
  - `getPublishedDbPosts(): DbBlogPost[]`
  - `getDbPostBySlug(slug: string): DbBlogPost | null`
  - `insertPost(post, status: 'draft' | 'published'): string` (retorna o id/slug)

- [ ] **Step 1: Criar o módulo**

```typescript
// lib/blog-db.ts
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

export interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  metaDescription: string;
  focusKeyword: string;
  vertical: string;
  cluster: string;
  pillarLink: string;
  status: 'draft' | 'published';
  publishedAt: string | null;
}

export interface NewPostInput {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  metaDescription: string;
  focusKeyword: string;
  vertical: string;
  cluster: string;
  pillarLink: string;
  validatorReport: string;
}

const DB_PATH = join(process.cwd(), 'data', 'blog-posts.db');

function getDb(): DatabaseSync {
  mkdirSync(dirname(DB_PATH), { recursive: true });
  const db = new DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      category TEXT NOT NULL,
      read_time TEXT NOT NULL,
      author TEXT NOT NULL,
      meta_description TEXT NOT NULL,
      focus_keyword TEXT,
      status TEXT NOT NULL,
      vertical TEXT,
      cluster TEXT,
      pillar_link TEXT,
      validator_report TEXT,
      created_at TEXT NOT NULL,
      published_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status, published_at DESC);
  `);
  return db;
}

interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  author: string;
  meta_description: string;
  focus_keyword: string;
  vertical: string;
  cluster: string;
  pillar_link: string;
  status: string;
  published_at: string | null;
}

function rowToPost(row: BlogPostRow): DbBlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    readTime: row.read_time,
    author: row.author,
    metaDescription: row.meta_description,
    focusKeyword: row.focus_keyword,
    vertical: row.vertical,
    cluster: row.cluster,
    pillarLink: row.pillar_link,
    status: row.status as 'draft' | 'published',
    publishedAt: row.published_at,
  };
}

export function getPublishedDbPosts(): DbBlogPost[] {
  const db = getDb();
  try {
    const rows = db
      .prepare(`SELECT * FROM blog_posts WHERE status='published' ORDER BY published_at DESC`)
      .all() as unknown as BlogPostRow[];
    return rows.map(rowToPost);
  } finally {
    db.close();
  }
}

export function getDbPostBySlug(slug: string): DbBlogPost | null {
  const db = getDb();
  try {
    const row = db.prepare(`SELECT * FROM blog_posts WHERE slug = ?`).get(slug) as unknown as
      | BlogPostRow
      | undefined;
    return row ? rowToPost(row) : null;
  } finally {
    db.close();
  }
}

export function insertPost(post: NewPostInput, status: 'draft' | 'published'): string {
  const db = getDb();
  try {
    const now = new Date().toISOString();
    db.prepare(
      `
      INSERT OR IGNORE INTO blog_posts
        (id, slug, title, excerpt, content, category, read_time, author, meta_description,
         focus_keyword, status, vertical, cluster, pillar_link, validator_report, created_at, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    ).run(
      post.id,
      post.slug,
      post.title,
      post.excerpt,
      post.content,
      post.category,
      post.readTime,
      post.author,
      post.metaDescription,
      post.focusKeyword,
      status,
      post.vertical,
      post.cluster,
      post.pillarLink,
      post.validatorReport,
      now,
      status === 'published' ? now : null
    );
    return post.id;
  } finally {
    db.close();
  }
}
```

- [ ] **Step 2: Verificar manualmente**

Run:
```bash
node -e "
import('./lib/blog-db.ts').then(({ insertPost, getPublishedDbPosts, getDbPostBySlug }) => {
  const id = insertPost({
    id: 'teste-post', slug: 'teste-post', title: 'Post de teste',
    excerpt: 'Resumo de teste', content: 'Conteúdo de teste',
    category: 'Automotivo', readTime: '3 min', author: 'Equipe Dexi Digital',
    metaDescription: 'Meta de teste', focusKeyword: 'teste',
    vertical: 'Automotivo', cluster: 'Teste', pillarLink: '/teste',
    validatorReport: '{}',
  }, 'published');
  console.log('inserido:', id);
  console.log('publicados:', getPublishedDbPosts().length);
  console.log('por slug:', getDbPostBySlug('teste-post')?.title);
});
"
```
Expected: `inserido: teste-post`, `publicados: 1`, `por slug: Post de teste`.

Limpar antes de seguir: `rm -f data/blog-posts.db`

- [ ] **Step 3: Commit**

```bash
git add lib/blog-db.ts
git commit -m "feat(blog): módulo de banco SQLite pros posts novos"
```

---

### Task 2: Integrar banco novo na listagem e página do post

**Files:**
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getPublishedDbPosts`, `getDbPostBySlug` (Task 1); `getAllArticles`, `getArticleBySlug` (`lib/blog-data.ts`, já existe).

- [ ] **Step 1: Mesclar na listagem**

Em `app/blog/page.tsx`, trocar:
```typescript
import { getAllArticles } from '@/lib/blog-data';
```
por:
```typescript
import { getAllArticles } from '@/lib/blog-data';
import { getPublishedDbPosts } from '@/lib/blog-db';

export const dynamic = 'force-dynamic';
```

E trocar a linha `const articles = getAllArticles();` por:
```typescript
  const legacyArticles = getAllArticles();
  const dbPosts = getPublishedDbPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    date: p.publishedAt ?? new Date().toISOString(),
    author: p.author,
    metaDescription: p.metaDescription,
    focusKeyword: p.focusKeyword,
    content: p.content,
  }));
  const articles = [...legacyArticles, ...dbPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
```

O resto do arquivo (o `.map((article) => ...)` do grid) não muda — a forma do objeto já é a mesma (`BlogArticle`).

- [ ] **Step 2: Mesclar na página do post**

Em `app/blog/[slug]/page.tsx`, adicionar o import:
```typescript
import { getDbPostBySlug } from '@/lib/blog-db';
```

Criar uma função helper logo abaixo dos imports:
```typescript
function findArticle(slug: string) {
  const legacy = getArticleBySlug(slug);
  if (legacy) return legacy;
  const dbPost = getDbPostBySlug(slug);
  if (!dbPost || dbPost.status !== 'published') return undefined;
  return {
    slug: dbPost.slug,
    title: dbPost.title,
    excerpt: dbPost.excerpt,
    category: dbPost.category,
    readTime: dbPost.readTime,
    date: dbPost.publishedAt ?? new Date().toISOString(),
    author: dbPost.author,
    metaDescription: dbPost.metaDescription,
    focusKeyword: dbPost.focusKeyword,
    content: dbPost.content,
  };
}
```

Trocar as duas chamadas `getArticleBySlug(slug)` (em `generateMetadata` e no componente da página) por `findArticle(slug)`. **Não mexer** em `generateStaticParams()` — continua só com `getAllArticles()` (os legados), o que é intencional: os posts novos do banco são renderizados sob demanda (Next.js usa `dynamicParams: true` por padrão pra slugs fora da lista de `generateStaticParams`), sem precisar de rebuild a cada post novo gerado.

- [ ] **Step 3: Verificar tipos**

Run: `npx tsc --noEmit`
Expected: sem erros.

- [ ] **Step 4: Testar localmente**

Inserir um post de teste via `node -e` (igual ao Step 2 da Task 1, com um slug novo tipo `teste-post-2`), rodar `npm run dev`, abrir `/blog` (deve aparecer o post de teste misturado com os legados) e `/blog/teste-post-2` (deve renderizar). Depois: `rm -f data/blog-posts.db`.

- [ ] **Step 5: Commit**

```bash
git add app/blog/page.tsx app/blog/\[slug\]/page.tsx
git commit -m "feat(blog): mescla posts do banco novo com os 600 legados"
```

---

### Task 3: Validator (`lib/content-validator.ts`)

**Files:**
- Create: `lib/content-validator.ts`

**Interfaces:**
- Produces: `interface ValidatorReport { hasQuickAnswer, hasQuestionH2, hasNamedSourceClaim, hasEnoughInternalLinks, passesClinicalSafety, passed }`, `validatePost(content: string, vertical: string, pillarLink: string): ValidatorReport`

- [ ] **Step 1: Criar o módulo**

```typescript
// lib/content-validator.ts
export interface ValidatorReport {
  hasQuickAnswer: boolean;
  hasQuestionH2: boolean;
  hasNamedSourceClaim: boolean;
  hasEnoughInternalLinks: boolean;
  passesClinicalSafety: boolean;
  passed: boolean;
}

const CLINICAL_CLAIM_TERMS = [
  'cura', 'elimina', 'garante resultado', 'sem risco', '100% seguro', 'garantido',
];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function checkQuickAnswer(content: string): boolean {
  const match = content.match(/\*\*Resposta rápida:\*\*\s*(.+?)(?:\n\n|\n#|$)/s);
  if (!match) return false;
  const wordCount = countWords(match[1]);
  return wordCount >= 30 && wordCount <= 70;
}

function checkQuestionH2(content: string): boolean {
  const headings = content.match(/^##\s+.+$/gm) || [];
  return headings.some((h) => h.trim().endsWith('?'));
}

function checkNamedSourceClaim(content: string): boolean {
  const sourcePattern = /(segundo|de acordo com|conforme)\s+[^\n.]{3,80}/gi;
  const matches = content.match(sourcePattern) || [];
  return matches.some((m) => /\d/.test(m) || /\d/.test(content.slice(content.indexOf(m), content.indexOf(m) + 120)));
}

function checkInternalLinks(content: string, pillarLink: string): boolean {
  if (!pillarLink) return true;
  const escaped = pillarLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\\]\\(${escaped}\\)`, 'g');
  const matches = content.match(pattern) || [];
  return matches.length >= 2;
}

function checkClinicalSafety(content: string, vertical: string): boolean {
  if (vertical !== 'Clínicas de procedimentos') return true;
  const normalized = content
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  return !CLINICAL_CLAIM_TERMS.some((term) => normalized.includes(term));
}

export function validatePost(content: string, vertical: string, pillarLink: string): ValidatorReport {
  const hasQuickAnswer = checkQuickAnswer(content);
  const hasQuestionH2 = checkQuestionH2(content);
  const hasNamedSourceClaim = checkNamedSourceClaim(content);
  const hasEnoughInternalLinks = checkInternalLinks(content, pillarLink);
  const passesClinicalSafety = checkClinicalSafety(content, vertical);

  return {
    hasQuickAnswer,
    hasQuestionH2,
    hasNamedSourceClaim,
    hasEnoughInternalLinks,
    passesClinicalSafety,
    passed:
      hasQuickAnswer && hasQuestionH2 && hasNamedSourceClaim && hasEnoughInternalLinks && passesClinicalSafety,
  };
}
```

- [ ] **Step 2: Verificar manualmente**

Run:
```bash
node -e "
import('./lib/content-validator.ts').then(({ validatePost }) => {
  const good = \`**Resposta rápida:** \${'palavra '.repeat(45)}

## Como reativar leads antigos?

Segundo a Dexi Digital, em operação de out/2025 a jan/2026, 5,2% da base morta responde.

[reative sua base](/base-morta-de-leads) e [veja o case](/base-morta-de-leads).
\`;
  console.log('deve passar tudo:', JSON.stringify(validatePost(good, 'Automotivo', '/base-morta-de-leads'), null, 2));

  const bad = 'Texto qualquer sem estrutura nenhuma.';
  console.log('deve falhar tudo:', JSON.stringify(validatePost(bad, 'Automotivo', '/base-morta-de-leads'), null, 2));

  const clinical = \`**Resposta rápida:** \${'palavra '.repeat(45)}

## Isso cura de verdade?

Segundo a Dexi Digital, em 2026, o protocolo cura o paciente.

[link](/pilar) [link](/pilar)
\`;
  console.log('deve falhar seguranca clinica:', validatePost(clinical, 'Clínicas de procedimentos', '/pilar').passesClinicalSafety);
});
"
```
Expected: primeiro caso com todos os campos `true` e `passed: true`; segundo com todos `false`; terceiro com `passesClinicalSafety: false`.

- [ ] **Step 3: Commit**

```bash
git add lib/content-validator.ts
git commit -m "feat(blog): Validator automático (gate único de publicação)"
```

---

### Task 4: Banco de pautas (`lib/topic-bank-db.ts`) + deduplicador + seed

**Files:**
- Create: `lib/topic-bank-db.ts`
- Create: `lib/topic-deduplicator.ts`
- Create: `scripts/seed-topic-bank.mjs`
- (já existe: `scripts/seed-data/faixa-b-topics.json`, 102 pautas da Faixa B)

**Interfaces:**
- Produces:
  - `interface Topic { id, title, vertical, cluster, keyword, requiredData, dataSource, pillarLink, status }`
  - `seedTopics(topics): number`
  - `getNextBacklogTopic(): Topic | null`
  - `markTopicStatus(id, status, generatedPostId?): void`
  - `getPublishedTitlesForVertical(vertical): string[]`
  - `isDuplicateTitle(candidate: string, existingTitles: string[]): boolean`

- [ ] **Step 1: Criar `lib/topic-bank-db.ts`**

```typescript
// lib/topic-bank-db.ts
import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

export interface Topic {
  id: string;
  title: string;
  vertical: string;
  cluster: string;
  keyword: string;
  requiredData: string;
  dataSource: string;
  pillarLink: string;
  status: string;
}

export interface SeedTopicInput {
  title: string;
  vertical: string;
  cluster: string;
  keyword: string;
  requiredData: string;
  dataSource: string;
  pillarLink: string;
  week: number;
}

const DB_PATH = join(process.cwd(), 'data', 'topic-bank.db');

function getDb(): DatabaseSync {
  mkdirSync(dirname(DB_PATH), { recursive: true });
  const db = new DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS topics (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      vertical TEXT NOT NULL,
      cluster TEXT NOT NULL,
      keyword TEXT NOT NULL,
      required_data TEXT,
      data_source TEXT,
      pillar_link TEXT,
      status TEXT NOT NULL,
      week INTEGER,
      generated_post_id TEXT,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_topics_status_week ON topics(status, week);
  `);
  return db;
}

function hashTitle(title: string): string {
  return createHash('sha256').update(title.toLowerCase().trim()).digest('hex').slice(0, 16);
}

interface TopicRow {
  id: string;
  title: string;
  vertical: string;
  cluster: string;
  keyword: string;
  required_data: string;
  data_source: string;
  pillar_link: string;
  status: string;
}

function rowToTopic(row: TopicRow): Topic {
  return {
    id: row.id,
    title: row.title,
    vertical: row.vertical,
    cluster: row.cluster,
    keyword: row.keyword,
    requiredData: row.required_data,
    dataSource: row.data_source,
    pillarLink: row.pillar_link,
    status: row.status,
  };
}

export function seedTopics(topics: SeedTopicInput[]): number {
  const db = getDb();
  try {
    const insert = db.prepare(`
      INSERT OR IGNORE INTO topics
        (id, title, vertical, cluster, keyword, required_data, data_source, pillar_link, status, week, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'backlog', ?, ?)
    `);
    const now = new Date().toISOString();
    let inserted = 0;
    for (const t of topics) {
      const id = hashTitle(t.title);
      const result = insert.run(
        id, t.title, t.vertical, t.cluster, t.keyword, t.requiredData, t.dataSource, t.pillarLink, t.week, now
      );
      inserted += Number(result.changes);
    }
    return inserted;
  } finally {
    db.close();
  }
}

export function getNextBacklogTopic(): Topic | null {
  const db = getDb();
  try {
    const row = db
      .prepare(`SELECT * FROM topics WHERE status='backlog' ORDER BY week ASC LIMIT 1`)
      .get() as unknown as TopicRow | undefined;
    return row ? rowToTopic(row) : null;
  } finally {
    db.close();
  }
}

export function markTopicStatus(id: string, status: string, generatedPostId?: string): void {
  const db = getDb();
  try {
    db.prepare(`UPDATE topics SET status = ?, generated_post_id = ? WHERE id = ?`).run(
      status,
      generatedPostId ?? null,
      id
    );
  } finally {
    db.close();
  }
}

export function getPublishedTitlesForVertical(vertical: string): string[] {
  const db = getDb();
  try {
    const rows = db
      .prepare(`SELECT title FROM topics WHERE vertical = ? AND status = 'generated'`)
      .all(vertical) as unknown as { title: string }[];
    return rows.map((r) => r.title);
  } finally {
    db.close();
  }
}
```

- [ ] **Step 2: Criar `lib/topic-deduplicator.ts`**

```typescript
// lib/topic-deduplicator.ts
function normalizeWords(title: string): Set<string> {
  return new Set(
    title
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 3)
  );
}

export function isDuplicateTitle(candidate: string, existingTitles: string[]): boolean {
  const candidateWords = normalizeWords(candidate);
  if (candidateWords.size === 0) return false;

  return existingTitles.some((existing) => {
    const existingWords = normalizeWords(existing);
    if (existingWords.size === 0) return false;
    const intersection = [...candidateWords].filter((w) => existingWords.has(w));
    const overlap = intersection.length / Math.min(candidateWords.size, existingWords.size);
    return overlap > 0.6;
  });
}
```

- [ ] **Step 3: Criar o script de seed**

```javascript
#!/usr/bin/env node
// scripts/seed-topic-bank.mjs
// Popula o topic bank com as 102 pautas da Faixa B do calendário.
// Usage: node scripts/seed-topic-bank.mjs

import { readFileSync } from 'node:fs';
import { seedTopics } from '../lib/topic-bank-db.ts';

const raw = readFileSync(new URL('./seed-data/faixa-b-topics.json', import.meta.url), 'utf-8');
const topics = JSON.parse(raw);

const inserted = seedTopics(
  topics.map((t) => ({
    title: t.title,
    vertical: t.vertical,
    cluster: t.cluster,
    keyword: t.keyword,
    requiredData: t.requiredData,
    dataSource: t.dataSource,
    pillarLink: t.pillarLink,
    week: t.week,
  }))
);

console.log(`Pautas inseridas: ${inserted} de ${topics.length} (o resto já existia — idempotente).`);
```

- [ ] **Step 4: Rodar o seed e verificar**

Run: `node scripts/seed-topic-bank.mjs`
Expected: `Pautas inseridas: 102 de 102 (...)`.

Run de novo (idempotência): `node scripts/seed-topic-bank.mjs`
Expected: `Pautas inseridas: 0 de 102 (...)`.

Verificar:
```bash
node -e "
import('./lib/topic-bank-db.ts').then(({ getNextBacklogTopic }) => {
  console.log(getNextBacklogTopic());
});
"
```
Expected: a primeira pauta (semana 1, Automotivo, "Como reativar leads antigos no WhatsApp sem cair em spam").

- [ ] **Step 5: Commit**

```bash
git add lib/topic-bank-db.ts lib/topic-deduplicator.ts scripts/seed-topic-bank.mjs
git commit -m "feat(blog): topic bank (102 pautas Faixa B) + deduplicador"
```

---

### Task 5: Generator (`lib/gemini.ts`)

**Files:**
- Create: `lib/gemini.ts`
- Modify: `.env.example` (adicionar `GEMINI_API_KEY`)

**Interfaces:**
- Consumes: `Topic` (Task 4, campos usados: title, vertical, cluster, keyword, requiredData, dataSource, pillarLink)
- Produces: `interface GeneratedPost { title, excerpt, content }`, `generatePost(topic): Promise<GeneratedPost>`

- [ ] **Step 1: Criar o módulo**

```typescript
// lib/gemini.ts
const GEMINI_MODEL = 'gemini-flash-latest';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export interface TopicInput {
  title: string;
  vertical: string;
  cluster: string;
  keyword: string;
  requiredData: string;
  dataSource: string;
  pillarLink: string;
}

export interface GeneratedPost {
  title: string;
  excerpt: string;
  content: string;
}

function buildPrompt(topic: TopicInput): string {
  return `Você é redator sênior de conteúdo B2B da Dexi Digital, escrevendo para o blog institucional (dexidigital.com.br/blog). Dexi Digital é uma consultoria de IA e inteligência de dados que criou o Fykos, um sistema que reinventa o CRM usando dados e IA sobre os sistemas que o cliente já usa.

PAUTA: ${topic.title}
VERTICAL: ${topic.vertical}
CLUSTER TEMÁTICO: ${topic.cluster}
KEYWORD-ALVO (SEO): ${topic.keyword}
DADO EXIGIDO NO TEXTO: ${topic.requiredData}
FONTE DO DADO: ${topic.dataSource}
LINK DO PILAR (usar pelo menos 2 vezes como link interno): ${topic.pillarLink}

REGRAS OBRIGATÓRIAS — siga à risca, formato exato:
1. Comece o corpo com a linha literal "**Resposta rápida:** " seguida de uma resposta autocontida de 40 a 60 palavras que resuma a pauta inteira — é o trecho que ferramentas como ChatGPT, Perplexity e o AI Overview do Google extraem direto.
2. Pelo menos um subtítulo (##) deve ser uma pergunta, terminando literalmente em "?".
3. Toda afirmação numérica precisa vir com fonte nomeada e período, no formato "Segundo [fonte], em [período], [dado]".
4. Se usar tabela, use tabela Markdown nativa (| coluna | coluna |) — nunca descreva como se fosse imagem.
5. Inclua pelo menos 2 links internos em Markdown apontando exatamente para ${topic.pillarLink}.
6. NÃO faça nenhuma alegação de resultado clínico ou médico (ex: "cura", "elimina", "garante resultado") — mesmo que a vertical seja Clínicas.
7. Tom direto, consultivo, em português do Brasil, sem jargão de marketing vazio. 800 a 1200 palavras no corpo.
8. Assine como "Equipe Dexi Digital".

Responda em JSON válido, SEM formatação markdown de code fence ao redor, exatamente neste formato:
{"title": "título do post", "excerpt": "resumo de até 160 caracteres para meta description", "content": "corpo completo em markdown, incluindo a linha de Resposta rápida e os subtítulos"}`;
}

export async function generatePost(topic: TopicInput): Promise<GeneratedPost> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY não configurada');
  }

  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: buildPrompt(topic) }] }],
      generationConfig: { responseMimeType: 'application/json' },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Resposta do Gemini sem conteúdo de texto');
  }

  let parsed: GeneratedPost;
  try {
    parsed = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Não foi possível extrair JSON da resposta do Gemini');
    parsed = JSON.parse(match[0]);
  }

  if (!parsed.title || !parsed.excerpt || !parsed.content) {
    throw new Error('Resposta do Gemini incompleta (faltando title/excerpt/content)');
  }

  return parsed;
}
```

- [ ] **Step 2: Adicionar `GEMINI_API_KEY` ao `.env.example`**

```
# Gemini API (geração de posts do blog) — server-only, secret
GEMINI_API_KEY=your-gemini-api-key
```

(a chave real já está em `.env.local`, adicionada nesta sessão)

- [ ] **Step 3: Verificar manualmente com uma pauta real**

Run:
```bash
node --env-file=.env.local -e "
import('./lib/gemini.ts').then(async ({ generatePost }) => {
  const post = await generatePost({
    title: 'Como reativar leads antigos no WhatsApp sem cair em spam',
    vertical: 'Automotivo',
    cluster: '1. Base morta e reativação',
    keyword: 'reativar leads antigos whatsapp',
    requiredData: 'Regras Meta + cadência',
    dataSource: 'Secundária + observação de operação',
    pillarLink: '/base-morta-de-leads',
  });
  console.log('TÍTULO:', post.title);
  console.log('EXCERPT:', post.excerpt);
  console.log('--- CONTEÚDO (primeiros 500 chars) ---');
  console.log(post.content.slice(0, 500));
});
"
```
Expected: título, excerpt e início do conteúdo impressos, sem erro. Conferir visualmente que o conteúdo começa com "**Resposta rápida:**".

- [ ] **Step 4: Commit**

```bash
git add lib/gemini.ts .env.example
git commit -m "feat(blog): Generator via Gemini API"
```

---

### Task 6: Script de orquestração (`scripts/generate-blog-post.mjs`)

**Files:**
- Create: `scripts/generate-blog-post.mjs`

**Interfaces:**
- Consumes: tudo das Tasks 1, 3, 4, 5.

- [ ] **Step 1: Criar o script**

```javascript
#!/usr/bin/env node
/**
 * Blog Post Generation Script
 * Pega a próxima pauta do topic bank (Faixa B), deduplica, gera via Gemini,
 * valida, e publica direto (ou marca como rascunho se falhar a validação).
 *
 * Usage: node --env-file=.env.local scripts/generate-blog-post.mjs
 */

import { getNextBacklogTopic, markTopicStatus, getPublishedTitlesForVertical } from '../lib/topic-bank-db.ts';
import { isDuplicateTitle } from '../lib/topic-deduplicator.ts';
import { generatePost } from '../lib/gemini.ts';
import { validatePost } from '../lib/content-validator.ts';
import { insertPost } from '../lib/blog-db.ts';
import { getAllArticles } from '../lib/blog-data.ts';

function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function estimateReadTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.round(words / 200))} min`;
}

async function main() {
  const topic = getNextBacklogTopic();
  if (!topic) {
    console.log('Nenhuma pauta no backlog (topic bank vazio ou tudo já processado).');
    return;
  }
  console.log(`Pauta selecionada: "${topic.title}" (${topic.vertical} / semana implícita pela ordem do backlog)`);

  const existingTitles = [...getAllArticles().map((a) => a.title), ...getPublishedTitlesForVertical(topic.vertical)];

  if (isDuplicateTitle(topic.title, existingTitles)) {
    console.log('Pauta muito parecida com conteúdo já publicado. Marcando como skipped_duplicate.');
    markTopicStatus(topic.id, 'skipped_duplicate');
    return;
  }

  console.log('Gerando rascunho via Gemini...');
  const generated = await generatePost(topic);
  console.log(`Gerado: "${generated.title}"`);

  console.log('Validando...');
  const report = validatePost(generated.content, topic.vertical, topic.pillarLink);
  console.log('Relatório do Validator:', JSON.stringify(report));

  const slug = slugify(generated.title);
  const status = report.passed ? 'published' : 'draft';

  const postId = insertPost(
    {
      id: slug,
      slug,
      title: generated.title,
      excerpt: generated.excerpt,
      content: generated.content,
      category: topic.vertical,
      readTime: estimateReadTime(generated.content),
      author: 'Equipe Dexi Digital',
      metaDescription: generated.excerpt,
      focusKeyword: topic.keyword,
      vertical: topic.vertical,
      cluster: topic.cluster,
      pillarLink: topic.pillarLink,
      validatorReport: JSON.stringify(report),
    },
    status
  );

  markTopicStatus(topic.id, 'generated', postId);

  if (status === 'published') {
    console.log(`Publicado: /blog/${slug}`);
  } else {
    console.log(`Reprovado no Validator — salvo como rascunho (não aparece no /blog): ${slug}`);
  }
}

main().catch((error) => {
  console.error('Erro fatal na geração:', error);
  process.exit(1);
});
```

- [ ] **Step 2: Verificar tipos**

Run: `npx tsc --noEmit`
Expected: sem erros (o script `.mjs` não é checado pelo `tsc`, mas os módulos `.ts` que ele importa precisam compilar limpos).

- [ ] **Step 3: Commit**

```bash
git add scripts/generate-blog-post.mjs
git commit -m "feat(blog): script de orquestração da geração de posts"
```

---

### Task 7: Lote de teste (3 posts) e revisão antes do cron

**Files:** nenhum arquivo novo — validação de produto antes de automatizar de verdade.

- [ ] **Step 1: Rodar o script 3 vezes localmente**

Run: `node --env-file=.env.local scripts/generate-blog-post.mjs` (três vezes seguidas)

Expected: 3 pautas diferentes processadas (semana 1 de verticais diferentes, já que o backlog está ordenado por semana e as 3 primeiras pautas do JSON são de verticais diferentes — conferir com `getNextBacklogTopic` se necessário). Cada rodada deve terminar em "Publicado" ou "Reprovado no Validator", nunca em erro fatal.

- [ ] **Step 2: Ler os 3 posts gerados**

Run:
```bash
node -e "
import('./lib/blog-db.ts').then(({ getPublishedDbPosts }) => {
  getPublishedDbPosts().forEach(p => {
    console.log('===', p.title, '(' + p.vertical + ') ===');
    console.log(p.content);
    console.log();
  });
});
"
```

- [ ] **Step 3: Rodar `npm run dev` e mostrar `/blog` com os posts novos misturados aos legados pra usuária revisar antes de decidir a frequência do cron.**

- [ ] **Step 4: NÃO configurar cron ainda** — só depois da usuária aprovar a qualidade do lote de teste.
