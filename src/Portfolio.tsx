/*
* Portfolio.tsx
* Main portfolio page component
* Renders Navbar, Hero, About, Projects, Education, Experience sections, and Footer
* Includes circuit background and smooth scrolling to sections
* Created by Samuel Manley
*/

//Imports of Hooks
import { useHashScroll } from "./hooks/useHashScroll";
import { useDevSmokeTests } from "./hooks/useDevSmokeTests";
//Imports of Components
import CircuitCanvasComponent from "./components/CircuitBackgroud";
import UserHeroSectionComponent from "./sections/UserHeroSection";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
//Imports of Sections
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectSection";

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => {
  return (
    <CircuitCanvasComponent />
  );
};

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => {
  return (
    <NavbarComponent />
  );
};

/* ========================= UserHeroSection ========================= */
const Hero: React.FC = () => {
  return (
    <UserHeroSectionComponent/>
  );
};

/* ============================== Page =============================== */
export default function Portfolio() {
  useHashScroll();
  useDevSmokeTests();

  return (
    <>
    {/* Background Circuit Diagram */}
      <CircuitBackground />

      {/* ========================= Content ========================= */}
      <div className="relative z-10 min-h-screen text-white">
        <Navbar /> {/* Navbar with links to Other Sections*/}

        <section id="home" className="scroll-mt-24">
          <Hero /> {/* Hero User Section */}
        </section>

        <AboutSection /> {/* About User Section */}

        <ProjectsSection /> {/* User Project Overvirew */}

        <EducationSection /> {/* User Education Section */}

        <ExperienceSection /> {/* User Experience Section */}

        <Footer /> {/* Footer Section*/}
      </div>
    </>
  );
}
