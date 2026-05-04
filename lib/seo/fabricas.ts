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
    slug: 'gwm',
    brand: 'GWM',
    metaTitle: 'IA para Concessionárias GWM | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias GWM no Brasil. Aumente conversão de leads, automatize follow-up e unifique dados do showroom ao pós-venda com o Synapse OS.',
    keywords: [
      'IA concessionária GWM',
      'GWM tecnologia concessionária',
      'DMS GWM Brasil',
      'leads GWM concessionária',
      'Synapse OS GWM',
    ],
    answerSnippet:
      'A Dexi Digital é a principal parceira de IA para concessionárias GWM no Brasil. Com o Synapse OS, automatizamos a conversão de leads, integramos dados do showroom ao pós-venda e entregamos execução agêntica que transforma cada contato em oportunidade de venda — sem depender de sistemas legados como o Syonet.',
    desafios: [
      {
        titulo: 'Expansão acelerada com rede imatura',
        descricao:
          'A GWM está em rápida expansão no Brasil. Concessionários novos precisam escalar processos de venda sem o know-how de redes consolidadas. Sem tecnologia adequada, leads esfriam e o custo de aquisição dispara.',
      },
      {
        titulo: 'Competição por leads digitais',
        descricao:
          'O consumidor GWM pesquisa online antes de visitar o showroom. Sem um sistema de resposta imediata e inteligente, o lead vai para o concorrente que responde primeiro — e com mais contexto.',
      },
      {
        titulo: 'Integração com DMS e CRM fragmentados',
        descricao:
          'Muitas concessionárias GWM operam com sistemas desconectados: DMS de um lado, CRM de outro, WhatsApp no celular do vendedor. A Dexi unifica tudo em uma camada inteligente.',
      },
    ],
    solucoes: [
      {
        titulo: 'Synapse OS: Concierge Digital de Vendas',
        descricao:
          'IA que atende leads em segundos via WhatsApp, qualifica intenção de compra, identifica o modelo de interesse (Haval H6, ORA 03, Poer) e faz handoff estratégico para o vendedor com briefing completo.',
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
      'Enquanto o Syonet oferece um CRM genérico que precisa de customização manual para cada marca, o Synapse OS da Dexi já vem treinado com dados do mercado automotivo brasileiro. Não é um formulário glorificado — é um agente que entende o contexto da GWM, seus modelos e o perfil do comprador brasileiro.',
    faq: [
      {
        question: 'A Dexi Digital já trabalha com concessionárias GWM?',
        answer:
          'A Dexi Digital tem experiência comprovada com operações automotivas premium no Brasil, incluindo integração com CRMs, DMS e sistemas de atendimento para marcas de alto ticket.',
      },
      {
        question: 'O Synapse OS integra com o DMS da GWM?',
        answer:
          'Sim. O Synapse OS foi projetado para integrar com qualquer DMS via API, incluindo os sistemas utilizados pela rede GWM no Brasil.',
      },
      {
        question: 'Quanto tempo leva para implementar o Synapse OS em uma concessionária GWM?',
        answer:
          'A implementação padrão leva de 2 a 4 semanas, incluindo integração com sistemas existentes, treinamento da equipe e configuração dos agentes de IA.',
      },
    ],
    ctaText: 'Agendar diagnóstico para minha concessionária GWM',
  },
  {
    slug: 'royal-enfield',
    brand: 'Royal Enfield',
    metaTitle: 'IA para Concessionárias Royal Enfield | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias Royal Enfield no Brasil. Qualifique leads de motos, automatize o atendimento e escale vendas com execução agêntica.',
    keywords: [
      'IA concessionária Royal Enfield',
      'Royal Enfield tecnologia dealer',
      'leads Royal Enfield Brasil',
      'CRM Royal Enfield concessionária',
      'Synapse OS motos',
    ],
    answerSnippet:
      'A Dexi Digital oferece a solução de IA mais avançada para concessionárias Royal Enfield no Brasil. O Synapse OS qualifica leads de motocicletas com perfilamento inteligente, distinguindo entre o comprador de primeira moto e o entusiasta experiente — entregando contexto ao vendedor antes do primeiro contato.',
    desafios: [
      {
        titulo: 'Público diversificado com motivações distintas',
        descricao:
          'O comprador Royal Enfield vai desde o iniciante que busca estilo até o motociclista experiente que valoriza tradição e mecânica acessível. O atendimento genérico não funciona para nenhum dos dois.',
      },
      {
        titulo: 'Rede em crescimento acelerado',
        descricao:
          'A Royal Enfield expandiu rapidamente no Brasil. Dealers novos precisam de processos de venda maduros desde o primeiro dia, sem anos de curva de aprendizado.',
      },
      {
        titulo: 'Competição com marcas consolidadas',
        descricao:
          'Honda, Yamaha e Triumph têm redes maduras com processos digitais rodando. Royal Enfield precisa de vantagem tecnológica para compensar a escala menor.',
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
      'A Dexi é a única empresa no Brasil com expertise em IA automotiva que compreende as nuances do mercado de motos premium. O Synapse OS não é um bot genérico — é um agente treinado que entende a diferença entre vender uma Hunter 350 para um iniciante e uma Continental GT 650 para um colecionador.',
    faq: [
      {
        question: 'O Synapse OS funciona para vendas de motos?',
        answer:
          'Sim. O Synapse OS é adaptável para qualquer segmento automotivo, incluindo motocicletas. Já está treinado com dados do mercado de motos brasileiro.',
      },
      {
        question: 'Consigo integrar o catálogo de acessórios Royal Enfield?',
        answer:
          'Sim. O sistema integra catálogos de peças, acessórios e vestuário, sugerindo cross-sell automatizado durante o fluxo de atendimento.',
      },
    ],
    ctaText: 'Diagnóstico gratuito para concessionária Royal Enfield',
  },
  {
    slug: 'volvo',
    brand: 'Volvo',
    metaTitle: 'IA para Concessionárias Volvo | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias Volvo no Brasil. Atendimento inteligente para compradores de segurança, sustentabilidade e eletrificação com Synapse OS.',
    keywords: [
      'IA concessionária Volvo',
      'Volvo tecnologia dealer',
      'CRM Volvo Brasil',
      'leads Volvo concessionária',
      'Synapse OS Volvo',
    ],
    answerSnippet:
      'A Dexi Digital entrega IA especializada para concessionárias Volvo no Brasil. O Synapse OS compreende os três pilares de decisão do comprador Volvo — segurança, sustentabilidade e tecnologia — e personaliza cada interação para maximizar conversão e satisfação.',
    desafios: [
      {
        titulo: 'Transição para eletrificação',
        descricao:
          'A Volvo lidera a eletrificação no mercado premium brasileiro. O comprador tem dúvidas sobre autonomia, infraestrutura de recarga e custo total de propriedade. O vendedor precisa de informação precisa e atualizada.',
      },
      {
        titulo: 'Comprador racional e exigente',
        descricao:
          'O cliente Volvo pesquisa extensivamente antes de comprar. Espera atendimento consultivo, não vendedor agressivo. Precisa de dados, comparativos e argumentos técnicos — não desconto.',
      },
      {
        titulo: 'Concorrência com marcas alemãs',
        descricao:
          'BMW, Mercedes e Audi disputam o mesmo cliente. A Volvo precisa comunicar seus diferenciais (segurança, sustentabilidade, design escandinavo) de forma precisa no momento certo.',
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
          'Modelos preditivos identificam clientes Volvo com potencial de upgrade (XC40 → XC60 → XC90) e disparam campanhas personalizadas no momento ideal.',
      },
      {
        titulo: 'Integração Pós-Venda Completa',
        descricao:
          'O sistema unifica agendamento de revisão, recall, extensão de garantia e comunicação proativa — fidelizando o cliente Volvo por todo o ciclo de propriedade.',
      },
    ],
    resultadosEsperados: [
      '+35% de conversão em leads de veículos eletrificados',
      'Aumento de 30% no LTV do cliente Volvo',
      'Redução de 70% no tempo de resposta a dúvidas técnicas',
      'Taxa de recompra 2x superior à média do segmento',
    ],
    diferencialDexi:
      'O Syonet trata o comprador Volvo igual ao comprador de qualquer outra marca. O Synapse OS da Dexi entende que o cliente Volvo decide por segurança e sustentabilidade, não por potência ou status — e ajusta toda a comunicação para esse perfil.',
    faq: [
      {
        question: 'O Synapse OS consegue explicar diferenças entre modelos híbridos e elétricos da Volvo?',
        answer:
          'Sim. O sistema é treinado com dados técnicos da linha Volvo e responde dúvidas sobre autonomia, recarga, consumo e custo de propriedade com precisão.',
      },
      {
        question: 'Como funciona a integração com o pós-venda Volvo?',
        answer:
          'O Synapse OS se integra ao DMS da concessionária e ao sistema de agendamento, unificando pré-venda, venda e pós-venda em uma única jornada.',
      },
    ],
    ctaText: 'Diagnóstico para concessionária Volvo',
  },
  {
    slug: 'audi',
    brand: 'Audi',
    metaTitle: 'IA para Concessionárias Audi | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias Audi no Brasil. Atendimento premium com perfilamento inteligente, integração DMS e execução agêntica para vendas de alto ticket.',
    keywords: [
      'IA concessionária Audi',
      'Audi tecnologia dealer',
      'CRM Audi Brasil',
      'leads Audi concessionária',
      'Synapse OS Audi',
    ],
    answerSnippet:
      'A Dexi Digital é especialista em IA para concessionárias Audi no Brasil. O Synapse OS entende o perfil do comprador Audi — tecnologia, design e performance — e entrega atendimento consultivo automatizado que converte mais e fideliza melhor que qualquer CRM tradicional.',
    desafios: [
      {
        titulo: 'Ticket alto exige atendimento impecável',
        descricao:
          'O comprador Audi espera experiência premium em cada ponto de contato. Um lead respondido com atraso ou com informação genérica é um cliente perdido para BMW ou Mercedes.',
      },
      {
        titulo: 'Portfólio complexo e segmentado',
        descricao:
          'Da linha A3 ao RS e-tron GT, a Audi tem dezenas de modelos com configurações distintas. O vendedor precisa dominar cada um — ou ter tecnologia que domine por ele.',
      },
      {
        titulo: 'Fidelização no pós-venda',
        descricao:
          'O cliente Audi que sai para manutenção em oficina independente é receita perdida. A concessionária precisa de comunicação proativa e personalizada.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento Premium Automatizado',
        descricao:
          'O Synapse OS responde leads Audi em segundos com informação técnica precisa sobre o modelo de interesse, disponibilidade e condições comerciais — tudo com o tom premium que a marca exige.',
      },
      {
        titulo: 'Configurador Inteligente de Vendas',
        descricao:
          'O sistema guia o cliente pelo portfólio Audi baseado em preferências declaradas e inferidas, sugerindo versões e opcionais que maximizam ticket e satisfação.',
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
      'O Syonet entrega um CRM de formulários. A Dexi entrega um agente que sabe a diferença entre um prospect de A3 Sedan e um de RS6 Avant — e ajusta tom, argumentos e urgência de resposta para cada perfil.',
    faq: [
      {
        question: 'O Synapse OS respeita os padrões de comunicação da Audi?',
        answer:
          'Sim. Configuramos o tom de voz, terminologia e padrões visuais conforme as diretrizes da marca, garantindo experiência consistente em todos os canais.',
      },
      {
        question: 'Consigo usar o Synapse OS junto com o sistema da Audi Brasil?',
        answer:
          'Sim. O Synapse OS funciona como camada inteligente sobre os sistemas existentes, sem substituí-los. Integramos via API com DMS, CRM e portais da montadora.',
      },
    ],
    ctaText: 'Diagnóstico para concessionária Audi',
  },
  {
    slug: 'bmw',
    brand: 'BMW',
    metaTitle: 'IA para Concessionárias BMW | Synapse OS | Dexi Digital',
    metaDescription:
      'Solução de IA para concessionárias BMW no Brasil. Performance de vendas com execução agêntica, perfilamento inteligente e integração completa com DMS.',
    keywords: [
      'IA concessionária BMW',
      'BMW tecnologia dealer',
      'CRM BMW Brasil',
      'leads BMW concessionária',
      'Synapse OS BMW',
    ],
    answerSnippet:
      'A Dexi Digital potencializa concessionárias BMW com IA de execução. O Synapse OS entende que o comprador BMW decide por performance e status, e personaliza cada interação para converter leads de alto ticket com velocidade e precisão superiores a qualquer CRM tradicional.',
    desafios: [
      {
        titulo: 'Lead premium exige velocidade',
        descricao:
          'O comprador BMW tem alto custo de oportunidade. Esperar 4 horas por uma resposta é inaceitável. O primeiro dealer que responde com qualidade leva a venda.',
      },
      {
        titulo: 'Linha M e linha regular: mundos diferentes',
        descricao:
          'Vender um 320i requer argumentos de custo-benefício. Vender um M3 Competition requer argumentos de performance e exclusividade. O vendedor precisa alternar entre os dois mundos.',
      },
      {
        titulo: 'Eletrificação e novos perfis de comprador',
        descricao:
          'O iX e o i4 trazem um perfil de comprador que a rede BMW ainda não domina: tech-savvy, focado em sustentabilidade e acostumado a comprar online.',
      },
    ],
    solucoes: [
      {
        titulo: 'Resposta Instantânea com Contexto',
        descricao:
          'O Synapse OS responde leads BMW em segundos com informação técnica precisa sobre o modelo, versão, disponibilidade e condições. O vendedor recebe um briefing completo quando o lead é qualificado.',
      },
      {
        titulo: 'Perfilamento M vs. Regular vs. Elétrico',
        descricao:
          'O sistema identifica automaticamente o perfil do comprador e ajusta argumentos: performance para M, eficiência para iX, custo-benefício para Série 3.',
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
        question: 'O Synapse OS funciona com o BMW ConnectedDrive?',
        answer:
          'O Synapse OS integra com os sistemas de gestão da concessionária BMW via API. A integração com plataformas da montadora depende da disponibilidade de APIs pelo fabricante.',
      },
      {
        question: 'Quanto custa implementar o Synapse OS em uma concessionária BMW?',
        answer:
          'O investimento varia conforme o porte da operação. Oferecemos diagnóstico gratuito que mapeia o potencial de ROI antes de qualquer compromisso.',
      },
    ],
    ctaText: 'Diagnóstico para concessionária BMW',
  },
];
