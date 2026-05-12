"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Download, MousePointerClick } from "lucide-react";
import profilePic from "../../public/profile.png";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiGit
} from "react-icons/si";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const techIcons = [
    { Icon: SiJavascript, color: "text-[#F7DF1E]" },
    { Icon: SiReact, color: "text-[#61DAFB]" },
    { Icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { Icon: SiTypescript, color: "text-[#3178C6]" },
    { Icon: SiNextdotjs, color: "text-black" },
    { Icon: SiNodedotjs, color: "text-[#339933]" },
    { Icon: SiMongodb, color: "text-[#47A248]" },
    { Icon: SiGit, color: "text-[#F05032]" }
  ];

  return (
    <section className="relative w-full pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10"
      >
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-center text-center order-2 lg:order-1 w-full">
          <motion.div variants={fadeInUp} className="mb-4">
            <p className="text-[10px] font-serif italic tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase">
              2 Years of transforming concepts into <br className="hidden md:block" /> seamless user experiences
            </p>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-2xl md:text-[28px] lg:text-[32px] font-bold tracking-tight mb-8 leading-[1.4] text-zinc-900 dark:text-white w-full max-w-[650px]">
            👨‍💻 As a Full-Stack Engineer, I develop
            and ship high-performance web experiences that don't
            just look great, but they also load fast, rank high, and convert 👨‍💻
          </motion.h1>

          {/* Overlapping Tech Icons */}
          <motion.div variants={fadeInUp} className="flex justify-center -space-x-3 mb-10">
            {techIcons.map((tech, i) => (
              <div
                key={i}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-slate-200 dark:border-black flex items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300 z-10 relative"
              >
                <tech.Icon className={`text-2xl md:text-3xl ${tech.color}`} />
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#projects" className="group flex items-center justify-center gap-3 bg-white/50 dark:bg-[#0a0a0a]/80 border-2 border-slate-300 dark:border-indigo-500/50 text-slate-900 dark:text-white px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all hover:bg-slate-100 dark:hover:bg-indigo-500/10 backdrop-blur-sm w-full sm:w-auto">
              See My Work
              <MousePointerClick size={18} className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-white transition-colors" />
            </a>
            <a href="/resume.pdf" download="Yahya_Benjdy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white/50 dark:bg-[#0a0a0a]/80 border-2 border-slate-300 dark:border-indigo-500/50 text-slate-900 dark:text-white px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all hover:bg-slate-100 dark:hover:bg-indigo-500/10 backdrop-blur-sm w-full sm:w-auto">
              Download My Resume
              <Download size={18} className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Image Container */}
        <div className="flex flex-col items-center justify-center w-full order-1 lg:order-2">
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center w-full">
            <h2 className="text-3xl md:text-[40px] font-medium tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              Hi 👋 I'm <span className="text-blue-600 dark:text-yellow-500 font-bold">YAHYA</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] flex items-center justify-center"
          >
            {/* Extremely Strong Purple/Pink Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 dark:from-fuchsia-600 dark:to-purple-600 blur-[70px] opacity-40 dark:opacity-60 animate-blob -z-10" />

            {/* The actual morphing image container */}
            <div className="relative w-full h-full border-[6px] border-white dark:border-white/90 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.2)] z-10 bg-white dark:bg-zinc-900 animate-blob">
              <Image
                src={profilePic}
                alt="Yahya Benjdy"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}