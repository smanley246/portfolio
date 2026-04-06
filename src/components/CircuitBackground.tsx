/*
  * File: src/components/CircuitBackground.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Animated circuit board style background canvas.
*/

import React, { useEffect, useRef } from "react";

const VW = 1440;
const VH = 900;

const PATHS: Array<{ points: [number, number][]; delay: number; base: number }> = [
  { points: [[-120, 160], [440, 160], [440, 220], [760, 220], [900, 220]], delay: 0.0, base: 0.18 },
  { points: [[-100, 340], [260, 340], [260, 140], [560, 140], [820, 140], [1020, 140]], delay: 0.07, base: 0.16 },
  { points: [[VW + 120, 120], [1180, 120], [1180, 200], [940, 200], [780, 200]], delay: 0.14, base: 0.18 },
  { points: [[VW + 100, 520], [1200, 520], [980, 520], [820, 520]], delay: 0.22, base: 0.17 },
  { points: [[VW + 150, 860], [1100, 860], [1100, 640], [880, 640], [760, 640]], delay: 0.3, base: 0.2 },
  { points: [[-140, 780], [420, 780], [600, 780], [600, 700]], delay: 0.38, base: 0.18 },
  { points: [[-120, 520], [240, 520], [240, 460]], delay: 0.46, base: 0.16 },
  { points: [[VW + 120, 440], [1240, 440], [1240, 480]], delay: 0.54, base: 0.16 },
];

const polyMetrics = (pts: [number, number][]) => {
  const segs: number[] = [];
  let total = 0;

  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const d = Math.hypot(x1 - x0, y1 - y0);
    segs.push(d);
    total += d;
  }

  return { total, segs };
};

const pointAt = (pts: [number, number][], segs: number[], d: number) => {
  let remaining = d;

  for (let i = 0; i < segs.length; i++) {
    const len = segs[i];

    if (remaining <= len) {
      const [x0, y0] = pts[i];
      const [x1, y1] = pts[i + 1];
      const u = len === 0 ? 0 : remaining / len;
      return [x0 + (x1 - x0) * u, y0 + (y1 - y0) * u] as [number, number];
    }

    remaining -= len;
  }

  return pts[pts.length - 1];
};

const strokePolylinePartial = (
  ctx: CanvasRenderingContext2D,
  pts: [number, number][],
  segs: number[],
  startDist: number,
  endDist: number,
  radius = 10
) => {
  const total = segs.reduce((a, b) => a + b, 0);
  const s = Math.max(0, Math.min(total, startDist));
  const e = Math.max(0, Math.min(total, endDist));

  if (e <= s) return;

  const trimmed: [number, number][] = [];
  trimmed.push(pointAt(pts, segs, s));

  const step = 2;
  for (let d = Math.floor(s / step) * step + step; d < e; d += step) {
    trimmed.push(pointAt(pts, segs, d));
  }
  trimmed.push(pointAt(pts, segs, e));

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();

  for (let i = 0; i < trimmed.length; i++) {
    const [x, y] = trimmed[i];

    if (i === 0) {
      ctx.moveTo(x, y);
      continue;
    }

    const [px, py] = trimmed[i - 1];

    if (i < trimmed.length - 1) {
      const [nx, ny] = trimmed[i + 1];
      const vx1 = x - px;
      const vy1 = y - py;
      const vx2 = nx - x;
      const vy2 = ny - y;
      const turn = Math.abs(vx1 * vy2 - vy1 * vx2) > 1e-3;

      if (turn) {
        const len1 = Math.hypot(vx1, vy1) || 1;
        const len2 = Math.hypot(vx2, vy2) || 1;
        const r = Math.min(radius, len1 * 0.5, len2 * 0.5);
        const rx1 = x - (vx1 / len1) * r;
        const ry1 = y - (vy1 / len1) * r;
        const rx2 = x + (vx2 / len2) * r;
        const ry2 = y + (vy2 / len2) * r;
        ctx.lineTo(rx1, ry1);
        ctx.quadraticCurveTo(x, y, rx2, ry2);
        continue;
      }
    }

    ctx.lineTo(x, y);
  }

  ctx.stroke();
};

const CircuitCanvasBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const metrics = PATHS.map((path) => polyMetrics(path.points));

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getScrollProgress = () => {
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      return sh <= 0 ? 0 : window.scrollY / sh;
    };

    const drawStaticBackground = () => {
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const grd = ctx.createRadialGradient(
        cw * 0.55,
        ch * 0.18,
        60,
        cw * 0.5,
        ch * 0.25,
        Math.max(cw, ch)
      );
      grd.addColorStop(0, "#163558");
      grd.addColorStop(0.42, "#0a1a31");
      grd.addColorStop(1, "#050b16");
      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, cw, ch);
    };

    const draw = (t: number) => {
      const time = t / 1000;
      const scroll = getScrollProgress();
      const easeScroll = Math.pow(scroll, 0.9);

      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;

      if (mediaQuery.matches) {
        drawStaticBackground();
        return;
      }

      const scale = Math.min(cw / VW, ch / VH);
      const ox = (cw - VW * scale) / 2;
      const oy = (ch - VH * scale) / 2;
      const isMobile = cw < 700;

      ctx.clearRect(0, 0, cw, ch);

      const grd = ctx.createRadialGradient(
        cw * 0.5,
        ch * 0.25,
        50,
        cw * 0.5,
        ch * 0.25,
        Math.max(cw, ch)
      );
      grd.addColorStop(0, "#143a66");
      grd.addColorStop(0.35, "#0d2a4a");
      grd.addColorStop(0.6, "#0a1f36");
      grd.addColorStop(1, "#08192b");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, cw, ch);

      ctx.save();
      ctx.globalAlpha = 0.12;
      const drift = -time * 10;
      const step = isMobile ? 72 : 32;

      ctx.translate(
        ox + (drift % (step * scale)),
        oy + ((drift * (isMobile ? 0.9 : 0.6)) % (step * scale))
      );
      ctx.scale(scale, scale);
      ctx.strokeStyle = "rgba(90,130,170,0.30)";
      ctx.lineWidth = isMobile ? 1.6 : 1;

      for (let x = -VW; x <= VW * 2; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, -VH);
        ctx.lineTo(x, VH * 2);
        ctx.stroke();
      }

      for (let y = -VH; y <= VH * 2; y += step) {
        ctx.beginPath();
        ctx.moveTo(-VW, y);
        ctx.lineTo(VW * 2, y);
        ctx.stroke();
      }
      ctx.restore();

      ctx.save();
      ctx.translate(ox, oy);
      const vertScale = isMobile ? 1.3 : 1;
      ctx.scale(scale, scale * vertScale);

      const glowWidth = isMobile ? 9 : 6;
      const neonWidth = isMobile ? 4.2 : 3;
      const dotRadius = isMobile ? 6 : 4.2;
      const glowBlur = isMobile ? 24 : 18;
      const neonBlur = isMobile ? 18 : 12;

      for (let i = 0; i < PATHS.length; i++) {
        const { points, delay, base } = PATHS[i];
        const { total, segs } = metrics[i];
        const p = Math.max(0, Math.min(1, (easeScroll - delay) / (1 - delay)));
        const lenFrac = base + (1 - base) * Math.min(1, p);
        const startDist = 0;
        const endDist = total * Math.min(1, lenFrac);

        ctx.shadowColor = "rgba(14,50,100,0.9)";
        ctx.shadowBlur = glowBlur;
        ctx.strokeStyle = "#0d2a4a";
        ctx.lineWidth = glowWidth;
        strokePolylinePartial(ctx, points, segs, startDist, endDist, 12);

        ctx.shadowColor = "rgba(80,160,255,0.8)";
        ctx.shadowBlur = neonBlur;
        const pulse = 0.8 + 0.2 * Math.sin(time * 1.2 + i * 0.7);
        const [sx, sy] = pointAt(points, segs, startDist);
        const [ex, ey] = pointAt(points, segs, endDist);
        const lg = ctx.createLinearGradient(sx, sy, ex, ey);
        lg.addColorStop(0, `rgba(110,168,255,${isMobile ? pulse : 0.95 * pulse})`);
        lg.addColorStop(1, `rgba(59,130,246,${isMobile ? pulse : 0.95 * pulse})`);
        ctx.strokeStyle = lg;
        ctx.lineWidth = neonWidth;
        strokePolylinePartial(ctx, points, segs, startDist, endDist, 12);

        ctx.shadowBlur = isMobile ? 14 : 8;
        const startPt = pointAt(points, segs, startDist);
        const endPt = pointAt(points, segs, endDist);

        ctx.fillStyle = "rgba(147,197,253,0.98)";
        ctx.beginPath();
        ctx.arc(startPt[0], startPt[1], dotRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(96,165,250,0.98)";
        ctx.beginPath();
        ctx.arc(endPt[0], endPt[1], dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      if (mediaQuery.matches) {
        drawStaticBackground();
      }
    };

    resize();
    if (mediaQuery.matches) {
      drawStaticBackground();
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", onResize);
    mediaQuery.addEventListener("change", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      mediaQuery.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default CircuitCanvasBG;
