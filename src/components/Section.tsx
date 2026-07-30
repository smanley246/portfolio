/*
  * File: src/components/Section.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Reusable Section component with title and optional icon.
*/

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionProps {
  id: string;               // HTML id for scroll targets
  title: string;            // section heading text
  icon?: React.ReactNode;   // optional icon to show next to title
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="content-section scroll-mt-28 py-10 sm:py-12">
      <div className="site-container w-full">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-heading__icon">{icon}</div>
          <h2 className="section-heading__title">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
