import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedCTA from '@/components/ui/TrackedCTA';

export const metadata: Metadata = {
  title: 'Inteligência de Dados',
  description:
    'Engenharia de dados para decisões comerciais: organizamos os dados da operação para que oportunidades virem prioridades e ações. Pipelines, painéis e governança com LGPD.',
};

export default function DataIntelligencePage() {
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
              Inteligência de <span className="text-display-gradient">Dados</span>
            </h1>
            <p className="text-lead max-w-2xl animate-fade-in-up delay-100">
              Organizamos os dados da operação para que a decisão comercial saia de dado,
              não de achismo. Pipelines, modelagem e governança.
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
                'Pipelines de dados automatizados',
                'Modelagem e organização dos dados da operação',
                'Data warehouse na nuvem',
                'Painéis de acompanhamento para a gestão',
                'Análise exploratória de dados',
                'Governança de dados e LGPD',
                'Integração com os sistemas existentes, quando o projeto pede',
                'Base de contexto para o Fykos priorizar e agir',
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

      {/* Use Cases */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Onde se aplica</h2>
            </div>
            <div className="space-y-4">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Grupos Automotivos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Juntar dados de atendimento, estoque e carteira para enxergar onde a
                  receita escapa e qual oportunidade merece atenção agora.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Construtoras e Incorporadoras</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Organizar a carteira de compradores de quem financia com recursos
                  próprios, para dar previsibilidade ao recebimento.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Clínicas de Procedimentos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Entender a margem de cada procedimento e quem deixou de voltar,
                  para orientar a decisão comercial.
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
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-5">
              Transforme seus dados em vantagem competitiva
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira
              nesta etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location="inteligencia-de-dados-cta-final"
              variant="white"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

