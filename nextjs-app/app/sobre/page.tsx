import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A Dexi Digital | Consultoria de IA e Inteligência de Dados',
  description:
    'Conheça a Dexi Digital: consultoria estratégica de IA e inteligência de dados com 10+ anos de experiência. Fundada por especialistas com histórico em grandes corporações brasileiras.',
  keywords: ['Dexi Digital', 'consultoria IA Brasil', 'inteligência de dados', 'quem somos'],
};

const founders = [
  {
    name: 'Lorrayne Paraiso',
    role: 'Co-fundadora & CEO',
    bio: 'Engenheira de Software com mais de 10 anos de experiência em desenvolvimento de sistemas enterprise. Especialista em arquitetura de soluções e inteligência de dados. Liderou projetos de transformação digital em grupos automotivos premium e grandes corporações brasileiras.',
    expertise: ['Arquitetura de Software', 'Inteligência de Dados', 'Gestão de Projetos', 'Transformação Digital'],
    linkedin: 'https://linkedin.com/in/lorrayneparaiso',
  },
  {
    name: 'Sócio Fundador',
    role: 'Co-fundador & CTO',
    bio: 'Especialista em Machine Learning e Data Engineering com experiência em empresas de tecnologia de ponta. Responsável pela arquitetura técnica e governança de IA em todos os projetos da Dexi.',
    expertise: ['Machine Learning', 'Data Engineering', 'Cloud Architecture', 'Governança de IA'],
    linkedin: 'https://linkedin.com/company/dexi-digital',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline text-primary-600 mb-4">A Dexi Digital</p>
            <h1 className="text-display mb-6">
              Consultoria estratégica de IA e dados
            </h1>
            <p className="text-lead">
              Fundada por especialistas com histórico em grandes corporações,
              focada em resultados reais para empresas que não podem falhar.
            </p>
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-6">
              Nosso DNA
            </h2>
            <p className="text-body-lg mb-6">
              A Dexi Digital nasceu da frustração com consultorias que vendem
              tecnologia pela tecnologia. Fundada em 2014, construímos nossa
              reputação entregando resultados mensuráveis para grupos automotivos
              premium e grandes corporações brasileiras.
            </p>
            <p className="text-body-lg mb-6">
              <strong>IA como acelerador, nunca sozinha.</strong> Usamos inteligência
              artificial para acelerar entregas, mas toda solução passa por revisão
              técnica humana especializada. Arquitetura, segurança, escalabilidade
              e manutenibilidade validadas por engenheiros experientes.
            </p>
            <p className="text-body-lg">
              Não somos uma fábrica de software. Somos consultores estratégicos
              que entendem de negócio e usam tecnologia como ferramenta para
              resolver problemas reais.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Quem está por trás</h2>
              <p className="text-lead">Especialistas com histórico comprovado em grandes corporações</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="card p-8">
                  <div className="mb-4">
                    <h3 className="text-h4">{founder.name}</h3>
                    <p className="text-primary-600 font-medium">{founder.role}</p>
                  </div>
                  <p className="text-body mb-4">{founder.bio}</p>
                  <div className="mb-4">
                    <p className="text-body-sm font-semibold text-gray-700 mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill) => (
                        <span key={skill} className="badge badge-neutral">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Ver LinkedIn →
                  </a>
                </div>
              ))}
            </div>
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
              Pronto para transformar seus dados em resultados?
            </h2>
            <p className="text-lead text-primary-100 mb-8">
              Agende um diagnóstico gratuito e converse diretamente com nossos especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn btn-white btn-xl">
                Agendar Diagnóstico em 24h
              </Link>
              <Link href="/metodologia" className="btn btn-outline-white btn-xl">
                Conhecer metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

