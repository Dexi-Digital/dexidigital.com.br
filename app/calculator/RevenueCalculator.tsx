'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/tracking';
import {
  BASE_MAX,
  BASE_MIN,
  BASE_STEP,
  CLOSE_MAX,
  CLOSE_MIN,
  DEFAULTS,
  QUAL_MAX,
  QUAL_MIN,
  SLIDER_MAX,
  TICKET_MAX,
  TICKET_MIN,
  TICKET_TICKS,
  clamp,
  computeRecovery,
  formatBRL,
  formatCompactBRL,
  formatInt,
  parseNumericInput,
  sliderFromTicket,
  snapTicket,
  ticketFromSlider,
} from '@/lib/revenue-calculator';

const pct1 = (v: number) =>
  v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const pct2 = (v: number) =>
  v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Escala o número-herói conforme o comprimento, para nunca estourar no mobile. */
function heroSizeFor(text: string): string {
  if (text.length <= 12) return 'text-4xl sm:text-5xl lg:text-6xl';
  if (text.length <= 16) return 'text-3xl sm:text-4xl lg:text-5xl';
  return 'text-2xl sm:text-3xl lg:text-4xl';
}

export default function RevenueCalculator() {
  const [base, setBase] = useState<number>(DEFAULTS.base);
  const [ticket, setTicket] = useState<number>(DEFAULTS.ticket);
  const [qualificacao, setQualificacao] = useState<number>(DEFAULTS.qualificacao);
  const [fechamento, setFechamento] = useState<number>(DEFAULTS.fechamento);
  const [advOpen, setAdvOpen] = useState(false);
  const headerHeight = useHeaderHeight();

  const { alertas, vendas, pipeline, receita } = useMemo(
    () => computeRecovery({ base, ticket, qualificacao, fechamento }),
    [base, ticket, qualificacao, fechamento]
  );

  const salePct = (qualificacao * fechamento) / 100;
  const receitaText = formatBRL(receita);

  const whatsappUrl = useMemo(() => {
    const msg =
      `Olá! Usei a calculadora de receita recuperável da Dexi: ` +
      `${formatInt(base)} cotações paradas com ticket médio de ${formatBRL(ticket)} ` +
      `→ estimativa de ${formatBRL(receita)} em receita recuperável. ` +
      `Quero agendar o diagnóstico de 24h.`;
    return getWhatsAppUrl(msg);
  }, [base, ticket, receita]);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero compacto */}
      <section className="section-hero-premium !py-12 md:!py-16 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">
              Sistema Operacional de Receita · por Dexi
            </p>
            <h1 className="text-display-lg md:text-display-xl text-[var(--text-primary)] mb-4 animate-fade-in-up delay-75">
              Calculadora de <span className="text-result">Receita Recuperável</span>
            </h1>
            <p className="text-lead text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in-up delay-150">
              Descubra quanto dinheiro está parado na sua base de cotações não fechadas.
              Ajuste os números da sua operação e veja o pipeline reaberto em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile: resultado sempre visível enquanto ajusta os sliders */}
      <div
        className="lg:hidden sticky z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-xl"
        style={{ top: headerHeight }}
      >
        <div className="container">
          <div className="flex items-baseline justify-between gap-3 py-3">
            <span className="text-caption uppercase tracking-wider">Receita estimada</span>
            <span className="text-result text-xl font-extrabold tabular-nums">{receitaText}</span>
          </div>
        </div>
      </div>

      {/* Calculadora */}
      <section className="section !py-10 md:!py-16 bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            {/* Entradas */}
            <div className="card p-5 sm:p-7">
              <p className="text-overline">Parâmetros da operação</p>

              <div className="mt-6 space-y-8">
                <Field
                  id="base"
                  label="Cotações / leads parados no ano"
                  value={base}
                  display={formatInt(base)}
                  sliderValue={base}
                  sliderMin={BASE_MIN}
                  sliderMax={BASE_MAX}
                  sliderStep={BASE_STEP}
                  onSlider={(v) => setBase(clamp(Math.round(v), BASE_MIN, BASE_MAX))}
                  onCommit={(v) => setBase(clamp(Math.round(v), BASE_MIN, BASE_MAX))}
                  ticks={[formatInt(BASE_MIN), formatInt(BASE_MAX)]}
                  inputMode="numeric"
                />

                <Field
                  id="ticket"
                  label="Ticket médio do produto ou serviço"
                  hint="De R$ 100 a R$ 10 milhões. Digite o valor exato ou arraste — a escala é logarítmica."
                  value={ticket}
                  display={formatBRL(ticket)}
                  sliderValue={sliderFromTicket(ticket)}
                  sliderMin={0}
                  sliderMax={SLIDER_MAX}
                  sliderStep={1}
                  onSlider={(pos) => setTicket(snapTicket(ticketFromSlider(pos)))}
                  onCommit={(v) => setTicket(clamp(Math.round(v), TICKET_MIN, TICKET_MAX))}
                  ticks={TICKET_TICKS.map((t) => formatCompactBRL(t).replace('R$ ', ''))}
                  inputMode="numeric"
                />
              </div>

              <button
                type="button"
                onClick={() => setAdvOpen((o) => !o)}
                aria-expanded={advOpen}
                aria-controls="calc-advanced"
                className="mt-8 flex w-full items-center justify-between gap-3 text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-sm font-medium text-[var(--text-primary)] transition-base hover:border-[var(--border-strong)] hover:bg-[var(--bg-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
              >
                Configurações avançadas de conversão
                <svg
                  className={`h-4 w-4 text-[var(--text-tertiary)] transition-transform duration-200 ${advOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {advOpen && (
                <div id="calc-advanced" className="space-y-5 pt-5 animate-fade-in-up-subtle">
                  <div className="rounded-xl border border-[var(--color-primary-500)]/30 bg-[var(--bg-brand-subtle)] p-4">
                    <Field
                      id="qualificacao"
                      label="Taxa de reativação da base"
                      badge={
                        <span className="badge badge-primary gap-1">
                          <ShieldIcon className="h-3 w-3" /> validado
                        </span>
                      }
                      value={qualificacao}
                      display={`${pct1(qualificacao)}%`}
                      sliderValue={qualificacao}
                      sliderMin={QUAL_MIN}
                      sliderMax={QUAL_MAX}
                      sliderStep={0.1}
                      onSlider={(v) => setQualificacao(clamp(Number(v.toFixed(1)), QUAL_MIN, QUAL_MAX))}
                      onCommit={(v) => setQualificacao(clamp(Number(v.toFixed(1)), QUAL_MIN, QUAL_MAX))}
                      ticks={[`${QUAL_MIN}%`, `${QUAL_MAX}%`]}
                      inputMode="decimal"
                      accent="primary"
                    />
                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-tertiary)]">
                      Alertas gerados sobre a base parada. Validado em duas operações reais e independentes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--border-result)] bg-[var(--bg-result-subtle)] p-4">
                    <Field
                      id="fechamento"
                      label="Taxa de fechamento dos alertas"
                      badge={
                        <span className="badge bg-[var(--bg-result-subtle)] text-[var(--text-result)]">
                          editável
                        </span>
                      }
                      value={fechamento}
                      display={`${formatInt(fechamento)}%`}
                      sliderValue={fechamento}
                      sliderMin={CLOSE_MIN}
                      sliderMax={CLOSE_MAX}
                      sliderStep={1}
                      onSlider={(v) => setFechamento(clamp(Math.round(v), CLOSE_MIN, CLOSE_MAX))}
                      onCommit={(v) => setFechamento(clamp(Math.round(v), CLOSE_MIN, CLOSE_MAX))}
                      ticks={[`${CLOSE_MIN}%`, `${CLOSE_MAX}%`]}
                      inputMode="numeric"
                      accent="result"
                    />
                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-tertiary)]">
                      Valor de referência. Ajuste para a taxa de fechamento real do seu time comercial.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Resultados */}
            <div className="space-y-5 lg:sticky lg:top-24">
              <div
                className="card card-result p-6 sm:p-8 border-[var(--border-result)]"
                style={{ boxShadow: 'var(--shadow-result)' }}
              >
                <p className="text-caption uppercase tracking-[0.18em]">Receita estimada em caixa</p>
                <p
                  className={`mt-3 font-extrabold leading-none tracking-tight text-result tabular-nums break-words ${heroSizeFor(receitaText)}`}
                >
                  {receitaText}
                </p>
                <p className="mt-4 text-body-sm">Sem R$ 1 adicional de investimento em mídia.</p>
              </div>

              <div className="grid gap-4 grid-cols-2">
                <MetricCard
                  className="col-span-2"
                  icon={<TrendingIcon className="h-4 w-4" />}
                  label="Pipeline reaberto"
                  value={formatBRL(pipeline)}
                  suffix={pipeline >= 1_000 ? `≈ ${formatCompactBRL(pipeline)}` : undefined}
                />
                <MetricCard
                  icon={<UsersIcon className="h-4 w-4" />}
                  label="Oportunidades requalificadas"
                  value={formatInt(alertas)}
                  suffix="alertas"
                />
                <MetricCard
                  icon={<TargetIcon className="h-4 w-4" />}
                  label="Vendas estimadas"
                  value={formatInt(vendas)}
                  suffix="negócios"
                />
              </div>

              <div className="card p-5 sm:p-7">
                <p className="text-overline">Funil de recuperação</p>
                <div className="mt-6 space-y-6">
                  <FunnelStep
                    tone="base"
                    title="Base parada"
                    main={`${formatInt(base)} cotações`}
                    sub="100% da base"
                    pct={100}
                  />
                  <FunnelStep
                    tone="qualified"
                    title="Alertas qualificados"
                    main={formatInt(alertas)}
                    sub={`${pct1(qualificacao)}% da base`}
                    pct={qualificacao}
                    badge="validado"
                  />
                  <FunnelStep
                    tone="sales"
                    title="Vendas fechadas"
                    main={formatInt(vendas)}
                    sub={`${pct2(salePct)}% da base · ${formatInt(fechamento)}% dos alertas`}
                    pct={salePct}
                    badge="estimativa do cliente"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt border-t border-[var(--border-subtle)] py-14 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 mb-3">Uma conversa de 30 minutos.</h2>
            <p className="text-lead mb-8">
              Você traz um número, <span className="text-highlight">sai com outro</span>.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('calculator_cta', 'calculator')}
              className="btn btn-lg btn-money w-full sm:w-auto"
            >
              Agendar diagnóstico de 24h
            </a>
            <p className="mt-4 text-caption">Sem custo. Sem compromisso. Direto no WhatsApp.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Altura real do <header> sticky do site, para encaixar a barra de resultado logo abaixo dele. */
function useHeaderHeight(fallback = 64): number {
  const [height, setHeight] = useState(fallback);
  useEffect(() => {
    const el = document.querySelector('header');
    if (!el) return;
    const update = () => setHeight(Math.round(el.getBoundingClientRect().height));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return height;
}

// ---------------------------------------------------------------------------
// Campo: rótulo + input numérico editável + slider + marcas do eixo
// ---------------------------------------------------------------------------

type Accent = 'default' | 'primary' | 'result';

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  badge?: ReactNode;
  /** Valor real (o que entra no cálculo). */
  value: number;
  /** Como o valor aparece quando o input não está em edição. */
  display: string;
  /** Posição do slider — pode estar em outra escala (log) que `value`. */
  sliderValue: number;
  sliderMin: number;
  sliderMax: number;
  sliderStep: number;
  onSlider: (sliderValue: number) => void;
  /** Valor digitado no input (já numérico), a ser validado/clampado. */
  onCommit: (typed: number) => void;
  ticks: readonly string[];
  inputMode: 'numeric' | 'decimal';
  accent?: Accent;
}

function Field({
  id,
  label,
  hint,
  badge,
  value,
  display,
  sliderValue,
  sliderMin,
  sliderMax,
  sliderStep,
  onSlider,
  onCommit,
  ticks,
  inputMode,
  accent = 'default',
}: FieldProps) {
  const [editing, setEditing] = useState(false);
  const [raw, setRaw] = useState('');

  const valueColor =
    accent === 'result'
      ? 'text-[var(--text-result)]'
      : accent === 'primary'
        ? 'text-[var(--text-brand)]'
        : 'text-[var(--text-primary)]';

  const pct = ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * 100;

  const commit = () => {
    const n = parseNumericInput(raw);
    if (n !== null) onCommit(n);
    setEditing(false);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
          {label}
          {badge}
        </label>
        <input
          id={id}
          type="text"
          inputMode={inputMode}
          value={editing ? raw : display}
          onFocus={(e) => {
            setRaw(String(value).replace('.', ','));
            setEditing(true);
            requestAnimationFrame(() => e.target.select());
          }}
          onChange={(e) => setRaw(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
            if (e.key === 'Escape') {
              setEditing(false);
              (e.target as HTMLInputElement).blur();
            }
          }}
          className={`h-10 w-full sm:w-40 rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-3 text-right font-semibold tabular-nums transition-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent ${valueColor}`}
          aria-label={label}
        />
      </div>

      <input
        type="range"
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        value={sliderValue}
        onChange={(e) => onSlider(Number(e.target.value))}
        aria-label={`${label} (controle deslizante)`}
        aria-valuetext={display}
        className={`range-slider mt-1 ${accent === 'result' ? 'range-slider--result' : ''}`}
        style={{ '--range-pct': `${pct}%` } as React.CSSProperties}
      />

      <div className="flex justify-between text-[11px] text-[var(--text-tertiary)] tabular-nums" aria-hidden="true">
        {ticks.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      {hint && <p className="mt-2 text-xs text-[var(--text-tertiary)]">{hint}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Cards de métrica e funil
// ---------------------------------------------------------------------------

function MetricCard({
  icon,
  label,
  value,
  suffix,
  className = '',
}: {
  icon: ReactNode;
  label: string;
  value: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <div className={`card p-4 sm:p-5 ${className}`}>
      <div className="flex items-center gap-2 text-[var(--text-tertiary)]">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-3 text-xl xl:text-2xl font-semibold tabular-nums text-[var(--text-primary)] break-words">{value}</p>
      {suffix && <p className="mt-0.5 text-xs text-[var(--text-tertiary)] tabular-nums">{suffix}</p>}
    </div>
  );
}

function FunnelStep({
  tone,
  title,
  main,
  sub,
  pct,
  badge,
}: {
  tone: 'base' | 'qualified' | 'sales';
  title: string;
  main: string;
  sub: string;
  pct: number;
  badge?: string;
}) {
  const width = Math.max(4, Math.min(100, pct));
  const bar =
    tone === 'sales'
      ? 'bg-[var(--color-result-500)]'
      : tone === 'qualified'
        ? 'bg-[var(--color-primary-400)]'
        : 'bg-[var(--color-primary-600)]';
  const text = tone === 'sales' ? 'text-[var(--text-result)]' : 'text-[var(--text-brand)]';
  const badgeCls =
    tone === 'sales' ? 'bg-[var(--bg-result-subtle)] text-[var(--text-result)]' : 'badge-primary';

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[var(--text-primary)]">{title}</span>
          {badge && <span className={`badge text-[10px] ${badgeCls}`}>{badge}</span>}
        </div>
        <span className={`text-lg font-semibold tabular-nums ${text}`}>{main}</span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
        <div className={`h-full rounded-full transition-all duration-500 ${bar}`} style={{ width: `${width}%` }} />
      </div>
      <p className="mt-1.5 text-[11px] text-[var(--text-tertiary)]">{sub}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Ícones inline (sem dependência de biblioteca)
// ---------------------------------------------------------------------------

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}
