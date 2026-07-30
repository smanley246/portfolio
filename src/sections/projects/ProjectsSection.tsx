/*
 * File: src/sections/projects/ProjectsSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: Section component to display a list of projects.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import { projectDetailPath, projects } from "../../data/projectData/projectData";

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="sr-only">Project list</h2>
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <Card key={p.slug} className="group overflow-hidden">
            <div className="flex h-full flex-col gap-4 lg:flex-row">
              <div className="order-1 flex flex-1 flex-col">
                <div className="flex items-start gap-2">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight">
                      {p.name}
                    </h3>

                    <div className="card-chip mt-2 w-fit uppercase tracking-[0.14em]">
                      {p.completed}
                    </div>
                  </div>

                  <CustomButton
                    className="ml-auto whitespace-nowrap"
                    onClick={() => navigate(projectDetailPath(p.slug))}
                  >
                    View Details
                  </CustomButton>
                </div>

                <p className="prose-copy mt-3 line-clamp-4 text-sm leading-relaxed">
                  {p.blurb}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 lg:mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="card-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {p.preview && (
                <div className="order-2 w-full lg:w-auto">
                  <div className="interactive-media aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border lg:w-56 xl:w-64">
                    <img
                      src={p.preview}
                      alt={`${p.name} preview`}
                      className="interactive-media__asset h-full w-full object-cover"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
