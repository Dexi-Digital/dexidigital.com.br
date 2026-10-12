import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import TrackedCTA from '@/components/ui/TrackedCTA';
import type { Metadata } from 'next';

// Out/2026: o texto anterior foi escrito por IA ("perfil psicológico",
// "Neurolinguística Aplicada", "uma década de engenharia", "integramos
// nativamente", cases sem atribuição). Reescrito só com o que
// lib/regras-editoriais.ts afirma sobre o Fykos.

export const metadata: Metadata = {
  title: 'IA para Grupos Automotivos Premium',
  description: 'Inteligência e execução comercial para concessionárias e grupos automotivos premium: cada lead custou caro para chegar e precisa virar venda. O Fykos transforma dados da operação em prioridades e ações comerciais.',
  keywords: ['IA para concessionárias', 'inteligência comercial automotiva', 'grupos automotivos premium', 'conversão de leads automotivo', 'tecnologia brasileira'],
};

const challenges = [
  {
    problem: 'O interesse esfria antes de o consultor assumir a conversa.',
    solution: 'O Fykos atende quem chega, qualifica a intenção de compra e passa ao consultor com o contexto da conversa, no momento em que ela pede uma pessoa.',
    result: 'Menos lead de alto ticket perdido por demora.',
  },
  {
    problem: 'A base de quem já comprou ou já pediu proposta fica parada.',
    solution: 'Quando uma condição relevante muda, como um modelo que chegou ao estoque ou uma condição comercial nova, o Fykos identifica para quem isso importa e retoma a conversa dentro das regras definidas.',
    result: 'Oportunidades da base de volta à pauta quando há motivo concreto.',
  },
  {
    problem: 'Showroom, CRM, estoque e WhatsApp não conversam entre si.',
    solution: 'O Fykos atua sobre os sistemas que a operação já usa, sem trocar o CRM. A Dexi integra as fontes que o projeto precisa e a operação autoriza.',
    result: 'Os sinais que importam deixam de passar despercebidos.',
  },
  {
    problem: 'Mais volume costuma significar mais fila e mais trabalho manual.',
    solution: 'O volume passa por regras e priorização, e o time recebe primeiro as oportunidades mais próximas de virar venda.',
    result: 'Time comercial dedicado a quem está perto de decidir.',
  },
];

const fluxo = [
  { titulo: 'Detectar', texto: 'Conecta sinais de estoque, CRM e histórico de atendimento.' },
  { titulo: 'Priorizar', texto: 'Distingue as oportunidades relevantes usando contexto e critérios comerciais.' },
  { titulo: 'Executar', texto: 'Inicia abordagens, qualifica, notifica responsáveis e encaminha exceções a uma pessoa.' },
  { titulo: 'Verificar', texto: 'Acompanha resultados, falhas e motivos de escalonamento, com cada etapa registrada.' },
];

const motivos = [
  {
    titulo: 'Valor financeiro primeiro',
    texto: 'O ponto de partida é a receita que escapa: o lead que custou caro e esfriou, a proposta sem retorno, o cliente da base que ninguém procurou quando o carro certo chegou.',
  },
  {
    titulo: 'Sobre o que o grupo já usa',
    texto: 'O Fykos não exige trocar o CRM. A Dexi tem capacidade de integrá-lo ao CRM, ao DMS ou ao ERP da operação quando o projeto pede.',
  },
  {
    titulo: 'Execução com regras e supervisão',
    texto: 'A inteligência interpreta o contexto; regras e validações controlam a execução. O que foge das regras vai para uma pessoa.',
  },
  {
    titulo: 'Trilha de cada oportunidade',
    texto: 'Cada etapa relevante fica registrada e pode ser auditada: o que foi feito, o que falhou e por que uma conversa foi para o time.',
  },
];

export default function AutomotivoPremiumPage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        trilha={[
          { nome: 'Automotivo', url: '/automotivo' },
          { nome: 'Automotivo Premium', url: '/setores/automotivo-premium' },
        ]}
      />
      {/* Hero */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Setor Automotivo Premium</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Cada lead custou caro para chegar. Ele precisa virar{' '}
              <span className="text-display-gradient">venda</span>
            </h1>
            <p className="text-h3 mb-4 text-[var(--text-primary)] animate-fade-in-up delay-75">
              Inteligência e execução comercial com o Fykos
            </p>
            <p className="text-lead max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              O Fykos transforma dados da operação em prioridades e ações comerciais, do primeiro contato ao fechamento, para que as oportunidades que já estão na base do grupo virem receita e previsibilidade de venda. Feito para operações premium, multiunidade e de alto ticket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-150">
              <TrackedCTA
                type="aderencia"
                location="automotivo-premium-hero"
                variant="primary"
                text="Avaliar aderência da minha operação"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Onde a receita escapa</h2>
              <p className="text-lead">Problemas comuns de grupos automotivos e como o Fykos atua</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((item, index) => (
                <div key={index} className="card card-interactive p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full mb-3 inline-block">Desafio</span>
                    <p className="text-body-sm font-medium text-[var(--text-primary)]">{item.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 text-[var(--color-primary-700)] dark:text-[var(--color-primary-300)] rounded-full mb-3 inline-block">Como o Fykos atua</span>
                    <p className="text-body-sm text-[var(--text-secondary)]">{item.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <span className="text-h5 text-[var(--color-success-600)]">{item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo de trabalho */}
      <section className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Da oportunidade identificada à ação executada</h2>
              <p className="text-lead">Como o Fykos trabalha sobre os dados da operação, com controle em cada etapa.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fluxo.map((etapa, i) => (
                <div key={etapa.titulo} className="card p-6">
                  <span className="text-number-lg text-display-gradient">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-h5 mt-3 mb-2">{etapa.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{etapa.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Dexi for Automotive */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Por que a Dexi na operação comercial automotiva?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {motivos.map((m) => (
                <div key={m.titulo} className="card card-feature p-6 group">
                  <h3 className="text-h5 mb-3">{m.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{m.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-5">
              Faz sentido para a sua operação?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedCTA
                type="aderencia"
                location="automotivo-premium-cta-final"
                variant="white"
                text="Solicitar conversa de aderência"
              />
              <Link href="/o-fykos" className="btn border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10">
                Conhecer o Fykos →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
