import React from "react";
import { motion } from "framer-motion";
import { scrollToId } from "../utils/scrollToId";

const userHeroSection: React.FC = () => {
  return (
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm tracking-widest uppercase text-blue-200/70">Computer Engineer</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">Samuel Manley</h1>
        <p className="mt-4 text-blue-100/90 text-lg">
          Gradiating Computer Engineering student passionate about hardaware & software development.
          Much of my talent lies in software development and hardware system design, 
          with a focus on creating efficient and scalable solutions.
        </p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => scrollToId("projects")}
            className="px-4 py-2 rounded-xl bg-white text-black font-semibold"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToId("about")}
            className="px-4 py-2 rounded-xl border border-white/20 font-semibold"
          >
            About Me
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10"
      >
        <div className="aspect-square rounded-3xl overflow-hidden shadow-inner ring-1 ring-white/15">
          <img
            src='./src/assets/headshot.jpeg'
            alt="Samuel Manley Headshot"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement!;
              const fallback = document.createElement("div");
              fallback.className =
                "w-full h-full bg-gradient-to-br from-blue-900 to-blue-700";
              parent.appendChild(fallback);
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default userHeroSection;