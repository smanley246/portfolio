/*
 * File: src/sections/educationSections/EducationCoursesSection.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: Section component to display a list of educational courses.
 */

import React from "react";
import { BookOpen } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import TagList from "../../components/TagList";
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
    <div className="page-section">
      <SectionHeading title={coursesHeading} icon={<BookOpen className="h-5 w-5" />} />

      <div className="flex flex-col gap-4">
        {courses.map((c) => (
          <Card key={c.slug} className="p-5">
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="card-title">
                      {c.code} - {c.title}
                    </h3>
                    {c.term && <p className="meta-line mt-1 text-sm">{c.term}</p>}
                  </div>

                  <div className="hidden items-center gap-2 sm:ml-auto sm:flex sm:gap-3">
                    {c.badge && (
                      <span className="card-chip whitespace-nowrap">
                        {c.badge}
                      </span>
                    )}

                    <CustomButton
                      className="whitespace-nowrap"
                      to={courseDetailPath(c.slug)}
                    >
                      View Details
                    </CustomButton>
                  </div>
                </div>

                {c.badge ? (
                  <div className="pt-3 sm:hidden">
                    <span className="card-chip whitespace-nowrap">
                      {c.badge}
                    </span>
                  </div>
                ) : null}

                {renderDescriptionPreview(c.description)}

                <TagList tags={c.tags} className="pt-3" />
              </div>

              <div className="w-24 shrink-0 sm:w-auto">
                {c.image?.src ? (
                  <div className="media-frame relative h-24 w-24 overflow-hidden rounded-2xl border sm:h-28 sm:w-32">
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
                  <div className="media-frame h-24 w-24 rounded-2xl border sm:h-28 sm:w-32" />
                )}

                <div className="mt-3 sm:hidden">
                  <CustomButton
                    className="w-full justify-center"
                    to={courseDetailPath(c.slug)}
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
