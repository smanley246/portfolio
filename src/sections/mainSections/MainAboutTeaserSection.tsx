/*
  * File: src/sections/mainSections/MainAboutTeaserSection.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Compact homepage teaser that invites visitors to explore the About page.
*/

import React from "react";
import { ArrowRight, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../components/Section";

const MainAboutTeaserSection: React.FC = () => {
  const navigate = useNavigate();
  const teaserRef = React.useRef<HTMLButtonElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const node = teaserRef.current;
    if (!node) return;

    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    node.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <Section id="more-about-me" title="More About Me" icon={<User2 />}>
      <button
        ref={teaserRef}
        type="button"
        onClick={() => navigate("/about")}
        onPointerMove={handlePointerMove}
        className="interactive-card group panel flex w-full items-center gap-4 overflow-hidden rounded-[2rem] p-4 text-left transition hover:-translate-y-0.5 sm:gap-6 sm:p-5"
        aria-label="Go to About page"
      >
        <div className="interactive-card__surface-glow" />
        <div className="interactive-card__border-glow" />

        <div className="relative z-10 min-w-0 flex-1">
          <p className="section-kicker mb-3">More About Me</p>
          <h3 className="text-2xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-3xl">
            Get to know me outside the projects.
          </h3>
          <p className="prose-copy mt-2 max-w-[34rem] text-sm sm:text-base">
            Leadership, squash, interests, and how I work.
          </p>
        </div>

        <div className="interactive-media relative hidden h-28 w-28 shrink-0 overflow-hidden rounded-[1.6rem] sm:block md:h-32 md:w-32">
          <img
            src="/squash1.JPEG"
            alt="Samuel playing squash"
            className="interactive-media__asset h-full w-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-200/30 group-hover:bg-cyan-300/10 sm:h-24 sm:w-24">
          <ArrowRight className="h-8 w-8 text-white transition group-hover:translate-x-1" />
        </div>
      </button>
    </Section>
  );
};

export default MainAboutTeaserSection;
