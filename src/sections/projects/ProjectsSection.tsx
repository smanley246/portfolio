/*
  * File: src/sections/projects/ProjectsSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Section component to display a list of projects.
*/

import React from "react";
import Card from "../../components/Card";
import { projects, projectDetailPath } from "../../data/projectData/projectData";
import CustomButton from "../../components/CustomButton";

const ProjectsSection: React.FC = () => {
    return (
        <section>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white">Projects</h1>
            <p className="text-sm text-blue-200/80 mt-2">
              A complete list of my projects. Click “View details” for the full breakdown.
            </p>
          </div>
    
          <div className="flex flex-col gap-6">
            {projects.map((p) => (
              <Card key={p.slug}>
                <div className="flex flex-col lg:flex-row gap-4 h-full">
                  {/* ================= TEXT ================= */}
                  <div className="flex-1 flex flex-col order-1">
                    <div className="flex items-start gap-2">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold leading-snug">
                          {p.name}
                        </h3>
    
                        <div className="text-sm text-blue-200/80 mt-1">
                          Completed: <span className="text-white">{p.completed}</span>
                        </div>
                      </div>
    
                      <CustomButton className="ml-auto whitespace-nowrap">
                          <a href={projectDetailPath(p.slug)}>View details</a>
                      </CustomButton>
                    </div>
    
                    <p className="mt-2 text-sm text-blue-100/90 leading-relaxed line-clamp-4">
                      {p.blurb}
                    </p>
    
                    <div className="mt-3 lg:mt-auto flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
    
                  {/* ================= PREVIEW ================= */}
                  {p.preview && (
                    <div className="order-2 w-full lg:w-auto">
                      <div
                        className="
                          w-full
                          lg:w-56 xl:w-64
                          aspect-[4/5]
                          overflow-hidden
                          rounded-2xl
                          bg-[#0a1f36]
                        "
                      >
                        <img
                          src={p.preview}
                          alt={`${p.name} preview`}
                          className="w-full h-full object-cover"
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
