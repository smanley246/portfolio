/*
  * File: src/components/Card.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Reusable Card component for consistent styling.
*/

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;

    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    node.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: { type: "spring", stiffness: 360, damping: 26 },
            }
      }
      className={
        "panel interactive-card relative rounded-[1.75rem] p-6 sm:p-7 " +
        (className ?? "")
      }
    >
      <div className="interactive-card__surface-glow" />
      <div className="interactive-card__border-glow" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
};

export default Card;
