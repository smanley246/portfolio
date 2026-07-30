/*
  * File: src/sections/aboutSections/AboutSummarySection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the About Summary section component for the About page.
*/

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Expand, Heart } from "lucide-react";
import Card from "../../components/Card";
import ImageLightboxModal, {
  type LightboxImage,
} from "../../components/ImageLightboxModal";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type SummarySection = {
  id: "summary";
  title: string;
  paragraphs: string[];
  highlights: string[];
  image: { src: string; alt: string; caption: string };
};

type Props = {
  summary: SummarySection;
};

const AboutSummarySection: React.FC<Props> = ({ summary }) => {
  const [expandedImage, setExpandedImage] = useState<LightboxImage | null>(null);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [summary.image.src]);

  return (
    <>
      <section
        id={summary.id}
        className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-8"
      >
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="section-heading">
            <div className="section-heading__icon">
              <Heart className="h-5 w-5" />
            </div>
            <h2 className="section-heading__title">{summary.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-7 p-6">
              <div className="flex flex-col gap-4">
                {summary.paragraphs.map((p, i) => (
                  <p key={i} className="prose-copy">
                    {p}
                  </p>
                ))}

                <div className="flex flex-wrap gap-2 pt-1">
                  {summary.highlights.map((h) => (
                    <span key={h} className="card-chip">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="lg:col-span-5 flex items-center justify-center p-6">
              <div className="interactive-media relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {!imageFailed ? (
                  <img
                    key={summary.image.src}
                    src={summary.image.src}
                    alt={summary.image.alt}
                    className="interactive-media__asset absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 px-6 text-center text-sm text-[var(--color-text-soft)]">
                    Summary image unavailable
                  </div>
                )}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedImage({
                      src: summary.image.src,
                      alt: summary.image.alt,
                      title: summary.title,
                      caption: summary.image.caption,
                    })
                  }
                  className="icon-control absolute right-3 top-3 z-10 h-10 w-10 text-white"
                  aria-label={`Expand ${summary.title} image`}
                >
                  <Expand className="h-4 w-4" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-sm text-white/80">{summary.image.caption}</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </section>

      <ImageLightboxModal
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </>
  );
};

export default AboutSummarySection;
