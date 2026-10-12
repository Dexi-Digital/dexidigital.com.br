import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { POSTS_REMOVIDOS } from './blog-removidos.ts';
import { BLOG_REDIRECTS } from './blog-redirects.ts';
import { blogArticles } from './blog-data.ts';

const origens = new Set(BLOG_REDIRECTS.map(([origem]) => origem));
const destinos = new Set(BLOG_REDIRECTS.map(([, destino]) => destino));
const removidos = new Set(POSTS_REMOVIDOS);
const publicados = new Set(blogArticles.map((a) => a.slug));

test('slug removido não está também nos redirects (o redirect esconderia o 410)', () => {
  const nosDois = POSTS_REMOVIDOS.filter((slug) => origens.has(slug) || destinos.has(slug));
  assert.deepEqual(nosDois, []);
});

test('todo 301 chega ao destino em um salto', () => {
  const emCadeia = BLOG_REDIRECTS.filter(([, destino]) => origens.has(destino));
  assert.deepEqual(emCadeia, []);
});

test('todo destino de 301 é um post publicado', () => {
  const semPost = [...destinos].filter((destino) => !publicados.has(destino));
  assert.deepEqual(semPost, []);
});

test('post removido ou redirecionado saiu de blog-data (e com isso do sitemap e do /blog)', () => {
  const sobrando = [...removidos, ...origens].filter((slug) => publicados.has(slug));
  assert.deepEqual(sobrando, []);
});

test('nenhuma página do site linka para post removido ou redirecionado', () => {
  const raiz = join(import.meta.dirname, '..');
  const arquivos = ['app', 'lib', 'components', 'public']
    .flatMap((pasta) => readdirSync(join(raiz, pasta), { recursive: true, withFileTypes: true }))
    // isFile: app/llms.txt é pasta de rota, não arquivo.
    .filter((e) => e.isFile() && /\.(tsx?|mjs|md|txt)$/.test(e.name) && !/^blog-(data|removidos|redirects)(\.test)?\.ts$/.test(e.name))
    .map((e) => join(e.parentPath, e.name));
  const linksQuebrados: string[] = [];
  for (const arquivo of arquivos) {
    for (const [, slug] of readFileSync(arquivo, 'utf8').matchAll(/\/blog\/([a-z0-9-]+)/g)) {
      if (removidos.has(slug) || origens.has(slug)) linksQuebrados.push(`${arquivo.slice(raiz.length + 1)} -> ${slug}`);
    }
  }
  assert.deepEqual(linksQuebrados, []);
});

test('nenhum post linka para post removido ou redirecionado', () => {
  const linksQuebrados: string[] = [];
  for (const artigo of blogArticles) {
    for (const [, slug] of artigo.content.matchAll(/dexidigital\.com\.br\/blog\/([a-z0-9-]+)|\]\(\/blog\/([a-z0-9-]+)/g)) {
      if (slug && (removidos.has(slug) || origens.has(slug))) linksQuebrados.push(`${artigo.slug} -> ${slug}`);
    }
  }
  assert.deepEqual(linksQuebrados, []);
});
