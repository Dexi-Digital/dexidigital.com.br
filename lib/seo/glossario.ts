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
    slug: 'execucao-autonoma-ia',
    title: 'Execução Autônoma de IA',
    category: 'tecnologia',
    metaTitle: 'O que é Execução Autônoma de IA | Glossário IA Automotiva | Dexi Digital',
    metaDescription:
      'Execução autônoma de IA é quando o sistema, além de avisar, executa a próxima ação comercial dentro de regras definidas, com o humano nas exceções.',
    answerSnippet:
      'Execução autônoma de IA é a capacidade de um sistema não só avisar que algo aconteceu, mas executar a próxima ação comercial: responder, qualificar, iniciar uma abordagem ou notificar o responsável. Feita com responsabilidade, ela roda dentro de regras definidas, encaminha exceções a uma pessoa e deixa registro de cada etapa.',
    longDescription: `## O que é execução autônoma de IA

Um CRM registra o que aconteceu e, no máximo, dispara um alerta ("novo lead recebido"). Na execução autônoma, o sistema age: interpreta o contexto, escolhe a próxima ação dentro das regras do negócio e executa, deixando para o time as decisões que pedem uma pessoa.

## Como o Fykos aplica

O Fykos, produto da Dexi Digital, trabalha em quatro etapas:

- **Detectar**: conecta sinais de estoque, CRM e histórico de atendimento.
- **Priorizar**: distingue as oportunidades relevantes usando contexto e critérios comerciais.
- **Executar**: inicia abordagens, qualifica, notifica responsáveis e encaminha exceções ao humano.
- **Verificar**: acompanha resultados, falhas e motivos de escalonamento, com rastreabilidade.

## Por que importa no automotivo

Quando cada oportunidade vale muito, depender de alguém lembrar de olhar o sistema custa vendas. A execução autônoma encurta o caminho entre o sinal e a ação, sem tirar do time comercial a decisão sobre a venda.`,
    faq: [
      {
        question: 'A execução autônoma de IA substitui vendedores?',
        answer:
          'Não. Ela assume o trabalho operacional (responder, qualificar, iniciar contato, notificar) e encaminha ao vendedor as oportunidades e as exceções com contexto. A decisão comercial continua com o time.',
      },
      {
        question: 'Qual a diferença entre automação e execução autônoma de IA?',
        answer:
          'Automação segue regras fixas (se o lead chega, envia um e-mail). Na execução autônoma, a IA interpreta o contexto para escolher a próxima ação, e regras, validações e supervisão controlam o que ela pode fazer.',
      },
    ],
    relatedTerms: ['fykos', 'lead-scoring-automotivo', 'perfilamento-inteligente'],
  },
  {
    slug: 'fykos',
    title: 'Fykos',
    category: 'tecnologia',
    metaTitle: 'O que é o Fykos | Inteligência e execução comercial | Dexi Digital',
    metaDescription:
      'Fykos é o produto da Dexi Digital: inteligência e execução comercial sobre os sistemas que a empresa já usa, sem trocar o CRM.',
    answerSnippet:
      'Fykos é o produto da Dexi Digital para inteligência e execução comercial. Atua sobre os sistemas comerciais que a empresa já usa: observa dados e eventos, identifica situações que exigem atenção, orienta a próxima ação e executa processos dentro de regras definidas, com cada etapa relevante registrada. Não exige trocar o CRM.',
    longDescription: `## Fykos: inteligência e execução comercial

O Fykos é o produto da Dexi Digital, empresa de tecnologia para decisões comerciais de alto valor. Foi feito para operações em que cada oportunidade vale muito, como grupos automotivos, e em que a decisão comercial depende de dados espalhados em mais de um sistema.

## O que ele faz

- **Detectar**: conecta sinais de estoque, CRM e histórico de atendimento.
- **Priorizar**: distingue oportunidades relevantes com contexto e critérios comerciais.
- **Executar**: inicia abordagens, qualifica, notifica responsáveis e encaminha exceções ao humano.
- **Verificar**: acompanha resultados, falhas e motivos de escalonamento.

## Aplicações no automotivo

- **Entrada de demanda**: atendimento receptivo com qualificação, contexto e transição ao vendedor.
- **Carteira e oportunidades**: reativação da carteira quando uma condição relevante muda.
- **Priorização do time**: apoio ao time comercial para decidir onde agir primeiro.

## Integração

A Dexi tem capacidade de integrar o Fykos ao CRM, DMS ou ERP da operação quando o projeto pede. A aplicação depende de volume, dados disponíveis e viabilidade de implementação, e é isso que a conversa de aderência avalia.`,
    faq: [
      {
        question: 'O Fykos é um chatbot?',
        answer:
          'Não. O atendimento receptivo é uma das aplicações, mas o Fykos também age quando ninguém escreveu, a partir dos sinais da operação, e registra o que fez em cada etapa.',
      },
      {
        question: 'Preciso trocar meu CRM para usar o Fykos?',
        answer:
          'Não. O Fykos atua sobre os sistemas comerciais existentes, sem exigir que a empresa substitua o CRM.',
      },
    ],
    relatedTerms: ['execucao-autonoma-ia', 'dms-automotivo', 'shadow-crm'],
  },
  {
    slug: 'perfilamento-inteligente',
    title: 'Perfilamento Inteligente de Leads',
    category: 'vendas',
    metaTitle: 'Perfilamento Inteligente de Leads | IA Automotiva | Dexi Digital',
    metaDescription:
      'Perfilamento de leads é organizar cada contato por intenção, urgência e interesse, a partir do que ele diz e do histórico, para o vendedor chegar com contexto.',
    answerSnippet:
      'Perfilamento inteligente de leads é organizar cada contato por intenção de compra, urgência, faixa de interesse e canal preferido, a partir do que ele diz na conversa e do histórico com a empresa. O objetivo é o vendedor chegar à conversa com contexto, em vez de receber só nome, telefone e veículo de interesse.',
    longDescription: `## O que é perfilamento de leads

O cadastro básico de um lead (nome, telefone, veículo de interesse) diz quem ele é, mas pouco sobre o momento dele. Perfilar é juntar o que o próprio lead disse e o histórico de relacionamento para entender o que ele procura e quão perto está de decidir.

## Dimensões comuns do perfil

- **Intenção**: compra próxima, pesquisa ativa ou planejamento futuro.
- **Motivação**: o que pesa na decisão, como preço, condição de pagamento, modelo ou prazo de entrega.
- **Faixa de interesse**: o tipo de veículo e o ticket que ele está considerando.
- **Canal**: onde ele prefere ser atendido.

## Onde o Fykos entra

No Fykos, a qualificação acontece no atendimento receptivo: o contexto levantado na conversa vai junto quando o lead passa ao vendedor. Os critérios são definidos com a operação, não por um perfil genérico.

## Impacto na venda

O vendedor que recebe o lead com contexto começa a conversa do ponto em que ela parou, sem repetir perguntas que o cliente já respondeu.`,
    faq: [
      {
        question: 'Perfilar um lead é o mesmo que fazer lead scoring?',
        answer:
          'São complementares. O perfil descreve o lead (intenção, motivação, interesse); o scoring transforma isso numa ordem de prioridade para o time.',
      },
    ],
    relatedTerms: ['lead-scoring-automotivo', 'execucao-autonoma-ia', 'fykos'],
  },
  {
    slug: 'lead-scoring-automotivo',
    title: 'Lead Scoring Automotivo',
    category: 'vendas',
    metaTitle: 'Lead Scoring para Concessionárias | IA Automotiva | Dexi Digital',
    metaDescription:
      'Lead scoring automotivo: como priorizar os leads da concessionária por intenção, ticket e urgência, e o que muda quando a pontuação acompanha cada interação.',
    answerSnippet:
      'Lead scoring automotivo é atribuir a cada lead da concessionária uma pontuação de prioridade com base em sinais de intenção, potencial de ticket e urgência da compra. Com IA, a pontuação pode ser revista a cada nova interação, em vez de ficar presa ao que o lead preencheu no formulário.',
    longDescription: `## Lead scoring no automotivo

Lead scoring é a prática de pontuar cada lead para decidir quem atender primeiro. No automotivo isso pesa porque o ticket é alto: um lead quente esperando na fila custa caro.

## Critérios comuns

- **Engajamento**: quantas interações, em quais canais e com que frequência.
- **Intenção declarada**: pedido de test drive, pergunta sobre financiamento ou sobre troca são sinais fortes.
- **Histórico**: relacionamento anterior com a concessionária, quando disponível.
- **Origem**: o canal por onde o lead chegou.

## Pontuação fixa e pontuação que acompanha o lead

Na pontuação fixa, cada ação vale sempre o mesmo (preencheu formulário, ganha pontos). Na pontuação que acompanha o lead, o peso de cada sinal depende do contexto e a prioridade é revista quando ele volta a interagir.

## Onde o Fykos entra

O Fykos prioriza oportunidades usando contexto e critérios comerciais definidos com a operação, e apoia o time a decidir onde agir primeiro.`,
    faq: [
      {
        question: 'Como o lead scoring ajuda o vendedor?',
        answer:
          'O vendedor sabe quem atender primeiro e gasta o tempo onde a chance de venda é maior, em vez de seguir só a ordem de chegada.',
      },
    ],
    relatedTerms: ['perfilamento-inteligente', 'execucao-autonoma-ia', 'fykos'],
  },
  {
    slug: 'dms-automotivo',
    title: 'DMS (Dealer Management System)',
    category: 'operacoes',
    metaTitle: 'O que é DMS Automotivo | Sistema de Gestão | Dexi Digital',
    metaDescription:
      'DMS (Dealer Management System) é o sistema de gestão central da concessionária: estoque, vendas, financeiro, oficina e peças. Entenda o papel dele na venda com IA.',
    answerSnippet:
      'DMS (Dealer Management System) é o sistema de gestão central de uma concessionária, responsável por estoque, vendas, financeiro, oficina e peças. Na venda com IA, ele é uma fonte de sinais: uma mudança de estoque ou um evento de pós-venda pode indicar uma oportunidade comercial.',
    longDescription: `## O que é DMS

O Dealer Management System é o coração operacional da concessionária. Controla desde o estoque de veículos até a agenda da oficina, passando por financeiro, F&I (Finance & Insurance) e gestão de peças.

## DMS no Brasil

O mercado brasileiro tem sistemas proprietários de montadoras e soluções de terceiros. É comum um grupo conviver com mais de um sistema ao mesmo tempo: DMS, CRM e ferramentas de atendimento, cada um com uma parte da informação.

## DMS e IA

O DMS registra a operação. Uma camada de inteligência sobre ele pode transformar eventos (um veículo que entrou no estoque, uma condição comercial que mudou) em ação comercial. A Dexi tem capacidade de integrar o Fykos ao DMS da operação quando o projeto pede, sem substituir o sistema.`,
    faq: [
      {
        question: 'O Fykos substitui o DMS?',
        answer:
          'Não. O Fykos atua sobre os sistemas existentes. Quando o projeto pede, a Dexi integra o Fykos ao DMS da operação para usar os dados que ele já gerencia.',
      },
    ],
    relatedTerms: ['fykos', 'shadow-crm', 'execucao-autonoma-ia'],
  },
  {
    slug: 'shadow-crm',
    title: 'Shadow CRM',
    category: 'dados',
    metaTitle: 'O que é Shadow CRM | Glossário IA Automotiva | Dexi Digital',
    metaDescription:
      'Shadow CRM é o registro paralelo que a operação mantém fora do CRM oficial: WhatsApp pessoal, planilhas e anotações. Entenda o custo para a gestão comercial.',
    answerSnippet:
      'Shadow CRM é o registro paralelo que a operação comercial mantém fora do CRM oficial: conversas no WhatsApp pessoal do vendedor, planilhas, anotações. A venda acontece, mas o sistema não vê, e a gestão perde o histórico e os sinais de que precisa para decidir.',
    longDescription: `## O que é shadow CRM

Quando registrar no CRM dá mais trabalho do que ajuda, o vendedor passa a tocar a venda por fora: combina no WhatsApp pessoal, controla retornos numa planilha, guarda o histórico na memória. O CRM oficial vira um cadastro desatualizado, e a operação real acontece numa sombra que ninguém consegue consultar.

## Por que custa caro

- **Histórico que vai embora**: quando o vendedor sai, a carteira dele sai junto.
- **Sinais perdidos**: o cliente que voltou a demonstrar interesse não aparece para ninguém além de quem conversou com ele.
- **Gestão sem visão**: os relatórios do CRM descrevem uma operação que não é a real.

## Como reduzir

Proibir o canal paralelo não resolve enquanto o motivo continua: o sistema oficial precisa dar mais retorno do que trabalho. O Fykos atua sobre os sistemas que a operação já usa e registra eventos, falhas, resultados e motivos de escalonamento; quando o atendimento passa por ele, o contexto fica disponível para o time e para a gestão.`,
    faq: [
      {
        question: 'Shadow CRM é culpa do vendedor?',
        answer:
          'Costuma ser sintoma de processo: o vendedor usa o caminho que dá menos trabalho. Se registrar no sistema não traz retorno para quem vende, o registro paralelo volta.',
      },
    ],
    relatedTerms: ['dms-automotivo', 'fykos', 'execucao-autonoma-ia'],
  },
];

export function findGlossarioTerm(slug: string) {
  return GLOSSARIO_TERMS.find((t) => t.slug === slug);
}
