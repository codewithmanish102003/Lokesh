import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    let prevY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);

      // At the very top, always show navbar
      if (currentY <= 30) {
        setVisible(true);
      } else if (currentY > prevY && currentY > 80) {
        // Scrolling DOWN -> Hide Navbar
        setVisible(false);
      } else if (currentY < prevY) {
        // Scrolling UP -> Show Navbar
        setVisible(true);
      }

      prevY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          !visible && !menuOpen
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        } ${
          scrolled
            ? "py-3.5 bg-[#03030c]/90 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/12 flex items-center justify-center font-serif italic text-amber-200 text-sm font-semibold transition-all group-hover:border-amber-400/50">
              LK
            </div>
            <div>
              <span className="text-white/90 font-medium tracking-wide text-xs uppercase block group-hover:text-white transition-colors">
                {personal.name}
              </span>
              <span className="text-[10px] text-amber-300/80 font-mono block">
                Flutter Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white text-xs tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-400/30 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 cursor-pointer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp (+91 6377644710)"
            >
              <WhatsAppIcon size={18} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl glass-panel text-white/80 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 p-6 glass-panel rounded-3xl lg:hidden shadow-2xl border border-white/12 space-y-3 bg-[#090b14]/95 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white py-2.5 text-sm tracking-wider uppercase border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 py-3 rounded-full text-xs tracking-wider uppercase font-semibold bg-emerald-500 text-black shadow-lg"
          >
            <WhatsAppIcon size={16} />
            <span>Chat on WhatsApp (+91 {personal.phone})</span>
          </a>
        </div>
      )}
    </>
  );
}
