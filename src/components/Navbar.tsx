/*
 * Navbar.tsx
 * Sticky top navigation with scroll progress bar
 * Handles smooth scrolling to sections and quick contact/social actions
 */

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Cpu,
  Home,
  User2,
  FolderGit2,
  School,
  Briefcase,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import { scrollToId } from "../utils/scrollToId";

// Links used to build the center nav menu
const links = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <User2 className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { id: "education", label: "Education", icon: <School className="w-4 h-4" /> },
  { id: "experience", label: "Work", icon: <Briefcase className="w-4 h-4" /> },
] as const;

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll(); // 0..1 scroll progress across page
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  }); // smooth animated bar scaling

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0a1f36]/60 dark:supports-[backdrop-filter]:bg-[#0a1f36]/60 bg-[#0a1f36]/80 border-b border-white/10 text-white">
      {/* Top animated scroll progress bar */}
      <motion.div style={{ scaleX }} className="h-1 bg-white/70 origin-left" />

      {/* Main nav content */}
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: logo / name button that returns to home section */}
        <button
          onClick={() => scrollToId("home")}
          className="font-semibold tracking-tight flex items-center gap-2"
        >
          <Cpu className="w-5 h-5" /> Samuel Manley
        </button>

        {/* Center: section links on desktop */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollToId(l.id)} // smooth scroll to section
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition"
                aria-label={`Jump to ${l.label}`}
              >
                {l.icon}
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: quick contact + social buttons */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:smanley246@gmail.com"
            className="p-2 rounded-xl hover:bg-white/10"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/smanley246/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/smanley246"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
