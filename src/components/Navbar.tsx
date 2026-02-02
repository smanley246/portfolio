/*
  * File: src/components/Navbar.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  * 
  * Description: Responsive Navbar with scroll progress bar and mobile menu.
*/

import React from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
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
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { to: "/about", label: "About", icon: <User2 className="w-4 h-4" /> },
  { to: "/projects", label: "Projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { to: "/education", label: "Education", icon: <School className="w-4 h-4" /> },
  { to: "/work", label: "Work", icon: <Briefcase className="w-4 h-4" /> },
  { to: "/resume", label: "Resume", icon: <ClipboardList className="w-4 h-4" /> },
] as const;

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0a1f36]/60 dark:supports-[backdrop-filter]:bg-[#0a1f36]/60 bg-[#0a1f36]/80 border-b border-white/10 text-white">
      <motion.div style={{ scaleX }} className="h-1 bg-white/70 origin-left" />

      <nav className="max-w-6xl mx-auto px-4 py-3">
        {/* Use auto/1fr/auto columns so center gets the remaining space */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          {/* LEFT */}
          <div className="flex items-center justify-start gap-2 shrink-0">
            {/* Hamburger shown when desktop links are hidden */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop logo/name on left */}
            <button
              onClick={() => navigate("/")}
              className="hidden lg:flex items-center gap-2 font-semibold tracking-tight whitespace-nowrap"
              aria-label="Go to Home"
            >
              <Cpu className="w-5 h-5" />
              Samuel Manley
            </button>
          </div>

          {/* CENTER */}
          <div className="flex items-center justify-center min-w-0">
            {/* Mobile: centered logo/name */}
            <button
              onClick={() => navigate("/")}
              className="lg:hidden flex items-center gap-2 font-semibold tracking-tight whitespace-nowrap"
              aria-label="Go to Home"
            >
              <Cpu className="w-5 h-5" />
              Samuel Manley
            </button>

            {/* Desktop: centered nav links ONLY at lg+ to avoid overlap */}
            <ul className="hidden lg:flex items-center gap-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition whitespace-nowrap"
                    aria-label={`Go to ${l.label}`}
                  >
                    {l.icon}
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <a
              href="mailto:samuel@samuelmanley.ca"
              className="p-2 rounded-xl hover:bg-white/10 transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/smanley246/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/smanley246"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Click-outside overlay */}
            <motion.button
              type="button"
              className="lg:hidden fixed inset-0 z-40 cursor-default"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ background: "transparent" }}
            />

            <motion.div
              className="lg:hidden relative z-50"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <div className="max-w-6xl mx-auto px-4 pb-3">
                <div className="rounded-2xl border border-white/10 bg-[#0a1f36]/90 backdrop-blur overflow-hidden">
                  <ul className="py-2">
                    {links.map((l) => {
                      const active = location.pathname === l.to;
                      return (
                        <li key={l.label}>
                          <Link
                            to={l.to}
                            className={[
                              "flex items-center gap-3 px-4 py-3 text-sm font-medium transition",
                              "hover:bg-white/10",
                              active ? "bg-white/10" : "",
                            ].join(" ")}
                            aria-label={`Go to ${l.label}`}
                          >
                            <span className="opacity-90">{l.icon}</span>
                            <span>{l.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
