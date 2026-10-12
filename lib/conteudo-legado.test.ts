import { test } from 'node:test';
import assert from 'node:assert/strict';
import { semLegendaWordPress } from './conteudo-legado.ts';

test('legenda de uma linha sai inteira', () => {
  assert.equal(
    semLegendaWordPress('[caption id="attachment_1" align="alignnone" width="300"] Legenda.[/caption]\n\n## Título'),
    '\n## Título',
  );
});

test('legenda em várias linhas, com \\r\\n, sai inteira', () => {
  const texto = 'Intro\n[caption id="a" width="1200"]\r\n  \r\n  Legenda longa.\r\n[/caption]\nResto';
  assert.equal(semLegendaWordPress(texto), 'Intro\nResto');
});

test('texto sem legenda não muda', () => {
  const texto = 'Um [link](/blog) e um colchete [solto].';
  assert.equal(semLegendaWordPress(texto), texto);
});
