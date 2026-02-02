/*
 * File: src/pages/ProjectDetailPage.tsx
 * Author: Samuel Manley
 * Last Modified: February 1st, 2026
 *
 * Description: This file contains the project detail page for individual projects.
 */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Components
import CircuitCanvasComponent from "../../components/CircuitBackground";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

// Data
import { getProjectBySlug } from "../../data/projectData/projectData";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => <CircuitCanvasComponent />;

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => <NavbarComponent />;

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

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

  const goPrev = () =>
    hasMedia && setActiveIndex((i) => (i - 1 + media.length) % media.length);

  const goNext = () =>
    hasMedia && setActiveIndex((i) => (i + 1) % media.length);

  // Keyboard controls for fullscreen gallery
  useEffect(() => {
    if (!isGalleryOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsGalleryOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGalleryOpen, activeIndex, media.length]);

  return (
    <>
      <CircuitBackground />

      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Navbar />

        <main className="flex-1 pt-8">
          <div className="px-6 py-10">
            <div className="max-w-6xl mx-auto">
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <button
                  onClick={() => navigate(-1)}
                  className={`${chipBase} px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-white`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                {project && (
                  <div className="flex items-center gap-4">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition"
                      >
                        <Github className="w-5 h-5" /> Repo
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition"
                      >
                        <ArrowUpRight className="w-5 h-5" /> Live
                      </a>
                    )}
                  </div>
                )}
              </div>

              {!project ? (
                <Card>
                  <h1 className="text-xl font-semibold">Project not found</h1>
                  <p className="mt-2 text-sm text-blue-100/80">
                    The project slug does not exist.
                  </p>
                </Card>
              ) : (
                <>
                  <div className="grid lg:grid-cols-[1fr_640px] gap-6">
                    {/* ================= LEFT ================= */}
                    <div className="min-w-0">
                      <h1 className="text-3xl lg:text-4xl font-bold">
                        {project.name}
                      </h1>

                      <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">
                        {project.description ?? project.blurb}
                      </p>

                      {project.bullets?.length ? (
                        <Card className="mt-6">
                          <h2 className="text-lg font-semibold mb-3">
                            Key Highlights
                          </h2>
                          <ul className="list-disc ml-5 text-sm space-y-2 text-blue-100/90">
                            {project.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </Card>
                      ) : null}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ================= RIGHT: MEDIA + THUMBS ================= */}
                    <div className="lg:sticky lg:top-24 self-start">
                      <Card className="p-0 overflow-hidden">
                        {/* Main viewer (click to fullscreen) */}
                        <button
                          type="button"
                          onClick={() => setIsGalleryOpen(true)}
                          className="relative w-full text-left"
                          aria-label="Open gallery"
                        >
                          <div className="relative bg-black/40 rounded-2xl overflow-hidden">
                            <div className="aspect-[16/9] w-full flex items-center justify-center">
                              {hasMedia ? (
                                <>
                                  {activeMedia?.type === "image" && (
                                    <img
                                      src={activeMedia.src}
                                      alt={activeMedia.alt || project.name}
                                      className="w-full h-full object-contain"
                                      draggable={false}
                                    />
                                  )}
                                  {activeMedia?.type === "video" && (
                                    <video
                                      src={activeMedia.src}
                                      controls
                                      playsInline
                                      className="w-full h-full object-contain"
                                    />
                                  )}
                                </>
                              ) : project.preview ? (
                                <img
                                  src={project.preview}
                                  alt={`${project.name} preview`}
                                  className="w-full h-full object-contain"
                                  draggable={false}
                                />
                              ) : null}
                            </div>

                            {/* subtle hover affordance */}
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-black/15" />

                            {/* arrows on preview (desktop) */}
                            {media.length > 1 && (
                              <>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    goPrev();
                                  }}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition text-white"
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
                                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition text-white"
                                  aria-label="Next"
                                >
                                  <ChevronRight />
                                </button>
                              </>
                            )}
                          </div>
                        </button>

                        {/* Thumbnails */}
                        {media.length > 1 && (
                          <div className="p-4 pt-3 flex gap-2 overflow-x-auto">
                            {media.map((m, i) => (
                              <button
                                key={`${m.src}-${i}`}
                                onClick={() => setActiveIndex(i)}
                                className={`border rounded-xl overflow-hidden flex-shrink-0 transition ${
                                  i === activeIndex
                                    ? "border-blue-400"
                                    : "border-white/20"
                                }`}
                                aria-label={`Select media ${i + 1}`}
                                type="button"
                              >
                                {m.type === "image" ? (
                                  <img
                                    src={m.src}
                                    className="w-20 h-14 object-cover"
                                    alt={m.alt || "thumb"}
                                    draggable={false}
                                  />
                                ) : (
                                  <div className="w-20 h-14 flex items-center justify-center bg-black/60 text-[10px] text-white/80">
                                    Video
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>

                  {/* ================= FULLSCREEN GALLERY ================= */}
                  {isGalleryOpen && (
                    <div
                      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
                      onClick={() => setIsGalleryOpen(false)}
                      role="dialog"
                      aria-modal="true"
                    >
                      <div
                        className="relative w-full max-w-6xl h-[90vh] bg-[#0a1f36] rounded-2xl overflow-hidden border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Top bar */}
                        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                          <button
                            onClick={() => setIsGalleryOpen(false)}
                            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm text-white"
                            type="button"
                          >
                            Close
                          </button>

                          <div className="text-xs text-white">
                            {media.length
                              ? `${activeIndex + 1} / ${media.length}`
                              : ""}
                          </div>
                        </div>

                        {/* Viewer */}
                        <div className="w-full h-full flex items-center justify-center">
                          {hasMedia ? (
                            <>
                              {activeMedia?.type === "image" && (
                                <img
                                  src={activeMedia.src}
                                  alt={activeMedia.alt || project.name}
                                  className="w-full h-full object-contain"
                                  draggable={false}
                                />
                              )}
                              {activeMedia?.type === "video" && (
                                <video
                                  src={activeMedia.src}
                                  controls
                                  playsInline
                                  className="w-full h-full object-contain"
                                />
                              )}
                            </>
                          ) : project.preview ? (
                            <img
                              src={project.preview}
                              alt={`${project.name} preview`}
                              className="w-full h-full object-contain"
                              draggable={false}
                            />
                          ) : null}
                        </div>

                        {/* Arrows */}
                        {media.length > 1 && (
                          <>
                            <button
                              onClick={goPrev}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition text-white"
                              type="button"
                              aria-label="Previous"
                            >
                              <ChevronLeft />
                            </button>
                            <button
                              onClick={goNext}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition text-white"
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
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
