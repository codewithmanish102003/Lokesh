import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { FlutterIcon, DartIcon } from "./TechIcons";
import WhatsAppIcon from "./WhatsAppIcon";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const active = PORTFOLIO_DATA.projects[activeIndex];

  const handleOpenModal = (project) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="works" className="relative min-h-[90vh] lg:min-h-screen py-16 sm:py-20 px-6 sm:px-10 bg-[#03030c] flex items-center justify-center overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-sky-500/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-white/8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.2]">
              Featured <span className="font-serif-italic text-amber-200/90 font-light">Applications</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/50 max-w-sm mt-2 md:mt-0 font-light leading-relaxed">
            Select any project to preview live on the interactive mobile device stage.
          </p>
        </div>

        {/* Unique Split Stage Layout: Phone Device on Left + Interactive Storyline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Realistic Phone Mockup Display Stage */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[260px] sm:w-[280px] aspect-[9/18] rounded-[2.8rem] bg-[#0d0f18] p-2.5 shadow-[0_25px_70px_-15px_rgba(2,117,194,0.25)] border-[3px] border-[#222538] ring-1 ring-white/15">
              
              {/* Phone Dynamic Island / Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black z-30 flex items-center justify-between px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Phone Screen Canvas with Smooth Transitions */}
              <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-[#05060a] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex flex-col justify-between overflow-hidden"
                  >
                    {/* Screen Image with Gradient Header */}
                    <div className="relative h-3/5 w-full overflow-hidden">
                      <img
                        src={active.image}
                        alt={active.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-[#05060a]/40 to-transparent" />
                      
                      {/* Live Badge in Device Screen */}
                      <div className="absolute bottom-2.5 left-3.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-amber-300">
                        <FlutterIcon size={10} />
                        <span>Flutter & Dart</span>
                      </div>
                    </div>

                    {/* Lower Screen App Content */}
                    <div className="p-4 space-y-2 shrink-0">
                      <p className="text-[9px] font-mono text-sky-300 uppercase tracking-wider">
                        {active.category}
                      </p>
                      <h4 className="text-base font-medium text-white leading-tight truncate">
                        {active.title}
                      </h4>
                      <p className="text-[10px] text-white/60 line-clamp-2 leading-relaxed font-light">
                        {active.description}
                      </p>

                      {/* Screen Action Button */}
                      <a
                        href={active.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-md"
                      >
                        <WhatsAppIcon size={12} />
                        <span>Request Demo APK</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Realistic Gloss Sheen on Screen Edge */}
              <div className="absolute inset-y-6 left-1.5 w-1 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: Interactive Storyline & Project List (Compact Fit) */}
          <div className="lg:col-span-7 space-y-3">
            {PORTFOLIO_DATA.projects.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white/[0.04] border border-sky-400/40 shadow-[0_0_25px_rgba(2,117,194,0.12)]"
                      : "bg-transparent border border-white/5 hover:border-white/15 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span className={`font-mono text-xs font-semibold ${isActive ? "text-amber-300" : "text-white/30"}`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-lg sm:text-xl font-normal transition-colors truncate ${isActive ? "text-white font-medium" : "text-white/70"}`}>
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs text-white/50 font-light max-w-xl leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Expanded Details when Active */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.25 }}
                          className="pt-2 space-y-2.5"
                        >
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/80 bg-white/[0.04] border border-white/10"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="pt-1 flex items-center gap-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenModal(project);
                              }}
                              className="text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <span>Inspect Architecture Specs</span>
                              <ArrowUpRight size={12} />
                            </button>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs font-mono text-white/50 hover:text-white transition-colors"
                            >
                              GitHub Source
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all mt-0.5 ${
                      isActive ? "bg-amber-400/20 border-amber-400 text-amber-300" : "border-white/10 text-white/30"
                    }`}>
                      <ChevronRight size={14} className={`transition-transform duration-200 ${isActive ? "rotate-90" : "rotate-0"}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
