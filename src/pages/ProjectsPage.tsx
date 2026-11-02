/*
  * File: src/pages/ProjectsPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Projects page for the portfolio website.
*/

import PageIntro from "../components/PageIntro";
import ProjectsSection from "../sections/projects/ProjectsSection";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { latestProjects } from "../data/projectData/projectData";

export default function ProjectsPage() {
  return (
    <div className="site-container">
      <PageIntro
        eyebrow="Selected Work"
        title="Projects"
        description="A fuller view of my project work across mobile apps, embedded systems, controls, and web experiences."
      />
      {latestProjects.length > 0 && (
        <section aria-labelledby="latest-projects-title" className="page-section">
          <SectionHeading id="latest-projects-title" title="Latest projects" />
          <div className="grid gap-6">
            {latestProjects.map((project) => <ProjectCard key={project.slug} project={project} variant="featured" />)}
          </div>
        </section>
      )}
      <ProjectsSection />
    </div>
  );
}
