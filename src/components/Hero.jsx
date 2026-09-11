import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Smartphone, Star, AppWindow } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 15,
        y: (e.clientY / innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#03030c] pt-28 pb-12">
      {/* Background Image with Cinematic Lighting & Subtle Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: mousePos.x * 0.3,
            y: mousePos.y * 0.3,
            scale: 1.02,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/hero-koi.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 45%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Ambient Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03030c]/90 via-[#03030c]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03030c] via-transparent to-[#03030c]/70" />
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
          >
            <Smartphone size={13} className="text-amber-300" />
            <span className="text-xs text-amber-200/90 tracking-wide font-medium">
              Mobile App Developer • React Native & Flutter (iOS / Android)
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6">
              Be in touch with <br />
              your <span className="font-serif-italic text-amber-200/95">imagination</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-lg mb-8"
          >
            Hi, I’m <span className="text-white font-medium">Lokesh Kumar</span>. I architect fluid 60fps mobile applications, native modules, and offline-first mobile products for iOS and Android.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#works"
              className="glass-pill inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white group shadow-[0_0_25px_rgba(255,190,83,0.15)]"
            >
              <span>Explore Mobile Apps</span>
              <ArrowRight size={14} className="text-white/60 group-hover:translate-x-1 group-hover:text-amber-300 transition-all" />
            </a>
            <a
              href="/Lokesh.pdf"
              download
              className="px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all inline-flex items-center gap-2"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 w-full mt-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-5">
            <p className="text-xs text-white/40 font-light leading-relaxed max-w-md">
              15+ Apps published on App Store & Google Play. Over 250,000+ happy active mobile users worldwide.
            </p>
          </div>
          <div className="md:col-span-7 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-white/10 via-amber-400/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
