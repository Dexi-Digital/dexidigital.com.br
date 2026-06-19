'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroWave — fundo de "luz fluindo" para o herói (estilo vídeo hero, bem suave).
 * Canvas puro, sem dependências. Parâmetros travados: intensidade ~45, velocidade ~7.
 * Respeita prefers-reduced-motion (renderiza 1 frame estático).
 * Cor-assinatura: Pumpkin #FF7518 (uma das cortinas) + azul/ciano da marca.
 */
export default function HeroWave({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Parâmetros travados
    const AMP = 0.45; // intensidade
    const SPD = 0.007; // velocidade

    let W = 0,
      H = 0,
      DPR = 1,
      t = 0,
      raf = 0;

    const curtains = [
      { x0: 0.28, amp: 0.1, freq: 0.012, ph: 0.0, w: 0.3, col: [19, 127, 217] }, // azul marca
      { x0: 0.62, amp: 0.13, freq: 0.01, ph: 2.1, w: 0.28, col: [34, 211, 238] }, // ciano
      { x0: 0.48, amp: 0.09, freq: 0.014, ph: 4.0, w: 0.26, col: [255, 117, 24] }, // Pumpkin
    ];

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const blob = (px: number, py: number, rad: number, rgb: number[], a: number) => {
      const g = ctx.createRadialGradient(px, py, 0, px, py, rad);
      g.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`);
      g.addColorStop(1, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, rad, 0, 6.2832);
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#06080f';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      for (let ci = 0; ci < curtains.length; ci++) {
        const cu = curtains[ci];
        for (let y = -20; y < H + 20; y += 10) {
          const cx =
            W * cu.x0 + Math.sin(y * cu.freq + t * SPD * 9 + cu.ph) * W * cu.amp * (0.6 + AMP);
          const depth = 0.4 + (y / H) * 0.8;
          blob(cx, y, W * cu.w * AMP * 1.2, cu.col, 0.045 * depth);
        }
      }
      ctx.globalCompositeOperation = 'source-over';
    };

    const loop = () => {
      t += 0.016;
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
