/*
  * File: src/sections/mainSections/mainAboutSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the Main About section component for the portfolio website.
*/

import React from "react";
import { User2 } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { aboutData } from "../../data/mainSummaryData/aboutData";

const MainAboutSection: React.FC = () => (
  <Section id="about" title="About Me" icon={<User2 />}>
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        {aboutData.paragraphs.map((text, idx) => (
          <p key={idx} className={`prose-copy ${idx === 0 ? "" : "mt-4"}`}>
            {text}
          </p>
        ))}
      </Card>

      <Card>
        <h4 className="mb-3 font-semibold">Skills</h4>
        <ul className="ml-5 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
          {aboutData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

export default MainAboutSection;
