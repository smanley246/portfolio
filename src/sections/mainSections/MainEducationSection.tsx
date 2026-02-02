/*
  * File: src/sections/mainSections/mainEducationSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the Main Education section component for the portfolio website.
*/

import React from "react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { GraduationCap } from "lucide-react";
import { educationData } from "../../data/mainSummaryData/educationData";

const MainEducationSection: React.FC = () => (
  <Section id="education" title="Education" icon={<GraduationCap />}>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left: main degree summary */}
      <Card>
        <h3 className="font-semibold mb-1">{educationData.degree.title}</h3>
        <div className="text-sm text-blue-200/80">{educationData.degree.school}</div>

        <ul className="list-disc ml-5 mt-3 space-y-1 text-sm">
          {educationData.degree.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Card>

      {/* Right: highlights + logo */}
      <Card>
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <div className="flex-1">
            <h4 className="font-semibold mb-3">Highlights</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              {educationData.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[250px] flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-blue-900/40">
              <img
                src={educationData.logo.src}
                alt={educationData.logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>

    {/* Key Skills */}
    <div className="mt-6">
      <Card>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Key Skills</h4>

            <ul className="list-disc ml-5 space-y-1 text-sm text-blue-100/80 leading-relaxed">
              {educationData.keySkills.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong> — {s.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  </Section>
);

export default MainEducationSection;
