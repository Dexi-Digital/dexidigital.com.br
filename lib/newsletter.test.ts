import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validarInscricaoNewsletter, montarRegistroNewsletter } from './newsletter.ts';

function inscricaoValida(corpo: unknown) {
  const r = validarInscricaoNewsletter(corpo);
  if (!r.ok) throw new Error(`esperava válido, veio: ${r.erro}`);
  return r.inscricao;
}

test('aceita e-mail, apara espaços e normaliza para minúsculas', () => {
  const i = inscricaoValida({ email: '  Ana.Souza@Grupo.com.BR ', pagina: '/blog' });
  assert.equal(i.email, 'ana.souza@grupo.com.br');
  assert.equal(i.pagina, '/blog');
});

test('recusa corpo que não é objeto', () => {
  for (const corpo of [null, undefined, 'a@b.com', 42, ['a@b.com']]) {
    assert.equal(validarInscricaoNewsletter(corpo).ok, false);
  }
});

test('recusa e-mail vazio, malformado ou com caracteres de HTML', () => {
  for (const email of ['', '   ', 'ana', 'ana@', 'ana@grupo', 'a b@grupo.com', '<script>@x.com', 'ana@gr"upo.com']) {
    const r = validarInscricaoNewsletter({ email });
    assert.equal(r.ok, false, `deveria recusar ${JSON.stringify(email)}`);
  }
});

test('recusa e-mail que não é string', () => {
  assert.equal(validarInscricaoNewsletter({ email: 123 }).ok, false);
  assert.equal(validarInscricaoNewsletter({ email: { $ne: '' } }).ok, false);
});

test('recusa e-mail acima de 254 caracteres', () => {
  const email = `${'a'.repeat(250)}@x.com`;
  assert.equal(validarInscricaoNewsletter({ email }).ok, false);
});

test('campo-isca preenchido é tratado como robô', () => {
  const r = validarInscricaoNewsletter({ email: 'ana@grupo.com.br', site: 'http://spam.example' });
  assert.equal(r.ok, false);
});

test('página é opcional e limitada a 300 caracteres', () => {
  assert.equal(inscricaoValida({ email: 'ana@grupo.com.br' }).pagina, '');
  assert.equal(inscricaoValida({ email: 'ana@grupo.com.br', pagina: 'x'.repeat(400) }).pagina.length, 300);
});

test('registro vai para a tabela de leads com origem própria', () => {
  const registro = montarRegistroNewsletter({ email: 'ana@grupo.com.br', pagina: '/blog' });
  assert.equal(registro.email, 'ana@grupo.com.br');
  assert.equal(registro.source, 'blog_newsletter');
  assert.equal(registro.status, 'new');
  assert.ok(registro.name.length > 0, 'name é NOT NULL na tabela leads');
  assert.match(registro.message, /Página: \/blog/);
});
