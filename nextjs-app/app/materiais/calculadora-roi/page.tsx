'use client';

import { useState } from 'react';

export default function CalculadoraROIPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Company info
    faturamentoAnual: '',
    numeroFuncionarios: '',
    setor: '',
    // Step 2: Current state
    horasRelatorios: '',
    funcionariosRelatorios: '',
    decisoesAtrasadas: '',
    // Step 3: Goals
    objetivoPrincipal: '',
    prazoImplementacao: '',
  });
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateROI = () => {
    const faturamento = parseFloat(formData.faturamentoAnual) || 0;
    const horasRelatorios = parseFloat(formData.horasRelatorios) || 0;
    const funcionariosRelatorios = parseFloat(formData.funcionariosRelatorios) || 0;
    
    // Simplified ROI calculation
    const custoHoraMedia = 150; // R$/hora
    const economiaHorasMensal = horasRelatorios * funcionariosRelatorios * 0.8; // 80% reduction
    const economiaMensal = economiaHorasMensal * custoHoraMedia;
    const economiaAnual = economiaMensal * 12;
    
    // Additional revenue from better decisions (conservative 1-2% of revenue)
    const aumentoReceita = faturamento * 0.015;
    
    const beneficioTotal = economiaAnual + aumentoReceita;
    const investimentoEstimado = 150000; // R$ estimate for typical project
    const roi = ((beneficioTotal - investimentoEstimado) / investimentoEstimado) * 100;
    const paybackMeses = investimentoEstimado / (beneficioTotal / 12);

    return {
      economiaHorasMensal: Math.round(economiaHorasMensal),
      economiaMensal: Math.round(economiaMensal),
      economiaAnual: Math.round(economiaAnual),
      aumentoReceita: Math.round(aumentoReceita),
      beneficioTotal: Math.round(beneficioTotal),
      roi: Math.round(roi),
      paybackMeses: Math.round(paybackMeses),
    };
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const roiResults = calculateROI();

      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          type: 'calculator',
          title: 'Calculadora de ROI em Dados',
          roiData: {
            ...roiResults,
            formData,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar');
      }

      setEmailSubmitted(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro. Por favor, tente novamente.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const results = showResults ? calculateROI() : null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-base";
  const labelClasses = "block text-sm font-medium text-[var(--text-primary)] mb-1.5";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Ferramenta Gratuita</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Calculadora de <span className="text-display-gradient">ROI em Dados</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Estime o retorno financeiro de um projeto de inteligência de dados.
              Responda algumas perguntas e receba uma análise personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {!showResults ? (
              <div className="card p-8">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-[var(--text-secondary)] mb-2">
                    <span>Etapa {step} de 3</span>
                    <span>{Math.round((step / 3) * 100)}% completo</span>
                  </div>
                  <div className="w-full bg-[var(--bg-secondary)] rounded-full h-2">
                    <div
                      className="bg-[var(--color-primary-600)] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Company Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-h3 mb-4">Sobre sua empresa</h2>

                    <div>
                      <label className={labelClasses}>Faturamento anual (R$)</label>
                      <input
                        type="number"
                        name="faturamentoAnual"
                        value={formData.faturamentoAnual}
                        onChange={handleInputChange}
                        placeholder="Ex: 50000000"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Número de funcionários</label>
                      <input
                        type="number"
                        name="numeroFuncionarios"
                        value={formData.numeroFuncionarios}
                        onChange={handleInputChange}
                        placeholder="Ex: 200"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Setor</label>
                      <select
                        name="setor"
                        value={formData.setor}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="">Selecione...</option>
                        <option value="automotivo">Automotivo</option>
                        <option value="varejo">Varejo</option>
                        <option value="industria">Indústria</option>
                        <option value="servicos">Serviços</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="saude">Saúde</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <button onClick={() => setStep(2)} className="btn btn-primary w-full">
                      Continuar
                    </button>
                  </div>
                )}

                {/* Step 2: Current State */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-h3 mb-4">Situação atual</h2>

                    <div>
                      <label className={labelClasses}>Horas/mês gastas em relatórios manuais (por pessoa)</label>
                      <input
                        type="number"
                        name="horasRelatorios"
                        value={formData.horasRelatorios}
                        onChange={handleInputChange}
                        placeholder="Ex: 20"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Quantas pessoas fazem relatórios manualmente?</label>
                      <input
                        type="number"
                        name="funcionariosRelatorios"
                        value={formData.funcionariosRelatorios}
                        onChange={handleInputChange}
                        placeholder="Ex: 5"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Decisões atrasadas por falta de dados (por mês)?</label>
                      <select
                        name="decisoesAtrasadas"
                        value={formData.decisoesAtrasadas}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="">Selecione...</option>
                        <option value="raramente">Raramente</option>
                        <option value="algumas">Algumas vezes</option>
                        <option value="frequentemente">Frequentemente</option>
                        <option value="sempre">Quase sempre</option>
                      </select>
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => setStep(1)} className="btn btn-secondary flex-1">
                        Voltar
                      </button>
                      <button onClick={() => setStep(3)} className="btn btn-primary flex-1">
                        Continuar
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Goals */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-h3 mb-4">Seus objetivos</h2>

                    <div>
                      <label className={labelClasses}>Objetivo principal</label>
                      <select
                        name="objetivoPrincipal"
                        value={formData.objetivoPrincipal}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="">Selecione...</option>
                        <option value="eficiencia">Aumentar eficiência operacional</option>
                        <option value="decisoes">Melhorar tomada de decisões</option>
                        <option value="custos">Reduzir custos</option>
                        <option value="receita">Aumentar receita</option>
                        <option value="cliente">Melhorar experiência do cliente</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClasses}>Prazo desejado para implementação</label>
                      <select
                        name="prazoImplementacao"
                        value={formData.prazoImplementacao}
                        onChange={handleInputChange}
                        className={inputClasses}
                      >
                        <option value="">Selecione...</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="indefinido">Sem prazo definido</option>
                      </select>
                    </div>

                    <div className="flex gap-4">
                      <button onClick={() => setStep(2)} className="btn btn-secondary flex-1">
                        Voltar
                      </button>
                      <button onClick={() => setShowResults(true)} className="btn btn-primary flex-1">
                        Calcular ROI
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Results */
              <div className="space-y-8">
                <div className="card p-8">
                  <h2 className="text-h3 mb-6 text-center">Seu ROI Estimado</h2>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <span className="text-body-sm text-[var(--text-secondary)]">Economia anual estimada</span>
                      <span className="block text-number-lg text-display-gradient">{formatCurrency(results!.economiaAnual)}</span>
                    </div>
                    <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <span className="text-body-sm text-[var(--text-secondary)]">ROI estimado</span>
                      <span className="block text-number-lg text-[var(--color-success-600)]">{results!.roi}%</span>
                    </div>
                    <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <span className="text-body-sm text-[var(--text-secondary)]">Payback estimado</span>
                      <span className="block text-number-lg text-[var(--text-primary)]">{results!.paybackMeses} meses</span>
                    </div>
                    <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <span className="text-body-sm text-[var(--text-secondary)]">Horas economizadas/mês</span>
                      <span className="block text-number-lg text-[var(--text-primary)]">{results!.economiaHorasMensal}h</span>
                    </div>
                  </div>

                  <div className="bg-[var(--bg-secondary)] rounded-xl p-6 mb-6 border border-[var(--border-subtle)]">
                    <h3 className="text-h5 mb-4">Detalhamento</h3>
                    <div className="space-y-3 text-body-sm text-[var(--text-secondary)]">
                      <div className="flex justify-between">
                        <span>Economia em horas de trabalho</span>
                        <span className="font-semibold text-[var(--text-primary)]">{formatCurrency(results!.economiaAnual)}/ano</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Aumento de receita (estimado)</span>
                        <span className="font-semibold text-[var(--text-primary)]">{formatCurrency(results!.aumentoReceita)}/ano</span>
                      </div>
                      <div className="flex justify-between border-t border-[var(--border-subtle)] pt-3 mt-3">
                        <span className="font-semibold text-[var(--text-primary)]">Benefício total</span>
                        <span className="font-bold text-[var(--color-primary-600)]">{formatCurrency(results!.beneficioTotal)}/ano</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] text-center">
                    * Estimativa baseada em benchmarks do setor. Resultados reais podem variar.
                  </p>
                </div>

                {/* Email capture for full report */}
                {!emailSubmitted ? (
                  <div className="card p-8">
                    <h3 className="text-h4 mb-4 text-center">Receba o relatório completo</h3>
                    <p className="text-body-sm text-[var(--text-secondary)] text-center mb-6">
                      Inclui análise detalhada, comparativo com seu setor e recomendações personalizadas.
                    </p>
                    <form onSubmit={handleSubmitEmail} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClasses}>Nome</label>
                          <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Seu nome"
                            required
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>Email corporativo</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@empresa.com.br"
                            required
                            className={inputClasses}
                          />
                        </div>
                      </div>
                      {submitError && (
                        <p className="text-[var(--color-error-600)] text-sm">{submitError}</p>
                      )}
                      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
                        {isSubmitting ? 'Enviando...' : 'Enviar relatório completo'}
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="card p-8 text-center">
                    <div className="w-16 h-16 bg-[var(--color-success-100)] dark:bg-[var(--color-success-900)]/30 text-[var(--color-success-600)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-h4 mb-2">Relatório enviado!</h3>
                    <p className="text-body-sm text-[var(--text-secondary)]">Verifique seu email para acessar a análise completa.</p>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={() => { setShowResults(false); setStep(1); }}
                    className="text-[var(--color-primary-600)] font-semibold hover:text-[var(--color-primary-700)] transition-base"
                  >
                    ← Refazer cálculo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

