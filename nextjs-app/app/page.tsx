import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary-600 font-semibold mb-4">Dexi Digital</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Tecnologia não é o objetivo final.
              <br />É o <span className="text-primary-600">meio</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Inteligência de dados e software sob medida com IA acelerada e
              supervisão técnica humana, para empresas que não podem falhar.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              10+ anos de experiência com grupos automotivos e grandes
              corporações. IA como acelerador, nunca sozinha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Agendar diagnóstico gratuito
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Ver cases de sucesso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Dexi Works Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Como a Dexi trabalha com IA
              </h2>
              <p className="text-xl text-gray-600">
                IA como acelerador, expertise humana como garantia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  IA acelera desenvolvimento
                </h3>
                <p className="text-gray-600">
                  Usamos IA para acelerar prototipagem, análise de dados e
                  geração de código base. Velocidade sem comprometer qualidade.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Revisão técnica especializada
                </h3>
                <p className="text-gray-600">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Entrega com garantia
                </h3>
                <p className="text-gray-600">
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
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Problemas que resolvemos
              </h2>
              <p className="text-xl text-gray-600">
                Soluções de dados e software para desafios empresariais reais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Grupos Automotivos
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <strong>Problema:</strong> Dados fragmentados entre showroom, oficina e pós-venda
                    </p>
                    <p className="text-gray-700">
                      <strong>Solução:</strong> Inteligência de dados unificada: visão 360° do cliente, previsão de demanda e otimização de estoque
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Grandes Corporações
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <strong>Problema:</strong> Projetos de IA que não saem do piloto ou precisam ser reescritos
                    </p>
                    <p className="text-gray-700">
                      <strong>Solução:</strong> Arquitetura enterprise desde o dia 1. IA governada, escalável e auditável
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Empresas em Crescimento
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <strong>Problema:</strong> Sistemas legados que não acompanham o crescimento do negócio
                    </p>
                    <p className="text-gray-700">
                      <strong>Solução:</strong> Modernização gradual com software sob medida. Migração sem interrupção de operações
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Líderes de TI
                    </h3>
                    <p className="text-gray-600 mb-3">
                      <strong>Problema:</strong> Pressão para adotar IA sem comprometer segurança e compliance
                    </p>
                    <p className="text-gray-700">
                      <strong>Solução:</strong> IA empresarial com governança: rastreabilidade, explicabilidade e controle total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Proof Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Experiência comprovada
              </h2>
              <p className="text-xl text-gray-600">
                Mais de uma década construindo soluções que duram
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Anos de experiência</div>
                <p className="text-gray-600">Desenvolvimento de software e inteligência de dados</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Projetos entregues</div>
                <p className="text-gray-600">Desde MVPs até sistemas enterprise complexos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Foco em resultados</div>
                <p className="text-gray-600">ROI, eficiência operacional e redução de riscos</p>
              </div>
            </div>

            {/* Sectors Served */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">Setores atendidos</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Automotivo', 'Varejo', 'Logística', 'Serviços Financeiros', 'Saúde', 'Manufatura'].map((sector) => (
                  <span key={sector} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 p-8 lg:p-12 rounded-2xl">
              <div className="max-w-3xl mx-auto">
                <svg className="w-10 h-10 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "A Dexi entregou uma solução de inteligência de dados que transformou nossa operação. Visibilidade completa do showroom ao pós-venda, com previsões precisas que reduziram nosso estoque em 30%."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold text-gray-900">Diretor de TI</div>
                    <div className="text-gray-600">Grupo Automotivo (NDA) • Automotivo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nossos serviços
              </h2>
              <p className="text-xl text-gray-600">
                Soluções de software e dados para empresas que não podem falhar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1: Data Intelligence */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Inteligência de Dados
                </h3>
                <p className="text-gray-600 mb-6">
                  Analytics avançado, machine learning e data warehousing. Transforme dados em decisões estratégicas com governança e escalabilidade.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dashboards executivos em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modelos preditivos para demanda e churn</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data warehouse moderno (Snowflake, BigQuery)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Governança e compliance (LGPD, SOC2)</span>
                  </li>
                </ul>
                <Link
                  href="/servicos/inteligencia-de-dados"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Saiba mais
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Service 2: Custom Software */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Software Sob Medida
                </h3>
                <p className="text-gray-600 mb-6">
                  Aplicações web e mobile enterprise. Arquitetura escalável, código limpo e documentação completa. Construído para durar.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Arquitetura moderna (microserviços, serverless)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Testes automatizados e CI/CD</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Documentação técnica completa</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suporte e evolução contínua</span>
                  </li>
                </ul>
                <Link
                  href="/servicos/software-sob-medida"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Saiba mais
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Service 3: Enterprise AI */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  IA para Empresas
                </h3>
                <p className="text-gray-600 mb-6">
                  IA acelerada com supervisão técnica humana. Governança, explicabilidade e controle total. IA como ferramenta, não como fim.
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>IA governada e auditável</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integração com sistemas existentes</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Treinamento de equipes internas</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Roadmap de adoção gradual</span>
                  </li>
                </ul>
                <Link
                  href="/servicos/ia-para-empresas"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Saiba mais
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Conteúdo de autoridade
              </h2>
              <p className="text-xl text-gray-600">
                Insights sobre IA, dados e desenvolvimento de software
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Article 1 */}
              <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      IA Empresarial
                    </span>
                    <span className="text-sm text-gray-500">12 min</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Guia: Como usar IA sem comprometer a qualidade do software
                  </h3>
                  <p className="text-gray-600 mb-4">
                    IA pode acelerar desenvolvimento, mas sem governança adequada, cria débito técnico. Aprenda a usar IA como acelerador mantendo qualidade, segurança e manutenibilidade.
                  </p>
                  <Link
                    href="/blog/guia-ia-qualidade-software"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Ler guia completo
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Article 2 */}
              <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      Data Intelligence
                    </span>
                    <span className="text-sm text-gray-500">8 min</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Inteligência de dados para grupos automotivos: do showroom ao pós-venda
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Como unificar dados de vendas, oficina e pós-venda para criar visão 360° do cliente e otimizar operações em grupos automotivos.
                  </p>
                  <Link
                    href="/blog/inteligencia-dados-automotivo"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Ler artigo
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Article 3 */}
              <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      Arquitetura de Software
                    </span>
                    <span className="text-sm text-gray-500">10 min</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Por que projetos baseados em hype precisam ser reescritos (e como evitar)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tecnologias da moda vêm e vão. Aprenda a construir software que dura além dos ciclos de hype, com arquitetura sólida e decisões técnicas fundamentadas.
                  </p>
                  <Link
                    href="/blog/evitar-reescrita-projetos-hype"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Ler artigo
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Ver todos os artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Perguntas frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Respostas diretas sobre como trabalhamos
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
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
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar dados e software em vantagem competitiva?
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Agende um diagnóstico gratuito. Sem compromisso, sem vendas agressivas. Apenas uma conversa técnica sobre seus desafios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                Agendar diagnóstico gratuito
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Ver cases de sucesso
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Diagnóstico técnico detalhado</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Proposta transparente com escopo claro</span>
              </div>
            </div>
          </div>
        </div>
      </section>





