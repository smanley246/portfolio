/*
  * File: src/sections/mainSections/MainExperienceSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the Main Experience section component for the portfolio website.
*/

import React from "react";
import { Briefcase } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { experienceData } from "../../data/mainSummaryData/experienceData";

const MainExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Experience" icon={<Briefcase />}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          {experienceData.left.map((role) => (
            <Card key={`${role.when}-${role.title}-${role.place}`}>
              <div className="text-sm text-[var(--color-text-soft)]">{role.when}</div>
              <h3 className="mt-1 font-semibold">{role.title}</h3>
              <div className="text-sm text-[var(--color-text-soft)]">{role.place}</div>

              <ul className="ml-5 mt-3 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {experienceData.right.map((role) => (
            <Card key={`${role.when}-${role.title}-${role.place}`}>
              <div className="text-sm text-[var(--color-text-soft)]">{role.when}</div>
              <h3 className="mt-1 font-semibold">{role.title}</h3>
              <div className="text-sm text-[var(--color-text-soft)]">{role.place}</div>

              <ul className="ml-5 mt-3 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MainExperienceSection;
