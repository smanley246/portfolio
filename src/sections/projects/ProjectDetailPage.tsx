/*
 * File: src/pages/ProjectDetailPage.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: This file contains the project detail page for individual projects.
 */

import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
} from "lucide-react";
import Card from "../../components/Card";
import PageIntro from "../../components/PageIntro";
import { getProjectBySlug } from "../../data/projectData/projectData";

export default function ProjectDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [slug]);

  const media = project?.media ?? [];
  const hasMedia = media.length > 0;
  const activeMedia = hasMedia ? media[activeIndex] : undefined;

  const goPrev = useCallback(() => {
    if (!hasMedia) return;
    setActiveIndex((i) => (i - 1 + media.length) % media.length);
  }, [hasMedia, media.length]);

  const goNext = useCallback(() => {
    if (!hasMedia) return;
    setActiveIndex((i) => (i + 1) % media.length);
  }, [hasMedia, media.length]);

  useEffect(() => {
    if (!isGalleryOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsGalleryOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, isGalleryOpen]);

  return (
    <div className="site-container">
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>

        {!project ? (
          <Card>
            <h1 className="text-xl font-semibold">Project not found</h1>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              The project slug does not exist.
            </p>
          </Card>
        ) : (
          <>
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] xl:items-start">
              <div className="order-2 min-w-0 xl:order-1">
                <Card className="overflow-hidden p-0">
                  <button
                    type="button"
                    onClick={() => setIsGalleryOpen(true)}
                    className="relative w-full text-left"
                    aria-label="Open gallery"
                  >
                    <div className="relative overflow-hidden rounded-[1.75rem] bg-black/40">
                      <div className="flex aspect-[16/10] w-full items-center justify-center">
                        {hasMedia ? (
                          <>
                            {activeMedia?.type === "image" && (
                              <img
                                src={activeMedia.src}
                                alt={activeMedia.alt || project.name}
                                className="h-full w-full object-contain"
                                draggable={false}
                                loading="lazy"
                              />
                            )}
                            {activeMedia?.type === "video" && (
                              <video
                                src={activeMedia.src}
                                controls
                                playsInline
                                className="h-full w-full object-contain"
                              />
                            )}
                          </>
                        ) : project.preview ? (
                          <img
                            src={project.preview}
                            alt={`${project.name} preview`}
                            className="h-full w-full object-contain"
                            draggable={false}
                            loading="lazy"
                          />
                        ) : null}
                      </div>

                      {media.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              goPrev();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-3 text-white transition hover:bg-black/75"
                            aria-label="Previous"
                          >
                            <ChevronLeft />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              goNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-3 text-white transition hover:bg-black/75"
                            aria-label="Next"
                          >
                            <ChevronRight />
                          </button>
                        </>
                      )}
                    </div>
                  </button>

                  {media.length > 1 && (
                    <div className="grid grid-cols-4 gap-3 p-4 sm:grid-cols-6">
                      {media.map((m, i) => (
                        <button
                          key={`${m.src}-${i}`}
                          onClick={() => setActiveIndex(i)}
                          className={[
                            "overflow-hidden rounded-xl border transition",
                            i === activeIndex ? "border-cyan-300" : "border-white/20",
                          ].join(" ")}
                          aria-label={`Select media ${i + 1}`}
                          type="button"
                        >
                          {m.type === "image" ? (
                            <img
                              src={m.src}
                              className="aspect-[4/3] w-full object-cover"
                              alt={m.alt || "thumb"}
                              draggable={false}
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex aspect-[4/3] w-full items-center justify-center bg-black/60 text-[10px] text-white/80">
                              Video
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </Card>
              </div>

              <div className="order-1 min-w-0 xl:order-2">
                <PageIntro
                  eyebrow="Project Detail"
                  title={project.name}
                  description={project.description ?? project.blurb}
                />

                <div className="mb-6 flex flex-wrap gap-3">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                    >
                      <Github className="h-4 w-4" /> Repo
                    </a>
                  ) : null}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                    >
                      <ArrowUpRight className="h-4 w-4" /> Live Demo
                    </a>
                  ) : null}
                </div>

                {project.bullets?.length ? (
                  <Card className="mb-6">
                    <h2 className="mb-3 text-lg font-semibold">Key Highlights</h2>
                    <ul className="ml-5 list-disc space-y-2 text-sm text-[var(--color-text-muted)]">
                      {project.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                ) : null}

                {project.materials?.length ? (
                  <Card className="mb-6">
                    <h2 className="mb-3 text-lg font-semibold">Project Materials</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.materials.map((item) => (
                        <div
                          key={`${item.kind}-${item.title}`}
                          className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4"
                        >
                          <div className="mb-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
                            {item.kind}
                          </div>
                          <h3 className="text-base font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                            {item.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="card-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {isGalleryOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 p-4"
                onClick={() => setIsGalleryOpen(false)}
                role="dialog"
                aria-modal="true"
              >
                <div
                  className="panel relative h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between">
                    <button
                      onClick={() => setIsGalleryOpen(false)}
                      className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20"
                      type="button"
                    >
                      Close
                    </button>

                    <div className="text-xs text-white">
                      {media.length ? `${activeIndex + 1} / ${media.length}` : ""}
                    </div>
                  </div>

                  <div className="flex h-full w-full items-center justify-center">
                    {hasMedia ? (
                      <>
                        {activeMedia?.type === "image" && (
                          <img
                            src={activeMedia.src}
                            alt={activeMedia.alt || project.name}
                            className="h-full w-full object-contain"
                            draggable={false}
                            loading="lazy"
                          />
                        )}
                        {activeMedia?.type === "video" && (
                          <video
                            src={activeMedia.src}
                            controls
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        )}
                      </>
                    ) : project.preview ? (
                      <img
                        src={project.preview}
                        alt={`${project.name} preview`}
                        className="h-full w-full object-contain"
                        draggable={false}
                        loading="lazy"
                      />
                    ) : null}
                  </div>

                  {media.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
                        type="button"
                        aria-label="Previous"
                      >
                        <ChevronLeft />
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/70"
                        type="button"
                        aria-label="Next"
                      >
                        <ChevronRight />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
    </div>
  );
}
