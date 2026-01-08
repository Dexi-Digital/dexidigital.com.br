import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Dexi Digital. Agende um diagnóstico gratuito para discutir seus desafios de dados e software.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-hero-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">
              Vamos conversar
            </h1>
            <p className="text-lead">
              Agende um diagnóstico gratuito. Sem compromisso, sem vendas
              agressivas. Apenas uma conversa técnica sobre seus desafios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-h3 mb-6">
                  Entre em contato
                </h2>
                <p className="text-body-lg mb-8">
                  Preencha o formulário ao lado ou envie um email diretamente
                  para nós. Respondemos em até 24 horas.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-h5 mb-2">Email</h3>
                    <a
                      href="mailto:contato@dexidigital.com.br"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      contato@dexidigital.com.br
                    </a>
                  </div>

                  <div>
                    <h3 className="text-h5 mb-2">O que esperar</h3>
                    <ul className="feature-list">
                      <li className="feature-list-item">Resposta em até 24h</li>
                      <li className="feature-list-item">Diagnóstico técnico detalhado</li>
                      <li className="feature-list-item">Proposta transparente com escopo claro</li>
                      <li className="feature-list-item">Sem vendas agressivas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

