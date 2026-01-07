import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inteligência de Dados',
  description:
    'Analytics avançado, machine learning e data warehousing. Transforme dados em decisões estratégicas com governança e escalabilidade enterprise.',
};

export default function DataIntelligencePage() {
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
              Inteligência de Dados
            </h1>
            <p className="text-xl text-gray-600">
              Analytics avançado, machine learning e data warehousing.
              Transforme dados em decisões estratégicas com governança e
              escalabilidade.
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
                'Dashboards executivos em tempo real',
                'Modelos preditivos para demanda e churn',
                'Data warehouse moderno (Snowflake, BigQuery)',
                'Governança e compliance (LGPD, SOC2)',
                'Pipelines de dados automatizados',
                'Análise de dados exploratória',
                'Visualizações interativas',
                'Integração com sistemas existentes',
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

      {/* Use Cases */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Casos de uso
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Grupos Automotivos
                </h3>
                <p className="text-gray-600">
                  Unificação de dados de showroom, oficina e pós-venda para
                  visão 360° do cliente, previsão de demanda e otimização de
                  estoque.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Varejo e E-commerce
                </h3>
                <p className="text-gray-600">
                  Análise de comportamento do cliente, recomendações
                  personalizadas, previsão de churn e otimização de pricing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Logística e Supply Chain
                </h3>
                <p className="text-gray-600">
                  Otimização de rotas, previsão de demanda, gestão de estoque e
                  análise de performance de fornecedores.
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
              Transforme seus dados em vantagem competitiva
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Agende um diagnóstico gratuito para discutir seus desafios de
              dados.
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

