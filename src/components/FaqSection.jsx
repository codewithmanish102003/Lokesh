import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-32 px-6 sm:px-10 bg-[#03030c] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Editorial Runway */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono font-medium">
                Recruiter & Client Clarifications
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Frequently Asked <span className="font-serif-italic text-amber-200/90 font-light">Questions</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/50 font-light mt-4 md:mt-0 max-w-sm leading-relaxed">
            Essential information regarding Flutter experience, immediate availability, and development workflow.
          </p>
        </div>

        {/* NON-CARD LAYOUT: Editorial Hairline-Divided Numbered Accordion */}
        <div className="divide-y divide-white/10">
          {PORTFOLIO_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const indexStr = (idx + 1).toString().padStart(2, "0");
            return (
              <div key={idx} className="py-7 group">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 sm:gap-8">
                    <span
                      className={`font-mono text-xs sm:text-sm pt-1 transition-colors ${
                        isOpen ? "text-amber-300 font-bold" : "text-white/30 group-hover:text-white/60"
                      }`}
                    >
                      {indexStr}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-normal transition-colors tracking-tight ${
                        isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-amber-400 text-black border-amber-400 scale-110"
                        : "border-white/15 text-white/50 group-hover:border-white/40 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-9 sm:pl-14 pt-4 pr-12 text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
