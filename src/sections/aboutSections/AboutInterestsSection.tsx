/*
  * File: src/sections/aboutSections/AboutInterestsSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the About Interests section component for the portfolio website.
*/

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Heart, Trophy, PawPrint } from "lucide-react";
import Card from "../../components/Card";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

type InterestsSection = {
  id: "interests";
  title: string;
  cards: Array<{
    title: string;
    body: string;
    tags: string[];
    image?: { src: string; alt: string; caption: string };
  }>;
};

type Props = {
  interests: InterestsSection;
};

const AboutInterestsSection: React.FC<Props> = ({ interests }) => {
  const squash = interests.cards[0];
  const tech = interests.cards[1];
  const pets = interests.cards[2];

  return (
    <section
      id={interests.id}
      className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-8 pb-16"
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
          <h2 className="text-2xl sm:text-3xl font-semibold">{interests.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Squash */}
          <Card className="lg:col-span-6 p-6 bg-blue-900/35 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-teal-300" />
              <h3 className="text-xl font-semibold">{squash.title}</h3>
            </div>

            {squash.image && (
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-4">
                <img
                  src={squash.image.src}
                  alt={squash.image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-sm text-white/85">{squash.image.caption}</p>
                </div>
              </div>
            )}

            {Array.isArray(squash.body)
              ? squash.body.map((p, i) => (
                  <p key={i} className="text-white/80 leading-relaxed whitespace-pre-line">
                    {p}
                  </p>
                ))
              : <p className="text-white/80 leading-relaxed">{squash.body}</p>}

            <div className="flex flex-wrap gap-2 pt-4">
              {squash.tags.map((t) => (
                <span key={t} className={chipBase}>
                  {t}
                </span>
              ))}
            </div>
          </Card>

          {/* Tech + Pets */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {/* Tech */}
            <Card className="p-6 bg-blue-900/35 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="h-5 w-5 text-teal-300" />
                <h3 className="text-xl font-semibold">{tech.title}</h3>
              </div>

              <p className="text-white/80 leading-relaxed">{tech.body}</p>

              <div className="flex flex-wrap gap-2 pt-4">
                {tech.tags.map((t) => (
                  <span key={t} className={chipBase}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            {/* Pets */}
            <Card className="p-6 bg-blue-900/35 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <PawPrint className="h-5 w-5 text-teal-300" />
                <h3 className="text-xl font-semibold">{pets.title}</h3>
              </div>

              {pets.image && (
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-4">
                  <img
                    src={pets.image.src}
                    alt={pets.image.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm text-white/85">{pets.image.caption}</p>
                  </div>
                </div>
              )}

              <p className="text-white/80 leading-relaxed">{pets.body}</p>

              <div className="flex flex-wrap gap-2 pt-4">
                {pets.tags.map((t) => (
                  <span key={t} className={chipBase}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutInterestsSection;
