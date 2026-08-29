#!/usr/bin/env node
/**
 * Radar de concorrência — descoberta de pauta, não coleta de conteúdo.
 *
 * Lê APENAS título, URL e data dos blogs concorrentes: o que eles cobrem, não
 * o que eles escreveram. O corpo dos artigos nunca é baixado nem armazenado.
 *
 * A distinção não é jurídica só na forma. Reescrever texto alheio produz
 * derivado (problema de direito autoral) e, em busca, conteúdo reciclado que
 * o Google já sabe identificar. Usar a pauta do concorrente para descobrir
 * lacuna e escrever original a partir do material da própria casa é
 * inteligência competitiva comum — e é o que este script habilita.
 *
 * O que ele faz:
 *   1. coleta os títulos publicados pelos concorrentes
 *   2. descarta o que a Dexi já cobriu (517 posts + banco de pautas)
 *   3. classifica o que sobra por vertical e pilar
 *   4. semeia como 'pending_review' — NUNCA direto na fila de publicação
 *
 * A curadoria humana é obrigatória por desenho: pauta de concorrente é sinal
 * de mercado, não decisão editorial.
 *
 * Uso:
 *   node --env-file=.env.local scripts/radar-concorrencia.mjs            # relatório
 *   node --env-file=.env.local scripts/radar-concorrencia.mjs --semear   # grava
 */

import { getAllArticles } from '../lib/blog-data.ts';
import { getPublishedDbPosts } from '../lib/blog-db.ts';
import { seedTopics, getAllTopicTitles } from '../lib/topic-bank-db.ts';
import { isDuplicateTitle } from '../lib/topic-deduplicator.ts';
import { PILLARS } from '../lib/pillars.ts';

const SEMEAR = process.argv.includes('--semear');

const FONTES = [
  { nome: 'Syonet',     tipo: 'rss',     url: 'https://blog.syonet.com/rss.xml' },
  { nome: 'Followize',  tipo: 'rss',     url: 'https://followize.com.br/feed' },
  { nome: 'Motorleads', tipo: 'sitemap', url: 'https://www.motorleads.co/sitemap.xml' },
];

function decodificar(t) {
  return t
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function coletarRss(fonte) {
  const xml = await (await fetch(fonte.url)).text();
  const itens = xml.split(/<item[\s>]/).slice(1);
  return itens.map((bloco) => {
    const t = bloco.match(/<title>([\s\S]*?)<\/title>/);
    const l = bloco.match(/<link>([\s\S]*?)<\/link>/);
    return t ? { titulo: decodificar(t[1]), url: l ? decodificar(l[1]) : '', fonte: fonte.nome } : null;
  }).filter(Boolean);
}

// Motorleads é renderizado em JS: curl no HTML volta vazio. O sitemap é a
// única via headless. O slug vira título aproximado — suficiente para
// descobrir tema, que é tudo o que precisamos.
async function coletarSitemap(fonte) {
  const xml = await (await fetch(fonte.url)).text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const IGNORAR = /\/(es|en)(\/|$)|\/(quem-somos|contato|planos|precos|trabalhe|pagina-de|politica|termos|obrigado|home)?$|copy-of|teste-/i;
  // O Motorleads publica o MESMO post em pt e es, com slug espanhol na raiz
  // (nao sob /es/). Sem isto, metade do radar vira pauta de outro mercado.
  const ESPANHOL = /(^|-)(el|los|las|tu|tus|del|un|una)-|ventas|costo|cuestan|errores|mueren|donde|concesionaria|agencia|autos|reducir|convertir|investiga|llegar|creo|mayor-|piso-de/;
  return locs
    .filter((u) => !IGNORAR.test(u))
    .map((u) => {
      const slug = u.replace(/\/$/, '').split('/').pop() ?? '';
      // O sitemap mistura landing de produto ("autogestor-gestao-de-estoque",
      // "motorvision", "investidores") com post, e nenhuma heuristica de slug
      // separa os dois com confianca. A escolha aqui e PRECISAO sobre alcance:
      // so entra slug com marca editorial explicita. Perde-se post valido, mas
      // o radar fica revisavel — radar com 141 itens ruidosos ninguem le.
      if (ESPANHOL.test(slug)) return null;
      if (!/^(como|por-que|porque|o-que|quando|onde|quais|quanto|guia|checklist|erros|dicas|passos|motivos|\d+)-/.test(slug)) return null;
      const titulo = slug.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
      return { titulo, url: u, fonte: fonte.nome };
    })
    .filter(Boolean);
}

const VERTICAIS = [
  { vertical: 'Automotivo', padrao: /concessionar|automotiv|veicul|carro|montadora|revenda|seminovo|moto|dms|showroom|test.?drive|dealer/i },
  { vertical: 'Clínicas', padrao: /clinic|paciente|estetic|procedimento|consulta|medic|odonto|paciente/i },
  { vertical: 'Construção e incorporação', padrao: /imobiliar|incorporad|construtor|corretor|apartamento|decorado|lancamento|vgv/i },
];

function classificar(titulo) {
  for (const { vertical, padrao } of VERTICAIS) if (padrao.test(titulo)) return vertical;
  return 'Automotivo'; // vertical carro-chefe quando o tema é genérico de vendas
}

function pilarMaisProximo(titulo, vertical) {
  const t = titulo.toLowerCase();
  const doVertical = PILLARS.filter((p) => p.vertical === vertical);
  const candidatos = doVertical.length ? doVertical : PILLARS;
  let melhor = null, melhorScore = 0;
  for (const p of candidatos) {
    const palavras = [...p.title.toLowerCase().split(/\W+/), ...p.cluster.toLowerCase().split(/\W+/)]
      .filter((w) => w.length > 4);
    const score = palavras.filter((w) => t.includes(w)).length;
    if (score > melhorScore) { melhor = p; melhorScore = score; }
  }
  // Sem casamento real, devolve null em vez de fingir. Atribuir pilar errado
  // e pior que nao atribuir: o gerador linkaria para o lugar errado.
  return melhor ? `/${melhor.slug}` : null;
}

async function main() {
  const jaCobertos = [
    ...getAllArticles().map((a) => a.title),
    ...getPublishedDbPosts().map((p) => p.title),
    ...getAllTopicTitles(),
  ];
  console.log(`Base de comparação: ${jaCobertos.length} títulos já cobertos ou em pauta.\n`);

  const coletados = [];
  for (const fonte of FONTES) {
    try {
      const itens = fonte.tipo === 'rss' ? await coletarRss(fonte) : await coletarSitemap(fonte);
      console.log(`${fonte.nome}: ${itens.length} publicações lidas`);
      coletados.push(...itens);
    } catch (e) {
      console.error(`${fonte.nome}: FALHOU (${e.message})`);
    }
  }

  // Notícia institucional do concorrente (fusão, rodada, prêmio, novo produto)
  // não é pauta de mercado — é release deles.
  const RELEASE = /\b(fus[aã]o|capta[cç][aã]o|aquisi[cç][aã]o|rodada|investimento|parceria|prêmio|premio|lan[cç]a|anuncia|nova vers[aã]o|release|webinar|evento|dealer night)\b/i;

  const novos = [];
  let repetidos = 0;
  let releases = 0;
  for (const item of coletados) {
    if (RELEASE.test(item.titulo)) { releases += 1; continue; }
    if (isDuplicateTitle(item.titulo, jaCobertos) || isDuplicateTitle(item.titulo, novos.map((n) => n.titulo))) {
      repetidos += 1;
      continue;
    }
    novos.push(item);
  }

  console.log(`\n${coletados.length} coletadas | ${releases} release institucional | ${repetidos} já cobertas | ${novos.length} lacunas\n`);

  const pautas = novos.map((n) => {
    const vertical = classificar(n.titulo);
    return {
      item: n,
      seed: {
        title: n.titulo,
        vertical,
        cluster: `Radar — ${n.fonte}`,
        keyword: n.titulo.toLowerCase().split(/\s+/).slice(0, 5).join(' '),
        requiredData: 'Ângulo próprio da Dexi. NÃO reproduzir o texto da fonte — usar apenas como sinal de tema.',
        dataSource: n.url,
        pillarLink: pilarMaisProximo(n.titulo, vertical) ?? '',
        week: 99,
      },
    };
  });

  for (const v of [...new Set(pautas.map((p) => p.seed.vertical))]) {
    const doV = pautas.filter((p) => p.seed.vertical === v);
    console.log(`── ${v} (${doV.length})`);
    for (const p of doV) console.log(`   [${p.item.fonte}] ${p.seed.title.slice(0, 78)}\n      pilar: ${p.seed.pillarLink || '(sem pilar claro — definir na curadoria)'}`);
    console.log('');
  }

  if (!SEMEAR) {
    console.log('Relatório apenas. Use --semear para gravar como pending_review.');
    return;
  }
  const n = seedTopics(pautas.map((p) => p.seed), 'pending_review');
  console.log(`${n} pauta(s) gravada(s) como pending_review.`);
  console.log('Nenhuma entra na fila de publicação sem aprovação explícita.');
}

main().catch((e) => { console.error('Erro:', e); process.exit(1); });
