import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
// Com extensão: este módulo também roda direto no Node (scripts/generate-blog-post.mjs).
import { semTravessao } from './sem-travessao.ts';

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
  status: StatusPost;
  publishedAt: string | null;
  /** Última correção depois de publicado (scripts/revisar-blog.mjs); null se nunca mudou. */
  updatedAt: string | null;
  /** Parecer do revisor (lib/revisor-blog.ts) em JSON; null em post de antes do revisor. */
  reviewReport: string | null;
}

/**
 * draft: o revisor não aprovou (ou não chegou a revisar); não aparece no site.
 * removido: estava publicado e o revisor reprovou; responde 410 (ver proxy.ts).
 */
export type StatusPost = 'draft' | 'published' | 'removido';

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
  reviewReport: string;
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
  // Colunas que entraram depois da criação da tabela (revisor, out/2026).
  const colunas = new Set(
    (db.prepare(`PRAGMA table_info(blog_posts)`).all() as unknown as { name: string }[]).map((c) => c.name)
  );
  if (!colunas.has('review_report')) db.exec(`ALTER TABLE blog_posts ADD COLUMN review_report TEXT`);
  if (!colunas.has('updated_at')) db.exec(`ALTER TABLE blog_posts ADD COLUMN updated_at TEXT`);
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
  updated_at: string | null;
  review_report: string | null;
}

function rowToPost(row: BlogPostRow): DbBlogPost {
  return {
    id: row.id,
    slug: row.slug,
    // Travessão é proibido no site; posts já gerados vivem só no banco da VPS.
    title: semTravessao(row.title, { titulo: true }),
    excerpt: semTravessao(row.excerpt),
    content: semTravessao(row.content),
    category: row.category,
    readTime: row.read_time,
    author: row.author,
    metaDescription: semTravessao(row.meta_description),
    focusKeyword: row.focus_keyword,
    vertical: row.vertical,
    cluster: row.cluster,
    pillarLink: row.pillar_link,
    status: row.status as StatusPost,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    reviewReport: row.review_report,
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

export function getPostsByPillarLink(pillarLink: string): DbBlogPost[] {
  const db = getDb();
  try {
    const rows = db
      .prepare(`SELECT * FROM blog_posts WHERE status='published' AND pillar_link = ? ORDER BY published_at DESC`)
      .all(pillarLink) as unknown as BlogPostRow[];
    return rows.map(rowToPost);
  } finally {
    db.close();
  }
}

/** Só o status, para o proxy decidir o 410 sem carregar o post. */
export function statusDoPost(slug: string): StatusPost | null {
  const db = getDb();
  try {
    const row = db.prepare(`SELECT status FROM blog_posts WHERE slug = ?`).get(slug) as unknown as
      | { status: string }
      | undefined;
    return row ? (row.status as StatusPost) : null;
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
         focus_keyword, status, vertical, cluster, pillar_link, validator_report, review_report, created_at, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      post.reviewReport,
      now,
      status === 'published' ? now : null
    );
    return post.id;
  } finally {
    db.close();
  }
}

/** Guarda o parecer do revisor sem mexer no texto nem no status. */
export function salvarRevisao(slug: string, reviewReport: string): void {
  const db = getDb();
  try {
    db.prepare(`UPDATE blog_posts SET review_report = ? WHERE slug = ?`).run(reviewReport, slug);
  } finally {
    db.close();
  }
}

/** Troca o texto de um post publicado pela versão que o revisor aprovou. O slug não muda. */
export function atualizarPostRevisado(
  slug: string,
  post: { title: string; excerpt: string; content: string; readTime: string },
  reviewReport: string
): void {
  const db = getDb();
  try {
    db.prepare(
      `UPDATE blog_posts
         SET title = ?, excerpt = ?, meta_description = ?, content = ?, read_time = ?, review_report = ?, updated_at = ?
       WHERE slug = ?`
    ).run(post.title, post.excerpt, post.excerpt, post.content, post.readTime, reviewReport, new Date().toISOString(), slug);
  } finally {
    db.close();
  }
}

/** Tira do ar um post que o revisor reprovou (o 410 vem de lib/blog-removidos.ts). */
export function marcarRemovido(slug: string, reviewReport: string): void {
  const db = getDb();
  try {
    db.prepare(`UPDATE blog_posts SET status = 'removido', review_report = ?, updated_at = ? WHERE slug = ?`).run(
      reviewReport,
      new Date().toISOString(),
      slug
    );
  } finally {
    db.close();
  }
}
