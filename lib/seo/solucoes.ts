/**
 * Páginas de solução (/solucoes/<slug>).
 *
 * Out/2026: as versões anteriores foram escritas por IA e afirmavam o que o
 * Fykos não faz ("< 30 segundos", integração com "todos os portais" e "qualquer
 * DMS", Instagram e Messenger, machine learning, predição de recompra, migração
 * de qualquer CRM). Saíram as páginas cuja premissa era um recurso inexistente
 * (integração DMS, atendimento omnichannel, CRM unificado); a que ficou usa só
 * o que lib/regras-editoriais.ts afirma sobre o produto.
 */
export interface SolucaoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  sections: { heading: string; content: string }[];
  resultados: string[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const SOLUCOES: SolucaoPage[] = [
  {
    slug: 'gestao-leads-automotivo',
    title: 'Gestão de Leads para Concessionárias',
    metaTitle: 'Gestão de Leads Automotivo com IA | Dexi Digital',
    metaDescription:
      'O lead que a concessionária pagou para gerar merece resposta rápida, contexto e o vendedor certo. O Fykos qualifica, prioriza e passa ao time, sem trocar o CRM.',
    keywords: [
      'gestão de leads automotivo',
      'CRM concessionária leads',
      'leads concessionária IA',
      'qualificação leads automotivo',
      'follow-up automático concessionária',
    ],
    answerSnippet:
      'Lead de concessionária custa caro e esfria rápido. O Fykos atende o lead que chega, qualifica com contexto e passa ao vendedor com o histórico da conversa. Quando uma condição relevante muda, como estoque ou condição comercial, retoma contatos que ficaram para trás. Tudo sobre os sistemas que a concessionária já usa, sem exigir a troca do CRM.',
    sections: [
      {
        heading: 'Onde o lead se perde',
        content:
          'Concessionárias recebem leads de várias fontes: site, portais, redes sociais, campanhas pagas e quem chega à loja. Cada lead tem custo de mídia por trás. Quando a resposta demora, chega sem contexto ou depende de alguém lembrar do retorno, esse investimento vira oportunidade perdida, e ninguém enxerga o tamanho da perda.',
      },
      {
        heading: 'Resposta rápida, com contexto',
        content:
          'O Fykos atende o lead que chega pelo WhatsApp, entende o que ele procura e qualifica a conversa. Quem está pesquisando e quem está pronto para comprar recebem tratamentos diferentes, e o vendedor não começa do zero.',
      },
      {
        heading: 'Transição ao vendedor',
        content:
          'Quando o lead está pronto, o Fykos passa a conversa ao vendedor com o contexto do que foi dito e notifica o responsável. Exceções vão para o humano, dentro de regras definidas pela operação.',
      },
      {
        heading: 'Prioridade para o time',
        content:
          'O gestor não precisa adivinhar onde o time deve gastar energia. O Fykos ajuda a priorizar as oportunidades com mais chance de virar venda, a partir dos critérios comerciais da própria operação.',
      },
      {
        heading: 'Retomar o que ficou para trás',
        content:
          'Lead que esfriou não é lead perdido. Quando uma condição relevante muda, como um veículo que entrou no estoque ou uma condição comercial nova, o Fykos retoma o contato com contexto, em vez de mandar mensagem genérica.',
      },
    ],
    resultados: [
      'O lead que custou caro recebe resposta e acompanhamento',
      'Vendedor recebe a conversa com contexto, sem começar do zero',
      'Time comercial com prioridade clara sobre onde agir',
      'Cada etapa registrada: o que foi feito, o que falhou e por quê',
    ],
    faq: [
      {
        question: 'O Fykos substitui o CRM da concessionária?',
        answer:
          'Não. O Fykos atua sobre os sistemas que a concessionária já usa, sem exigir a troca do CRM.',
      },
      {
        question: 'Leads de portais e do site entram no fluxo?',
        answer:
          'Depende da operação. A Dexi tem capacidade de integrar o Fykos às fontes de lead, ao CRM e ao DMS quando o projeto pede. O que conectar, e em que ordem, é definido na conversa de aderência.',
      },
    ],
    ctaText: 'Avaliar aderência da minha operação',
  },
];
