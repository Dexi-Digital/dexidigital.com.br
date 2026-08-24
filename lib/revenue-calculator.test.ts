import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  TICKET_MIN,
  TICKET_MAX,
  SLIDER_MAX,
  computeRecovery,
  ticketFromSlider,
  sliderFromTicket,
  snapTicket,
  clamp,
  formatBRL,
  formatCompactBRL,
  parseNumericInput,
} from './revenue-calculator.ts';

test('computeRecovery: fórmula da metodologia (arredonda alertas e vendas)', () => {
  const r = computeRecovery({ base: 500, ticket: 180_000, qualificacao: 5.2, fechamento: 20 });
  assert.equal(r.alertas, 26); // round(500 * 0.052)
  assert.equal(r.vendas, 5); // round(26 * 0.20)
  assert.equal(r.pipeline, 26 * 180_000);
  assert.equal(r.receita, 5 * 180_000);
});

test('computeRecovery: extremos não quebram (máximo de tudo)', () => {
  const r = computeRecovery({ base: 5000, ticket: TICKET_MAX, qualificacao: 15, fechamento: 50 });
  assert.equal(r.alertas, 750);
  assert.equal(r.vendas, 375);
  assert.equal(r.receita, 375 * 10_000_000);
});

test('slider log: extremos mapeiam para min e max exatos', () => {
  assert.equal(ticketFromSlider(0), TICKET_MIN);
  assert.equal(ticketFromSlider(SLIDER_MAX), TICKET_MAX);
  assert.equal(sliderFromTicket(TICKET_MIN), 0);
  assert.equal(sliderFromTicket(TICKET_MAX), SLIDER_MAX);
});

test('slider log: cada década ocupa a mesma largura', () => {
  const decade = SLIDER_MAX / 5; // 100 → 10.000.000 são 5 décadas
  assert.equal(sliderFromTicket(1_000), decade);
  assert.equal(sliderFromTicket(10_000), decade * 2);
  assert.equal(sliderFromTicket(100_000), decade * 3);
  assert.equal(sliderFromTicket(1_000_000), decade * 4);
});

test('slider log: ida e volta é estável após snap', () => {
  for (const t of [100, 250, 1_000, 4_500, 38_000, 180_000, 1_250_000, 10_000_000]) {
    const snapped = snapTicket(ticketFromSlider(sliderFromTicket(t)));
    assert.equal(snapped, t);
  }
});

test('snapTicket: passo cresce com a magnitude', () => {
  assert.equal(snapTicket(104), 100); // < 1 mil → R$ 10
  assert.equal(snapTicket(1_049), 1_000); // < 10 mil → R$ 100
  assert.equal(snapTicket(12_499), 12_000); // < 100 mil → R$ 1 mil
  assert.equal(snapTicket(184_999), 180_000); // < 1 mi → R$ 10 mil
  assert.equal(snapTicket(1_274_999), 1_250_000); // ≥ 1 mi → R$ 50 mil
});

test('snapTicket: nunca sai do range', () => {
  assert.equal(snapTicket(1), TICKET_MIN);
  assert.equal(snapTicket(99_999_999), TICKET_MAX);
});

test('clamp', () => {
  assert.equal(clamp(5, 1, 3), 3);
  assert.equal(clamp(-1, 1, 3), 1);
  assert.equal(clamp(2, 1, 3), 2);
});

test('formatBRL: sem centavos, pt-BR', () => {
  assert.equal(formatBRL(180_000).replace(/ /g, ' '), 'R$ 180.000');
  assert.equal(formatBRL(0).replace(/ /g, ' '), 'R$ 0');
});

test('formatCompactBRL: rótulos curtos para os eixos', () => {
  assert.equal(formatCompactBRL(100), 'R$ 100');
  assert.equal(formatCompactBRL(1_000), 'R$ 1 mil');
  assert.equal(formatCompactBRL(10_000), 'R$ 10 mil');
  assert.equal(formatCompactBRL(180_000), 'R$ 180 mil');
  assert.equal(formatCompactBRL(1_000_000), 'R$ 1 mi');
  assert.equal(formatCompactBRL(1_250_000), 'R$ 1,25 mi');
  assert.equal(formatCompactBRL(10_000_000), 'R$ 10 mi');
  assert.equal(formatCompactBRL(3_750_000_000), 'R$ 3,75 bi');
});

test('parseNumericInput: aceita formatos digitados pelo usuário', () => {
  assert.equal(parseNumericInput('180000'), 180_000);
  assert.equal(parseNumericInput('R$ 180.000'), 180_000);
  assert.equal(parseNumericInput('1.250.000'), 1_250_000);
  assert.equal(parseNumericInput('5,2'), 5.2);
  assert.equal(parseNumericInput('5.2'), 5.2);
  assert.equal(parseNumericInput(''), null);
  assert.equal(parseNumericInput('abc'), null);
});
