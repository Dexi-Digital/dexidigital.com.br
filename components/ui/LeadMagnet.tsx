'use client';

import { useState } from 'react';

interface LeadMagnetProps {
  type: 'pdf' | 'checklist' | 'calculator';
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  downloadUrl?: string;
}

const typeIcons = {
  pdf: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  checklist: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  calculator: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

export default function LeadMagnet({
  type,
  title,
  description,
  benefits,
  ctaText,
}: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          type,
          title,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar');
      }

      setIsSubmitted(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro. Por favor, tente novamente.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-[var(--color-success-100)] dark:bg-[var(--color-success-900)]/30 text-[var(--color-success-600)] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-h4 mb-2">Material enviado!</h3>
        <p className="text-body-sm text-[var(--text-secondary)]">
          Verifique seu email {email} para acessar o conteúdo.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/30 flex items-center justify-center text-[var(--color-primary-600)]">
          {typeIcons[type]}
        </div>
        <div>
          <h3 className="text-h4 mb-2">{title}</h3>
          <p className="text-body-sm text-[var(--text-secondary)]">{description}</p>
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-body-sm text-[var(--text-secondary)]">
            <svg className="w-4 h-4 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor={`nome-${type}`} className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Nome</label>
          <input
            id={`nome-${type}`}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            required
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base"
          />
        </div>
        <div>
          <label htmlFor={`email-${type}`} className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">Email corporativo</label>
          <input
            id={`email-${type}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@empresa.com.br"
            required
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base"
          />
        </div>
        {error && <p className="text-[var(--color-error-600)] text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full"
        >
          {isSubmitting ? 'Enviando...' : ctaText}
        </button>
        <p className="text-xs text-[var(--text-muted)] text-center">
          Ao enviar, você concorda com nossa política de privacidade.
        </p>
      </form>
    </div>
  );
}

