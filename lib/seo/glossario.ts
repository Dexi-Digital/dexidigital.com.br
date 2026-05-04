export interface GlossarioTerm {
  slug: string;
  title: string;
  category: 'vendas' | 'tecnologia' | 'dados' | 'operacoes';
  metaTitle: string;
  metaDescription: string;
  answerSnippet: string;
  longDescription: string;
  faq: { question: string; answer: string }[];
  relatedTerms: string[];
}

export const GLOSSARIO_CATEGORIES: Record<
  GlossarioTerm['category'],
  { label: string; description: string }
> = {
  vendas: {
    label: 'Vendas & Conversão',
    description: 'Conceitos de vendas aplicados ao mercado automotivo com IA.',
  },
  tecnologia: {
    label: 'Tecnologia & IA',
    description: 'Termos técnicos de inteligência artificial aplicada ao automotivo.',
  },
  dados: {
    label: 'Dados & Analytics',
    description: 'Conceitos de dados e análise para concessionárias.',
  },
  operacoes: {
    label: 'Operações & Processos',
    description: 'Processos operacionais de concessionárias modernizados com tecnologia.',
  },
};

export const GLOSSARIO_TERMS: GlossarioTerm[] = [
  {
    slug: 'execucao-agêntica',
    title: 'Execução Agêntica',
    category: 'tecnologia',
    metaTitle: 'O que é Execução Agêntica | Glossário IA Automotiva | Dexi Digital',
    metaDescription:
      'Execução Agêntica é a capacidade de um sistema de IA agir autonomamente sobre leads e processos de venda, sem depender de ação humana em cada etapa.',
    answerSnippet:
      'Execução Agêntica é a capacidade de um sistema de IA agir autonomamente sobre processos de negócio — qualificar leads, responder clientes, executar follow-up e tomar decisões operacionais — sem depender de intervenção humana em cada etapa. No automotivo, significa que o lead recebe resposta instantânea e o vendedor recebe um briefing pronto para fechar.',
    longDescription: `## O que é Execução Agêntica no Automotivo

Execução Agêntica é o paradigma que substitui a automação de notificações pelo agir autônomo. Enquanto um CRM tradicional envia um alerta ("novo lead recebido"), um sistema agêntico executa a ação completa: responde o lead, qualifica a intenção, identifica o modelo de interesse e prepara um briefing estratégico para o vendedor.

## Como funciona na prática

O Synapse OS da Dexi Digital implementa execução agêntica em três camadas:

- **Camada de Resposta**: IA que responde leads em menos de 30 segundos via WhatsApp com informação personalizada sobre o veículo de interesse.
- **Camada de Qualificação**: Análise de linguagem e comportamento para classificar o lead por temperatura, intenção e potencial de ticket.
- **Camada de Briefing**: Entrega ao vendedor um perfil completo do lead com objeções antecipadas e next-best-action sugerida.

## Por que importa para concessionárias

A concessionária média perde 40% dos leads por tempo de resposta inadequado. Com execução agêntica, cada lead recebe atendimento imediato e qualificado — 24/7, sem depender de disponibilidade humana.`,
    faq: [
      {
        question: 'Execução agêntica substitui vendedores?',
        answer:
          'Não. A execução agêntica elimina trabalho operacional (qualificar, responder, agendar). O vendedor foca em construir relacionamento e fechar a venda.',
      },
      {
        question: 'Qual a diferença entre automação e execução agêntica?',
        answer:
          'Automação executa regras fixas (se lead chega, envia email). Execução agêntica analisa contexto, toma decisão e age de forma adaptativa.',
      },
    ],
    relatedTerms: ['synapse-os', 'perfilamento-inteligente', 'lead-scoring-automotivo'],
  },
  {
    slug: 'synapse-os',
    title: 'Synapse OS',
    category: 'tecnologia',
    metaTitle: 'O que é Synapse OS | Plataforma IA Automotiva | Dexi Digital',
    metaDescription:
      'Synapse OS é a plataforma de execução agêntica da Dexi Digital para o setor automotivo. Atendimento inteligente, qualificação automática e vendas aceleradas.',
    answerSnippet:
      'Synapse OS é a plataforma de execução agêntica desenvolvida pela Dexi Digital para o setor automotivo brasileiro. Combina IA conversacional, perfilamento comportamental e integração com sistemas da concessionária para transformar leads em vendas com velocidade e precisão superiores a qualquer CRM tradicional.',
    longDescription: `## Synapse OS: A Plataforma

O Synapse OS é o produto central da Dexi Digital. Projetado especificamente para o mercado automotivo brasileiro, é uma plataforma de Sistemas Multi-Agentes (MAS) que orquestra todo o ciclo de venda: do primeiro contato do lead à entrega do veículo.

## Diferenciais técnicos

- **Multi-Agentes (MAS)**: Múltiplos agentes especializados trabalhando em conjunto — um para qualificação, outro para follow-up, outro para análise de perfil.
- **Perfilamento Neurolinguístico**: IA que analisa a linguagem do lead para identificar perfil psicológico (performance vs. segurança) e ajustar argumentos.
- **Integração Universal**: Conecta com qualquer DMS, CRM ou plataforma de comunicação via API aberta.
- **Dashboards Executivos**: Visualização em tempo real de métricas de vendas, conversão e performance da equipe.

## Resultados comprovados

Em operações brasileiras, o Synapse OS entrega: +45% de conversão de leads, redução de 60% no tempo de resposta e aumento de 30% no ticket médio.`,
    faq: [
      {
        question: 'O Synapse OS é um chatbot?',
        answer:
          'Não. Um chatbot segue scripts. O Synapse OS é uma plataforma de execução agêntica com múltiplos agentes especializados que analisam contexto, tomam decisões e agem autonomamente.',
      },
      {
        question: 'O Synapse OS funciona para qualquer marca de veículo?',
        answer:
          'Sim. O sistema é configurável para qualquer marca e segmento automotivo, desde veículos populares até supercarros.',
      },
    ],
    relatedTerms: ['execucao-agêntica', 'perfilamento-inteligente', 'crm-unificado-grupo-automotivo'],
  },
  {
    slug: 'perfilamento-inteligente',
    title: 'Perfilamento Inteligente de Leads',
    category: 'vendas',
    metaTitle: 'Perfilamento Inteligente de Leads | IA Automotiva | Dexi Digital',
    metaDescription:
      'Perfilamento inteligente usa IA para classificar leads automotivos por perfil psicológico, intenção de compra e potencial de ticket. Dexi Digital.',
    answerSnippet:
      'Perfilamento inteligente é a capacidade de classificar leads automotivos automaticamente por perfil psicológico (performance vs. segurança), intenção de compra (compra imediata vs. pesquisa), potencial de ticket e canal preferido de comunicação — tudo sem intervenção humana.',
    longDescription: `## O que é Perfilamento Inteligente

O perfilamento inteligente vai além da classificação básica (nome, telefone, veículo de interesse) dos CRMs tradicionais. Utiliza IA para analisar a linguagem do lead, seu comportamento de navegação e padrões de interação para criar um perfil multidimensional.

## Dimensões do perfil

- **Motivação**: O que move a decisão — performance, segurança, status, economia ou sustentabilidade.
- **Urgência**: Compra imediata, pesquisa ativa, planejamento futuro.
- **Ticket**: Entry-level, mid-range, premium, superpremium.
- **Canal**: WhatsApp, e-mail, presencial, telefone.

## Impacto na venda

O vendedor que recebe um lead com perfil completo converte 40% a mais do que o vendedor que recebe apenas "nome + telefone + veículo". O briefing elimina achismos e acelera o rapport.`,
    faq: [
      {
        question: 'Como a IA perfila um lead automaticamente?',
        answer:
          'A IA analisa a linguagem usada nas mensagens (palavras, tom, perguntas), o comportamento de navegação no site (quais modelos visualizou, quanto tempo ficou) e o histórico de interações anteriores.',
      },
    ],
    relatedTerms: ['execucao-agêntica', 'lead-scoring-automotivo', 'synapse-os'],
  },
  {
    slug: 'lead-scoring-automotivo',
    title: 'Lead Scoring Automotivo',
    category: 'vendas',
    metaTitle: 'Lead Scoring para Concessionárias | IA Automotiva | Dexi Digital',
    metaDescription:
      'Lead scoring automotivo com IA: como priorizar leads de concessionária por potencial de conversão, ticket e urgência. Dexi Digital.',
    answerSnippet:
      'Lead scoring automotivo é o processo de atribuir pontuação automática a cada lead de concessionária baseado em potencial de conversão, ticket estimado e urgência da compra. Com IA, essa pontuação é dinâmica — atualiza em tempo real conforme o lead interage com a concessionária.',
    longDescription: `## Lead Scoring no Automotivo

Lead scoring é a prática de atribuir uma pontuação a cada lead para priorizar o atendimento. No automotivo, isso é especialmente importante porque o custo de oportunidade de um lead premium não atendido é altíssimo.

## Critérios de scoring

- **Engajamento**: Quantas interações o lead teve, em quais canais e com qual frequência.
- **Intenção declarada**: Pediu test drive? Perguntou sobre financiamento? Esses são sinais fortes.
- **Perfil demográfico**: Região, histórico de compras (se disponível), canal de origem.
- **Comportamento digital**: Modelos visualizados no site, tempo de permanência, páginas visitadas.

## Scoring estático vs. dinâmico

O scoring estático do CRM tradicional atribui pontos fixos (preencheu formulário = 10 pontos). O scoring dinâmico do Synapse OS atualiza a pontuação em tempo real: o lead que respondeu a mensagem em 2 minutos recebe mais pontos que o que demorou 2 dias.`,
    faq: [
      {
        question: 'Como o lead scoring ajuda o vendedor?',
        answer:
          'O vendedor sabe quem atender primeiro: leads com score alto têm maior chance de conversão e devem receber prioridade. Isso elimina o achismo e otimiza o tempo da equipe.',
      },
    ],
    relatedTerms: ['perfilamento-inteligente', 'execucao-agêntica', 'synapse-os'],
  },
  {
    slug: 'dms-automotivo',
    title: 'DMS (Dealer Management System)',
    category: 'operacoes',
    metaTitle: 'O que é DMS Automotivo | Sistema de Gestão | Dexi Digital',
    metaDescription:
      'DMS (Dealer Management System) é o sistema de gestão central da concessionária. Entenda como a IA se integra ao DMS para potencializar operações.',
    answerSnippet:
      'DMS (Dealer Management System) é o sistema de gestão central de uma concessionária, responsável por controlar estoque, vendas, financeiro, oficina e peças. A integração do DMS com IA (como o Synapse OS) permite transformar dados operacionais em inteligência acionável para vendas e pós-venda.',
    longDescription: `## O que é DMS

O Dealer Management System é o coração operacional da concessionária. Controla desde o estoque de veículos até a agenda da oficina, passando por financeiro, F&I (Finance & Insurance) e gestão de peças.

## DMS no Brasil

Os principais DMS do mercado brasileiro incluem sistemas proprietários de montadoras e soluções de terceiros. A maioria opera como sistemas fechados com integração limitada.

## DMS + IA: a evolução

A integração do DMS com plataformas de IA como o Synapse OS cria uma camada inteligente sobre os dados operacionais. O resultado: o vendedor sabe se o veículo está disponível, qual o histórico de manutenção e quando o cliente está pronto para recompra — tudo em uma tela.`,
    faq: [
      {
        question: 'O Synapse OS substitui o DMS?',
        answer:
          'Não. O Synapse OS complementa o DMS, adicionando inteligência e automação sobre os dados que o DMS já gerencia.',
      },
    ],
    relatedTerms: ['synapse-os', 'crm-unificado-grupo-automotivo', 'execucao-agêntica'],
  },
  {
    slug: 'shadow-crm',
    title: 'Shadow CRM',
    category: 'dados',
    metaTitle: 'O que é Shadow CRM | Dados Unificados | Dexi Digital',
    metaDescription:
      'Shadow CRM é a camada de dados unificados que a Dexi Digital cria sobre os sistemas existentes da concessionária, sem substituir nenhum deles.',
    answerSnippet:
      'Shadow CRM é a arquitetura de dados proprietária da Dexi Digital que cria uma camada unificada sobre todos os sistemas da concessionária (DMS, CRM, oficina, F&I) sem substituir nenhum deles. O resultado é visão 360° do cliente com dados de todos os pontos de contato.',
    longDescription: `## Shadow CRM: Dados sem Migração

O Shadow CRM resolve o maior problema de grupos automotivos: dados fragmentados em múltiplos sistemas que não conversam. Em vez de exigir migração (cara, demorada, arriscada), o Shadow CRM espelha e unifica dados em tempo real.

## Como funciona

- **Conectores**: APIs que se conectam a cada sistema existente (DMS, CRM, oficina).
- **Normalização**: Dados de fontes diferentes são padronizados em um formato único.
- **Unificação**: O cliente que aparece no DMS como "João Silva" e no WhatsApp como "João" é reconhecido como a mesma pessoa.
- **Enriquecimento**: Dados de interações digitais (site, WhatsApp, email) enriquecem o perfil do CRM.

## Benefícios

- Implementação em semanas, não meses.
- Zero risco de perda de dados.
- Os sistemas existentes continuam funcionando normalmente.
- A equipe não precisa aprender um sistema novo.`,
    faq: [
      {
        question: 'O Shadow CRM duplica dados?',
        answer:
          'O Shadow CRM cria uma visão unificada referenciando dados dos sistemas originais. Os dados permanecem nos sistemas fonte e são espelhados de forma sincronizada.',
      },
    ],
    relatedTerms: ['dms-automotivo', 'synapse-os', 'execucao-agêntica'],
  },
];

export function findGlossarioTerm(slug: string) {
  return GLOSSARIO_TERMS.find((t) => t.slug === slug);
}
