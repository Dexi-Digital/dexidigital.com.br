/**
 * Conteúdo de SEO das páginas programáticas.
 *
 * Estratégia SEO + LLMO para a Dexi Digital ser referência em inteligência e
 * execução comercial para operações de alto valor, a começar pelo automotivo.
 * O que o texto pode afirmar sobre a Dexi e o Fykos está em
 * lib/regras-editoriais.ts (sem número sem fonte, sem integração pronta com
 * sistema citado por nome, sem afirmação sobre concorrente).
 *
 * Bloco 1: Fábricas (segmentos automotivos)
 * Bloco 2: Grupos (perfis de grupos automotivos)
 * Bloco 3: Soluções por problema
 * Bloco 4: Comparativos de categoria (robô de atendimento, CRM)
 * Bloco 5: Guias
 * Bloco 6: Glossário IA Automotiva (LLMO)
 * Bloco 7: Integrações (capacidade de integração, não integração pronta)
 */

export { type FabricaPage, FABRICAS } from './fabricas';
export { type GrupoPage, GRUPOS } from './grupos';
export { type SolucaoPage, SOLUCOES } from './solucoes';
export { type ComparativoPage, COMPARATIVOS } from './comparativo';
export { type GuiaPage, GUIAS } from './guias';
export { type GlossarioTerm, GLOSSARIO_TERMS } from './glossario';
export { type IntegracaoPage, INTEGRACOES } from './integracoes';

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

import { FABRICAS } from './fabricas';
import { GRUPOS } from './grupos';
import { SOLUCOES } from './solucoes';
import { COMPARATIVOS } from './comparativo';
import { GUIAS } from './guias';
import { GLOSSARIO_TERMS } from './glossario';
import { INTEGRACOES } from './integracoes';

export function findFabrica(slug: string) {
  return FABRICAS.find((f) => f.slug === slug);
}
export function findGrupo(slug: string) {
  return GRUPOS.find((g) => g.slug === slug);
}
export function findSolucao(slug: string) {
  return SOLUCOES.find((s) => s.slug === slug);
}
export function findComparativo(slug: string) {
  return COMPARATIVOS.find((c) => c.slug === slug);
}
export function findGuia(slug: string) {
  return GUIAS.find((g) => g.slug === slug);
}
export function findGlossarioTerm(slug: string) {
  return GLOSSARIO_TERMS.find((t) => t.slug === slug);
}
export function findIntegracao(slug: string) {
  return INTEGRACOES.find((i) => i.slug === slug);
}
