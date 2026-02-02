/*
  * File: src/sections/mainSections/mainAboutSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Main About section component for the portfolio website.
*/

import React from "react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { User2 } from "lucide-react";
import { aboutData } from "../../data/mainSummaryData/aboutData";

const MainAboutSection: React.FC = () => (
  <Section id="about" title="About Me" icon={<User2 />}>
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        {aboutData.paragraphs.map((text, idx) => (
          <p key={idx} className={idx === 0 ? "" : "mt-3"}>
            {text}
          </p>
        ))}
      </Card>

      <Card>
        <h4 className="font-semibold mb-2">Skills</h4>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          {aboutData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

export default MainAboutSection;
