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
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Sobre a Dexi Digital
            </h1>
            <p className="text-lead">
              Tecnologia não é o objetivo final. É o meio para transformar
              negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-6">
              Nossa missão
            </h2>
            <p className="text-body-lg mb-6">
              Ajudamos empresas a transformar dados e software em vantagem
              competitiva real. Não vendemos tecnologia pela tecnologia.
              Entregamos soluções que resolvem problemas de negócio, com
              governança, escalabilidade e suporte contínuo.
            </p>
            <p className="text-body-lg">
              Usamos IA como acelerador, mas nunca sozinha. Toda solução passa
              por revisão técnica humana especializada. Arquitetura, segurança,
              escalabilidade e manutenibilidade validadas por engenheiros
              experientes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-12 text-center">
              Nossos valores
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-h5 mb-3">
                  Qualidade acima de tudo
                </h3>
                <p className="text-body">
                  Não cortamos caminho. Arquitetura sólida, testes
                  automatizados, documentação completa. Software construído para
                  durar.
                </p>
              </div>
              <div className="card">
                <h3 className="text-h5 mb-3">
                  Transparência total
                </h3>
                <p className="text-body">
                  Sem vendas agressivas, sem promessas vazias. Escopo claro,
                  prazos realistas, comunicação honesta.
                </p>
              </div>
              <div className="card">
                <h3 className="text-h5 mb-3">
                  Foco em resultados
                </h3>
                <p className="text-body">
                  Tecnologia é meio, não fim. Medimos sucesso por ROI,
                  eficiência operacional e redução de riscos.
                </p>
              </div>
              <div className="card">
                <h3 className="text-h5 mb-3">
                  Parceria de longo prazo
                </h3>
                <p className="text-body">
                  Não entregamos e sumimos. Suporte contínuo, evolução de
                  features, monitoramento proativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-12 text-center">
              Experiência comprovada
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Anos de experiência</div>
                <p className="text-body-sm">
                  Desenvolvimento de software e inteligência de dados
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-value">50+</div>
                <div className="stat-label">Projetos entregues</div>
                <p className="text-body-sm">
                  Desde MVPs até sistemas enterprise complexos
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-value">6</div>
                <div className="stat-label">Setores atendidos</div>
                <p className="text-body-sm">
                  Automotivo, Varejo, Logística, Financeiro, Saúde, Manufatura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-4">
              Vamos conversar sobre seus desafios?
            </h2>
            <p className="text-lead text-primary-100 mb-8">
              Agende um diagnóstico gratuito. Sem compromisso, sem vendas
              agressivas.
            </p>
            <Link href="/contato" className="btn btn-white btn-xl">
              Agendar diagnóstico gratuito
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

