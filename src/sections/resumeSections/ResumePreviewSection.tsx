/*
  * File: src/sections/resumeSections/ResumePreviewSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Section component to display a preview image of the resume.
*/

import React from "react";
import Card from "../../components/Card";

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
        className="w-full"
        style={{ maxWidth: `${preview.maxWidthPx}px` }}
      >
        <Card className="overflow-hidden p-2 sm:p-3">
          <div className="overflow-hidden rounded-[1.25rem] bg-white">
            <img
              src={preview.imageSrc}
              alt={preview.imageAlt}
              className="block h-auto w-full"
              draggable={false}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResumePreviewSection;
