/**
 * Triagem do glossário do WordPress, desligado na migração de 20/01/2026.
 *
 * Eram 2.057 URLs em /glossario/ (1.698 conceitos + 359 duplicatas de slug do
 * WordPress, do tipo algoritmo-2, algoritmo-3...). Todas viraram 404 e, sete
 * meses depois, AINDA recebem entrada de busca — o Google continua indexando.
 *
 * A lista foi recuperada do Wayback Machine, não do repositório: o conteúdo
 * não foi migrado e não existe mais em lugar nenhum.
 *
 * Por que regra e não tabela de 2.057 linhas: os slugs seguem padrão temático,
 * e uma tabela desse tamanho no next.config.ts seria avaliada a cada request.
 * Aqui é O(1) e cabe numa tela.
 *
 * Só há destino para termo que corresponde a um serviço VIVO da Dexi. Quem não
 * corresponde (havia "o que é zimbro" e "o que é jogo de cartas" ali dentro)
 * recebe 404 com a página de conteúdo — mandar isso para uma página comercial
 * seria soft 404, que o Google trata como erro de qualquer forma.
 */

interface RegraLegado {
  destino: string;
  padrao: RegExp;
}

const REGRAS: RegraLegado[] = [
  {
    destino: '/servicos/inteligencia-de-dados',
    padrao:
      /dado|data|sql|bi-|business-intelligence|analytic|analise|estatistic|etl|warehouse|lake|dashboard|metrica|kpi|relatorio|indicador|mineracao|olap|query|consulta/,
  },
  {
    destino: '/servicos/ia-para-empresas',
    padrao:
      /(^|-)ia(-|$)|inteligencia-artificial|artificial-intelligence|machine-learning|aprendizado-de-maquina|rede-neural|neural|deep-learning|algoritmo|chatbot|bot|nlp|linguagem-natural|automacao|rpa|robot|visao-computacional|reconhecimento/,
  },
  {
    destino: '/automotivo',
    padrao: /concessionar|automotiv|veicul|carro|dms|revenda|montadora/,
  },
  {
    destino: '/blog',
    padrao:
      /marketing|inbound|outbound|seo|sem(-|$)|conteudo|midia|social|campanha|anuncio|publicidade|branding|persona|funil|lead|venda|cliente|crm|ecommerce|e-commerce|loja-virtual/,
  },
  {
    destino: '/servicos/software-sob-medida',
    padrao:
      /software|aplicativo|app|desenvolv|program|codigo|code|api|framework|biblioteca|devops|agil|agile|scrum|sprint|kanban|deploy|git|jenkins|docker|kubernetes|container|microservic|backend|frontend|fullstack|mobile|android|ios|web|site|html|css|javascript|python|java|php|ruby|node|react|angular|vue|ux|ui|design|interface|usabilidade|wireframe|prototip|teste|qa|debug|bug|refator|arquitetura|padrao-de-projeto|cloud|nuvem|servidor|server|host|infra|rede|network|wireless|wifi|protocolo|tcp|http|dns|vpn|seguranca|security|criptograf|cripto|antivirus|firewall|hacker|pentest|malware|virus|phishing|ransomware|keylogger|backup|storage|armazenamento|memoria|processador|hardware|dispositivo|sistema-operacional|linux|windows|kernel|byte|bit|binario|compilador|versao|repositorio|integracao|migracao|escalabilidade|performance|latencia|cache|balanceamento|carga|monitoramento|log|erro|excecao|autenticacao|autorizacao|token|sessao|cookie|navegador|browser|responsiv|acessibilidade|documentacao|requisito|user-stor|onboarding|licenca|open-source|saas|paas|iaas|blockchain|iot|realidade-virtual|realidade-aumentada|quantum|graphql|rest|soap|xml|json|yaml/,
  },
];

/**
 * Destino para um slug legado, ou null quando não há página viva relacionada.
 * O sufixo numérico do WordPress é removido antes de casar: `algoritmo-3` e
 * `algoritmo` são o mesmo conceito.
 */
export function destinoLegadoGlossario(slug: string): string | null {
  const base = slug.toLowerCase().replace(/-\d+$/, '');
  for (const { destino, padrao } of REGRAS) {
    if (padrao.test(base)) return destino;
  }
  return null;
}
