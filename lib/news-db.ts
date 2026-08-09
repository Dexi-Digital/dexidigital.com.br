import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

export interface NewsItem {
  id: string;
  source: string;
  sourceName: string;
  title: string;
  summary: string;
  url: string;
  imageUrl: string | null;
  publishedAt: string;
}

const DB_PATH = join(process.cwd(), 'data', 'news.db');

function getDb(): DatabaseSync {
  mkdirSync(dirname(DB_PATH), { recursive: true });
  const db = new DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS news (
      id TEXT PRIMARY KEY,
      source TEXT NOT NULL,
      source_name TEXT,
      title TEXT NOT NULL,
      summary TEXT,
      url TEXT NOT NULL UNIQUE,
      image_url TEXT,
      published_at TEXT NOT NULL,
      fetched_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at DESC);
  `);
  return db;
}

interface NewsRow {
  id: string;
  source: string;
  source_name: string;
  title: string;
  summary: string;
  url: string;
  image_url: string | null;
  published_at: string;
}

export function getRecentNews(): NewsItem[] {
  const db = getDb();
  try {
    const rows = db.prepare('SELECT * FROM news ORDER BY published_at DESC').all() as unknown as NewsRow[];
    return rows.map((row) => ({
      id: row.id,
      source: row.source,
      sourceName: row.source_name,
      title: row.title,
      summary: row.summary,
      url: row.url,
      imageUrl: row.image_url,
      publishedAt: row.published_at,
    }));
  } finally {
    db.close();
  }
}

export function upsertNews(items: NewsItem[], fetchedAt: string): number {
  const db = getDb();
  try {
    const insert = db.prepare(`
      INSERT OR IGNORE INTO news (id, source, source_name, title, summary, url, image_url, published_at, fetched_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    let inserted = 0;
    for (const item of items) {
      const result = insert.run(
        item.id, item.source, item.sourceName, item.title, item.summary,
        item.url, item.imageUrl, item.publishedAt, fetchedAt
      );
      inserted += Number(result.changes);
    }
    return inserted;
  } finally {
    db.close();
  }
}

export function pruneOldNews(maxAgeDays: number): number {
  const db = getDb();
  try {
    const cutoff = new Date(Date.now() - maxAgeDays * 24 * 60 * 60 * 1000).toISOString();
    const result = db.prepare('DELETE FROM news WHERE published_at < ?').run(cutoff);
    return Number(result.changes);
  } finally {
    db.close();
  }
}
