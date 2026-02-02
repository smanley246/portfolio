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

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

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
    <Card className="p-6 bg-blue-900/35 border border-white/10">
      <div className="flex items-start gap-5">
        {/* Left content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
              <GraduationCap className="h-5 w-5 text-teal-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {degreeCard.school}
            </h2>
          </div>

          <div className="mt-3">
            <p className="text-lg font-semibold text-white">
              {degreeCard.program}
            </p>
            <p className="text-sm text-white/75 mt-1">
              {degreeCard.location} •{" "}
              <span className="text-white">{degreeCard.years}</span>
            </p>
          </div>

          {degreeCard.highlights?.length ? (
            <div className="flex flex-wrap gap-2 pt-4">
              {degreeCard.highlights.map((h) => (
                <span key={h} className={chipBase}>
                  {h}
                </span>
              ))}
            </div>
          ) : null}

          {degreeCard.paragraphs?.length ? (
            <div className="mt-4 space-y-3">
              {degreeCard.paragraphs.map((p, i) => (
                <p key={i} className="text-white/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Right image (top-right) */}
        {degreeCard.image?.src ? (
          <div className="shrink-0">
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
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
