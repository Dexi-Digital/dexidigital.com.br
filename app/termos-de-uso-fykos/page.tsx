import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso do Fykos | Dexi Digital',
  description:
    'Termos de Uso do Fykos, plataforma de atendimento e qualificação de leads via WhatsApp Business Platform operada pela Dexi Digital.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const SECOES = [
  {
    titulo: '1. Aceitação destes termos',
    corpo: (
      <>
        <p>
          Estes Termos de Uso regem o acesso e o uso do Fykos, plataforma de dados e inteligência
          artificial desenvolvida e operada pela{' '}
          <strong>Dexi Digital [RAZÃO SOCIAL COMPLETA], CNPJ [INSERIR CNPJ]</strong>, com sede em
          [INSERIR ENDEREÇO COMPLETO] ("Dexi", "nós" ou "nosso").
        </p>
        <p>
          Ao contratar, acessar ou usar o painel do Fykos, a empresa cliente e cada pessoa que ela
          autorizar a usar o painel concordam com estes Termos. Se você está aceitando em nome de uma
          empresa, declara ter poderes para vinculá-la a este documento. O uso do Fykos é destinado a
          pessoas com 18 anos ou mais, agindo em nome de uma empresa cliente.
        </p>
        <p>
          Estes Termos se aplicam ao painel e à plataforma Fykos. Não se aplicam diretamente ao
          consumidor final que troca mensagens pelo WhatsApp com uma empresa cliente do Fykos, esse
          relacionamento é regido pelos termos e políticas da própria empresa cliente.
        </p>
      </>
    ),
  },
  {
    titulo: '2. O que é o Fykos',
    corpo: (
      <>
        <p>
          O Fykos conecta empresas clientes (concessionárias, grupos automotivos, clínicas,
          construtoras e incorporadoras) ao WhatsApp Business Platform, da Meta, para qualificar,
          nutrir, reaquecer e acompanhar o relacionamento com os clientes dessas empresas, sobre o
          DMS, o Syonet, o CRM ou o sistema de gestão que cada empresa já usa.
        </p>
        <p>
          Fazemos o possível para manter o Fykos disponível e funcionando corretamente, mas não
          garantimos disponibilidade ininterrupta. Podemos alterar, suspender ou descontinuar
          funcionalidades a qualquer momento, com aviso razoável quando a mudança afetar
          significativamente o uso do painel pela empresa cliente.
        </p>
      </>
    ),
  },
  {
    titulo: '3. Contas e responsabilidades do usuário',
    corpo: (
      <>
        <p>
          Cada pessoa que acessa o painel do Fykos em nome de uma empresa cliente recebe uma conta
          individual. Você é responsável por:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fornecer informações verdadeiras, completas e atualizadas ao criar sua conta.</li>
          <li>Manter sua senha em sigilo e não compartilhar suas credenciais de acesso.</li>
          <li>Tudo o que acontece na plataforma sob a sua conta.</li>
          <li>
            Avisar a Dexi imediatamente em caso de uso não autorizado ou suspeita de violação de
            segurança da sua conta.
          </li>
        </ul>
        <p className="mt-4">
          A empresa cliente é responsável por administrar quais colaboradores têm acesso ao painel e
          por revogar esse acesso quando um colaborador deixar a empresa ou a função.
        </p>
      </>
    ),
  },
  {
    titulo: '4. Uso aceitável',
    corpo: (
      <>
        <p>Ao usar o Fykos, você concorda em não:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Usar a plataforma para fins ilegais, fraudulentos ou não autorizados.</li>
          <li>
            Enviar mensagens em desacordo com a Política Comercial e as Políticas de Uso do WhatsApp
            Business Platform, da Meta, incluindo envio de spam, conteúdo enganoso ou comunicações
            não solicitadas fora das janelas e modelos permitidos pela Meta.
          </li>
          <li>Tentar acessar áreas, dados ou contas de outras empresas clientes sem autorização.</li>
          <li>
            Tentar copiar, descompilar, fazer engenharia reversa ou criar produtos derivados do
            Fykos.
          </li>
          <li>Revender, sublicenciar ou disponibilizar o Fykos a terceiros sem autorização por escrito da Dexi.</li>
          <li>
            Interferir na segurança, na infraestrutura ou no funcionamento normal da plataforma, ou
            tentar burlar limites técnicos e de uso.
          </li>
          <li>Usar o Fykos para desenvolver ou operar um serviço concorrente.</li>
        </ul>
        <p className="mt-4">
          Podemos suspender ou encerrar o acesso de uma conta que viole este item, com aviso à empresa
          cliente sempre que possível.
        </p>
      </>
    ),
  },
  {
    titulo: '5. Propriedade intelectual',
    corpo: (
      <>
        <p>
          O Fykos, sua marca, seu código, sua arquitetura e toda a tecnologia por trás dele pertencem
          à Dexi Digital. Ao contratar o Fykos, a empresa cliente recebe uma licença limitada, não
          exclusiva e revogável para usar a plataforma durante a vigência do contrato comercial, para
          os fins descritos nele.
        </p>
        <p>
          Os dados de conversas, leads e histórico de atendimento gerados pela empresa cliente
          continuam pertencendo a ela. A Dexi não usa esses dados para fins diferentes dos previstos
          na Política de Privacidade e no contrato comercial firmado com cada empresa cliente.
        </p>
      </>
    ),
  },
  {
    titulo: '6. Dados e privacidade',
    corpo: (
      <>
        <p>
          O tratamento de dados pessoais pelo Fykos é descrito em detalhe na nossa{' '}
          <a href="/politica-de-privacidade-fykos" className="underline">
            Política de Privacidade
          </a>
          , que faz parte destes Termos de Uso. Em resumo: a Dexi trata dados de consumidores finais
          como operadora, em nome da empresa cliente, e trata dados de conta do painel como
          controladora, sempre em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº
          13.709/2018).
        </p>
      </>
    ),
  },
  {
    titulo: '7. Integração com WhatsApp Business Platform e Meta',
    corpo: (
      <>
        <p>
          O uso do Fykos depende da integração com o WhatsApp Business Platform, operado pela Meta
          Platforms, Inc. Essa integração está sujeita, adicionalmente, aos Termos de Serviço
          Comercial do WhatsApp e às Políticas da Plataforma da Meta. Se a Meta suspender, restringir
          ou alterar o acesso de uma empresa cliente à API, o Fykos pode ficar limitado ou
          indisponível para essa empresa, sem que isso seja responsabilidade da Dexi.
        </p>
      </>
    ),
  },
  {
    titulo: '8. Isenções de garantia',
    corpo: (
      <>
        <p>
          O Fykos é fornecido "como está" e "conforme disponível". Na medida permitida pela lei
          brasileira, a Dexi não garante que o serviço será ininterrupto, livre de erros, ou que
          qualquer resultado comercial específico (como um volume de conversão) será alcançado. As
          projeções e faixas de resultado mencionadas em diagnósticos ou materiais comerciais são
          estimativas, não garantias.
        </p>
      </>
    ),
  },
  {
    titulo: '9. Limitação de responsabilidade',
    corpo: (
      <>
        <p>
          Na máxima extensão permitida pela lei brasileira, a responsabilidade da Dexi por danos
          decorrentes do uso do Fykos fica limitada ao valor efetivamente pago pela empresa cliente
          nos 12 meses anteriores ao evento que originou a reclamação. A Dexi não responde por lucros
          cessantes, perda de dados de terceiros fora do seu controle, ou danos indiretos, salvo nos
          casos em que a lei brasileira não permita essa limitação, como em hipóteses de dolo ou culpa
          grave.
        </p>
      </>
    ),
  },
  {
    titulo: '10. Indenização',
    corpo: (
      <>
        <p>
          A empresa cliente concorda em indenizar a Dexi por reclamações, perdas ou danos decorrentes
          do uso indevido do Fykos, da violação destes Termos, ou do envio de conteúdo, pelo WhatsApp,
          que viole direitos de terceiros ou a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    titulo: '11. Encerramento',
    corpo: (
      <>
        <p>
          A empresa cliente pode encerrar o uso do Fykos a qualquer momento, conforme as condições do
          contrato comercial firmado. A Dexi pode suspender ou encerrar o acesso de uma conta ou de
          uma empresa cliente em caso de violação destes Termos, inadimplência, ou risco à segurança
          da plataforma ou de outras empresas clientes, com aviso prévio sempre que razoavelmente
          possível.
        </p>
        <p>
          Após o encerramento, os dados são tratados conforme descrito na Política de Privacidade,
          seção "Por quanto tempo guardamos os dados".
        </p>
      </>
    ),
  },
  {
    titulo: '12. Alterações destes termos',
    corpo: (
      <>
        <p>
          Podemos atualizar estes Termos de Uso periodicamente. A data da última atualização está
          sempre indicada no topo desta página. Alterações relevantes serão comunicadas às empresas
          clientes por e-mail ou pelo próprio painel do Fykos, com antecedência razoável antes de
          entrarem em vigor. O uso continuado do Fykos após uma alteração significa aceitação dos
          novos termos.
        </p>
      </>
    ),
  },
  {
    titulo: '13. Lei aplicável e foro',
    corpo: (
      <>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
          da comarca de [INSERIR CIDADE/COMARCA], com renúncia a qualquer outro, por mais privilegiado
          que seja, para dirimir eventuais controvérsias decorrentes deste instrumento, ressalvada a
          competência de foros especiais previstos em lei.
        </p>
      </>
    ),
  },
  {
    titulo: '14. Disposições gerais',
    corpo: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Se qualquer disposição destes Termos for considerada inválida, as demais permanecem em
            pleno vigor.
          </li>
          <li>
            A tolerância da Dexi quanto ao descumprimento de qualquer cláusula não significa renúncia
            ao direito de exigi-la posteriormente.
          </li>
          <li>
            A empresa cliente não pode ceder estes Termos a terceiros sem autorização por escrito da
            Dexi. A Dexi pode ceder estes Termos em caso de fusão, aquisição ou venda de ativos.
          </li>
          <li>
            Estes Termos, junto com o contrato comercial e a Política de Privacidade, formam o acordo
            integral entre a empresa cliente e a Dexi sobre o uso do Fykos.
          </li>
        </ul>
      </>
    ),
  },
  {
    titulo: '15. Contato',
    corpo: (
      <>
        <p>
          E-mail para assuntos contratuais e jurídicos:{' '}
          <a href="mailto:contato@dexidigital.com.br" className="underline">
            contato@dexidigital.com.br
          </a>
        </p>
        <p>Endereço: [INSERIR ENDEREÇO COMPLETO DA DEXI DIGITAL]</p>
      </>
    ),
  },
];

export default function TermosDeUsoFykosPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="text-overline mb-4">FYKOS · DEXI DIGITAL</p>
          <h1 className="text-h1 mb-4">Termos de Uso do Fykos</h1>
          <p className="text-body-sm text-[var(--text-secondary)] mb-12">
            Última atualização: 20 de julho de 2026.
          </p>

          <div className="space-y-12">
            {SECOES.map((s) => (
              <section key={s.titulo}>
                <h2 className="text-h3 mb-4">{s.titulo}</h2>
                <div className="text-body text-[var(--text-secondary)] space-y-4">{s.corpo}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
