import Link from 'next/link';
import FAQItem from '@/components/ui/FAQItem';
import TrackedCTA from '@/components/ui/TrackedCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Perguntas Frequentes sobre a Dexi Digital e o Fykos',
  description: 'Respostas às perguntas mais comuns sobre a Dexi Digital, o Fykos, inteligência de dados e software sob medida. Entenda como trabalhamos e como funciona a conversa de aderência.',
  keywords: ['FAQ consultoria IA', 'perguntas frequentes IA', 'consultoria de dados FAQ', 'Dexi Digital perguntas'],
};

const faqCategories = [
  {
    category: 'Sobre a Dexi Digital',
    questions: [
      {
        question: 'O que é a Dexi Digital?',
        answer: 'A Dexi Digital é uma empresa de tecnologia para decisões comerciais de alto valor. Transformamos dados da operação em prioridades e ações comerciais, para que as oportunidades que já estão na base virem receita e previsibilidade de venda. A Dexi é a empresa; o Fykos é o produto de inteligência e execução comercial desenvolvido por ela.',
      },
      {
        question: 'Qual é o diferencial da Dexi em relação a outras consultorias?',
        answer: 'Nosso diferencial é a combinação de IA como acelerador com revisão técnica humana especializada. Não substituímos especialistas por IA: usamos IA para acelerar entregas, e engenheiros sêniores revisam qualidade, segurança e governança. Além disso, atuamos com foco em operações em que cada oportunidade tem valor alto, como grupos automotivos.',
      },
      {
        question: 'A Dexi trabalha com empresas de que porte?',
        answer: 'Focamos em médias e grandes empresas com desafios complexos de dados e software, em que cada oportunidade comercial tem valor alto: grupos automotivos, corporações multi-unidade e empresas em crescimento acelerado. A aplicação depende de volume, dados disponíveis e viabilidade de implementação, e é isso que avaliamos na conversa de aderência.',
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
        answer: 'Com governança desde o início: regras definidas para o que a IA pode executar, controle de acesso, registro auditável das decisões de maior impacto, encaminhamento das exceções a uma pessoa e conformidade com a LGPD. IA empresarial exige controle, não caixas-pretas.',
      },
      {
        question: 'Vocês usam ChatGPT ou outras IAs públicas nos projetos?',
        answer: 'Usamos modelos de linguagem de provedores contratados. As conversas dos clientes finais não são usadas para treinar modelos de uso público, e dado sensível só vai para um provedor de IA com acordo de confidencialidade e de não uso para treinamento, como descreve a política de privacidade do Fykos.',
      },
    ],
  },
  {
    category: 'Processo e Prazos',
    questions: [
      {
        question: 'Quanto tempo leva um projeto típico?',
        answer: 'Depende do escopo, do volume e dos dados disponíveis, por isso o prazo é definido depois da conversa de aderência e de uma análise mais detalhada. Sempre com entregas incrementais e validação contínua. Agilidade sem comprometer qualidade.',
      },
      {
        question: 'Como funciona a conversa de aderência?',
        answer: 'É uma conversa para entender sua operação, os dados disponíveis e se existe uma oportunidade concreta. Entendemos o contexto (segmento, tamanho da operação, sistemas em uso e o desafio mais relevante), avaliamos a aderência (volume, dados disponíveis e viabilidade de implementação) e indicamos o próximo passo: se houver aderência, propomos uma análise mais detalhada; se não houver, dizemos isso com clareza. Sem compromisso e sem pedir dados confidenciais de carteira nesta etapa.',
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
        answer: 'Cada projeto é orçado individualmente baseado em escopo, complexidade e prazo. Trabalhamos com modelos de preço fixo por fase ou time & materials. A conversa de aderência é sem compromisso; se houver aderência, o investimento é estimado na análise mais detalhada que propomos em seguida.',
      },
      {
        question: 'Qual o ROI típico de projetos de inteligência de dados?',
        answer: 'Varia por setor, volume e dados disponíveis, por isso não publicamos um número médio. O valor está em receita gerada a partir da base, previsibilidade de venda e leads que custaram caro deixando de ficar parados. As métricas de sucesso são definidas com a operação, com período e critério de atribuição, e acompanhadas ao longo do projeto.',
      },
      {
        question: 'Como funciona o suporte pós-entrega?',
        answer: 'Todo projeto inclui documentação técnica e testes automatizados. Depois da entrega, oferecemos suporte contínuo, evolução de funcionalidades e monitoramento.',
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
      <section className="section-hero-premium py-24 md:py-32 border-b border-[var(--border-subtle)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-overline mb-4 animate-fade-in-up-subtle">Tire suas dúvidas</p>
            <h1 className="text-display-xl md:text-display-2xl text-[var(--text-primary)] mb-6 animate-fade-in-up delay-75">
              Perguntas <span className="text-display-gradient">Frequentes</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto animate-fade-in-up delay-100">
              Respostas diretas sobre como trabalhamos, nossa metodologia e o que esperar
              de uma parceria com a Dexi Digital.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-lg bg-[var(--bg-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <h2 className="text-h3 mb-6 pb-3 border-b border-[var(--border-subtle)]">{category.category}</h2>
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
      <section className="section-cta-premium text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-4">
              CONVERSA DE ADERÊNCIA
            </p>
            <h2 className="text-display-lg text-white mb-6">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-white/70 mb-10">
              Uma conversa para entender sua operação, os dados disponíveis e se existe uma
              oportunidade concreta. Sem compromisso e sem pedir dados confidenciais de carteira
              nesta etapa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedCTA
                type="aderencia"
                location="faq-cta"
                variant="white"
                text="Solicitar conversa de aderência"
              />
              <Link href="/metodologia" className="btn border-2 border-white/30 text-white hover:bg-white/10">
                Conhecer metodologia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
