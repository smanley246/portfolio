import React from "react";
import CircuitBackground from "./CircuitBackground";
import Navbar from "./Navbar";
import Footer from "./Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
  mainClassName?: string;
};

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  mainClassName = "",
}) => {
  return (
    <>
      <CircuitBackground />

      <div className="relative z-10 min-h-screen flex flex-col text-[var(--color-text)]">
        <Navbar />
        <main
          className={["flex-1 pt-24 pb-16", mainClassName].join(" ")}
          style={{ paddingBottom: "max(4rem, env(safe-area-inset-bottom))" }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
