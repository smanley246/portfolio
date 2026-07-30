/*
 * File: src/sections/mainSections/MainUserHeroSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: This file contains the Main User Hero Section component for the portfolio website.
 */

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { heroData } from "../../data/mainSummaryData/heroData";
import CustomButton from "../../components/CustomButton";
import ImageLightboxModal, {
  type LightboxImage,
} from "../../components/ImageLightboxModal";

const MainUserHeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [imageFailed, setImageFailed] = React.useState(false);
  const [expandedImage, setExpandedImage] = React.useState<LightboxImage | null>(
    null,
  );
  const reduceMotion = useReducedMotion();
  const heroCardRef = React.useRef<HTMLDivElement>(null);

  const handleHeroCardPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const node = heroCardRef.current;
    if (!node) return;

    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    node.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <>
      <section className="relative z-10 py-8 sm:py-10">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="section-kicker">{heroData.eyebrow}</p>

          <h1 className="hero-title max-w-[11ch] text-5xl font-[760] leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {heroData.name}
          </h1>

          <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            {heroData.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            {heroData.ctas.map((cta) => (
              <CustomButton
                key={"route" in cta ? cta.route : cta.targetId}
                onClick={() => {
                  if ("route" in cta) {
                    navigate(cta.route);
                    return;
                  }

                  document
                    .getElementById(cta.targetId)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </CustomButton>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={reduceMotion ? undefined : { y: -6, rotate: 0.35 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div
            ref={heroCardRef}
            onPointerMove={handleHeroCardPointerMove}
            className="panel interactive-card relative w-full max-w-[23rem] overflow-hidden rounded-[2rem] p-4"
          >
            <div className="interactive-card__surface-glow" />
            <div className="interactive-card__border-glow" />

            <div className="relative z-10">
              <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-[rgba(114,241,223,0.18)] blur-3xl" />

              <div className="interactive-media relative aspect-square overflow-hidden rounded-[1.5rem] border">
                {!imageFailed ? (
                  <>
                    <img
                      src={heroData.headshotSrc}
                      alt={heroData.headshotAlt}
                      className="interactive-media__asset h-full w-full object-cover"
                      onError={() => setImageFailed(true)}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedImage({
                          src: heroData.headshotSrc,
                          alt: heroData.headshotAlt,
                          title: "Headshot",
                        })
                      }
                      className="icon-control absolute right-4 top-4 h-10 w-10 text-white"
                      aria-label="Expand headshot"
                    >
                      <Expand className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#0a3443,#071a2a_55%,#030c16)]">
                    <span className="text-sm text-[var(--color-text-soft)]">
                      Headshot unavailable
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      <ImageLightboxModal
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </>
  );
};

export default MainUserHeroSection;
