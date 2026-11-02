/*
  * File: src/pages/MainPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the main landing page for the portfolio website.
*/

import UserHeroSectionComponent from "../sections/mainSections/MainUserHeroSection";
import ProjectCard from "../components/ProjectCard";
import { latestProjects } from "../data/projectData/projectData";

// Imports of Sections
import AboutSection from "../sections/mainSections/MainAboutSection";           // about section
import ExperienceSection from "../sections/mainSections/MainExperienceSection";
import CapstoneSection from "../sections/mainSections/MainCapstoneSection";
import AboutTeaserSection from "../sections/mainSections/MainAboutTeaserSection";
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
      {latestProjects[0] && (
        <section className="site-container pb-4" aria-label="Latest project">
          <ProjectCard project={latestProjects[0]} variant="banner" headingLevel={2} />
        </section>
      )}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CapstoneSection />
      <AboutTeaserSection />
    </>
  );
}
