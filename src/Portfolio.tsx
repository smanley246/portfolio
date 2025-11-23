/*
* Portfolio.tsx
* Main portfolio page component
* Renders Navbar, Hero, About, Projects, Education, Experience sections, and Footer
* Includes circuit background and smooth scrolling to sections
* Created by Samuel Manley
*/

// Imports of Hooks
import { useHashScroll } from "./hooks/useHashScroll";   // syncs scroll with URL hash
import { useDevSmokeTests } from "./hooks/useDevSmokeTests"; // optional dev checks

// Imports of Components
import CircuitCanvasComponent from "./components/CircuitBackground"; // animated background
import UserHeroSectionComponent from "./sections/UserHeroSection";   // hero at top
import NavbarComponent from "./components/Navbar";                   // sticky navbar
import Footer from "./components/Footer";                            // footer bar

// Imports of Sections
import AboutSection from "./sections/AboutSection";           // about section
import EducationSection from "./sections/EducationSection";   // education section
import ExperienceSection from "./sections/ExperienceSection"; // work experience section
import ProjectsSection from "./sections/ProjectSection";      // projects grid

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
export default function Portfolio() {
  useHashScroll();      // enable scrolling to sections via URL hash (#about etc.)
  useDevSmokeTests();   // run dev-only smoke tests when enabled

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

        <main className="flex-1">
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
