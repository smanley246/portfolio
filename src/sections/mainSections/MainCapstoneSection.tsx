import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, Trophy, X } from "lucide-react";
import Card from "../../components/Card";
import Section from "../../components/Section";
import { capstoneSummary } from "../../data/capstoneData";

type ExpandedImage = {
  src: string;
  alt: string;
};

const MainCapstoneSection: React.FC = () => {
  const [posterSlot, deanSlot, displaySlot] = capstoneSummary.imageSlots;
  const schematicSlot = {
    title: "Electronics schematic",
    caption: "Control electronics and system wiring overview.",
    src: "/capstoneSchematic.jpg",
  };
  const [expandedImage, setExpandedImage] = useState<ExpandedImage | null>(null);

  useEffect(() => {
    if (!expandedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedImage]);

  const renderImageCard = (
    slot: (typeof capstoneSummary.imageSlots)[number],
    imageClassName: string,
    aspectClassName: string,
    cardClassName = "",
    frameClassName = "",
    imageMode: "contain" | "cover" = "contain",
  ) => (
    <Card
      key={slot.title}
      className={`overflow-hidden bg-transparent p-0 shadow-none ${cardClassName}`}
    >
      <div className={`interactive-media relative ${aspectClassName}`}>
        <div
          className={`absolute inset-0 overflow-hidden rounded-[2rem] ${frameClassName}`}
        >
          {imageMode === "contain" ? (
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={slot.src}
                alt={slot.title}
                className={`interactive-media__asset max-h-full max-w-full rounded-[1.6rem] ${imageClassName}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          ) : (
            <img
              src={slot.src}
              alt={slot.title}
              className={`interactive-media__asset h-full w-full rounded-[1.6rem] ${imageClassName}`}
              loading="lazy"
              draggable={false}
            />
          )}
        </div>
        <button
          type="button"
          onClick={() => setExpandedImage({ src: slot.src, alt: slot.title })}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white transition hover:bg-slate-900"
          aria-label={`Expand ${slot.title}`}
        >
          <Expand className="h-4 w-4" />
        </button>
      </div>
      <div className="px-4 pb-3 pt-4 sm:px-5 sm:pb-4">
        <h3 className="text-lg font-semibold text-white">{slot.title}</h3>
        <p className="prose-copy mt-1.5 text-sm">{slot.caption}</p>
      </div>
    </Card>
  );

  return (
    <>
      <Section
        id="engineering-capstone-project"
        title={capstoneSummary.title}
        icon={<Trophy />}
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-stretch">
          <div className="flex flex-col gap-6">
            <Card className="flex flex-col justify-between p-6 sm:p-6">
              <div className="w-full">
                <p className="section-kicker mb-4">{capstoneSummary.subtitle}</p>
                <p className="prose-copy w-full">{capstoneSummary.description}</p>
                <p className="prose-copy mt-4 w-full">{capstoneSummary.reflection}</p>
              </div>
            </Card>

            {renderImageCard(
              deanSlot,
              "h-auto w-auto",
              "aspect-square rounded-[1.4rem]",
              "",
              "",
              "contain",
            )}

            {renderImageCard(
              schematicSlot,
              "h-auto w-auto",
              "aspect-[3/2] rounded-[1.4rem]",
              "",
              "",
              "contain",
            )}
          </div>

          <div className="flex flex-col gap-6 xl:h-full">
            {renderImageCard(
              posterSlot,
              "h-auto w-auto",
              "aspect-[3/4] rounded-[1.4rem]",
              "",
              "",
              "contain",
            )}

            {renderImageCard(
              displaySlot,
              "rounded-[1.6rem] object-cover object-bottom",
              "min-h-[18rem] rounded-[1.4rem] sm:min-h-[20rem] xl:flex-1",
              "flex flex-col xl:h-full xl:flex-1",
              "border border-white/10",
              "cover",
            )}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {expandedImage ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(7,17,31,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{expandedImage.alt}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
                    Press Esc or use close
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setExpandedImage(null)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Close expanded image"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-950/80 p-4 sm:p-6">
                <img
                  src={expandedImage.src}
                  alt={expandedImage.alt}
                  className="max-h-[78vh] w-full object-contain"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MainCapstoneSection;
