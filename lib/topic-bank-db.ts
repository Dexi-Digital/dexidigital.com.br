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
