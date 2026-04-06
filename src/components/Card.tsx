/*
  * File: src/components/Card.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Reusable Card component for consistent styling.
*/

import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;

    const bounds = node.getBoundingClientRect();
    node.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    node.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={
        "panel interactive-card relative rounded-[1.75rem] p-6 sm:p-7 " +
        (className ?? "")
      }
    >
      <div className="interactive-card__surface-glow" />
      <div className="interactive-card__border-glow" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default Card;
