/*
  * File: src/sections/educationSections/EducationHeroSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Hero section component for the education section.
*/

import React from "react";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type DegreeCard = {
  subtitle?: string;
};

type Props = {
  heading: string;
  degreeCard: DegreeCard;
};

const EducationHeroSection: React.FC<Props> = ({ heading, degreeCard }) => {
  return (
    <motion.div
      variants={sectionFade}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white">{heading}</h1>
        {degreeCard.subtitle && (
          <p className="text-sm text-blue-200/80 mt-2">{degreeCard.subtitle}</p>
        )}
      </div>
    </motion.div>
  );
};

export default EducationHeroSection;
