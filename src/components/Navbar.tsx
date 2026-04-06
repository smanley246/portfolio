/*
  * File: src/components/Navbar.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Responsive Navbar with scroll progress bar and mobile menu.
*/

import React from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Briefcase,
  ClipboardList,
  Cpu,
  FolderGit2,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  School,
  User2,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { to: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
  { to: "/about", label: "About", icon: <User2 className="h-4 w-4" /> },
  { to: "/projects", label: "Projects", icon: <FolderGit2 className="h-4 w-4" /> },
  { to: "/education", label: "Education", icon: <School className="h-4 w-4" /> },
  { to: "/work", label: "Work", icon: <Briefcase className="h-4 w-4" /> },
  { to: "/resume", label: "Resume", icon: <ClipboardList className="h-4 w-4" /> },
] as const;

const isActivePath = (currentPath: string, targetPath: string) => {
  if (targetPath === "/") {
    return currentPath === "/";
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
};

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
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-slate-950/55 text-white backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/42">
      <motion.div
        style={{ scaleX }}
        className="h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
      />

      <nav className="site-container py-3">
        <div className="grid grid-cols-[auto_1fr_auto] items-center">
          <div className="flex shrink-0 items-center justify-start gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-2xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <button
              onClick={() => navigate("/")}
              className="hidden items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-tight transition hover:border-cyan-200/20 hover:bg-white/10 lg:flex"
              aria-label="Go to Home"
            >
              <Cpu className="h-4 w-4 text-cyan-300" />
              Samuel Manley
            </button>
          </div>

          <div className="flex min-w-0 items-center justify-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-tight lg:hidden"
              aria-label="Go to Home"
            >
              <Cpu className="h-4 w-4 text-cyan-300" />
              Samuel Manley
            </button>

            <ul className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/5 px-2 py-1 lg:flex">
              {links.map((l) => {
                const active = isActivePath(location.pathname, l.to);

                return (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className={[
                        "relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition duration-200 hover:scale-[1.05]",
                        active ? "text-slate-950" : "text-[var(--color-text-muted)] hover:text-white",
                      ].join(" ")}
                      aria-label={`Go to ${l.label}`}
                    >
                      {active ? (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 z-0 rounded-full bg-white shadow-[0_10px_24px_rgba(255,255,255,0.22)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                      <span
                        className={[
                          "relative z-10 inline-flex items-center gap-2",
                          active ? "text-slate-950" : "",
                        ].join(" ")}
                      >
                        {l.icon}
                        {l.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2">
            <a
              href="mailto:samuel@samuelmanley.ca"
              className="rounded-full border border-white/8 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/smanley246/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/8 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/smanley246"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/8 bg-white/5 p-2 transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 cursor-default lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ background: "transparent" }}
            />

            <motion.div
              className="relative z-50 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <div className="site-container pb-3">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/90 backdrop-blur-2xl">
                  <ul className="py-2">
                    {links.map((l) => {
                      const active = isActivePath(location.pathname, l.to);

                      return (
                        <li key={l.label}>
                          <Link
                            to={l.to}
                            className={[
                              "flex items-center gap-3 px-4 py-3 text-sm font-medium transition",
                              active
                                ? "bg-white text-slate-950"
                                : "text-[var(--color-text-muted)] hover:bg-white/8",
                            ].join(" ")}
                            aria-label={`Go to ${l.label}`}
                          >
                            <span className={active ? "text-slate-950" : "opacity-90"}>
                              {l.icon}
                            </span>
                            <span className={active ? "text-slate-950" : ""}>{l.label}</span>
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
