/*
  * File: src/pages/EducationPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Education page component for the portfolio website.
*/

// Data
import { courseDetailPath, educationData } from "../data/educationData/educationData";

// Sections
import EducationHeroSection from "../sections/educationSections/EducationHeroSection";
import EducationDegreeSection from "../sections/educationSections/EducationDegreeSection";
import EducationCoursesSection from "../sections/educationSections/EducationCoursesSection";

export default function EducationPage() {
  const { heading, degreeCard, coursesHeading, courses } = educationData;

  return (
    <div className="site-container pb-8">
      <EducationHeroSection heading={heading} degreeCard={degreeCard} />
      <EducationDegreeSection degreeCard={degreeCard} />
      <EducationCoursesSection
        coursesHeading={coursesHeading}
        courses={courses}
        courseDetailPath={courseDetailPath}
      />
    </div>
  );
}
