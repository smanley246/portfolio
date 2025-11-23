/*
 * Card.tsx
 * Reusable card container for portfolio sections
 * Provides consistent rounded, bordered, blurred background styling
 */

import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={
      // Base card styling, plus any extra classes passed in
      "rounded-2xl border border-white/10 shadow-sm p-5 bg-[#0a1f36]/50 backdrop-blur " +
      (className ?? "")
    }
  >
    {children /* Render whatever content gets passed into the card */}
  </div>
);

export default Card;
