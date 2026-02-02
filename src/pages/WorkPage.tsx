/*
  * File: src/pages/WorkPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Work page for the portfolio website, showcasing professional experience.
*/

import React from "react";

// Components
import CircuitCanvasComponent from "../components/CircuitBackground";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

// Data
import { workRoles, workDetailPath } from "../data/workData/workData";

// Sections
import WorkHeroSection from "../sections/workSections/WorkHeroSection";
import WorkRolesSection from "../sections/workSections/WorkRolesSection";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => <CircuitCanvasComponent />;

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => <NavbarComponent />;

export default function WorkPage() {
  return (
    <>
      <CircuitBackground />

      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Navbar />

        <main className="flex-1 pt-8">
          <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14 pb-10">
            <WorkHeroSection />
            <WorkRolesSection workRoles={workRoles} workDetailPath={workDetailPath} />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
