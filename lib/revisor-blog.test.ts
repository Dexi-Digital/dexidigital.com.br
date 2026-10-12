import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  checagensFixas,
  decidir,
  interpretarRevisao,
  linksExternos,
  problemasDeEstrutura,
  revisarPost,
  type FonteAberta,
} from './revisor-blog.ts';

const CORPO = '**Resposta rápida:** O lead que visitou o decorado e sumiu ainda tem intenção de compra. ' + 'texto '.repeat(300);

function post(conteudo = CORPO, titulo = 'Lead que visitou o decorado e sumiu') {
  return { titulo, resumo: 'Resumo do post.', conteudo };
}

test('post limpo não tem problema fixo', () => {
  assert.deepEqual(checagensFixas(post()), []);
});

test('afirmar que o Fykos emite boleto é recurso inexistente, com a frase exata', () => {
  const problemas = checagensFixas(post(`${CORPO}\n\nO Fykos emite boletos para a carteira toda. Outra frase.`));
  assert.equal(problemas.length, 1);
  assert.equal(problemas[0].regra, 'recurso_inexistente');
  assert.equal(problemas[0].trecho, 'O Fykos emite boletos para a carteira toda.');
  assert.ok(!problemas[0].grave);
});

test('"emissão de boleto", "carteira de ativos" e "ROI garantido" também são pegos', () => {
  const regras = checagensFixas(
    post(`${CORPO}\nA emissão de boletos fica automática. A gestão da carteira de ativos também. ROI garantido.`)
  ).map((p) => p.regra);
  assert.deepEqual(regras, ['recurso_inexistente', 'recurso_inexistente', 'promessa']);
});

test('sobra de instrução no título é problema corrigível', () => {
  const problemas = checagensFixas(post(CORPO, 'Título de artigo de blog: O lead que sumiu'));
  assert.equal(problemas[0].regra, 'sobra_de_prompt');
  assert.ok(!problemas[0].grave);
});

test('texto em inglês é grave e reprova', () => {
  const ingles = 'The lead is the most important part of the funnel and your team is ready to sell with its tools. ';
  const problemas = checagensFixas(post(ingles.repeat(10)));
  assert.ok(problemas.some((p) => p.grave));
  assert.equal(decidir(problemas, { veredito: 'aprovado', problemas: [] }), 'reprovado');
});

test('links externos: ignora o próprio site, tira pontuação final e não repete', () => {
  const conteudo = `Segundo [a Fenabrave](https://www.fenabrave.org.br/anuario.pdf), em 2025, X. Veja [o pilar](/crm-imobiliario)
e [a Dexi](https://dexidigital.com.br/contato?cta=blog). Fonte: https://www.ibge.gov.br/pesquisa. De novo https://www.fenabrave.org.br/anuario.pdf.`;
  assert.deepEqual(linksExternos(conteudo), ['https://www.fenabrave.org.br/anuario.pdf', 'https://www.ibge.gov.br/pesquisa']);
});

test('estrutura reprovada pelo validador vira problema para o redator', () => {
  const problemas = problemasDeEstrutura(
    { hasQuickAnswer: true, hasQuestionH2: false, hasNamedSourceClaim: false, hasEnoughInternalLinks: false, passesClinicalSafety: true, passed: false },
    '/crm-imobiliario'
  );
  assert.deepEqual(problemas.map((p) => p.regra), ['estrutura', 'estrutura']);
  assert.match(problemas[1].correcao, /^Inclua pelo menos 2 links Markdown para \/crm-imobiliario/);
});

test('interpretarRevisao: veredito desconhecido lança erro (vira pendente)', () => {
  assert.throws(() => interpretarRevisao({ veredito: 'ok', problemas: [] }));
  assert.throws(() => interpretarRevisao({ veredito: 'aprovado' }));
});

test('interpretarRevisao: aprovar apontando problema vira corrigir; regra desconhecida vira "outro"', () => {
  const r = interpretarRevisao({ veredito: 'aprovado', problemas: [{ regra: 'inventada', trecho: 'x', motivo: 'y', correcao: 'z' }] });
  assert.equal(r.veredito, 'corrigir');
  assert.equal(r.problemas[0].regra, 'outro');
});

test('interpretarRevisao: pedir correção sem problema lança erro', () => {
  assert.throws(() => interpretarRevisao({ veredito: 'corrigir', problemas: [] }));
});

test('decidir: modelo aprova mas há problema fixo corrigível, então corrigir', () => {
  const fixo = { regra: 'promessa', trecho: 'ROI garantido.', motivo: 'm', correcao: 'c' };
  assert.equal(decidir([fixo], { veredito: 'aprovado', problemas: [] }), 'corrigir');
  assert.equal(decidir([], { veredito: 'aprovado', problemas: [] }), 'aprovado');
  assert.equal(decidir([], { veredito: 'reprovado', problemas: [] }), 'reprovado');
});

test('revisarPost: falha do modelo deixa o post pendente (não publica)', async () => {
  const r = await revisarPost(post(), {
    abrir: async (url) => ({ url, abriu: true, texto: '' }),
    revisarComModelo: async () => {
      throw new Error('Gemini API error: 429');
    },
  });
  assert.equal(r.veredito, 'pendente');
  assert.match(r.erro ?? '', /429/);
});

test('revisarPost: o revisor recebe o texto de cada fonte e o aviso de fonte que não abriu', async () => {
  const conteudo = `${CORPO}\nSegundo [o IBGE](https://www.ibge.gov.br/a), em 2025, 10%. Segundo [a ABC](https://abc.org.br/b), 20%.`;
  let promptRecebido = '';
  const abertas: FonteAberta[] = [
    { url: 'https://www.ibge.gov.br/a', abriu: true, texto: 'Página do IBGE: 10% em 2025.' },
    { url: 'https://abc.org.br/b', abriu: false, texto: 'não abriu (a página respondeu 404)' },
  ];
  const r = await revisarPost(post(conteudo), {
    abrir: async (url) => abertas.find((f) => f.url === url)!,
    revisarComModelo: async (prompt) => {
      promptRecebido = prompt;
      return {
        modelo: 'modelo-de-teste',
        resposta: {
          veredito: 'corrigir',
          problemas: [{ regra: 'dado_sem_fonte', trecho: 'Segundo a ABC, 20%.', motivo: 'Fonte não abriu.', correcao: 'Corte o número.' }],
        },
      };
    },
  });
  assert.match(promptRecebido, /<fonte n="1" url="https:\/\/www.ibge.gov.br\/a" abriu="sim">\nPágina do IBGE: 10% em 2025./);
  assert.match(promptRecebido, /<fonte n="2" url="https:\/\/abc.org.br\/b" abriu="não">\nnão abriu \(a página respondeu 404\)/);
  assert.equal(r.veredito, 'corrigir');
  assert.equal(r.modelo, 'modelo-de-teste');
  assert.deepEqual(r.fontes, [
    { url: 'https://www.ibge.gov.br/a', abriu: true },
    { url: 'https://abc.org.br/b', abriu: false },
  ]);
});
