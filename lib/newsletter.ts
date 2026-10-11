/**
 * Inscrição na newsletter do blog (/blog).
 *
 * A inscrição é um lead: vai para a tabela `leads` do Supabase com
 * source 'blog_newsletter' e gera um aviso para a caixa interna, o mesmo
 * destino dos pedidos de conversa de aderência.
 *
 * Sem imports com alias: roda no Next e no `node --test`.
 */

export const SOURCE_NEWSLETTER = 'blog_newsletter';

export interface InscricaoNewsletter {
  email: string;
  pagina: string;
}

export type ResultadoInscricao =
  | { ok: true; inscricao: InscricaoNewsletter }
  | { ok: false; erro: string };

export interface RegistroNewsletter {
  name: string;
  email: string;
  service: string;
  message: string;
  status: 'new';
  source: typeof SOURCE_NEWSLETTER;
}

// Sem espaço, aspas ou sinais de HTML: o e-mail vai para o corpo do aviso interno.
const EMAIL = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

function ehObjeto(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

export function validarInscricaoNewsletter(corpo: unknown): ResultadoInscricao {
  if (!ehObjeto(corpo)) return { ok: false, erro: 'Requisição inválida.' };

  // Campo-isca: invisível para quem preenche o formulário, robôs costumam preencher.
  if (typeof corpo.site === 'string' && corpo.site.trim()) {
    return { ok: false, erro: 'Requisição inválida.' };
  }

  const email = typeof corpo.email === 'string' ? corpo.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !EMAIL.test(email)) {
    return { ok: false, erro: 'Informe um e-mail válido.' };
  }

  const pagina = typeof corpo.pagina === 'string' ? corpo.pagina.trim().slice(0, 300) : '';
  return { ok: true, inscricao: { email, pagina } };
}

export function montarRegistroNewsletter(inscricao: InscricaoNewsletter): RegistroNewsletter {
  const linhas = ['[Newsletter do blog]'];
  if (inscricao.pagina) linhas.push(`Página: ${inscricao.pagina}`);
  return {
    name: 'Assinante da newsletter',
    email: inscricao.email,
    service: 'Newsletter do blog',
    message: linhas.join('\n'),
    status: 'new',
    source: SOURCE_NEWSLETTER,
  };
}
