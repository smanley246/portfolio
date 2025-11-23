/*
 * ProjectCard.tsx
 * Card component for showcasing a single project
 * Supports preview image, expandable modal, and image/video media gallery
 */

import React, { useState } from "react";
import { ArrowUpRight, Expand, Github, X } from "lucide-react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Media item type for the gallery inside the expanded view
type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

interface ProjectCardProps {
  name: string;
  blurb: string;
  tags: string[];
  link?: string;
  repo?: string;
  details?: React.ReactNode;
  preview?: string;   // preview image on the main card
  media?: ProjectMedia[]; // optional gallery for the modal
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  blurb,
  tags,
  link,
  repo,
  details,
  preview,
  media = [],
}) => {
  const [expanded, setExpanded] = useState(false); // controls full-screen modal
  const [activeIndex, setActiveIndex] = useState(0); // which media item is active

  const hasMedia = media.length > 0; // quick flag for gallery availability
  const activeMedia = hasMedia ? media[activeIndex] : undefined; // currently shown media

  // Go to previous media item in the gallery
  const goPrev = () => {
    if (!hasMedia) return;
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  // Go to next media item in the gallery
  const goNext = () => {
    if (!hasMedia) return;
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  return (
    <>
      {/* MAIN PROJECT CARD */}
      <Card>
        {/* MAIN CARD LAYOUT: text left, image right */}
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {/* LEFT: title, blurb, tags */}
          <div className="flex-1 flex flex-col">
            {/* Title row with optional Live link + Expand button */}
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-semibold">{name}</h3>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-normal text-blue-300 hover:underline"
                  >
                    Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Expand button opens the full-screen modal */}
              <button
                onClick={() => setExpanded(true)}
                className="ml-auto p-2 rounded-lg hover:bg-white/10 flex items-center gap-1 text-xs sm:text-sm"
                aria-label="Expand"
              >
                <Expand className="w-4 h-4" /> Expand
              </button>
            </div>

            {/* Short project description on the card */}
            <p className="mt-1 text-sm text-blue-100/90">{blurb}</p>

            {/* Tags / tech stack pills pinned to bottom of the card column */}
            <div className="mt-auto pt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: preview image (static thumbnail on the card) */}
          {preview && (
            <div className="project-card">
              <div
                className="preview-contain"
                style={{
                  width: "256px",
                  height: "256px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0a1f36",
                  borderRadius: "16px",
                }}
              >
                <img
                  src={preview}
                  alt={`${name} preview`}
                  style={{
                    width: "100%",
                    objectFit: "cover", // crop edges to keep card filled
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* ============= FULL-SCREEN MODAL ============= */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal container with scale-in animation */}
            <motion.div
              className="bg-[#0a1f36] rounded-2xl p-6 md:p-8 max-w-6xl w-[95vw] h-[90vh] relative text-white shadow-xl flex flex-col gap-6 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Close button in top-right of modal */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 h-full">
                {/* LEFT: media viewer (image/video + thumbnails) */}
                <div className="md:w-1/2 w-full flex flex-col gap-3">
                  {hasMedia ? (
                    <>
                      {/* Main media display area */}
                      <div className="relative flex-1 bg-black/40 rounded-xl overflow-hidden flex items-center justify-center">
                        {activeMedia?.type === "image" && (
                          <img
                            src={activeMedia.src}
                            alt={activeMedia.alt || name}
                            className="w-full h-full object-contain"
                          />
                        )}
                        {activeMedia?.type === "video" && (
                          <video
                            src={activeMedia.src}
                            controls
                            className="w-full h-full object-contain"
                          />
                        )}

                        {/* Arrow controls for stepping through media */}
                        {media.length > 1 && (
                          <>
                            <button
                              onClick={goPrev}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/20"
                              aria-label="Previous media"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={goNext}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/20"
                              aria-label="Next media"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails row below main media (if more than one) */}
                      {media.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {media.map((m, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveIndex(i)}
                              className={`border rounded-lg overflow-hidden flex-shrink-0 ${
                                i === activeIndex
                                  ? "border-blue-400"
                                  : "border-white/20"
                              }`}
                            >
                              {m.type === "image" ? (
                                <img
                                  src={m.src}
                                  alt={m.alt || `${name} media ${i + 1}`}
                                  className="w-20 h-14 object-cover"
                                />
                              ) : (
                                <div className="w-20 h-14 flex items-center justify-center bg-black/60 text-[10px]">
                                  Video
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : preview ? (
                    // Fallback: show the same preview image if no media array is provided
                    <div className="flex-1 bg-black/40 rounded-xl overflow-hidden flex items-center justify-center">
                      <img
                        src={preview}
                        alt={`${name} preview`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    // Empty state when no media or preview is supplied
                    <div className="flex-1 rounded-xl border border-dashed border-white/20 flex items-center justify-center text-xs text-blue-100/60">
                      No media added yet
                    </div>
                  )}
                </div>

                {/* RIGHT: project description, tags, and external links */}
                <div className="md:w-1/2 w-full flex flex-col overflow-y-auto pr-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {name}
                  </h2>

                  {/* Detailed description: prefer `details` if provided */}
                  <div className="mb-4 text-sm md:text-base leading-relaxed">
                    {details ? details : blurb}
                  </div>

                  {/* Tags duplicated here for quick scan */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* External repo + live demo links pinned to bottom */}
                  <div className="mt-auto flex flex-wrap gap-4 pt-2">
                    {repo && (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-300 hover:underline"
                      >
                        <Github className="w-5 h-5" /> View Repo
                      </a>
                    )}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-300 hover:underline"
                      >
                        <ArrowUpRight className="w-5 h-5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
