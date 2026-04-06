/*
  * File: src/pages/ProjectsPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Projects page for the portfolio website.
*/

import PageIntro from "../components/PageIntro";
import ProjectsSection from "../sections/projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="site-container">
      <PageIntro
        eyebrow="Selected Work"
        title="Projects built to ship, test, and iterate."
        description="A fuller view of my project work across mobile apps, embedded systems, controls, and web experiences."
      />
      <ProjectsSection />
    </div>
  );
}
