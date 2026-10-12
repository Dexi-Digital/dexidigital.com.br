/**
 * Páginas por tipo de grupo automotivo.
 *
 * Out/2026: o texto anterior foi escrito por IA e trazia números e recursos sem
 * prova ("180 mil interações", "2-4 semanas", machine learning, dashboards em
 * tempo real, cross-sell automático). Reescrito só com o que
 * lib/regras-editoriais.ts afirma sobre o Fykos. `marcasAtendidas` mostra
 * características da operação, nunca segmentos que identifiquem clientes.
 */
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
    metaTitle: 'IA para Grupos Automotivos Multi-Marca | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para grupos automotivos multi-marca: oportunidades espalhadas entre marcas e unidades viram prioridade e ação, sem trocar o CRM, com o Fykos.',
    keywords: [
      'IA grupo automotivo multi-marca',
      'tecnologia grupo concessionárias',
      'CRM multi-marca automotivo',
      'Fykos grupo automotivo',
      'inteligência comercial grupo dealer',
    ],
    answerSnippet:
      'Num grupo multi-marca, a oportunidade fica espalhada: o cliente de uma marca pode ser o próximo comprador de outra, e o sinal está num sistema que ninguém olha. O Fykos, da Dexi Digital, trabalha sobre os dados que o grupo autoriza, aponta qual oportunidade merece atenção agora e executa a próxima ação com regras e supervisão, sem exigir que o grupo troque o CRM.',
    desafios: [
      {
        titulo: 'Silos de dados entre marcas',
        descricao:
          'Cada concessionária do grupo trabalha com seus próprios sistemas. O cliente que compra numa unidade e procura outra marca em outra loja é tratado como desconhecido, e a oportunidade passa despercebida.',
      },
      {
        titulo: 'Padronização sem perder a identidade de cada marca',
        descricao:
          'Cada marca tem seu tom de atendimento. O grupo precisa de padrão operacional sem homogeneizar a experiência de marca.',
      },
      {
        titulo: 'Visão gerencial consolidada',
        descricao:
          'A diretoria precisa saber o que acontece em todas as marcas e unidades. Com sistemas separados, cada relatório vira um projeto manual.',
      },
    ],
    solucoes: [
      {
        titulo: 'Camada sobre os sistemas do grupo',
        descricao:
          'O Fykos atua sobre os sistemas que cada unidade já usa. A Dexi integra as fontes que o projeto precisa e o grupo autoriza, sem exigir migração.',
      },
      {
        titulo: 'Oportunidades com contexto',
        descricao:
          'Quando um sinal muda, como estoque, condição comercial ou um cliente que voltou a demonstrar intenção, o Fykos identifica para quem isso importa e encaminha a próxima ação à unidade e ao vendedor certos.',
      },
      {
        titulo: 'Trilha para a diretoria',
        descricao:
          'Cada ação fica registrada com resultado, falha e motivo de escalonamento, e a diretoria acompanha o que aconteceu em cada oportunidade.',
      },
    ],
    resultadosEsperados: [
      'Oportunidades entre marcas e unidades que deixam de passar despercebidas',
      'Próxima ação encaminhada à unidade e ao vendedor certos',
      'Menos esforço manual para saber o que foi feito',
      'Padrão de execução sem perder o tom de cada marca',
    ],
    diferencialDexi:
      'Um grupo não é a soma de concessionárias. O valor está nas oportunidades que cruzam marcas e unidades, e elas só aparecem quando alguém olha os dados juntos. O Fykos faz esse trabalho sobre os sistemas existentes, com regras e supervisão.',
    marcasAtendidas: ['Várias marcas', 'Várias unidades', 'Sistemas diferentes por loja'],
    faq: [
      {
        question: 'A Dexi consegue trabalhar com sistemas diferentes em cada concessionária?',
        answer:
          'A Dexi tem capacidade de integrar o Fykos aos sistemas que o projeto precisa, inclusive quando cada unidade usa um diferente. Quais conexões entram é definido caso a caso, sem exigir migração.',
      },
      {
        question: 'Como é a implementação em um grupo com muitas lojas?',
        answer:
          'Por fases: começa por uma unidade ou um fluxo, valida o resultado e só então expande. O prazo depende dos sistemas e dos dados envolvidos.',
      },
    ],
    ctaText: 'Avaliar aderência para seu grupo automotivo',
  },
  {
    slug: 'grande-porte',
    nome: 'Grupos de Grande Porte',
    metaTitle: 'IA para Grupos Automotivos de Grande Porte | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para grupos automotivos de grande porte: volume alto de leads e base grande viram prioridade e ação com regras e trilha, com o Fykos.',
    keywords: [
      'IA grupo automotivo grande porte',
      'tecnologia grupo concessionárias escala',
      'CRM grupo automotivo volume',
      'Fykos escala automotiva',
      'inteligência comercial grande grupo',
    ],
    answerSnippet:
      'Em grupos de grande porte, o volume de leads e o tamanho da base escondem oportunidades que ninguém consegue acompanhar. O Fykos, da Dexi Digital, atende e qualifica quem chega, aponta quais oportunidades merecem atenção agora e executa a próxima ação com regras, supervisão e registro de cada etapa.',
    desafios: [
      {
        titulo: 'Volume sem perda de qualidade',
        descricao:
          'Grupos grandes recebem muitos leads por dia. Quando o atendimento não dá conta, a fila cresce, o retorno atrasa e o lead pago esfria.',
      },
      {
        titulo: 'Base grande e pouco trabalhada',
        descricao:
          'Quem já comprou ou já pediu proposta é a oportunidade mais barata do grupo, mas some no meio do volume. Sem alguém olhando, a próxima compra vai para outro lugar.',
      },
      {
        titulo: 'Troca de vendedores',
        descricao:
          'Cada vendedor que sai leva o que sabia sobre seus contatos. O processo comercial precisa guardar esse contexto e entregá-lo a quem chega.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento que absorve o volume',
        descricao:
          'O Fykos atende e qualifica os leads que chegam e passa ao vendedor com o contexto da conversa, para que o time trabalhe as oportunidades mais próximas de virar venda.',
      },
      {
        titulo: 'Reativação da base',
        descricao:
          'Quando uma condição relevante muda, o Fykos identifica os clientes da base para quem ela importa e inicia a abordagem dentro das regras do grupo.',
      },
      {
        titulo: 'Contexto para o vendedor',
        descricao:
          'Cada vendedor recebe a oportunidade com o histórico e o motivo do contato, e as exceções vão para uma pessoa com o caso descrito.',
      },
    ],
    resultadosEsperados: [
      'Lead atendido e qualificado mesmo nos picos de volume',
      'Clientes da base acionados quando há motivo concreto',
      'Vendedor novo trabalhando com o contexto de cada contato',
      'Registro do que aconteceu em cada oportunidade',
    ],
    diferencialDexi:
      'Mais leads costumam significar mais fila e mais trabalho manual. O Fykos inverte isso: o volume passa por regras, priorização e execução supervisionada, e o time comercial fica com as oportunidades que pedem uma pessoa.',
    marcasAtendidas: ['Volume alto de leads', 'Várias unidades', 'Base grande de clientes'],
    faq: [
      {
        question: 'O Fykos aguenta operações com muito volume de leads?',
        answer:
          'Foi desenhado para operações em que o volume já não cabe no acompanhamento manual. A capacidade necessária é avaliada com os números da sua operação na conversa de aderência.',
      },
      {
        question: 'Consigo acompanhar o que o Fykos fez?',
        answer:
          'Sim. Cada etapa relevante fica registrada (abordagens, respostas, falhas e motivos de escalonamento), e o grupo acompanha o que aconteceu em cada oportunidade.',
      },
    ],
    ctaText: 'Avaliar aderência para seu grupo',
  },
  {
    slug: 'premium-especializado',
    nome: 'Grupos Premium Especializados',
    metaTitle: 'IA para Grupos Automotivos Premium | Fykos | Dexi Digital',
    metaDescription:
      'Inteligência e execução comercial para grupos automotivos premium: o lead de alto ticket atendido no padrão de cada marca e as oportunidades da base acionadas no momento certo, com o Fykos.',
    keywords: [
      'IA grupo automotivo premium',
      'tecnologia grupo concessionárias premium',
      'CRM grupo premium automotivo',
      'Fykos grupo premium',
      'inteligência artificial grupo dealer',
    ],
    answerSnippet:
      'Em grupos premium, cada oportunidade vale muito e cada marca tem seu padrão de atendimento. O Fykos, da Dexi Digital, atende com qualificação e contexto, passa ao consultor no momento certo e aponta quais oportunidades da base merecem atenção agora, para que o lead de alto ticket que custou caro vire receita.',
    desafios: [
      {
        titulo: 'Experiência de marca premium no digital',
        descricao:
          'O comprador de veículos premium espera no digital a mesma sofisticação do showroom. Um robô de respostas genéricas prejudica a percepção de marca.',
      },
      {
        titulo: 'Multi-marca premium com perfis distintos',
        descricao:
          'Cada marca premium atrai um perfil de comprador: um busca performance, outro busca status, outro busca design e exclusividade. Cada marca exige comunicação própria.',
      },
      {
        titulo: 'Valor do cliente dentro do grupo',
        descricao:
          'O cliente que hoje tem um esportivo pode ser o próximo comprador de um SUV de luxo. Sem os dados conectados, essa oportunidade é invisível.',
      },
    ],
    solucoes: [
      {
        titulo: 'Atendimento no padrão de cada marca',
        descricao:
          'O Fykos atende com o tom e as regras definidos para cada marca do grupo, qualifica a conversa e passa ao consultor quando ela pede uma pessoa.',
      },
      {
        titulo: 'Oportunidades em todo o grupo',
        descricao:
          'Quando um sinal muda, como um modelo que chegou ou um cliente que voltou a demonstrar intenção, o Fykos identifica a oportunidade e encaminha a próxima ação ao consultor certo, em qualquer marca do grupo.',
      },
      {
        titulo: 'Trilha para a diretoria',
        descricao:
          'Cada ação fica registrada com resultado, falha e motivo de escalonamento. A diretoria acompanha o que aconteceu em cada marca e unidade.',
      },
    ],
    resultadosEsperados: [
      'Lead premium atendido com contexto e no padrão da marca',
      'Oportunidades entre marcas que deixam de passar despercebidas',
      'Consultor dedicado a quem está perto de decidir',
      'Registro do que aconteceu em cada oportunidade',
    ],
    diferencialDexi:
      'Vender um esportivo é diferente de vender um carro de volume, e cada marca premium tem sua forma de falar com o cliente. O Fykos executa dentro das regras e do tom definidos para cada marca, e deixa com o consultor as decisões que pedem uma pessoa.',
    marcasAtendidas: ['Alto ticket', 'Várias marcas premium', 'Várias unidades'],
    faq: [
      {
        question: 'O Fykos mantém a identidade de cada marca?',
        answer:
          'O tom, os limites e as regras de cada conversa são definidos com o grupo, marca a marca, e o que foge das regras vai para uma pessoa.',
      },
      {
        question: 'Como o Fykos encontra oportunidades entre as marcas do grupo?',
        answer:
          'A partir dos dados que o grupo autoriza conectar, como CRM, estoque e histórico de atendimento. Quando aparece um sinal relevante, o Fykos prioriza a oportunidade e encaminha a próxima ação ao consultor certo.',
      },
    ],
    ctaText: 'Avaliar aderência para seu grupo premium',
  },
];
