/**
 * Calculadora de Receita Recuperável — lógica pura (sem React).
 *
 * Metodologia Fykos: da base de cotações paradas, uma fração validada
 * vira alerta qualificado; dessa fração, a taxa de fechamento do cliente
 * vira venda. Receita = vendas × ticket médio.
 */

export const BASE_MIN = 50;
export const BASE_MAX = 5_000;
export const BASE_STEP = 10;

export const TICKET_MIN = 100;
export const TICKET_MAX = 10_000_000;

export const QUAL_MIN = 1;
export const QUAL_MAX = 15;
export const CLOSE_MIN = 5;
export const CLOSE_MAX = 50;

export const DEFAULTS = {
  base: 500,
  ticket: 180_000,
  qualificacao: 5.2,
  fechamento: 20,
} as const;

/** Resolução do slider logarítmico do ticket (posições inteiras 0..SLIDER_MAX). */
export const SLIDER_MAX = 1_000;

export interface RecoveryInput {
  base: number;
  ticket: number;
  qualificacao: number; // % da base que vira alerta
  fechamento: number; // % dos alertas que vira venda
}

export interface RecoveryOutput {
  alertas: number;
  vendas: number;
  pipeline: number;
  receita: number;
}

export function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v));
}

export function computeRecovery({ base, ticket, qualificacao, fechamento }: RecoveryInput): RecoveryOutput {
  const alertas = Math.round(base * (qualificacao / 100));
  const vendas = Math.round(alertas * (fechamento / 100));
  return { alertas, vendas, pipeline: alertas * ticket, receita: vendas * ticket };
}

// ---------------------------------------------------------------------------
// Slider logarítmico do ticket médio (R$ 100 → R$ 10 mi)
//
// Um slider linear nessa faixa seria inutilizável: cada pixel valeria
// ~R$ 30 mil e tudo abaixo de R$ 100 mil ficaria espremido no canto.
// No log, cada década (100 → 1 mil → 10 mil → ...) ocupa a mesma largura.
// ---------------------------------------------------------------------------

const LOG_SPAN = Math.log10(TICKET_MAX / TICKET_MIN); // 5 décadas

export function ticketFromSlider(pos: number): number {
  const p = clamp(pos, 0, SLIDER_MAX) / SLIDER_MAX;
  const raw = TICKET_MIN * Math.pow(10, p * LOG_SPAN);
  return clamp(raw, TICKET_MIN, TICKET_MAX);
}

export function sliderFromTicket(ticket: number): number {
  const t = clamp(ticket, TICKET_MIN, TICKET_MAX);
  const p = Math.log10(t / TICKET_MIN) / LOG_SPAN;
  return Math.round(clamp(p, 0, 1) * SLIDER_MAX);
}

/** Passo "redondo" proporcional à magnitude, para o valor não ficar quebrado. */
export function ticketStep(ticket: number): number {
  if (ticket < 1_000) return 10;
  if (ticket < 10_000) return 100;
  if (ticket < 100_000) return 1_000;
  if (ticket < 1_000_000) return 10_000;
  return 50_000;
}

export function snapTicket(ticket: number): number {
  const t = clamp(ticket, TICKET_MIN, TICKET_MAX);
  const step = ticketStep(t);
  return clamp(Math.round(t / step) * step, TICKET_MIN, TICKET_MAX);
}

/** Marcas do eixo do slider (uma por década). */
export const TICKET_TICKS = [100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000] as const;

// ---------------------------------------------------------------------------
// Formatação
// ---------------------------------------------------------------------------

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

const intFormatter = new Intl.NumberFormat('pt-BR');

const compactFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });

export function formatBRL(v: number): string {
  return brlFormatter.format(v);
}

export function formatInt(v: number): string {
  return intFormatter.format(v);
}

/** "R$ 180 mil", "R$ 1,25 mi", "R$ 3,75 bi" — para eixos e resumos curtos. */
export function formatCompactBRL(v: number): string {
  const abs = Math.abs(v);
  if (abs >= 1e9) return `R$ ${compactFormatter.format(v / 1e9)} bi`;
  if (abs >= 1e6) return `R$ ${compactFormatter.format(v / 1e6)} mi`;
  if (abs >= 1e3) return `R$ ${compactFormatter.format(v / 1e3)} mil`;
  return `R$ ${compactFormatter.format(v)}`;
}

/**
 * Interpreta o que o usuário digitou: "180000", "R$ 180.000", "1.250.000",
 * "5,2" ou "5.2". Retorna null se não houver número.
 */
export function parseNumericInput(raw: string): number | null {
  const cleaned = raw.replace(/[^\d.,-]/g, '');
  if (!cleaned || !/\d/.test(cleaned)) return null;

  let normalized: string;
  if (cleaned.includes(',')) {
    // vírgula = decimal; pontos = milhar
    normalized = cleaned.replace(/\./g, '').replace(',', '.');
  } else {
    const parts = cleaned.split('.');
    const lastIsDecimal = parts.length === 2 && parts[1].length > 0 && parts[1].length <= 2;
    normalized = lastIsDecimal ? cleaned : cleaned.replace(/\./g, '');
  }

  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}
