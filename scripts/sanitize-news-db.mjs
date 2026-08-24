#!/usr/bin/env node
/**
 * Backfill: limpa sintaxe de código (entidades HTML, tags) das notícias que
 * JÁ estão no banco. O guard em ingest-news.mjs só protege o que entra daqui
 * pra frente — as linhas antigas continuam com &#8220; até isto rodar.
 *
 * Usage:
 *   node scripts/sanitize-news-db.mjs --dry-run   (mostra o que mudaria)
 *   node scripts/sanitize-news-db.mjs             (aplica)
 */

import { DatabaseSync } from 'node:sqlite';
import { join } from 'node:path';
import { sanitizeText } from '../lib/news-sanitize.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const DB_PATH = join(process.cwd(), 'data', 'news.db');

const db = new DatabaseSync(DB_PATH);
try {
  const rows = db.prepare('SELECT id, title, summary FROM news').all();
  const update = db.prepare('UPDATE news SET title = ?, summary = ? WHERE id = ?');

  let mudados = 0;
  for (const row of rows) {
    const title = sanitizeText(row.title);
    const summary = sanitizeText(row.summary);
    if (title === row.title && summary === row.summary) continue;

    mudados += 1;
    console.log(`\n  antes: ${JSON.stringify(row.title)}`);
    console.log(`  depois: ${JSON.stringify(title)}`);
    // Título vazio depois da limpeza significa que a linha era só markup;
    // não sobrescreve com string vazia, deixa para inspeção manual.
    if (!title) {
      console.warn('  PULADO: título ficaria vazio');
      continue;
    }
    if (!DRY_RUN) update.run(title, summary, row.id);
  }

  console.log(`\n${rows.length} linha(s) no banco, ${mudados} com sintaxe de código.`);
  console.log(DRY_RUN ? 'Dry-run: nada foi gravado.' : 'Aplicado.');
} finally {
  db.close();
}
