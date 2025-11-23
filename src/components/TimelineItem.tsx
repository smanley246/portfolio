/*
 * TimelineItem.tsx
 * Single entry for education/work timelines
 * Shows date, title, place, and optional bullet points
 */

import React from "react";

interface TimelineItemProps {
  when: string;        // date or range label (e.g., "2021–Present")
  title: string;       // role or program name
  place: string;       // institution / company
  bullets?: string[];  // optional list of highlight points
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  when,
  title,
  place,
  bullets,
}) => (
  <div className="relative pl-6">
    {/* Left-side dot to mark the timeline node */}
    <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-400/70" />

    {/* When / date range */}
    <div className="text-sm text-blue-200/80">{when}</div>

    {/* Title / role name */}
    <div className="font-semibold">{title}</div>

    {/* Place / institution */}
    <div className="text-blue-100/80 mb-2">{place}</div>

    {/* Optional bullet list of details */}
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
