/*
  * File: src/sections/mainSections/mainEducationSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the Main Education section component for the portfolio website.
*/

import React from "react";
import { GraduationCap } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { educationData } from "../../data/mainSummaryData/educationData";

const MainEducationSection: React.FC = () => (
  <Section id="education" title="Education" icon={<GraduationCap />}>
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <h3 className="mb-1 font-semibold">{educationData.degree.title}</h3>
        <div className="text-sm text-[var(--color-text-soft)]">{educationData.degree.school}</div>

        <ul className="ml-5 mt-3 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
          {educationData.degree.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h4 className="mb-3 font-semibold">Highlights</h4>
            <ul className="ml-5 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
              {educationData.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="flex w-full justify-center lg:w-[250px] lg:justify-end">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-blue-900/40">
              <img
                src={educationData.logo.src}
                alt={educationData.logo.alt}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>

    <div className="mt-6">
      <Card>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <h4 className="mb-2 font-semibold">Key Skills</h4>

            <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {educationData.keySkills.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong> - {s.description}
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
