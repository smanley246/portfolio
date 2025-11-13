import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-blue-200/80">
        © {new Date().getFullYear()} Samuel Manley. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        <a
          href="mailto:smanley246@gmail.com"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Mail className="w-4 h-4" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/smanley246/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a
          href="https://github.com/smanley246"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;