import type { ReactNode } from "react";

export default function SectionHeading({ title, icon, id }: { title: string; icon?: ReactNode; id?: string }) {
  return <div className="section-heading">
    {icon && <div className="section-heading__icon" aria-hidden="true">{icon}</div>}
    <h2 id={id} className="section-heading__title">{title}</h2>
  </div>;
}
