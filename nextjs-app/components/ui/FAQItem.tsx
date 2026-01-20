'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-subtle)] last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 rounded-lg transition-base"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-h5 text-[var(--text-primary)] pr-8 group-hover:text-[var(--color-primary-600)] transition-base">
          {question}
        </span>
        <span
          className={`w-6 h-6 flex-shrink-0 text-[var(--color-primary-600)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-body-sm text-[var(--text-secondary)] pr-12">{answer}</p>
      </div>
    </div>
  );
}

