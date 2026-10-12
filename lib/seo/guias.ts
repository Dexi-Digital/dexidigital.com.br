/**
 * Guias (/guias/<slug>).
 *
 * Out/2026: as versões anteriores foram escritas por IA e traziam estatística
 * sem fonte ("92% pesquisam online", "R$ 350 bilhões/ano"), números do Fykos
 * ("< 30 segundos", "4 mensagens por sessão", "10 anos"), recursos que não
 * existem (perfil psicológico, RAG, fluxo de caixa preditivo) e comparação com
 * CRM citado por nome. Os textos abaixo usam só o que lib/regras-editoriais.ts
 * afirma sobre o Fykos e tratam o mercado sem número.
 */
export interface GuiaPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  answerSnippet: string;
  sections: { heading: string; content: string }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export const GUIAS: GuiaPage[] = [
  {
    slug: 'transformacao-digital-concessionaria',
    title: 'Transformação Digital para Concessionárias',
    metaTitle: 'Transformação Digital para Concessionárias | Guia | Dexi Digital',
    metaDescription:
      'O que a transformação digital muda de verdade numa concessionária: dados, atendimento e decisão comercial. Princípios para começar pelo que traz receita.',
    keywords: [
      'transformação digital concessionária',
      'digitalização concessionária',
      'concessionária digital',
      'modernização concessionária',
      'tecnologia automotiva dealer',
    ],
    answerSnippet:
      'Transformação digital em concessionária não é ter um site bonito nem trocar de sistema. É fazer os dados que a operação já tem virarem decisão comercial: responder o lead que custou caro, priorizar o que merece atenção agora e acompanhar o resultado de cada ação.',
    sections: [
      {
        heading: 'Por que agora',
        content:
          'O comprador chega à concessionária depois de pesquisar online e espera resposta rápida pelo canal que escolheu, muitas vezes o WhatsApp. Cada lead tem custo de mídia por trás, e a operação que demora a responder ou perde o contexto entre canais paga por oportunidades que não viram venda.',
      },
      {
        heading: 'Os quatro pilares da concessionária digital',
        content:
          'Dados conectados: o que está no CRM, no estoque e no histórico de atendimento precisa conversar. Atendimento com contexto: quem responde sabe quem é o cliente e o que ele procura. Prioridade clara: o time sabe onde agir primeiro. Decisão acompanhada: cada ação fica registrada, com resultado, falha e motivo.',
      },
      {
        heading: 'Por onde começar',
        content:
          'Comece pelo ponto em que a receita escapa hoje. Em muitas operações, é o lead que chega e não recebe resposta nem acompanhamento. Atacar esse ponto primeiro permite medir o efeito na venda antes de ampliar o projeto.',
      },
      {
        heading: 'Erros comuns na transformação digital',
        content:
          'Erro 1: comprar tecnologia sem processo (CRM sem processo definido é planilha cara). Erro 2: automatizar o processo errado (se o processo manual é ruim, automatizar amplia o problema). Erro 3: ignorar o time (tecnologia sem adesão de quem vende é investimento perdido).',
      },
      {
        heading: 'Como avaliar o investimento',
        content:
          'A conta certa compara o custo da tecnologia com a receita que hoje escapa: leads pagos sem resposta, clientes da carteira que ninguém retomou, oportunidades que dependem de alguém lembrar. Se essa perda é maior que o investimento, o projeto faz sentido. A conversa de aderência existe para levantar esses números com os dados da própria operação.',
      },
    ],
    faq: [
      {
        question: 'Quanto tempo leva a transformação digital de uma concessionária?',
        answer:
          'Depende de volume, dados disponíveis e viabilidade de implementação. Começar por um ponto de perda de receita permite medir o efeito antes de ampliar; o prazo de cada etapa é definido na conversa de aderência.',
      },
      {
        question: 'Preciso trocar todos os meus sistemas?',
        answer:
          'Não. A abordagem da Dexi é agregar inteligência sobre os sistemas que a operação já usa, sem exigir a troca do CRM. Quando o projeto pede, a Dexi integra o Fykos ao CRM, ao DMS ou ao ERP da operação.',
      },
    ],
    ctaText: 'Avaliar aderência da minha operação',
  },
  {
    slug: 'ia-automotiva-brasil',
    title: 'IA Automotiva no Brasil: onde ela muda a venda',
    metaTitle: 'IA Automotiva no Brasil | O que muda na venda | Dexi Digital',
    metaDescription:
      'Onde a inteligência artificial muda a venda de veículos: atendimento com contexto, prioridade para o time e retomada de oportunidades, com regras e supervisão.',
    keywords: [
      'IA automotiva Brasil',
      'inteligência artificial concessionária',
      'IA para venda de carros',
      'tecnologia automotiva IA',
      'futuro concessionária IA',
    ],
    answerSnippet:
      'No varejo automotivo, cada oportunidade vale muito e os sinais que importam ficam espalhados entre CRM, estoque e conversas. A IA aplicada à venda junta esses sinais, identifica o que merece atenção agora e executa a próxima ação dentro de regras definidas. A Dexi atua nessa frente com o Fykos.',
    sections: [
      {
        heading: 'O que mudou no comprador',
        content:
          'O comprador chega à loja depois de pesquisar online, compara condições e espera resposta rápida. Ao mesmo tempo, muitas operações ainda dependem de alguém ler o lead, procurar o veículo e lembrar do retorno. A distância entre o que o comprador espera e o que a operação entrega é onde a venda escapa.',
      },
      {
        heading: 'Onde a IA ajuda de verdade',
        content:
          'Atender o lead que chega com qualificação e contexto, e passar ao vendedor no momento certo. Ajudar o time a priorizar as oportunidades com mais chance de virar venda. Retomar contatos da carteira quando uma condição relevante muda, como estoque ou condição comercial. A IA não substitui o vendedor: tira dele o trabalho de garimpar e deixa a negociação com quem sabe negociar.',
      },
      {
        heading: 'Regras, supervisão e trilha',
        content:
          'IA na venda precisa de limite. A inteligência interpreta o contexto, e conectores, regras e validações controlam a execução. Cada etapa relevante fica registrada e pode ser auditada, e as exceções vão para o humano. Nenhum sistema elimina todo risco; a operação precisa saber o que aconteceu em cada caso.',
      },
      {
        heading: 'O papel da Dexi Digital',
        content:
          'A Dexi desenvolve sistemas que transformam dados da operação em prioridades e ações comerciais. O Fykos, produto da Dexi, detecta sinais, prioriza oportunidades, executa a próxima ação e verifica o resultado, atuando sobre os sistemas que a operação já usa, sem exigir a troca do CRM.',
      },
    ],
    faq: [
      {
        question: 'A IA funciona para concessionárias de veículos populares?',
        answer:
          'Depende do valor por oportunidade, do volume e dos dados disponíveis. O Fykos foi pensado para operações em que cada oportunidade vale muito; a conversa de aderência avalia se faz sentido financeiro para a sua.',
      },
      {
        question: 'A Dexi atende apenas marcas premium?',
        answer:
          'Não. O foco são operações em que cada oportunidade tem alto valor e a decisão comercial depende de dados em mais de um sistema. A aplicação depende de volume, dados disponíveis e viabilidade de implementação.',
      },
    ],
    ctaText: 'Avaliar aderência da minha operação',
  },
  {
    slug: 'como-escolher-crm-automotivo',
    title: 'Como Escolher o CRM Automotivo Certo',
    metaTitle: 'Como Escolher CRM Automotivo | Guia de Decisão | Dexi Digital',
    metaDescription:
      'Critérios para escolher o CRM da concessionária e o que nenhum CRM faz sozinho: identificar qual oportunidade merece atenção agora.',
    keywords: [
      'escolher CRM automotivo',
      'melhor CRM concessionária',
      'CRM automotivo comparativo',
      'CRM concessionária avaliação',
    ],
    answerSnippet:
      'Escolha o CRM automotivo pelo processo comercial que ele precisa sustentar, pela adesão do time e pela qualidade dos dados que ele guarda. A Dexi não vende CRM: o Fykos atua sobre o CRM que a operação escolher. Por isso este guia trata do que o CRM precisa fazer bem e do que nenhum CRM faz sozinho.',
    sections: [
      {
        heading: 'Critérios que importam',
        content:
          'Aderência ao processo: o CRM precisa refletir como a loja vende, do lead à entrega. Adesão do time: sistema que o vendedor não usa não registra nada. Qualidade do registro: histórico completo de cada cliente, sem duplicidade. Relatórios que a gestão usa de fato. Troca de dados com os outros sistemas da operação, para o CRM não virar uma ilha.',
      },
      {
        heading: 'Perguntas para fazer ao fornecedor',
        content:
          'Quem já usa o sistema numa operação parecida com a sua, e o que mudou depois? O que acontece com o lead que chega fora do horário comercial? Como os dados saem do sistema se você precisar deles em outra ferramenta? Qual é o custo total, contando implantação, treinamento e licenças?',
      },
      {
        heading: 'O que nenhum CRM faz sozinho',
        content:
          'O CRM registra o que aconteceu. Mas quem identifica o que merece atenção agora? Uma mudança de estoque, uma condição comercial nova, um cliente da carteira que voltou a demonstrar intenção: esses sinais ficam entre sistemas e equipes, e o CRM espera que alguém olhe para eles. É aí que a inteligência comercial entra, sobre o CRM, não no lugar dele.',
      },
      {
        heading: 'Onde o Fykos entra',
        content:
          'O Fykos detecta sinais, prioriza oportunidades, executa a próxima ação dentro de regras definidas e registra resultados, falhas e motivos de escalonamento. Atua sobre o CRM que a operação já usa ou vai escolher; quando o projeto pede, a Dexi integra o Fykos ao CRM, ao DMS ou ao ERP.',
      },
    ],
    faq: [
      {
        question: 'Preciso trocar de CRM para usar o Fykos?',
        answer:
          'Não. O Fykos atua sobre os sistemas que a operação já usa, sem exigir a troca do CRM.',
      },
      {
        question: 'CRM genérico serve para concessionária?',
        answer:
          'Pode servir, se o processo comercial da loja couber nele e o time usar. O ponto de atenção é o custo de adaptar: etapas, campos e relatórios do varejo automotivo precisam existir de forma natural, ou o registro fica incompleto.',
      },
    ],
    ctaText: 'Avaliar aderência com a Dexi Digital',
  },
];
