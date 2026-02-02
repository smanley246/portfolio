/*
  * File: src/sections/mainSections/MainExperienceSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Main Experience section component for the portfolio website.
*/

import React from "react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { Briefcase } from "lucide-react";
import { experienceData } from "../../data/mainSummaryData/experienceData";

const MainExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Experience" icon={<Briefcase />}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {experienceData.left.map((role) => (
            <Card key={`${role.when}-${role.title}-${role.place}`}>
              <div className="text-sm text-blue-200/80">{role.when}</div>

              <h3 className="font-semibold mt-1">{role.title}</h3>

              <div className="text-sm text-blue-200/80">
                {role.place}
              </div>

              <ul className="list-disc ml-5 mt-3 space-y-1 text-sm">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {experienceData.right.map((role) => (
            <Card key={`${role.when}-${role.title}-${role.place}`}>
              <div className="text-sm text-blue-200/80">{role.when}</div>

              <h3 className="font-semibold mt-1">{role.title}</h3>

              <div className="text-sm text-blue-200/80">
                {role.place}
              </div>

              <ul className="list-disc ml-5 mt-3 space-y-1 text-sm">
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
