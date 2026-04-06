/*
  * File: src/pages/WorkPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Work page for the portfolio website, showcasing professional experience.
*/

// Data
import { workRoles, workDetailPath } from "../data/workData/workData";

// Sections
import WorkHeroSection from "../sections/workSections/WorkHeroSection";
import WorkRolesSection from "../sections/workSections/WorkRolesSection";

export default function WorkPage() {
  return (
    <div className="site-container pb-8">
      <WorkHeroSection />
      <WorkRolesSection workRoles={workRoles} workDetailPath={workDetailPath} />
    </div>
  );
}
