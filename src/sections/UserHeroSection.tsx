import React from "react";
import { motion } from "framer-motion";
import { scrollToId } from "../utils/scrollToId";
// If you want more reliable asset loading in Vite:
// import headshot from "../assets/headshot.jpeg";

const UserHeroSection: React.FC = () => {
  return (
    <section className="relative z-10">
      <div
        className="
          max-w-6xl mx-auto 
          px-4 
          py-12 sm:py-16 lg:py-20 
          grid gap-10 lg:gap-16 
          md:grid-cols-2 
          items-center
          text-white
        "
      >
        {/* Left side: text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-200/70">
            Computer Engineer
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            Samuel Manley
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100/90">
            Gradiating Computer Engineering student passionate about hardaware &
            software development. Much of my talent lies in software development
            and hardware system design, with a focus on creating efficient and
            scalable solutions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("projects")}
              className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-sm sm:text-base"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToId("about")}
              className="px-4 py-2 rounded-xl border border-white/20 font-semibold text-sm sm:text-base"
            >
              About Me
            </button>
          </div>
        </motion.div>

        {/* Right side: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 flex justify-center md:justify-end"
        >
          <div
            className="
              rounded-3xl overflow-hidden 
              shadow-inner ring-1 ring-white/15
              w-40 h-40 
              sm:w-56 sm:h-56 
              md:w-64 md:h-64 
              lg:w-72 lg:h-72
            "
          >
            <img
              // src={headshot}
              src="./src/assets/headshot.jpeg"
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
    </section>
  );
};

export default UserHeroSection;
