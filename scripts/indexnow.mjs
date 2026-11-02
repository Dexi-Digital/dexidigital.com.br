#!/usr/bin/env node
/**
 * Avisa o IndexNow (Bing, Yandex, Seznam, Naver e outros que aderem ao
 * protocolo) que URLs do site mudaram. O Google não usa IndexNow: para ele, a
 * Inspeção de URL e o sitemap no Search Console.
 *
 * A chave é o arquivo public/<chave>.txt, cujo conteúdo é a própria chave. O
 * buscador baixa https://dexidigital.com.br/<chave>.txt para conferir que o
 * envio veio do dono do site, então o arquivo precisa estar no ar antes.
 *
 * Uso:
 *   node scripts/indexnow.mjs /guias /setores https://dexidigital.com.br/solucoes
 *   node scripts/indexnow.mjs --simular /guias      # mostra o envio sem mandar
 *
 * Respostas: 200 aceito; 202 aceito, chave ainda em validação; 403 chave não
 * confere com o arquivo; 422 URL fora do host; 429 envios demais.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const HOST = 'dexidigital.com.br';
const SITE = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const pastaPublic = join(import.meta.dirname, '..', 'public');
const arquivosChave = readdirSync(pastaPublic).filter((n) => /^[a-f0-9]{32}\.txt$/.test(n));
if (arquivosChave.length !== 1) {
  console.error(`Esperava um arquivo de chave em public/ (32 hex .txt), achei ${arquivosChave.length}.`);
  process.exit(1);
}
const key = readFileSync(join(pastaPublic, arquivosChave[0]), 'utf8').trim();

const args = process.argv.slice(2);
const simular = args.includes('--simular');
const urlList = [
  ...new Set(
    args
      .filter((a) => !a.startsWith('--'))
      .map((a) => (a.startsWith('http') ? a : `${SITE}${a.startsWith('/') ? a : `/${a}`}`)),
  ),
];
if (urlList.length === 0) {
  console.error('Passe pelo menos uma URL ou caminho.');
  process.exit(1);
}
const fora = urlList.filter((u) => new URL(u).host !== HOST);
if (fora.length) {
  console.error(`URLs fora de ${HOST}: ${fora.join(', ')}`);
  process.exit(1);
}

const corpo = { host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList };
if (simular) {
  console.log(JSON.stringify(corpo, null, 2));
  process.exit(0);
}

const r = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(corpo),
});
console.log(`IndexNow: HTTP ${r.status} para ${urlList.length} URLs`);
const texto = await r.text();
if (texto) console.log(texto.slice(0, 500));
process.exit(r.status === 200 || r.status === 202 ? 0 : 1);
