/*
  * File: src/sections/aboutSections/AboutSkillsSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the About Skills section component for the portfolio website.
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Expand, Wrench } from "lucide-react";
import Card from "../../components/Card";
import ImageLightboxModal, {
  type LightboxImage,
} from "../../components/ImageLightboxModal";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const chipBase =
  "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90";

type SkillsSection = {
  id: "skills";
  title: string;
  skillGroups: { title: string; items: string[] }[];
  image1: { src: string; alt: string; caption: string };
  image2: { src: string; alt: string; caption: string };
};

type Props = {
  skills: SkillsSection;
};

const AboutSkillsSection: React.FC<Props> = ({ skills }) => {
  const [expandedImage, setExpandedImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <section
        id={skills.id}
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
              <Cpu className="h-5 w-5 text-teal-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{skills.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-8 p-6 bg-blue-900/35 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.skillGroups.map((g) => (
                  <div key={g.title} className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-teal-300" />
                      <h3 className="text-lg font-semibold">{g.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span key={it} className={chipBase}>
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="lg:col-span-4 p-6 bg-blue-900/35 border border-white/10">
              <div className="flex flex-col gap-4">
                <div className="interactive-media relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={skills.image1.src}
                    alt={skills.image1.alt}
                    className="interactive-media__asset absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedImage({
                        src: skills.image1.src,
                        alt: skills.image1.alt,
                        title: skills.title,
                        caption: skills.image1.caption,
                      })
                    }
                    className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white transition hover:bg-slate-900"
                    aria-label={`Expand ${skills.image1.alt}`}
                  >
                    <Expand className="h-4 w-4" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm text-white/85">{skills.image1.caption}</p>
                  </div>
                </div>

                <div className="interactive-media relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={skills.image2.src}
                    alt={skills.image2.alt}
                    className="interactive-media__asset absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedImage({
                        src: skills.image2.src,
                        alt: skills.image2.alt,
                        title: skills.title,
                        caption: skills.image2.caption,
                      })
                    }
                    className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white transition hover:bg-slate-900"
                    aria-label={`Expand ${skills.image2.alt}`}
                  >
                    <Expand className="h-4 w-4" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm text-white/85">{skills.image2.caption}</p>
                  </div>
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

export default AboutSkillsSection;
