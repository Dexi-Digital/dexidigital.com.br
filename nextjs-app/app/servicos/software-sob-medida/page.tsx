import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Sob Medida',
  description:
    'Aplicações web e mobile enterprise. Arquitetura escalável, código limpo e documentação completa. Construído para durar além dos ciclos de hype.',
};

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/servicos"
              className="inline-flex items-center text-[var(--color-primary-600)] font-semibold mb-6 hover:text-[var(--color-primary-700)] transition-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Serviços
            </Link>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Serviço</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Software <span className="text-display-gradient">Sob Medida</span>
            </h1>
            <p className="text-lead max-w-2xl animate-fade-in-up delay-100">
              Aplicações web e mobile enterprise. Arquitetura escalável, código
              limpo e documentação completa. Construído para durar.
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">O que entregamos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Arquitetura moderna (microserviços, serverless)',
                'Testes automatizados e CI/CD',
                'Documentação técnica completa',
                'Suporte e evolução contínua',
                'Aplicações web responsivas',
                'Apps mobile nativos (iOS/Android)',
                'APIs RESTful e GraphQL',
                'Integração com sistemas legados',
              ].map((item) => (
                <div key={item} className="card p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Nossa abordagem</h2>
            </div>
            <div className="space-y-4">
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">01</span>
                  <h3 className="text-h5">Descoberta e Planejamento</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Entendemos profundamente seus desafios de negócio, processos
                  atuais e objetivos. Definimos escopo, arquitetura e roadmap técnico.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">02</span>
                  <h3 className="text-h5">Desenvolvimento Iterativo</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Entregas incrementais com validação contínua. Sprints de 2
                  semanas com demos e feedback constante.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">03</span>
                  <h3 className="text-h5">Qualidade e Testes</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Testes automatizados, code review rigoroso, CI/CD e
                  monitoramento. Qualidade não é negociável.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">04</span>
                  <h3 className="text-h5">Deploy e Suporte</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Deploy em produção com documentação completa, treinamento de
                  equipes e suporte contínuo com SLA definido.
                </p>
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
              Construa software que dura
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito para discutir seu projeto.
            </p>
            <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Obter Diagnóstico em 24h
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

