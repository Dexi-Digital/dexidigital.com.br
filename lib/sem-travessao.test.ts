import { test } from 'node:test';
import assert from 'node:assert/strict';
import { semTravessao } from './sem-travessao.ts';

test('travessão entre orações vira vírgula', () => {
  assert.equal(semTravessao('não é apenas tecnologia — é estratégia'), 'não é apenas tecnologia, é estratégia');
});

test('par de travessões vira par de vírgulas', () => {
  assert.equal(
    semTravessao('As fontes — CRM e estoque — ficam conectadas.'),
    'As fontes, CRM e estoque, ficam conectadas.',
  );
});

test('em título de markdown, o primeiro vira dois-pontos', () => {
  assert.equal(semTravessao('### TL;DR — Resumo Executivo'), '### TL;DR: Resumo Executivo');
  assert.equal(semTravessao('## FAQ — Perguntas Frequentes'), '## FAQ: Perguntas Frequentes');
});

test('depois de rótulo em negrito vira dois-pontos', () => {
  assert.equal(
    semTravessao('- **Diagnóstico** — mapeamento do funil.'),
    '- **Diagnóstico**: mapeamento do funil.',
  );
});

test('opção titulo: o primeiro vira dois-pontos', () => {
  assert.equal(semTravessao('IA na saúde — o que muda', { titulo: true }), 'IA na saúde: o que muda');
});

test('entre números vira hífen', () => {
  assert.equal(semTravessao('de 2023—2024'), 'de 2023-2024');
  assert.equal(semTravessao('de 2023 — 2024'), 'de 2023-2024');
});

test('colado em palavra vira vírgula', () => {
  assert.equal(semTravessao('palavra—outra'), 'palavra, outra');
});

test('antes de pontuação some; depois de pontuação não duplica', () => {
  assert.equal(semTravessao('fim do texto —.'), 'fim do texto.');
  assert.equal(semTravessao('primeiro, — depois'), 'primeiro, depois');
});

test('no início da linha vira item de lista', () => {
  assert.equal(semTravessao('— primeiro item\n— segundo item'), '- primeiro item\n- segundo item');
});

test('preserva \\r\\n e linhas sem travessão', () => {
  assert.equal(semTravessao('linha um\r\nlinha — dois\r\n'), 'linha um\r\nlinha, dois\r\n');
});

test('entidades HTML de travessão também saem', () => {
  assert.equal(semTravessao('a &mdash; b &#8212; c'), 'a, b, c');
});

test('meia-risca com espaços conta como travessão; sem espaços (intervalo) fica', () => {
  assert.equal(semTravessao('a – b'), 'a, b');
  assert.equal(semTravessao('de 7–21 dias'), 'de 7–21 dias');
});

test('texto sem travessão volta idêntico', () => {
  const texto = 'Nada a mudar aqui: vírgulas, (parênteses) e ponto.';
  assert.equal(semTravessao(texto), texto);
});
