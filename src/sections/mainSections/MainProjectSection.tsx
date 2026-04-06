/*
  * File: src/sections/mainSections/MainProjectSection.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains the homepage Projects section component for the portfolio website.
*/

// ProjectsSection.tsx
import React from "react";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { FolderGit2 } from "lucide-react";
import { projects } from "../../data/mainSummaryData/projectsData";

const MainProjectsSection: React.FC = () => (
  <Section id="projects" title="Projects" icon={<FolderGit2 />}>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <ProjectCard
          key={p.slug}
          slug={p.slug}
          name={p.name}
          blurb={p.blurb}
          tags={p.tags}
          link={p.link}
          repo={p.repo}
          preview={p.preview}
          media={p.media}
          details={
            <>
              <p>{p.description ?? p.blurb}</p>
              {p.bullets?.length ? (
                <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </>
          }
        />
      ))}
    </div>
  </Section>
);

export default MainProjectsSection;
