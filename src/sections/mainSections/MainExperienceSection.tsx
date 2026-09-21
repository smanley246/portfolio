/*
 * File: src/sections/mainSections/MainExperienceSection.tsx
 * Description: Homepage spotlight for Samuel's current professional role.
 */

import React from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import Section from "../../components/Section";
import { currentWorkRole, workDetailPath } from "../../data/workData/workData";

const MainExperienceSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section id="experience" title="Current Experience" icon={<BriefcaseBusiness />}>
      <Card>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="section-kicker mb-3">{currentWorkRole.when}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {currentWorkRole.title}
            </h3>
            <p className="meta-line mt-2 text-base">
              {currentWorkRole.place}
            </p>
            <ul className="ml-5 mt-5 list-disc space-y-2 text-base text-[var(--color-text-muted)]">
              {currentWorkRole.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-end">
            <div className="media-frame flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border p-1 sm:h-20 sm:w-20">
              <img
                src={currentWorkRole.logo?.src}
                alt={currentWorkRole.logo?.alt ?? `${currentWorkRole.place} logo`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <CustomButton
              className="whitespace-nowrap"
              onClick={() => navigate(workDetailPath(currentWorkRole.slug))}
            >
              View Experience <ArrowRight className="h-4 w-4" />
            </CustomButton>
          </div>
        </div>
      </Card>
    </Section>
  );
};

export default MainExperienceSection;
