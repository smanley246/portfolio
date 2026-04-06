/*
  * File: src/sections/resumeSections/resumeHeroSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Hero section component for the resume section.
*/

import React from "react";
import PageIntro from "../../components/PageIntro";

type Props = {
  heading: string;
};

const ResumeHeroSection: React.FC<Props> = ({ heading }) => (
  <PageIntro
    eyebrow="Resume"
    title={heading}
    description="Open, download, or preview the latest version of my resume."
  />
);

export default ResumeHeroSection;
