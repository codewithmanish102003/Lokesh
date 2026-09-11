import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookOpen, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function EducationSection() {
  const edu = PORTFOLIO_DATA.education[0];

  return (
    <section id="education" className="relative py-28 px-6 sm:px-10 bg-[#03030c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* NON-CARD LAYOUT: Verified Academic Credential Runway */}
        <div className="border-t border-b border-white/10 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono font-medium">
                  Verified Academic Credential
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                {edu.degree}
              </h2>
              <p className="text-lg text-amber-200/90 font-serif-italic mt-1">
                {edu.institution} • {edu.location}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-amber-300 bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/30 flex items-center gap-2">
                <Calendar size={13} className="text-amber-400" />
                <span>{edu.period} (Completed 2025)</span>
              </span>

              <span className="font-mono text-xs text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/30 flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>Official Degree Conferred</span>
              </span>
            </div>
          </div>

          {/* Core CS Disciplines Runway */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/5">
            {edu.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.01]">
                <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-white/80 font-mono font-medium">{item}</p>
                  <p className="text-[11px] text-white/40 font-light mt-0.5">Core CS Foundation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
