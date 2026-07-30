/*
 * Interactive particle-network background inspired by Umair Waheed's
 * "Particles BG" component on 21st.dev.
 */

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  life?: number;
  maxLife?: number;
}

interface PointerPosition {
  x: number;
  y: number;
  active: boolean;
}

const ACCENT = { red: 34, green: 211, blue: 238 };
const MAX_PIXEL_RATIO = 2;
const CONNECTION_DISTANCE = 132;
const POINTER_CONNECTION_DISTANCE = 170;

const createParticle = (
  width: number,
  height: number,
  origin?: { x: number; y: number },
): Particle => {
  const angle = Math.random() * Math.PI * 2;
  const speed = origin ? 0.35 + Math.random() * 0.8 : 0.08 + Math.random() * 0.25;
  const maxLife = origin ? 260 + Math.random() * 220 : undefined;

  return {
    x: origin ? origin.x + (Math.random() - 0.5) * 24 : Math.random() * width,
    y: origin ? origin.y + (Math.random() - 0.5) * 24 : Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: 1 + Math.random() * 1.35,
    opacity: 0.45 + Math.random() * 0.5,
    life: maxLife,
    maxLife,
  };
};

const getParticleCount = (width: number, height: number) => {
  const areaCount = Math.round((width * height) / 15000);
  const mobileCap = width < 768 ? 62 : 112;
  return Math.max(42, Math.min(areaCount, mobileCap));
};

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const pointer: PointerPosition = { x: 0, y: 0, active: false };
    let particles: Particle[] = [];
    let animationFrame: number | null = null;
    let width = 0;
    let height = 0;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        MAX_PIXEL_RATIO,
      );
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const targetCount = getParticleCount(width, height);
      particles = particles
        .filter((particle) => particle.maxLife === undefined)
        .slice(0, targetCount);

      while (particles.length < targetCount) {
        particles.push(createParticle(width, height));
      }
    };

    const drawLine = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      opacity: number,
    ) => {
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.strokeStyle = `rgba(${ACCENT.red}, ${ACCENT.green}, ${ACCENT.blue}, ${opacity})`;
      context.lineWidth = 0.7;
      context.stroke();
    };

    const updateParticle = (particle: Particle) => {
      if (particle.maxLife !== undefined && particle.life !== undefined) {
        particle.life -= 1;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -10) particle.x = width + 10;
      if (particle.x > width + 10) particle.x = -10;
      if (particle.y < -10) particle.y = height + 10;
      if (particle.y > height + 10) particle.y = -10;
    };

    const drawParticle = (particle: Particle) => {
      const lifeOpacity =
        particle.life !== undefined && particle.maxLife
          ? Math.min(1, particle.life / Math.min(90, particle.maxLife))
          : 1;
      const opacity = particle.opacity * lifeOpacity;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * 3.2, 0, Math.PI * 2);
      context.fillStyle = `rgba(${ACCENT.red}, ${ACCENT.green}, ${ACCENT.blue}, ${opacity * 0.08})`;
      context.fill();

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(103, 232, 249, ${opacity})`;
      context.fill();
    };

    const render = (shouldAdvance: boolean) => {
      context.clearRect(0, 0, width, height);

      if (shouldAdvance) {
        particles.forEach(updateParticle);
        particles = particles.filter(
          (particle) => particle.life === undefined || particle.life > 0,
        );
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (
          let neighbourIndex = index + 1;
          neighbourIndex < particles.length;
          neighbourIndex += 1
        ) {
          const neighbour = particles[neighbourIndex];
          const distance = Math.hypot(
            particle.x - neighbour.x,
            particle.y - neighbour.y,
          );

          if (distance < CONNECTION_DISTANCE) {
            const opacity =
              (1 - distance / CONNECTION_DISTANCE) *
              Math.min(particle.opacity, neighbour.opacity) *
              0.24;
            drawLine(
              particle.x,
              particle.y,
              neighbour.x,
              neighbour.y,
              opacity,
            );
          }
        }

        if (pointer.active) {
          const pointerDistance = Math.hypot(
            particle.x - pointer.x,
            particle.y - pointer.y,
          );

          if (pointerDistance < POINTER_CONNECTION_DISTANCE) {
            const opacity =
              (1 - pointerDistance / POINTER_CONNECTION_DISTANCE) * 0.42;
            drawLine(
              particle.x,
              particle.y,
              pointer.x,
              pointer.y,
              opacity,
            );
          }
        }

        drawParticle(particle);
      }
    };

    const animate = () => {
      render(true);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationFrame !== null) return;

      if (reducedMotionQuery.matches) {
        render(false);
        return;
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationFrame === null) return;
      window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = event.pointerType !== "touch";
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.button !== 0 ||
        reducedMotionQuery.matches ||
        event.pointerType === "touch"
      ) {
        return;
      }

      const burst = Array.from({ length: 9 }, () =>
        createParticle(width, height, {
          x: event.clientX,
          y: event.clientY,
        }),
      );
      particles.push(...burst);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    const handleMotionPreferenceChange = () => {
      stopAnimation();
      startAnimation();
    };

    const handleResize = () => {
      setCanvasSize();
      if (reducedMotionQuery.matches) render(false);
    };

    setCanvasSize();
    startAnimation();

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionQuery.addEventListener(
      "change",
      handleMotionPreferenceChange,
    );

    return () => {
      stopAnimation();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange,
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#04101d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_14%,rgba(14,165,233,0.2),transparent_38%),radial-gradient(circle_at_16%_72%,rgba(8,145,178,0.1),transparent_34%),linear-gradient(145deg,#061a2e_0%,#05243d_48%,#03101d_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(2,8,18,0.34)_100%)]" />
    </div>
  );
};

export default ParticlesBackground;
