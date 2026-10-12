#!/usr/bin/env node
/**
 * Inventário do /blog para a limpeza de SEO (handoff de out/2026, item 1.1).
 *
 * Lista todo post publicado (os migrados do WordPress em lib/blog-data.ts e os
 * do banco da automação) com a sugestão de lib/blog-triagem.ts. A Lorrayne
 * preenche decisao_lorrayne (manter, 410 ou 301) e destino_301; só então os
 * slugs entram em lib/blog-removidos.ts ou lib/blog-redirects.ts.
 *
 * Lê o conteúdo direto da fonte, sem baixar as páginas: é o mesmo texto que o
 * site serve, e roda em segundos em vez de minutos.
 *
 * Uso:
 *   node scripts/inventario-blog.mjs > inventario_blog.csv             # na VPS (banco local)
 *   node scripts/inventario-blog.mjs --banco posts.json > inventario.csv
 *     (posts.json: export da tabela blog_posts, para rodar fora da VPS)
 */

import { readFileSync } from 'node:fs';
import { getAllArticles } from '../lib/blog-data.ts';
import { getPublishedDbPosts } from '../lib/blog-db.ts';
import { triarPost } from '../lib/blog-triagem.ts';

const BASE = 'https://dexidigital.com.br/blog/';
const args = process.argv.slice(2);
const arquivoBanco = args.includes('--banco') ? args[args.indexOf('--banco') + 1] : null;

const postsDoBanco = arquivoBanco
  ? JSON.parse(readFileSync(arquivoBanco, 'utf8'))
      .filter((p) => p.status === 'published')
      .map((p) => ({ slug: p.slug, title: p.title, content: p.content, publishedAt: p.published_at }))
  : getPublishedDbPosts();

const posts = [
  ...getAllArticles().map((a) => ({ origem: 'wordpress', slug: a.slug, titulo: a.title, conteudo: a.content, data: a.date })),
  ...postsDoBanco.map((p) => ({ origem: 'automacao', slug: p.slug, titulo: p.title, conteudo: p.content, data: p.publishedAt ?? '' })),
];

const ORDEM = { revisar: 0, manter: 1, '410': 2 };
const linhas = posts
  .map((p) => ({ ...p, ...triarPost(p) }))
  .sort((a, b) => ORDEM[a.sugestao] - ORDEM[b.sugestao] || String(b.data).localeCompare(String(a.data)));

function campo(valor) {
  const texto = String(valor ?? '');
  return /[",\n\r]/.test(texto) ? `"${texto.replace(/"/g, '""')}"` : texto;
}

const cabecalho = [
  'url', 'lastmod', 'status', 'title', 'h1', 'palavras', 'sinais', 'sugestao',
  'decisao_lorrayne', 'destino_301', 'origem', 'inicio_do_texto',
];
// BOM: sem ele o Excel abre os acentos quebrados.
process.stdout.write('\uFEFF' + cabecalho.join(',') + '\n');
for (const p of linhas) {
  const inicio = p.conteudo.replace(/\[caption[\s\S]*?\[\/caption\]/g, '').replace(/\s+/g, ' ').trim().slice(0, 200);
  process.stdout.write(
    [
      BASE + p.slug,
      String(p.data).slice(0, 10),
      'publicado',
      p.titulo.replace(/\s+/g, ' ').trim(),
      p.titulo.replace(/\s+/g, ' ').trim(), // o H1 do post é o próprio título
      p.conteudo.split(/\s+/).filter(Boolean).length,
      p.sinais.join('|'),
      p.sugestao,
      '',
      '',
      p.origem,
      inicio,
    ].map(campo).join(',') + '\n',
  );
}
