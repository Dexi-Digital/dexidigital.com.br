import { test } from 'node:test';
import assert from 'node:assert/strict';
import { datasDoLog, maisRecenteEntre, maisRecente } from './datas-paginas.ts';

const LOG = [
  '@2026-10-11T20:00:00-03:00',
  '',
  'app/sobre/page.tsx',
  'lib/seo/fabricas.ts',
  '@2026-09-01T10:00:00-03:00',
  '',
  'app/sobre/page.tsx',
  'app/blog-antigo/page.tsx',
  'app/setores/fabricas/[slug]/page.tsx',
].join('\n');

test('vale o commit mais recente de cada arquivo', () => {
  const datas = datasDoLog(LOG);
  assert.equal(datas.get('app/sobre/page.tsx')?.toISOString(), '2026-10-11T23:00:00.000Z');
  assert.equal(datas.get('app/setores/fabricas/[slug]/page.tsx')?.toISOString(), '2026-09-01T13:00:00.000Z');
});

test('página com template e dados pega a data mais nova dos dois', () => {
  const datas = datasDoLog(LOG);
  const data = maisRecenteEntre(datas, ['app/setores/fabricas', 'lib/seo/fabricas.ts']);
  assert.equal(data?.toISOString(), '2026-10-11T23:00:00.000Z');
});

test('pasta não casa com outra que só começa igual', () => {
  const datas = datasDoLog(LOG);
  assert.equal(maisRecenteEntre(datas, ['app/blog']), undefined);
});

test('sem git, nenhuma data: a URL sai sem lastmod', () => {
  assert.equal(maisRecenteEntre(new Map(), ['app/sobre']), undefined);
});

test('maisRecente ignora ausentes e datas inválidas', () => {
  assert.equal(maisRecente(undefined, null, 'lixo')?.toISOString(), undefined);
  assert.equal(maisRecente('2026-08-09', new Date('2026-10-01T00:00:00Z'))?.toISOString(), '2026-10-01T00:00:00.000Z');
});
