/**
 * Páginas sobre canais e integrações.
 *
 * Out/2026: a Dexi não tem integração pronta com nenhum sistema de mercado.
 * Integra quando o projeto de um cliente precisa (ver lib/regras-editoriais.ts).
 * As páginas de portais automotivos e de Google/Meta Ads afirmavam integrações
 * que não existem e saíram (410 em lib/paginas-removidas.ts). Fica o WhatsApp,
 * que é o canal em que o Fykos opera.
 *
 * Página por sistema (/integracoes/syonet etc.) só quando a integração existir
 * de fato em um cliente.
 */
export interface IntegracaoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  sections: { heading: string; content: string }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const INTEGRACOES: IntegracaoPage[] = [
  {
    slug: 'whatsapp-business-concessionaria',
    title: 'WhatsApp Business para concessionárias',
    metaTitle: 'WhatsApp Business para concessionárias: o lead fora do celular do vendedor | Dexi Digital',
    metaDescription:
      'Quando o WhatsApp vive no celular de cada vendedor, o lead que custou caro esfria sem ninguém ver. Veja como o Fykos atende pelo WhatsApp Business com regras, contexto e registro.',
    keywords: [
      'WhatsApp Business concessionária',
      'atendimento WhatsApp concessionária',
      'WhatsApp para vendas de veículos',
      'lead de WhatsApp concessionária',
      'WhatsApp Business com IA',
    ],
    answerSnippet:
      'Na maioria das concessionárias, o WhatsApp vive no celular de cada vendedor: o histórico vai embora quando ele sai e ninguém sabe que lead ficou sem resposta. O Fykos atende pelo WhatsApp Business da Meta, qualifica com contexto, passa o contato ao vendedor e registra cada conversa e cada escalonamento. O objetivo é financeiro: o lead que custou caro não esfria no celular de ninguém.',
    sections: [
      {
        heading: 'O WhatsApp no celular do vendedor',
        content:
          'Quando cada vendedor atende pelo próprio aparelho, a operação não vê a fila: não sabe quem respondeu, quem esqueceu e que proposta ficou parada. Se o vendedor sai, a carteira sai junto. O canal que o cliente prefere vira o ponto cego da gestão comercial.',
      },
      {
        heading: 'O que muda quando o WhatsApp entra na operação',
        content:
          'O Fykos faz o atendimento receptivo: responde, qualifica com o contexto do que o cliente procura e passa o contato ao vendedor com a conversa inteira à vista. O que foge das regras definidas vai para uma pessoa. Cada evento, falha e motivo de escalonamento fica registrado, e a gestão passa a enxergar o que acontece com cada lead.',
      },
      {
        heading: 'Retomar o contato certo na hora certa',
        content:
          'Boa parte da receita está em quem já conversou e não comprou. Quando uma condição relevante muda, como a chegada de um veículo ou uma condição comercial nova, o Fykos retoma o contato com contexto, dentro das regras e dos consentimentos aplicáveis.',
      },
      {
        heading: 'Canal oficial e registro auditável',
        content:
          'O atendimento usa o WhatsApp Business da Meta, dentro das políticas da plataforma e da LGPD. As conversas ficam registradas e podem ser auditadas, o que dá à operação controle sobre o que foi dito em nome da empresa.',
      },
    ],
    faq: [
      {
        question: 'O vendedor perde o contato com o cliente?',
        answer:
          'Não. O vendedor recebe o contato com o histórico e o contexto da conversa e continua conduzindo a negociação.',
      },
      {
        question: 'Preciso trocar o CRM para usar?',
        answer:
          'Não. O Fykos atua sobre os sistemas que a operação já usa. A Dexi tem capacidade de integrar o Fykos ao CRM ou ao DMS quando o projeto pede, e isso é avaliado caso a caso.',
      },
      {
        question: 'Faz sentido para qualquer concessionária?',
        answer:
          'Depende do volume de contatos, dos dados disponíveis e da viabilidade de implementação. É o que a conversa de aderência avalia, antes de qualquer compromisso.',
      },
    ],
    ctaText: 'Avaliar aderência da minha operação',
  },
];
