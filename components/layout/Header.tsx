'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import TrackedCTA from '@/components/ui/TrackedCTA';

// Áreas atendidas (verticais) — prova por setor
const areas = [
  { name: 'Automotivo', href: '/automotivo' },
  { name: 'Clínicas', href: '/clinicas' },
  { name: 'Construtoras e Incorporadoras', href: '/construtoras' },
];

// Navegação horizontal (categoria Fykos)
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'O Fykos', href: 'https://fykos.com.br', external: true },
  { name: 'Casos', href: '/cases' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const areasRef = useRef<HTMLDivElement | null>(null);

  // Fecha o dropdown "Áreas atendidas" ao clicar fora ou pressionar Escape
  useEffect(() => {
    if (!areasOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAreasOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [areasOpen]);

  return (
    <header className="bg-[var(--bg-glass)] dark:bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border-subtle)] dark:border-[var(--border-subtle)] sticky top-0 z-50 transition-base">
      <nav className="container mx-auto px-4 py-3" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] rounded-lg transition-base">
              <span className="sr-only">Dexi Digital - Sistema Operacional de Receita</span>
              <div className="relative h-10 w-auto">
                <Image
                  src={resolvedTheme === 'dark'
                    ? '/images/brand/Dexi White logo Transparent bg.svg'
                    : '/images/brand/logo.svg'}
                  alt="Dexi Digital - Sistema Operacional de Receita"
                  width={180}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                  style={{ maxHeight: '40px' }}
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-1.5 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              </span>
              {mobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation - horizontal (categoria) */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
            >
              Home
            </Link>

            <a
              href="https://fykos.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
            >
              O Fykos
            </a>

            {/* Áreas atendidas — dropdown (abre por hover no desktop e por clique/teclado) */}
            <div
              className="relative"
              ref={areasRef}
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
                aria-expanded={areasOpen}
                aria-haspopup="true"
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Áreas atendidas
                <svg
                  className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {areasOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-xl animate-fade-in-down">
                    {areas.map((area) => (
                      <Link
                        key={area.name}
                        href={area.href}
                        className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                        onClick={() => setAreasOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/cases"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
            >
              Casos
            </Link>

            <Link
              href="/contato"
              className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
            >
              Contato
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
              aria-label={resolvedTheme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {resolvedTheme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <TrackedCTA type="validation" location="header" variant="primary" text="Agendar diagnóstico" className="text-sm" />
          </div>
        </div>

        {/* Mobile menu - horizontal */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[var(--border-subtle)] pt-4 animate-fade-in-down">
            <div className="space-y-1">
              {/* Home */}
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* O Fykos (externo) */}
              <a
                href="https://fykos.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                O Fykos
              </a>

              {/* Áreas atendidas */}
              <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-tertiary)]">
                Áreas atendidas
              </div>
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="block px-6 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {area.name}
                </Link>
              ))}

              {/* Casos + Contato */}
              {navigation
                .filter((item) => item.href === '/cases' || item.href === '/contato')
                .map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

              <div className="pt-4 px-2 space-y-3">
                <button
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                  aria-label={resolvedTheme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                >
                  {resolvedTheme === 'dark' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Tema claro
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Tema escuro
                    </>
                  )}
                </button>
                <div onClick={() => setMobileMenuOpen(false)}>
                  <TrackedCTA type="validation" location="header-mobile" variant="primary" text="Agendar diagnóstico" className="w-full text-center text-sm" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
