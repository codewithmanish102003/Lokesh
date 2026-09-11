import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight, CheckCircle2, Layers, Cpu } from "lucide-react";

// Inline GitHub SVG
const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#090b14] border border-white/12 rounded-[2rem] overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header Bar with Image */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden shrink-0 border-b border-white/8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/50 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/15 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Category & Metrics Badges */}
              <div className="absolute bottom-4 left-6 flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white/80 border border-white/10 hidden sm:inline">
                  {project.metrics}
                </span>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/80 font-mono">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-white/40 font-mono">
                  OVERVIEW
                </p>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              {project.architecture && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 font-mono">
                    <Cpu size={14} className="text-amber-300" />
                    <span>ENGINEERING & ARCHITECTURE HIGHLIGHTS</span>
                  </div>
                  <div className="space-y-2.5">
                    {project.architecture.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/65 font-light">
                        <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 font-mono">
                  <Layers size={14} className="text-amber-300" />
                  <span>TECHNOLOGY STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl text-xs font-light text-white/80 bg-white/[0.04] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="p-6 bg-white/[0.02] border-t border-white/8 flex items-center justify-between shrink-0">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-all inline-flex items-center gap-1.5"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-pill px-5 py-2.5 rounded-full text-xs font-semibold text-white inline-flex items-center gap-1.5"
                  >
                    <span>Launch Project</span>
                    <ArrowUpRight size={14} className="text-amber-300" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
