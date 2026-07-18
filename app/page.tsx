import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import TrackedCTA from '@/components/ui/TrackedCTA';
import CountUp from '@/components/ui/CountUp';
import ClientLogos from '@/components/ui/ClientLogos';
import { getHomePageSchemas, localBusinessSchema } from '@/lib/structured-data';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dexi Digital | Fykos — Sistema Operacional de Receita',
  description: 'A Dexi é uma empresa de software. Criamos o Fykos, um sistema operacional de receita que reinventa o CRM e usa dados e IA para transformar seus dados em receita, sobre os sistemas que sua operação já usa.',
  keywords: ['sistema operacional de receita', 'Fykos', 'reinventar o CRM', 'engenharia de receita', 'dados e IA para vendas', 'recuperação de carteira', 'software sob medida', 'grupos automotivos'],
  openGraph: {
    title: 'Dexi Digital | Fykos — Sistema Operacional de Receita',
    description: 'O Fykos transforma seus dados em receita, sobre os sistemas que sua operação já usa. Não é IA genérica. É engenharia de receita.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function HomePage() {
  const pageSchemas = [...getHomePageSchemas(), localBusinessSchema];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      {pageSchemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section — categoria Fykos, fundo por imagem (dark/light por tema) */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-36 border-b border-[var(--border-subtle)]"
      >
        <div className="hero-img-bg hero-img-bg--light" aria-hidden="true" />
        <div className="hero-img-bg hero-img-bg--dark" aria-hidden="true" />
        <div className="hero-img-scrim" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">SISTEMA OPERACIONAL DE RECEITA · POR DEXI</p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Seus dados <span className="text-result">viram receita</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Usamos dados e inteligência artificial em um sistema próprio feito para aumentar o seu lucro. Não é IA genérica. É engenharia de receita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-200">
              <TrackedCTA type="validation" location="hero" variant="money" text="Agendar diagnóstico de 24h" />
              <TrackedCTA type="custom" location="hero" variant="secondary" text="Conhecer o Fykos" href="https://fykos.com.br" />
            </div>
          </div>
        </div>
      </section>

      {/* Prova rápida — números agnósticos como protagonistas, em Pumpkin, com count-up */}
      <section id="resultados" className="dark section py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h3 mb-8">Prova rápida</h2>
            <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card card-result p-6 transition-colors">
                  <div className="text-number-hero text-result mb-2">
                    <CountUp to={45} prefix="+" suffix="%" />
                  </div>
                  <div className="text-body-sm font-medium text-[var(--text-primary)]">Conversão de leads</div>
                </div>
                <div className="card card-result p-6 transition-colors">
                  <div className="text-number-hero text-result mb-2">
                    <CountUp to={7} prefix="R$ " suffix="M+" />
                  </div>
                  <div className="text-body-sm font-medium text-[var(--text-primary)]">Receita recuperada</div>
                </div>
                <div className="card card-result p-6 transition-colors">
                  <div className="text-number-hero text-result mb-2">
                    <CountUp to={35} prefix="Até " suffix="%" />
                  </div>
                  <div className="text-body-sm font-medium text-[var(--text-primary)]">Recuperação de carteira</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contraste — IA de prateleira × Dexi */}
      <section id="contraste" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">POR QUE NÃO É MAIS DO MESMO</p>
              <h2 className="text-h2">IA de prateleira × Dexi</h2>
              <p className="text-lead">A diferença entre responder mensagem e fazer a receita girar.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:p-8 text-left">
                <h3 className="text-h5 mb-4 text-[var(--text-secondary)]">IA de prateleira</h3>
                <ul className="space-y-4">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-500 font-bold">✕</span> <span>Responde e para no agendamento.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-500 font-bold">✕</span> <span>Vive dentro do CRM deles.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-500 font-bold">✕</span> <span>Você migra de sistema.</span>
                  </li>
                </ul>
              </div>

              <div className="card card-result p-6 md:p-8 text-left border-l-4 border-l-[var(--color-primary-500)]">
                <h3 className="text-h5 mb-4 text-result">Dexi · Fykos</h3>
                <ul className="space-y-4">
                  <li className="flex gap-2 text-sm text-[var(--text-primary)]">
                    <span className="text-green-500 font-bold">✓</span> <span>Executa o ciclo de receita inteiro.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-primary)]">
                    <span className="text-green-500 font-bold">✓</span> <span>Roda sobre o sistema que você já usa: zero migração.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-primary)]">
                    <span className="text-green-500 font-bold">✓</span> <span>Ressuscita lead com log auditável.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 diferenciais — a espinha agnóstica */}
      <section id="diferenciais" className="section bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">A ESPINHA QUE NÃO MUDA</p>
              <h2 className="text-h2">Inteligência nos comandos, trilhos na execução</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 md:p-8 text-left">
                <h3 className="text-h5 mb-2">Integra, não substitui</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Roda sobre o sistema-núcleo que sua operação já usa. Nada de trocar de ferramenta.</p>
              </div>
              <div className="card p-6 md:p-8 text-left">
                <h3 className="text-h5 mb-2">Nenhum lead morre</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Qualifica, reaquece e ressuscita cada oportunidade, sem esquecer, sem depender de quem responde primeiro.</p>
              </div>
              <div className="card p-6 md:p-8 text-left">
                <h3 className="text-h5 mb-2">Comandos com inteligência, execução em trilhos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Determinístico, dentro da LGPD. ROI aprovado antes de escalar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrações — roda sobre o núcleo de qualquer setor */}
      <section id="integracoes" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-header">
              <p className="text-overline mb-2">INTEGRAÇÕES</p>
              <h2 className="text-h2">Roda sobre o que sua operação já usa</h2>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="card px-5 py-2 text-sm font-medium text-[var(--text-primary)]">DMS das montadoras</span>
              <span className="card px-5 py-2 text-sm font-medium text-[var(--text-primary)]">Syonet e CRMs</span>
              <span className="card px-5 py-2 text-sm font-medium text-[var(--text-secondary)]">NBS · em breve</span>
            </div>

            <p className="text-lead text-[var(--text-secondary)] max-w-2xl mx-auto">
              O mesmo motor conecta ao sistema-núcleo de qualquer setor: não troca de sistema, ganha uma camada de inteligência sobre ele.
            </p>
          </div>
        </div>
      </section>

      {/* Caso automotivo — onde já provamos (leva para /automotivo) */}
      <section id="caso-automotivo" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <p className="text-overline mb-2">ONDE JÁ PROVAMOS</p>
            <h2 className="text-h2 mb-4">Grupos automotivos já rodam o Fykos na operação.</h2>
            <p className="text-lead text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto md:mx-0">
              Do super esportivo ao premium e duas rodas: nenhum lead morre, integrado ao DMS e ao Syonet. É a nossa cabeça de ponte.
            </p>

            <ClientLogos align="start" className="mb-10" />

            <TrackedCTA type="custom" location="caso-automotivo" variant="secondary" text="Ver a solução para concessionárias →" href="/automotivo" />
          </div>
        </div>
      </section>

      {/* Áreas atendidas — 3 cards → páginas verticais */}
      <section id="areas-atendidas" className="section bg-[var(--bg-primary)] border-y border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">ÁREAS ATENDIDAS</p>
              <h2 className="text-h2">A categoria é horizontal. A prova, por setor.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/automotivo" className="card p-6 md:p-8 text-left transition-base hover:border-[var(--color-result-500)] group">
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-600)]">Ativo · carro-chefe</span>
                <h3 className="text-h5 mt-2 mb-2">Automotivo</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Concessionárias e grupos automotivos, sobre o DMS, Syonet e sistema de estoque.</p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--text-result)] group-hover:underline">Ver a solução →</span>
              </Link>

              <Link href="/clinicas" className="card p-6 md:p-8 text-left transition-base hover:border-[var(--color-result-500)] group">
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-tertiary)]">Aplicação do Fykos</span>
                <h3 className="text-h5 mt-2 mb-2">Clínicas</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Reaquece paciente parado, remarca retorno e reduz no-show, sobre o seu sistema de gestão.</p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--text-result)] group-hover:underline">Ver a aplicação →</span>
              </Link>

              <Link href="/construtoras" className="card p-6 md:p-8 text-left transition-base hover:border-[var(--color-result-500)] group">
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-tertiary)]">Prova: TGV Empreendimentos</span>
                <h3 className="text-h5 mt-2 mb-2">Construtoras e Incorporadoras</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Acompanha a carteira, reduzindo o índice de inadimplência. Converte dívidas em pagamentos pró-ativo.</p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--text-result)] group-hover:underline">Ver a solução →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnóstico em 24h */}
      <section id="validacao-24h" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <p className="text-overline mb-2">DIAGNÓSTICO GRATUITO</p>
              <h2 className="text-h2">Diagnóstico de 24h</h2>
              <p className="text-lead">Mapeamos seu funil e projetamos o ROI, sem custo. Se não fechar a conta, o diagnóstico é seu.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">01</span>
                <h3 className="text-h5 mt-3 mb-2">Conversa de 30 minutos</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Entendemos seu cenário, sistemas atuais e metas de negócio.</p>
              </div>

              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">02</span>
                <h3 className="text-h5 mt-3 mb-2">Análise de viabilidade</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Avaliamos integrações, volume de dados e complexidade técnica.</p>
              </div>

              <div className="card p-6 text-center md:text-left">
                <span className="text-number text-[var(--color-primary-500)]">03</span>
                <h3 className="text-h5 mt-3 mb-2">Roadmap + Projeção de ROI</h3>
                <p className="text-body-sm text-[var(--text-secondary)]">Você recebe um diagnóstico completo, mesmo que não avance.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <TrackedCTA type="validation" location="validacao-24h" variant="primary" text="Agendar diagnóstico de 24h" />
              <p className="text-sm text-[var(--text-tertiary)] mt-4">Respondemos com atenção individualizada para o seu caso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos - Cards com dor, solucao, numero */}
      <section id="problemas" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Problemas que convertemos em resultado</h2>
              <p className="text-lead">Desafios críticos que já resolvemos para líderes de mercado</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Leads no Limbo</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>CRM cheio de leads que nunca foram trabalhados. Vendedores priorizam quem responde, não quem converte.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>O Fykos assume o follow-up em segundos, 24/7, com contexto completo e persistência calibrada.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">+45% na conversão de leads qualificados</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Inadimplência Corroendo Margem</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>Réguas de cobrança genéricas e caras. Equipe de cobrança não escala.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Negociação persistente, humanizada e 100% autônoma. Proposta individualizada por perfil.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Até 35% de recuperação de carteira vencida</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">IA Travada em PoC</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>Pilotos que nunca viram produção por falta de compliance, integração complexa ou resistência interna.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Arquitetura Shadow que executa sobre sistemas legados sem reescrever código.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Rollout seguro em 7 dias</span>
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-h4 mb-4">Pressão do Board para &ldquo;Usar IA&rdquo;</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-red-500 font-bold">✕</span> <span>Cobrança por inovação sem roadmap claro. TI não sabe por onde começar.</span>
                  </li>
                  <li className="flex gap-2 text-sm text-[var(--text-secondary)] text-left">
                    <span className="text-green-500 font-bold">✓</span> <span>Consultoria orientada a ROI com métricas que o CFO entende.</span>
                  </li>
                </ul>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded p-3 text-center">
                  <span className="font-semibold text-[var(--text-primary)]">Aprovação técnica e executiva em 1 semana</span>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <TrackedCTA type="validation" location="problemas" variant="secondary" text="Validar Meu Cenário" />
            </div>
          </div>
        </div>
      </section>

      {/* Riscos - O custo de esperar */}
      <section id="riscos" className="section bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h3 mb-6 text-center md:text-left">O custo de esperar</h2>
            <ul className="space-y-4 mb-12">
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>60% do pipeline desperdiçado:</strong> manter CRMs que apenas &ldquo;guardam dados&rdquo;.</p>
              </li>
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Erosão de margem:</strong> a concorrência já usa sistemas para fechar negócios mais rápido.</p>
              </li>
              <li className="card p-4 flex gap-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-body-sm text-[var(--text-secondary)] text-left w-full"><strong>Vulnerabilidade operacional:</strong> processos manuais sem auditoria e rastreabilidade.</p>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-5 border-l-4 border-l-[var(--color-primary-500)] text-left">
                <h3 className="text-h6 mb-2">Foco em Metas</h3>
                <p className="text-xs text-[var(--text-secondary)]">O Fykos persegue KPIs de conversão, e não apenas responde perguntas.</p>
              </div>
              <div className="card p-5 border-l-4 border-l-[var(--color-primary-500)] text-left">
                <h3 className="text-h6 mb-2">Escala Imediata</h3>
                <p className="text-xs text-[var(--text-secondary)]">Suporte a múltiplos canais e volume extremo sem novas estruturas.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <TrackedCTA type="validation" location="riscos" variant="link" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-[var(--bg-secondary)] pb-32 md:pb-24 pt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Perguntas frequentes</h2>
              <p className="text-lead">Dúvidas comuns sobre o Fykos</p>
            </div>

            <div className="card divide-y divide-[var(--border-subtle)] mb-12 text-left px-6 md:px-8">
              <FAQItem
                question="Quanto tempo leva para ver resultado?"
                answer="O Fykos gera valor imediato. Implementações típicas apresentam receita recuperada nos primeiros 15 a 30 dias após o go-live."
              />
              <FAQItem
                question="Como integra com meu sistema atual?"
                answer="Utilizamos arquitetura read-only que conecta via API, webhook ou RPA sobre seu CRM/ERP atual. Sem migração de dados ou reescrita de código."
              />
              <FAQItem
                question="Qual é o investimento mínimo?"
                answer="Depende da complexidade. No diagnóstico gratuito, projetamos o ROI e apresentamos opções de implementação adequadas ao seu contexto."
              />
              <FAQItem
                question="E se não funcionar?"
                answer="Nosso modelo é orientado a resultado. Só avançamos se a viabilidade técnica e financeira estiver clara. Você recebe o diagnóstico completo mesmo que não contrate."
              />
            </div>

            <div className="card p-8 text-center bg-[var(--bg-primary)] border border-[var(--color-primary-500)]/30">
              <h3 className="text-h4 mb-3">Transforme seus dados em receita</h3>
              <p className="text-body-sm text-[var(--text-secondary)] mb-6">
                Descubra o potencial financeiro do Fykos para a sua operação. Diagnóstico gratuito e sem compromisso.
              </p>
              <TrackedCTA type="validation" location="faq-cta" variant="primary" text="Agendar diagnóstico de 24h" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Sticky CTA for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA type="validation" location="mobile-sticky" variant="primary" text="Agendar diagnóstico" className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm" />
      </div>
    </main>
  );
}
