#!/usr/bin/env node
/**
 * Curadoria das pautas vindas do radar de concorrência.
 *
 * O radar grava como 'pending_review'. Nada sai daí sozinho: este é o único
 * caminho para uma pauta de concorrente chegar à fila de publicação.
 *
 * Uso:
 *   node --env-file=.env.local scripts/curar-pautas.mjs            # interativo
 *   node --env-file=.env.local scripts/curar-pautas.mjs --listar   # só lista
 *   node --env-file=.env.local scripts/curar-pautas.mjs --aprovar <id>
 *   node --env-file=.env.local scripts/curar-pautas.mjs --rejeitar <id>
 *
 * O modo interativo pede terminal de verdade. Por SSH funciona; dentro de
 * pipe ou cron, não — por isso ele detecta e cai no modo lista.
 */

import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import {
  getPendingReviewTopics,
  approveTopic,
  markTopicStatus,
  atualizarTituloPauta,
} from '../lib/topic-bank-db.ts';
import { PILLARS } from '../lib/pillars.ts';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const valor = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };

function resumo(t, i, total) {
  const linhas = [
    '',
    `── ${i + 1}/${total} ${'─'.repeat(Math.max(0, 56 - String(i + 1).length))}`,
    `  ${t.title}`,
    `  vertical: ${t.vertical}`,
    `  origem:   ${t.cluster}`,
    `  pilar:    ${t.pillarLink || '\x1b[33m(vazio — precisa definir)\x1b[0m'}`,
  ];
  if (t.dataSource) linhas.push(`  fonte:    ${t.dataSource}`);
  return linhas.join('\n');
}

async function interativo(pautas) {
  const rl = createInterface({ input: stdin, output: stdout });
  let aprovadas = 0, rejeitadas = 0, puladas = 0;

  console.log(`\n${pautas.length} pauta(s) aguardando curadoria.`);
  console.log('a=aprovar  r=rejeitar  e=editar título  p=pular  q=sair\n');

  for (const [i, t] of pautas.entries()) {
    console.log(resumo(t, i, pautas.length));

    let titulo = t.title;
    let decidido = false;

    while (!decidido) {
      const r = (await rl.question('  > ')).trim().toLowerCase();

      if (r === 'q') { console.log('\nSaindo. O que não foi decidido continua pendente.'); rl.close(); return { aprovadas, rejeitadas, puladas }; }
      if (r === 'p' || r === '') { puladas++; decidido = true; }
      else if (r === 'r') { markTopicStatus(t.id, 'rejected'); rejeitadas++; decidido = true; }
      else if (r === 'e') {
        const novo = (await rl.question(`  novo título (enter mantém):\n  ${titulo}\n  > `)).trim();
        if (novo) { atualizarTituloPauta(t.id, novo); titulo = novo; console.log('  título atualizado.'); }
      }
      else if (r === 'a') {
        if (!t.pillarLink) {
          console.log('\n  Esta pauta não tem pilar. Escolha um:');
          const doVertical = PILLARS.filter((p) => p.vertical === t.vertical);
          const lista = doVertical.length ? doVertical : PILLARS;
          lista.forEach((p, n) => console.log(`    ${String(n + 1).padStart(2)}. ${p.title.slice(0, 62)}`));
          const escolha = (await rl.question('  número (enter aprova sem pilar): ')).trim();
          const idx = Number.parseInt(escolha, 10) - 1;
          if (lista[idx]) {
            atualizarTituloPauta(t.id, titulo, `/${lista[idx].slug}`);
            console.log(`  pilar: /${lista[idx].slug}`);
          }
        }
        approveTopic(t.id); aprovadas++; decidido = true;
        console.log('  \x1b[32maprovada — entrou na fila de publicação\x1b[0m');
      }
      else console.log('  a=aprovar  r=rejeitar  e=editar  p=pular  q=sair');
    }
  }
  rl.close();
  return { aprovadas, rejeitadas, puladas };
}

async function main() {
  const idAprovar = valor('--aprovar');
  const idRejeitar = valor('--rejeitar');

  if (idAprovar) {
    console.log(approveTopic(idAprovar) ? 'Aprovada.' : 'Não encontrada em pending_review.');
    return;
  }
  if (idRejeitar) {
    markTopicStatus(idRejeitar, 'rejected');
    console.log('Rejeitada.');
    return;
  }

  const pautas = getPendingReviewTopics();
  if (pautas.length === 0) {
    console.log('Nenhuma pauta aguardando curadoria. Rode o radar para buscar mais.');
    return;
  }

  if (flag('--listar') || !stdin.isTTY) {
    if (!stdin.isTTY && !flag('--listar')) {
      console.log('(sem terminal interativo — mostrando lista)\n');
    }
    pautas.forEach((t, i) => console.log(resumo(t, i, pautas.length) + `\n  id:       ${t.id}`));
    console.log(`\n${pautas.length} pendente(s). Para decidir uma a uma, rode sem --listar num terminal.`);
    return;
  }

  const r = await interativo(pautas);
  console.log(`\n${r.aprovadas} aprovada(s) · ${r.rejeitadas} rejeitada(s) · ${r.puladas} pulada(s)`);
  if (r.aprovadas) console.log('As aprovadas entram na fila e saem no cron das 09:00, uma por dia.');
}

main().catch((e) => { console.error('Erro:', e); process.exit(1); });
