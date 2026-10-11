import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  validarLeadAderencia,
  montarRegistroLead,
  cabecalhosCors,
  escaparHtml,
} from './lead-aderencia.ts';

const VALIDO = {
  nome: '  Ana Souza ',
  cargo: 'Diretora comercial',
  empresa: 'Grupo Exemplo',
  email: 'ana@grupoexemplo.com.br',
  whatsapp: '(34) 99999-0000',
  segmento: 'automotivo',
  tamanhoOperacao: '200-1000',
  desafio: 'priorizacao',
  crm: 'Syonet',
};

function leadValido(extra: Record<string, unknown> = {}) {
  const r = validarLeadAderencia({ ...VALIDO, ...extra });
  if (!r.ok) throw new Error(`esperava válido, veio: ${r.erro}`);
  return r.lead;
}

test('aceita o formulário curto e apara espaços', () => {
  const lead = leadValido();
  assert.equal(lead.nome, 'Ana Souza');
  assert.equal(lead.crm, 'Syonet');
  assert.equal(lead.origem, 'dexi');
  assert.equal(lead.cta, 'direto');
});

test('origem: aceita fykos, descarta valor desconhecido', () => {
  assert.equal(leadValido({ origem: 'fykos' }).origem, 'fykos');
  assert.equal(leadValido({ origem: 'concorrente' }).origem, 'dexi');
});

test('exige nome, cargo, empresa e e-mail', () => {
  for (const campo of ['nome', 'cargo', 'empresa', 'email']) {
    const r = validarLeadAderencia({ ...VALIDO, [campo]: '   ' });
    assert.equal(r.ok, false, campo);
  }
});

test('rejeita e-mail inválido', () => {
  const r = validarLeadAderencia({ ...VALIDO, email: 'ana@sem-ponto' });
  assert.deepEqual(r, { ok: false, erro: 'E-mail inválido.' });
});

test('WhatsApp e CRM são opcionais; WhatsApp preenchido precisa ser telefone', () => {
  assert.equal(leadValido({ whatsapp: '', crm: '' }).whatsapp, '');
  assert.equal(leadValido({ whatsapp: '+55 11 99184-7629' }).whatsapp, '+55 11 99184-7629');
  assert.equal(validarLeadAderencia({ ...VALIDO, whatsapp: 'me liga' }).ok, false);
});

test('rejeita opção fora da lista em segmento, tamanho e desafio', () => {
  for (const campo of ['segmento', 'tamanhoOperacao', 'desafio']) {
    assert.equal(validarLeadAderencia({ ...VALIDO, [campo]: 'inventado' }).ok, false, campo);
    assert.equal(validarLeadAderencia({ ...VALIDO, [campo]: '' }).ok, false, campo);
  }
});

test('corpo que não é objeto vira erro, não exceção', () => {
  for (const corpo of [null, undefined, 'texto', 42, [VALIDO]]) {
    assert.deepEqual(validarLeadAderencia(corpo), { ok: false, erro: 'Requisição inválida.' });
  }
});

test('campos que não são texto são tratados como vazios', () => {
  assert.equal(validarLeadAderencia({ ...VALIDO, nome: { $ne: '' } }).ok, false);
});

test('cta vira slug curto', () => {
  assert.equal(leadValido({ cta: 'Hero <script>' }).cta, 'hero-script');
  assert.equal(leadValido({ cta: 'x'.repeat(200) }).cta.length, 60);
});

test('UTM: só as cinco chaves conhecidas, truncadas', () => {
  const lead = leadValido({
    utm: { utm_source: 'linkedin', utm_campaign: 'c'.repeat(300), gclid: 'abc', utm_medium: '' },
  });
  assert.deepEqual(Object.keys(lead.utm), ['utm_source', 'utm_campaign']);
  assert.equal(lead.utm.utm_campaign?.length, 100);
  assert.deepEqual(leadValido({ utm: 'nao-objeto' }).utm, {});
});

test('trunca campos longos', () => {
  assert.equal(leadValido({ nome: 'a'.repeat(500) }).nome.length, 100);
});

test('montarRegistroLead: source preserva o filtro do site da Dexi', () => {
  assert.equal(montarRegistroLead(leadValido()).source, 'website_contact_form');
  assert.equal(montarRegistroLead(leadValido({ origem: 'fykos' })).source, 'fykos_contact_form');
});

test('montarRegistroLead: rótulos legíveis, CRM opcional e rastreio de origem', () => {
  const registro = montarRegistroLead(
    leadValido({
      crm: '',
      cta: 'hero',
      origem: 'fykos',
      pagina: 'https://fykos.com.br/acesso?cta=hero',
      utm: { utm_source: 'linkedin' },
    }),
  );
  assert.equal(registro.name, 'Ana Souza');
  assert.equal(registro.company, 'Grupo Exemplo');
  assert.equal(registro.phone, '(34) 99999-0000');
  assert.equal(registro.status, 'new');
  assert.equal(registro.service, 'Saber quais oportunidades merecem atenção agora');
  assert.match(registro.message, /^\[Conversa de aderência\]/);
  assert.match(registro.message, /Segmento: Automotivo \(concessionária ou grupo\)/);
  assert.match(registro.message, /CRM: Não informado/);
  assert.match(registro.message, /Origem: fykos\.com\.br · CTA: hero/);
  assert.match(registro.message, /UTM: utm_source=linkedin/);
  assert.equal(montarRegistroLead(leadValido({ whatsapp: '' })).phone, null);
});

test('escaparHtml neutraliza marcação', () => {
  assert.equal(
    escaparHtml(`<img src=x onerror="a('b')">&`),
    '&lt;img src=x onerror=&quot;a(&#39;b&#39;)&quot;&gt;&amp;',
  );
});

test('cabecalhosCors: só o site do Fykos; localhost só em dev', () => {
  assert.equal(cabecalhosCors('https://fykos.com.br')['Access-Control-Allow-Origin'], 'https://fykos.com.br');
  assert.equal(cabecalhosCors('https://www.fykos.com.br')['Access-Control-Allow-Origin'], 'https://www.fykos.com.br');
  assert.deepEqual(cabecalhosCors('https://malicioso.com'), {});
  assert.deepEqual(cabecalhosCors(null), {});
  assert.deepEqual(cabecalhosCors('http://localhost:4321'), {});
  assert.equal(
    cabecalhosCors('http://localhost:4321', true)['Access-Control-Allow-Origin'],
    'http://localhost:4321',
  );
});
