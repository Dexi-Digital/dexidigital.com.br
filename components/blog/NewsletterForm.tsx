'use client';

import { useState } from 'react';
import Link from 'next/link';

type Estado = 'parado' | 'enviando' | 'inscrito' | 'erro';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [site, setSite] = useState('');
  const [estado, setEstado] = useState<Estado>('parado');
  const [erro, setErro] = useState('');

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado('enviando');
    setErro('');

    try {
      const resposta = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, site, pagina: window.location.pathname }),
      });
      const dados = await resposta.json().catch(() => ({}));
      if (!resposta.ok) {
        throw new Error(dados.error || 'Não foi possível concluir a inscrição.');
      }
      setEstado('inscrito');
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Não foi possível concluir a inscrição.');
      setEstado('erro');
    }
  }

  if (estado === 'inscrito') {
    return (
      <p role="status" className="text-lead text-[var(--text-primary)]">
        Inscrição recebida. Obrigado pelo interesse.
      </p>
    );
  }

  return (
    <form onSubmit={enviar} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <label htmlFor="newsletter-email" className="sr-only">
          Seu e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base"
        />
        {/* Campo-isca: fora da tela e fora do Tab; só robô preenche. */}
        <input
          type="text"
          name="site"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <button type="submit" className="btn btn-primary" disabled={estado === 'enviando'}>
          {estado === 'enviando' ? 'Enviando...' : 'Assinar'}
        </button>
      </div>

      {estado === 'erro' && (
        <p role="alert" className="mt-3 text-body-sm text-red-600 dark:text-red-400">
          {erro}
        </p>
      )}

      <p className="mt-4 text-xs text-[var(--text-tertiary)]">
        Ao assinar, você aceita receber nossos artigos por e-mail. Veja a{' '}
        <Link href="/politica-de-privacidade-fykos" className="underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
}
