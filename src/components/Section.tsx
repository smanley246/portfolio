/*
 * Section.tsx
 * Wrapper for each major scrollable section of the portfolio
 * Handles section padding, title row, icon, and consistent layout
 */

import React from "react";

interface SectionProps {
  id: string;               // HTML id for scroll targets
  title: string;            // section heading text
  icon?: React.ReactNode;   // optional icon to show next to title
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24 py-8">
    <div className="max-w-6xl mx-auto w-full px-4">
      {/* Title row with icon + heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg.white/10 dark:bg.white/10 backdrop-blur-sm ring-1 ring-white/10">
          {icon /* Icon passed from parent (e.g., lucide icon) */}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>

      {/* Section body content */}
      {children}
    </div>
  </section>
);

export default Section;
