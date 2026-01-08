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
              Software Sob Medida
            </h1>
            <p className="text-xl text-gray-600">
              Aplicações web e mobile enterprise. Arquitetura escalável, código
              limpo e documentação completa. Construído para durar.
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
                'Arquitetura moderna (microserviços, serverless)',
                'Testes automatizados e CI/CD',
                'Documentação técnica completa',
                'Suporte e evolução contínua',
                'Aplicações web responsivas',
                'Apps mobile nativos (iOS/Android)',
                'APIs RESTful e GraphQL',
                'Integração com sistemas legados',
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

      {/* Our Approach */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nossa abordagem
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary-600">
                    01
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Descoberta e Planejamento
                  </h3>
                </div>
                <p className="text-gray-600">
                  Entendemos profundamente seus desafios de negócio, processos
                  atuais e objetivos. Definimos escopo, arquitetura e roadmap
                  técnico.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary-600">
                    02
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Desenvolvimento Iterativo
                  </h3>
                </div>
                <p className="text-gray-600">
                  Entregas incrementais com validação contínua. Sprints de 2
                  semanas com demos e feedback constante.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary-600">
                    03
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Qualidade e Testes
                  </h3>
                </div>
                <p className="text-gray-600">
                  Testes automatizados, code review rigoroso, CI/CD e
                  monitoramento. Qualidade não é negociável.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-primary-600">
                    04
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Deploy e Suporte
                  </h3>
                </div>
                <p className="text-gray-600">
                  Deploy em produção com documentação completa, treinamento de
                  equipes e suporte contínuo com SLA definido.
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
              Construa software que dura
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Agende um diagnóstico gratuito para discutir seu projeto.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Obter Diagnóstico em 24h
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

