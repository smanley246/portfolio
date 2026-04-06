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

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

const renderFullDescription = (desc: CourseCard["description"]) => {
  if (!desc) return null;

  if (Array.isArray(desc)) {
    if (!desc.length) return null;
    return (
      <ul className="list-disc ml-5 text-sm space-y-2 text-blue-100/90">
        {desc.map((d, i) => (
          <li key={`desc-${i}`}>{d}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-sm text-blue-100/90 leading-relaxed whitespace-pre-line">
      {desc}
    </p>
  );
};

export default function CourseDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const course = slug ? getCourseBySlug(slug) : undefined;

  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
              <div className="flex items-center justify-between gap-3 mb-6">
                <button
                  onClick={() => navigate(-1)}
                  className={`${chipBase} px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-white`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </div>

              {!course ? (
                  <Card>
                    <h1 className="text-xl font-semibold">Course not found</h1>
                  <p className="mt-2 text-sm text-blue-100/80">
                    That URL does not match any course slug in your education data.
                  </p>
                </Card>
              ) : (
                <>
                  {/* Header block: image + title/meta */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    {/* Image */}
                    <div
                      className="
                        w-24 h-24
                        rounded-2xl
                        overflow-hidden
                        bg-white/10
                        border border-white/15
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

                      <div className="text-sm text-blue-200/80 mt-2">
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
                            <span key={t} className={chipBase}>
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

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
    </div>
  );
}
