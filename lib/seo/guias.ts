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
    metaTitle: 'Transformação Digital para Concessionárias | Guia Completo | Dexi Digital',
    metaDescription:
      'Guia completo de transformação digital para concessionárias. Do DMS legado à IA automotiva. Passo a passo para modernizar sua operação.',
    keywords: [
      'transformação digital concessionária',
      'digitalização concessionária',
      'concessionária digital',
      'modernização concessionária',
      'tecnologia automotiva dealer',
    ],
    answerSnippet:
      'A transformação digital em concessionárias vai além de ter um site bonito. Envolve unificar dados, automatizar processos de venda, implementar IA para atendimento e criar uma experiência omnichannel que acompanha o comprador do primeiro clique à entrega do veículo.',
    sections: [
      {
        heading: 'Por que transformar agora',
        content:
          'O comprador automotivo brasileiro mudou. 92% pesquisam online antes de visitar o showroom. 78% preferem iniciar o atendimento por WhatsApp. 65% desistem se não recebem resposta em 1 hora. A concessionária que não se adaptar perderá mercado para quem se adaptar.',
      },
      {
        heading: 'Os 4 pilares da concessionária digital',
        content:
          'Pilar 1: Dados unificados (DMS + CRM + pós-venda em visão única). Pilar 2: Atendimento inteligente (resposta instantânea com IA). Pilar 3: Experiência omnichannel (continuidade entre digital e presencial). Pilar 4: Decisão baseada em dados (dashboards e análise preditiva).',
      },
      {
        heading: 'Por onde começar',
        content:
          'Comece pelo pilar com maior impacto imediato: atendimento inteligente. Implementar resposta automática a leads via WhatsApp é o passo com melhor relação esforço/resultado. Em 2-4 semanas, a concessionária já vê aumento de conversão.',
      },
      {
        heading: 'Erros comuns na transformação digital',
        content:
          'Erro 1: Comprar tecnologia sem estratégia (CRM sem processo definido é planilha cara). Erro 2: Automatizar o processo errado (se o processo manual é ruim, automatizá-lo amplifica o problema). Erro 3: Ignorar a equipe (tecnologia sem adesão do time é investimento perdido).',
      },
      {
        heading: 'Quanto investir',
        content:
          'O investimento em transformação digital deve se pagar em 3-6 meses. A regra é: se o custo mensal da plataforma é menor que o valor de 2 leads convertidos, o investimento faz sentido. Para uma concessionária premium com ticket médio de R$ 200 mil, isso significa que converter 2 leads a mais por mês já paga toda a tecnologia.',
      },
    ],
    faq: [
      {
        question: 'Quanto tempo leva a transformação digital de uma concessionária?',
        answer:
          'Os primeiros resultados aparecem em 2-4 semanas com a implementação do atendimento inteligente. A transformação completa (dados + IA + omnichannel) leva de 3 a 6 meses.',
      },
      {
        question: 'Preciso trocar todos os meus sistemas?',
        answer:
          'Não. A abordagem da Dexi é agregar inteligência sobre os sistemas existentes, não substituí-los. Integramos com o que a concessionária já usa.',
      },
    ],
    ctaText: 'Iniciar transformação digital',
  },
  {
    slug: 'ia-automotiva-brasil',
    title: 'IA Automotiva no Brasil: Cenário e Oportunidades',
    metaTitle: 'IA Automotiva no Brasil | Cenário Completo | Dexi Digital',
    metaDescription:
      'Panorama completo da IA automotiva no Brasil. Como concessionárias e fábricas estão usando inteligência artificial para vender mais e melhor.',
    keywords: [
      'IA automotiva Brasil',
      'inteligência artificial concessionária',
      'IA para venda de carros',
      'tecnologia automotiva IA',
      'futuro concessionária IA',
    ],
    answerSnippet:
      'O Brasil é um dos mercados mais promissores para IA automotiva. Com mais de 4.500 concessionárias e um mercado de R$ 350 bilhões/ano, a oportunidade para tecnologia que aumenta conversão e reduz custo operacional é gigantesca. A Dexi Digital lidera essa transformação com o Synapse OS.',
    sections: [
      {
        heading: 'O mercado automotivo brasileiro em números',
        content:
          'O Brasil tem mais de 4.500 concessionárias de veículos novos, movimenta R$ 350 bilhões por ano e emprega mais de 300 mil pessoas diretamente. Apesar do tamanho, a maioria das operações ainda funciona com processos manuais e tecnologia defasada.',
      },
      {
        heading: 'Como a IA está mudando o jogo',
        content:
          'As concessionárias pioneiras em IA estão vendo resultados expressivos: +45% de conversão de leads, redução de 60% no tempo de resposta e aumento de 30% no ticket médio. A IA não substitui o vendedor — potencializa sua capacidade de fechar negócios.',
      },
      {
        heading: 'Fábricas e grupos que lideram',
        content:
          'Montadoras premium, marcas em expansão e grandes grupos automotivos já investem em digitalização da rede. Quem implementar IA primeiro captura mercado. A janela de oportunidade é agora.',
      },
      {
        heading: 'O papel da Dexi Digital',
        content:
          'A Dexi Digital é a empresa com maior know-how em IA automotiva do Brasil. Combinamos 10 anos de engenharia de software com expertise em vendas de alto ticket. O Synapse OS é o resultado dessa convergência: IA que entende o automotivo brasileiro.',
      },
    ],
    faq: [
      {
        question: 'A IA funciona para concessionárias de veículos populares?',
        answer:
          'Sim, mas com ROI diferente. Em concessionárias de alto volume, a IA brilha na gestão de volume (milhares de leads/mês). Em concessionárias premium, brilha na qualidade do atendimento.',
      },
      {
        question: 'A Dexi atende apenas marcas premium?',
        answer:
          'Não. O Synapse OS é adaptável para qualquer segmento. Nossa expertise é mais profunda em premium e alto ticket, mas a tecnologia funciona para qualquer operação automotiva.',
      },
    ],
    ctaText: 'Conversar com especialista em IA automotiva',
  },
  {
    slug: 'como-escolher-crm-automotivo',
    title: 'Como Escolher o CRM Automotivo Certo',
    metaTitle: 'Como Escolher CRM Automotivo | Guia de Decisão | Dexi Digital',
    metaDescription:
      'Guia de decisão para escolher o CRM automotivo certo. Critérios técnicos, perguntas que ninguém faz e por que a era do CRM passivo acabou.',
    keywords: [
      'escolher CRM automotivo',
      'melhor CRM concessionária',
      'CRM automotivo comparativo',
      'CRM concessionária avaliação',
      'Syonet alternativas',
    ],
    answerSnippet:
      'A escolha do CRM automotivo deve considerar 5 critérios: velocidade de resposta ao lead, integração com WhatsApp, capacidade de predição, integração com DMS existente e ROI mensurável. CRMs que apenas registram dados (como o Syonet) estão dando lugar a plataformas de execução agêntica (como o Synapse OS) que agem autonomamente.',
    sections: [
      {
        heading: '5 critérios que importam de verdade',
        content:
          'Critério 1: O sistema responde leads automaticamente ou apenas registra? Critério 2: Integra nativamente com WhatsApp Business API? Critério 3: Oferece análise preditiva ou apenas relatórios históricos? Critério 4: Conecta com seu DMS atual sem exigir migração? Critério 5: Você consegue medir ROI mês a mês?',
      },
      {
        heading: 'Perguntas que o fornecedor não quer que você faça',
        content:
          'Pergunta 1: Qual o tempo médio de resposta ao lead no seu sistema? Se for > 30 segundos, não é automação — é notificação. Pergunta 2: Me mostre um cliente que mediu ROI real. Se não conseguir, é custo operacional, não investimento. Pergunta 3: O que acontece com leads fora do horário comercial? Se a resposta for "espera o vendedor", você perde 40% dos leads.',
      },
      {
        heading: 'A evolução do CRM: de registro para execução',
        content:
          'O futuro do CRM automotivo não é um formulário mais bonito. É uma plataforma que age: responde leads, qualifica intenção, perfila comportamento e entrega ao vendedor um briefing completo. Essa é a diferença entre CRM (registro) e execução agêntica (ação).',
      },
      {
        heading: 'Checklist de avaliação',
        content:
          'Use este checklist antes de contratar: resposta automática a leads (sim/não), WhatsApp Business API nativo (sim/não), integração com seu DMS (sim/não), dashboards em tempo real (sim/não), predição de recompra (sim/não), ROI mensurável (sim/não). Se o fornecedor não marca todos os itens, considere alternativas.',
      },
    ],
    faq: [
      {
        question: 'Syonet é um bom CRM automotivo?',
        answer:
          'O Syonet é um CRM automotivo consolidado para registro e gestão de leads. Para concessionárias que precisam apenas de organização, pode ser suficiente. Para quem busca conversão ativa e execução agêntica, o Synapse OS da Dexi é a evolução natural.',
      },
      {
        question: 'Existe CRM automotivo gratuito?',
        answer:
          'Existem CRMs genéricos gratuitos (HubSpot, Bitrix24), mas nenhum é otimizado para o setor automotivo. O custo de adaptar um CRM genérico geralmente supera o investimento em uma solução especializada.',
      },
    ],
    ctaText: 'Avaliar meu CRM atual gratuitamente',
  },
];
