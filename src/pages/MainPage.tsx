/*
  * File: src/pages/MainPage.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: This file contains the main landing page for the portfolio website.
*/

// Imports of Components
import CircuitCanvasComponent from "../components/CircuitBackground"; // animated background
import UserHeroSectionComponent from "../sections/mainSections/MainUserHeroSection";   // hero at top
import NavbarComponent from "../components/Navbar";                   // sticky navbar
import Footer from "../components/Footer";                            // footer bar

// Imports of Sections
import AboutSection from "../sections/mainSections/MainAboutSection";           // about section
import EducationSection from "../sections/mainSections/MainEducationSection";   // education section
import ExperienceSection from "../sections/mainSections/MainExperienceSection"; // work experience section
import ProjectsSection from "../sections/mainSections/MainProjectSection";      // projects grid

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => {
  return <CircuitCanvasComponent />; // simply render canvas background component
};

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => {
  return <NavbarComponent />; // wrapper for navbar to keep naming consistent
};

/* ========================= UserHeroSection ========================= */
const Hero: React.FC = () => {
  return <UserHeroSectionComponent />; // wrapper for hero section
};

/* ============================== Page =============================== */
export default function MainPage() {
  return (
    <>
      {/* Background Circuit Diagram behind all content */}
      <CircuitBackground />

      {/* ========================= Content ========================= */}
      <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // keep content above Safari bar
      >
        <Navbar /> {/* Navbar with links to other sections */}

        <main className="flex-1 pt-12">
          {/* Home section wraps hero for scroll targeting */}
          <section id="home" className="scroll-mt-24">
            <Hero /> {/* Hero user section */}
          </section>

          <AboutSection />       {/* About user section */}
          <ProjectsSection />    {/* User project overview */}
          <EducationSection />   {/* User education section */}
          <ExperienceSection />  {/* User experience section */}
        </main>

        <Footer /> {/* Footer section */}
      </div>
    </>
  );
}
