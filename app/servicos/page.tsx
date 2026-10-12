import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedCTA from '@/components/ui/TrackedCTA';

export const metadata: Metadata = {
  title: 'Serviços | Fykos, engenharia de dados e software sob medida',
  description:
    'O Fykos, engenharia de dados e software sob medida para que as oportunidades da operação virem receita e previsibilidade de venda.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Fykos: inteligência e execução comercial',
      href: '/o-fykos',
      description:
        'Inteligência e execução comercial para que as oportunidades da sua base virem receita e previsibilidade de venda. O Fykos identifica o que merece atenção, prioriza a próxima ação e executa com regras definidas, em jornadas consultivas e operações multiunidade.',
      benefits: [
        'Prioriza oportunidades com contexto e critérios comerciais',
        'Atendimento com qualificação e passagem ao vendedor com o histórico',
        'Retoma a carteira quando uma condição relevante muda',
        'Regras, supervisão humana nas exceções e trilha auditável',
      ],
      featured: true,
    },
    {
      title: 'Desenvolvimento de Sistemas de Missão Crítica',
      href: '/servicos/software-sob-medida',
      description:
        'Engenharia para criar sistemas sob medida que se conectam aos sistemas e processos centrais da empresa, com IA onde ela resolve um problema do negócio.',
      benefits: [
        'Arquitetura pensada para crescer com a operação',
        'Testes automatizados e CI/CD',
        'Integração com CRM, ERP e sistemas existentes, quando o projeto pede',
        'Suporte e evolução contínua',
      ],
    },
    {
      title: 'Engenharia de Dados & Ativos de Inteligência',
      href: '/servicos/inteligencia-de-dados',
      description:
        'Organizamos os dados da operação para que a decisão comercial saia de dado, não de achismo. É a base que dá contexto ao Fykos para priorizar e agir.',
      benefits: [
        'Pipelines de dados automatizados',
        'Painéis de acompanhamento para a gestão',
        'Modelagem e organização dos dados da operação',
        'Governança de dados e LGPD',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Soluções Enterprise</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Tecnologia para <span className="text-display-gradient">decisões comerciais</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Inteligência e execução comercial, software com IA integrada e inteligência de dados
              para que as oportunidades da sua base virem receita e previsibilidade de venda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={service.href} className="card card-interactive p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-number-lg text-display-gradient">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-h3">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-body-sm text-[var(--text-secondary)]">
                            <svg className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href} className="text-sm font-semibold text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-base">
                        Saiba mais sobre {service.title} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-5">
              Pronto para começar?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira
              nesta etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location="servicos-cta-final"
              variant="white"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

