import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Perguntas Frequentes sobre Consultoria de IA | Dexi Digital',
  description: 'Respostas às perguntas mais comuns sobre consultoria de IA, inteligência de dados e desenvolvimento de software sob medida. Entenda como a Dexi Digital trabalha.',
  keywords: ['FAQ consultoria IA', 'perguntas frequentes IA', 'consultoria de dados FAQ', 'Dexi Digital perguntas'],
};

const faqCategories = [
  {
    category: 'Sobre a Dexi Digital',
    questions: [
      {
        question: 'O que é a Dexi Digital?',
        answer: 'A Dexi Digital é uma consultoria estratégica de IA e inteligência de dados focada em resultados de vendas, eficiência operacional e governança de IA para empresas brasileiras. Combinamos mais de 10 anos de experiência com tecnologia de ponta para transformar processos complexos em alta conversão.',
      },
      {
        question: 'Qual é o diferencial da Dexi em relação a outras consultorias?',
        answer: 'Nosso diferencial é a combinação de IA como acelerador com revisão técnica humana especializada. Não substituímos especialistas por IA - usamos IA para acelerar entregas enquanto engenheiros sêniors garantem qualidade, segurança e governança. Além disso, temos experiência comprovada em setores específicos como automotivo premium.',
      },
      {
        question: 'A Dexi trabalha com empresas de que porte?',
        answer: 'Focamos em médias e grandes empresas (50+ funcionários) com desafios complexos de dados e software. Grupos automotivos, corporações multi-unidade, empresas em crescimento acelerado. Atendemos clientes que não podem falhar e precisam de soluções enterprise-grade.',
      },
    ],
  },
  {
    category: 'Consultoria de IA',
    questions: [
      {
        question: 'A Dexi substitui desenvolvedores por IA?',
        answer: 'Não. IA acelera tarefas repetitivas e prototipagem, mas toda solução passa por revisão técnica humana especializada. Arquitetura, segurança, escalabilidade e manutenibilidade são validadas por engenheiros experientes. IA é ferramenta, não substituta.',
      },
      {
        question: 'Como a Dexi garante segurança em soluções com IA?',
        answer: 'Implementamos governança desde o início: rastreabilidade de decisões, explicabilidade de modelos, controle de acesso, auditoria completa e compliance com LGPD/GDPR. IA empresarial exige controle total, não caixas-pretas. Todos os modelos são documentados e auditáveis.',
      },
      {
        question: 'Vocês usam ChatGPT ou outras IAs públicas nos projetos?',
        answer: 'Usamos LLMs como ferramentas de desenvolvimento, mas nunca enviamos dados sensíveis de clientes para APIs públicas. Para soluções em produção, implementamos modelos privados, on-premise ou em cloud dedicada, garantindo total controle sobre os dados.',
      },
    ],
  },
  {
    category: 'Processo e Prazos',
    questions: [
      {
        question: 'Quanto tempo leva um projeto típico?',
        answer: 'Depende da complexidade. Diagnóstico estratégico: 1-2 semanas. MVPs de inteligência de dados: 4-8 semanas. Sistemas enterprise completos: 3-6 meses. Sempre com entregas incrementais e validação contínua. Agilidade sem comprometer qualidade.',
      },
      {
        question: 'Como funciona o diagnóstico inicial gratuito?',
        answer: 'O diagnóstico é uma conversa técnica de 30-60 minutos onde mapeamos seus desafios, dados existentes e oportunidades de IA. Entregamos um relatório com recomendações, estimativa de ROI e próximos passos. Sem compromisso, sem vendas agressivas.',
      },
      {
        question: 'Vocês trabalham com metodologia ágil?',
        answer: 'Sim. Usamos sprints de 2 semanas com entregas incrementais, revisões constantes e adaptação ao feedback. Mas não sacrificamos arquitetura e qualidade em nome da velocidade. Agilidade com engenharia sólida.',
      },
    ],
  },
  {
    category: 'Investimento e Resultados',
    questions: [
      {
        question: 'Quanto custa um projeto de consultoria de IA?',
        answer: 'Cada projeto é orçado individualmente baseado em escopo, complexidade e prazo. Trabalhamos com modelos de preço fixo por fase ou time & materials. O diagnóstico inicial é gratuito e inclui estimativa de investimento.',
      },
      {
        question: 'Qual o ROI típico de projetos de inteligência de dados?',
        answer: 'Varia por setor e caso. Em grupos automotivos, vemos tipicamente +25% em conversão de leads, -30% em estoque ocioso e +40% em retenção de clientes. Definimos métricas de sucesso no diagnóstico e acompanhamos ao longo do projeto.',
      },
      {
        question: 'Como funciona o suporte pós-entrega?',
        answer: 'Todo projeto inclui documentação técnica completa, testes automatizados e período de garantia. Oferecemos contratos de suporte contínuo com SLA definido, evolução de features e monitoramento proativo.',
      },
    ],
  },
];

// Generate FAQ Schema for LLMO
const faqSchemaItems = faqCategories.flatMap(cat => 
  cat.questions.map(q => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  }))
);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSchemaItems,
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display mb-6">Perguntas Frequentes</h1>
            <p className="text-lead">
              Respostas diretas sobre como trabalhamos, nossa metodologia e o que esperar 
              de uma parceria com a Dexi Digital.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-h3 mb-6 pb-3 border-b border-gray-200">{category.category}</h2>
                <div className="card p-6">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 text-white mb-6">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lead text-primary-100 mb-10">
              Agende um diagnóstico gratuito e converse diretamente com nossos especialistas.
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
