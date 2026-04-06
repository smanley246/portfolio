/*
  * File: src/components/Footer.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Footer component with contact information and social media links.
*/

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="border-t border-white/8 bg-slate-950/25 py-8">
    <div className="site-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium text-white">Samuel Manley</p>
        <p className="text-sm text-[var(--color-text-soft)]">
          Built with React, Vite, and a hardware-inspired visual system.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-white">
        <a
          href="mailto:samuel@samuelmanley.ca"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-200/25 hover:bg-white/8"
        >
          <Mail className="h-4 w-4" /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/smanley246/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-200/25 hover:bg-white/8"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>

        <a
          href="https://github.com/smanley246"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan-200/25 hover:bg-white/8"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>

      <p className="text-xs text-[var(--color-text-soft)] md:text-right">
        Copyright {new Date().getFullYear()} Samuel Manley
      </p>
    </div>
  </footer>
);

export default Footer;
