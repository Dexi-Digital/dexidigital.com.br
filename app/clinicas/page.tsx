import TrackedCTA from '@/components/ui/TrackedCTA';
import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Fykos para Clínicas',
  description:
    'Agenda com buraco é receita que não volta. O Fykos mantém relacionamento contínuo com cada paciente: acompanha procedimentos recorrentes, antecipa retorno e renovação de receita médica e reduz o no-show. Estamos selecionando as primeiras clínicas como casos-fundadores.',
  keywords: [
    'IA para clínicas',
    'relacionamento com pacientes',
    'procedimentos recorrentes',
    'renovação de receita médica',
    'reduzir no-show',
    'remarcação de retorno',
    'gestão de clínica',
    'reativação de pacientes',
    'agenda clínica',
    'Fykos',
  ],
  openGraph: {
    title: 'Fykos para Clínicas | A Dexi não deixa o paciente sumir',
    description:
      'Agenda com buraco é receita que não volta. Relacionamento contínuo com o paciente: procedimentos recorrentes em dia, retorno e renovação de receita médica antecipados e menos no-show. Estamos selecionando as primeiras clínicas como casos-fundadores.',
    type: 'website',
    locale: 'pt_BR',
  },
};

const DIFERENCIAIS = [
  {
    titulo: 'Relacionamento contínuo, não resgate de última hora',
    corpo:
      'O Fykos acompanha quem faz procedimento recorrente: a soroterapia que exige aplicação semanal, a receita médica que precisa ser renovada e não pode esperar três meses por uma consulta. E remarca o retorno na hora certa, antes de a agenda abrir buraco.',
  },
  {
    titulo: 'Comandos com inteligência, execução em trilhos',
    corpo:
      'Regras definidas e cada contato registrado: a execução segue as regras da clínica e respeita a LGPD e o cuidado com dados sensíveis de saúde. Inteligência para decidir, trilhos para executar com controle.',
  },
  {
    titulo: 'Integra, não substitui',
    corpo:
      'O Fykos roda sobre o sistema de gestão e a agenda clínica que você já usa. Sem trocar de ferramenta e sem interromper o atendimento.',
  },
];

export default function ClinicasPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pb-24 md:pb-0 relative">
      <BreadcrumbSchema
        trilha={[
          { nome: 'Clínicas', url: '/clinicas' },
        ]}
      />
      {/* Hero: faixa dark autocontida */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[var(--bg-primary)] py-24 md:py-36 border-b border-[var(--border-subtle)]"
      >
        <div className="hero-img-bg hero-img-bg--light" aria-hidden="true" />
        <div className="hero-img-bg hero-img-bg--dark" aria-hidden="true" />
        <div className="hero-img-scrim" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">FYKOS PARA CLÍNICAS</p>

            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Agenda com buraco é receita que não volta. A Dexi não deixa o{' '}
              <span className="text-result">paciente sumir</span>.
            </h1>

            <p className="text-lead text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto animate-fade-in-up delay-150">
              Cada paciente que não volta leva junto a receita do próximo procedimento. O Fykos
              mantém relacionamento contínuo com quem já é paciente da clínica: acompanha
              procedimentos recorrentes, antecipa retorno e renovação de receita médica e reduz o
              no-show, para que a agenda vire previsibilidade de receita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 animate-fade-in-up delay-200">
              <TrackedCTA
                type="aderencia"
                location="clinicas-hero"
                variant="money"
                text="Avaliar aderência da minha operação"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 diferenciais */}
      <section id="diferenciais" className="section-lg section-gradient">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="section-header text-center">
              <h2 className="text-h2">Cada cadeira vazia é receita que dá para recuperar</h2>
              <p className="text-lead">
                Os três pilares que sustentam o Fykos em qualquer setor, aqui na linguagem da
                clínica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {DIFERENCIAIS.map((d, i) => (
                <div key={d.titulo} className="card p-6 md:p-8 text-left">
                  <span className="text-number text-[var(--color-primary-500)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h5 mt-3 mb-2">{d.titulo}</h3>
                  <p className="text-body-sm text-[var(--text-secondary)]">{d.corpo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section
        id="integracoes"
        className="section bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-2">CONECTA AO SEU NÚCLEO</p>
            <h2 className="text-h2 mb-8">Integrações</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                Seu sistema de gestão clínica
              </span>
              <span className="card px-6 py-3 text-body-sm font-semibold text-[var(--text-primary)]">
                Sua agenda clínica
              </span>
            </div>
            <p className="text-body-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              O mesmo motor conecta ao sistema-núcleo da sua clínica: não troca de sistema, ganha
              uma camada de inteligência sobre ele.
            </p>
          </div>
        </div>
      </section>

      {/* Cliente-fundador: no lugar de prova (SEM logo/cliente falso) */}
      <section id="cliente-fundador" className="section bg-[var(--bg-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-overline mb-2">SEJA UM CASO-FUNDADOR</p>
            <div className="card p-8 md:p-10 border border-[var(--color-primary-500)]/30">
              <h2 className="text-h3 mb-4">
                Estamos selecionando as primeiras clínicas para provar o Fykos no setor.
              </h2>
              <p className="text-body text-[var(--text-secondary)] mb-8">
                Quer ser um caso-fundador? Você entra cedo e ajuda a moldar a aplicação para a
                rotina da sua clínica. O primeiro passo é uma conversa de aderência para avaliar se
                existe uma oportunidade concreta.
              </p>
              <TrackedCTA
                type="aderencia"
                location="clinicas-cliente-fundador"
                variant="money"
                text="Avaliar aderência da minha operação"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="cta" className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-4">
              Cada retorno que não acontece é receita que fica pelo caminho.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira
              nesta etapa.
            </p>
            <TrackedCTA
              type="aderencia"
              location="clinicas-cta-final"
              variant="money"
              text="Solicitar conversa de aderência"
            />
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-t border-[var(--border-subtle)] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <TrackedCTA
          type="aderencia"
          location="clinicas-mobile-sticky"
          variant="money"
          text="Avaliar aderência"
          className="w-full shadow-lg text-center flex justify-center items-center py-3 text-sm"
        />
      </div>
    </main>
  );
}
