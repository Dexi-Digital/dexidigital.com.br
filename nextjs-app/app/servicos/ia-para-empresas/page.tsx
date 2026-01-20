import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IA para Empresas',
  description:
    'IA acelerada com supervisão técnica humana. Governança, explicabilidade e controle total. IA como ferramenta, não como fim.',
};

export default function EnterpriseAIPage() {
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
              IA para <span className="text-display-gradient">Empresas</span>
            </h1>
            <p className="text-lead max-w-2xl animate-fade-in-up delay-100">
              IA acelerada com supervisão técnica humana. Governança,
              explicabilidade e controle total. IA como ferramenta, não como fim.
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
                'IA governada e auditável',
                'Integração com sistemas existentes',
                'Treinamento de equipes internas',
                'Roadmap de adoção gradual',
                'Modelos de ML customizados',
                'Automação de processos com IA',
                'Chatbots e assistentes virtuais',
                'Análise de documentos e NLP',
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

      {/* Our Principles */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Nossos princípios</h2>
            </div>
            <div className="space-y-4">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">IA como acelerador, não substituto</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  IA acelera tarefas repetitivas e prototipagem, mas toda
                  solução passa por revisão técnica humana. Arquitetura,
                  segurança e escalabilidade validadas por especialistas.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Governança desde o dia 1</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Rastreabilidade de decisões, explicabilidade de modelos,
                  controle de acesso e auditoria completa. IA empresarial exige
                  controle total, não caixas-pretas.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Integração com o existente</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  IA não é uma ilha. Integramos com seus sistemas, processos e
                  equipes existentes. Adoção gradual sem disrupção operacional.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Foco em ROI mensurável</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Definimos KPIs claros desde o início. IA precisa gerar valor
                  real: redução de custos, aumento de eficiência, melhoria de experiência.
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
              <h2 className="text-h2">Casos de uso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Automação de atendimento</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Chatbots inteligentes com fallback humano, análise de
                  sentimento e roteamento automático.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Análise de documentos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Extração de dados, classificação automática e validação de
                  contratos e documentos.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Previsão de demanda</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Modelos preditivos para estoque, vendas e planejamento de recursos.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Detecção de anomalias</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Identificação de fraudes, falhas e padrões anormais em tempo real.
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
              Adote IA com segurança e governança
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito para discutir sua estratégia de IA.
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

