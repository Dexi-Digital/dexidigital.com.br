import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import { getHomePageSchemas, localBusinessSchema } from '@/lib/structured-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dexi Digital | Consultoria de IA e Inteligência de Dados para Empresas',
  description: 'Consultoria estratégica de IA e inteligência de dados para empresas enterprise. Transformamos processos de vendas complexos em alta conversão com revisão técnica humana. Diagnóstico gratuito em 24h.',
  keywords: ['consultoria de IA', 'inteligência de dados', 'IA para empresas', 'consultoria de IA para vendas', 'eficiência operacional com IA', 'grupos automotivos', 'software sob medida'],
  openGraph: {
    title: 'Dexi Digital | Consultoria Estratégica de IA e Dados',
    description: 'Transformamos processos de vendas complexos em alta conversão através de inteligência de dados e IA estratégica. Diagnóstico gratuito em 24h.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function HomePage() {
  // Page-specific schemas (Organization, Services, FAQ, LocalBusiness)
  const pageSchemas = [...getHomePageSchemas(), localBusinessSchema];

  return (
    <main className="min-h-screen">
      {/* Page-specific JSON-LD schemas */}
      {pageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section - Problem-Solution Structure */}
      <section className="section-hero">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-overline text-primary-600 mb-4">Consultoria Estratégica de IA e Dados</p>

            {/* Problem Statement */}
            <h1 className="text-display mb-6">
              Transformamos processos de vendas complexos em{' '}
              <span className="text-primary-600">alta conversão</span>
            </h1>

            {/* Solution */}
            <p className="text-lead mb-6 max-w-3xl mx-auto">
              Inteligência de dados e IA estratégica com revisão técnica humana,
              para empresas enterprise que não podem falhar.
            </p>

            {/* Trust Signal */}
            <p className="text-body-lg text-gray-600 mb-4 font-medium">
              IA como acelerador, nunca sozinha.
            </p>

            <p className="text-body text-gray-500 mb-10">
              10+ anos de experiência com grupos automotivos premium e grandes corporações brasileiras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contato" className="btn btn-primary btn-xl">
                Agendar Diagnóstico de IA em 24h
              </Link>
              <Link href="/metodologia" className="btn btn-outline btn-xl">
                Conhecer nossa metodologia
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Diagnóstico gratuito
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Resposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Resultados comprovados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How Dexi Works Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">
                Como a Dexi trabalha com IA
              </h2>
              <p className="text-lead">
                IA como acelerador, expertise humana como garantia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-h5 mb-3">
                  IA acelera desenvolvimento
                </h3>
                <p className="text-body">
                  Usamos IA para acelerar prototipagem, análise de dados e
                  geração de código base. Velocidade sem comprometer qualidade.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-h5 mb-3">
                  Revisão técnica especializada
                </h3>
                <p className="text-body">
                  Toda solução passa por revisão técnica humana. Arquitetura,
                  segurança, escalabilidade e manutenibilidade validadas por
                  especialistas.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-h5 mb-3">
                  Entrega com garantia
                </h3>
                <p className="text-body">
                  Software e dados prontos para escalar. Documentação completa,
                  testes automatizados e suporte contínuo. Construído para durar
                  além dos ciclos de hype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">
                Problemas que resolvemos
              </h2>
              <p className="text-lead">
                Soluções de dados e software para desafios empresariais reais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem 1 */}
              <div className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="icon-box icon-box-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h5 mb-2">
                      Grupos Automotivos
                    </h3>
                    <p className="text-body-sm text-gray-600 mb-3">
                      <strong>Problema:</strong> Dados fragmentados entre showroom, oficina e pós-venda
                    </p>
                    <p className="text-body-sm">
                      <strong>Solução:</strong> Inteligência de dados unificada: visão 360° do cliente, previsão de demanda e otimização de estoque
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="icon-box icon-box-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h5 mb-2">
                      Grandes Corporações
                    </h3>
                    <p className="text-body-sm text-gray-600 mb-3">
                      <strong>Problema:</strong> Projetos de IA que não saem do piloto ou precisam ser reescritos
                    </p>
                    <p className="text-body-sm">
                      <strong>Solução:</strong> Arquitetura enterprise desde o dia 1. IA governada, escalável e auditável
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="icon-box icon-box-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h5 mb-2">
                      Empresas em Crescimento
                    </h3>
                    <p className="text-body-sm text-gray-600 mb-3">
                      <strong>Problema:</strong> Sistemas legados que não acompanham o crescimento do negócio
                    </p>
                    <p className="text-body-sm">
                      <strong>Solução:</strong> Modernização gradual com software sob medida. Migração sem interrupção de operações
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="card card-hover">
                <div className="flex items-start gap-4">
                  <div className="icon-box icon-box-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h5 mb-2">
                      Líderes de TI
                    </h3>
                    <p className="text-body-sm text-gray-600 mb-3">
                      <strong>Problema:</strong> Pressão para adotar IA sem comprometer segurança e compliance
                    </p>
                    <p className="text-body-sm">
                      <strong>Solução:</strong> IA empresarial com governança: rastreabilidade, explicabilidade e controle total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Proof Section - Enhanced Layout */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <p className="text-overline text-primary-600 mb-2">Por que a Dexi</p>
              <h2 className="text-h2">
                Experiência comprovada em consultoria de IA para empresas
              </h2>
              <p className="text-lead">
                Mais de uma década construindo soluções de eficiência operacional com IA que duram
              </p>
            </div>

            {/* Stats - Enhanced Cards with Icons */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Anos de experiência</div>
                <p className="text-body-sm text-gray-500">Desenvolvimento de software e inteligência de dados</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Projetos entregues</div>
                <p className="text-body-sm text-gray-500">Desde MVPs até sistemas enterprise complexos</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Foco em resultados</div>
                <p className="text-body-sm text-gray-500">ROI, eficiência operacional e redução de riscos</p>
              </div>
            </div>

            {/* Sectors Served */}
            <div className="mb-16 text-center">
              <h3 className="text-h5 mb-6">Setores atendidos com consultoria de IA e dados</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Automotivo Premium', 'Varejo', 'Logística', 'Serviços Financeiros', 'Saúde', 'Manufatura'].map((sector) => (
                  <span key={sector} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial - Enhanced */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "A Dexi entregou uma solução de inteligência de dados que transformou nossa operação. Visibilidade completa do showroom ao pós-venda, com previsões precisas que reduziram nosso estoque em 30%."
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-base font-semibold text-gray-900">Diretor de TI</div>
                  <div className="text-sm text-gray-500">Grupo Automotivo Premium (NDA)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">
                Nossos serviços
              </h2>
              <p className="text-lead">
                Soluções de software e dados para empresas que não podem falhar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1: Data Intelligence */}
              <div className="card card-hover h-full flex flex-col">
                <div className="icon-box icon-box-primary mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">
                  Inteligência de Dados
                </h3>
                <p className="text-body mb-6">
                  Analytics avançado, machine learning e data warehousing. Transforme dados em decisões estratégicas com governança e escalabilidade.
                </p>
                <ul className="feature-list mb-6 flex-1">
                  <li className="feature-list-item">Dashboards executivos em tempo real</li>
                  <li className="feature-list-item">Modelos preditivos para demanda e churn</li>
                  <li className="feature-list-item">Data warehouse moderno (Snowflake, BigQuery)</li>
                  <li className="feature-list-item">Governança e compliance (LGPD, SOC2)</li>
                </ul>
                <Link href="/servicos/inteligencia-de-dados" className="link-arrow">
                  Saiba mais
                </Link>
              </div>

              {/* Service 2: Custom Software */}
              <div className="card card-hover h-full flex flex-col">
                <div className="icon-box icon-box-primary mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">
                  Software Sob Medida
                </h3>
                <p className="text-body mb-6">
                  Aplicações web e mobile enterprise. Arquitetura escalável, código limpo e documentação completa. Construído para durar.
                </p>
                <ul className="feature-list mb-6 flex-1">
                  <li className="feature-list-item">Arquitetura moderna (microserviços, serverless)</li>
                  <li className="feature-list-item">Testes automatizados e CI/CD</li>
                  <li className="feature-list-item">Documentação técnica completa</li>
                  <li className="feature-list-item">Suporte e evolução contínua</li>
                </ul>
                <Link href="/servicos/software-sob-medida" className="link-arrow">
                  Saiba mais
                </Link>
              </div>

              {/* Service 3: Enterprise AI */}
              <div className="card card-hover h-full flex flex-col">
                <div className="icon-box icon-box-primary mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">
                  IA para Empresas
                </h3>
                <p className="text-body mb-6">
                  IA acelerada com supervisão técnica humana. Governança, explicabilidade e controle total. IA como ferramenta, não como fim.
                </p>
                <ul className="feature-list mb-6 flex-1">
                  <li className="feature-list-item">IA governada e auditável</li>
                  <li className="feature-list-item">Integração com sistemas existentes</li>
                  <li className="feature-list-item">Treinamento de equipes internas</li>
                  <li className="feature-list-item">Roadmap de adoção gradual</li>
                </ul>
                <Link href="/servicos/ia-para-empresas" className="link-arrow">
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Sector Block */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4">Especialização Setorial</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  IA e dados para grupos automotivos premium
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Consultoria de IA para grupos automotivos que precisam unificar dados de showroom, oficina e pós-venda em uma visão 360° do cliente.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Showroom: +50% conversão de leads</h3>
                      <p className="text-sm text-gray-400">Lead scoring com IA e follow-up automatizado inteligente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Oficina: -30% tempo de box</h3>
                      <p className="text-sm text-gray-400">Agendamento preditivo e otimização de recursos em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Pós-venda: +40% retenção</h3>
                      <p className="text-sm text-gray-400">Previsão de manutenção e campanhas personalizadas por perfil</p>
                    </div>
                  </div>
                </div>

                <Link href="/setores/automotivo-premium" className="btn btn-primary btn-lg">
                  Ver soluções para automotivo →
                </Link>
              </div>

              {/* Visual Stats */}
              <div className="bg-gray-800 rounded-2xl p-8 lg:p-10">
                <div className="text-center mb-8">
                  <p className="text-gray-400 text-sm mb-2">Resultados típicos em 6 meses</p>
                  <h3 className="text-2xl font-bold text-white">Inteligência de dados para grupos automotivos</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-400 mb-1">+50%</div>
                    <div className="text-sm text-gray-300">Conversão de leads</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-400 mb-1">-30%</div>
                    <div className="text-sm text-gray-300">Estoque parado</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-400 mb-1">+40%</div>
                    <div className="text-sm text-gray-300">Retenção clientes</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-400 mb-1">380%</div>
                    <div className="text-sm text-gray-300">ROI médio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">
                Conteúdo de autoridade
              </h2>
              <p className="text-lead">
                Insights sobre IA, dados e desenvolvimento de software
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Article 1 */}
              <article className="card-article">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge badge-primary">IA Empresarial</span>
                    <span className="text-caption">12 min</span>
                  </div>
                  <h3 className="text-h5 mb-3">
                    Guia: Como usar IA sem comprometer a qualidade do software
                  </h3>
                  <p className="text-body-sm mb-4">
                    IA pode acelerar desenvolvimento, mas sem governança adequada, cria débito técnico. Aprenda a usar IA como acelerador mantendo qualidade, segurança e manutenibilidade.
                  </p>
                  <Link href="/blog/guia-ia-qualidade-software" className="link-arrow">
                    Ler guia completo
                  </Link>
                </div>
              </article>

              {/* Article 2 */}
              <article className="card-article">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge badge-primary">Data Intelligence</span>
                    <span className="text-caption">8 min</span>
                  </div>
                  <h3 className="text-h5 mb-3">
                    Inteligência de dados para grupos automotivos: do showroom ao pós-venda
                  </h3>
                  <p className="text-body-sm mb-4">
                    Como unificar dados de vendas, oficina e pós-venda para criar visão 360° do cliente e otimizar operações em grupos automotivos.
                  </p>
                  <Link href="/blog/inteligencia-dados-automotivo" className="link-arrow">
                    Ler artigo
                  </Link>
                </div>
              </article>

              {/* Article 3 */}
              <article className="card-article">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge badge-primary">Arquitetura de Software</span>
                    <span className="text-caption">10 min</span>
                  </div>
                  <h3 className="text-h5 mb-3">
                    Por que projetos baseados em hype precisam ser reescritos (e como evitar)
                  </h3>
                  <p className="text-body-sm mb-4">
                    Tecnologias da moda vêm e vão. Aprenda a construir software que dura além dos ciclos de hype, com arquitetura sólida e decisões técnicas fundamentadas.
                  </p>
                  <Link href="/blog/evitar-reescrita-projetos-hype" className="link-arrow">
                    Ler artigo
                  </Link>
                </div>
              </article>
            </div>

            <div className="text-center">
              <Link href="/blog" className="btn btn-outline">
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Materials Library */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <p className="text-overline text-primary-600 mb-2">Biblioteca Premium</p>
              <h2 className="text-h2">
                Materiais exclusivos para líderes de TI
              </h2>
              <p className="text-lead">
                Guias práticos de consultoria de IA para vendas e eficiência operacional
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Lead Magnet 1: PDF Guide - Premium Style */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-2 py-1 rounded">PDF Guide</span>
                    <span className="text-xs opacity-80">15 min leitura</span>
                  </div>
                  <h3 className="text-lg font-bold">Guia: IA Empresarial sem Riscos</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Iniciante</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Atualizado Jan/2026</span>
                  </div>
                  <p className="text-body-sm text-gray-600 mb-4 flex-1">
                    10 passos para implementar IA com governança, segurança e ROI mensurável em sua empresa.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Checklist de governança completo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Templates de métricas de sucesso</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5 casos de uso validados</span>
                    </div>
                  </div>
                  <Link href="/materiais/guia-ia-empresarial" className="btn btn-primary w-full justify-center">
                    Baixar Guia Gratuito →
                  </Link>
                </div>
              </div>

              {/* Lead Magnet 2: Checklist - Premium Style */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-2 py-1 rounded">Checklist</span>
                    <span className="text-xs opacity-80">5 min uso</span>
                  </div>
                  <h3 className="text-lg font-bold">Checklist: Qualidade de Software</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">Intermediário</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">50+ itens</span>
                  </div>
                  <p className="text-body-sm text-gray-600 mb-4 flex-1">
                    Avalie e melhore a qualidade técnica do seu software com critérios objetivos.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Arquitetura e código limpo</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Segurança e performance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>DevOps e CI/CD completo</span>
                    </div>
                  </div>
                  <Link href="/materiais/checklist-qualidade" className="btn btn-outline w-full justify-center">
                    Baixar Checklist →
                  </Link>
                </div>
              </div>

              {/* Lead Magnet 3: ROI Calculator - Premium Style */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-2 py-1 rounded">Ferramenta</span>
                    <span className="text-xs opacity-80">Interativo</span>
                  </div>
                  <h3 className="text-lg font-bold">Calculadora de ROI em Dados</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">Avançado</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Relatório PDF</span>
                  </div>
                  <p className="text-body-sm text-gray-600 mb-4 flex-1">
                    Estime o retorno financeiro de um projeto de inteligência de dados personalizado.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cálculo personalizado por setor</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Benchmarks de mercado</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Relatório exportável em PDF</span>
                    </div>
                  </div>
                  <Link href="/materiais/calculadora-roi" className="btn btn-outline w-full justify-center">
                    Calcular ROI Agora →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24h Diagnostic Process Visual */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <p className="text-overline text-primary-600 mb-2">Processo Simplificado</p>
              <h2 className="text-h2">
                Como funciona o diagnóstico de IA em 24h
              </h2>
              <p className="text-lead">
                Em 3 passos, você recebe um roadmap claro para transformar sua operação
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Coleta de Contexto</h3>
                  <p className="text-gray-600 mb-4">
                    Você preenche um breve formulário sobre seu negócio, desafios e objetivos. 5 minutos.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>5 minutos</span>
                  </div>
                </div>
                {/* Arrow to next step - hidden on mobile */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Análise Técnica</h3>
                  <p className="text-gray-600 mb-4">
                    Nossa equipe analisa seu cenário, identifica oportunidades de IA e dados, e prepara recomendações.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Análise humana especializada</span>
                  </div>
                </div>
                {/* Arrow to next step - hidden on mobile */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-200 h-full">
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Roadmap + Próximos Passos</h3>
                  <p className="text-gray-600 mb-4">
                    Você recebe um documento com diagnóstico, oportunidades priorizadas e proposta de próximos passos.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entregue em até 24h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contato" className="btn btn-primary btn-xl">
                Solicitar Diagnóstico Gratuito →
              </Link>
              <p className="text-sm text-gray-500 mt-4">Sem compromisso. Sem vendas agressivas. Apenas clareza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">
                Perguntas frequentes
              </h2>
              <p className="text-lead">
                Respostas diretas sobre como trabalhamos
              </p>
            </div>

            <div className="card p-8">
              <FAQItem
                question="A Dexi substitui desenvolvedores por IA?"
                answer="Não. IA acelera tarefas repetitivas e prototipagem, mas toda solução passa por revisão técnica humana especializada. Arquitetura, segurança, escalabilidade e manutenibilidade são validadas por engenheiros experientes. IA é ferramenta, não substituta."
              />
              <FAQItem
                question="Como a Dexi garante segurança em soluções com IA?"
                answer="Implementamos governança desde o início: rastreabilidade de decisões, explicabilidade de modelos, controle de acesso, auditoria completa e compliance com LGPD/GDPR. IA empresarial exige controle total, não caixas-pretas."
              />
              <FAQItem
                question="Quanto tempo leva um projeto típico?"
                answer="Depende da complexidade. MVPs de inteligência de dados: 4-8 semanas. Sistemas enterprise completos: 3-6 meses. Sempre com entregas incrementais e validação contínua. Agilidade sem comprometer qualidade."
              />
              <FAQItem
                question="A Dexi trabalha com empresas de que porte?"
                answer="Focamos em médias e grandes empresas (50+ funcionários) com desafios complexos de dados e software. Grupos automotivos, corporações multi-unidade, empresas em crescimento acelerado. Clientes que não podem falhar."
              />
              <FAQItem
                question="Como funciona o suporte pós-entrega?"
                answer="Todo projeto inclui documentação técnica completa, testes automatizados e período de garantia. Oferecemos contratos de suporte contínuo com SLA definido, evolução de features e monitoramento proativo."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-cta">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 text-white mb-6">
              Pronto para transformar dados e software em vantagem competitiva?
            </h2>
            <p className="text-lead text-primary-100 mb-10">
              Agende um diagnóstico gratuito. Sem compromisso, sem vendas agressivas. Apenas uma conversa técnica sobre seus desafios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contato" className="btn btn-white btn-xl">
                Obter Diagnóstico em 24h
              </Link>
              <Link href="/cases" className="btn btn-outline-white btn-xl">
                Ver cases de sucesso
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-100">
              <div className="check-item-light">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Resposta em até 24h</span>
              </div>
              <div className="check-item-light">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Diagnóstico técnico detalhado</span>
              </div>
              <div className="check-item-light">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Proposta transparente com escopo claro</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

