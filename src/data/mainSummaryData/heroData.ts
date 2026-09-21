/*
  * File: src/data/mainSummaryData/heroData.ts
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Structured data for the main Hero section.
*/

export type HeroCta =
  | { label: string; targetId: string } // scroll
  | { label: string; route: string };   // navigate

export type HeroData = {
  eyebrow: string;
  name: string;
  tagline: string;
  ctas: HeroCta[];
  headshotSrc: string;
  headshotAlt: string;
};

export const heroData: HeroData = {
  eyebrow: "Junior Business Intelligence Developer",
  name: "Samuel Manley",
  tagline:
    "I build custom software, data platforms, automation, and AI-driven tools. My background spans business intelligence, full-stack development, embedded systems, and digital hardware.",
  ctas: [
    { label: "Work Experience", route: "/work" },
    { label: "Projects", targetId: "projects" },
    { label: "Education", route: "/education" },
    { label: "Resume", route: "/resume" },
  ],
  headshotSrc: "/IMG_2559.JPEG",
  headshotAlt: "Samuel Manley Headshot",
};
