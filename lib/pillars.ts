export interface Pillar {
  slug: string;
  title: string;
  description: string;
  vertical: string;
  cluster: string;
}

// Um pilar por cluster do calendário editorial (18 no total, 6 por
// vertical). Cada post satélite gerado pela automação (Faixa B) linka
// pra cá. A âncora completa de cada cluster (Faixa A, dado proprietário)
// ainda é escrita humana — essas páginas funcionam como hub, agregando os
// satélites já publicados, até a âncora de verdade existir.
export const PILLARS: Pillar[] = [
  // Automotivo
  {
    slug: 'base-morta-de-leads',
    title: 'Base morta de leads: o que fazer com quem não comprou',
    description: 'Como reativar e extrair receita da sua base de leads antigos no setor automotivo.',
    vertical: 'Automotivo',
    cluster: '1. Base morta e reativação',
  },
  {
    slug: 'vazamento-de-receita',
    title: 'Vazamento de receita no funil comercial',
    description: 'Os pontos onde o funil automotivo perde dinheiro entre marketing e venda.',
    vertical: 'Automotivo',
    cluster: '2. Vazamento no funil',
  },
  {
    slug: 'tempo-de-resposta-lead',
    title: 'Velocidade de resposta e o custo de demorar',
    description: 'O impacto do tempo de resposta a leads na conversão de concessionárias.',
    vertical: 'Automotivo',
    cluster: '3. Velocidade de resposta e SLA',
  },
  {
    slug: 'ia-sobre-crm',
    title: 'IA sobre o CRM, sem trocar de sistema',
    description: 'Como adicionar inteligência artificial sobre o CRM que a concessionária já usa.',
    vertical: 'Automotivo',
    cluster: '4. IA sobre CRM sem migração',
  },
  {
    slug: 'venda-alto-ticket',
    title: 'Alto ticket e seminovos: vendas de alto valor',
    description: 'Como conduzir vendas de alto ticket e seminovos até o fechamento.',
    vertical: 'Automotivo',
    cluster: '5. Alto ticket e seminovos',
  },
  {
    slug: 'indice-vazamento-receita',
    title: 'Índice Dexi de Vazamento de Receita — Automotivo',
    description: 'Previsibilidade de receita e pós-venda no setor automotivo.',
    vertical: 'Automotivo',
    cluster: '6. Previsibilidade e pós-venda',
  },
  // Clínicas de procedimentos
  {
    slug: 'lead-de-clinica',
    title: 'O lead que some entre orçamento e agendamento',
    description: 'Por que o paciente pergunta o valor e desaparece — e o que fazer a respeito.',
    vertical: 'Clínicas de procedimentos',
    cluster: '1. Lead que some entre orçamento e agendamento',
  },
  {
    slug: 'publicidade-medica',
    title: 'Publicidade médica e compliance no WhatsApp',
    description: 'O que a regulamentação permite falar no atendimento comercial de uma clínica.',
    vertical: 'Clínicas de procedimentos',
    cluster: '2. Publicidade e compliance',
  },
  {
    slug: 'recompra-clinica',
    title: 'Recompra e protocolo: receita recorrente em clínicas',
    description: 'Como transformar procedimentos recorrentes em receita previsível.',
    vertical: 'Clínicas de procedimentos',
    cluster: '3. Recompra e protocolo',
  },
  {
    slug: 'precificacao-clinica',
    title: 'Ticket e pacotes: como precificar procedimentos',
    description: 'Como pacote e sessão avulsa mudam a conversa de venda em clínicas.',
    vertical: 'Clínicas de procedimentos',
    cluster: '4. Ticket e pacotes',
  },
  {
    slug: 'ocupacao-de-agenda',
    title: 'Agenda como ativo: ocupação e cadeira ociosa',
    description: 'A matemática da ocupação de agenda em clínicas de procedimentos.',
    vertical: 'Clínicas de procedimentos',
    cluster: '5. Agenda como ativo',
  },
  {
    slug: 'ia-para-clinicas',
    title: 'IA no atendimento de clínicas sem ferir a LGPD',
    description: 'O que uma IA pode e não pode tocar quando o dado é de saúde.',
    vertical: 'Clínicas de procedimentos',
    cluster: '6. IA no atendimento sem ferir LGPD/dado sensível',
  },
  // Construção e incorporação
  {
    slug: 'lead-de-lancamento',
    title: 'O lead de lançamento que esfria',
    description: 'Por que o lead de um lançamento imobiliário não morre, ele só espera.',
    vertical: 'Construção e incorporação',
    cluster: '1. Lead de lançamento que esfria',
  },
  {
    slug: 'atribuicao-de-lead',
    title: 'Corretor, stand e imobiliária parceira: quem responde o lead',
    description: 'O problema de atribuição entre canais na venda de imóveis.',
    vertical: 'Construção e incorporação',
    cluster: '2. Corretor, stand e imobiliária parceira',
  },
  {
    slug: 'ciclo-longo-imobiliario',
    title: 'Vender em ciclo longo sem sumir e sem incomodar',
    description: 'Como nutrir um lead imobiliário ao longo de um ciclo de venda de meses.',
    vertical: 'Construção e incorporação',
    cluster: '3. Ciclo longo e nutrição',
  },
  {
    slug: 'carteira-incorporadora',
    title: 'Repasse, distrato e carteira: o cliente que já comprou',
    description: 'Por que o cliente que já comprou é o lead mais barato do próximo lançamento.',
    vertical: 'Construção e incorporação',
    cluster: '4. Repasse, distrato e carteira',
  },
  {
    slug: 'crm-imobiliario',
    title: 'CRM imobiliário e integração de dados',
    description: 'O que os principais CRMs imobiliários entregam via integração — e o que não.',
    vertical: 'Construção e incorporação',
    cluster: '5. CRM imobiliário e integração',
  },
  {
    slug: 'indice-vgv',
    title: 'Índice Dexi — Previsibilidade de VGV',
    description: 'Previsibilidade de VGV e o Índice Dexi na incorporação.',
    vertical: 'Construção e incorporação',
    cluster: '6. Previsibilidade de VGV',
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}
