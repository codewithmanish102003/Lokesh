import React from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function FloatingWhatsApp() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <motion.a
      href={personal.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-20 z-40 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.5)] transition-all duration-300 group cursor-pointer border border-emerald-300/40"
      aria-label="Chat on WhatsApp"
      title="Chat directly on WhatsApp"
    >
      <WhatsAppIcon size={22} className="text-black group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#03030c] animate-pulse" />
    </motion.a>
  );
}
