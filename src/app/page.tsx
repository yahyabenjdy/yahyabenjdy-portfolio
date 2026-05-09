"use client";

import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Code2,
  Database,
  Layout,
  Sparkles,
  ExternalLink,
  MonitorSmartphone,
  Network,
  MessageSquareCode,
  Bot,
  Rocket
} from "lucide-react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiGitlab, 
  SiVercel, 
  SiNetlify,
  SiGooglegemini
} from "react-icons/si";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505] text-[#ededed]">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32 flex flex-col gap-32">
        {/* HERO SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10"
        >
          {/* LEFT: Text Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6">
              <Sparkles size={14} />
              <span>Available for new opportunities</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Yahya Benjdy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Full Stack Engineer
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
              Specializing in the MERN stack, Next.js, AI prompt engineering, and creating scalable digital platforms.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-medium transition-colors hover:bg-white/10">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Image Placeholder */}
          <motion.div 
            variants={fadeInUp} 
            className="relative mx-auto lg:ml-auto lg:mr-0 w-64 h-64 sm:w-80 sm:h-80 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              {/* Ambient glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
              
              {/* The actual image container */}
              <div className="relative w-full h-full rounded-full border border-white/10 glass-card flex items-center justify-center overflow-hidden">
                <Image 
                  src={profilePic} 
                  alt="Yahya Benjdy" 
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
              
              {/* Decorative rings for premium feel */}
              <div className="absolute -inset-4 border border-blue-500/20 rounded-full pointer-events-none" />
              <div className="absolute -inset-8 border border-white/5 rounded-full pointer-events-none hidden sm:block" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">About Me</h2>
          <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-xl lg:text-2xl leading-relaxed text-zinc-300 relative z-10 font-light">
              Motivated Full-Stack Developer and AI enthusiast with practical experience building high-performance web applications and integrating modern AI tools. Eager to leverage a unique blend of technical skills, AI-assisted workflows, and creative problem-solving to build intuitive, user-centric platforms.
            </p>
          </div>
        </motion.section>

        {/* SKILLS MATRIX */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">Skills Matrix</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Front-End", 
                icon: Layout, 
                skills: [
                  { name: "JavaScript", Icon: SiJavascript },
                  { name: "TypeScript", Icon: SiTypescript },
                  { name: "React", Icon: SiReact },
                  { name: "Next.js", Icon: SiNextdotjs },
                  { name: "Tailwind CSS", Icon: SiTailwindcss },
                  { name: "Responsive UI", Icon: MonitorSmartphone }
                ] 
              },
              { 
                title: "Back-End", 
                icon: Database, 
                skills: [
                  { name: "Node.js", Icon: SiNodedotjs },
                  { name: "Express.js", Icon: SiExpress },
                  { name: "MongoDB", Icon: SiMongodb },
                  { name: "REST APIs", Icon: Network }
                ] 
              },
              { 
                title: "Infrastructure", 
                icon: Code2, 
                skills: [
                  { name: "Git", Icon: SiGit },
                  { name: "GitHub", Icon: SiGithub },
                  { name: "GitLab", Icon: SiGitlab },
                  { name: "Vercel", Icon: SiVercel },
                  { name: "Netlify", Icon: SiNetlify }
                ] 
              },
              { 
                title: "AI & Workflows", 
                icon: Sparkles, 
                skills: [
                  { name: "Prompt Engineering", Icon: MessageSquareCode },
                  { name: "Gemini", Icon: SiGooglegemini },
                  { name: "AI Agents", Icon: Bot },
                  { name: "Google Antigravity", Icon: Rocket }
                ] 
              },
            ].map((group, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <group.icon size={20} />
                </div>
                <h3 className="text-lg font-medium">{group.title}</h3>
                <ul className="flex flex-col gap-3 text-zinc-400">
                  {group.skills.map(skill => (
                    <li key={skill.name} className="flex items-center gap-3">
                      <skill.Icon className="w-[18px] h-[18px] text-zinc-300 group-hover:text-blue-400 transition-colors" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">Experience</h2>
          <div className="relative border-l border-white/10 pl-8 ml-4 lg:ml-0">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 ring-4 ring-[#050505]" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-medium">Full Stack Developer Intern <span className="text-zinc-500">@ DigitalSens</span></h3>
              <span className="text-zinc-400 font-mono text-sm bg-white/5 px-3 py-1 rounded-full w-fit">Oct 2025 - Feb 2026</span>
            </div>
            <ul className="flex flex-col gap-3 text-zinc-300 mt-6">
              {[
                <span key="1">Designed and developed a comprehensive digital platform for GMED (<a href="https://gmed.ma" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline transition-colors">gmed.ma</a>), an accessible, high-performance web application to showcase medical German language programs.</span>,
                "Leveraged Google Antigravity and Gemini to rapidly generate boilerplate code and mapped out the technical architecture.",
                "Built a highly responsive front-end utilizing React, Tailwind CSS, and prompt-driven component generation.",
                "Engineered the backend using Node.js, Express.js, and MongoDB to manage dynamic class schedules and student registrations, followed by AI-assisted code audits before cPanel deployment."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-blue-500 shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* HIGHLIGHTED PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">Highlighted Projects</h2>
          <div className="group relative glass-card rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500">
            <div className="p-8 lg:p-12 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Dar Tazart</h3>
                  <p className="text-blue-400 font-medium">E-Commerce Platform</p>
                </div>
                <a href="https://dartazart.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-zinc-300 hover:text-white">
                  <ExternalLink size={20} />
                </a>
              </div>
              <ul className="flex flex-col gap-3 text-zinc-300 mt-4">
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-blue-500 shrink-0 mt-1" />
                  <span className="leading-relaxed">Engineered a high-performance web application utilizing Next.js, React, TypeScript, and Tailwind CSS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-blue-500 shrink-0 mt-1" />
                  <span className="leading-relaxed">Architected a "Smart Shop Engine" with Prisma ORM for dynamic category generation and custom inventory sorting algorithms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-blue-500 shrink-0 mt-1" />
                  <span className="leading-relaxed">Managed global state using React Context API for a localized shopping cart and multi-language translation (English, French, Arabic).</span>
                </li>
              </ul>
            </div>
            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10 pointer-events-none" />
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8">Education</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Dual-Mode Professional Training in AI", school: "Incubateur Digital Solidaire", year: "2026" },
              { title: "Full Stack Software Developer Certificate", school: "IBM", year: "2023" },
              { title: "Front-End Engineer Career Path", school: "Codecademy", year: "2022" },
              { title: "Baccalaureate in Economic Sciences", school: "Lalla Aicha High School", year: "2021" },
            ].map((edu, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="font-mono text-sm text-zinc-400">{edu.year}</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg leading-tight mb-1">{edu.title}</h4>
                  <p className="text-zinc-500">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT / FOOTER */}
        <motion.footer
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pt-20 pb-10 border-t border-white/10 mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's build something extraordinary.</h2>
              <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
                Open for new opportunities, collaborations, or just a chat about technology and AI.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/yahyabenjdy" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://github.com/yahyabenjdy" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:yahyabenjdy044@gmail.com" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-zinc-300 group-hover:text-white transition-colors">yahyabenjdy044@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span>+212 6 42 63 08 29</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>Salé, Morocco</span>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center text-sm text-zinc-600 flex flex-col items-center gap-2">
            <p>© {new Date().getFullYear()} Yahya Benjdy. All rights reserved.</p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
