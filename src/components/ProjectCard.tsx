/*
  * File: src/components/ProjectCard.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: ProjectCard component with expandable modal for detailed view.
*/

import React, { useState } from "react";
import { ArrowUpRight, Expand, Github, X } from "lucide-react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

interface ProjectCardProps {
  slug: string;
  name: string;
  blurb: string;
  tags: string[];
  link?: string;
  repo?: string;
  details?: React.ReactNode;
  preview?: string;
  media?: ProjectMedia[];
}

const MOBILE_BREAKPOINT = 1024;

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  name,
  blurb,
  tags,
  link,
  repo,
  details,
  preview,
  media = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const hasMedia = media.length > 0;
  const activeMedia = hasMedia ? media[activeIndex] : undefined;

  const isSmallViewport = () =>
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;

  // -------------------------------
  // EXPAND HANDLER
  // -------------------------------
  const handleExpandClick = () => {
    setActiveIndex(0);

    // Mobile: navigate to internal detail page (no new tabs)
    if (isSmallViewport()) {
      navigate(`/projects/${slug}`);
      return;
    }

    // Desktop: open modal
    setExpanded(true);
  };

  const goPrev = () =>
    hasMedia && setActiveIndex((i) => (i - 1 + media.length) % media.length);

  const goNext = () =>
    hasMedia && setActiveIndex((i) => (i + 1) % media.length);

  return (
    <>
      {/* ============================== CARD ============================== */}
      <Card className="bg-blue-900/35 border border-white/10">
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          {/* ---------- TEXT FIRST ALWAYS ON MOBILE ---------- */}
          <div className="flex-1 flex flex-col order-1 lg:order-1">
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-semibold">{name}</h3>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-300"
                  >
                    Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <CustomButton
                onClick={handleExpandClick}
                className="ml-auto p-2 rounded-lg hover:bg-white/10 text-xs sm:text-sm flex items-center gap-1"
              >
                <Expand className="w-4 h-4" /> Details
              </CustomButton>
            </div>

            <p className="mt-1 text-sm text-blue-100/90">{blurb}</p>

            <div className="mt-3 lg:mt-auto flex flex-wrap gap-2">
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

          {/* ---------- IMAGE SECOND ALWAYS ON MOBILE ---------- */}
          {preview && (
            <div className="order-2 lg:order-2 w-full lg:w-auto">
              <div
                className="
                  w-full
                  lg:w-56 xl:w-64
                  aspect-[4/5]
                  overflow-hidden
                  rounded-2xl
                  bg-[#0a1f36]
                "
              >
                <img
                  src={preview}
                  alt={`${name} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* ============================== DESKTOP MODAL ============================== */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a1f36] rounded-2xl p-6 md:p-8 max-w-6xl w-[95vw] h-[90vh] relative text-white shadow-xl flex flex-col gap-6 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 h-full">
                {/* MEDIA VIEWER */}
                <div className="md:w-1/2 w-full flex flex-col gap-3">
                  {hasMedia ? (
                    <>
                      <div className="relative flex-1 bg-black/40 rounded-xl flex items-center justify-center overflow-hidden">
                        {activeMedia?.type === "image" && (
                          <img
                            src={activeMedia.src}
                            alt={activeMedia.alt || `${name} media`}
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

                        {media.length > 1 && (
                          <>
                            <button
                              onClick={goPrev}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50"
                            >
                              <ChevronLeft />
                            </button>
                            <button
                              onClick={goNext}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50"
                            >
                              <ChevronRight />
                            </button>
                          </>
                        )}
                      </div>

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
                                  alt={m.alt || "thumb"}
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
                  ) : (
                    <div className="flex-1 bg-black/40 rounded-xl flex items-center justify-center">
                      {preview && (
                        <img
                          src={preview}
                          alt={`${name} preview`}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* DETAILS */}
                <div className="md:w-1/2 w-full flex flex-col overflow-y-auto pr-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {name}
                  </h2>
                  <div className="mb-4 text-sm md:text-base leading-relaxed">
                    {details ? details : blurb}
                  </div>

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

                  <div className="mt-auto flex gap-4">
                    {repo && (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-300"
                      >
                        <Github className="w-5 h-5" /> Repo
                      </a>
                    )}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-300"
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
