import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildMeta, montarTitulo, montarDescricao, urlCanonica, cortarNaPalavra, TITULO_MAX, DESCRICAO_MAX } from './meta.ts';
import { GUIAS } from './guias.ts';
import { SOLUCOES } from './solucoes.ts';
import { COMPARATIVOS } from './comparativo.ts';
import { INTEGRACOES } from './integracoes.ts';
import { FABRICAS } from './fabricas.ts';
import { GRUPOS } from './grupos.ts';
import { GLOSSARIO_TERMS } from './glossario.ts';
import { PILLARS } from '../pillars.ts';

test('marca entra no título quando cabe', () => {
  assert.equal(montarTitulo('Guias'), 'Guias | Dexi Digital');
});

test('marca sai quando estoura 60 caracteres', () => {
  const t = 'IA para Concessionárias de Marcas de Performance'; // 48 + 15 > 60
  assert.equal(montarTitulo(t), t);
});

test('título que nem sozinho cabe é cortado na palavra, com reticências', () => {
  const t = 'Gargalo na concessionária: por que o lead qualificado não fecha a compra do carro';
  const r = montarTitulo(t);
  assert.ok(r.length <= TITULO_MAX, r);
  assert.ok(r.endsWith('…'));
  assert.ok(t.startsWith(r.slice(0, -1)), r);
});

test('título que já traz a marca não ganha a marca de novo', () => {
  assert.equal(montarTitulo('Dexi Digital | Tecnologia para decisões comerciais'), 'Dexi Digital | Tecnologia para decisões comerciais');
  assert.equal(montarTitulo('Contato | Dexi Digital'), 'Contato | Dexi Digital');
  assert.equal(montarTitulo('Sobre a Dexi Digital'), 'Sobre a Dexi Digital');
});

test('corte não deixa preposição nem pontuação pendurada', () => {
  assert.equal(cortarNaPalavra('Como vender carro para outro estado sem perder o lead', 30), 'Como vender carro para outro…');
  assert.equal(cortarNaPalavra('Lead frio, lead morto e lead perdido', 20), 'Lead frio, lead…');
});

test('descrição longa é cortada em 155', () => {
  const d = 'a '.repeat(120).trim();
  assert.ok(montarDescricao(d).length <= DESCRICAO_MAX);
});

test('travessão sai de título e descrição', () => {
  assert.equal(montarTitulo('Blog — Dexi'), 'Blog: Dexi | Dexi Digital');
  assert.ok(!montarDescricao('a — b').includes('—'));
});

test('canonical absoluto e sem barra sobrando', () => {
  assert.equal(urlCanonica('/'), 'https://dexidigital.com.br');
  assert.equal(urlCanonica('/guias/'), 'https://dexidigital.com.br/guias');
  assert.equal(urlCanonica('guias'), 'https://dexidigital.com.br/guias');
});

test('og:url é o mesmo valor do canonical e o OG vem completo', () => {
  const m = buildMeta({ title: 'Guias', description: 'Guias de inteligência comercial.', path: '/guias' });
  const og = m.openGraph as Record<string, unknown>;
  assert.equal(og.url, (m.alternates as { canonical: string }).canonical);
  for (const campo of ['title', 'description', 'url', 'type', 'images']) assert.ok(og[campo], `og:${campo}`);
  const [img] = og.images as { width: number; height: number }[];
  assert.deepEqual([img.width, img.height], [1200, 630]);
});

test('noindex segue os links; nofollow não', () => {
  assert.deepEqual(buildMeta({ title: 'x', description: 'y', path: '/x', noindex: true }).robots, {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  });
  assert.equal((buildMeta({ title: 'x', description: 'y', path: '/x', nofollow: true }).robots as { follow: boolean }).follow, false);
});

// Os dados escritos à mão já cabem: o corte automático é só rede de segurança
// para o que vem do banco (posts do blog).
const PAGINAS_DE_DADOS: [string, { metaTitle?: string; title?: string; metaDescription?: string; description?: string }][] = [
  ...GUIAS.map((g) => [`/guias/${g.slug}`, g] as const),
  ...SOLUCOES.map((s) => [`/solucoes/${s.slug}`, s] as const),
  ...COMPARATIVOS.map((c) => [`/comparativo/${c.slug}`, c] as const),
  ...INTEGRACOES.map((i) => [`/integracoes/${i.slug}`, i] as const),
  ...FABRICAS.map((f) => [`/setores/fabricas/${f.slug}`, f] as const),
  ...GRUPOS.map((g) => [`/setores/grupos/${g.slug}`, g] as const),
  ...GLOSSARIO_TERMS.map((t) => [`/glossario-ia-automotiva/${t.slug}`, t] as const),
  ...PILLARS.map((p) => [`/${p.slug}`, { title: p.title, description: p.description }] as const),
];

test('título e descrição das páginas de dados cabem sem corte', () => {
  const fora: string[] = [];
  for (const [rota, p] of PAGINAS_DE_DADOS) {
    const titulo = montarTitulo(p.metaTitle ?? p.title ?? '');
    const descricao = p.metaDescription ?? p.description ?? '';
    if (titulo.endsWith('…')) fora.push(`${rota}: título com ${titulo.length} caracteres`);
    if (descricao.length > DESCRICAO_MAX) fora.push(`${rota}: descrição com ${descricao.length} caracteres`);
    if (/—/.test(titulo + descricao)) fora.push(`${rota}: travessão`);
  }
  assert.deepEqual(fora, []);
});
