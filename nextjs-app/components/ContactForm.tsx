'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    sector: '',
    challenge: '',
    urgency: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        companySize: '',
        sector: '',
        challenge: '',
        urgency: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Tente novamente ou envie um email para contato@dexidigital.com.br');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-success-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-h3 mb-2">Mensagem enviada!</h3>
        <p className="text-body mb-6">
          Obrigado pelo contato. Responderemos em até 24 horas.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn btn-ghost"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="form-label required">
          Nome completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="João Silva"
        />
      </div>

      <div>
        <label htmlFor="email" className="form-label required">
          Email corporativo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="joao@empresa.com.br"
        />
      </div>

      <div>
        <label htmlFor="company" className="form-label required">
          Empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="form-input"
          placeholder="Nome da empresa"
        />
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companySize" className="form-label required">
            Tamanho da empresa
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            value={formData.companySize}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Selecione</option>
            <option value="1-10">1-10 funcionários</option>
            <option value="11-50">11-50 funcionários</option>
            <option value="51-200">51-200 funcionários</option>
            <option value="201-500">201-500 funcionários</option>
            <option value="500+">500+ funcionários</option>
          </select>
        </div>

        <div>
          <label htmlFor="sector" className="form-label required">
            Setor
          </label>
          <select
            id="sector"
            name="sector"
            required
            value={formData.sector}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Selecione</option>
            <option value="automotivo">Automotivo / Concessionárias</option>
            <option value="varejo">Varejo / E-commerce</option>
            <option value="financeiro">Financeiro / Seguros</option>
            <option value="saude">Saúde</option>
            <option value="logistica">Logística / Transporte</option>
            <option value="manufatura">Manufatura / Indústria</option>
            <option value="tecnologia">Tecnologia / SaaS</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="form-label required">
          Principal desafio
        </label>
        <select
          id="challenge"
          name="challenge"
          required
          value={formData.challenge}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Selecione o desafio principal</option>
          <option value="conversao-leads">Baixa conversão de leads em vendas</option>
          <option value="dados-fragmentados">Dados fragmentados / sem visão unificada</option>
          <option value="processos-manuais">Processos manuais que precisam de automação</option>
          <option value="decisoes-dados">Dificuldade em tomar decisões baseadas em dados</option>
          <option value="sistema-legado">Sistema legado que precisa ser modernizado</option>
          <option value="ia-implementar">Quero implementar IA mas não sei por onde começar</option>
          <option value="outro">Outro desafio</option>
        </select>
      </div>

      <div>
        <label htmlFor="urgency" className="form-label required">
          Urgência
        </label>
        <select
          id="urgency"
          name="urgency"
          required
          value={formData.urgency}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Qual a urgência?</option>
          <option value="imediato">Imediato - preciso resolver agora</option>
          <option value="1-3-meses">1-3 meses - planejando para breve</option>
          <option value="3-6-meses">3-6 meses - explorando opções</option>
          <option value="pesquisa">Apenas pesquisando</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Detalhes adicionais (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="form-textarea"
          placeholder="Conte mais sobre seu contexto, sistemas atuais, expectativas..."
        />
      </div>

      {status === 'error' && (
        <div className="p-4 bg-error-50 border border-error-200 rounded-lg animate-fade-in">
          <p className="text-sm text-error-600">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary btn-xl w-full justify-center"
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
          'Solicitar Diagnóstico Gratuito'
        )}
      </button>
    </form>
  );
}

