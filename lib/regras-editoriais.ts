/**
 * Regras editoriais do blog, num lugar só: o gerador (lib/gemini.ts) escreve
 * seguindo estas regras e o revisor (lib/revisor-blog.ts) cobra cada uma.
 *
 * Vêm do reposicionamento de out/2026 e das correções da Lorrayne sobre o que
 * está em produção. Não há revisão humana depois do revisor: o que estiver
 * errado aqui vai ao ar. Mudou o produto, muda aqui primeiro.
 *
 * Sem imports com alias: roda no Next, no `node --test` e nos scripts do cron.
 */

export const POSICIONAMENTO =
  'A Dexi Digital é a empresa: tecnologia para decisões comerciais de alto valor. O Fykos é o produto da Dexi: inteligência e execução comercial. O Fykos atua sobre os sistemas comerciais que a empresa já usa (CRM, estoque, histórico de atendimento): detecta sinais, prioriza oportunidades, executa a próxima ação dentro de regras definidas (inicia abordagens, qualifica, notifica responsáveis, encaminha exceções ao humano) e registra resultados, falhas e motivos de escalonamento. Não exige trocar o CRM.';

/** O que o Fykos faz em produção, por vertical. Fora desta lista, o texto não afirma. */
export const FATOS_DO_FYKOS = [
  'Automotivo (grupos e concessionárias): atendimento receptivo com qualificação, contexto e transição ao vendedor; reativação de carteira quando uma condição relevante muda; apoio à priorização do time comercial.',
  'Construtoras e incorporadoras que financiam com recursos próprios: o único fluxo em produção é a cobrança periódica dos compradores, com o código de barras tirado do sistema do próprio cliente, e a passagem para renegociação humana quando o comprador pede. O Fykos NÃO emite boleto. Gestão da carteira de ativos NÃO está em produção.',
  'Clínicas de procedimentos: não há cliente nem caso. O texto só diz para que o Fykos foi desenhado, nunca resultado obtido (ex.: "reduz o no-show").',
  'Integrações: não existe integração pronta com nenhum sistema de mercado (Syonet, NBS, Dealernet, Dealerspace, AutoConf, portais, CRMs ou ERPs citados por nome). A Dexi tem capacidade de integrar e integra quando o projeto de um cliente precisa. Fale em capacidade de integração, nunca em integração pronta ou "nativa".',
];

export const PUBLICO =
  'Decisores comerciais (dono, diretor, gerente) de grupos automotivos e concessionárias, de construtoras e incorporadoras e de clínicas de procedimentos. Temas: receita, previsibilidade de venda, lead que custou caro, carteira, follow-up, cobrança, gestão comercial.';

export const CTA =
  'Convite para uma conversa de aderência (link https://dexidigital.com.br/contato?cta=blog), destacando o valor financeiro (receita, previsibilidade de venda), não a integração com sistemas.';

/** Cada proibição tem um código que o revisor usa para apontar o problema. */
export const PROIBICOES: { regra: string; texto: string }[] = [
  {
    regra: 'dado_sem_fonte',
    texto:
      'Número de mercado (percentual, valor, quantidade, prazo médio) sem link para a página pública que mostra exatamente esse número. Fonte inventada é o pior erro possível: na dúvida, o texto fica sem número.',
  },
  {
    regra: 'afirmacao_sobre_dexi',
    texto:
      'Número, prazo ou resultado da Dexi ou do Fykos (ROI, conversão, tempo de resposta, "em 24h"), e cliente ou caso citado por nome ou descrito de forma que identifique.',
  },
  {
    regra: 'promessa',
    texto:
      'Promessa de diagnóstico, de ROI garantido, de "zero risco", de "zero alucinação" ou de "nenhuma oportunidade perdida".',
  },
  {
    regra: 'recurso_inexistente',
    texto:
      'Recurso, módulo ou integração com sistema citado por nome que não esteja nos fatos do Fykos (ex.: emitir boleto, gerir carteira de ativos).',
  },
  {
    regra: 'concorrente',
    texto: 'Afirmação sobre concorrente citado por nome, superioridade sem prova ou exclusividade ("único", "o primeiro").',
  },
  {
    regra: 'passo_a_passo',
    texto:
      'Passo a passo completo e replicável (checklist, sequência de mensagens, cadência, configurações). O texto explica o problema e os princípios e para antes do "como", direcionando para a Dexi.',
  },
  {
    regra: 'numero_operacional',
    texto: 'Número que funcione como instrução de configuração (ex.: "espace 72 horas", "envie 3 mensagens por dia").',
  },
  {
    regra: 'alegacao_clinica',
    texto: 'Alegação de resultado clínico ou médico (cura, elimina, garante resultado, sem risco), em qualquer vertical.',
  },
  {
    regra: 'leitor_errado',
    texto: 'Texto para quem compra carro, imóvel ou procedimento. O leitor é quem gere a operação comercial.',
  },
  {
    regra: 'fora_do_tema',
    texto:
      'Notícia de empresa de tecnologia, conteúdo genérico de desenvolvimento de software ou assunto fora do público acima.',
  },
  {
    regra: 'sobra_de_prompt',
    texto: 'Texto em inglês ou sobra de instrução do modelo ("Aqui está o artigo", "Título:", "Claro!").',
  },
  {
    regra: 'titulo_e_corpo',
    texto: 'Título que promete um assunto que o corpo não trata.',
  },
  {
    regra: 'travessao',
    texto:
      'Travessão (—) usado como pontuação, ou meia-risca com espaço dos dois lados ( – ) no lugar dele. Intervalo numérico sem espaço (22–25%) é permitido.',
  },
];

export function proibicoesEmLista(): string {
  return PROIBICOES.map((p, i) => `${i + 1}. [${p.regra}] ${p.texto}`).join('\n');
}

export function fatosEmLista(): string {
  return FATOS_DO_FYKOS.map((f) => `- ${f}`).join('\n');
}
