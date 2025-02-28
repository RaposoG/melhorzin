"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Technologies from "@/components/sections/technologies";
import PortfolioTimeline from "@/components/sections/timeLine";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Technologies />
        <PortfolioTimeline />
        <Contact />
      </main>
    </div>
  );
}
