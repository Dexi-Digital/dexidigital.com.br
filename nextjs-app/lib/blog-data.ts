export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  metaDescription: string;
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'guia-ia-qualidade-software',
    title: 'Guia: Como usar IA sem comprometer a qualidade do software',
    excerpt: 'IA pode acelerar desenvolvimento, mas sem governança adequada, cria débito técnico. Aprenda a usar IA como acelerador mantendo qualidade, segurança e manutenibilidade.',
    category: 'IA Empresarial',
    readTime: '12 min',
    date: '2026-01-05',
    author: 'Equipe Dexi Digital',
    metaDescription: 'Guia completo sobre como implementar IA no desenvolvimento de software sem criar débito técnico. Governança, revisão de código e melhores práticas.',
    content: `
## O problema: IA sem governança cria débito técnico

A promessa da IA generativa é sedutora: acelerar o desenvolvimento em 10x, entregar mais rápido, reduzir custos. E sim, ferramentas como GitHub Copilot e ChatGPT podem acelerar significativamente a escrita de código.

Mas há um problema que poucos discutem: **código gerado por IA sem revisão adequada cria débito técnico em velocidade industrial**.

### Os riscos reais

1. **Vulnerabilidades de segurança**: Modelos de IA são treinados em código público, incluindo código com falhas conhecidas
2. **Padrões inconsistentes**: Cada geração pode seguir convenções diferentes
3. **Dependências desatualizadas**: IA pode sugerir bibliotecas obsoletas ou vulneráveis
4. **Falta de contexto**: IA não conhece sua arquitetura, requisitos de negócio ou restrições

## A solução: IA como acelerador, não como substituto

### Princípio 1: Revisão humana obrigatória

Todo código gerado por IA deve passar por revisão técnica antes de entrar em produção. Isso inclui:

- **Code review** por desenvolvedor senior
- **Análise estática** automatizada (SonarQube, ESLint, etc.)
- **Testes de segurança** (SAST/DAST)
- **Validação de arquitetura** contra padrões definidos

### Princípio 2: IA para tarefas bem definidas

Use IA para acelerar tarefas repetitivas e bem definidas:

- Geração de testes unitários
- Documentação de código
- Refatoração de código legado
- Prototipagem rápida

### Princípio 3: Governança desde o início

Estabeleça políticas claras antes de adotar IA:

- Quais ferramentas são aprovadas
- Quais tipos de código podem ser gerados
- Processo de revisão obrigatório
- Métricas de qualidade a serem mantidas

## Implementação prática

### Checklist de revisão para código gerado por IA

- [ ] Segue os padrões de código do projeto?
- [ ] Todas as dependências estão aprovadas e atualizadas?
- [ ] Não há vulnerabilidades conhecidas (CVE)?
- [ ] Testes cobrem os cenários críticos?
- [ ] Documentação está clara e precisa?
- [ ] Performance é aceitável?

### Métricas a monitorar

1. **Cobertura de testes** - Deve se manter ou aumentar
2. **Débito técnico** - SonarQube ou similar
3. **Vulnerabilidades** - OWASP dependency check
4. **Tempo de revisão** - Não deve aumentar significativamente

## Conclusão

IA é uma ferramenta poderosa quando usada corretamente. A chave é tratá-la como um acelerador que ainda requer supervisão humana especializada, não como um substituto para engenheiros qualificados.

Na Dexi Digital, usamos IA para acelerar entregas, mas toda solução passa por revisão técnica rigorosa. Isso nos permite entregar mais rápido sem comprometer qualidade, segurança ou manutenibilidade.

---

**Próximo passo**: [Agende um diagnóstico gratuito](/contato) para discutir como implementar IA com governança na sua empresa.
    `.trim(),
  },
  {
    slug: 'inteligencia-dados-automotivo',
    title: 'Inteligência de dados para grupos automotivos: do showroom ao pós-venda',
    excerpt: 'Como unificar dados de vendas, oficina e pós-venda para criar visão 360° do cliente e otimizar operações em grupos automotivos.',
    category: 'Data Intelligence',
    readTime: '8 min',
    date: '2026-01-03',
    author: 'Equipe Dexi Digital',
    metaDescription: 'Como grupos automotivos podem unificar dados de vendas, oficina e pós-venda para visão 360° do cliente e otimização de operações.',
    content: `
## O desafio: dados fragmentados em silos

Grupos automotivos operam múltiplos sistemas que raramente conversam entre si:

- **DMS (Dealer Management System)** para vendas e estoque
- **Sistema de oficina** para ordens de serviço
- **CRM** para relacionamento com cliente
- **ERP** para financeiro e contábil
- **Plataformas de marketing** digitais

O resultado? **Dados valiosos presos em silos**, impossibilitando uma visão unificada do cliente e da operação.

### O custo real da fragmentação

- Vendedor não sabe que cliente está na oficina (oportunidade perdida)
- Oficina não conhece histórico de compras (atendimento genérico)
- Marketing dispara campanhas para clientes insatisfeitos
- Gestão toma decisões com dados incompletos

## A solução: Data Warehouse unificado

### Arquitetura moderna para dados automotivos

1. **Extração automatizada** de todos os sistemas fonte
2. **Transformação e padronização** dos dados
3. **Carga em data warehouse** moderno (Snowflake, BigQuery)
4. **Modelagem dimensional** para análises rápidas
5. **Dashboards em tempo real** para decisões ágeis

### Casos de uso imediatos

#### Visão 360° do cliente

Unifique todos os pontos de contato:

- Histórico de compras (veículos, acessórios)
- Histórico de serviços (manutenções, recalls)
- Interações de marketing (emails, campanhas)
- Feedback e NPS

#### Previsão de demanda

Use machine learning para prever:

- Demanda de peças por época do ano
- Agendamentos de oficina
- Renovação de frota corporativa

#### Otimização de estoque

Reduza capital parado e perdas:

- Giro de estoque por categoria
- Alertas de peças paradas
- Sugestões de transferência entre lojas

## Resultados típicos

Grupos automotivos que implementaram inteligência de dados unificada reportam:

| Métrica | Melhoria típica |
|---------|-----------------|
| Redução de estoque | 20-30% |
| Aumento em vendas de pós-venda | 15-25% |
| Redução de churn | 10-20% |
| Tempo para relatórios | -80% |

## Como começar

### Fase 1: Diagnóstico (2-4 semanas)

- Mapeamento de sistemas e dados existentes
- Identificação de quick wins
- Definição de KPIs prioritários

### Fase 2: MVP (4-8 semanas)

- Implementação de data warehouse
- Integração dos sistemas principais
- Primeiros dashboards operacionais

### Fase 3: Escala (3-6 meses)

- Integração de todos os sistemas
- Modelos preditivos
- Self-service analytics para gestores

---

**Próximo passo**: [Agende um diagnóstico gratuito](/contato) para mapear oportunidades de inteligência de dados no seu grupo automotivo.
    `.trim(),
  },
  {
    slug: 'evitar-reescrita-projetos-hype',
    title: 'Por que projetos baseados em hype precisam ser reescritos (e como evitar)',
    excerpt: 'Tecnologias da moda vêm e vão. Aprenda a construir software que dura além dos ciclos de hype, com arquitetura sólida e decisões técnicas fundamentadas.',
    category: 'Arquitetura de Software',
    readTime: '10 min',
    date: '2026-01-01',
    author: 'Equipe Dexi Digital',
    metaDescription: 'Como evitar reescritas de software escolhendo tecnologias sólidas em vez de seguir hypes. Critérios técnicos para decisões de arquitetura.',
    content: `
## O ciclo vicioso do hype tecnológico

A cada ano surge uma nova tecnologia "revolucionária" que promete resolver todos os problemas. Blockchain, microserviços, serverless, NoSQL, GraphQL, Kubernetes... A lista é longa.

O problema não são as tecnologias em si — muitas são excelentes para casos específicos. O problema é adotá-las **sem critérios técnicos claros**, apenas porque estão na moda.

### O custo real de seguir hypes

Empresas que adotam tecnologias baseadas em hype frequentemente enfrentam:

- **Reescritas completas** em 2-3 anos quando a tecnologia não escala
- **Dificuldade de contratação** quando o hype passa e talentos migram
- **Custos de manutenção** elevados por falta de maturidade do ecossistema
- **Débito técnico** acumulado por decisões apressadas

## Critérios para decisões técnicas sólidas

### 1. Problema antes da solução

Antes de escolher qualquer tecnologia, defina claramente:

- Qual problema específico estamos resolvendo?
- Quais são os requisitos não-funcionais críticos?
- Qual é a escala esperada em 1, 3 e 5 anos?

### 2. Maturidade do ecossistema

Avalie a maturidade real da tecnologia:

- **Idade**: Tem pelo menos 3-5 anos em produção?
- **Comunidade**: Contribuidores ativos e diversos?
- **Empresas**: Grandes empresas usando em produção?
- **Documentação**: Completa e atualizada?
- **Ferramentas**: Ecossistema de debugging, monitoring, etc.?

### 3. Custo total de propriedade (TCO)

Considere todos os custos, não apenas desenvolvimento inicial:

- Treinamento da equipe
- Contratação de especialistas
- Infraestrutura necessária
- Manutenção a longo prazo
- Custo de eventual migração

### 4. Reversibilidade da decisão

Algumas decisões são mais difíceis de reverter que outras:

| Decisão | Reversibilidade |
|---------|-----------------|
| Biblioteca JS | Fácil |
| Framework frontend | Média |
| Linguagem backend | Difícil |
| Banco de dados | Muito difícil |
| Arquitetura (mono vs micro) | Extremamente difícil |

Para decisões difíceis de reverter, seja mais conservador.

## Padrões que resistem ao tempo

Algumas escolhas técnicas provaram resistir a décadas de mudanças:

### Princípios atemporais

1. **Separação de responsabilidades** - Código modular e desacoplado
2. **Abstração de infraestrutura** - Não dependa de vendor específico
3. **Testes automatizados** - Segurança para refatorar
4. **Documentação viva** - Código auto-documentado + ADRs
5. **Simplicidade** - A solução mais simples que resolve o problema

### Tecnologias "boring" que funcionam

Considere tecnologias maduras e "entediantes":

- **PostgreSQL** - 30+ anos, resolve 95% dos casos
- **Linux** - Infraestrutura comprovada
- **HTTP/REST** - Interoperabilidade universal
- **SQL** - Linguagem de dados padrão
- **Git** - Controle de versão definitivo

## Como apresentar decisões conservadoras

Stakeholders frequentemente pressionam por tecnologias "modernas". Prepare-se:

1. **Quantifique riscos** de tecnologias imaturas
2. **Mostre casos de falha** de empresas que seguiram hypes
3. **Apresente TCO completo** incluindo custos ocultos
4. **Proponha provas de conceito** limitadas para novas tecnologias

## Conclusão

Construir software que dura exige disciplina para resistir ao hype. Decisões técnicas devem ser baseadas em critérios claros, não em marketing ou FOMO.

Na Dexi Digital, priorizamos tecnologias maduras e arquiteturas sólidas. Isso não significa ignorar inovação — significa adotar novas tecnologias quando fazem sentido técnico, não apenas porque estão na moda.

---

**Próximo passo**: [Agende um diagnóstico gratuito](/contato) para avaliar a saúde arquitetural do seu software.
    `.trim(),
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getAllArticles(): BlogArticle[] {
  return blogArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

