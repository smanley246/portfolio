/*
  * File: src/sections/educationSections/EducationDegreeSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Section component to display an educational degree.
*/

import React from "react";
import { GraduationCap } from "lucide-react";
import Card from "../../components/Card";

type DegreeCard = {
  school: string;
  program: string;
  location: string;
  years: string;
  subtitle?: string;
  highlights?: string[];
  paragraphs?: string[];
  image?: { src: string; alt: string };
};

type Props = {
  degreeCard: DegreeCard;
};

const EducationDegreeSection: React.FC<Props> = ({ degreeCard }) => {
  return (
    <Card>
      <div className="flex items-start gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <GraduationCap className="h-5 w-5 text-teal-300" />
            </div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{degreeCard.school}</h2>
          </div>

          <div className="mt-3">
            <p className="text-lg font-semibold text-white">{degreeCard.program}</p>
            <p className="mt-1 text-sm text-white/75">
              {degreeCard.location} • <span className="text-white">{degreeCard.years}</span>
            </p>
          </div>

          {degreeCard.highlights?.length ? (
            <div className="flex flex-wrap gap-2 pt-4">
              {degreeCard.highlights.map((h) => (
                <span key={h} className="card-chip">
                  {h}
                </span>
              ))}
            </div>
          ) : null}

          {degreeCard.paragraphs?.length ? (
            <div className="mt-4 space-y-3">
              {degreeCard.paragraphs.map((p, i) => (
                <p key={i} className="prose-copy">
                  {p}
                </p>
              ))}
            </div>
          ) : null}
        </div>

        {degreeCard.image?.src ? (
          <div className="shrink-0">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-40 sm:w-40">
              <img
                src={degreeCard.image.src}
                alt={degreeCard.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default EducationDegreeSection;
