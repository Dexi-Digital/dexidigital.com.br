/**
 * Provas (cases) da home.
 *
 * Regra do reposicionamento (docs/superpowers/specs/2026-10-11-reposicionamento-dexi-fykos.md):
 * um case só aparece no site com cenário anterior, período, volume analisado,
 * ações iniciadas, negócios efetivamente confirmados e critério de atribuição,
 * MAIS autorização do cliente para os números e a data em que autoria, período
 * e atribuição foram conferidos. A marca só aparece com autorização de marca;
 * sem ela, o case sai identificado pelo segmento.
 *
 * "Pipeline influenciado" não é "receita incremental": nunca use um no lugar
 * do outro em `negociosConfirmados`.
 */

export type CampoCaso =
  | 'cenarioAnterior'
  | 'periodo'
  | 'oportunidadesAnalisadas'
  | 'acoesIniciadas'
  | 'negociosConfirmados'
  | 'criterioAtribuicao';

export interface CasoProva {
  id: string;
  titulo: string;
  segmento: string;
  cenarioAnterior: string | null;
  periodo: string | null;
  oportunidadesAnalisadas: string | null;
  acoesIniciadas: string | null;
  negociosConfirmados: string | null;
  criterioAtribuicao: string | null;
  /** Nome ou marca do cliente. Só é exibido com `autorizacaoMarca`. */
  cliente: string | null;
  autorizacaoMarca: boolean;
  autorizacaoNumeros: boolean;
  /** AAAA-MM-DD em que autoria, período e atribuição foram conferidos. */
  validadoEm: string | null;
}

export const CAMPOS_CASO: { campo: CampoCaso; rotulo: string }[] = [
  { campo: 'cenarioAnterior', rotulo: 'Cenário anterior' },
  { campo: 'periodo', rotulo: 'Período' },
  { campo: 'oportunidadesAnalisadas', rotulo: 'Oportunidades analisadas' },
  { campo: 'acoesIniciadas', rotulo: 'Ações iniciadas' },
  { campo: 'negociosConfirmados', rotulo: 'Negócios efetivamente confirmados' },
  { campo: 'criterioAtribuicao', rotulo: 'Critério de atribuição' },
];

const LIMITE_HOME = 2;

/**
 * Rascunhos montados a partir do que já está publicado em /cases. Ficam fora
 * do site até alguém preencher os campos nulos, obter as autorizações e
 * registrar `validadoEm`.
 */
export const CASOS: CasoProva[] = [
  {
    id: 'automotivo-alto-ticket',
    titulo: 'Venda de alto ticket conduzida do primeiro contato ao fechamento',
    segmento: 'Automotivo · alto ticket',
    cenarioAnterior:
      'Jornada de compra longa, com muitas idas e vindas, em um veículo de altíssimo ticket.',
    periodo: null, // /cases cita "15 dias do primeiro contato ao fechamento": falta o período (datas)
    oportunidadesAnalisadas: null,
    acoesIniciadas: null,
    negociosConfirmados: '1 venda (ticket de R$ 1 milhão)', // conferir documentação
    criterioAtribuicao: null,
    cliente: null,
    autorizacaoMarca: false,
    autorizacaoNumeros: false,
    validadoEm: null,
  },
  {
    id: 'automotivo-duas-rodas',
    titulo: 'Priorização da base em operação de duas rodas premium',
    segmento: 'Automotivo · duas rodas premium',
    cenarioAnterior:
      'Volume alto de leads sem estrutura para priorizar e dar continuidade em escala.',
    periodo: null,
    oportunidadesAnalisadas: '1.230 leads processados',
    acoesIniciadas: null,
    // /cases cita R$ 1,79 mi "em pipeline mapeado": é pipeline influenciado, não negócio confirmado.
    negociosConfirmados: null,
    criterioAtribuicao: null,
    cliente: null,
    autorizacaoMarca: false,
    autorizacaoNumeros: false,
    validadoEm: null,
  },
];

export function casoPublicavel(caso: CasoProva): boolean {
  if (!caso.autorizacaoNumeros || !caso.validadoEm) return false;
  return CAMPOS_CASO.every(({ campo }) => (caso[campo] ?? '').trim() !== '');
}

export function casosPublicaveis(casos: CasoProva[] = CASOS): CasoProva[] {
  return casos.filter(casoPublicavel).slice(0, LIMITE_HOME);
}

export function nomeExibido(caso: CasoProva): string {
  return caso.autorizacaoMarca && caso.cliente ? caso.cliente : caso.segmento;
}
