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
    // TODO: Integrate with email service
    console.log('Lead captured:', { email, nome, formData, results: calculateROI() });
    setEmailSubmitted(true);
  };

  const results = showResults ? calculateROI() : null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Ferramenta Gratuita</span>
            <h1 className="text-display mb-6">
              Calculadora de ROI em Dados
            </h1>
            <p className="text-lead">
              Estime o retorno financeiro de um projeto de inteligência de dados. 
              Responda algumas perguntas e receba uma análise personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {!showResults ? (
              <div className="card p-8">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Etapa {step} de 3</span>
                    <span>{Math.round((step / 3) * 100)}% completo</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Company Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-h3 mb-4">Sobre sua empresa</h2>
                    
                    <div>
                      <label className="form-label">Faturamento anual (R$)</label>
                      <input
                        type="number"
                        name="faturamentoAnual"
                        value={formData.faturamentoAnual}
                        onChange={handleInputChange}
                        placeholder="Ex: 50000000"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Número de funcionários</label>
                      <input
                        type="number"
                        name="numeroFuncionarios"
                        value={formData.numeroFuncionarios}
                        onChange={handleInputChange}
                        placeholder="Ex: 200"
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Setor</label>
                      <select
                        name="setor"
                        value={formData.setor}
                        onChange={handleInputChange}
                        className="form-select"
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
                    
                    <button
                      onClick={() => setStep(2)}
                      className="btn btn-primary w-full"
                    >
                      Continuar
                    </button>
                  </div>
                )}

                {/* Step 2: Current State */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-h3 mb-4">Situação atual</h2>

                    <div>
                      <label className="form-label">Horas/mês gastas em relatórios manuais (por pessoa)</label>
                      <input
                        type="number"
                        name="horasRelatorios"
                        value={formData.horasRelatorios}
                        onChange={handleInputChange}
                        placeholder="Ex: 20"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="form-label">Quantas pessoas fazem relatórios manualmente?</label>
                      <input
                        type="number"
                        name="funcionariosRelatorios"
                        value={formData.funcionariosRelatorios}
                        onChange={handleInputChange}
                        placeholder="Ex: 5"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="form-label">Decisões atrasadas por falta de dados (por mês)?</label>
                      <select
                        name="decisoesAtrasadas"
                        value={formData.decisoesAtrasadas}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Selecione...</option>
                        <option value="raramente">Raramente</option>
                        <option value="algumas">Algumas vezes</option>
                        <option value="frequentemente">Frequentemente</option>
                        <option value="sempre">Quase sempre</option>
                      </select>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="btn btn-outline flex-1"
                      >
                        Voltar
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="btn btn-primary flex-1"
                      >
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
                      <label className="form-label">Objetivo principal</label>
                      <select
                        name="objetivoPrincipal"
                        value={formData.objetivoPrincipal}
                        onChange={handleInputChange}
                        className="form-select"
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
                      <label className="form-label">Prazo desejado para implementação</label>
                      <select
                        name="prazoImplementacao"
                        value={formData.prazoImplementacao}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="">Selecione...</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="indefinido">Sem prazo definido</option>
                      </select>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(2)}
                        className="btn btn-outline flex-1"
                      >
                        Voltar
                      </button>
                      <button
                        onClick={() => setShowResults(true)}
                        className="btn btn-primary flex-1"
                      >
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
                    <div className="stat-card">
                      <span className="text-body-sm text-gray-600">Economia anual estimada</span>
                      <span className="text-h2 text-primary-600">{formatCurrency(results!.economiaAnual)}</span>
                    </div>
                    <div className="stat-card">
                      <span className="text-body-sm text-gray-600">ROI estimado</span>
                      <span className="text-h2 text-green-600">{results!.roi}%</span>
                    </div>
                    <div className="stat-card">
                      <span className="text-body-sm text-gray-600">Payback estimado</span>
                      <span className="text-h2">{results!.paybackMeses} meses</span>
                    </div>
                    <div className="stat-card">
                      <span className="text-body-sm text-gray-600">Horas economizadas/mês</span>
                      <span className="text-h2">{results!.economiaHorasMensal}h</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-h5 mb-4">Detalhamento</h3>
                    <div className="space-y-3 text-body-sm">
                      <div className="flex justify-between">
                        <span>Economia em horas de trabalho</span>
                        <span className="font-semibold">{formatCurrency(results!.economiaAnual)}/ano</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Aumento de receita (estimado)</span>
                        <span className="font-semibold">{formatCurrency(results!.aumentoReceita)}/ano</span>
                      </div>
                      <div className="flex justify-between border-t pt-3 mt-3">
                        <span className="font-semibold">Benefício total</span>
                        <span className="font-bold text-primary-600">{formatCurrency(results!.beneficioTotal)}/ano</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-caption text-center">
                    * Estimativa baseada em benchmarks do setor. Resultados reais podem variar.
                  </p>
                </div>

                {/* Email capture for full report */}
                {!emailSubmitted ? (
                  <div className="card p-8">
                    <h3 className="text-h4 mb-4 text-center">Receba o relatório completo</h3>
                    <p className="text-body text-center mb-6">
                      Inclui análise detalhada, comparativo com seu setor e recomendações personalizadas.
                    </p>
                    <form onSubmit={handleSubmitEmail} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="form-label">Nome</label>
                          <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Seu nome"
                            required
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label className="form-label">Email corporativo</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@empresa.com.br"
                            required
                            className="form-input"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary w-full">
                        Enviar relatório completo
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="card p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-h4 mb-2">Relatório enviado!</h3>
                    <p className="text-body">Verifique seu email para acessar a análise completa.</p>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={() => { setShowResults(false); setStep(1); }}
                    className="text-primary-600 font-semibold hover:text-primary-700"
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

