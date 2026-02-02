/*
  * File: src/sections/resumeSections/resumeHeroSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Hero section component for the resume section.
*/

import React from "react";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  heading: string;
};

const ResumeHeroSection: React.FC<Props> = ({ heading }) => {
  return (
    <motion.div
      variants={sectionFade}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white">{heading}</h1>
      </div>
    </motion.div>
  );
};

export default ResumeHeroSection;
