/*
  * File: src/components/PageIntro.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Reusable page-intro component for section headers across routed pages.
*/

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

const introVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
};

const introItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const PageIntro: React.FC<PageIntroProps> = ({
  eyebrow,
  title,
  description,
  actions,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="page-intro"
      variants={introVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
    >
      {eyebrow ? (
        <motion.p className="page-intro__eyebrow" variants={introItemVariants}>
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h1 className="page-intro__title" variants={introItemVariants}>
        {title}
      </motion.h1>
      {description ? (
        <motion.p className="page-intro__description" variants={introItemVariants}>
          {description}
        </motion.p>
      ) : null}
      {actions ? (
        <motion.div className="page-intro__actions" variants={introItemVariants}>
          {actions}
        </motion.div>
      ) : null}
    </motion.section>
  );
};

export default PageIntro;
