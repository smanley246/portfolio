/*
  * File: src/sections/mainSections/MainAboutSection.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains the homepage About section component for the portfolio website.
*/

import React from "react";
import { User2 } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { aboutData } from "../../data/mainSummaryData/aboutData";

const MainAboutSection: React.FC = () => (
  <Section id="about" title="Professional Profile" icon={<User2 />}>
    <Card className="overflow-hidden p-0">
      <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,1fr)]">
        <div className="p-6 sm:p-7 lg:pr-9">
          <p className="section-kicker mb-5">What I do</p>
          {aboutData.paragraphs.map((text, idx) => (
            <p key={idx} className={`prose-copy ${idx === 0 ? "" : "mt-4"}`}>
              {text}
            </p>
          ))}
        </div>

        <aside className="border-t border-[rgba(159,224,234,0.13)] bg-[rgba(2,15,26,0.24)] p-6 sm:p-7 lg:border-l lg:border-t-0">
          <p className="section-kicker mb-5">Areas of expertise</p>
          <ul className="flex flex-wrap gap-2" aria-label="Technical skills">
            {aboutData.skills.map((skill) => (
              <li key={skill} className="card-chip">
                {skill}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Card>
  </Section>
);

export default MainAboutSection;
