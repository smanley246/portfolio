/*
  * File: src/components/Card.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Reusable Card component for consistent styling
*/

import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={
      "rounded-2xl bg-blue-900/35 border border-white/10 shadow-sm p-5 backdrop-blur " +
      (className ?? "")
    }
  >
    {children /* Render whatever content gets passed into the card */}
  </div>
);

export default Card;
