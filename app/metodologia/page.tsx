import Link from 'next/link';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metodologia Dexi | Processo Consultivo de IA e Dados',
  description: 'Conheça o Processo Dexi: metodologia consultiva em 5 etapas para implementar IA e inteligência de dados com governança, resultados mensuráveis e revisão técnica humana.',
  keywords: ['metodologia consultoria IA', 'processo implementação IA', 'consultoria de dados', 'governança IA'],
};

const steps = [
  {
    number: '01',
    title: 'Imersão & Diagnóstico de ROI',
    duration: '1-2 semanas',
    description: 'Mapeamos gargalos operacionais para validar onde a IA agêntica gerará o maior ganho de EBITDA em operações como a Attra e a TGV.',
    deliverables: ['Business Case de Viabilidade Financeira', 'Blueprint de Processos Críticos', 'Projeção de ROI e Recuperação de Ativos', 'Matriz de Priorização "Quick Wins"'],
  },
  {
    number: '02',
    title: 'Mapeamento de Fluxos Críticos',
    duration: '2-3 semanas',
    description: 'Desenho da arquitetura de interoperabilidade entre o Synapse OS e seus sistemas legados (DMS, CRM, ERP).',
    deliverables: ['Inventário de Ativos de Dados', 'Relatório de Higiene e Qualidade de Dados', 'Mapa de Arquitetura de Integração', 'Protocolo de Governança e Ética de Dados'],
  },
  {
    number: '03',
    title: 'Engenharia de Adaptação (Custom)',
    duration: '2-4 semanas',
    description: 'Nossa expertise sênior entra para customizar o core do Synapse OS, garantindo que a tecnologia se molde ao seu DNA corporativo.',
    deliverables: ['Documento de Arquitetura Proprietária', 'Especificação Técnica de Integração Legada', 'Matriz de Riscos e Requisitos de Infra', 'Plano de Segurança e Soberania Digital'],
  },
  {
    number: '04',
    title: 'Orquestração & Deploy Enterprise',
    duration: '4-8 semanas',
    description: 'Ativação controlada dos agentes com camadas de segurança, garantindo uma transição fluida para a execução autônoma.',
    deliverables: ['Operação Assistida (Pilot Deployment)', 'Dashboards de Monitoramento de Performance', 'Relatório de Validação de Hipóteses de ROI', 'Manual de Governança "Human-in-the-loop"'],
  },
  {
    number: '05',
    title: 'Evolução de Ativos & Escala',
    duration: 'Contínuo',
    description: 'Manutenção do ciclo de aprendizado. O software não é estático; ele valoriza como um ativo conforme o raciocínio agêntico evolui.',
    deliverables: ['Ecossistema Agêntico em Produção', 'Relatório Mensal de Impacto no EBITDA', 'Roadmap de Evolução e Novas Funcionalidades', 'SLA de Sustentação Crítica e Performance'],
  },
];

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Framework de Ativação Agêntica (Synapse OS)</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Metodologia consultiva para{' '}
              <span className="text-display-gradient">resultados reais</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Protocolo de engenharia em 5 estágios desenhado para converter operações passivas em ecossistemas agênticos autônomos.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card card-feature p-8 text-center group">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Supervisão de Engenharia (Human-in-the-loop)</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">A IA orquestra a execução, mas nossos engenheiros sêniores garantem a integridade técnica. Unimos a velocidade agêntica ao discernimento humano de elite para blindar a operação contra riscos e erros críticos.</p>
              </div>
              <div className="card card-feature p-8 text-center group">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Engenharia de Valor &amp; Impacto no EBITDA</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Não iniciamos implementações sem um modelo de retorno claro. Mapeamos a economia de custos e o ganho de liquidez operacional, transformando a tecnologia de uma despesa em um ativo financeiro mensurável.</p>
              </div>
              <div className="card card-feature p-8 text-center group">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Soberania Digital &amp; Compliance Enterprise</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Segurança não é um acessório, é a base. Construímos sistemas agênticos com trilhas de auditoria completas, garantindo que cada decisão da IA seja rastreável, ética e em total conformidade com os riscos corporativos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">As 5 Etapas do Framework de Ativação Agêntica</h2>
              <p className="text-lead">Do diagnóstico ao rollout, com entregas tangíveis em cada fase</p>
            </div>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="card card-interactive p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[var(--gradient-primary)] text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-[var(--shadow-primary)]">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-h4">{step.title}</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-body-sm text-[var(--text-secondary)] mb-4">{step.description}</p>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Entregáveis:</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-body-sm text-[var(--text-secondary)]">
                              <svg className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
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

      {/* CTA Section */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Pronto para ativar seu Ecossistema Agêntico?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Inicie sua jornada com nosso Framework de Ativação. Valide o impacto real do Synapse OS no seu EBITDA, seguindo o modelo de sucesso da Attra Veículos e TGV Empreendimentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Solicitar Validação de ROI
              </a>
              <Link href="/cases" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
              Conhecer o Synapse →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

