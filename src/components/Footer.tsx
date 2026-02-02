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
  <footer className="border-t border-white/10 py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left side: copyright text */}
      <p className="text-sm text-blue-200/80">
        © {new Date().getFullYear()} Samuel Manley. All rights reserved.
      </p>

      {/* Right side: contact + social icons */}
      <div className="flex items-center gap-3 text-white">
        <a
          href="mailto:samuel@samuelmanley.ca"
          className="inline-flex items-center gap-2 text-sm text-white hover:text-white hover:underline"
        >
          <Mail className="w-4 h-4 text-white" /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/smanley246/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white hover:text-white hover:underline"
        >
          <Linkedin className="w-4 h-4 text-white" /> LinkedIn
        </a>

        <a
          href="https://github.com/smanley246"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white hover:text-white hover:underline"
        >
          <Github className="w-4 h-4 text-white" /> GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
