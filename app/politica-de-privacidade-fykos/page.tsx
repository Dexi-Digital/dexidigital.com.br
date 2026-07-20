import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade do Fykos | Dexi Digital',
  description:
    'Política de Privacidade do Fykos, plataforma de atendimento e qualificação de leads via WhatsApp Business Platform operada pela Dexi Digital.',
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
    titulo: '1. Quem somos e o que é o Fykos',
    corpo: (
      <>
        <p>
          O Fykos é a plataforma de dados e inteligência artificial desenvolvida e operada pela{' '}
          <strong>Dexi Digital [RAZÃO SOCIAL COMPLETA], CNPJ [INSERIR CNPJ]</strong>, com sede em{' '}
          [INSERIR ENDEREÇO COMPLETO] ("Dexi", "nós" ou "nosso").
        </p>
        <p>
          O Fykos conecta empresas clientes (concessionárias, grupos automotivos, clínicas,
          construtoras e incorporadoras) ao WhatsApp Business Platform, da Meta, para qualificar,
          nutrir, reaquecer e acompanhar o relacionamento com os clientes dessas empresas, sobre o
          DMS, o Syonet, o CRM ou o sistema de gestão que cada empresa já usa.
        </p>
        <p>
          Esta Política de Privacidade explica quais dados pessoais são tratados quando alguém troca
          mensagens com uma empresa cliente do Fykos pelo WhatsApp, quando um usuário acessa o painel
          do Fykos, e quando alguém visita o site institucional dexidigital.com.br. Ela se aplica a
          todos esses públicos e foi escrita em linguagem simples, como exige a Lei Geral de Proteção
          de Dados (LGPD, Lei nº 13.709/2018).
        </p>
      </>
    ),
  },
  {
    titulo: '2. Nosso papel no tratamento de dados',
    corpo: (
      <>
        <p>
          A LGPD distingue quem decide o que fazer com os dados (o controlador) de quem trata os
          dados por conta de outra empresa (o operador). No Fykos, esses papéis mudam conforme o
          dado:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Dados de quem conversa pelo WhatsApp com uma empresa cliente</strong> (o
            consumidor final): a Dexi atua como <strong>operadora</strong>, tratando esses dados em
            nome e sob as instruções da empresa cliente, que é a <strong>controladora</strong> desse
            relacionamento comercial. Dúvidas ou pedidos sobre esses dados devem ser direcionados,
            em primeiro lugar, à empresa com quem você conversou; a Dexi apoia o atendimento a esses
            pedidos.
          </li>
          <li>
            <strong>Dados de conta de quem usa o painel do Fykos</strong> (funcionários e
            colaboradores das empresas clientes): a Dexi atua como <strong>controladora</strong>.
          </li>
          <li>
            <strong>Dados de quem visita o site dexidigital.com.br</strong>: a Dexi atua como{' '}
            <strong>controladora</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    titulo: '3. Quais dados coletamos',
    corpo: (
      <>
        <h3 className="text-h4 mt-6 mb-2">3.1 Conversas pelo WhatsApp Business Platform</h3>
        <p>
          Quando alguém envia mensagem para uma empresa cliente que usa o Fykos, tratamos: número de
          telefone e identificador do WhatsApp, nome de exibição do perfil, conteúdo das mensagens
          trocadas (texto, áudio transcrito, mídia enviada), horário e histórico da conversa, e sinais
          de intenção de compra ou interesse extraídos da conversa (por exemplo, qual produto ou
          serviço foi mencionado). Esses dados chegam ao Fykos através da API oficial do WhatsApp
          Business Platform, da Meta, e ficam vinculados ao sistema (DMS, Syonet, CRM ou ERP) que a
          empresa cliente já utiliza.
        </p>
        <h3 className="text-h4 mt-6 mb-2">3.2 Conta na plataforma Fykos</h3>
        <p>
          De quem acessa o painel do Fykos como colaborador de uma empresa cliente: nome, e-mail
          corporativo, cargo, empresa, senha (armazenada com hash, nunca em texto puro) e registros
          de acesso e uso do painel.
        </p>
        <h3 className="text-h4 mt-6 mb-2">3.3 Site institucional dexidigital.com.br</h3>
        <p>
          Ao visitar este site, coletamos: dados enviados voluntariamente em formulários de contato
          e diagnóstico (nome, e-mail, telefone, empresa, mensagem); dados de navegação via Google
          Analytics (páginas visitadas, origem do acesso, dispositivo e localização aproximada); e um
          identificador de dispositivo gerado por uma tecnologia de fingerprinting (reconhecimento de
          navegador), usado para reconhecer visitantes recorrentes e associar o acesso ao contato
          comercial correspondente quando a pessoa chega ao site a partir de um link de campanha com
          e-mail identificado. Esse identificador é salvo no armazenamento local do navegador.
        </p>
      </>
    ),
  },
  {
    titulo: '4. Para que usamos os dados e em qual base legal',
    corpo: (
      <>
        <p>Usamos os dados descritos acima para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Qualificar, responder, nutrir e reaquecer conversas no WhatsApp em nome da empresa
            cliente, execução do contrato entre a Dexi e a empresa cliente (LGPD, art. 7º, V).
          </li>
          <li>
            Sincronizar a conversa com o DMS, o Syonet, o CRM ou o ERP da empresa cliente, execução
            do contrato (LGPD, art. 7º, V).
          </li>
          <li>
            Gerar relatórios de desempenho para a empresa cliente (conversão, tempo de resposta,
            demanda por modelo ou serviço), legítimo interesse da empresa cliente e da Dexi (LGPD,
            art. 7º, IX).
          </li>
          <li>
            Manter e dar suporte às contas de usuários do painel Fykos, execução de contrato (LGPD,
            art. 7º, V).
          </li>
          <li>
            Melhorar o site institucional e mensurar campanhas de marketing, legítimo interesse
            (LGPD, art. 7º, IX) e, quando aplicável, consentimento.
          </li>
          <li>Cumprir obrigações legais e regulatórias (LGPD, art. 7º, II).</li>
        </ul>
      </>
    ),
  },
  {
    titulo: '5. Uso de inteligência artificial',
    corpo: (
      <>
        <p>
          O Fykos usa modelos de linguagem para ler o contexto de uma conversa, entender a intenção
          de quem escreveu e decidir a próxima ação (responder, qualificar, nutrir, ressuscitar ou
          escalar para um atendente humano). Não usamos as conversas dos clientes finais para treinar
          modelos de IA de uso público, e não enviamos dados sensíveis a APIs de IA sem um acordo de
          confidencialidade e de não utilização dos dados para treinamento com o provedor contratado.
          Toda decisão automatizada de maior impacto (por exemplo, escalar para venda ou encerrar um
          atendimento) fica registrada em log, é auditável, e pode ser revisada por um humano.
        </p>
      </>
    ),
  },
  {
    titulo: '6. Com quem compartilhamos os dados',
    corpo: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>A empresa cliente</strong> com quem você conversou (concessionária, grupo
            automotivo, clínica ou construtora): é a destinatária natural da conversa, pois é quem
            atende o seu pedido.
          </li>
          <li>
            <strong>Meta Platforms, Inc.</strong>, provedora do WhatsApp Business Platform, conforme
            a Política de Dados da Meta, necessária para o envio e recebimento das mensagens.
          </li>
          <li>
            <strong>Sistemas-núcleo integrados</strong> pela empresa cliente (DMS da montadora,
            Syonet, outros CRMs, ERPs ou sistemas de gestão), apenas mediante autorização e
            configuração da própria empresa cliente.
          </li>
          <li>
            <strong>Provedores de infraestrutura e de IA</strong> que processam dados em nosso nome,
            sob contrato e obrigação de confidencialidade (hospedagem em nuvem, banco de dados,
            provedores de modelos de linguagem).
          </li>
          <li>
            <strong>Autoridades públicas</strong>, quando exigido por lei, ordem judicial ou
            requisição regulatória.
          </li>
        </ul>
        <p className="mt-4">
          Não vendemos dados pessoais a terceiros para fins de publicidade.
        </p>
      </>
    ),
  },
  {
    titulo: '7. Por quanto tempo guardamos os dados',
    corpo: (
      <>
        <p>
          Guardamos os dados pelo tempo necessário para cumprir as finalidades descritas nesta
          política, durante a vigência do relacionamento comercial entre a Dexi e a empresa cliente,
          e, depois disso, apenas pelo prazo exigido por obrigação legal, fiscal ou regulatória, ou
          para o exercício regular de direitos em processo administrativo ou judicial. A empresa
          cliente pode solicitar a exclusão antecipada dos dados de um contato específico a qualquer
          momento, dentro dos limites da lei.
        </p>
      </>
    ),
  },
  {
    titulo: '8. Segurança da informação',
    corpo: (
      <>
        <p>Adotamos medidas técnicas e organizacionais para proteger os dados, incluindo:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Criptografia em trânsito (HTTPS/TLS) em todas as comunicações.</li>
          <li>Controle de acesso por perfil e princípio do menor privilégio.</li>
          <li>Log auditável de cada contato e de cada ação automatizada relevante.</li>
          <li>Monitoramento e revisão periódica de segurança.</li>
        </ul>
        <p className="mt-4">
          Nenhum sistema é 100% imune a incidentes. Se um incidente de segurança afetar dados
          pessoais, seguiremos o previsto na LGPD, incluindo a comunicação à Autoridade Nacional de
          Proteção de Dados (ANPD) e, quando cabível, aos titulares afetados.
        </p>
      </>
    ),
  },
  {
    titulo: '9. Transferência internacional de dados',
    corpo: (
      <>
        <p>
          Alguns provedores que usamos (hospedagem em nuvem, WhatsApp Business Platform, modelos de
          linguagem) podem processar dados fora do Brasil. Nesses casos, exigimos contratualmente
          salvaguardas compatíveis com a LGPD, como cláusulas de proteção de dados e confidencialidade
          equivalentes às exigidas pela legislação brasileira.
        </p>
      </>
    ),
  },
  {
    titulo: '10. Seus direitos como titular de dados',
    corpo: (
      <>
        <p>Nos termos do art. 18 da LGPD, você tem direito a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmar se tratamos dados seus.</li>
          <li>Acessar os dados que temos sobre você.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
          <li>Solicitar a portabilidade dos dados a outro fornecedor.</li>
          <li>Solicitar a eliminação dos dados tratados com base no seu consentimento.</li>
          <li>Saber com quem compartilhamos seus dados.</li>
          <li>Revogar o consentimento, quando essa for a base legal do tratamento.</li>
          <li>Se opor a tratamento realizado com base em legítimo interesse.</li>
        </ul>
        <p className="mt-4">
          Para exercer qualquer um desses direitos, entre em contato pelo e-mail{' '}
          <a href="mailto:contato@dexidigital.com.br" className="underline">
            contato@dexidigital.com.br
          </a>
          . Se a sua dúvida for sobre uma conversa que você teve pelo WhatsApp com uma concessionária,
          clínica ou construtora, você também pode falar diretamente com essa empresa, controladora
          desse relacionamento.
        </p>
      </>
    ),
  },
  {
    titulo: '11. Crianças e adolescentes',
    corpo: (
      <>
        <p>
          O Fykos e o site dexidigital.com.br não são direcionados a menores de 18 anos. Não
          coletamos intencionalmente dados de crianças ou adolescentes. Se identificarmos esse tipo de
          dado, ele será eliminado.
        </p>
      </>
    ),
  },
  {
    titulo: '12. Alterações desta política',
    corpo: (
      <>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização
          está sempre indicada no topo desta página. Alterações relevantes serão comunicadas às
          empresas clientes por e-mail ou pelo próprio painel do Fykos.
        </p>
      </>
    ),
  },
  {
    titulo: '13. Contato e encarregado (DPO)',
    corpo: (
      <>
        <p>
          Encarregado de Proteção de Dados (DPO): [NOME DO ENCARREGADO OU EQUIPE RESPONSÁVEL].
        </p>
        <p>
          E-mail para assuntos de privacidade:{' '}
          <a href="mailto:contato@dexidigital.com.br" className="underline">
            contato@dexidigital.com.br
          </a>
        </p>
        <p>Endereço: [INSERIR ENDEREÇO COMPLETO DA DEXI DIGITAL]</p>
        <p>
          Você também pode registrar uma reclamação junto à Autoridade Nacional de Proteção de Dados
          (ANPD), em gov.br/anpd.
        </p>
      </>
    ),
  },
];

export default function PoliticaPrivacidadeFykosPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <p className="text-overline mb-4">FYKOS · DEXI DIGITAL</p>
          <h1 className="text-h1 mb-4">Política de Privacidade do Fykos</h1>
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
