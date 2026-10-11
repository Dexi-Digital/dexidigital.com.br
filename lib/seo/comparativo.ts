export interface ComparativoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  sections: { heading: string; content: string }[];
  tabelaComparativa: { criterio: string; dexi: string; concorrente: string }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const COMPARATIVOS: ComparativoPage[] = [
  {
    slug: 'dexi-vs-syonet',
    title: 'Dexi Digital vs Syonet',
    metaTitle: 'Dexi Digital vs Syonet | Comparativo Completo | IA Automotiva',
    metaDescription:
      'Comparativo detalhado entre Dexi Digital (Fykos) e Syonet. Entenda a diferença entre a execução autônoma de IA e o CRM tradicional em conversão, velocidade e inteligência.',
    keywords: [
      'Dexi vs Syonet',
      'alternativa Syonet',
      'Syonet concorrente',
      'CRM automotivo comparativo',
      'melhor CRM concessionária',
      'Fykos vs Syonet',
    ],
    answerSnippet:
      'A principal diferença entre Dexi Digital e Syonet é a abordagem: o Syonet é uma plataforma de CRM automotivo, que organiza o funil e o histórico de atendimento. O Fykos da Dexi é um Sistema Operacional de Receita que age autonomamente, qualifica leads, responde clientes e entrega briefings estratégicos ao vendedor. O foco é financeiro: fazer o lead que custou caro virar venda e dar mais previsibilidade à receita.',
    sections: [
      {
        heading: 'CRM passivo vs. Execução autônoma de IA',
        content:
          'O Syonet é uma plataforma de CRM automotivo consolidada no mercado brasileiro. Registra leads, organiza funis e gera relatórios. Na abordagem de CRM, a equipe conduz cada etapa: ler o lead, responder, anotar e acompanhar. O Fykos da Dexi inverte essa lógica: o sistema age primeiro, responde, qualifica, perfila, e entrega ao vendedor um lead pronto para fechar.',
      },
      {
        heading: 'Velocidade de resposta',
        content:
          'Em um CRM, a resposta ao lead depende de o vendedor acessar o sistema. Com o Fykos, o lead recebe resposta em menos de 30 segundos via WhatsApp, com informação personalizada sobre o veículo de interesse. No mercado premium, quem responde primeiro vende.',
      },
      {
        heading: 'Inteligência de perfilamento',
        content:
          'Em um CRM, o lead é organizado pelos dados declarados: nome, telefone, veículo de interesse. O Fykos vai além: analisa linguagem, comportamento de navegação e padrões de interação para criar um perfil psicológico do comprador, performance vs. segurança, urgência vs. pesquisa, ticket alto vs. entry-level.',
      },
      {
        heading: 'Integração e flexibilidade',
        content:
          'O Syonet é o sistema onde a operação registra e gerencia o atendimento. O Fykos é uma camada inteligente que se integra com qualquer DMS, CRM (incluindo o próprio Syonet) e plataforma de comunicação. Não exige migração, complementa o que a concessionária já tem.',
      },
      {
        heading: 'Suporte e evolução',
        content:
          'A Dexi Digital é uma consultoria de IA com 10 anos de experiência em engenharia de software. Não vendemos licença e sumimos, acompanhamos resultados, otimizamos continuamente e evoluímos a plataforma com base em dados reais da operação.',
      },
    ],
    tabelaComparativa: [
      { criterio: 'Resposta ao lead', dexi: '< 30 segundos (automática)', concorrente: 'Conduzida pela equipe no CRM' },
      { criterio: 'Qualificação de lead', dexi: 'IA com perfilamento comportamental', concorrente: 'Feita pela equipe de vendas' },
      { criterio: 'Follow-up', dexi: 'Automático com cadência inteligente', concorrente: 'Executado pela equipe de vendas' },
      { criterio: 'Integração DMS', dexi: 'API aberta, qualquer DMS', concorrente: 'Conforme integrações do fornecedor' },
      { criterio: 'Cross-sell entre marcas', dexi: 'Automático com ML', concorrente: 'Conduzido pela equipe a partir dos dados do CRM' },
      { criterio: 'Predição de recompra', dexi: 'Machine learning preditivo', concorrente: 'Análise a partir de relatórios' },
      { criterio: 'WhatsApp nativo', dexi: 'Sim, com Business API', concorrente: 'Conforme integrações do fornecedor' },
      { criterio: 'Dashboards em tempo real', dexi: 'Sim, consolidados por grupo', concorrente: 'Relatórios do CRM' },
    ],
    faq: [
      {
        question: 'A Dexi substitui completamente o Syonet?',
        answer:
          'Pode funcionar como substituto ou complemento. O Fykos pode começar rodando junto com o Syonet, e a migração, se fizer sentido, acontece de forma gradual conforme validam resultados.',
      },
      {
        question: 'O Syonet não oferece IA também?',
        answer:
          'O Syonet tem funcionalidades de automação. A diferença está na abordagem: o Fykos foi desenhado para agir autonomamente (responde, qualifica, perfila) e entregar ao vendedor o lead com contexto, enquanto um CRM organiza o atendimento que a equipe conduz.',
      },
      {
        question: 'Quanto custa trocar do Syonet para a Dexi?',
        answer:
          'O investimento varia conforme o porte da operação. Na conversa de aderência, olhamos a operação atual e avaliamos se o Fykos faz sentido financeiro antes de qualquer compromisso.',
      },
    ],
    ctaText: 'Avaliar aderência com a Dexi Digital',
  },
  {
    slug: 'dexi-vs-crm-tradicional',
    title: 'Dexi Digital vs CRM Tradicional',
    metaTitle: 'IA Automotiva vs CRM Tradicional | Por que Mudar | Dexi Digital',
    metaDescription:
      'Entenda por que CRMs tradicionais não acompanham o mercado automotivo moderno. Execução autônoma de IA vs. formulários manuais. Dexi Digital.',
    keywords: [
      'CRM automotivo tradicional',
      'CRM vs IA automotivo',
      'alternativa CRM concessionária',
      'IA vs CRM vendas',
      'evolução CRM automotivo',
    ],
    answerSnippet:
      'CRMs tradicionais foram projetados para uma era em que o vendedor controlava a informação. Hoje, o comprador chega ao showroom com mais informação que o vendedor. O Fykos da Dexi Digital é a evolução: IA que executa a venda, não apenas registra dados.',
    sections: [
      {
        heading: 'A era do CRM acabou',
        content:
          'O CRM automotivo foi revolucionário nos anos 2000: pela primeira vez, concessionárias podiam rastrear leads. Mas o mercado evoluiu e o CRM não. O comprador moderno pesquisa online, compara preços, lê avaliações e chega ao showroom decidido. O CRM que registra "lead recebido às 14h" não acompanha essa velocidade.',
      },
      {
        heading: 'O vendedor não é o gargalo, o processo é',
        content:
          'Vendedores de concessionárias são competentes. O problema é o processo: lead entra → vendedor acessa CRM → lê informações → busca veículo → responde. Esse processo de 5 etapas manuais leva horas. Com o Fykos, o lead recebe resposta em segundos e o vendedor recebe briefing pronto.',
      },
      {
        heading: 'Dados estáticos vs. infraestrutura de liquidez',
        content:
          'O CRM armazena dados. O Fykos opera sobre uma infraestrutura de três camadas: ingestão de sinais (ERP, WhatsApp, voz), inteligência comportamental (score de probabilidade e intenção) e governança enterprise RAG. O resultado: fluxo de caixa preditivo, predição de recompra e follow-ups que reengajam leads frios.',
      },
      {
        heading: 'O custo real do CRM manual',
        content:
          'Uma concessionária média perde 40% dos leads por falta de follow-up adequado. Com ticket médio de R$ 150 mil e 200 leads/mês, isso representa R$ 12M/ano em oportunidades perdidas. Com o Fykos, a média de qualificação é de 4 mensagens por sessão.',
      },
    ],
    tabelaComparativa: [
      { criterio: 'Paradigma', dexi: 'Execução autônoma', concorrente: 'Registro manual' },
      { criterio: 'Tempo de resposta', dexi: '< 30 segundos', concorrente: '1-24 horas' },
      { criterio: 'Qualificação de leads', dexi: 'Automática com IA', concorrente: 'Critério do vendedor' },
      { criterio: 'Follow-up', dexi: 'Automático e persistente', concorrente: 'Quando o vendedor lembrar' },
      { criterio: 'Análise preditiva', dexi: 'Machine learning nativo', concorrente: 'Inexistente' },
      { criterio: 'ROI mensurável', dexi: 'Dashboard em tempo real', concorrente: 'Relatório mensal' },
    ],
    faq: [
      {
        question: 'Preciso abandonar meu CRM atual?',
        answer:
          'Não. O Fykos funciona como camada inteligente sobre qualquer CRM. Você pode manter o sistema atual e adicionar execução autônoma de IA por cima.',
      },
      {
        question: 'A IA não vai eliminar vendedores?',
        answer:
          'Não. A IA elimina o trabalho operacional (qualificar, responder, agendar). O vendedor foca no que faz melhor: construir relacionamento e fechar a venda.',
      },
    ],
    ctaText: 'Avaliar aderência da IA à minha operação',
  },
];
