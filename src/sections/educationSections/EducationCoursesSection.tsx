/*
 * File: src/sections/educationSections/EducationCoursesSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: Section component to display a list of educational courses.
 */

import React from "react";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import type { CourseCard } from "../../data/educationData/educationData";

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

type Props = {
  coursesHeading: string;
  courses: CourseCard[];
  courseDetailPath: (slug: string) => string;
};

const EducationCoursesSection: React.FC<Props> = ({
  coursesHeading,
  courses,
  courseDetailPath,
}) => {
  const navigate = useNavigate();

  const renderDescriptionPreview = (desc: CourseCard["description"]) => {
    if (!desc) return null;

    if (Array.isArray(desc)) {
      if (!desc.length) return null;

      const preview = desc.slice(0, 3);
      return (
        <ul className="mt-3 ml-5 list-disc space-y-1 text-sm text-white/80 leading-relaxed">
          {preview.map((d, i) => (
            <li key={`desc-${i}`}>{d}</li>
          ))}
        </ul>
      );
    }

    return (
      <p className="mt-3 text-sm text-white/80 leading-relaxed whitespace-pre-line line-clamp-3">
        {desc}
      </p>
    );
  };

  return (
    <div className="mt-10">
      {/* Section header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
          <BookOpen className="h-5 w-5 text-teal-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold">{coursesHeading}</h2>
      </div>

      {/* Course cards */}
      <div className="flex flex-col gap-4">
        {courses.map((c) => (
          <Card
            key={c.slug}
            className="p-5 bg-blue-900/25 border border-white/10"
          >
            <div className="flex items-start gap-4">
              {/* Left text */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold truncate">
                      {c.code} — {c.title}
                    </h3>
                    {c.term && (
                      <p className="text-sm text-blue-200/80 mt-1">{c.term}</p>
                    )}
                  </div>

                  {/* Desktop actions (badge + button). Hidden on mobile. */}
                  <div className="hidden sm:flex items-center gap-2 sm:gap-3 sm:ml-auto">
                    {c.badge && (
                      <span className="text-xs px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/85 whitespace-nowrap">
                        {c.badge}
                      </span>
                    )}

                    <CustomButton
                      className="whitespace-nowrap"
                      onClick={() => navigate(courseDetailPath(c.slug))}
                    >
                      View Details
                    </CustomButton>
                  </div>
                </div>

                {/* Mobile badge (optional). Keep it under title on mobile for nice flow. */}
                {c.badge ? (
                  <div className="sm:hidden pt-3">
                    <span className="text-xs px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/85 whitespace-nowrap inline-block">
                      {c.badge}
                    </span>
                  </div>
                ) : null}

                {/* Description preview */}
                {renderDescriptionPreview(c.description)}

                {/* Tags */}
                {c.tags?.length ? (
                  <div className="flex flex-wrap gap-2 pt-3">
                    {c.tags.map((t) => (
                      <span key={t} className={chipBase}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Right side */}
              <div className="shrink-0 w-24 sm:w-auto">
                {/* Image */}
                {c.image?.src ? (
                  <div className="relative w-24 h-24 sm:w-32 sm:h-28 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img
                      src={c.image.src}
                      alt={c.image.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  </div>
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-28 rounded-2xl border border-white/10 bg-white/5" />
                )}

                {/* Mobile button under the photo */}
                <div className="sm:hidden mt-3">
                  <CustomButton
                    className="w-full justify-center"
                    onClick={() => navigate(courseDetailPath(c.slug))}
                  >
                    View Details
                  </CustomButton>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationCoursesSection;
