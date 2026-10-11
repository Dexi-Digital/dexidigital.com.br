/**
 * Travessão (—) é proibido em qualquer texto do site (regra da Dexi, out/2026).
 *
 * Troca cada um pela pontuação que o português aceita no lugar: vírgula entre
 * orações, dois-pontos depois de título ou de rótulo em negrito, hífen entre
 * números e item de lista quando abre a linha. Serve para limpar arquivos de
 * conteúdo e também para o que vem do banco (posts gerados, notícias), na
 * hora de renderizar, porque esse conteúdo vive só na VPS.
 *
 * Sem imports com alias: roda no Next e no `node --test`.
 */

const TRAVESSAO = '—';
const ENTIDADES = /&mdash;|&#8212;|&#x2014;/gi;
// Meia-risca com espaço dos dois lados é usada como travessão; sem espaço é intervalo (7–21).
const MEIA_RISCA_ESPACADA = / +– +/g;

export interface OpcoesSemTravessao {
  /** Texto de título: o primeiro travessão vira dois-pontos. */
  titulo?: boolean;
}

function limparLinha(linha: string, titulo: boolean): string {
  if (!linha.includes(TRAVESSAO)) return linha;
  let s = linha;
  s = s.replace(/^(\s*)— */, '$1- ');
  s = s.replace(/(\d) *— *(\d)/g, '$1-$2');
  s = s.replace(/(\*\*[^*\n]+\*\*) *— */g, '$1: ');
  if (titulo || /^\s*#{1,6}\s/.test(s)) s = s.replace(/ *— */, ': ');
  s = s.replace(/ *— *(\r?)$/, '$1');
  s = s.replace(/ *— *([.,;:!?)\]])/g, '$1');
  s = s.replace(/([,;:(]) *— */g, '$1 ');
  return s.replace(/ *— */g, ', ');
}

export function semTravessao(texto: string, opcoes: OpcoesSemTravessao = {}): string {
  if (!texto) return texto;
  const normalizado = texto.replace(ENTIDADES, TRAVESSAO).replace(MEIA_RISCA_ESPACADA, ` ${TRAVESSAO} `);
  if (!normalizado.includes(TRAVESSAO)) return texto;
  return normalizado
    .split('\n')
    .map((linha) => limparLinha(linha, !!opcoes.titulo))
    .join('\n');
}
