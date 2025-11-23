/*
 * ProjectCard.tsx
 * Card for showcasing a project.
 * Mobile (<1024px): single column layout, image below text, Expand opens new-tab gallery.
 * Desktop (>=1024px): side-by-side layout, Expand opens modal with media viewer.
 */

import React, { useState } from "react";
import { ArrowUpRight, Expand, Github, X } from "lucide-react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  preview?: string;
  media?: ProjectMedia[];
}

const MOBILE_BREAKPOINT = 1024;

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
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMedia = media.length > 0;
  const activeMedia = hasMedia ? media[activeIndex] : undefined;

  const isSmallViewport = () =>
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;

  // -------------------------------
  // MOBILE NEW TAB GALLERY
  // -------------------------------
  const openMobileDetailTab = () => {
    if (typeof window === "undefined") return;
    const win = window.open("", "_blank");
    if (!win) return;

    const esc = (txt: string) =>
      txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const safeName = esc(name);
    const safeBlurb = esc(blurb);

    let mediaItemsHtml = "";
    if (media.length > 0) {
      mediaItemsHtml = `
        <h2 class="section-title">Gallery</h2>
        <div class="gallery">
          ${media
            .map((m, i) => {
              const alt = esc(m.alt || `${name} media ${i + 1}`);
              return m.type === "image"
                ? `
                  <div class="media">
                    <img src="${m.src}" alt="${alt}" />
                  </div>`
                : `
                  <div class="media">
                    <video src="${m.src}" controls playsinline></video>
                  </div>`;
            })
            .join("")}
        </div>
        <p class="swipe-hint">Swipe horizontally to see more.</p>
      `;
    } else if (preview) {
      mediaItemsHtml = `
        <h2 class="section-title">Preview</h2>
        <div class="media"><img src="${preview}" /></div>
      `;
    }

    const tagsHtml = tags
      .map(
        (t) =>
          `<span class="tag">${esc(t)}</span>`
      )
      .join("");

    win.document.write(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>${safeName}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: system-ui;
              background: radial-gradient(circle at 20% 0%, #143a66 0, #08192b 60%);
              color: #fff;
              padding: 16px;
            }
            header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 12px;
            }
            .close-btn {
              padding: 6px 12px;
              background: white;
              border: none;
              border-radius: 999px;
              color: #000;
            }
            .gallery {
              display: flex;
              gap: 12px;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              padding-bottom: 6px;
            }
            .media {
              flex: 0 0 100%;
              max-width: 100%;
              scroll-snap-align: center;
              border-radius: 16px;
              overflow: hidden;
              background: #000;
            }
            img, video {
              width: 100%;
              height: auto;
            }
            .card {
              background: rgba(10,31,54,.93);
              padding: 16px;
              border-radius: 16px;
              border: 1px solid rgba(148,163,184,.35);
            }
            .tag {
              padding: 4px 8px;
              font-size: .75rem;
              border-radius: 999px;
              border: 1px solid rgba(148,163,184,.4);
              background: rgba(15,23,42,.8);
              margin-right: 6px;
            }
          </style>
        </head>
        <body>
          <header>
            <h1>${safeName}</h1>
            <button class="close-btn" onclick="window.close()">Close</button>
          </header>

          <div class="card">
            <p>${safeBlurb}</p>
            ${mediaItemsHtml}

            <div style="margin-top:10px;">${tagsHtml}</div>
          </div>

          <script>
            window.addEventListener('load', () => {
              const g = document.querySelector('.gallery');
              if (g) g.scrollLeft = 0;
            });
          </script>
        </body>
      </html>
    `);
    win.document.close();
  };

  // -------------------------------
  // EXPAND HANDLER
  // -------------------------------
  const handleExpandClick = () => {
    setActiveIndex(0); // always start at first image
    if (isSmallViewport()) openMobileDetailTab();
    else setExpanded(true);
  };

  const goPrev = () =>
    hasMedia && setActiveIndex((i) => (i - 1 + media.length) % media.length);

  const goNext = () =>
    hasMedia && setActiveIndex((i) => (i + 1) % media.length);

  return (
    <>
      {/* ============================== CARD ============================== */}
      <Card>
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

              <button
                onClick={handleExpandClick}
                className="ml-auto p-2 rounded-lg hover:bg-white/10 text-xs sm:text-sm flex items-center gap-1"
              >
                <Expand className="w-4 h-4" /> Expand
              </button>
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
                          <img src={activeMedia.src} className="w-full h-full object-contain" />
                        )}
                        {activeMedia?.type === "video" && (
                          <video src={activeMedia.src} controls className="w-full h-full object-contain" />
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
                                i === activeIndex ? "border-blue-400" : "border-white/20"
                              }`}
                            >
                              {m.type === "image" ? (
                                <img src={m.src} className="w-20 h-14 object-cover" />
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
                      <img src={preview} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>

                {/* DETAILS */}
                <div className="md:w-1/2 w-full flex flex-col overflow-y-auto pr-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{name}</h2>
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
                      <a href={repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-300">
                        <Github className="w-5 h-5" /> Repo
                      </a>
                    )}
                    {link && (
                      <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-300">
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
