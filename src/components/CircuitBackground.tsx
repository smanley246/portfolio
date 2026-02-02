/*
  * File: src/components/CircuitBackground.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Animated circuit board style background canvas
*/

import React, { useEffect, useRef } from "react";

const CircuitCanvasBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // canvas DOM handle
  const rafRef = useRef<number | null>(null); // animation frame id for cleanup

  // Virtual design space (logical coordinates, independent of screen size)
  const VW = 1440; // virtual width
  const VH = 900;  // virtual height

  // Pre-planned, NON-OVERLAPPING polylines (orthogonal, rounded corners)
  // All start from off-screen edges (x < 0, x > VW, y < 0, y > VH)
  const PATHS: Array<{ points: [number, number][], delay: number, base: number }> = [
    // top-left sweep
    { points: [[-120,160],[440,160],[440,220],[760,220],[900,220]], delay: 0.00, base: 0.18 },
    // left gutter rising, then across top band
    { points: [[-100,340],[260,340],[260,140],[560,140],[820,140],[1020,140]], delay: 0.07, base: 0.16 },
    // top-right hook back
    { points: [[VW+120,120],[1180,120],[1180,200],[940,200],[780,200]], delay: 0.14, base: 0.18 },
    // right mid sweep
    { points: [[VW+100,520],[1200,520],[980,520],[820,520]], delay: 0.22, base: 0.17 },
    // bottom-right up & left
    { points: [[VW+150,860],[1100,860],[1100,640],[880,640],[760,640]], delay: 0.30, base: 0.20 },
    // bottom-left rightward then slight up
    { points: [[-140,780],[420,780],[600,780],[600,700]], delay: 0.38, base: 0.18 },
    // left inner stub
    { points: [[-120,520],[240,520],[240,460]], delay: 0.46, base: 0.16 },
    // right inner stub
    { points: [[VW+120,440],[1240,440],[1240,480]], delay: 0.54, base: 0.16 },
  ];

  // Utility: compute cumulative lengths for a polyline
  function polyMetrics(pts: [number, number][]) {
    const segs: number[] = []; // per-segment lengths
    let total = 0;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      const d = Math.hypot(x1 - x0, y1 - y0); // Euclidean distance
      segs.push(d);
      total += d;
    }
    return { total, segs };
  }

  // Sample the polyline at distance `d` (0..total)
  function pointAt(pts: [number, number][], segs: number[], d: number) {
    let t = d; // remaining distance to walk along segments
    for (let i = 0; i < segs.length; i++) {
      const len = segs[i];
      if (t <= len) {
        const [x0, y0] = pts[i];
        const [x1, y1] = pts[i + 1];
        const u = len === 0 ? 0 : t / len; // local interpolation factor
        return [x0 + (x1 - x0) * u, y0 + (y1 - y0) * u] as [number, number];
      }
      t -= len;
    }
    return pts[pts.length - 1]; // fallback: last point
  }

  // Rounded-corner stroke along a partial segment of a polyline
  function strokePolylinePartial(
    ctx: CanvasRenderingContext2D,
    pts: [number, number][],
    segs: number[],
    startDist: number,
    endDist: number,
    radius = 10 // corner rounding radius
  ) {
    const total = segs.reduce((a, b) => a + b, 0); // total path length
    const s = Math.max(0, Math.min(total, startDist)); // clamp start
    const e = Math.max(0, Math.min(total, endDist));   // clamp end
    if (e <= s) return; // nothing to draw

    const trimmed: [number, number][] = [];
    trimmed.push(pointAt(pts, segs, s)); // starting point
    const step = 2; // densify for nicer rounded joins
    for (let d = Math.floor(s / step) * step + step; d < e; d += step) {
      trimmed.push(pointAt(pts, segs, d)); // intermediate samples
    }
    trimmed.push(pointAt(pts, segs, e)); // end point

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < trimmed.length; i++) {
      const [x, y] = trimmed[i];
      if (i === 0) {
        ctx.moveTo(x, y); // start stroke
      } else {
        const [px, py] = trimmed[i - 1];
        if (i < trimmed.length - 1) {
          const [nx, ny] = trimmed[i + 1];
          const vx1 = x - px, vy1 = y - py;
          const vx2 = nx - x, vy2 = ny - y;
          const turn = Math.abs(vx1 * vy2 - vy1 * vx2) > 1e-3; // detect corner
          if (turn) {
            const len1 = Math.hypot(vx1, vy1) || 1;
            const len2 = Math.hypot(vx2, vy2) || 1;
            const r = Math.min(radius, len1 * 0.5, len2 * 0.5);
            const rx1 = x - (vx1 / len1) * r;
            const ry1 = y - (vy1 / len1) * r;
            const rx2 = x + (vx2 / len2) * r;
            const ry2 = y + (vy2 / len2) * r;
            ctx.lineTo(rx1, ry1);                      // approach corner
            ctx.quadraticCurveTo(x, y, rx2, ry2);      // rounded corner
            continue;
          }
        }
        ctx.lineTo(x, y); // straight segment
      }
    }
    ctx.stroke();
  }

  useEffect(() => {
    const canvas = canvasRef.current!; // canvas is present once mounted
    const ctx = canvas.getContext("2d", { alpha: true })!; // 2D context with alpha

    // Precompute metrics for each polyline once
    const metrics = PATHS.map((p) => polyMetrics(p.points));

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1)); // clamp DPR
      const w = canvas.clientWidth;  // CSS width
      const h = canvas.clientHeight; // CSS height
      canvas.width = Math.round(w * dpr);  // actual pixel width
      canvas.height = Math.round(h * dpr); // actual pixel height
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // reset transform with DPR scaling
    };

    const getScrollProgress = () => {
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      return sh <= 0 ? 0 : window.scrollY / sh; // normalized 0..1 scroll
    };

    const draw = (t: number) => {
      const time = t / 1000; // ms → seconds
      const scroll = getScrollProgress(); // raw scroll progress
      const easeScroll = Math.pow(scroll, 0.9); // gentle easing curve

      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const scale = Math.min(cw / VW, ch / VH); // letterbox scale
      const ox = (cw - VW * scale) / 2;         // x-offset to center
      const oy = (ch - VH * scale) / 2;         // y-offset to center

      // Treat narrow screens as "mobile"
      const isMobile = cw < 700; // tweak breakpoint if needed

      ctx.clearRect(0, 0, cw, ch); // clear entire canvas

      // Background gradient (deep blue glow)
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
      ctx.fillRect(0, 0, cw, ch); // fill whole canvas

      // Grid (subtle, parallax drift)
      ctx.save();
      ctx.globalAlpha = 0.12; // low opacity grid
      const drift = -time * 10; // px per second

      // Bigger spacing on mobile = bigger squares
      const step = isMobile ? 72 : 32; // main grid spacing control

      ctx.translate(
        ox + (drift % (step * scale)),                     // horizontal drift
        oy + ((drift * (isMobile ? 0.9 : 0.6)) % (step * scale)) // vertical drift
      );
      ctx.scale(scale, scale); // scale grid to virtual space
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = "rgba(90,130,170,0.30)";
      ctx.lineWidth = isMobile ? 1.6 : 1; // slightly thicker lines on mobile

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

      // Circuit traces
      ctx.save();
      ctx.translate(ox, oy); // align virtual origin

      // Extra vertical stretch on mobile so paths are more spread out
      const vertScale = isMobile ? 1.3 : 1; // vertical exaggeration factor
      ctx.scale(scale, scale * vertScale);

      // Thicker, more prominent lines & dots on mobile
      const glowWidth = isMobile ? 9 : 6;       // outer glow stroke width
      const neonWidth = isMobile ? 4.2 : 3;     // inner neon width
      const dotRadius = isMobile ? 6 : 4.2;     // end-cap radius
      const glowBlur = isMobile ? 24 : 18;      // outer glow blur
      const neonBlur = isMobile ? 18 : 12;      // neon blur

      for (let i = 0; i < PATHS.length; i++) {
        const { points, delay, base } = PATHS[i];
        const { total, segs } = metrics[i];

        // Local progress with a per-path delay
        const p = Math.max(0, Math.min(1, (easeScroll - delay) / (1 - delay)));

        // Grow-only: path only extends forward with scroll
        const growMax = 1;          // maximum fraction of length
        const growPhase = Math.min(1, p); // clamped growth
        const lenFrac = base + (growMax - base) * growPhase; // animated fraction

        const offFrac = 0.0; // keep start fixed at 0
        const startDist = total * offFrac;
        const endDist = total * Math.min(1, offFrac + lenFrac); // moving front

        // Glow stroke (wide, soft underlay)
        ctx.shadowColor = "rgba(14,50,100,0.9)";
        ctx.shadowBlur = glowBlur;
        ctx.strokeStyle = "#0d2a4a";
        ctx.lineWidth = glowWidth;
        strokePolylinePartial(ctx, points, segs, startDist, endDist, 12);

        // Main neon stroke (animated brightness pulse)
        ctx.shadowColor = "rgba(80,160,255,0.8)";
        ctx.shadowBlur = neonBlur;
        const pulse = 0.8 + 0.2 * Math.sin(time * 1.2 + i * 0.7); // per-path offset
        const startColor = `rgba(110,168,255,${isMobile ? 1.0 * pulse : 0.95 * pulse})`;
        const endColor = `rgba(59,130,246,${isMobile ? 1.0 * pulse : 0.95 * pulse})`;

        const [sx, sy] = pointAt(points, segs, startDist); // gradient start
        const [ex, ey] = pointAt(points, segs, endDist);   // gradient end
        const lg = ctx.createLinearGradient(sx, sy, ex, ey);
        lg.addColorStop(0, startColor);
        lg.addColorStop(1, endColor);
        ctx.strokeStyle = lg;
        ctx.lineWidth = neonWidth;
        strokePolylinePartial(ctx, points, segs, startDist, endDist, 12);

        // End-cap dots at the visible ends of the trace
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

      rafRef.current = requestAnimationFrame(draw); // schedule next frame
    };

    const onResize = () => resize();
    resize(); // initial size
    rafRef.current = requestAnimationFrame(draw); // start animation loop
    window.addEventListener("resize", onResize);
    return () => {
      // cleanup on unmount
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Full-screen canvas background behind all content */}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default CircuitCanvasBG;
