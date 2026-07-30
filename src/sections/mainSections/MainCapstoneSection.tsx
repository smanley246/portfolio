/*
  * File: src/sections/mainSections/MainCapstoneSection.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: This file contains the Engineering Capstone Project section for the homepage.
*/

import React, { useState } from "react";
import { Expand, Trophy } from "lucide-react";
import Card from "../../components/Card";
import ImageLightboxModal, {
  type LightboxImage,
} from "../../components/ImageLightboxModal";
import Section from "../../components/Section";
import { capstoneSummary } from "../../data/capstoneData/capstoneData";

const MainCapstoneSection: React.FC = () => {
  const { poster, deanPhoto, schematic, display } = capstoneSummary.showcaseCards;
  const [expandedImage, setExpandedImage] = useState<LightboxImage | null>(null);

  const renderImageCard = (
    slot: (typeof capstoneSummary.showcaseCards)[keyof typeof capstoneSummary.showcaseCards],
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
          onClick={() =>
            setExpandedImage({
              src: slot.src,
              alt: slot.alt,
              title: slot.title,
              caption: slot.caption,
            })
          }
          className="icon-control absolute right-4 top-4 h-10 w-10 text-white"
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
              deanPhoto,
              "h-auto w-auto",
              "aspect-square rounded-[1.4rem]",
              "",
              "",
              "contain",
            )}

            {renderImageCard(
              schematic,
              "h-auto w-auto",
              "aspect-[3/2] rounded-[1.4rem]",
              "",
              "",
              "contain",
            )}
          </div>

          <div className="flex flex-col gap-6 xl:h-full">
            {renderImageCard(
              poster,
              "h-auto w-auto",
              "aspect-[3/4] rounded-[1.4rem]",
              "",
              "",
              "contain",
            )}

            {renderImageCard(
              display,
              "rounded-[1.6rem] object-cover object-bottom",
              "min-h-[18rem] rounded-[1.4rem] sm:min-h-[20rem] xl:flex-1",
              "flex flex-col xl:h-full xl:flex-1",
              "border border-white/10",
              "cover",
            )}
          </div>
        </div>
      </Section>

      <ImageLightboxModal
        image={expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </>
  );
};

export default MainCapstoneSection;
