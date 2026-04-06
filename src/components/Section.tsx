/*
  * File: src/components/Section.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Reusable Section component with title and optional icon.
*/

import React from "react";

interface SectionProps {
  id: string;               // HTML id for scroll targets
  title: string;            // section heading text
  icon?: React.ReactNode;   // optional icon to show next to title
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-28 py-10 sm:py-12">
    <div className="site-container w-full">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/8 p-2.5 text-cyan-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          {icon}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;
