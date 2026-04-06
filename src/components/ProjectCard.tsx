/*
  * File: src/components/ProjectCard.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: ProjectCard component with expandable modal for detailed view.
*/

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Github,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
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

  const handleExpandClick = () => {
    setActiveIndex(0);

    if (isSmallViewport()) {
      navigate(`/projects/${slug}`);
      return;
    }

    setExpanded(true);
  };

  const goPrev = () =>
    hasMedia && setActiveIndex((i) => (i - 1 + media.length) % media.length);

  const goNext = () =>
    hasMedia && setActiveIndex((i) => (i + 1) % media.length);

  return (
    <>
      <Card className="group overflow-hidden">
        <div className="flex h-full flex-col gap-4 lg:flex-row">
          <div className="order-1 flex flex-1 flex-col">
            <div className="flex items-start gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-300"
                  >
                    Live <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <CustomButton
                onClick={handleExpandClick}
                className="ml-auto min-h-0 px-4 py-2 text-xs sm:text-sm"
              >
                <Expand className="h-4 w-4" /> Details
              </CustomButton>
            </div>

            <p className="prose-copy mt-3 text-sm">{blurb}</p>

            <div className="mt-3 flex flex-wrap gap-2 lg:mt-auto">
              {tags.map((t) => (
                <span key={t} className="card-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {preview && (
            <div className="order-2 w-full lg:w-auto">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 lg:w-56 xl:w-64">
                <img
                  src={preview}
                  alt={`${name} preview`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </Card>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="panel relative flex h-[90vh] w-[95vw] max-w-6xl flex-col gap-6 overflow-hidden rounded-[2rem] p-6 text-white md:p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex h-full flex-col gap-6 md:flex-row">
                <div className="flex w-full flex-col gap-3 md:w-1/2">
                  {hasMedia ? (
                    <>
                      <div className="relative flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/35">
                        {activeMedia?.type === "image" && (
                          <img
                            src={activeMedia.src}
                            alt={activeMedia.alt || `${name} media`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        )}
                        {activeMedia?.type === "video" && (
                          <video
                            src={activeMedia.src}
                            controls
                            className="h-full w-full object-contain"
                          />
                        )}

                        {media.length > 1 && (
                          <>
                            <button
                              onClick={goPrev}
                              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2"
                            >
                              <ChevronLeft />
                            </button>
                            <button
                              onClick={goNext}
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2"
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
                              key={m.src}
                              onClick={() => setActiveIndex(i)}
                              className={`overflow-hidden rounded-lg border flex-shrink-0 ${
                                i === activeIndex ? "border-cyan-300" : "border-white/20"
                              }`}
                            >
                              {m.type === "image" ? (
                                <img
                                  src={m.src}
                                  alt={m.alt || "thumb"}
                                  className="h-14 w-20 object-cover"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="flex h-14 w-20 items-center justify-center bg-black/60 text-[10px]">
                                  Video
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-1 items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/35">
                      {preview && (
                        <img
                          src={preview}
                          alt={`${name} preview`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}
                </div>

                <div className="flex w-full flex-col overflow-y-auto pr-1 md:w-1/2">
                  <h2 className="mb-3 text-2xl font-bold md:text-3xl">{name}</h2>
                  <div className="prose-copy mb-4 text-sm md:text-base">
                    {details ? details : blurb}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="card-chip">
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
                        className="flex items-center gap-2 text-cyan-300"
                      >
                        <Github className="h-5 w-5" /> Repo
                      </a>
                    )}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-cyan-300"
                      >
                        <ArrowUpRight className="h-5 w-5" /> Live Demo
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
