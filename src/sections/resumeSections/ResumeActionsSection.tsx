/*
  * File: src/sections/resumeSections/ResumeActionsSection.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Section component to display action buttons for the resume.
*/

import React from "react";
import CustomButton from "../../components/CustomButton";

type Action = {
  label: string;
  href: string;
  targetBlank?: boolean;
  download?: boolean;
};

type Props = {
  actions: Action[];
};

const ResumeActionsSection: React.FC<Props> = ({ actions }) => {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {actions.map((action) => {
        const rel = action.targetBlank ? "noreferrer" : undefined;

        return (
          <CustomButton
            key={`${action.label}-${action.href}`}
            href={action.href}
            target={action.targetBlank ? "_blank" : undefined}
            rel={rel}
            download={action.download ? true : undefined}
          >
            {action.label}
          </CustomButton>
        );
      })}
    </div>
  );
};

export default ResumeActionsSection;
