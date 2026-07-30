/*
 * Adapted from Kokonut UI's Beams Background.
 * Source: https://21st.dev/@kokonutd/components/beams-background
 * License: MIT
 */

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type BeamIntensity = "subtle" | "medium" | "strong";

interface BeamsBackgroundProps {
  intensity?: BeamIntensity;
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

const MINIMUM_BEAMS = 20;
const MAX_PIXEL_RATIO = 2;

const opacityByIntensity: Record<BeamIntensity, number> = {
  subtle: 0.7,
  medium: 0.85,
  strong: 1,
};

const createBeam = (width: number, height: number): Beam => ({
  x: Math.random() * width * 1.5 - width * 0.25,
  y: Math.random() * height * 1.5 - height * 0.25,
  width: 30 + Math.random() * 60,
  length: height * 2.5,
  angle: -35 + Math.random() * 10,
  speed: 0.6 + Math.random() * 1.2,
  opacity: 0.12 + Math.random() * 0.16,
  hue: 190 + Math.random() * 70,
  pulse: Math.random() * Math.PI * 2,
  pulseSpeed: 0.02 + Math.random() * 0.03,
});

const BeamsBackground = ({ intensity = "medium" }: BeamsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let viewportWidth = canvas.clientWidth;
    let viewportHeight = canvas.clientHeight;

    const resetBeam = (beam: Beam, index: number, totalBeams: number) => {
      const column = index % 3;
      const spacing = viewportWidth / 3;

      beam.y = viewportHeight + 100;
      beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.length = viewportHeight * 2.5;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = 190 + (index * 70) / totalBeams;
      beam.opacity = 0.2 + Math.random() * 0.1;
    };

    const drawBeam = (beam: Beam) => {
      context.save();
      context.translate(beam.x, beam.y);
      context.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityByIntensity[intensity];
      const gradient = context.createLinearGradient(0, 0, 0, beam.length);

      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
      gradient.addColorStop(
        0.1,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`,
      );
      gradient.addColorStop(
        0.4,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`,
      );
      gradient.addColorStop(
        0.6,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`,
      );
      gradient.addColorStop(
        0.9,
        `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`,
      );
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

      context.fillStyle = gradient;
      context.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      context.restore();
    };

    const renderFrame = (advance: boolean) => {
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      context.filter = "blur(35px)";

      const totalBeams = beamsRef.current.length;
      beamsRef.current.forEach((beam, index) => {
        if (advance) {
          beam.y -= beam.speed;
          beam.pulse += beam.pulseSpeed;

          if (beam.y + beam.length < -100) {
            resetBeam(beam, index, totalBeams);
          }
        }

        drawBeam(beam);
      });
    };

    const animate = () => {
      renderFrame(true);
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      viewportWidth = canvas.clientWidth;
      viewportHeight = canvas.clientHeight;

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        MAX_PIXEL_RATIO,
      );
      canvas.width = Math.round(viewportWidth * pixelRatio);
      canvas.height = Math.round(viewportHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      beamsRef.current = Array.from(
        { length: Math.round(MINIMUM_BEAMS * 1.5) },
        () => createBeam(viewportWidth, viewportHeight),
      );

      if (prefersReducedMotion) renderFrame(false);
    };

    resizeCanvas();

    if (!prefersReducedMotion) {
      animationFrameRef.current = window.requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05080d]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "blur(15px)" }}
      />

      <motion.div
        animate={
          prefersReducedMotion ? { opacity: 0.1 } : { opacity: [0.05, 0.15, 0.05] }
        }
        className="absolute inset-0 bg-slate-950/10"
        style={{ backdropFilter: "blur(50px)" }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 10,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }
        }
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(14,165,233,0.08),transparent_44%),linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.36))]" />
    </div>
  );
};

export default BeamsBackground;
