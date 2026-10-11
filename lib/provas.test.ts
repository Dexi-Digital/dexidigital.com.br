import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CASOS,
  CAMPOS_CASO,
  casoPublicavel,
  casosPublicaveis,
  nomeExibido,
  type CasoProva,
} from './provas.ts';

const COMPLETO: CasoProva = {
  id: 'teste',
  titulo: 'Caso de teste',
  segmento: 'Automotivo',
  cenarioAnterior: 'Base sem priorização',
  periodo: 'mar–mai/2026',
  oportunidadesAnalisadas: '1.000',
  acoesIniciadas: '400 abordagens',
  negociosConfirmados: '12 vendas faturadas',
  criterioAtribuicao: 'Venda faturada até 30 dias após ação registrada',
  cliente: 'Cliente X',
  autorizacaoMarca: false,
  autorizacaoNumeros: true,
  validadoEm: '2026-10-01',
};

test('rascunhos atuais não aparecem no site', () => {
  assert.deepEqual(casosPublicaveis(CASOS), []);
});

test('caso completo, validado e com números autorizados é publicável', () => {
  assert.equal(casoPublicavel(COMPLETO), true);
});

test('qualquer campo obrigatório vazio bloqueia', () => {
  for (const { campo } of CAMPOS_CASO) {
    assert.equal(casoPublicavel({ ...COMPLETO, [campo]: null }), false, `${campo} null`);
    assert.equal(casoPublicavel({ ...COMPLETO, [campo]: '   ' }), false, `${campo} em branco`);
  }
});

test('sem autorização de números ou sem validação, não publica', () => {
  assert.equal(casoPublicavel({ ...COMPLETO, autorizacaoNumeros: false }), false);
  assert.equal(casoPublicavel({ ...COMPLETO, validadoEm: null }), false);
});

test('home mostra no máximo dois cases', () => {
  const tres = [1, 2, 3].map((i) => ({ ...COMPLETO, id: `c${i}` }));
  assert.deepEqual(casosPublicaveis(tres).map((c) => c.id), ['c1', 'c2']);
});

test('marca do cliente só com autorização de marca', () => {
  assert.equal(nomeExibido(COMPLETO), 'Automotivo');
  assert.equal(nomeExibido({ ...COMPLETO, autorizacaoMarca: true }), 'Cliente X');
  assert.equal(nomeExibido({ ...COMPLETO, autorizacaoMarca: true, cliente: null }), 'Automotivo');
});
