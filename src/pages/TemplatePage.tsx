/*
  * File: 
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description:
*/

// Imports of Components
import CircuitCanvasComponent from "../components/CircuitBackground"; // animated background
import NavbarComponent from "../components/Navbar";                   // sticky navbar
import Footer from "../components/Footer";    

/* ========================= Circuit Diagram ========================= */
const CircuitBackground: React.FC = () => {
  return <CircuitCanvasComponent />; // simply render canvas background component
};

/* ============================== Navbar ============================== */
const Navbar: React.FC = () => {
  return <NavbarComponent />; // wrapper for navbar to keep naming consistent
};

export default function TemplatePage() {
  return (
    <>
    <CircuitBackground />
    <div
        className="relative z-10 min-h-screen flex flex-col text-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // keep content above Safari bar
      >
        <Navbar /> {/* Navbar with links to other sections */}

      <main className="flex-1">
      </main>
    </div>
    <Footer /> {/* Footer section */}
    </>
  );
}
