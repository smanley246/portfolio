/*
  * File: src/sections/resumeSections/ResumePreviewSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Section component to display a preview image of the resume.
*/

import React from "react";

type Preview = {
  maxWidthPx: number;
  imageSrc: string;
  imageAlt: string;
};

type Props = {
  preview: Preview;
};

const ResumePreviewSection: React.FC<Props> = ({ preview }) => {
  return (
    <div className="flex justify-center">
      <div
        className="
          w-full
          rounded-2xl
          overflow-hidden
          bg-white
          shadow-[0_18px_70px_rgba(0,0,0,0.45)]
          ring-1 ring-white/10
        "
        style={{ maxWidth: `${preview.maxWidthPx}px` }}
      >
        <img
          src={preview.imageSrc}
          alt={preview.imageAlt}
          className="w-full h-auto block"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ResumePreviewSection;
