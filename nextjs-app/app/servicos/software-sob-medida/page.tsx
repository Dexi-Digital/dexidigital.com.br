import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software Sob Medida | Soluções Enterprise com IA Integrada',
  description:
    'Aplicações web e mobile enterprise com IA integrada. Sistemas de vendas com Concierge Digital, portais B2B e automações inteligentes construídas para durar.',
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
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">O que entregamos</h2>
            </div>

            {/* Featured: AI-Powered Solutions */}
            <div className="card p-8 mb-8 border-l-4 border-[var(--color-primary-500)]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-600)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-h4 mb-2">Software com IA Integrada</h3>
                  <p className="text-body text-[var(--text-secondary)]">
                    Desenvolvemos aplicações que incorporam nosso Concierge Digital de Vendas e
                    outras soluções de IA diretamente no core do sistema — não como add-ons,
                    mas como parte fundamental da arquitetura.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-h5 mb-1">Portais de vendas</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">Com Concierge Digital integrado e perfilamento de clientes</p>
                </div>
                <div className="p-4 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-h5 mb-1">Sistemas B2B</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">Com recomendações inteligentes e automação de processos</p>
                </div>
                <div className="p-4 bg-[var(--bg-secondary)] rounded-xl">
                  <p className="text-h5 mb-1">Apps mobile</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">Com assistentes de IA nativos e experiência personalizada</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Arquitetura moderna (microserviços, serverless)',
                'IA conversacional integrada (Concierge Digital)',
                'Testes automatizados e CI/CD',
                'Documentação técnica completa',
                'Aplicações web responsivas',
                'Apps mobile nativos (iOS/Android)',
                'APIs RESTful e GraphQL',
                'Integração com CRM, ERP e sistemas legados',
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

      {/* Use Cases */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Casos de aplicação</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Portal de Vendas Automotivo</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Sistema de showroom digital com Concierge Digital integrado.
                  Identifica perfil do comprador (performance vs. segurança) e
                  personaliza apresentação dos veículos em tempo real.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Plataforma B2B com IA</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Sistema de pedidos com recomendações inteligentes baseadas em
                  histórico, sazonalidade e perfil do cliente. Aumenta ticket
                  médio com cross-sell automatizado.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">App de Atendimento Premium</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Aplicativo móvel com assistente de IA que qualifica leads,
                  agenda visitas e prepara briefings para vendedores antes
                  do contato presencial.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Dashboard Comercial Inteligente</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Painel executivo com insights de IA sobre pipeline, previsão
                  de vendas e recomendações de ações prioritárias baseadas em
                  análise preditiva.
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
              Software inteligente que converte
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e descubra como IA integrada
              pode transformar seu software em uma máquina de vendas.
            </p>
            <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Agendar Demonstração
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

