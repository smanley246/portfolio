/*
  * File: src/pages/MainPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the main landing page for the portfolio website.
*/

import UserHeroSectionComponent from "../sections/mainSections/MainUserHeroSection";

// Imports of Sections
import AboutSection from "../sections/mainSections/MainAboutSection";           // about section
import CapstoneSection from "../sections/mainSections/MainCapstoneSection";
import ProjectsSection from "../sections/mainSections/MainProjectSection";      // projects grid

const Hero: React.FC = () => {
  return <UserHeroSectionComponent />;
};

export default function MainPage() {
  return (
    <>
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>
      <AboutSection />
      <CapstoneSection />
      <ProjectsSection />
    </>
  );
}
