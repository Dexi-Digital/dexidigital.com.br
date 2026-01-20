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
    title: 'Diagnóstico Estratégico',
    duration: '1-2 semanas',
    description: 'Mapeamento profundo dos processos, dados e dores do negócio. Identificamos onde IA e dados podem gerar impacto real.',
    deliverables: ['Relatório de oportunidades', 'Mapa de processos críticos', 'Estimativa de ROI', 'Priorização de quick wins'],
  },
  {
    number: '02',
    title: 'Mapeamento de Dados',
    duration: '2-3 semanas',
    description: 'Auditoria completa das fontes de dados existentes. Qualidade, governança e integrações necessárias.',
    deliverables: ['Inventário de dados', 'Análise de qualidade', 'Arquitetura de integração', 'Plano de governança'],
  },
  {
    number: '03',
    title: 'Arquitetura da Solução',
    duration: '2-4 semanas',
    description: 'Design técnico detalhado com tecnologias, infraestrutura e modelos de IA. Sempre com revisão técnica humana.',
    deliverables: ['Documento de arquitetura', 'Stack tecnológico', 'Requisitos de infraestrutura', 'Plano de segurança'],
  },
  {
    number: '04',
    title: 'PoC / Piloto',
    duration: '4-8 semanas',
    description: 'Prova de conceito funcional em ambiente controlado. Validação de hipóteses com dados reais.',
    deliverables: ['Protótipo funcional', 'Métricas de validação', 'Ajustes baseados em feedback', 'Business case atualizado'],
  },
  {
    number: '05',
    title: 'Rollout e Evolução',
    duration: 'Contínuo',
    description: 'Implementação em produção com monitoramento, treinamento de equipes e evolução contínua.',
    deliverables: ['Sistema em produção', 'Documentação técnica', 'Treinamento de usuários', 'SLA de suporte'],
  },
];

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Processo Dexi</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Metodologia consultiva para{' '}
              <span className="text-display-gradient">resultados reais</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Processo estruturado em 5 etapas que transforma desafios de negócio
              em soluções de IA e dados com governança, transparência e ROI mensurável.
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
                <h3 className="text-h5 mb-3">Revisão Técnica Humana</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Toda solução passa por especialistas. IA acelera, humanos garantem qualidade.</p>
              </div>
              <div className="card card-feature p-8 text-center group">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">ROI Mensurável</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Métricas definidas desde o início. Você sabe exatamente o retorno esperado.</p>
              </div>
              <div className="card card-feature p-8 text-center group">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Governança desde o Dia 1</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Segurança, compliance e auditabilidade em cada etapa do processo.</p>
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
              <h2 className="text-h2">As 5 Etapas do Processo Dexi</h2>
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
              Pronto para começar?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e descubra o potencial de IA e dados para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Agendar Diagnóstico em 24h
              </a>
              <Link href="/cases" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Ver cases de sucesso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

