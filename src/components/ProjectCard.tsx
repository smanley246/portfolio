import React, { useState } from "react";
import { ArrowUpRight, Expand, Github, X } from "lucide-react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  name: string;
  blurb: string;
  tags: string[];
  link?: string;
  repo?: string;
  details?: React.ReactNode; // Add a details prop for expanded content
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, blurb, tags, link, repo, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {name}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-normal text-blue-300 hover:underline ml-2"
                >
                  Live <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </h3>
            <p className="mt-1 text-sm text-blue-100/90">{blurb}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setExpanded(true)}
              className="p-2 rounded-lg hover:bg-white/10 flex items-center gap-1 text-sm"
              aria-label="Expand"
            >
              <Expand className="w-4 h-4" /> Expand
            </button>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </Card>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a1f36] rounded-2xl p-8 max-w-lg w-full relative text-white shadow-xl"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: 1000 }}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold mb-4">{name}</h2>
              <div className="mb-4">{details ? details : blurb}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-300 hover:underline"
                >
                  <Github className="w-5 h-5" /> View Repo
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 inline-flex items-center gap-2 text-sm text-blue-300 hover:underline"
                >
                  <ArrowUpRight className="w-5 h-5" /> Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;