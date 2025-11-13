import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={
      "rounded-2xl border border-white/10 shadow-sm p-5 bg-[#0a1f36]/50 backdrop-blur " +
      (className ?? "")
    }
  >
    {children}
  </div>
);

export default Card;