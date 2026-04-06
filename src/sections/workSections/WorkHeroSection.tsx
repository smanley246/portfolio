/*
  * File: src/sections/workSections/WorkHeroSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Hero section component for the work section.
*/

import React from "react";
import PageIntro from "../../components/PageIntro";

type Props = {
  title?: string;
  subtitle?: string;
};

const WorkHeroSection: React.FC<Props> = ({
  title = "Work",
  subtitle = "A complete list of my professional experience.",
}) => {
  return <PageIntro eyebrow="Experience" title={title} description={subtitle} />;
};

export default WorkHeroSection;
