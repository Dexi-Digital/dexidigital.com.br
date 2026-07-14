'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Valor numérico final (ex.: 7, 45, 380) */
  to: number;
  /** Texto antes do número (ex.: "R$ ") */
  prefix?: string;
  /** Texto depois do número (ex.: "%", "M+") */
  suffix?: string;
  /** Casas decimais (0 = inteiro) */
  decimals?: number;
  /** Duração em ms */
  duration?: number;
  className?: string;
}

/**
 * CountUp — anima a contagem 0 → valor quando entra na viewport (IntersectionObserver).
 * SSR/no-JS/reduced-motion: renderiza o valor final direto (sem zero "preso").
 */
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1400,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const finalText = `${prefix}${to.toFixed(decimals)}${suffix}`;
  const [display, setDisplay] = useState(finalText);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(finalText);
      return;
    }

    let raf = 0;
    let started = false;

    const animate = () => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = to * eased;
        setDisplay(`${prefix}${val.toFixed(decimals)}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
            animate();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={`count-up ${className}`}>
      {display}
    </span>
  );
}
