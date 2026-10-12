/**
 * Páginas por perfil de marca (montadoras em expansão, motos, luxo etc.).
 *
 * Out/2026: o texto anterior foi escrito por IA e trazia números e recursos sem
 * prova ("< 30 segundos", "perfil psicológico", "qualquer DMS", "2 a 4
 * semanas", comparação com o Syonet). Reescrito só com o que
 * lib/regras-editoriais.ts afirma sobre o Fykos. As páginas falam do problema
 * comercial do perfil de concessionária, sem dizer que a Dexi atende esta ou
 * aquela marca.
 */
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
    metaTitle: 'IA para Concessionárias de Montadoras em Expansão | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para concessionárias de marcas em expansão: o lead que custou caro recebe atendimento com contexto e o time sabe qual oportunidade priorizar, com o Fykos.',
    keywords: [
      'IA concessionária montadora expansão',
      'tecnologia concessionária novas marcas',
      'vendas concessionária nova marca',
      'leads concessionária nova marca',
      'Fykos montadoras',
    ],
    answerSnippet:
      'Concessionárias de marcas em expansão pagam caro por cada lead e ainda estão montando o processo comercial. O Fykos, da Dexi Digital, atende quem chega com qualificação e contexto, passa ao vendedor no momento certo e aponta quais oportunidades da base merecem atenção agora, sem exigir que a concessionária troque os sistemas que já usa.',
    desafios: [
      {
        titulo: 'Rede nova, processo ainda imaturo',
        descricao:
          'Marcas em expansão abrem concessionárias que precisam vender desde o primeiro mês, sem o histórico e o processo de uma rede consolidada. Cada lead que espera resposta é verba de mídia que não volta.',
      },
      {
        titulo: 'Time em formação',
        descricao:
          'Vendedores novos ainda não conhecem o portfólio nem a base de clientes, e quem sai leva junto o que sabia sobre cada contato. O processo comercial não pode depender da memória de quem atende.',
      },
      {
        titulo: 'Sinais espalhados em vários sistemas',
        descricao:
          'Estoque de um lado, CRM de outro, conversas no WhatsApp do vendedor. Quando a informação não se encontra, ninguém percebe que chegou o carro que um cliente pediu semanas atrás.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento com qualificação e contexto',
        descricao:
          'O Fykos atende o lead que chega, qualifica a intenção de compra e passa ao vendedor com o contexto da conversa, para que o time gaste tempo com quem está perto de decidir.',
      },
      {
        titulo: 'Reativação quando algo muda',
        descricao:
          'Quando uma condição relevante muda, como a chegada de um modelo ao estoque ou uma condição comercial nova, o Fykos identifica os contatos da base para quem isso importa e inicia a abordagem dentro das regras definidas pela concessionária.',
      },
      {
        titulo: 'Regras, supervisão e trilha',
        descricao:
          'Cada ação segue regras de negócio, exceções vão para uma pessoa e cada etapa fica registrada. A gestão acompanha o que foi feito, o que falhou e por quê.',
      },
    ],
    resultadosEsperados: [
      'Menos lead pago perdido por demora ou falta de retorno',
      'Vendedor novo atendendo com o contexto de cada contato',
      'Oportunidades da base acionadas quando o estoque ou a condição muda',
      'Gestão sabendo o que aconteceu em cada oportunidade',
    ],
    diferencialDexi:
      'O CRM registra o atendimento que a equipe conduz. O Fykos trabalha sobre esse registro: identifica qual oportunidade merece atenção agora e executa a próxima ação dentro de regras definidas, com uma pessoa nas exceções. Não substitui o CRM nem exige migração.',
    faq: [
      {
        question: 'A Dexi atende concessionárias de marcas que estão chegando ao Brasil?',
        answer:
          'Quando a operação tem volume e dados que justifiquem, sim. A conversa de aderência avalia isso antes de qualquer compromisso.',
      },
      {
        question: 'O Fykos se conecta ao DMS e ao CRM da concessionária?',
        answer:
          'A Dexi tem capacidade de integrar o Fykos ao CRM, ao DMS ou ao ERP da operação quando o projeto pede. Quais conexões fazem sentido é definido caso a caso, a partir dos dados que a operação autoriza.',
      },
      {
        question: 'Quanto tempo leva para implementar?',
        answer:
          'Depende dos sistemas envolvidos, dos dados disponíveis e do escopo. O prazo é definido depois da conversa de aderência, com a operação na mesa.',
      },
    ],
    ctaText: 'Avaliar aderência para minha concessionária',
  },
  {
    slug: 'motos-premium',
    brand: 'Motos Premium',
    metaTitle: 'IA para Concessionárias de Motos Premium | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para concessionárias de motocicletas premium: atendimento com qualificação, contexto para o vendedor e retomada da base quando algo muda, com o Fykos.',
    keywords: [
      'IA concessionária motos premium',
      'tecnologia dealer motocicletas',
      'leads motos premium Brasil',
      'CRM motos concessionária',
      'Fykos motos',
    ],
    answerSnippet:
      'Na concessionária de motos premium, o lead pode ser de quem compra a primeira moto ou de quem coleciona. O Fykos, da Dexi Digital, qualifica cada contato, passa ao vendedor com o contexto da conversa e retoma a oportunidade quando aparece um motivo concreto, para que o lead que custou caro não esfrie.',
    desafios: [
      {
        titulo: 'Público diversificado com motivações distintas',
        descricao:
          'O comprador de moto premium vai do iniciante que busca estilo ao motociclista experiente que valoriza tradição e mecânica. Atendimento genérico não funciona para nenhum dos dois.',
      },
      {
        titulo: 'Rede em formação',
        descricao:
          'Dealers novos precisam de processo comercial desde o primeiro dia, sem anos de curva de aprendizado para descobrir quem merece atenção.',
      },
      {
        titulo: 'Disputa com redes mais antigas',
        descricao:
          'Redes consolidadas já têm base de clientes e processo. Quem tem escala menor não pode perder lead por demora ou por falta de retorno.',
      },
    ],
    solucoes: [
      {
        titulo: 'Qualificação com contexto',
        descricao:
          'O Fykos qualifica o lead na conversa (modelo de interesse, momento de compra, experiência) e entrega ao vendedor o que ele precisa saber antes de assumir.',
      },
      {
        titulo: 'Retomada no tempo do comprador',
        descricao:
          'A decisão por uma moto premium pode levar semanas. Quando surge um motivo concreto para retomar a conversa, como um modelo que chegou ao estoque ou uma condição nova, o Fykos aciona o contato dentro das regras da concessionária.',
      },
      {
        titulo: 'Rastreabilidade',
        descricao:
          'Cada abordagem, resposta e passagem para o vendedor fica registrada, e a gestão vê onde as oportunidades param.',
      },
    ],
    resultadosEsperados: [
      'Leads de motos chegando ao vendedor com contexto',
      'Conversa retomada quando há motivo real para isso',
      'Menos lead pago perdido por falta de retorno',
      'Visão do que aconteceu com cada oportunidade',
    ],
    diferencialDexi:
      'O Fykos não é um robô de respostas prontas: trabalha com os dados da concessionária para decidir quem merece atenção agora e qual é a próxima ação, com regras definidas e o vendedor nas decisões que importam.',
    faq: [
      {
        question: 'O Fykos funciona para concessionárias de motos?',
        answer:
          'Funciona para operações em que cada oportunidade tem valor alto e os dados estão em mais de um sistema. Se esse é o caso da sua concessionária, a conversa de aderência avalia antes de qualquer compromisso.',
      },
      {
        question: 'Preciso trocar o sistema que uso hoje?',
        answer:
          'Não. O Fykos atua sobre os sistemas comerciais existentes, sem exigir que a concessionária substitua o CRM.',
      },
    ],
    ctaText: 'Avaliar aderência para concessionária de motos',
  },
  {
    slug: 'seguranca-sustentabilidade',
    brand: 'Segurança e Sustentabilidade',
    metaTitle: 'IA para Concessionárias de Marcas de Segurança e Sustentabilidade | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para concessionárias de marcas focadas em segurança e eletrificação: o comprador que pesquisa muito atendido com contexto e no momento certo, com o Fykos.',
    keywords: [
      'IA concessionária veículos elétricos',
      'tecnologia dealer sustentabilidade',
      'CRM veículos eletrificados Brasil',
      'leads concessionária premium segurança',
      'Fykos eletrificação',
    ],
    answerSnippet:
      'O comprador de marcas focadas em segurança e eletrificação pesquisa muito antes de decidir e espera atendimento consultivo. O Fykos, da Dexi Digital, qualifica cada contato, entrega ao vendedor o contexto da conversa e retoma a oportunidade quando aparece um motivo concreto, para que o lead que custou caro não esfrie no meio da pesquisa.',
    desafios: [
      {
        titulo: 'Transição para eletrificação',
        descricao:
          'O comprador de veículo eletrificado chega com dúvidas sobre autonomia, recarga e custo total de propriedade. O vendedor precisa saber em que ponto da pesquisa ele está.',
      },
      {
        titulo: 'Comprador racional e exigente',
        descricao:
          'Quem prioriza segurança e sustentabilidade pesquisa muito antes de comprar. Espera atendimento consultivo, não vendedor agressivo, e argumentos, não desconto.',
      },
      {
        titulo: 'Concorrência entre marcas premium',
        descricao:
          'Várias marcas disputam o mesmo cliente. A concessionária precisa falar dos seus diferenciais no momento certo, e não quando o cliente já decidiu.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento consultivo desde o primeiro contato',
        descricao:
          'O Fykos atende quem chega, entende o que o comprador está avaliando e passa ao vendedor com o contexto, para que a conversa continue de onde o cliente parou.',
      },
      {
        titulo: 'Retomada no momento certo',
        descricao:
          'Quando aparece um motivo concreto, como um modelo disponível no estoque ou uma condição comercial nova, o Fykos identifica quem estava esperando por isso e retoma a conversa dentro das regras da concessionária.',
      },
      {
        titulo: 'Regras e rastreabilidade',
        descricao:
          'Pergunta que foge das regras ou pede decisão comercial vai para uma pessoa, e cada etapa fica registrada para a gestão acompanhar.',
      },
    ],
    resultadosEsperados: [
      'Comprador consultivo atendido com contexto, sem recomeçar a conversa',
      'Oportunidades retomadas quando surge um motivo concreto',
      'Menos lead pago perdido durante a fase de pesquisa',
      'Visão do que aconteceu com cada oportunidade',
    ],
    diferencialDexi:
      'Um CRM organiza o atendimento que a equipe conduz. O Fykos atua sobre esse registro e sobre os sinais da operação para dizer quem merece atenção agora, com regras definidas e o vendedor nas decisões. É uma camada de inteligência comercial, não um substituto do CRM.',
    faq: [
      {
        question: 'O Fykos responde dúvidas técnicas sobre modelos híbridos e elétricos?',
        answer:
          'O atendimento usa as informações que a concessionária fornece e autoriza. Pergunta que foge disso, ou que exige decisão comercial, vai para uma pessoa.',
      },
      {
        question: 'Preciso trocar o DMS ou o CRM?',
        answer:
          'Não. O Fykos atua sobre os sistemas existentes. A Dexi tem capacidade de integrá-lo ao CRM, ao DMS ou ao ERP da operação quando o projeto pede.',
      },
    ],
    ctaText: 'Avaliar aderência para concessionária de veículos premium',
  },
  {
    slug: 'luxo-tecnologia',
    brand: 'Luxo e Tecnologia',
    metaTitle: 'IA para Concessionárias de Marcas de Luxo e Tecnologia | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para concessionárias de marcas de luxo e tecnologia: o lead de alto ticket atendido com contexto e a base acionada quando algo muda, com o Fykos.',
    keywords: [
      'IA concessionária luxo',
      'tecnologia dealer premium',
      'CRM marcas luxo Brasil',
      'leads concessionária alto ticket',
      'Fykos premium',
    ],
    answerSnippet:
      'No mercado de luxo, um lead respondido tarde ou com informação genérica é venda perdida. O Fykos, da Dexi Digital, atende com qualificação e contexto, passa ao consultor no momento certo e aponta quais oportunidades da base merecem atenção agora, para que o lead que custou caro vire receita.',
    desafios: [
      {
        titulo: 'Ticket alto exige atendimento impecável',
        descricao:
          'O comprador de veículo de luxo espera experiência premium em cada ponto de contato. Um lead respondido com atraso ou com informação genérica é um cliente perdido para a concorrência.',
      },
      {
        titulo: 'Portfólio complexo e segmentado',
        descricao:
          'Marcas de luxo têm muitos modelos e configurações. O consultor precisa saber o que o cliente quer antes de abrir a conversa.',
      },
      {
        titulo: 'Base de clientes parada',
        descricao:
          'A base de quem já comprou ou já pediu proposta guarda oportunidades que ninguém retoma: um modelo que chegou, uma condição que mudou. Sem alguém olhando, elas viram receita perdida.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento com o padrão da marca',
        descricao:
          'O Fykos atende com qualificação, contexto e o tom definido pela concessionária, e passa ao consultor quando a conversa pede uma pessoa.',
      },
      {
        titulo: 'Retomada da base quando algo muda',
        descricao:
          'Quando uma condição relevante muda, o Fykos identifica os clientes da base para quem ela importa e inicia a abordagem dentro das regras definidas.',
      },
      {
        titulo: 'Execução com regras e trilha',
        descricao:
          'Cada ação segue regras de negócio, exceções vão para uma pessoa e cada etapa fica registrada para a gestão acompanhar.',
      },
    ],
    resultadosEsperados: [
      'Lead de alto ticket atendido com contexto e no momento certo',
      'Oportunidades da base retomadas quando há motivo concreto',
      'Consultor dedicado a quem está perto de decidir',
      'Visão do que aconteceu com cada oportunidade',
    ],
    diferencialDexi:
      'O CRM organiza o funil e o histórico. O Fykos trabalha sobre eles: identifica a oportunidade que merece atenção agora, executa a próxima ação dentro de regras definidas e registra o que aconteceu. As decisões que pedem uma pessoa continuam com o consultor.',
    faq: [
      {
        question: 'O Fykos respeita o padrão de comunicação da marca?',
        answer:
          'O tom, os limites e as regras de cada conversa são definidos com a concessionária, e o que foge das regras vai para uma pessoa.',
      },
      {
        question: 'Consigo usar o Fykos junto com os sistemas da montadora?',
        answer:
          'O Fykos atua sobre os sistemas existentes, sem substituí-los. A Dexi tem capacidade de integrá-lo ao CRM, ao DMS ou a outros sistemas quando o projeto pede; com sistemas da montadora, depende do acesso que ela libera.',
      },
    ],
    ctaText: 'Avaliar aderência para concessionária premium',
  },
  {
    slug: 'performance-premium',
    brand: 'Performance Premium',
    metaTitle: 'IA para Concessionárias de Marcas de Performance | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para concessionárias de marcas de performance: o lead de alto ticket qualificado, com contexto para o vendedor e retomado quando algo muda, com o Fykos.',
    keywords: [
      'IA concessionária performance',
      'tecnologia dealer esportivo',
      'CRM marcas performance Brasil',
      'leads concessionária alto ticket',
      'Fykos performance',
    ],
    answerSnippet:
      'O comprador de performance decide por desempenho e status, e um lead de alto ticket que esfria custa caro. O Fykos, da Dexi Digital, qualifica cada contato, entrega ao vendedor o contexto da conversa e aponta quais oportunidades da base merecem atenção agora, para que a verba que trouxe o lead vire venda.',
    desafios: [
      {
        titulo: 'Lead premium não espera',
        descricao:
          'O comprador de performance tem muitas opções. A demora na primeira resposta ou um retorno genérico mandam o lead para outra concessionária.',
      },
      {
        titulo: 'Linha esportiva e linha regular: mundos diferentes',
        descricao:
          'Vender um sedã executivo pede argumentos de custo-benefício; vender um esportivo pede exclusividade. O atendimento precisa saber com quem está falando.',
      },
      {
        titulo: 'Troca de vendedores',
        descricao:
          'Cada vendedor que sai leva o que sabia sobre seus contatos. O vendedor novo precisa receber o lead com contexto, não do zero.',
      },
    ],
    solucoes: [
      {
        titulo: 'Qualificação com contexto',
        descricao:
          'O Fykos atende pelo WhatsApp, qualifica a intenção de compra e passa ao vendedor com o resumo da conversa, para que o primeiro contato humano já comece no ponto certo.',
      },
      {
        titulo: 'Retomada de oportunidades paradas',
        descricao:
          'Leads que esfriaram e propostas sem resposta voltam à pauta quando há motivo concreto: um modelo que chegou, uma condição nova. O Fykos aciona o contato dentro das regras da concessionária.',
      },
      {
        titulo: 'Prioridade clara para o time',
        descricao:
          'O time sabe qual oportunidade atacar primeiro, e a gestão acompanha o que foi feito, o que falhou e o motivo de cada escalonamento.',
      },
    ],
    resultadosEsperados: [
      'Lead de alto ticket qualificado antes de chegar ao vendedor',
      'Oportunidades paradas retomadas quando há motivo concreto',
      'Vendedor novo atendendo com o contexto de cada contato',
      'Visão do que aconteceu com cada oportunidade',
    ],
    diferencialDexi:
      'O CRM organiza o funil e o histórico de atendimento. O Fykos parte de outra pergunta: qual oportunidade merece atenção agora? Ele identifica, prioriza e executa a próxima ação dentro de regras definidas, para que o lead de alto ticket que custou caro não esfrie.',
    faq: [
      {
        question: 'O Fykos se conecta aos sistemas da montadora?',
        answer:
          'O Fykos atua sobre os sistemas da concessionária, sem substituí-los. A Dexi tem capacidade de integrá-lo ao CRM, ao DMS ou ao ERP quando o projeto pede; com plataformas da montadora, depende do acesso que o fabricante libera.',
      },
      {
        question: 'Quanto custa implementar o Fykos?',
        answer:
          'O investimento varia conforme o porte da operação. Na conversa de aderência, olhamos a operação atual e avaliamos se o Fykos faz sentido financeiro antes de qualquer compromisso.',
      },
    ],
    ctaText: 'Avaliar aderência para concessionária de performance',
  },
];
