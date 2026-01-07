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
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/servicos"
              className="inline-flex items-center text-primary-600 font-semibold mb-6 hover:text-primary-700"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voltar para Serviços
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              IA para Empresas
            </h1>
            <p className="text-xl text-gray-600">
              IA acelerada com supervisão técnica humana. Governança,
              explicabilidade e controle total. IA como ferramenta, não como
              fim.
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              O que entregamos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
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
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nossos princípios
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  IA como acelerador, não substituto
                </h3>
                <p className="text-gray-600">
                  IA acelera tarefas repetitivas e prototipagem, mas toda
                  solução passa por revisão técnica humana. Arquitetura,
                  segurança e escalabilidade validadas por especialistas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Governança desde o dia 1
                </h3>
                <p className="text-gray-600">
                  Rastreabilidade de decisões, explicabilidade de modelos,
                  controle de acesso e auditoria completa. IA empresarial exige
                  controle total, não caixas-pretas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Integração com o existente
                </h3>
                <p className="text-gray-600">
                  IA não é uma ilha. Integramos com seus sistemas, processos e
                  equipes existentes. Adoção gradual sem disrupção operacional.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Foco em ROI mensurável
                </h3>
                <p className="text-gray-600">
                  Definimos KPIs claros desde o início. IA precisa gerar valor
                  real: redução de custos, aumento de eficiência, melhoria de
                  experiência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Casos de uso
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Automação de atendimento
                </h3>
                <p className="text-gray-600">
                  Chatbots inteligentes com fallback humano, análise de
                  sentimento e roteamento automático.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Análise de documentos
                </h3>
                <p className="text-gray-600">
                  Extração de dados, classificação automática e validação de
                  contratos e documentos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Previsão de demanda
                </h3>
                <p className="text-gray-600">
                  Modelos preditivos para estoque, vendas e planejamento de
                  recursos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Detecção de anomalias
                </h3>
                <p className="text-gray-600">
                  Identificação de fraudes, falhas e padrões anormais em tempo
                  real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Adote IA com segurança e governança
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Agende um diagnóstico gratuito para discutir sua estratégia de
              IA.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Agendar diagnóstico gratuito
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

