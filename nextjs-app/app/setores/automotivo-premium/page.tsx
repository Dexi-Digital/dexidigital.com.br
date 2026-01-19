import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IA para Grupos Automotivos Premium | Dexi Digital',
  description: 'Consultoria de IA e inteligência de dados para concessionárias e grupos automotivos premium. Aumente conversão de leads, otimize estoque e unifique dados do showroom ao pós-venda.',
  keywords: ['IA para concessionárias', 'inteligência de dados automotivo', 'grupos automotivos premium', 'conversão de leads automotivo', 'tecnologia brasileira'],
};

const challenges = [
  {
    problem: 'Leads de alta qualidade perdidos por falta de follow-up inteligente',
    solution: 'IA para priorização e nurturing automático de leads com alta propensão de compra',
    result: '+25% conversão de leads em vendas',
  },
  {
    problem: 'Dados fragmentados entre showroom, oficina e pós-venda',
    solution: 'Visão 360° do cliente com inteligência de dados unificada',
    result: '+40% retenção de clientes',
  },
  {
    problem: 'Estoque desalinhado com demanda real do mercado',
    solution: 'Modelos preditivos de demanda por modelo, cor e opcional',
    result: '-30% estoque ocioso',
  },
  {
    problem: 'Vendedores sem visibilidade do histórico completo do cliente',
    solution: 'Dashboard integrado com próximas ações recomendadas por IA',
    result: '+20% ticket médio',
  },
];

const cases = [
  {
    sector: 'Montadora de luxo alemã',
    problem: 'Leads de test drive convertendo apenas 8% em vendas',
    approach: 'Sistema de scoring de leads com IA + automação de nurturing personalizado',
    results: ['Conversão aumentou de 8% para 12%', 'Redução de 40% no ciclo de vendas', 'ROI de 380% em 6 meses'],
  },
  {
    sector: 'Grupo automotivo premium brasileiro',
    problem: 'Dados isolados em 12 concessionárias, sem visão consolidada',
    approach: 'Data warehouse unificado + dashboards executivos em tempo real',
    results: ['Visão 360° de 180k clientes', 'Estoque otimizado em -30%', 'Campanhas 3x mais efetivas'],
  },
];

export default function AutomotivoPremiumPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline text-primary-600 mb-4">Setor Automotivo Premium</p>
            <h1 className="text-display mb-6">
              IA para conversão de leads em{' '}
              <span className="text-primary-600">concessionárias premium</span>
            </h1>
            <p className="text-lead mb-8">
              Inteligência de dados e IA estratégica para grupos automotivos que 
              vendem experiência, não apenas veículos. Tecnologia brasileira com 
              expertise comprovada no setor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn btn-primary btn-xl">
                Agendar Diagnóstico Automotivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Desafios que resolvemos</h2>
              <p className="text-lead">Problemas reais de grupos automotivos, soluções comprovadas</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((item, index) => (
                <div key={index} className="card p-6">
                  <div className="mb-4">
                    <span className="badge badge-neutral mb-3">Desafio</span>
                    <p className="text-body font-medium text-gray-800">{item.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="badge badge-primary mb-3">Solução Dexi</span>
                    <p className="text-body-sm text-gray-600">{item.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-h5 text-green-600">{item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section-alt">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Cases de sucesso</h2>
              <p className="text-lead">Resultados reais com clientes do setor (sob NDA)</p>
            </div>

            <div className="space-y-8">
              {cases.map((caseItem, index) => (
                <div key={index} className="card p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-overline text-primary-600 mb-2">Setor</p>
                      <p className="text-h5">{caseItem.sector}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <p className="text-body-sm font-semibold text-gray-700">Problema:</p>
                        <p className="text-body">{caseItem.problem}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-body-sm font-semibold text-gray-700">Abordagem Dexi:</p>
                        <p className="text-body">{caseItem.approach}</p>
                      </div>
                      <div>
                        <p className="text-body-sm font-semibold text-gray-700 mb-2">Resultados:</p>
                        <ul className="flex flex-wrap gap-3">
                          {caseItem.results.map((result, idx) => (
                            <li key={idx} className="badge badge-success">{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Dexi for Automotive */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-h2">Por que a Dexi para automotivo?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-h5 mb-3">Experiência comprovada</h3>
                <p className="text-body">10+ anos trabalhando com grupos automotivos. Conhecemos os sistemas (DMS, CRM), as integrações e os desafios reais do setor.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-h5 mb-3">Foco em resultados de vendas</h3>
                <p className="text-body">Não entregamos relatórios bonitos. Entregamos mais conversão, mais retenção e menos estoque parado.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-h5 mb-3">Tecnologia brasileira</h3>
                <p className="text-body">Equipe local, suporte em português, conhecimento do mercado brasileiro e compliance com LGPD.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-h5 mb-3">IA com governança</h3>
                <p className="text-body">IA explicável e auditável. Você entende cada recomendação e mantém controle total sobre os dados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 text-white mb-6">
              Pronto para transformar seus dados em vendas?
            </h2>
            <p className="text-lead text-primary-100 mb-10">
              Agende um diagnóstico gratuito e descubra como IA pode aumentar
              sua conversão de leads em até 50%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn btn-white btn-xl">
                Agendar Diagnóstico em 24h
              </Link>
              <Link href="/metodologia" className="btn btn-outline-white btn-xl">
                Conhecer metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

