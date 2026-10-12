import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { PAGINAS_REMOVIDAS } from './paginas-removidas.ts';

const raiz = join(import.meta.dirname, '..');

test('toda página removida cai no matcher do proxy (senão o 410 não acontece)', () => {
  const proxy = readFileSync(join(raiz, 'proxy.ts'), 'utf8');
  const matcher = proxy.match(/matcher:\s*\[([^\]]+)\]/)?.[1] ?? '';
  const prefixos = [...matcher.matchAll(/'(\/[a-z0-9-]+)\/:path\*'/g)].map((m) => m[1]);
  const fora = PAGINAS_REMOVIDAS.filter((p) => !prefixos.some((prefixo) => p.startsWith(`${prefixo}/`)));
  assert.deepEqual(fora, []);
});

test('nenhuma página do site linka para página removida', () => {
  const removidas = new Set(PAGINAS_REMOVIDAS);
  const arquivos = ['app', 'lib', 'components']
    .flatMap((pasta) => readdirSync(join(raiz, pasta), { recursive: true, withFileTypes: true }))
    .filter((e) => e.isFile() && /\.(tsx?|mjs)$/.test(e.name) && !/^paginas-removidas(\.test)?\.ts$/.test(e.name))
    .map((e) => join(e.parentPath, e.name));
  const links: string[] = [];
  for (const arquivo of arquivos) {
    for (const [caminho] of readFileSync(arquivo, 'utf8').matchAll(/\/(materiais|downloads|integracoes|solucoes|guias|setores|glossario-ia-automotiva|comparativo)\/[a-z0-9.-]+/g)) {
      if (removidas.has(caminho)) links.push(`${arquivo.slice(raiz.length + 1)} -> ${caminho}`);
    }
  }
  assert.deepEqual(links, []);
});
