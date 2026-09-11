import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FlutterIcon,
  DartIcon,
  AndroidIcon,
  AppleIcon,
  VSCodeIcon,
  PostmanIcon,
  GitIcon,
  AndroidStudioIcon,
  RestApiIcon,
  JsonIcon,
} from "./TechIcons";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

const techStack = [
  {
    name: "Flutter",
    subtitle: "3.x Framework",
    icon: FlutterIcon,
    category: "Primary Framework",
    brandColor: "hover:border-sky-500/60 hover:shadow-sky-500/15 text-sky-400",
    bgGlow: "group-hover:bg-sky-500/10",
  },
  {
    name: "Dart",
    subtitle: "Null Safe OOP",
    icon: DartIcon,
    category: "Language",
    brandColor: "hover:border-blue-500/60 hover:shadow-blue-500/15 text-blue-400",
    bgGlow: "group-hover:bg-blue-500/10",
  },
  {
    name: "Android",
    subtitle: "SDK & NDK",
    icon: AndroidIcon,
    category: "Native Platform",
    brandColor: "hover:border-emerald-500/60 hover:shadow-emerald-500/15 text-emerald-400",
    bgGlow: "group-hover:bg-emerald-500/10",
  },
  {
    name: "iOS Runner",
    subtitle: "Apple Ecosystem",
    icon: AppleIcon,
    category: "Native Platform",
    brandColor: "hover:border-white/60 hover:shadow-white/15 text-white/90",
    bgGlow: "group-hover:bg-white/10",
  },
  {
    name: "RESTful APIs",
    subtitle: "Async Endpoints",
    icon: RestApiIcon,
    category: "Networking",
    brandColor: "hover:border-cyan-500/60 hover:shadow-cyan-500/15 text-cyan-400",
    bgGlow: "group-hover:bg-cyan-500/10",
  },
  {
    name: "JSON Parsing",
    subtitle: "Data Serialization",
    icon: JsonIcon,
    category: "Data Layer",
    brandColor: "hover:border-amber-500/60 hover:shadow-amber-500/15 text-amber-400",
    bgGlow: "group-hover:bg-amber-500/10",
  },
  {
    name: "Android Studio",
    subtitle: "IDE & Profiler",
    icon: AndroidStudioIcon,
    category: "Development Tool",
    brandColor: "hover:border-green-500/60 hover:shadow-green-500/15 text-green-400",
    bgGlow: "group-hover:bg-green-500/10",
  },
  {
    name: "VS Code",
    subtitle: "Editor & Tools",
    icon: VSCodeIcon,
    category: "Development Tool",
    brandColor: "hover:border-sky-500/60 hover:shadow-sky-500/15 text-sky-400",
    bgGlow: "group-hover:bg-sky-500/10",
  },
  {
    name: "Postman",
    subtitle: "API Testing",
    icon: PostmanIcon,
    category: "Testing & Debug",
    brandColor: "hover:border-orange-500/60 hover:shadow-orange-500/15 text-orange-400",
    bgGlow: "group-hover:bg-orange-500/10",
  },
  {
    name: "Git & GitHub",
    subtitle: "Version Control",
    icon: GitIcon,
    category: "DevOps & VCS",
    brandColor: "hover:border-red-500/60 hover:shadow-red-500/15 text-red-400",
    bgGlow: "group-hover:bg-red-500/10",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#03030c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-sky-500/5 via-blue-500/5 to-amber-500/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header - Clean & Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.2]">
              Technologies & <span className="font-serif-italic text-amber-200/90 font-light">Ecosystem</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/50 max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
            Curated modern stack for engineering high-performance, cross-platform Android & iOS mobile applications.
          </p>
        </div>

        {/* Clean, Icon-Focused Grid (5 cols on large screens, 2 cols on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {techStack.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
                className={`group relative p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/8 ${tech.brandColor} transition-all duration-300 flex flex-col items-center text-center justify-between shadow-xl cursor-default`}
              >
                {/* Tech Icon inside glowing container */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.03] border border-white/10 ${tech.bgGlow} flex items-center justify-center transition-all duration-300 group-hover:scale-110 mb-4 shadow-md`}>
                  <IconComponent size={28} className="transition-transform" />
                </div>

                {/* Tech Info */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-amber-100 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] font-mono text-white/40">
                    {tech.subtitle}
                  </p>
                </div>

                {/* Category Tag */}
                <div className="mt-4 pt-3 border-t border-white/5 w-full">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/30 group-hover:text-white/60 transition-colors block truncate">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
