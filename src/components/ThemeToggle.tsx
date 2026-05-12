"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 md:top-6 right-4 md:right-6 z-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-white/50 dark:bg-[#050505]/50 backdrop-blur-md border border-zinc-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-zinc-800 dark:text-zinc-200"
        aria-label="Toggle Theme Options"
      >
        {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-xl shadow-xl overflow-hidden py-1"
          >
            <button
              onClick={() => { setTheme("light"); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-white/5 ${theme === "light" ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-500/10" : "text-slate-700 dark:text-zinc-300"}`}
            >
              <Sun size={16} />
              <span>Light</span>
            </button>
            <button
              onClick={() => { setTheme("dark"); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-white/5 ${theme === "dark" ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-500/10" : "text-slate-700 dark:text-zinc-300"}`}
            >
              <Moon size={16} />
              <span>Dark</span>
            </button>
            <button
              onClick={() => { setTheme("system"); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-white/5 ${theme === "system" ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-500/10" : "text-slate-700 dark:text-zinc-300"}`}
            >
              <Monitor size={16} />
              <span>System</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
