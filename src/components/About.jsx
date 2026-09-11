import React from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative min-h-[85vh] py-20 sm:py-28 px-6 sm:px-12 bg-[#05060b] flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-sky-500/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT: Clean Photorealistic Mobile Showcase Image (5 cols on Desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 group">
              <img
                src="/about-phone.jpg"
                alt="Mobile Application Engineering - Flutter & Dart"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: N26-Style Clean Editorial Minimalist Typography (7 cols on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 lg:py-4 space-y-6">
            
            {/* Top Group: Brand Mark + Headline + Rating */}
            <div className="space-y-4 sm:space-y-5">
              {/* Monomark Brand Logo */}
              <div>
                <div className="inline-block border-b-2 border-amber-400 pb-1">
                  <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
                    LK
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-[1.2]">
                Designing & building high-performance mobile apps with Flutter.
              </h2>

              {/* Rating Stars & Experience Meta */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <div className="flex text-amber-300">
                  {"★★★★★"}
                </div>
                <span className="text-white/50 font-mono text-xs">
                  (2+ Years Flutter & Dart • BCA '25 Univ. of Rajasthan)
                </span>
              </div>
            </div>

            {/* Middle Group: Paragraph Text */}
            <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed max-w-2xl">
              Lokesh Kumawat is a Flutter developer specializing in cross-platform Android and iOS applications. Experienced in complete UI development, responsive Material 3 design, asynchronous REST API integration, JSON serialization, and production-ready mobile architectures.
            </p>

            {/* Bottom Group: Minimalist Action Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono border-t border-white/8">
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="/Lokesh.pdf"
                download="Lokesh_Kumawat_Flutter_Developer.pdf"
                className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span>Download CV (PDF)</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#works"
                className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
              >
                <span>Explore Featured Apps</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
