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
  <footer className="border-t border-[rgba(159,224,234,0.1)] bg-[rgba(2,10,19,0.4)] py-8 backdrop-blur-lg">
    <div className="site-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium text-white">Samuel Manley</p>
        <p className="text-xs text-[var(--color-text-soft)]">
          Copyright {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 text-white">
        <a
          href="mailto:samuel@samuelmanley.ca"
          className="surface-control inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
        >
          <Mail className="h-4 w-4" /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/smanley246/"
          target="_blank"
          rel="noreferrer"
          className="surface-control inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>

        <a
          href="https://github.com/smanley246"
          target="_blank"
          rel="noreferrer"
          className="surface-control inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm text-white"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
