import Link from 'next/link';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[var(--bg-primary)] flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Code */}
          <p className="text-display-gradient text-8xl font-bold mb-4">404</p>
          
          {/* Headline */}
          <h1 className="text-h2 text-[var(--text-primary)] mb-4">
            Página não encontrada
          </h1>
          
          {/* Description */}
          <p className="text-lead text-[var(--text-secondary)] mb-8">
            Este endereço não existe mais. Boa parte do conteúdo antigo mudou de
            lugar quando reformulamos o site — pode ser que o que você procura
            esteja abaixo.
          </p>

          {/* Quick Links */}
          <div className="card p-6 mb-8 text-left">
            <h2 className="text-h5 mb-4 text-[var(--text-primary)]">Conteúdo</h2>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/blog" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>Blog</strong>: artigos sobre onde a receita vaza entre o lead entrar e o negócio fechar</span>
                </Link>
              </li>
              <li>
                <Link href="/glossario-ia-automotiva" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>Glossário</strong>: definições de termos de IA, dados e operação comercial</span>
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>Notícias</strong>: curadoria diária de tecnologia e IA</span>
                </Link>
              </li>
            </ul>

            <h2 className="text-h5 mb-4 text-[var(--text-primary)]">Serviços</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos/ia-para-empresas" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>Arquitetura de IA que Executa (Fykos)</strong>: IA que executa e gera resultado</span>
                </Link>
              </li>
              <li>
                <Link href="/servicos/inteligencia-de-dados" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>Engenharia de Dados & Ativos de Inteligência</strong>: Transforme dados em decisão</span>
                </Link>
              </li>
              <li>
                <Link href="/servicos/software-sob-medida" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>Desenvolvimento de Sistemas de Missão Crítica</strong>: Software que escala</span>
                </Link>
              </li>
              <li>
                <Link href="/setores/automotivo-premium" className="text-[var(--color-primary-600)] hover:underline flex items-center gap-2">
                  <span>→</span>
                  <span><strong>IA para Grupos Automotivos</strong>: Caso de uso validado com +45% conversão</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-secondary">
              Voltar para Home
            </Link>
            <a 
              href={WHATSAPP_DIAGNOSTIC_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Falar com Especialista
            </a>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-[var(--text-tertiary)] mt-8">
            +50 ecossistemas entregues • R$ 7M+ recuperados • 10+ anos de engenharia
          </p>
        </div>
      </div>
    </main>
  );
}

