/*
 * File: src/sections/workSections/WorkRolesSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: Section component to display a list of work roles.
 */

import React from "react";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

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
      {workRoles.map((role) => (
        <Card key={role.slug}>
          <div className="flex items-start gap-4">
            {/* Logo square */}
            <div
              className="
                w-24 h-24
                rounded-2xl
                overflow-hidden
                bg-white/20
                border border-white/30
                flex items-center justify-center
                flex-shrink-0
              "
            >
              {role.logo?.src ? (
                <img
                  src={role.logo.src}
                  alt={role.logo.alt}
                  className="w-full h-full object-contain p-1 scale-110"
                  draggable={false}
                  loading="lazy"
                />
              ) : (
                <div className="text-xs text-white/60">Logo</div>
              )}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug truncate">
                    {role.title}
                  </h3>
                  <div className="text-sm text-blue-200/80 mt-1">
                    {role.place} •{" "}
                    <span className="text-white">{role.when}</span>
                  </div>
                </div>

                <CustomButton
                  className="ml-auto whitespace-nowrap"
                  onClick={() => navigate(workDetailPath(role.slug))}
                >
                  View Details
                </CustomButton>
              </div>

              {/* Preview bullets */}
              <ul className="mt-3 list-disc ml-5 text-sm space-y-1 text-blue-100/90">
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
