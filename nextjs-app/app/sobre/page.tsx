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
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">A Dexi Digital</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Consultoria estratégica de{' '}
              <span className="text-display-gradient">IA e dados</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Fundada por especialistas com histórico em grandes corporações,
              focada em resultados reais para empresas que não podem falhar.
            </p>
          </div>
        </div>
      </section>

      {/* DNA Section */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 mb-8">
              Nosso DNA
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
              A Dexi Digital nasceu da frustração com consultorias que vendem
              tecnologia pela tecnologia. Fundada em 2014, construímos nossa
              reputação entregando resultados mensuráveis para grupos automotivos
              premium e grandes corporações brasileiras.
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
              <strong className="text-[var(--text-primary)]">IA como acelerador, nunca sozinha.</strong> Usamos inteligência
              artificial para acelerar entregas, mas toda solução passa por revisão
              técnica humana especializada. Arquitetura, segurança, escalabilidade
              e manutenibilidade validadas por engenheiros experientes.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Não somos uma fábrica de software. Somos consultores estratégicos
              que entendem de negócio e usam tecnologia como ferramenta para
              resolver problemas reais.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Quem está por trás</h2>
              <p className="text-lead">Especialistas com histórico comprovado em grandes corporações</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="card card-interactive p-8">
                  <div className="mb-5">
                    <h3 className="text-h4">{founder.name}</h3>
                    <p className="text-[var(--color-primary-600)] font-semibold">{founder.role}</p>
                  </div>
                  <p className="text-body-sm text-[var(--text-secondary)] mb-5">{founder.bio}</p>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-medium bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-md">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base"
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
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Nossos valores</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Qualidade acima de tudo
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Não cortamos caminho. Arquitetura sólida, testes
                  automatizados, documentação completa. Software construído para
                  durar.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Transparência total
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Sem vendas agressivas, sem promessas vazias. Escopo claro,
                  prazos realistas, comunicação honesta.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Foco em resultados
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Tecnologia é meio, não fim. Medimos sucesso por ROI,
                  eficiência operacional e redução de riscos.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Parceria de longo prazo
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Não entregamos e sumimos. Suporte contínuo, evolução de
                  features, monitoramento proativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-lg section-glow">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Experiência comprovada</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-8 text-center">
                <div className="text-number-lg text-display-gradient mb-2">10+</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Anos de experiência</div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Desenvolvimento de software e inteligência de dados
                </p>
              </div>
              <div className="card p-8 text-center">
                <div className="text-number-lg text-display-gradient mb-2">50+</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Projetos entregues</div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Desde MVPs até sistemas enterprise complexos
                </p>
              </div>
              <div className="card p-8 text-center">
                <div className="text-number-lg text-display-gradient mb-2">6</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Setores atendidos</div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Automotivo, Varejo, Logística, Financeiro, Saúde, Manufatura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Pronto para transformar seus dados em resultados?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e converse diretamente com nossos especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Agendar Diagnóstico em 24h
              </Link>
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

