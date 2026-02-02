/*
  * File: src/sections/aboutSections/AboutSummarySection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the About Summary section component for the About page.
*/

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Card from "../../components/Card";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

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
  return (
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
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <Heart className="h-5 w-5 text-teal-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{summary.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Text */}
          <Card className="lg:col-span-7 p-6 bg-blue-900/35 border border-white/10">
            <div className="flex flex-col gap-4">
              {summary.paragraphs.map((p, i) => (
                <p key={i} className="text-white/80 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {summary.highlights.map((h) => (
                  <span key={h} className={chipBase}>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Image */}
          <Card className="lg:col-span-5 flex items-center justify-center p-6 bg-blue-900/35 border border-white/10">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={summary.image.src}
                alt={summary.image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm text-white/80">{summary.image.caption}</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSummarySection;
