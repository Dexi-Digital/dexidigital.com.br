import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IA para Empresas | Concierge Digital de Vendas',
  description:
    'IA conversacional para vendas consultivas. Concierge Digital treinado em Neurolinguística e Venda Consultiva. Perfilamento de cliente em tempo real com supervisão técnica humana.',
};

export default function EnterpriseAIPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/servicos"
              className="inline-flex items-center text-[var(--color-primary-600)] font-semibold mb-6 hover:text-[var(--color-primary-700)] transition-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Serviços
            </Link>
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Serviço</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              <span className="text-display-gradient">Concierge Digital</span> de Vendas
            </h1>
            <p className="text-lead max-w-2xl animate-fade-in-up delay-100">
              Não é um chatbot. É um assistente de vendas treinado em Neurolinguística
              e Venda Consultiva, que entende o perfil do cliente em tempo real e
              adapta a abordagem a cada turno da conversa.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">O que nos diferencia</h2>
              <p className="text-lead">Uma nova geração de IA comercial, muito além de chatbots genéricos</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <div className="card card-interactive p-6">
                <div className="w-12 h-12 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Treinado em Neurolinguística</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Reconhece padrões linguísticos que revelam valores, motivações e
                  estilo de tomada de decisão do cliente. Vai além das palavras —
                  entende o que está por trás delas.
                </p>
              </div>

              <div className="card card-interactive p-6">
                <div className="w-12 h-12 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Venda Consultiva Automatizada</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Metodologia SPIN Selling e técnicas consultivas integradas.
                  Faz perguntas inteligentes, identifica necessidades reais e
                  posiciona sua solução de forma estratégica.
                </p>
              </div>

              <div className="card card-interactive p-6">
                <div className="w-12 h-12 bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-h5 mb-3">Perfilamento em Tempo Real</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  A cada turno da conversa, analisa e adapta a abordagem.
                  Identifica se o cliente valoriza performance, segurança,
                  status ou economia — e ajusta o discurso dinamicamente.
                </p>
              </div>
            </div>

            {/* Real Example */}
            <div className="card p-8 border-l-4 border-[var(--color-primary-500)]">
              <h3 className="text-h5 mb-4">Exemplo Real: Setor Automotivo</h3>
              <p className="text-body text-[var(--text-secondary)] mb-4">
                Nosso Concierge Digital consegue distinguir, em tempo real, entre um cliente
                que valoriza os <strong className="text-[var(--text-primary)]">393 cavalos de potência de um Haval H6</strong> versus
                um que prioriza a <strong className="text-[var(--text-primary)]">classificação 5 estrelas em segurança e o sistema ADAS de um GWM</strong>.
              </p>
              <p className="text-body-sm text-[var(--text-muted)]">
                Com base nessa leitura, adapta automaticamente os argumentos de venda,
                destacando performance para o primeiro perfil e tecnologia de segurança para o segundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">O que entregamos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Concierge Digital de Vendas personalizado',
                'Integração com CRM e sistemas existentes',
                'Treinamento em sua base de produtos',
                'Análise de conversas e insights',
                'Perfilamento automático de clientes',
                'Handoff inteligente para vendedores',
                'Dashboard de performance comercial',
                'IA governada e auditável',
              ].map((item) => (
                <div key={item} className="card p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-body-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Como funciona a análise turno a turno</h2>
              <p className="text-lead">A cada mensagem, nosso Concierge Digital refina seu entendimento do cliente</p>
            </div>
            <div className="space-y-4">
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">01</span>
                  <h3 className="text-h5">Análise Linguística</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Identifica padrões de linguagem que revelam se o cliente é mais
                  analítico ou emocional, se valoriza dados técnicos ou experiências,
                  se busca validação social ou autonomia na decisão.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">02</span>
                  <h3 className="text-h5">Mapeamento de Valores</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Detecta os critérios de decisão prioritários: performance, segurança,
                  economia, status, praticidade ou inovação. Cada cliente tem uma
                  hierarquia de valores única.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">03</span>
                  <h3 className="text-h5">Adaptação Dinâmica</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Ajusta argumentos, tom de voz e nível de detalhe técnico em tempo
                  real. Apresenta os mesmos produtos de formas completamente
                  diferentes para perfis distintos.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-number text-[var(--color-primary-500)]">04</span>
                  <h3 className="text-h5">Handoff Inteligente</h3>
                </div>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Quando o cliente está pronto para avançar, transfere para o
                  vendedor humano com um briefing completo: perfil do cliente,
                  valores identificados e pontos-chave da conversa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header text-left">
              <h2 className="text-h2">Aplicações práticas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Concessionárias Premium</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Qualificação de leads com perfilamento de valor. Identifica
                  compradores de performance vs. compradores de segurança e
                  direciona para os veículos certos.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Imobiliárias de Alto Padrão</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Entende se o cliente busca investimento, moradia familiar ou
                  lifestyle. Adapta apresentação de imóveis baseado em
                  motivações reais.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">Serviços B2B Complexos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Venda consultiva para contratos de alto valor. Identifica
                  decisores vs. influenciadores e adapta o discurso para
                  cada stakeholder.
                </p>
              </div>
              <div className="card card-interactive p-6">
                <h3 className="text-h5 mb-3">E-commerce Premium</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">
                  Personal shopper digital que entende preferências e sugere
                  produtos alinhados com o estilo e valores do cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display-lg text-white mb-5">
              Transforme seu atendimento em vendas consultivas
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Agende um diagnóstico gratuito e veja como o Concierge Digital
              pode aumentar sua conversão com IA que entende pessoas.
            </p>
            <Link href="/contato" className="btn bg-white text-[var(--color-primary-700)] hover:bg-white/90">
              Agendar Demonstração
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

