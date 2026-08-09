#!/usr/bin/env node
/**
 * News Ingestion Script
 * Busca notícias de tech/IA no GNews e WorldNewsAPI, filtra viés negativo,
 * deduplica e grava no SQLite local.
 *
 * Usage: node --env-file=.env.local scripts/ingest-news.mjs
 */

import { createHash } from 'node:crypto';
import { isNegativeNews, isTechOrAiNews, isPromotionalContent } from '../lib/news-filters.ts';
import { upsertNews, pruneOldNews } from '../lib/news-db.ts';

const SEARCH_TERMS = ['inteligência artificial', 'tecnologia'];
const MAX_AGE_DAYS = 15;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const WORLDNEWS_API_KEY = process.env.WORLDNEWS_API_KEY;

function hashUrl(url) {
  return createHash('sha256').update(url).digest('hex');
}

function normalizeTitle(title) {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim();
}

function truncate(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
}

function extractSourceName(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'Fonte externa';
  }
}

async function fetchGNews(term) {
  const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(term)}&lang=pt&max=10&apikey=${GNEWS_API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[GNews] "${term}": HTTP ${response.status}`);
      return [];
    }
    const data = await response.json();
    return (data.articles || []).map((article) => ({
      source: 'gnews',
      sourceName: article.source?.name || 'GNews',
      title: article.title,
      summary: truncate(article.description, 200),
      url: article.url,
      imageUrl: article.image || null,
      publishedAt: article.publishedAt,
    }));
  } catch (error) {
    console.error(`[GNews] "${term}": ${error.message}`);
    return [];
  }
}

async function fetchWorldNews(term) {
  const earliestDate = new Date(Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const url = `https://api.worldnewsapi.com/search-news?text=${encodeURIComponent(term)}&language=pt&number=10&earliest-publish-date=${earliestDate}&api-key=${WORLDNEWS_API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[WorldNewsAPI] "${term}": HTTP ${response.status}`);
      return [];
    }
    const data = await response.json();
    return (data.news || []).map((item) => ({
      source: 'worldnews',
      sourceName: extractSourceName(item.url),
      title: item.title,
      summary: truncate(item.summary || item.text, 200),
      url: item.url,
      imageUrl: item.image || null,
      publishedAt: item.publish_date,
    }));
  } catch (error) {
    console.error(`[WorldNewsAPI] "${term}": ${error.message}`);
    return [];
  }
}

async function main() {
  if (!GNEWS_API_KEY || !WORLDNEWS_API_KEY) {
    console.error('GNEWS_API_KEY e/ou WORLDNEWS_API_KEY não configuradas. Abortando.');
    process.exit(1);
  }

  const results = [];
  for (const term of SEARCH_TERMS) {
    const [gnews, worldnews] = await Promise.all([fetchGNews(term), fetchWorldNews(term)]);
    results.push(...gnews, ...worldnews);
  }
  console.log(`Buscados: ${results.length} itens brutos`);

  const seenUrls = new Set();
  const seenTitles = new Set();
  const deduped = [];
  for (const item of results) {
    if (!item.title || !item.url || !item.publishedAt) continue;
    const titleKey = normalizeTitle(item.title);
    if (seenUrls.has(item.url) || seenTitles.has(titleKey)) continue;
    seenUrls.add(item.url);
    seenTitles.add(titleKey);
    deduped.push(item);
  }
  console.log(`Após deduplicação: ${deduped.length} itens`);

  // Exige o termo no TÍTULO (não no resumo): o resumo é um trecho do corpo
  // do artigo e pode citar "tecnologia" de passagem numa matéria que não é
  // sobre tech/IA de verdade. O título é um sinal de relevância bem mais forte.
  const onTopic = deduped.filter((item) => isTechOrAiNews(item.title, ''));
  console.log(`Sobre tech/IA (no título): ${onTopic.length} itens (${deduped.length - onTopic.length} fora de tema)`);

  const notPromotional = onTopic.filter((item) => !isPromotionalContent(item.title));
  console.log(`Não é lista de compras/promoção: ${notPromotional.length} itens (${onTopic.length - notPromotional.length} descartados)`);

  const filtered = notPromotional.filter((item) => !isNegativeNews(item.title, item.summary));
  console.log(`Após filtro negativo: ${filtered.length} itens (${notPromotional.length - filtered.length} descartados)`);

  const cutoffMs = Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  const withinWindow = filtered.filter((item) => {
    const publishedMs = new Date(item.publishedAt).getTime();
    return !Number.isNaN(publishedMs) && publishedMs >= cutoffMs;
  });
  console.log(`Dentro da janela de ${MAX_AGE_DAYS} dias: ${withinWindow.length} itens`);

  const items = withinWindow.map((item) => ({ id: hashUrl(item.url), ...item }));

  const fetchedAt = new Date().toISOString();
  const inserted = upsertNews(items, fetchedAt);
  console.log(`Gravados no banco: ${inserted} novos itens`);

  const pruned = pruneOldNews(MAX_AGE_DAYS);
  console.log(`Removidos por expiração (>${MAX_AGE_DAYS} dias): ${pruned} itens`);
}

main().catch((error) => {
  console.error('Erro fatal na ingestão:', error);
  process.exit(1);
});
