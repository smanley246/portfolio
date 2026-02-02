/*
 * File: src/sections/aboutSections/AboutHeroSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: This file contains the About Hero section component for the portfolio website.
 */

import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../../components/CustomButton";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type AboutHero = {
  kicker: string;
  subtitle: string;
};

type AboutNavSection = {
  id: string;
  navLabel: string;
};

type Props = {
  hero: AboutHero;
  sections: AboutNavSection[];
};

const AboutHeroSection: React.FC<Props> = ({ hero, sections }) => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14">
      <motion.div
        variants={sectionFade}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-white">{hero.kicker}</h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl">
              {hero.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <CustomButton
                key={s.id}
                onClick={() => {
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {s.navLabel}
              </CustomButton>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
