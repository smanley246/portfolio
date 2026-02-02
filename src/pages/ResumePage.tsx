/*
  * File: src/pages/ResumePage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Resume page for the portfolio website.
*/

import React from "react";

// Components
import CircuitCanvasComponent from "../components/CircuitBackground";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

// Data
import { resumeData } from "../data/resumeData/resumeData";

// Sections
import ResumeHeroSection from "../sections/resumeSections/ResumeHeroSection";
import ResumeActionsSection from "../sections/resumeSections/ResumeActionsSection";
import ResumePreviewSection from "../sections/resumeSections/ResumePreviewSection";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => <CircuitCanvasComponent />;

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => <NavbarComponent />;

export default function ResumePage() {
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
            <ResumeHeroSection heading={resumeData.heading} />
            <ResumeActionsSection actions={resumeData.actions} />
            <ResumePreviewSection preview={resumeData.preview} />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
