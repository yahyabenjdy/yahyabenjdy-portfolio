"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) {
        setActiveSection('#');
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach((item) => {
      if (item.href !== "#") {
        const el = document.querySelector(item.href);
        if (el) observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center justify-center px-8 py-4 rounded-2xl border transition-all duration-500 ${
          scrolled 
            ? "bg-white/70 dark:bg-[#050505]/80 backdrop-blur-md border-black/10 dark:border-white/10 shadow-lg"
            : "bg-white/30 dark:bg-[#050505]/40 backdrop-blur-sm border-black/5 dark:border-white/5"
        }`}
      >
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`transition-colors duration-300 ${
                  activeSection === item.href 
                    ? "text-slate-900 dark:text-white" 
                    : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
