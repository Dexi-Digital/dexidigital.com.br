import { test } from 'node:test';
import assert from 'node:assert/strict';
import { triarPost } from './blog-triagem.ts';

const CORPO_LONGO = 'palavra '.repeat(400);

test('post da vertical, com título e corpo coerentes, fica', () => {
  const r = triarPost({
    slug: 'quantas-vezes-fazer-follow-up-no-setor-automotivo',
    titulo: 'Quantas vezes fazer follow up no setor automotivo sem queimar sua marca?',
    conteudo: `Fazer follow up no setor automotivo exige cadência. A marca queima quando a concessionária insiste demais. ${CORPO_LONGO}`,
  });
  assert.deepEqual(r, { sugestao: 'manter', sinais: [] });
});

test('imobiliário e estética contam como tema (o regex do handoff não tinha)', () => {
  for (const titulo of ['Rodízio de leads entre corretores na incorporação', 'Como precificar procedimento estético']) {
    const r = triarPost({ slug: 'x', titulo, conteudo: `${titulo} ${CORPO_LONGO}` });
    assert.ok(!r.sinais.includes('fora_do_tema'), titulo);
  }
});

test('sobra de prompt no começo do texto sugere 410', () => {
  const r = triarPost({
    slug: 'san-jose-arts-culture-architecture',
    titulo: "San José's Rich Arts, Culture, and Architectural History",
    conteudo: `Aqui está o artigo de blog estratégico sobre desenvolvimento de software. ${CORPO_LONGO}`,
  });
  assert.equal(r.sugestao, '410');
  assert.ok(r.sinais.includes('sobra_de_prompt'));
  assert.ok(r.sinais.includes('titulo_em_ingles'));
});

test('"dados" solto não segura notícia fora do tema', () => {
  const r = triarPost({
    slug: 'chip-fotonico-eletronico-3d',
    titulo: 'Chip fotônico-eletrônico 3D supera barreiras de energia e transferência de dados da IA',
    conteudo: `Chip fotônico-eletrônico 3D revoluciona a IA com transferência de dados. ${CORPO_LONGO}`,
  });
  assert.equal(r.sugestao, '410');
  assert.ok(r.sinais.includes('fora_do_tema'));
});

test('notícia de empresa de tecnologia sugere 410 mesmo citando carro', () => {
  const r = triarPost({
    slug: 'google-amplia-assistente-ia-gemini',
    titulo: 'Google amplia o assistente IA Gemini para relógios, TVs e carros',
    conteudo: `O Google amplia o assistente Gemini para relógios, TVs e carros. ${CORPO_LONGO}`,
  });
  assert.equal(r.sugestao, '410');
  assert.ok(r.sinais.includes('noticia_externa'));
});

test('título que promete um assunto e corpo que fala de outro vai para revisão', () => {
  const r = triarPost({
    slug: 'crm-na-concessionaria',
    titulo: 'Consultoria de CRM para concessionária: seis passos de implantação segura',
    conteudo: `Novas tendências em desenvolvimento de software e inteligência artificial. A OpenAI comprou a io. ${CORPO_LONGO}`,
  });
  assert.equal(r.sugestao, 'revisar');
  assert.ok(r.sinais.includes('titulo_diferente_do_corpo'));
});

test('shortcode do WordPress e slug com sufixo numérico vão para revisão', () => {
  const r = triarPost({
    slug: 'automacao-de-crm-com-ia-2',
    titulo: 'Automação de CRM com IA no funil de vendas',
    conteudo: `[caption id="attachment_1" width="300"] Automação de CRM[/caption] Automação de CRM com IA no funil de vendas. ${CORPO_LONGO}`,
  });
  assert.equal(r.sugestao, 'revisar');
  assert.deepEqual(r.sinais, ['sobra_do_wordpress', 'slug_duplicado']);
});

test('CSS do tema do WordPress solto no texto vai para revisão', () => {
  const r = triarPost({
    slug: 'automacao-de-crm-com-ia',
    titulo: 'Automação de CRM com IA no funil de vendas',
    conteudo: `/* Estilo leve */ :root { --c1:#0f172a; } Automação de CRM com IA no funil de vendas. ${CORPO_LONGO}`,
  });
  assert.deepEqual(r.sinais, ['sobra_do_wordpress']);
});

test('sobra de prompt no próprio título sugere 410', () => {
  const r = triarPost({
    slug: 'regras-impedir-velho-oeste-inteligencia-artificial',
    titulo: 'Título de artigo de blog: \n\nPrecisamos de regras para impedir o velho oeste da IA nas vendas',
    conteudo: `Precisamos de regras para impedir o velho oeste da IA nas vendas. ${CORPO_LONGO}`,
  });
  assert.equal(r.sugestao, '410');
  assert.ok(r.sinais.includes('sobra_de_prompt'));
});

test('"incorporação" conta como tema', () => {
  const r = triarPost({
    slug: 'o-ativo-oculto-da-incorporacao',
    titulo: 'O ativo oculto da incorporação: como usar sua base de clientes no próximo lançamento',
    conteudo: `O ativo oculto da incorporação é a base de clientes do próximo lançamento. ${CORPO_LONGO}`,
  });
  assert.ok(!r.sinais.includes('fora_do_tema'));
});
