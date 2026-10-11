'use client';

import { useState } from 'react';
import { trackFormSubmit } from '@/lib/tracking';
import { SEGMENTOS, TAMANHOS_OPERACAO, DESAFIOS } from '@/lib/lead-aderencia';

const CAMPOS_INICIAIS = {
  nome: '',
  cargo: '',
  empresa: '',
  email: '',
  whatsapp: '',
  segmento: '',
  tamanhoOperacao: '',
  desafio: '',
  crm: '',
};

const CHAVES_UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const ERRO_PADRAO =
  'Não foi possível enviar agora. Tente novamente ou escreva para contato@dexidigital.com.br';

// De onde a pessoa veio: CTA clicado (?cta=), página e UTMs presentes na URL.
function rastreioDaPagina() {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const chave of CHAVES_UTM) {
    const valor = params.get(chave);
    if (valor) utm[chave] = valor;
  }
  return { cta: params.get('cta') ?? 'direto', pagina: window.location.href, utm };
}

export default function ContactForm() {
  const [formData, setFormData] = useState(CAMPOS_INICIAIS);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const eventId = crypto.randomUUID();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, origem: 'dexi', ...rastreioDaPagina(), eventId }),
      });

      if (!response.ok) {
        const corpo = await response.json().catch(() => null);
        throw new Error(typeof corpo?.error === 'string' ? corpo.error : ERRO_PADRAO);
      }

      setStatus('success');
      trackFormSubmit('contact_form', true, eventId);
      setFormData(CAMPOS_INICIAIS);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error && error.message ? error.message : ERRO_PADRAO);
      trackFormSubmit('contact_form', false);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8 animate-fade-in-up" role="status">
        <div className="w-16 h-16 bg-[var(--color-success-100)] dark:bg-[var(--color-success-900)]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[var(--color-success-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-h3 mb-2">Solicitação recebida</h3>
        <p className="text-body-sm text-[var(--text-secondary)] mb-6">
          Vamos analisar as informações e entrar em contato para agendar a conversa de aderência.
        </p>
        <button onClick={() => setStatus('idle')} className="btn btn-ghost">
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base";
  const labelClasses = "block text-sm font-medium text-[var(--text-primary)] mb-1.5";
  const obrigatorio = <span className="text-[var(--color-error-500)]">*</span>;
  const opcional = <span className="font-normal text-[var(--text-tertiary)]">(opcional)</span>;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className={labelClasses}>
            Nome {obrigatorio}
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            autoComplete="name"
            value={formData.nome}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="cargo" className={labelClasses}>
            Cargo {obrigatorio}
          </label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            required
            autoComplete="organization-title"
            value={formData.cargo}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Ex.: Diretor comercial"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="empresa" className={labelClasses}>
            Empresa {obrigatorio}
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            autoComplete="organization"
            value={formData.empresa}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            E-mail corporativo {obrigatorio}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClasses}>
          WhatsApp {opcional}
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          autoComplete="tel"
          value={formData.whatsapp}
          onChange={handleChange}
          className={inputClasses}
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label htmlFor="segmento" className={labelClasses}>
          Segmento {obrigatorio}
        </label>
        <select
          id="segmento"
          name="segmento"
          required
          value={formData.segmento}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Selecione</option>
          {SEGMENTOS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tamanhoOperacao" className={labelClasses}>
          Tamanho da operação {obrigatorio}
        </label>
        <select
          id="tamanhoOperacao"
          name="tamanhoOperacao"
          required
          value={formData.tamanhoOperacao}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Volume aproximado de oportunidades</option>
          {TAMANHOS_OPERACAO.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="desafio" className={labelClasses}>
          Desafio mais relevante {obrigatorio}
        </label>
        <select
          id="desafio"
          name="desafio"
          required
          value={formData.desafio}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Selecione</option>
          {DESAFIOS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="crm" className={labelClasses}>
          CRM atual {opcional}
        </label>
        <input
          type="text"
          id="crm"
          name="crm"
          value={formData.crm}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Ex.: Syonet, Salesforce, RD Station"
        />
      </div>

      {status === 'error' && (
        <div className="p-4 bg-[var(--color-error-50)] dark:bg-[var(--color-error-900)]/20 border border-[var(--color-error-200)] dark:border-[var(--color-error-800)] rounded-xl animate-fade-in" role="alert">
          <p className="text-sm text-[var(--color-error-600)]">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary w-full justify-center py-4"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </>
        ) : (
          'Solicitar conversa de aderência'
        )}
      </button>

      <p className="text-xs text-[var(--text-tertiary)] text-center">
        Nesta etapa não pedimos dados confidenciais de carteira.
      </p>
    </form>
  );
}
