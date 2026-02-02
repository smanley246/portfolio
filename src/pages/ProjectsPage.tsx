/*
  * File: src/pages/ProjectsPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Projects page for the portfolio website.
*/

import React from "react";
import { motion } from "framer-motion";

// Imports of Components
import CircuitCanvasComponent from "../components/CircuitBackground";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

// Section content
import ProjectsSection from "../sections/projects/ProjectsSection";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => {
  return <CircuitCanvasComponent />;
};

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => {
  return <NavbarComponent />;
};

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <>
      <CircuitBackground />
      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Navbar />

        <main className="flex-1 pt-8">
          <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-14">
            <motion.div
              variants={sectionFade}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <ProjectsSection />
            </motion.div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
