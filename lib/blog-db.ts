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
