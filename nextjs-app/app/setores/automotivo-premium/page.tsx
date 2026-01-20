import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IA para Grupos Automotivos Premium | Dexi Digital',
  description: 'Consultoria de IA e inteligência de dados para concessionárias e grupos automotivos premium. Aumente conversão de leads, otimize estoque e unifique dados do showroom ao pós-venda.',
  keywords: ['IA para concessionárias', 'inteligência de dados automotivo', 'grupos automotivos premium', 'conversão de leads automotivo', 'tecnologia brasileira'],
};

const challenges = [
  {
    problem: 'Leads de alta qualidade perdidos por falta de follow-up inteligente',
    solution: 'IA para priorização e nurturing automático de leads com alta propensão de compra',
    result: '+25% conversão de leads em vendas',
  },
  {
    problem: 'Dados fragmentados entre showroom, oficina e pós-venda',
    solution: 'Visão 360° do cliente com inteligência de dados unificada',
    result: '+40% retenção de clientes',
  },
  {
    problem: 'Estoque desalinhado com demanda real do mercado',
    solution: 'Modelos preditivos de demanda por modelo, cor e opcional',
    result: '-30% estoque ocioso',
  },
  {
    problem: 'Vendedores sem visibilidade do histórico completo do cliente',
    solution: 'Dashboard integrado com próximas ações recomendadas por IA',
    result: '+20% ticket médio',
  },
];

const cases = [
  {
    sector: 'Montadora de luxo alemã',
    problem: 'Leads de test drive convertendo apenas 8% em vendas',
    approach: 'Sistema de scoring de leads com IA + automação de nurturing personalizado',
    results: ['Conversão aumentou de 8% para 12%', 'Redução de 40% no ciclo de vendas', 'ROI de 380% em 6 meses'],
  },
  {
    sector: 'Grupo automotivo premium brasileiro',
    problem: 'Dados isolados em 12 concessionárias, sem visão consolidada',
    approach: 'Data warehouse unificado + dashboards executivos em tempo real',
    results: ['Visão 360° de 180k clientes', 'Estoque otimizado em -30%', 'Campanhas 3x mais efetivas'],
  },
];

export default function AutomotivoPremiumPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Setor Automotivo Premium</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              IA para conversão de leads em{' '}
              <span className="text-display-gradient">concessionárias premium</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              Inteligência de dados e IA estratégica para grupos automotivos que
              vendem experiência, não apenas veículos. Tecnologia brasileira com
              expertise comprovada no setor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-150">
              <Link href="/contato" className="btn btn-primary">
                Agendar Diagnóstico Automotivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Desafios que resolvemos</h2>
              <p className="text-lead">Problemas reais de grupos automotivos, soluções comprovadas</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((item, index) => (
                <div key={index} className="card card-interactive p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full mb-3 inline-block">Desafio</span>
                    <p className="text-body-sm font-medium text-[var(--text-primary)]">{item.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full mb-3 inline-block">Solução Dexi</span>
                    <p className="text-body-sm text-[var(--text-secondary)]">{item.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <span className="text-h5 text-[var(--color-success-600)]">{item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Cases de sucesso</h2>
              <p className="text-lead">Resultados reais com clientes do setor (sob NDA)</p>
            </div>

            <div className="space-y-6">
              {cases.map((caseItem, index) => (
                <div key={index} className="card card-interactive p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-overline mb-2">Setor</p>
                      <p className="text-h5">{caseItem.sector}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wide">Problema:</p>
                        <p className="text-body-sm text-[var(--text-secondary)]">{caseItem.problem}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wide">Abordagem Dexi:</p>
                        <p className="text-body-sm text-[var(--text-secondary)]">{caseItem.approach}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Resultados:</p>
                        <ul className="flex flex-wrap gap-2">
                          {caseItem.results.map((result, idx) => (
                            <li key={idx} className="px-3 py-1 text-xs font-semibold bg-[var(--color-success-100)] dark:bg-[var(--color-success-900)]/30 text-[var(--color-success-700)] dark:text-[var(--color-success-300)] rounded-full">{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Dexi for Automotive */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Por que a Dexi para automotivo?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Experiência comprovada</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">10+ anos trabalhando com grupos automotivos. Conhecemos os sistemas (DMS, CRM), as integrações e os desafios reais do setor.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Foco em resultados de vendas</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Não entregamos relatórios bonitos. Entregamos mais conversão, mais retenção e menos estoque parado.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">Tecnologia brasileira</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Equipe local, suporte em português, conhecimento do mercado brasileiro e compliance com LGPD.</p>
              </div>
              <div className="card card-feature p-6 group">
                <h3 className="text-h5 mb-3">IA com governança</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">IA explicável e auditável. Você entende cada recomendação e mantém controle total sobre os dados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Pronto para transformar seus dados em vendas?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e descubra como IA pode aumentar
              sua conversão de leads em até 50%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Agendar Diagnóstico em 24h
              </Link>
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

