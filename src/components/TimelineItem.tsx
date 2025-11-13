import React from "react";

interface TimelineItemProps {
  when: string;
  title: string;
  place: string;
  bullets?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ when, title, place, bullets }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-400/70" />
    <div className="text-sm text-blue-200/80">{when}</div>
    <div className="font-semibold">{title}</div>
    <div className="text-blue-100/80 mb-2">{place}</div>
    {bullets && (
      <ul className="list-disc ml-5 text-sm space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </div>
);

export default TimelineItem;