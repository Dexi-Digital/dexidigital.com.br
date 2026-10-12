/**
 * Comparativos de categoria.
 *
 * Out/2026: as duas versões anteriores (Dexi vs Syonet e Dexi vs CRM
 * tradicional) foram escritas por IA e traziam números e recursos sem prova
 * ("< 30 segundos", "qualquer DMS", "40% dos leads", "perfil psicológico").
 * O comparativo com o Syonet saiu (redirect em next.config.ts) e os textos
 * abaixo usam só o que o posicionamento aprovado afirma sobre o Fykos.
 *
 * Regras para um comparativo novo:
 * - Sobre o Fykos, só o que está em produção (ver lib/regras-editoriais.ts).
 * - Sobre um concorrente com nome, só fato tirado do material público dele, com
 *   o link em `fontes` e a data da consulta. Sem isso, compare categorias.
 * - Nada de número sem fonte, superioridade sem prova ou exclusividade.
 */
export interface ComparativoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  /** Data (AAAA-MM-DD) da última revisão do texto, mostrada na página. */
  revisadoEm: string;
  colunas: { dexi: string; outro: string };
  sections: { heading: string; content: string }[];
  tabelaComparativa: { criterio: string; dexi: string; concorrente: string }[];
  faq: { question: string; answer: string }[];
  fontes: { titulo: string; url: string; consultadoEm: string }[];
  ctaText: string;
}

export const COMPARATIVOS: ComparativoPage[] = [
  {
    slug: 'robo-de-atendimento-vs-inteligencia-comercial',
    title: 'Robô de atendimento ou inteligência comercial?',
    metaTitle: 'Robô de atendimento vs inteligência comercial: a diferença | Dexi Digital',
    metaDescription:
      'Robô de atendimento responde quem chega. Inteligência comercial identifica qual oportunidade merece atenção agora e executa a próxima ação. Entenda quando cada um faz sentido.',
    keywords: [
      'robô de atendimento vs inteligência comercial',
      'chatbot ou inteligência comercial',
      'inteligência comercial automotiva',
      'chatbot concessionária',
      'execução comercial com IA',
    ],
    answerSnippet:
      'Um robô de atendimento responde quem chega: tira dúvidas, coleta dados e passa o contato adiante. Inteligência comercial começa antes da conversa: cruza CRM, estoque e histórico para identificar qual oportunidade merece atenção agora, prioriza a próxima ação e acompanha o resultado. A diferença pesa quando cada oportunidade vale muito.',
    revisadoEm: '2026-10-12',
    colunas: { dexi: 'Inteligência comercial (Fykos)', outro: 'Robô de atendimento' },
    sections: [
      {
        heading: 'O que um robô de atendimento resolve',
        content:
          'O robô de atendimento existe para dar conta do volume de conversas: responde perguntas frequentes, atende fora do horário, coleta dados básicos e encaminha o contato para a equipe. Quando o problema da operação é fila de mensagens repetidas, ele resolve bem.',
      },
      {
        heading: 'O que fica de fora da conversa',
        content:
          'O robô age quando o cliente escreve. Mas boa parte das oportunidades de alto valor não chega como mensagem: uma mudança de estoque, uma condição comercial nova, um contato que voltou a demonstrar intenção. Esses sinais ficam espalhados entre sistemas e equipes, e ninguém é avisado. Quando a oportunidade é valiosa, o custo não é uma mensagem sem resposta: é uma decisão comercial que não aconteceu.',
      },
      {
        heading: 'Como a inteligência comercial trabalha',
        content:
          'O Fykos atua sobre os sistemas comerciais que a operação já usa. Detecta sinais de estoque, CRM e histórico de atendimento; prioriza as oportunidades relevantes com contexto e critérios comerciais; executa a próxima ação (inicia abordagens, qualifica, notifica responsáveis e encaminha exceções ao humano); e verifica resultados, falhas e motivos de escalonamento. O atendimento receptivo é uma das aplicações, não o produto inteiro.',
      },
      {
        heading: 'Regras, supervisão e trilha',
        content:
          'A inteligência interpreta o contexto, e conectores, regras e validações controlam a execução. Cada etapa relevante fica registrada e pode ser acompanhada e auditada. Integrações, observabilidade, limites e tratamento de exceções ajudam a reduzir falhas; nenhum sistema elimina todo risco, e a operação sabe o que aconteceu em cada caso.',
      },
      {
        heading: 'Quando cada um faz sentido',
        content:
          'Se o desafio é responder um volume alto de perguntas parecidas, um robô de atendimento costuma bastar. Se cada oportunidade vale muito e os sinais que importam estão em mais de um sistema, como em grupos automotivos, a inteligência comercial é o que evita a decisão perdida. A aplicação depende de volume, dados disponíveis e viabilidade de implementação, e é isso que a conversa de aderência avalia.',
      },
    ],
    tabelaComparativa: [
      {
        criterio: 'Quando age',
        dexi: 'Quando um sinal muda: estoque, condição comercial, intenção do contato',
        concorrente: 'Quando o cliente manda mensagem',
      },
      {
        criterio: 'Dados que usa',
        dexi: 'CRM, estoque, histórico e fontes operacionais autorizadas',
        concorrente: 'Em geral, a conversa e o que o cliente informa',
      },
      {
        criterio: 'Objetivo',
        dexi: 'Priorizar e executar a próxima ação comercial',
        concorrente: 'Responder e encaminhar o atendimento',
      },
      {
        criterio: 'Papel do time',
        dexi: 'Recebe oportunidades e exceções com contexto',
        concorrente: 'Recebe o contato depois da triagem',
      },
      {
        criterio: 'Acompanhamento',
        dexi: 'Registra eventos, falhas, resultados e motivos de escalonamento',
        concorrente: 'Registra a conversa',
      },
    ],
    faq: [
      {
        question: 'O Fykos também faz atendimento receptivo?',
        answer:
          'Sim. Entrada de demanda, com qualificação, contexto e transição ao vendedor, é uma das aplicações. A diferença é que o atendimento é uma parte do trabalho: o Fykos também age quando ninguém escreveu, a partir dos sinais da operação.',
      },
      {
        question: 'Preciso trocar o CRM ou o robô que já uso?',
        answer:
          'Não é pré-requisito. O Fykos atua sobre os sistemas comerciais existentes, sem exigir que a empresa substitua o CRM. O que muda e o que fica é avaliado na conversa de aderência.',
      },
      {
        question: 'Para que tipo de operação faz sentido?',
        answer:
          'Operações em que cada oportunidade tem alto valor e a decisão comercial depende de dados em mais de um sistema, como grupos automotivos. A aplicação depende de volume, dados disponíveis e viabilidade de implementação.',
      },
    ],
    fontes: [],
    ctaText: 'Avaliar aderência da minha operação',
  },
  {
    slug: 'dexi-vs-crm-tradicional',
    title: 'CRM e inteligência comercial: o que muda',
    metaTitle: 'CRM vs inteligência comercial: o que muda na operação | Dexi Digital',
    metaDescription:
      'O CRM registra o que aconteceu. A inteligência comercial do Fykos identifica o que merece atenção agora e executa a próxima ação, sem substituir o CRM.',
    keywords: [
      'CRM vs inteligência comercial',
      'CRM automotivo',
      'inteligência comercial sobre o CRM',
      'alternativa ao CRM tradicional',
      'execução comercial com IA',
    ],
    answerSnippet:
      'O CRM registra o que aconteceu: leads, atendimentos, etapas do funil. A inteligência comercial do Fykos trabalha sobre esse registro: observa dados e eventos, identifica situações que exigem atenção, orienta a próxima ação e executa processos dentro de regras definidas. Não substitui o CRM; atua sobre os sistemas que a operação já usa.',
    revisadoEm: '2026-10-12',
    colunas: { dexi: 'Inteligência comercial (Fykos)', outro: 'CRM' },
    sections: [
      {
        heading: 'O que o CRM faz bem',
        content:
          'O CRM é o sistema de registro da operação comercial: guarda o histórico de cada cliente, organiza o funil e gera os relatórios que a gestão acompanha. Sem ele, não há memória comercial. Nada aqui sugere tirar o CRM do lugar.',
      },
      {
        heading: 'Onde a oportunidade escapa',
        content:
          'O CRM registra o que aconteceu. Mas quem identifica o que merece atenção agora? Uma mudança de estoque, uma condição comercial, um contato que voltou a demonstrar intenção: sinais importantes podem passar despercebidos entre sistemas e equipes, porque o CRM espera que alguém olhe para eles.',
      },
      {
        heading: 'O que a camada de inteligência acrescenta',
        content:
          'O Fykos conecta CRM, estoque, histórico e fontes operacionais autorizadas para reconhecer oportunidades com contexto. Aplica regras de negócio para priorizar a próxima ação, aciona fluxos e pessoas, e registra eventos, falhas e resultados para permitir análise e melhoria. O time comercial continua decidindo; passa a decidir sobre o que importa.',
      },
      {
        heading: 'Quando faz sentido',
        content:
          'Em operações nas quais cada oportunidade vale muito e a decisão comercial depende de integração, continuidade e controle, como grupos automotivos. A aplicação depende de volume, dados disponíveis e viabilidade de implementação, e a conversa de aderência existe para avaliar isso antes de qualquer compromisso.',
      },
    ],
    tabelaComparativa: [
      {
        criterio: 'Papel na operação',
        dexi: 'Identifica o que merece atenção e aciona a próxima ação',
        concorrente: 'Registra o que aconteceu e organiza o funil',
      },
      {
        criterio: 'Quem inicia a ação',
        dexi: 'O sistema, dentro de regras definidas, com o humano nas exceções',
        concorrente: 'A equipe, a partir do que está registrado',
      },
      {
        criterio: 'Dados que cruza',
        dexi: 'CRM, estoque, histórico e fontes operacionais autorizadas',
        concorrente: 'O que a equipe registra e as integrações do próprio CRM',
      },
      {
        criterio: 'Rastreabilidade',
        dexi: 'Eventos, falhas, resultados e motivos de escalonamento',
        concorrente: 'Histórico de atendimento',
      },
      {
        criterio: 'Relação entre os dois',
        dexi: 'Atua sobre o CRM existente',
        concorrente: 'Continua como sistema de registro',
      },
    ],
    faq: [
      {
        question: 'Preciso abandonar meu CRM atual?',
        answer:
          'Não. O Fykos atua sobre os sistemas comerciais existentes, sem exigir que a empresa substitua o CRM.',
      },
      {
        question: 'A IA substitui o vendedor?',
        answer:
          'Não. O Fykos prioriza oportunidades, executa processos dentro de regras definidas e encaminha exceções ao humano quando necessário. A decisão comercial continua com o time.',
      },
      {
        question: 'Como saber se faz sentido para a minha operação?',
        answer:
          'Depende de volume, dados disponíveis e viabilidade de implementação. A conversa de aderência olha a operação atual e avalia se existe uma oportunidade concreta, antes de qualquer compromisso.',
      },
    ],
    fontes: [],
    ctaText: 'Avaliar aderência da IA à minha operação',
  },
];
