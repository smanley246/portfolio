/*
 * File: src/sections/workSections/WorkRolesSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: Section component to display a list of work roles.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";

type WorkRole = {
  slug: string;
  title: string;
  place: string;
  when: string;
  bullets: string[];
  logo?: { src: string; alt: string };
};

type Props = {
  workRoles: WorkRole[];
  workDetailPath: (slug: string) => string;
};

const WorkRolesSection: React.FC<Props> = ({ workRoles, workDetailPath }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="sr-only">Professional roles</h2>
      {workRoles.map((role) => (
        <Card key={role.slug}>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="media-frame flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border sm:h-24 sm:w-24 sm:rounded-[1.5rem]">
              {role.logo?.src ? (
                <img
                  src={role.logo.src}
                  alt={role.logo.alt}
                  className="h-full w-full scale-110 object-contain p-1"
                  draggable={false}
                  loading="lazy"
                />
              ) : (
                <div className="text-xs text-white/60">Logo</div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-snug">
                    {role.title}
                  </h3>
                  <div className="meta-line mt-2 text-sm">
                    {role.place} • <span className="text-white">{role.when}</span>
                  </div>
                </div>

                <CustomButton
                  className="w-full whitespace-nowrap sm:ml-auto sm:w-auto"
                  onClick={() => navigate(workDetailPath(role.slug))}
                >
                  View Details
                </CustomButton>
              </div>

              <ul className="ml-5 mt-4 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
                {role.bullets.map((b, i) => (
                  <li key={`${role.slug}-b${i}`}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WorkRolesSection;
