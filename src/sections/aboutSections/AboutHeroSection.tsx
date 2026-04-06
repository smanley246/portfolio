/*
 * File: src/sections/aboutSections/AboutHeroSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: This file contains the About Hero section component for the portfolio website.
 */

import React from "react";
import CustomButton from "../../components/CustomButton";
import PageIntro from "../../components/PageIntro";

type AboutHero = {
  kicker: string;
  title: string;
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
    <section className="site-container">
      <PageIntro
        eyebrow={hero.kicker}
        title={hero.title}
        description={hero.subtitle}
        actions={
          <>
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
          </>
        }
      />
    </section>
  );
};

export default AboutHeroSection;
