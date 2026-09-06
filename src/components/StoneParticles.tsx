"use client";

import { useEffect, useRef } from "react";

type Stone = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: "black" | "white";
  alpha: number;
};

/**
 * Hero 배경용 흑돌/백돌 파티클 애니메이션.
 * - 정적 캔버스, 마우스 인터랙션 없음(가벼움)
 * - prefers-reduced-motion 존중
 * - 리사이즈 시 재배치
 */
export default function StoneParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stones: Stone[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx?.scale(dpr, dpr);
      seed();
    }

    function seed() {
      stones.length = 0;
      const count = Math.max(14, Math.min(40, Math.floor((w * h) / 22000)));
      for (let i = 0; i < count; i++) {
        stones.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 6 + Math.random() * 18,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          color: Math.random() > 0.5 ? "black" : "white",
          alpha: 0.18 + Math.random() * 0.32,
        });
      }
    }

    function drawStone(s: Stone) {
      if (!ctx) return;
      const grad = ctx.createRadialGradient(
        s.x - s.r * 0.35,
        s.y - s.r * 0.35,
        s.r * 0.1,
        s.x,
        s.y,
        s.r
      );
      if (s.color === "black") {
        grad.addColorStop(0, `rgba(80, 78, 74, ${s.alpha})`);
        grad.addColorStop(1, `rgba(10, 10, 12, ${s.alpha})`);
      } else {
        grad.addColorStop(0, `rgba(255, 250, 240, ${s.alpha})`);
        grad.addColorStop(1, `rgba(200, 195, 185, ${s.alpha * 0.7})`);
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const s of stones) {
        if (!reduce) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -s.r) s.x = w + s.r;
          if (s.x > w + s.r) s.x = -s.r;
          if (s.y < -s.r) s.y = h + s.r;
          if (s.y > h + s.r) s.y = -s.r;
        }
        drawStone(s);
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
