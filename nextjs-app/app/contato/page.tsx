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
      <section className="bg-gradient-to-b from-primary-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Vamos conversar
            </h1>
            <p className="text-xl text-gray-600">
              Agende um diagnóstico gratuito. Sem compromisso, sem vendas
              agressivas. Apenas uma conversa técnica sobre seus desafios.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Entre em contato
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Preencha o formulário ao lado ou envie um email diretamente
                  para nós. Respondemos em até 24 horas.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:contato@dexidigital.com.br"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      contato@dexidigital.com.br
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      O que esperar
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Resposta em até 24h
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Diagnóstico técnico detalhado
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Proposta transparente com escopo claro
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Sem vendas agressivas
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

