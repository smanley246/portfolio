/*
  * File: src/sections/aboutSections/AboutInterestsSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: This file contains the About Interests section component for the portfolio website.
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Expand, Heart, Trophy, PawPrint } from "lucide-react";
import Card from "../../components/Card";
import ImageLightboxModal, {
  type LightboxImage,
} from "../../components/ImageLightboxModal";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type InterestsCard = {
  title: string;
  body: string | string[];
  tags: string[];
  image?: { src: string; alt: string; caption: string };
};

type InterestsSection = {
  id: "interests";
  title: string;
  cards: InterestsCard[];
};

type Props = {
  interests: InterestsSection;
};

const AboutInterestsSection: React.FC<Props> = ({ interests }) => {
  const squash = interests.cards[0];
  const tech = interests.cards[1];
  const pets = interests.cards[2];
  const [expandedImage, setExpandedImage] = useState<LightboxImage | null>(null);

  const renderBody = (body: string | string[]) => {
    if (Array.isArray(body)) {
      return (
        <div className="space-y-3">
          {body.map((p, i) => (
            <p key={i} className="prose-copy whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      );
    }

    return <p className="prose-copy whitespace-pre-line">{body}</p>;
  };

  return (
    <>
      <section
        id={interests.id}
        className="mx-auto w-full max-w-6xl px-4 pt-10 sm:pt-8 pb-16"
      >
        <motion.div
          variants={sectionFade}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="section-heading">
            <div className="section-heading__icon">
              <Heart className="h-5 w-5" />
            </div>
            <h2 className="section-heading__title">{interests.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-6 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="h-5 w-5 text-[var(--color-accent)]" />
                <h3 className="text-xl font-semibold">{squash.title}</h3>
              </div>

              {squash.image && (
                <div className="interactive-media relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-4">
                  <img
                    src={squash.image.src}
                    alt={squash.image.alt}
                    className="interactive-media__asset absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedImage({
                        src: squash.image!.src,
                        alt: squash.image!.alt,
                        title: squash.title,
                        caption: squash.image!.caption,
                      })
                    }
                    className="icon-control absolute right-3 top-3 z-10 h-10 w-10 text-white"
                    aria-label={`Expand ${squash.title} image`}
                  >
                    <Expand className="h-4 w-4" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm text-white/85">{squash.image.caption}</p>
                  </div>
                </div>
              )}

              {renderBody(squash.body)}

              <div className="flex flex-wrap gap-2 pt-4">
                {squash.tags.map((t) => (
                  <span key={t} className="card-chip">
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            <div className="lg:col-span-6 grid grid-cols-1 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="h-5 w-5 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-semibold">{tech.title}</h3>
                </div>

                {renderBody(tech.body)}

                <div className="flex flex-wrap gap-2 pt-4">
                  {tech.tags.map((t) => (
                    <span key={t} className="card-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <PawPrint className="h-5 w-5 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-semibold">{pets.title}</h3>
                </div>

                {pets.image && (
                  <div className="interactive-media relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 mb-4">
                    <img
                      src={pets.image.src}
                      alt={pets.image.alt}
                      className="interactive-media__asset absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedImage({
                          src: pets.image!.src,
                          alt: pets.image!.alt,
                          title: pets.title,
                          caption: pets.image!.caption,
                        })
                      }
                      className="icon-control absolute right-3 top-3 z-10 h-10 w-10 text-white"
                      aria-label={`Expand ${pets.title} image`}
                    >
                      <Expand className="h-4 w-4" />
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-sm text-white/85">{pets.image.caption}</p>
                    </div>
                  </div>
                )}

                {renderBody(pets.body)}

                <div className="flex flex-wrap gap-2 pt-4">
                  {pets.tags.map((t) => (
                    <span key={t} className="card-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
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

export default AboutInterestsSection;
