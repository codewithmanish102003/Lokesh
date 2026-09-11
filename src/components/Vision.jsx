import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Compass } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Cinematic Aesthetics",
    description: "Every pixel is carefully directed with lighting, depth, and atmospheric balance to evoke deep emotion.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Fluid Motion Systems",
    description: "Natural inertia, physics-driven interactions, and WebGL shaders that react organically to touch and cursor.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Architectural Precision",
    description: "Robust full-stack systems designed for speed, sub-second latency, and uncompromising reliability.",
    icon: Compass,
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-36 px-6 sm:px-10 bg-[#03030c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/5 via-indigo-500/5 to-purple-500/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
            Our Vision & Philosophy
          </span>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28 max-w-5xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] text-white/90">
            We reject the ordinary. We build digital spaces that <span className="font-serif-italic text-amber-200/90 font-light">breathe</span>, react, and linger in memory long after the tab is closed.
          </h2>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative p-8 sm:p-10 rounded-3xl glass-panel hover:border-white/20 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-amber-300/60 tracking-widest font-semibold">
                    [{pillar.number}]
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-all duration-500">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white/95 mb-4 group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {pillar.description}
                </p>

                {/* Subtle border glow line */}
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/40 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
