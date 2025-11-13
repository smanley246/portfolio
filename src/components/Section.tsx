import React from "react";

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24 py-8">
    <div className="max-w-5xl mx-auto w-full px-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-sm ring-1 ring-white/10">
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;