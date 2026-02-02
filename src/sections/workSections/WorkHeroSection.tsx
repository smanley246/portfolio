/*
  * File: src/sections/workSections/WorkHeroSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Hero section component for the work section.
*/

import React from "react";
import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type Props = {
  title?: string;
  subtitle?: string;
};

const WorkHeroSection: React.FC<Props> = ({
  title = "Work",
  subtitle = "A complete list of my professional experience.",
}) => {
  return (
    <motion.div
      variants={sectionFade}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-sm text-blue-200/80 mt-2">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default WorkHeroSection;
