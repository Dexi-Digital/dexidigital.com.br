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
    title: 'WhatsApp Business API para Concessionárias',
    metaTitle: 'WhatsApp Business API para Concessionárias | Dexi Digital',
    metaDescription:
      'Integração WhatsApp Business API para concessionárias com IA. Atendimento automático, qualificação de leads e distribuição inteligente. Dexi Digital.',
    keywords: [
      'WhatsApp Business concessionária',
      'WhatsApp API automotivo',
      'atendimento WhatsApp concessionária',
      'automação WhatsApp dealer',
      'WhatsApp Business IA',
    ],
    answerSnippet:
      'A integração do WhatsApp Business API com o Fykos da Dexi Digital transforma o WhatsApp da concessionária de um canal manual em um canal inteligente: resposta instantânea a leads, qualificação automática, distribuição para vendedores com briefing e follow-up persistente — tudo via API oficial.',
    sections: [
      {
        heading: 'Por que WhatsApp é o canal #1',
        content:
          'O WhatsApp é o canal preferido de 90% dos compradores de veículos no Brasil. É mais rápido que email, mais conveniente que ligação e mais pessoal que chat de site. A concessionária que domina o WhatsApp domina a venda.',
      },
      {
        heading: 'WhatsApp artesanal vs. WhatsApp inteligente',
        content:
          'A maioria das concessionárias usa WhatsApp no celular do vendedor. Isso significa: leads perdidos quando o vendedor sai, sem métricas, sem histórico centralizado e sem automação. Com o Fykos + WhatsApp Business API, tudo é centralizado, automatizado e mensurável.',
      },
      {
        heading: 'O que muda com a integração',
        content:
          'Lead manda mensagem → IA responde em 15 segundos com informação do veículo → qualifica intenção → distribui para vendedor com briefing → mantém follow-up automatizado → gera relatório de conversão por canal. Tudo sem o vendedor precisar ficar olhando o celular.',
      },
      {
        heading: 'Compliance e segurança',
        content:
          'A integração via WhatsApp Business API (oficial) garante compliance com as políticas da Meta, LGPD e regulamentações do setor. Todas as mensagens são registradas e auditáveis. Sem risco de bloqueio por uso irregular.',
      },
    ],
    faq: [
      {
        question: 'Preciso de um número novo para o WhatsApp Business API?',
        answer:
          'Não necessariamente. Você pode migrar o número existente da concessionária para a API. A Dexi Digital cuida de todo o processo de migração.',
      },
      {
        question: 'O vendedor perde acesso ao WhatsApp?',
        answer:
          'Não. O vendedor continua usando o WhatsApp, mas agora com superpoderes: vê o histórico completo do lead, recebe briefing automático e não precisa mais qualificar manualmente.',
      },
    ],
    ctaText: 'Implementar WhatsApp inteligente',
  },
  {
    slug: 'portais-automotivos-integracao',
    title: 'Integração com Portais Automotivos',
    metaTitle: 'Integração com Webmotors, iCarros e OLX | Dexi Digital',
    metaDescription:
      'Integre leads de Webmotors, iCarros, OLX e outros portais automotivos em uma gestão unificada com IA. Resposta instantânea e qualificação automática.',
    keywords: [
      'integração Webmotors',
      'integração iCarros',
      'leads portais automotivos',
      'integração OLX carros',
      'gestão leads portais',
    ],
    answerSnippet:
      'O Fykos da Dexi Digital integra todos os principais portais automotivos brasileiros (Webmotors, iCarros, OLX, Mercado Livre) em uma gestão unificada de leads com IA. Cada lead de portal recebe resposta instantânea, qualificação automática e é distribuído para o vendedor mais adequado.',
    sections: [
      {
        heading: 'O problema dos leads de portal',
        content:
          'Leads de portais como Webmotors e iCarros representam 30-50% do volume total de muitas concessionárias. Mas são tratados como leads de segunda classe: chegam por email, são lidos horas depois e raramente recebem follow-up adequado.',
      },
      {
        heading: 'Integração em tempo real',
        content:
          'O Fykos conecta via API com os principais portais e recebe leads em tempo real. Em menos de 30 segundos, o lead recebe resposta via WhatsApp com informação sobre o veículo que visualizou no portal.',
      },
      {
        heading: 'Deduplicação inteligente',
        content:
          'O mesmo cliente pode enviar leads pelo Webmotors, iCarros e site da concessionária. O sistema identifica que é a mesma pessoa e consolida todas as interações em um perfil único, evitando atendimento duplicado e conflito entre vendedores.',
      },
      {
        heading: 'ROI por portal',
        content:
          'O dashboard mostra conversão e receita gerada por cada portal. A concessionária sabe exatamente quanto cada investimento em anúncio de portal retorna em vendas fechadas.',
      },
    ],
    faq: [
      {
        question: 'Funciona com todos os portais do mercado?',
        answer:
          'Sim. Integramos com Webmotors, iCarros, OLX, Mercado Livre, Kavak e outros portais que oferecem API ou webhook para distribuição de leads.',
      },
      {
        question: 'O sistema sabe de qual portal o lead veio?',
        answer:
          'Sim. Cada lead é rastreado por fonte, permitindo análise de ROI por portal e otimização do investimento em mídia.',
      },
    ],
    ctaText: 'Unificar leads de portais',
  },
  {
    slug: 'google-ads-meta-ads-automotivo',
    title: 'Google Ads e Meta Ads para Concessionárias',
    metaTitle: 'Google Ads + Meta Ads com IA para Concessionárias | Dexi Digital',
    metaDescription:
      'Maximize ROI de Google Ads e Meta Ads para concessionárias com IA. Leads de mídia paga respondidos em segundos e qualificados automaticamente.',
    keywords: [
      'Google Ads concessionária',
      'Meta Ads concessionária',
      'mídia paga automotivo',
      'leads Google Ads carros',
      'Facebook Ads concessionária',
    ],
    answerSnippet:
      'A integração do Fykos com Google Ads e Meta Ads garante que cada lead de mídia paga seja respondido em segundos e qualificado automaticamente. O resultado: o investimento em mídia converte mais porque nenhum lead é desperdiçado por demora ou falta de follow-up.',
    sections: [
      {
        heading: 'O desperdício invisível',
        content:
          'Concessionárias investem R$ 20-100 mil/mês em Google e Meta Ads. Mas 40% dos leads gerados nunca recebem follow-up adequado. É como jogar dinheiro no lixo com métrica bonita no dashboard de marketing.',
      },
      {
        heading: 'Do clique à resposta em segundos',
        content:
          'Com o Fykos, o lead que preenche um formulário de Google Ads recebe resposta via WhatsApp em menos de 30 segundos. O lead de Meta Ads que clica em um anúncio é abordado imediatamente com informação relevante sobre o veículo anunciado.',
      },
      {
        heading: 'Feedback loop para otimização',
        content:
          'O sistema envia dados de qualidade de lead e conversão de volta para as plataformas de mídia. Resultado: o algoritmo do Google e da Meta aprende quais leads convertem e otimiza a campanha automaticamente.',
      },
      {
        heading: 'Atribuição completa',
        content:
          'Do primeiro clique no anúncio até a assinatura do contrato: o Fykos rastreia toda a jornada. A concessionária sabe exatamente qual campanha, qual criativo e qual público gerou cada venda.',
      },
    ],
    faq: [
      {
        question: 'O Fykos gerencia as campanhas de mídia?',
        answer:
          'Não. O Fykos se integra com as plataformas de mídia para otimizar a conversão dos leads gerados. A gestão de campanhas continua com a agência ou equipe interna.',
      },
      {
        question: 'Consigo ver o custo por venda (não só custo por lead)?',
        answer:
          'Sim. O sistema rastreia do clique à venda fechada, permitindo calcular o custo real por veículo vendido — não apenas o custo por lead.',
      },
    ],
    ctaText: 'Otimizar ROI da minha mídia paga',
  },
];
