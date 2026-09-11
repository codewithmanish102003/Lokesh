import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Download, Phone, Mail, ArrowUp } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { PORTFOLIO_DATA } from "../data/portfolioData";

// Inline GitHub SVG
const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const quickIntents = [
  { label: "💬 Mobile App Project", text: "Hi Lokesh, I'd like to discuss a Flutter mobile app project with you." },
  { label: "💼 Schedule Developer Interview", text: "Hi Lokesh, I saw your Flutter portfolio and would like to schedule an interview for a mobile developer role." },
  { label: "📱 Request Live App Demo", text: "Hi Lokesh, could you share a walkthrough of your Flutter apps (CIS / Shreedhara / Property App)?" },
  { label: "⚡ Contract / Freelance Work", text: "Hi Lokesh, are you available for a Flutter mobile development engagement?" },
];

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [selectedIntent, setSelectedIntent] = useState(quickIntents[0]);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = `https://wa.me/916377644710?text=${encodeURIComponent(selectedIntent.text)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 sm:px-12 bg-[#020208] text-white overflow-hidden border-t border-white/8">
      {/* Bioluminescent bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-t from-emerald-500/10 via-sky-500/5 to-transparent blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Monumental Headline & 2-Column Stage with Large Glowing WhatsApp Icon on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Side: Headline, Topic Chips & Primary Action Button (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300 font-medium block mb-3">
                DIRECT GET IN TOUCH • ZERO FORMS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1]">
                Have a mobile app in mind? <br />
                <span className="font-serif-italic text-amber-200/90 font-light">Let’s connect on WhatsApp.</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Prominent Large Glowing WhatsApp Badge / Emblem (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-emerald-500/20 via-emerald-900/10 to-transparent border-2 border-emerald-400/40 hover:border-emerald-400 flex flex-col items-center justify-center p-6 shadow-[0_0_50px_rgba(16,185,129,0.25)] hover:shadow-[0_0_75px_rgba(16,185,129,0.45)] transition-all duration-500 cursor-pointer"
              title="Click to chat directly on WhatsApp"
            >
              {/* Outer Breathing Glow Pulse */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping pointer-events-none" />

              {/* Large Crisp WhatsApp SVG Icon */}
              <WhatsAppIcon size={76} className="text-emerald-400 group-hover:text-emerald-300 transition-colors drop-shadow-[0_4px_24px_rgba(16,185,129,0.7)]" />

              {/* Badge Text */}
              <div className="mt-3 text-center">
                <span className="text-xs font-mono font-semibold text-white group-hover:text-emerald-200 block">
                  Quick WhatsApp
                </span>
                <span className="text-[10px] font-mono text-emerald-300/80 block">
                  +91 6377644710
                </span>
              </div>
            </motion.a>
          </div>

        </div>
        {/* Bottom Hairline Strip: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Lokesh Kumawat • All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Jaipur, India (IST)</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
