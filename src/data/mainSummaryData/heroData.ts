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
  eyebrow: "Computer Engineer",
  name: "Samuel Manley",
  tagline:
    "Graduating Computer Engineering student passionate about hardware & software development. Much of my talent lies in software and hardware system design, with a focus on creating efficient and scalable solutions.",
  ctas: [
    { label: "Work Experience", route: "/work" },
    { label: "Projects", targetId: "projects" },
    { label: "Education", route: "/education" },
    { label: "Resume", route: "/resume" },
  ],
  headshotSrc: "/IMG_2559.JPEG",
  headshotAlt: "Samuel Manley Headshot",
};
