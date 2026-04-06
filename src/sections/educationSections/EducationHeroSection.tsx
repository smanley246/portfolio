/*
  * File: src/sections/educationSections/EducationHeroSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Hero section component for the education section.
*/

import React from "react";
import PageIntro from "../../components/PageIntro";

type DegreeCard = {
  subtitle?: string;
};

type Props = {
  heading: string;
  degreeCard: DegreeCard;
};

const EducationHeroSection: React.FC<Props> = ({ heading, degreeCard }) => (
  <PageIntro
    eyebrow="Education"
    title={heading}
    description={degreeCard.subtitle}
  />
);

export default EducationHeroSection;
