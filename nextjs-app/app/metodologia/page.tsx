import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metodologia Dexi | Processo Consultivo de IA e Dados',
  description: 'Conheça o Processo Dexi: metodologia consultiva em 5 etapas para implementar IA e inteligência de dados com governança, resultados mensuráveis e revisão técnica humana.',
  keywords: ['metodologia consultoria IA', 'processo implementação IA', 'consultoria de dados', 'governança IA'],
};

const steps = [
  {
    number: '01',
    title: 'Diagnóstico Estratégico',
    duration: '1-2 semanas',
    description: 'Mapeamento profundo dos processos, dados e dores do negócio. Identificamos onde IA e dados podem gerar impacto real.',
    deliverables: ['Relatório de oportunidades', 'Mapa de processos críticos', 'Estimativa de ROI', 'Priorização de quick wins'],
  },
  {
    number: '02',
    title: 'Mapeamento de Dados',
    duration: '2-3 semanas',
    description: 'Auditoria completa das fontes de dados existentes. Qualidade, governança e integrações necessárias.',
    deliverables: ['Inventário de dados', 'Análise de qualidade', 'Arquitetura de integração', 'Plano de governança'],
  },
  {
    number: '03',
    title: 'Arquitetura da Solução',
    duration: '2-4 semanas',
    description: 'Design técnico detalhado com tecnologias, infraestrutura e modelos de IA. Sempre com revisão técnica humana.',
    deliverables: ['Documento de arquitetura', 'Stack tecnológico', 'Requisitos de infraestrutura', 'Plano de segurança'],
  },
  {
    number: '04',
    title: 'PoC / Piloto',
    duration: '4-8 semanas',
    description: 'Prova de conceito funcional em ambiente controlado. Validação de hipóteses com dados reais.',
    deliverables: ['Protótipo funcional', 'Métricas de validação', 'Ajustes baseados em feedback', 'Business case atualizado'],
  },
  {
    number: '05',
    title: 'Rollout e Evolução',
    duration: 'Contínuo',
    description: 'Implementação em produção com monitoramento, treinamento de equipes e evolução contínua.',
    deliverables: ['Sistema em produção', 'Documentação técnica', 'Treinamento de usuários', 'SLA de suporte'],
  },
];

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline text-primary-600 mb-4">Processo Dexi</p>
            <h1 className="text-display mb-6">
              Metodologia consultiva para{' '}
              <span className="text-primary-600">resultados reais</span>
            </h1>
            <p className="text-lead mb-8">
              Processo estruturado em 5 etapas que transforma desafios de negócio 
              em soluções de IA e dados com governança, transparência e ROI mensurável.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="icon-box icon-box-primary mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">Revisão Técnica Humana</h3>
                <p className="text-body-sm">Toda solução passa por especialistas. IA acelera, humanos garantem qualidade.</p>
              </div>
              <div className="text-center p-6">
                <div className="icon-box icon-box-primary mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">ROI Mensurável</h3>
                <p className="text-body-sm">Métricas definidas desde o início. Você sabe exatamente o retorno esperado.</p>
              </div>
              <div className="text-center p-6">
                <div className="icon-box icon-box-primary mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-2">Governança desde o Dia 1</h3>
                <p className="text-body-sm">Segurança, compliance e auditabilidade em cada etapa do processo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">As 5 Etapas do Processo Dexi</h2>
              <p className="text-lead">Do diagnóstico ao rollout, com entregas tangíveis em cada fase</p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="card p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-h4">{step.title}</h3>
                        <span className="badge badge-primary">{step.duration}</span>
                      </div>
                      <p className="text-body mb-4">{step.description}</p>
                      <div>
                        <p className="text-body-sm font-semibold text-gray-700 mb-2">Entregáveis:</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-body-sm">
                              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lead text-primary-100 mb-10">
              Agende um diagnóstico gratuito e descubra o potencial de IA e dados para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn btn-white btn-xl">
                Agendar Diagnóstico em 24h
              </Link>
              <Link href="/cases" className="btn btn-outline-white btn-xl">
                Ver cases de sucesso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

