import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CATALOGO, RELACIONADOS, SECOES_HUB, DESTAQUES_HOME, relacionadosDe, hubDe } from './navegacao.ts';

test('todo relacionado aponta para página cadastrada', () => {
  for (const origem of Object.keys(RELACIONADOS)) assert.doesNotThrow(() => relacionadosDe(origem), origem);
});

test('bloco de relacionados tem 2 ou 3 irmãs, sem repetir nem apontar para si', () => {
  for (const [origem, destinos] of Object.entries(RELACIONADOS)) {
    assert.ok(destinos.length >= 2 && destinos.length <= 3, `${origem}: ${destinos.length}`);
    assert.ok(!destinos.includes(origem), `${origem} aponta para si`);
    assert.equal(new Set(destinos).size, destinos.length, `${origem} repete destino`);
  }
});

test('toda página de conteúdo tem bloco de relacionados e uma índice', () => {
  for (const href of Object.keys(CATALOGO)) {
    assert.ok(RELACIONADOS[href], `${href} sem relacionados`);
    assert.ok(hubDe(href), `${href} sem índice`);
  }
});

// A régua do Ahrefs: página com 0 links é órfã, com 1 é fraca. Contamos só o
// que este arquivo garante (índice, relacionados, home); menu e rodapé somam
// por cima para /guias, /setores, /solucoes e /metodologia.
test('toda página de conteúdo recebe pelo menos 2 links internos', () => {
  const entrada = new Map<string, Set<string>>();
  const somar = (origem: string, destino: string) => {
    if (!entrada.has(destino)) entrada.set(destino, new Set());
    entrada.get(destino)!.add(origem);
  };
  for (const [hub, secoes] of Object.entries(SECOES_HUB)) {
    for (const s of secoes) for (const item of s.itens) somar(`/${hub}`, item.href);
  }
  for (const [origem, destinos] of Object.entries(RELACIONADOS)) for (const d of destinos) somar(origem, d);
  for (const item of DESTAQUES_HOME) somar('/', item.href);

  const fracas = Object.keys(CATALOGO)
    .map((href) => [href, entrada.get(href)?.size ?? 0] as const)
    .filter(([, n]) => n < 2);
  assert.deepEqual(fracas, []);
});

test('as 14 páginas órfãs do Ahrefs (out/2026) estão no catálogo', () => {
  const orfas = [
    '/guias/como-escolher-crm-automotivo',
    '/guias/ia-automotiva-brasil',
    '/guias/transformacao-digital-concessionaria',
    '/solucoes/gestao-leads-automotivo',
    '/comparativo/robo-de-atendimento-vs-inteligencia-comercial',
    '/metodologia',
    '/setores/fabricas/motos-premium',
    '/setores/fabricas/performance-premium',
    '/setores/fabricas/luxo-tecnologia',
    '/setores/fabricas/seguranca-sustentabilidade',
    '/setores/fabricas/montadoras-expansao',
    '/setores/grupos/grande-porte',
    '/setores/grupos/multi-marca',
    '/setores/grupos/premium-especializado',
  ];
  assert.deepEqual(orfas.filter((o) => !CATALOGO[o]), []);
});

test('a home linka os 3 guias e a gestão de leads', () => {
  const home = new Set(DESTAQUES_HOME.map((d) => d.href));
  for (const href of Object.keys(CATALOGO).filter((h) => h.startsWith('/guias/'))) assert.ok(home.has(href), href);
  assert.ok(home.has('/solucoes/gestao-leads-automotivo'));
});

test('resumo de card é uma linha curta e sem travessão', () => {
  for (const item of Object.values(CATALOGO)) {
    assert.ok(item.resumo && item.resumo.length <= 140, `${item.href}: ${item.resumo?.length}`);
    assert.ok(!/—/.test(item.resumo + item.titulo), item.href);
  }
});
