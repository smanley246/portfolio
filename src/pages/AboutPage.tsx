/*
  * File: src/pages/AboutPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: About page component for the portfolio website.
*/

// Data
import { aboutPageData } from "../data/aboutData/aboutData";

// Sections
import AboutHeroSection from "../sections/aboutSections/AboutHeroSection";
import AboutSummarySection from "../sections/aboutSections/AboutSummarySection";
import AboutSkillsSection from "../sections/aboutSections/AboutSkillsSection";
import AboutInterestsSection from "../sections/aboutSections/AboutInterestsSection";

export default function AboutPage() {
  const { hero, sections } = aboutPageData;

  const summary = sections.find((s) => s.id === "summary");
  const skills = sections.find((s) => s.id === "skills");
  const interests = sections.find((s) => s.id === "interests");

  return (
    <>
      <AboutHeroSection hero={hero} sections={sections} />
      {summary && summary.id === "summary" && <AboutSummarySection summary={summary} />}
      {interests && interests.id === "interests" && (
        <AboutInterestsSection interests={interests} />
      )}
      {skills && skills.id === "skills" && <AboutSkillsSection skills={skills} />}
    </>
  );
}
