import { execFileSync } from 'node:child_process';

/**
 * Data da última edição de cada página, para o lastmod do sitemap.
 *
 * Antes toda URL saía com a hora da requisição, e o Google aprende a ignorar
 * um lastmod que muda a cada leitura. Agora vale a data do último commit que
 * mexeu nos arquivos da página. O git é lido uma vez por processo (o pm2
 * reinicia a cada deploy). Sem git, a URL sai sem lastmod, o que é melhor do
 * que uma data inventada.
 */

/** Lê a saída de `git log --format=@%cI --name-only`: arquivo -> último commit. */
export function datasDoLog(log: string): Map<string, Date> {
  const datas = new Map<string, Date>();
  let data: Date | undefined;
  for (const linha of log.split('\n')) {
    if (linha.startsWith('@')) data = new Date(linha.slice(1));
    // O log vem do mais novo para o mais antigo: vale a primeira aparição.
    else if (linha && data && !datas.has(linha)) datas.set(linha, data);
  }
  return datas;
}

/** A data mais recente entre os arquivos, ou pastas inteiras, informados. */
export function maisRecenteEntre(datas: Map<string, Date>, caminhos: string[]): Date | undefined {
  let maisRecente: Date | undefined;
  for (const [arquivo, data] of datas) {
    const daPagina = caminhos.some((c) => arquivo === c || arquivo.startsWith(`${c}/`));
    if (daPagina && (!maisRecente || data > maisRecente)) maisRecente = data;
  }
  return maisRecente;
}

let doRepositorio: Map<string, Date> | undefined;

export function ultimaEdicao(...caminhos: string[]): Date | undefined {
  if (!doRepositorio) {
    try {
      const log = execFileSync('git', ['log', '--format=@%cI', '--name-only', '--', 'app', 'lib', 'components'], {
        cwd: process.cwd(),
        encoding: 'utf8',
        maxBuffer: 64 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'ignore'],
      });
      doRepositorio = datasDoLog(log);
    } catch {
      doRepositorio = new Map();
    }
  }
  return maisRecenteEntre(doRepositorio, caminhos);
}

/** A mais recente entre várias datas, ignorando as ausentes. */
export function maisRecente(...datas: (Date | string | null | undefined)[]): Date | undefined {
  let resultado: Date | undefined;
  for (const d of datas) {
    if (!d) continue;
    const data = typeof d === 'string' ? new Date(d) : d;
    if (Number.isNaN(data.getTime())) continue;
    if (!resultado || data > resultado) resultado = data;
  }
  return resultado;
}
