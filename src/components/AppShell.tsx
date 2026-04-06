/*
  * File: src/components/AppShell.tsx
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Shared site shell that keeps the background, navigation, and footer mounted while page content animates.
*/

import React from "react";
import { motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import CircuitBackground from "./CircuitBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";

const routeOrder: Record<string, number> = {
  "": 0,
  about: 1,
  projects: 2,
  education: 3,
  work: 4,
  resume: 5,
};

const getRouteRank = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);
  const base = parts[0] ?? "";
  const baseRank = routeOrder[base] ?? 99;
  return baseRank * 10 + parts.length;
};

const AppShell: React.FC = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const [displayPath, setDisplayPath] = React.useState(location.pathname);
  const [displayOutlet, setDisplayOutlet] = React.useState(outlet);
  const [direction, setDirection] = React.useState(1);
  const [phase, setPhase] = React.useState<"idle" | "exit" | "enter">("idle");

  React.useEffect(() => {
    if (location.pathname === displayPath) return;

    const nextRank = getRouteRank(location.pathname);
    const previousRank = getRouteRank(displayPath);
    setDirection(nextRank > previousRank ? 1 : -1);
    setPhase("exit");
  }, [displayPath, location.pathname]);

  const handleAnimationComplete = () => {
    if (phase === "exit") {
      setDisplayPath(location.pathname);
      setDisplayOutlet(outlet);
      setPhase("enter");
      return;
    }

    if (phase === "enter") {
      setPhase("idle");
    }
  };

  const animation =
    phase === "exit"
      ? { opacity: 0, x: direction >= 0 ? -56 : 56 }
      : { opacity: 1, x: 0 };

  const initial =
    phase === "enter"
      ? { opacity: 0, x: direction >= 0 ? 56 : -56 }
      : false;

  return (
    <>
      <CircuitBackground />

      <div className="relative z-10 flex min-h-screen flex-col text-[var(--color-text)]">
        <Navbar />
        <main
          className="flex-1 overflow-x-hidden pt-24 pb-16"
          style={{ paddingBottom: "max(4rem, env(safe-area-inset-bottom))" }}
        >
          <motion.div
            key={displayPath}
            initial={initial}
            animate={animation}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleAnimationComplete}
          >
            {displayOutlet}
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppShell;
