/*
  * File: src/pages/AboutPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: About page component for the portfolio website.
*/

import React from "react";

// Components
import CircuitCanvasComponent from "../components/CircuitBackground";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

// Data
import { aboutPageData } from "../data/aboutData/aboutData";

// Sections
import AboutHeroSection from "../sections/aboutSections/AboutHeroSection";
import AboutSummarySection from "../sections/aboutSections/AboutSummarySection";
import AboutSkillsSection from "../sections/aboutSections/AboutSkillsSection";
import AboutInterestsSection from "../sections/aboutSections/AboutInterestsSection";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => <CircuitCanvasComponent />;

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => <NavbarComponent />;

export default function AboutPage() {
  const { hero, sections } = aboutPageData;

  const summary = sections.find((s) => s.id === "summary");
  const skills = sections.find((s) => s.id === "skills");
  const interests = sections.find((s) => s.id === "interests");

  return (
    <>
      <CircuitBackground />

      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Navbar />

        <main className="flex-1 pt-8">
          <AboutHeroSection hero={hero} sections={sections} />

          {summary && summary.id === "summary" && (
            <AboutSummarySection summary={summary} />
          )}

          {skills && skills.id === "skills" && (
            <AboutSkillsSection skills={skills} />
          )}

          {interests && interests.id === "interests" && (
            <AboutInterestsSection interests={interests} />
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}
