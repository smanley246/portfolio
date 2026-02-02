/*
  * File: src/pages/EducationPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Education page component for the portfolio website.
*/

import React from "react";

// Components
import CircuitCanvasComponent from "../components/CircuitBackground";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

// Data
import { courseDetailPath, educationData } from "../data/educationData/educationData";

// Sections
import EducationHeroSection from "../sections/educationSections/EducationHeroSection";
import EducationDegreeSection from "../sections/educationSections/EducationDegreeSection";
import EducationCoursesSection from "../sections/educationSections/EducationCoursesSection";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => <CircuitCanvasComponent />;

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => <NavbarComponent />;

export default function EducationPage() {
  const { heading, degreeCard, coursesHeading, courses } = educationData;

  return (
    <>
      <CircuitBackground />

      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Navbar />

        <main className="flex-1 pt-8">
          <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14 pb-16">
            <EducationHeroSection heading={heading} degreeCard={degreeCard} />
            <EducationDegreeSection degreeCard={degreeCard} />
            <EducationCoursesSection
              coursesHeading={coursesHeading}
              courses={courses}
              courseDetailPath={courseDetailPath}
            />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
