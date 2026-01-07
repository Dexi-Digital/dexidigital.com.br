import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Dexi Digital: 10+ anos de experiência em inteligência de dados e software sob medida. IA como acelerador, expertise humana como garantia.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Sobre a Dexi Digital
            </h1>
            <p className="text-xl text-gray-600">
              Tecnologia não é o objetivo final. É o meio para transformar
              negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa missão
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ajudamos empresas a transformar dados e software em vantagem
              competitiva real. Não vendemos tecnologia pela tecnologia.
              Entregamos soluções que resolvem problemas de negócio, com
              governança, escalabilidade e suporte contínuo.
            </p>
            <p className="text-lg text-gray-600">
              Usamos IA como acelerador, mas nunca sozinha. Toda solução passa
              por revisão técnica humana especializada. Arquitetura, segurança,
              escalabilidade e manutenibilidade validadas por engenheiros
              experientes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nossos valores
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qualidade acima de tudo
                </h3>
                <p className="text-gray-600">
                  Não cortamos caminho. Arquitetura sólida, testes
                  automatizados, documentação completa. Software construído para
                  durar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transparência total
                </h3>
                <p className="text-gray-600">
                  Sem vendas agressivas, sem promessas vazias. Escopo claro,
                  prazos realistas, comunicação honesta.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Foco em resultados
                </h3>
                <p className="text-gray-600">
                  Tecnologia é meio, não fim. Medimos sucesso por ROI,
                  eficiência operacional e redução de riscos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Parceria de longo prazo
                </h3>
                <p className="text-gray-600">
                  Não entregamos e sumimos. Suporte contínuo, evolução de
                  features, monitoramento proativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Experiência comprovada
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  10+
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Anos de experiência
                </div>
                <p className="text-gray-600">
                  Desenvolvimento de software e inteligência de dados
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  50+
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Projetos entregues
                </div>
                <p className="text-gray-600">
                  Desde MVPs até sistemas enterprise complexos
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  6
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Setores atendidos
                </div>
                <p className="text-gray-600">
                  Automotivo, Varejo, Logística, Financeiro, Saúde, Manufatura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Vamos conversar sobre seus desafios?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Agende um diagnóstico gratuito. Sem compromisso, sem vendas
              agressivas.
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

