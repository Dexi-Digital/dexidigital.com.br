'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import { WHATSAPP_DIAGNOSTIC_URL } from '@/lib/whatsapp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const navigation = [
    { name: 'A Dexi', href: '/sobre' },
    {
      name: 'Soluções',
      href: '/servicos',
      submenu: [
        { name: 'Consultoria de IA', href: '/servicos/ia-para-empresas' },
        { name: 'Inteligência de Dados', href: '/servicos/inteligencia-de-dados' },
        { name: 'Software Sob Medida', href: '/servicos/software-sob-medida' },
      ]
    },
    { name: 'Setores', href: '/setores/automotivo-premium' },
    { name: 'Metodologia', href: '/metodologia' },
    { name: 'Insights', href: '/blog' },
  ];

  return (
    <header className="bg-[var(--bg-glass)] dark:bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border-subtle)] dark:border-[var(--border-subtle)] sticky top-0 z-50 transition-base">
      <nav className="container mx-auto px-4 py-3" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] rounded-lg transition-base">
              <span className="sr-only">Dexi Digital - Consultoria de IA e Dados</span>
              <div className="relative h-10 w-auto">
                <Image
                  src={resolvedTheme === 'dark'
                    ? '/images/brand/Dexi White logo Transparent bg.svg'
                    : '/images/brand/logo.svg'}
                  alt="Dexi Digital - Consultoria de IA para Empresas"
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

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              'submenu' in item && item.submenu ? (
                <div key={item.name} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base inline-flex items-center gap-1 rounded-lg hover:bg-[var(--overlay-subtle)]"
                    onMouseEnter={() => setSolucoesOpen(true)}
                    onMouseLeave={() => setSolucoesOpen(false)}
                  >
                    {item.name}
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-2 w-56 ${solucoesOpen ? 'block' : 'hidden'} group-hover:block`}
                    onMouseEnter={() => setSolucoesOpen(true)}
                    onMouseLeave={() => setSolucoesOpen(false)}
                  >
                    <div className="bg-[var(--bg-surface)] dark:bg-[var(--bg-elevated)] rounded-xl shadow-[var(--shadow-elevation-3)] border border-[var(--border-subtle)] py-2 animate-fade-in-down">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--color-primary-50)] dark:hover:bg-[var(--color-primary-950)] hover:text-[var(--color-primary-600)] transition-base"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-base rounded-lg hover:bg-[var(--overlay-subtle)]"
                >
                  {item.name}
                </Link>
              )
            ))}
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
            <a href={WHATSAPP_DIAGNOSTIC_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
              Agendar Diagnóstico
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[var(--border-subtle)] pt-4 animate-fade-in-down">
            <div className="space-y-1">
              {navigation.map((item) => (
                'submenu' in item && item.submenu ? (
                  <div key={item.name}>
                    <div className="px-3 py-2 text-sm font-semibold text-[var(--text-primary)]">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-0.5">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--color-primary-600)] hover:bg-[var(--overlay-subtle)] rounded-lg transition-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
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
                <a
                  href={WHATSAPP_DIAGNOSTIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar Diagnóstico
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}