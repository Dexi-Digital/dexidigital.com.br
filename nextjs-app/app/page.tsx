import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline text-primary-600 mb-4">Dexi Digital</p>
            <h1 className="text-display mb-6">
              Tecnologia não é o objetivo final.
              <br />É o <span className="text-primary-600">meio</span>.
            </h1>
            <p className="text-lead mb-8 max-w-3xl mx-auto">
              Inteligência de dados e software sob medida com IA acelerada e
              supervisão técnica humana, para empresas que não podem falhar.
            </p>
            <p className="text-body-lg text-gray-500 mb-10">
              10+ anos de experiência com grupos automotivos e grandes
              corporações. IA como acelerador, nunca sozinha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn btn-primary btn-xl">
                Agendar diagnóstico gratuito
              </Link>
              <Link href="/cases" className="btn btn-outline btn-xl">
                Ver cases de sucesso
              </Link>
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

      {/* Authority Proof Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">
                Experiência comprovada
              </h2>
              <p className="text-lead">
                Mais de uma década construindo soluções que duram
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Anos de experiência</div>
                <p className="text-body-sm">Desenvolvimento de software e inteligência de dados</p>
              </div>
              <div className="stat-card">
                <div className="stat-value">50+</div>
                <div className="stat-label">Projetos entregues</div>
                <p className="text-body-sm">Desde MVPs até sistemas enterprise complexos</p>
              </div>
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Foco em resultados</div>
                <p className="text-body-sm">ROI, eficiência operacional e redução de riscos</p>
              </div>
            </div>

            {/* Sectors Served */}
            <div className="mb-16">
              <h3 className="text-h5 text-center mb-6">Setores atendidos</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Automotivo', 'Varejo', 'Logística', 'Serviços Financeiros', 'Saúde', 'Manufatura'].map((sector) => (
                  <span key={sector} className="badge badge-neutral">
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="testimonial-card">
              <div className="max-w-3xl mx-auto">
                <svg className="w-10 h-10 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-body-lg mb-6">
                  "A Dexi entregou uma solução de inteligência de dados que transformou nossa operação. Visibilidade completa do showroom ao pós-venda, com previsões precisas que reduziram nosso estoque em 30%."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-h6">Diretor de TI</div>
                    <div className="text-body-sm">Grupo Automotivo (NDA) • Automotivo</div>
                  </div>
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
                Agendar diagnóstico gratuito
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

