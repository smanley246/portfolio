/*
  * File: src/pages/ResumePage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Resume page for the portfolio website.
*/

// Data
import { resumeData } from "../data/resumeData/resumeData";

// Sections
import ResumeHeroSection from "../sections/resumeSections/ResumeHeroSection";
import ResumeActionsSection from "../sections/resumeSections/ResumeActionsSection";
import ResumePreviewSection from "../sections/resumeSections/ResumePreviewSection";

export default function ResumePage() {
  return (
    <div className="site-container pb-8">
      <ResumeHeroSection heading={resumeData.heading} />
      <ResumeActionsSection actions={resumeData.actions} />
      <ResumePreviewSection preview={resumeData.preview} />
    </div>
  );
}
