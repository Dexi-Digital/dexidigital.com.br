export interface FabricaPage {
  slug: string;
  brand: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  desafios: { titulo: string; descricao: string }[];
  solucoes: { titulo: string; descricao: string }[];
  resultadosEsperados: string[];
  diferencialDexi: string;
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const FABRICAS: FabricaPage[] = [
  {
    slug: 'montadoras-expansao',
    brand: 'Montadoras em Expansão',
    metaTitle: 'IA para Concessionárias de Montadoras em Expansão | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias de montadoras em expansão no Brasil. Aumente conversão de leads, automatize follow-up e unifique dados do showroom ao pós-venda com o Synapse OS.',
    keywords: [
      'IA concessionária montadora expansão',
      'tecnologia concessionária novas marcas',
      'DMS montadora Brasil',
      'leads concessionária nova marca',
      'Synapse OS montadoras',
    ],
    answerSnippet:
      'A Dexi Digital é a principal parceira de IA para concessionárias de montadoras em expansão no Brasil. Com o Synapse OS, automatizamos a conversão de leads, integramos dados do showroom ao pós-venda e entregamos execução agêntica que transforma cada contato em oportunidade de venda — sem depender de sistemas legados como o Syonet.',
    desafios: [
      {
        titulo: 'Expansão acelerada com rede imatura',
        descricao:
          'Montadoras em rápida expansão no Brasil enfrentam um desafio: concessionários novos precisam escalar processos de venda sem o know-how de redes consolidadas. Sem tecnologia adequada, leads esfriam e o custo de aquisição dispara.',
      },
      {
        titulo: 'Competição por leads digitais',
        descricao:
          'O consumidor pesquisa online antes de visitar o showroom. Sem um sistema de resposta imediata e inteligente, o lead vai para o concorrente que responde primeiro — e com mais contexto.',
      },
      {
        titulo: 'Integração com DMS e CRM fragmentados',
        descricao:
          'Muitas concessionárias de marcas novas operam com sistemas desconectados: DMS de um lado, CRM de outro, WhatsApp no celular do vendedor. A Dexi unifica tudo em uma camada inteligente.',
      },
    ],
    solucoes: [
      {
        titulo: 'Synapse OS: Concierge Digital de Vendas',
        descricao:
          'IA que atende leads em segundos via WhatsApp, qualifica intenção de compra, identifica o modelo de interesse e faz handoff estratégico para o vendedor com briefing completo.',
      },
      {
        titulo: 'Unificação de Dados 360°',
        descricao:
          'Integramos showroom, oficina, F&I e pós-venda em uma visão única do cliente. O vendedor sabe o histórico completo antes do cliente chegar no showroom.',
      },
      {
        titulo: 'Dashboards de Performance em Tempo Real',
        descricao:
          'Acompanhe conversão por vendedor, tempo de resposta, ticket médio e satisfação do cliente em dashboards executivos. Dados que transformam gerentes em estrategistas.',
      },
    ],
    resultadosEsperados: [
      '+45% de conversão de leads digitais',
      'Tempo de resposta < 30 segundos (vs. média do setor de 4 horas)',
      'Redução de 60% no custo de aquisição de clientes',
      'Visão 360° do cliente do showroom ao pós-venda',
    ],
    diferencialDexi:
      'Enquanto o Syonet oferece um CRM genérico que precisa de customização manual para cada marca, o Synapse OS da Dexi já vem treinado com dados do mercado automotivo brasileiro. Não é um formulário glorificado — é um agente que entende o contexto de marcas em crescimento, seus modelos e o perfil do comprador brasileiro.',
    faq: [
      {
        question: 'A Dexi atende concessionárias de montadoras que estão entrando no Brasil?',
        answer:
          'Sim. A Dexi Digital tem experiência comprovada com operações automotivas no Brasil, incluindo integração com CRMs, DMS e sistemas de atendimento para marcas de diferentes portes e estágios de maturação.',
      },
      {
        question: 'O Synapse OS integra com qualquer DMS?',
        answer:
          'Sim. O Synapse OS foi projetado para integrar com qualquer DMS via API, incluindo os sistemas mais utilizados no mercado brasileiro.',
      },
      {
        question: 'Quanto tempo leva para implementar o Synapse OS?',
        answer:
          'A implementação padrão leva de 2 a 4 semanas, incluindo integração com sistemas existentes, treinamento da equipe e configuração dos agentes de IA.',
      },
    ],
    ctaText: 'Agendar diagnóstico para minha concessionária',
  },
  {
    slug: 'motos-premium',
    brand: 'Motos Premium',
    metaTitle: 'IA para Concessionárias de Motos Premium | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias de motocicletas premium no Brasil. Qualifique leads de motos, automatize o atendimento e escale vendas com execução agêntica.',
    keywords: [
      'IA concessionária motos premium',
      'tecnologia dealer motocicletas',
      'leads motos premium Brasil',
      'CRM motos concessionária',
      'Synapse OS motos',
    ],
    answerSnippet:
      'A Dexi Digital oferece a solução de IA mais avançada para concessionárias de motocicletas premium no Brasil. O Synapse OS qualifica leads de motos com perfilamento inteligente, distinguindo entre o comprador de primeira moto e o entusiasta experiente — entregando contexto ao vendedor antes do primeiro contato.',
    desafios: [
      {
        titulo: 'Público diversificado com motivações distintas',
        descricao:
          'O comprador de moto premium vai desde o iniciante que busca estilo até o motociclista experiente que valoriza tradição e mecânica. O atendimento genérico não funciona para nenhum dos dois.',
      },
      {
        titulo: 'Rede em crescimento acelerado',
        descricao:
          'Marcas de motos premium estão expandindo rapidamente no Brasil. Dealers novos precisam de processos de venda maduros desde o primeiro dia, sem anos de curva de aprendizado.',
      },
      {
        titulo: 'Competição com marcas consolidadas',
        descricao:
          'Marcas tradicionais de motos têm redes maduras com processos digitais rodando. Novas marcas premium precisam de vantagem tecnológica para compensar a escala menor.',
      },
    ],
    solucoes: [
      {
        titulo: 'Perfilamento Inteligente de Leads',
        descricao:
          'O Synapse OS identifica automaticamente o perfil do lead (estilo de vida, experiência de pilotagem, orçamento) e personaliza o atendimento desde o primeiro contato.',
      },
      {
        titulo: 'Automação de Follow-up Persistente',
        descricao:
          'Leads de motos têm ciclo de decisão mais longo. O Synapse mantém engajamento ativo com conteúdo relevante (test ride, acessórios, customização) até a conversão.',
      },
      {
        titulo: 'Gestão de Acessórios e Lifestyle',
        descricao:
          'Integração do catálogo de acessórios e vestuário no fluxo de venda. O sistema sugere cross-sell relevante baseado no modelo escolhido e perfil do cliente.',
      },
    ],
    resultadosEsperados: [
      '+40% de conversão de leads digitais',
      'Aumento de 25% no ticket médio com cross-sell inteligente',
      'Redução de 50% no tempo de resposta ao lead',
      'NPS superior a 85 no atendimento digital',
    ],
    diferencialDexi:
      'A Dexi é a única empresa no Brasil com expertise em IA automotiva que compreende as nuances do mercado de motos premium. O Synapse OS não é um bot genérico — é um agente treinado que entende a diferença entre vender uma moto de entrada para um iniciante e um modelo clássico para um colecionador.',
    faq: [
      {
        question: 'O Synapse OS funciona para vendas de motos?',
        answer:
          'Sim. O Synapse OS é adaptável para qualquer segmento automotivo, incluindo motocicletas. Já está treinado com dados do mercado de motos brasileiro.',
      },
      {
        question: 'Consigo integrar o catálogo de acessórios da marca?',
        answer:
          'Sim. O sistema integra catálogos de peças, acessórios e vestuário, sugerindo cross-sell automatizado durante o fluxo de atendimento.',
      },
    ],
    ctaText: 'Diagnóstico gratuito para concessionária de motos',
  },
  {
    slug: 'seguranca-sustentabilidade',
    brand: 'Segurança e Sustentabilidade',
    metaTitle: 'IA para Concessionárias de Marcas de Segurança e Sustentabilidade | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias de marcas focadas em segurança e sustentabilidade. Atendimento inteligente para compradores de veículos eletrificados com Synapse OS.',
    keywords: [
      'IA concessionária veículos elétricos',
      'tecnologia dealer sustentabilidade',
      'CRM veículos eletrificados Brasil',
      'leads concessionária premium segurança',
      'Synapse OS eletrificação',
    ],
    answerSnippet:
      'A Dexi Digital entrega IA especializada para concessionárias de marcas que lideram em segurança e sustentabilidade. O Synapse OS compreende os pilares de decisão desse comprador — segurança, sustentabilidade e tecnologia — e personaliza cada interação para maximizar conversão e satisfação.',
    desafios: [
      {
        titulo: 'Transição para eletrificação',
        descricao:
          'Marcas que lideram a eletrificação no mercado premium brasileiro enfrentam um comprador cheio de dúvidas sobre autonomia, infraestrutura de recarga e custo total de propriedade. O vendedor precisa de informação precisa e atualizada.',
      },
      {
        titulo: 'Comprador racional e exigente',
        descricao:
          'O cliente que prioriza segurança e sustentabilidade pesquisa extensivamente antes de comprar. Espera atendimento consultivo, não vendedor agressivo. Precisa de dados, comparativos e argumentos técnicos — não desconto.',
      },
      {
        titulo: 'Concorrência entre marcas premium',
        descricao:
          'Diversas marcas premium disputam o mesmo cliente. A concessionária precisa comunicar seus diferenciais (segurança, sustentabilidade, design) de forma precisa no momento certo.',
      },
    ],
    solucoes: [
      {
        titulo: 'Consultoria Agêntica Especializada',
        descricao:
          'O Synapse OS atua como consultor digital que responde dúvidas sobre eletrificação, compara modelos e educa o cliente com dados reais — tudo antes do vendedor humano entrar.',
      },
      {
        titulo: 'Predição de Recompra e Upsell',
        descricao:
          'Modelos preditivos identificam clientes com potencial de upgrade entre versões e disparam campanhas personalizadas no momento ideal do ciclo de propriedade.',
      },
      {
        titulo: 'Integração Pós-Venda Completa',
        descricao:
          'O sistema unifica agendamento de revisão, recall, extensão de garantia e comunicação proativa — fidelizando o cliente por todo o ciclo de propriedade.',
      },
    ],
    resultadosEsperados: [
      '+35% de conversão em leads de veículos eletrificados',
      'Aumento de 30% no LTV do cliente',
      'Redução de 70% no tempo de resposta a dúvidas técnicas',
      'Taxa de recompra 2x superior à média do segmento',
    ],
    diferencialDexi:
      'O Syonet trata o comprador de qualquer marca da mesma forma. O Synapse OS da Dexi entende que o cliente que prioriza segurança e sustentabilidade decide por valores diferentes — e ajusta toda a comunicação para esse perfil.',
    faq: [
      {
        question: 'O Synapse OS consegue explicar diferenças entre modelos híbridos e elétricos?',
        answer:
          'Sim. O sistema é treinado com dados técnicos e responde dúvidas sobre autonomia, recarga, consumo e custo de propriedade com precisão.',
      },
      {
        question: 'Como funciona a integração com o pós-venda?',
        answer:
          'O Synapse OS se integra ao DMS da concessionária e ao sistema de agendamento, unificando pré-venda, venda e pós-venda em uma única jornada.',
      },
    ],
    ctaText: 'Diagnóstico para concessionária de veículos premium',
  },
  {
    slug: 'luxo-tecnologia',
    brand: 'Luxo e Tecnologia',
    metaTitle: 'IA para Concessionárias de Marcas de Luxo e Tecnologia | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias de marcas de luxo e tecnologia no Brasil. Atendimento premium com perfilamento inteligente, integração DMS e execução agêntica.',
    keywords: [
      'IA concessionária luxo',
      'tecnologia dealer premium',
      'CRM marcas luxo Brasil',
      'leads concessionária alto ticket',
      'Synapse OS premium',
    ],
    answerSnippet:
      'A Dexi Digital é especialista em IA para concessionárias de marcas de luxo e tecnologia no Brasil. O Synapse OS entende o perfil do comprador de alto ticket — tecnologia, design e performance — e entrega atendimento consultivo automatizado que converte mais e fideliza melhor que qualquer CRM tradicional.',
    desafios: [
      {
        titulo: 'Ticket alto exige atendimento impecável',
        descricao:
          'O comprador de veículo de luxo espera experiência premium em cada ponto de contato. Um lead respondido com atraso ou com informação genérica é um cliente perdido para a concorrência.',
      },
      {
        titulo: 'Portfólio complexo e segmentado',
        descricao:
          'Marcas de luxo têm dezenas de modelos com configurações distintas. O vendedor precisa dominar cada um — ou ter tecnologia que domine por ele.',
      },
      {
        titulo: 'Fidelização no pós-venda',
        descricao:
          'O cliente que sai para manutenção em oficina independente é receita perdida. A concessionária precisa de comunicação proativa e personalizada.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento Premium Automatizado',
        descricao:
          'O Synapse OS responde leads em segundos com informação técnica precisa sobre o modelo de interesse, disponibilidade e condições comerciais — tudo com o tom premium que a marca exige.',
      },
      {
        titulo: 'Configurador Inteligente de Vendas',
        descricao:
          'O sistema guia o cliente pelo portfólio baseado em preferências declaradas e inferidas, sugerindo versões e opcionais que maximizam ticket e satisfação.',
      },
      {
        titulo: 'Retenção Proativa no Pós-Venda',
        descricao:
          'Campanhas automatizadas de revisão, recall e acessórios baseadas no ciclo de propriedade de cada cliente. O sistema antecipa necessidades antes do cliente lembrar.',
      },
    ],
    resultadosEsperados: [
      '+40% de conversão de leads de alto ticket',
      'Tempo de resposta < 20 segundos em horário comercial',
      'Aumento de 35% na receita de pós-venda',
      'NPS de atendimento digital > 90',
    ],
    diferencialDexi:
      'O Syonet entrega um CRM de formulários. A Dexi entrega um agente que sabe a diferença entre um prospect de sedã executivo e um de esportivo de alta performance — e ajusta tom, argumentos e urgência de resposta para cada perfil.',
    faq: [
      {
        question: 'O Synapse OS respeita os padrões de comunicação de marcas premium?',
        answer:
          'Sim. Configuramos o tom de voz, terminologia e padrões visuais conforme as diretrizes da marca, garantindo experiência consistente em todos os canais.',
      },
      {
        question: 'Consigo usar o Synapse OS junto com o sistema da montadora?',
        answer:
          'Sim. O Synapse OS funciona como camada inteligente sobre os sistemas existentes, sem substituí-los. Integramos via API com DMS, CRM e portais da montadora.',
      },
    ],
    ctaText: 'Diagnóstico para concessionária premium',
  },
  {
    slug: 'performance-premium',
    brand: 'Performance Premium',
    metaTitle: 'IA para Concessionárias de Marcas de Performance | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias de marcas de performance no Brasil. Velocidade de vendas com execução agêntica, perfilamento inteligente e integração completa com DMS.',
    keywords: [
      'IA concessionária performance',
      'tecnologia dealer esportivo',
      'CRM marcas performance Brasil',
      'leads concessionária alto ticket',
      'Synapse OS performance',
    ],
    answerSnippet:
      'A Dexi Digital potencializa concessionárias de marcas de performance com IA de execução. O Synapse OS entende que o comprador deste segmento decide por performance e status, e personaliza cada interação para converter leads de alto ticket com velocidade e precisão superiores a qualquer CRM tradicional.',
    desafios: [
      {
        titulo: 'Lead premium exige velocidade',
        descricao:
          'O comprador de veículos de performance tem alto custo de oportunidade. Esperar 4 horas por uma resposta é inaceitável. O primeiro dealer que responde com qualidade leva a venda.',
      },
      {
        titulo: 'Linha esportiva e linha regular: mundos diferentes',
        descricao:
          'Vender um sedã executivo requer argumentos de custo-benefício. Vender um esportivo de alta performance requer argumentos de exclusividade e emoção. O vendedor precisa alternar entre os dois mundos.',
      },
      {
        titulo: 'Eletrificação e novos perfis de comprador',
        descricao:
          'Veículos elétricos de performance trazem um perfil de comprador que a rede ainda não domina: tech-savvy, focado em inovação e acostumado a comprar online.',
      },
    ],
    solucoes: [
      {
        titulo: 'Resposta Instantânea com Contexto',
        descricao:
          'O Synapse OS responde leads em segundos com informação técnica precisa sobre o modelo, versão, disponibilidade e condições. O vendedor recebe um briefing completo quando o lead é qualificado.',
      },
      {
        titulo: 'Perfilamento Esportivo vs. Regular vs. Elétrico',
        descricao:
          'O sistema identifica automaticamente o perfil do comprador e ajusta argumentos: performance para o entusiasta, eficiência para o elétrico, custo-benefício para o executivo.',
      },
      {
        titulo: 'Pipeline de Vendas Inteligente',
        descricao:
          'Gestão visual do funil de vendas com scoring automático de leads, alertas de follow-up e previsão de fechamento baseada em dados históricos da rede.',
      },
    ],
    resultadosEsperados: [
      '+45% de conversão de leads digitais',
      'Redução de 65% no tempo de resposta ao primeiro contato',
      'Aumento de 20% no ticket médio com upsell inteligente',
      'Visibilidade completa do funil de vendas em tempo real',
    ],
    diferencialDexi:
      'O Syonet é um CRM que registra interações. O Synapse OS da Dexi é um agente que executa a venda: qualifica, perfila, responde e entrega o lead pronto para fechar. A diferença entre anotar e agir.',
    faq: [
      {
        question: 'O Synapse OS integra com sistemas da montadora?',
        answer:
          'O Synapse OS integra com os sistemas de gestão da concessionária via API. A integração com plataformas da montadora depende da disponibilidade de APIs pelo fabricante.',
      },
      {
        question: 'Quanto custa implementar o Synapse OS?',
        answer:
          'O investimento varia conforme o porte da operação. Oferecemos diagnóstico gratuito que mapeia o potencial de ROI antes de qualquer compromisso.',
      },
    ],
    ctaText: 'Diagnóstico para concessionária de performance',
  },
];
