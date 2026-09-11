import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#03030c] text-[#e2e2ec] font-sans antialiased selection:bg-amber-400/20 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <ExperienceTimeline />
        <FaqSection />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  );
}
