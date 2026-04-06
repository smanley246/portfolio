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
        <ul className="mt-3 ml-5 list-disc space-y-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {preview.map((d, i) => (
            <li key={`desc-${i}`}>{d}</li>
          ))}
        </ul>
      );
    }

    return (
      <p className="mt-3 line-clamp-3 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-muted)]">
        {desc}
      </p>
    );
  };

  return (
    <div className="mt-10">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
          <BookOpen className="h-5 w-5 text-teal-300" />
        </div>
        <h2 className="text-2xl font-semibold sm:text-3xl">{coursesHeading}</h2>
      </div>

      <div className="flex flex-col gap-4">
        {courses.map((c) => (
          <Card key={c.slug} className="p-5">
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold">
                      {c.code} - {c.title}
                    </h3>
                    {c.term && <p className="mt-1 text-sm text-blue-200/80">{c.term}</p>}
                  </div>

                  <div className="hidden items-center gap-2 sm:ml-auto sm:flex sm:gap-3">
                    {c.badge && (
                      <span className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85">
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

                {c.badge ? (
                  <div className="pt-3 sm:hidden">
                    <span className="inline-block whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85">
                      {c.badge}
                    </span>
                  </div>
                ) : null}

                {renderDescriptionPreview(c.description)}

                {c.tags?.length ? (
                  <div className="flex flex-wrap gap-2 pt-3">
                    {c.tags.map((t) => (
                      <span key={t} className="card-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="w-24 shrink-0 sm:w-auto">
                {c.image?.src ? (
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-28 sm:w-32">
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
                  <div className="h-24 w-24 rounded-2xl border border-white/10 bg-white/5 sm:h-28 sm:w-32" />
                )}

                <div className="mt-3 sm:hidden">
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
