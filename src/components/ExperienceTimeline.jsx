import React from "react";
import { ArrowUpRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative min-h-[85vh] py-20 sm:py-28 px-6 sm:px-12 bg-[#03030c] flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-white/8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.2]">
              Mobile Journey & <span className="font-serif-italic text-amber-200/90 font-light">Experience</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/50 max-w-sm mt-2 md:mt-0 font-light leading-relaxed">
            Professional mobile development record and computer science academic foundation.
          </p>
        </div>

        {/* NON-CARD EDITORIAL TRAJECTORY LEDGER */}
        <div className="divide-y divide-white/10">
          
          {/* Milestone 01: Flutter Mobile Developer */}
          <div className="py-8 sm:py-10 group transition-all duration-300 hover:bg-white/[0.01]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Period & Role (4 cols) */}
              <div className="lg:col-span-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-amber-300 font-semibold tracking-wider uppercase">
                    2024 — PRESENT
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white group-hover:text-amber-100 transition-colors">
                  Flutter Developer
                </h3>
                <p className="text-sm font-serif italic text-white/60">
                  Production Mobile Engineering • Jaipur, India
                </p>
              </div>

              {/* Middle Column: Summary & Impact (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  Architected 4 complete cross-platform Flutter applications for iOS & Android. Specialized in responsive Material 3 UI systems, asynchronous REST API integration, dynamic forms with strict validation regex, and 60 FPS render performance.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 size={13} />
                  <span>Production-Grade Codebase • Immediate Availability</span>
                </div>
              </div>

              {/* Right Column: Tech Stack (3 cols) */}
              <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                {["Flutter 3.x", "Dart", "REST API", "State Mgmt", "Android Studio", "Git"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-white/70 border border-white/8 group-hover:border-white/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Milestone 02: BCA Degree */}
          <div className="py-8 sm:py-10 group transition-all duration-300 hover:bg-white/[0.01]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              {/* Left Column: Period & Degree (4 cols) */}
              <div className="lg:col-span-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="font-mono text-xs text-sky-300 font-semibold tracking-wider uppercase">
                    2022 — 2025
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white group-hover:text-sky-100 transition-colors">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-sm font-serif italic text-white/60">
                  University of Rajasthan • Graduated 2025
                </p>
              </div>

              {/* Middle Column: Summary & Coursework (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  Rigorous computer science curriculum emphasizing Object-Oriented Programming (OOP) in Dart, Data Structures & Algorithms, Database Management Systems (DBMS), and modern Software Engineering lifecycles.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <CheckCircle2 size={13} />
                  <span>Official University Degree Conferred</span>
                </div>
              </div>

              {/* Right Column: Foundation Stack (3 cols) */}
              <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                {["Dart OOP", "Data Structures", "DBMS", "Software Eng.", "Mobile UX"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-white/70 border border-white/8 group-hover:border-white/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
