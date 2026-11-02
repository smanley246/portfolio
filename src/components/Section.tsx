/*
  * File: src/components/Section.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Reusable Section component with title and optional icon.
*/

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id: string;               // HTML id for scroll targets
  title: string;            // section heading text
  icon?: React.ReactNode;   // optional icon to show next to title
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="content-section scroll-mt-28">
      <div className="site-container w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading title={title} icon={icon} />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
