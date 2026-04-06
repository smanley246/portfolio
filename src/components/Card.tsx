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
}) => (
  <div
    className={
      "panel rounded-[1.75rem] p-6 sm:p-7 " +
      (className ?? "")
    }
  >
    {children}
  </div>
);

export default Card;
