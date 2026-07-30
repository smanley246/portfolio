/*
 * File: src/pages/CourseDetailPage.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: Course detail page for the Education section.
 */

import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Card from "../components/Card";

// Data
import {
  getCourseBySlug,
  type CourseCard,
} from "../data/educationData/educationData";

const renderFullDescription = (desc: CourseCard["description"]) => {
  if (!desc) return null;

  if (Array.isArray(desc)) {
    if (!desc.length) return null;
    return (
      <ul className="prose-copy ml-5 list-disc space-y-2 text-sm">
        {desc.map((d, i) => (
          <li key={`desc-${i}`}>{d}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="prose-copy whitespace-pre-line text-sm">
      {desc}
    </p>
  );
};

export default function CourseDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const course = slug ? getCourseBySlug(slug) : undefined;

  return (
    <div className="site-container max-w-5xl pb-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="surface-control inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </div>

              {!course ? (
                  <Card>
                    <h1 className="text-xl font-semibold">Course not found</h1>
                  <p className="prose-copy mt-2 text-sm">
                    That URL does not match any course slug in your education data.
                  </p>
                </Card>
              ) : (
                <>
                  {/* Header block: image + title/meta */}
                  <Card className="mb-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    {/* Image */}
                    <div
                      className="
                        w-24 h-24
                        rounded-[1.4rem]
                        overflow-hidden
                        media-frame
                        border
                        flex items-center justify-center
                        flex-shrink-0
                      "
                    >
                      {course.image?.src ? (
                        <img
                          src={course.image.src}
                          alt={course.image.alt}
                          className="w-full h-full object-cover"
                          draggable={false}
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-xs text-white/60">Image</div>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h1 className="text-3xl lg:text-4xl font-bold">
                        {course.code} — {course.title}
                      </h1>

                      <div className="meta-line mt-2 text-sm">
                        {course.term ? (
                          <>
                            <span className="text-white">{course.term}</span>
                            {course.badge ? " • " : null}
                          </>
                        ) : null}
                        {course.badge ? (
                          <span className="text-white">{course.badge}</span>
                        ) : null}
                      </div>

                      {/* Tags */}
                      {course.tags?.length ? (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {course.tags.map((t) => (
                            <span key={t} className="card-chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  </Card>

                  {/* Body */}
                  <Card>
                    <h2 className="text-lg font-semibold mb-3">
                      Topics & Outcomes
                    </h2>
                    {renderFullDescription(course.description)}
                  </Card>
                </>
              )}
    </div>
  );
}
