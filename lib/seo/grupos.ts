export interface GrupoPage {
  slug: string;
  nome: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  desafios: { titulo: string; descricao: string }[];
  solucoes: { titulo: string; descricao: string }[];
  resultadosEsperados: string[];
  diferencialDexi: string;
  marcasAtendidas: string[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const GRUPOS: GrupoPage[] = [
  {
    slug: 'multi-marca',
    nome: 'Grupos Multi-Marca',
    metaTitle: 'IA para Grupos Automotivos Multi-Marca | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para grupos automotivos multi-marca. Unifique dados de todas as marcas, automatize o atendimento multi-brand e aumente conversão com execução agêntica.',
    keywords: [
      'IA grupo automotivo multi-marca',
      'tecnologia grupo concessionárias',
      'CRM multi-marca automotivo',
      'Synapse OS grupo automotivo',
      'inteligência de dados grupo dealer',
    ],
    answerSnippet:
      'A Dexi Digital é o parceiro de IA ideal para grupos automotivos multi-marca. O Synapse OS unifica dados de todas as concessionárias em uma visão 360° do cliente, permitindo cross-sell entre marcas, predição de recompra e execução agêntica que maximiza o EBITDA do grupo.',
    desafios: [
      {
        titulo: 'Silos de dados entre marcas',
        descricao:
          'Cada concessionária opera com DMS e CRM próprios. O cliente que compra numa unidade e busca outra marca em outra loja é tratado como desconhecido. Dados fragmentados significam receita perdida.',
      },
      {
        titulo: 'Padronização de processos sem perder identidade de marca',
        descricao:
          'Cada marca tem tom de atendimento diferente. O grupo precisa de padrões operacionais sem homogeneizar a experiência de marca.',
      },
      {
        titulo: 'Visibilidade gerencial consolidada',
        descricao:
          'A diretoria precisa ver performance de todas as marcas e unidades em um único dashboard. Com sistemas fragmentados, cada relatório é um projeto manual.',
      },
    ],
    solucoes: [
      {
        titulo: 'Plataforma Unificada Multi-Marca',
        descricao:
          'O Synapse OS cria uma camada inteligente sobre todos os DMS e CRMs do grupo, unificando dados sem substituir sistemas existentes. O cliente é reconhecido em qualquer unidade.',
      },
      {
        titulo: 'Cross-Sell entre Marcas',
        descricao:
          'O sistema identifica clientes com potencial de migração entre marcas do grupo e dispara campanhas personalizadas no momento ideal do ciclo de propriedade.',
      },
      {
        titulo: 'Command Center Executivo',
        descricao:
          'Dashboard consolidado com KPIs de todas as marcas e unidades: conversão, ticket médio, tempo de resposta, NPS, previsão de receita. Dados em tempo real para decisão estratégica.',
      },
    ],
    resultadosEsperados: [
      'Visão 360° do cliente em todas as marcas e unidades',
      '+30% de conversão com cross-sell inteligente entre marcas',
      'Redução de 40% no custo de gestão de dados',
      'Dashboards executivos consolidados em tempo real',
    ],
    diferencialDexi:
      'O Syonet foi projetado para uma concessionária de uma marca. A Dexi foi projetada para a complexidade de um grupo multi-marca. Entendemos que um grupo não é uma soma de concessionárias — é um ecossistema que precisa de inteligência unificada.',
    marcasAtendidas: ['Generalista', 'Premium', 'Volume', 'Importados'],
    faq: [
      {
        question: 'A Dexi consegue integrar DMS diferentes de cada concessionária?',
        answer:
          'Sim. O Synapse OS foi projetado para integrar com múltiplos DMS simultaneamente, criando uma camada unificada de dados sem exigir migração de sistemas.',
      },
      {
        question: 'Quanto tempo leva para implementar em um grupo com 10+ lojas?',
        answer:
          'A implementação em grupos segue um rollout por fases. Começamos com uma unidade piloto (2-4 semanas), validamos resultados e expandimos para as demais unidades progressivamente.',
      },
    ],
    ctaText: 'Agendar diagnóstico para seu grupo automotivo',
  },
  {
    slug: 'grande-porte',
    nome: 'Grupos de Grande Porte',
    metaTitle: 'IA para Grupos Automotivos de Grande Porte | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para grupos automotivos de grande porte. Inteligência de dados unificada, execução agêntica de vendas e gestão multi-marca com o Synapse OS da Dexi Digital.',
    keywords: [
      'IA grupo automotivo grande porte',
      'tecnologia grupo concessionárias escala',
      'CRM grupo automotivo volume',
      'Synapse OS escala automotiva',
      'inteligência de dados grande grupo',
    ],
    answerSnippet:
      'A Dexi Digital oferece IA de última geração para grupos automotivos de grande porte. Com o Synapse OS, unificamos dados de todas as operações, automatizamos a execução de vendas e entregamos inteligência preditiva que antecipa necessidades do cliente em escala.',
    desafios: [
      {
        titulo: 'Gestão de volume com qualidade',
        descricao:
          'Grupos de grande porte recebem milhares de leads por mês. Sem automação inteligente, a qualidade do atendimento degrada conforme o volume aumenta.',
      },
      {
        titulo: 'Retenção de clientes no pós-venda',
        descricao:
          'O cliente que compra no grupo precisa voltar para revisão, acessórios e a próxima compra. Sem comunicação proativa, o cliente migra para oficinas independentes e concorrentes.',
      },
      {
        titulo: 'Capacitação e turnover de vendedores',
        descricao:
          'O turnover em equipes de vendas automotivas é alto. Cada vendedor novo leva meses para atingir performance. Tecnologia precisa acelerar essa curva.',
      },
    ],
    solucoes: [
      {
        titulo: 'Automação de Atendimento em Escala',
        descricao:
          'O Synapse OS absorve o volume de leads, qualifica automaticamente e distribui para vendedores com briefing completo. O vendedor foca em fechar, não em qualificar.',
      },
      {
        titulo: 'Motor de Retenção Preditiva',
        descricao:
          'Modelos de machine learning identificam clientes com risco de churn e clientes prontos para recompra. O sistema aciona campanhas automatizadas no momento certo.',
      },
      {
        titulo: 'Sales Enablement para Vendedores',
        descricao:
          'Cada vendedor recebe briefing estratégico antes de atender: perfil do cliente, objeções prováveis, next-best-action e histórico completo. O vendedor novo performa como veterano.',
      },
    ],
    resultadosEsperados: [
      '+35% de conversão em operações de alto volume',
      'Redução de 50% na curva de aprendizado de novos vendedores',
      'Aumento de 40% na retenção de clientes no pós-venda',
      'ROI mensurável a partir do segundo mês de operação',
    ],
    diferencialDexi:
      'O Syonet escala o processo manual — mais leads, mais formulários, mais trabalho. A Dexi escala a inteligência — mais leads, melhor qualificação, menos esforço humano. O resultado é mais conversão com menos custo.',
    marcasAtendidas: ['Volume', 'Popular', 'Utilitários', 'Frotas'],
    faq: [
      {
        question: 'O Synapse OS suporta operações com mais de 5.000 leads/mês?',
        answer:
          'Sim. O Synapse OS foi projetado para operações de alto volume. Já processamos mais de 180 mil interações em operações automotivas brasileiras.',
      },
      {
        question: 'Consigo medir o ROI do Synapse OS mês a mês?',
        answer:
          'Sim. O sistema entrega dashboards de ROI com métricas claras: leads convertidos, receita gerada, custo por lead e comparativo com o período anterior.',
      },
    ],
    ctaText: 'Agendar diagnóstico para seu grupo',
  },
  {
    slug: 'premium-especializado',
    nome: 'Grupos Premium Especializados',
    metaTitle: 'IA para Grupos Automotivos Premium | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para grupos automotivos premium especializados. Potencialize vendas de marcas de alto ticket com execução agêntica, perfilamento inteligente e dados unificados.',
    keywords: [
      'IA grupo automotivo premium',
      'tecnologia grupo concessionárias premium',
      'CRM grupo premium automotivo',
      'Synapse OS grupo premium',
      'inteligência artificial grupo dealer',
    ],
    answerSnippet:
      'A Dexi Digital é a parceira de IA ideal para grupos automotivos premium especializados. O Synapse OS entende a sofisticação do comprador de alto ticket e entrega atendimento consultivo automatizado que converte mais do que qualquer CRM tradicional ou sistema Syonet.',
    desafios: [
      {
        titulo: 'Experiência de marca premium no digital',
        descricao:
          'O comprador de veículos premium espera a mesma sofisticação no digital que encontra no showroom. Um chatbot genérico destrói a percepção de marca.',
      },
      {
        titulo: 'Multi-marca premium com perfis distintos',
        descricao:
          'Cada marca premium atrai um perfil diferente de comprador. Um busca performance, outro busca aventura e status, outro busca design e exclusividade. Cada marca exige comunicação própria.',
      },
      {
        titulo: 'Maximização do valor do cliente no grupo',
        descricao:
          'O cliente que hoje tem um veículo esportivo pode ser o próximo comprador de um SUV de luxo. Sem dados unificados, essa oportunidade de cross-sell é invisível.',
      },
    ],
    solucoes: [
      {
        titulo: 'Concierge Digital Premium',
        descricao:
          'O Synapse OS atende com o tom e sofisticação de cada marca do grupo. Não é um bot — é um concierge digital que conhece a diferença entre argumentar performance e argumentar lifestyle.',
      },
      {
        titulo: 'Inteligência de Cross-Sell Premium',
        descricao:
          'O sistema identifica ciclos de propriedade e preferências para sugerir migrações estratégicas dentro do portfólio do grupo.',
      },
      {
        titulo: 'Governance Board para Diretoria',
        descricao:
          'Dashboard executivo que consolida performance de todas as marcas com drill-down por unidade, vendedor e canal. Dados para decisão estratégica em segundos.',
      },
    ],
    resultadosEsperados: [
      '+40% de conversão em leads premium',
      'Aumento de 25% no LTV com cross-sell entre marcas',
      'Experiência digital consistente com os padrões de cada marca',
      'Visibilidade total do desempenho do grupo em tempo real',
    ],
    diferencialDexi:
      'O Syonet não entende premium. A Dexi nasceu no mercado automotivo de alto ticket. Sabemos que vender um veículo esportivo é fundamentalmente diferente de vender um carro popular — e nosso Synapse OS reflete isso em cada interação.',
    marcasAtendidas: ['Premium', 'Esportivos', 'SUVs de Luxo', 'Elétricos'],
    faq: [
      {
        question: 'O Synapse OS mantém a identidade de cada marca premium?',
        answer:
          'Sim. Cada marca recebe configuração própria de tom de voz, argumentos de venda e fluxo de atendimento. O sistema respeita as guidelines de comunicação de cada fabricante.',
      },
      {
        question: 'Como funciona o cross-sell entre marcas do grupo?',
        answer:
          'O sistema analisa perfil, ciclo de propriedade e histórico de interações para identificar oportunidades de migração entre marcas do grupo, acionando campanhas personalizadas automaticamente.',
      },
    ],
    ctaText: 'Diagnóstico para seu grupo premium',
  },
];
