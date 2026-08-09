#!/usr/bin/env node
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
