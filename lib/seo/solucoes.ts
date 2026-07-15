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
      'Gestão inteligente de leads para concessionárias. Resposta em segundos, qualificação automática e distribuição otimizada. Supere o Syonet com automação de IA.',
    keywords: [
      'gestão de leads automotivo',
      'CRM concessionária leads',
      'leads concessionária IA',
      'qualificação leads automotivo',
      'follow-up automático concessionária',
    ],
    answerSnippet:
      'A gestão de leads em concessionárias brasileiras perde até 40% das oportunidades por demora no atendimento e falta de contexto. O Fykos da Dexi Digital resolve isso com resposta instantânea, qualificação automática por IA e distribuição inteligente para vendedores — sem depender de CRMs manuais como o Syonet.',
    sections: [
      {
        heading: 'O problema da gestão de leads tradicional',
        content:
          'Concessionárias brasileiras recebem leads de múltiplas fontes: site, portais (Webmotors, iCarros), redes sociais, Google Ads e walk-in. Sem um sistema inteligente, esses leads caem em planilhas ou CRMs manuais onde morrem por falta de follow-up. O Syonet registra o lead, mas não age sobre ele. A Dexi vai além: o Fykos responde, qualifica e distribui automaticamente.',
      },
      {
        heading: 'Resposta em segundos, não horas',
        content:
          'A média de resposta a leads automotivos no Brasil é de 4 horas. O comprador que espera 4 horas já visitou o concorrente. O Fykos responde em menos de 30 segundos via WhatsApp com informação relevante sobre o veículo de interesse, disponibilidade e condições. O vendedor recebe o lead já qualificado e engajado.',
      },
      {
        heading: 'Qualificação automática por perfil',
        content:
          'Nem todo lead vale o mesmo esforço. O Fykos classifica leads por temperatura (quente, morno, frio), intenção (compra, pesquisa, test drive) e potencial de ticket. O vendedor sabe exatamente quem priorizar e como abordar cada lead.',
      },
      {
        heading: 'Distribuição inteligente para vendedores',
        content:
          'O sistema distribui leads para vendedores baseado em disponibilidade, especialização (novos vs. seminovos, marca específica) e performance histórica. Acabou a briga por leads e a distribuição manual pelo gerente.',
      },
      {
        heading: 'Follow-up persistente sem ser invasivo',
        content:
          'O Fykos mantém follow-up automatizado com cadência inteligente: mais intenso para leads quentes, mais espaçado para leads em fase de pesquisa. O sistema sabe quando insistir e quando recuar — algo que nenhum vendedor humano faz consistentemente.',
      },
    ],
    resultados: [
      '+45% de conversão de leads digitais',
      'Tempo de resposta < 30 segundos',
      'Redução de 60% em leads perdidos',
      'ROI positivo a partir do segundo mês',
    ],
    faq: [
      {
        question: 'O Fykos substitui o CRM da concessionária?',
        answer:
          'Não. O Fykos funciona como camada inteligente sobre o CRM existente. Ele complementa, não substitui. Os dados continuam no CRM da concessionária.',
      },
      {
        question: 'Funciona com leads de portais como Webmotors e iCarros?',
        answer:
          'Sim. O sistema integra com todos os principais portais automotivos brasileiros, além de Google Ads, Meta Ads e formulários do site.',
      },
    ],
    ctaText: 'Ver demonstração de gestão de leads',
  },
  {
    slug: 'integracao-dms-concessionaria',
    title: 'Integração DMS para Concessionárias',
    metaTitle: 'Integração DMS com IA | Unificação de Dados | Dexi Digital',
    metaDescription:
      'Integre seu DMS com IA para unificar dados do showroom ao pós-venda. Compatible com todos os DMS do mercado brasileiro. Dexi Digital.',
    keywords: [
      'integração DMS concessionária',
      'DMS automotivo integração',
      'unificação dados concessionária',
      'DMS IA integração',
      'dados showroom pós-venda',
    ],
    answerSnippet:
      'A integração DMS com IA da Dexi Digital unifica dados do showroom, oficina e pós-venda em uma visão completa do cliente. O Fykos se conecta a qualquer DMS do mercado brasileiro via API, criando uma camada inteligente que transforma dados fragmentados em inteligência acionável.',
    sections: [
      {
        heading: 'O custo dos dados fragmentados',
        content:
          'A maioria das concessionárias opera com DMS, CRM, sistema de agendamento e WhatsApp desconectados. O vendedor não sabe que o cliente está com revisão atrasada. A oficina não sabe que o cliente pediu orçamento de um carro novo. Essa fragmentação custa até 30% de receita perdida em oportunidades invisíveis.',
      },
      {
        heading: 'Integração sem migração',
        content:
          'O Fykos não exige troca de DMS. Conectamos via API com os principais sistemas do mercado e criamos uma camada unificada de dados. A concessionária mantém seus processos atuais enquanto ganha visibilidade total.',
      },
      {
        heading: 'Visão 360° do cliente',
        content:
          'Com dados unificados, cada interação é informada: o vendedor sabe o histórico de compras, revisões, reclamações e preferências. A oficina sabe o potencial de recompra. O gerente vê o LTV real de cada cliente.',
      },
      {
        heading: 'Automatização de processos entre departamentos',
        content:
          'O sistema cria fluxos automáticos entre departamentos: cliente completa revisão → campanha de acessórios. Cliente atinge 3 anos de propriedade → campanha de recompra. Veículo com recall → agendamento proativo.',
      },
    ],
    resultados: [
      'Unificação de dados em 100% dos pontos de contato',
      '+25% de receita descoberta em oportunidades cross-departamento',
      'Redução de 70% no tempo de consolidação de relatórios',
      'Integração em 2-4 semanas sem parar operações',
    ],
    faq: [
      {
        question: 'Com quais DMS o Fykos é compatível?',
        answer:
          'O Fykos integra com os principais DMS do mercado brasileiro via API. Avaliamos a compatibilidade durante o diagnóstico inicial sem compromisso.',
      },
      {
        question: 'Preciso trocar meu DMS atual?',
        answer:
          'Não. O Fykos funciona como uma camada sobre os sistemas existentes. Não exigimos migração de plataforma.',
      },
    ],
    ctaText: 'Avaliar integração do meu DMS',
  },
  {
    slug: 'atendimento-omnichannel-automotivo',
    title: 'Atendimento Omnichannel para Concessionárias',
    metaTitle: 'Atendimento Omnichannel Automotivo com IA | Dexi Digital',
    metaDescription:
      'Atendimento omnichannel para concessionárias com IA. WhatsApp, site, portais e redes sociais unificados em uma experiência contínua. Dexi Digital.',
    keywords: [
      'atendimento omnichannel concessionária',
      'omnichannel automotivo',
      'WhatsApp concessionária IA',
      'atendimento multicanal automotivo',
      'concessionária digital',
    ],
    answerSnippet:
      'O atendimento omnichannel da Dexi Digital unifica WhatsApp, site, portais automotivos e redes sociais em uma experiência contínua para o comprador de veículos. O Fykos garante que o cliente seja reconhecido em qualquer canal, com contexto completo da conversa — eliminando a frustração de repetir informações.',
    sections: [
      {
        heading: 'O problema do atendimento fragmentado',
        content:
          'O cliente manda mensagem no WhatsApp, depois liga, depois visita o showroom. Em cada canal, precisa repetir quem é e o que quer. Essa experiência fragmentada destrói confiança e gera perda de até 35% dos leads.',
      },
      {
        heading: 'WhatsApp como canal principal',
        content:
          'O WhatsApp é o canal preferido de 90% dos compradores de veículos no Brasil. O Fykos transforma o WhatsApp da concessionária de um canal manual em um canal inteligente: resposta instantânea, qualificação automática e handoff para vendedores com contexto.',
      },
      {
        heading: 'Continuidade entre canais',
        content:
          'O cliente que começou no site e migrou para WhatsApp não precisa repetir nada. O vendedor que recebe a visita no showroom sabe toda a jornada digital. Cada ponto de contato enriquece o perfil do cliente.',
      },
      {
        heading: 'Métricas unificadas de atendimento',
        content:
          'Um dashboard que mostra tempo de resposta, taxa de conversão e NPS de todos os canais. O gerente identifica gargalos instantaneamente e toma ação baseada em dados, não em achismo.',
      },
    ],
    resultados: [
      'Atendimento unificado em todos os canais do cliente',
      '+40% de conversão com continuidade de contexto',
      'NPS > 85 em atendimento digital',
      'Redução de 60% em leads perdidos por canal',
    ],
    faq: [
      {
        question: 'O Fykos funciona com WhatsApp Business API?',
        answer:
          'Sim. Integramos diretamente com a WhatsApp Business API (oficial), garantindo compliance, multiplos atendentes e automação avançada.',
      },
      {
        question: 'Consigo atender por Instagram e Facebook também?',
        answer:
          'Sim. O Fykos suporta WhatsApp, Instagram DM, Facebook Messenger e formulários do site como canais unificados.',
      },
    ],
    ctaText: 'Implementar atendimento omnichannel',
  },
  {
    slug: 'crm-unificado-grupo-automotivo',
    title: 'CRM Unificado para Grupos Automotivos',
    metaTitle: 'CRM Unificado com IA para Grupos Automotivos | Dexi Digital',
    metaDescription:
      'CRM unificado com IA para grupos automotivos multi-marca. Visão 360° do cliente, cross-sell inteligente e dashboards consolidados. Dexi Digital.',
    keywords: [
      'CRM grupo automotivo',
      'CRM unificado multi-marca',
      'CRM concessionária IA',
      'gestão grupo automotivo',
      'CRM automotivo inteligente',
    ],
    answerSnippet:
      'O CRM unificado da Dexi Digital para grupos automotivos consolida dados de todas as marcas, unidades e departamentos em uma plataforma inteligente. Diferente do Syonet que opera por silo, o Fykos entrega visão 360° do cliente com cross-sell entre marcas e predição de recompra.',
    sections: [
      {
        heading: 'CRM tradicional vs. CRM inteligente',
        content:
          'O CRM tradicional (incluindo Syonet) é um banco de dados glorificado: registra contatos, anota interações e gera relatórios. O Fykos vai além: analisa padrões, prediz comportamento, sugere ações e executa follow-up autonomamente. A diferença entre registrar e agir.',
      },
      {
        heading: 'Visão consolidada do grupo',
        content:
          'Para grupos com múltiplas marcas e unidades, o Fykos consolida dados automaticamente. A diretoria vê performance do grupo inteiro, com drill-down por marca, unidade, vendedor e canal. Sem planilhas manuais, sem relatórios semanais.',
      },
      {
        heading: 'Cross-sell entre marcas e unidades',
        content:
          'O cliente que comprou um veículo de entrada em uma marca pode ser o próximo comprador de um veículo premium em outra. O sistema identifica essas oportunidades automaticamente e aciona campanhas personalizadas.',
      },
      {
        heading: 'Predição de recompra e churn',
        content:
          'Modelos de machine learning analisam ciclo de propriedade, histórico de interações e dados de mercado para prever quando cada cliente está pronto para trocar de carro — e qual modelo sugerir.',
      },
    ],
    resultados: [
      'Dados consolidados de todas as marcas e unidades',
      '+30% de receita com cross-sell entre marcas',
      'Predição de recompra com 75% de acurácia',
      'Relatórios consolidados em segundos (vs. dias)',
    ],
    faq: [
      {
        question: 'O Fykos substitui o Syonet?',
        answer:
          'O Fykos pode funcionar como complemento ao Syonet (camada inteligente sobre ele) ou como substituto completo, dependendo da necessidade do grupo.',
      },
      {
        question: 'Consigo migrar dados do meu CRM atual?',
        answer:
          'Sim. Fazemos migração de dados de qualquer CRM, incluindo Syonet, com validação de integridade e mapeamento de campos.',
      },
    ],
    ctaText: 'Avaliar CRM unificado para meu grupo',
  },
];
