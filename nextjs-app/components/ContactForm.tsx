'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
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
        service: '',
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

      <div>
        <label htmlFor="service" className="form-label">
          Serviço de interesse
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Selecione um serviço</option>
          <option value="inteligencia-dados">Inteligência de Dados</option>
          <option value="software-sob-medida">Software Sob Medida</option>
          <option value="ia-empresas">IA para Empresas</option>
          <option value="consultoria">Consultoria Técnica</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label required">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="form-textarea"
          placeholder="Conte-nos sobre seus desafios e objetivos..."
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
          'Enviar mensagem'
        )}
      </button>
    </form>
  );
}

