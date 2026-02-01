import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'A Dexi Digital | Consultoria de IA e Inteligência de Dados',
  description:
    'Nascida da necessidade de transformar dados estáticos em lucro real, a Dexi Digital combina uma década de engenharia de software crítico com o pioneirismo no desenvolvimento de Sistemas Multi-Agentes (MAS). Criadores do Synapse, somos a ponte entre a inteligência artificial generativa e a execução financeira autônoma para corporações que buscam escala sem precedentes e governança inegociável.',
  keywords: ['Dexi Digital', 'consultoria IA Brasil', 'inteligência de dados', 'quem somos'],
};

const founders = [
  {
    name: 'Sócio Fundador',
    role: 'Co-fundador & CEO',
    bio: 'Especialista em Machine Learning e Data Engineering com experiência em empresas de tecnologia de ponta. Responsável pela arquitetura técnica e governança de IA em todos os projetos da Dexi.',
    expertise: ['Machine Learning', 'Data Engineering', 'Cloud Architecture', 'Governança de IA'],
    linkedin: 'https://linkedin.com/company/dexi-digital',
  },
  {
    name: 'Lorrayne Paraiso',
    role: 'Co-fundadora & CTO',
    bio: 'Engenheira de Software com mais de uma década de experiência na vanguarda de sistemas críticos e arquiteturas de alta complexidade. Como líder tecnológica da Dexi Digital, é a arquiteta principal do Synapse OS, orquestrando a transição de grandes corporações para a era da execução agêntica com foco em escala, segurança e conformidade enterprise.',
    expertise: ['Arquitetura de Software', 'Inteligência de Dados', 'Gestão de Projetos', 'Transformação Digital'],
    linkedin: 'https://linkedin.com/in/lorrayneparaiso',
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
              Liderança em Engenharia de Software e Infraestrutura Agêntica
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Nascida da necessidade de transformar dados estáticos em lucro real, a Dexi Digital combina uma década de engenharia de software crítico com o pioneirismo no desenvolvimento de Sistemas Multi-Agentes (MAS). Criadores do Synapse OS, somos a ponte entre a inteligência artificial generativa e a execução financeira autônoma para corporações que buscam escala sem precedentes e governança inegociável.
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
              A obsessão pelo resultado líquido: A Dexi Digital nasceu em 2014 com um propósito claro: converter tecnologia complexa em vantagem competitiva real. Construímos nossa reputação no setor automotivo premium e em grandes corporações brasileiras, onde a falha não é uma opção e o ROI é a única métrica que importa.
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
              <strong className="text-[var(--text-primary)]">Inteligência Agêntica com Governança Humana.</strong> Para nós, a IA não é um acessório, é um motor de execução. O Synapse OS é o ápice de uma década de engenharia crítica. Acreditamos na autonomia dos agentes, mas nunca abrimos mão da soberania humana. Cada solução é validada por arquitetos experientes, garantindo segurança e conformidade enterprise.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              <strong>Engenharia de Ativos, não de Horas.</strong> Não somos uma fábrica de software; somos uma Product-Led Engineering House. Nosso foco é construir ativos tecnológicos que destravam o EBITDA escondido nas operações. Entendemos de negócio tanto quanto de algoritmos, resolvendo problemas que o software tradicional não consegue tocar.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">A Engenharia de Elite por trás da Synapse</h2>
              <p className="text-lead">Liderança sênior com DNA de execução em ecossistemas de alta complexidade.</p>
              <p className="text-body-sm text-[var(--text-secondary)] mt-2">Unimos décadas de experiência em arquitetura de software crítico com o pioneirismo em sistemas agênticos. Nosso time é composto por especialistas que desenharam e sustentaram infraestruturas para os maiores grupos empresariais do país — agora focados em liderar a próxima fronteira da automação autônoma.</p>
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
                  Engenharia de Precisão
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Rejeitamos o "débito técnico". Construímos infraestruturas agênticas soberanas, com arquitetura sólida e auditável, desenhadas para suportar a escala de operações críticas.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Governança &amp; Previsibilidade
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Operamos com integridade estratégica. Entregamos visibilidade total sobre a execução da IA, garantindo que cada decisão agêntica seja transparente, ética e segura.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Obsessão pelo Impacto no EBITDA
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Tecnologia é custo; execução é lucro. Medimos nosso sucesso pelo ROI direto, ganho de liquidez operacional e blindagem de riscos do seu negócio.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">
                  Evolução &amp; Co-criação
                </h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Não entregamos apenas código, construímos ativos. Evoluímos o raciocínio dos nossos agentes continuamente para que sua empresa lidere a vanguarda do mercado, ano após ano.
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
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Anos em software crítico e arquiteturas complexas.</div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Especialistas em infraestrutura escalável e engenharia de sistemas de missão crítica.
                </p>
              </div>
              <div className="card p-8 text-center">
                <div className="text-number-lg text-display-gradient mb-2">50+</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Ecossistemas entregues para líderes de mercado.</div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Arquiteturas robustas desenhadas para suportar alta complexidade e governança enterprise.
                </p>
              </div>
              <div className="card p-8 text-center">
                <div className="text-number-lg text-display-gradient mb-2">R$ 7M+</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Recuperados através de execução agêntica autônoma</div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Impacto direto em setores de alto ticket: Automotivo, Construtora e Imobiliário.
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
              Pronto para liderar a Era da Execução Agêntica?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Valide o potencial de impacto do Synapse OS no seu EBITDA. Realizamos um diagnóstico de viabilidade técnica e financeira focado em liquidez e ROI imediato.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
                Iniciar Validação de ROI
              </a>
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer o Synapse
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

