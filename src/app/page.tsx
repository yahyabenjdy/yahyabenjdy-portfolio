"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeGlobe from "@/components/ThreeGlobe";
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
  Rocket,
  Send
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
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    // 1. Grab the form BEFORE any 'await' happens
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", "1403fdad-d462-4389-89d4-9c7d38063cc2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully! 😎");
      // 2. Use the saved form reference to reset it
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
    <main className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-[#020202] text-slate-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Global Ambient Glows */}
      <div className="fixed top-[5%] -left-32 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[20%] -right-32 w-[30rem] h-[30rem] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[10%] -left-32 w-[30rem] h-[30rem] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[20%] -right-32 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <div className="max-w-5xl mx-auto px-6 pt-20 pb-6 lg:pt-32 lg:pb-12 flex flex-col gap-32">
          {/* SERVICES SECTION */}
          <motion.section
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full flex flex-col items-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-16 text-center w-full">
              The <span className="text-purple-600 dark:text-purple-500">Services</span> I'm Providing
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group border border-slate-200 dark:border-white/10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl mb-4 relative z-10">👷</div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-6 text-slate-900 dark:text-white relative z-10 leading-tight">
                  Project<br />Ownership
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10 font-medium">
                  I offer full project management, ensuring seamless collaboration with designers to create visually appealing and high-performing websites. I will implement all necessary features while optimizing for mobile responsiveness and user experience. With strong communication, I'll keep you actively involved throughout the entire development process.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group border border-slate-200 dark:border-white/10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl mb-4 relative z-10">🚀</div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-6 text-slate-900 dark:text-white relative z-10 leading-tight">
                  Performance<br />Optimization
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10 font-medium">
                  I provide a comprehensive audit of your website's performance, focusing on Core Web Vitals to identify areas for improvement. I will develop and implement a tailored optimization plan to maximize speed, enhance SEO, and boost conversion rates. My approach ensures your site meets the highest performance standards, leading to better search rankings and user engagement.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group border border-slate-200 dark:border-white/10 flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl mb-4 relative z-10">🤝</div>
                <h3 className="text-xl font-black uppercase tracking-wide mb-6 text-slate-900 dark:text-white relative z-10 leading-tight">
                  Team<br />Collaboration
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed relative z-10 font-medium">
                  I'm available to join your existing or new team, contributing to larger projects with a focus on specific aspects like UI development, performance auditing, or testing. With strong communication skills and a proven track record, I bring valuable experience to any team, ensuring smooth collaboration and high-quality outcomes.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* SKILLS MATRIX */}
          <motion.section
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-500 uppercase mb-8">Skills Matrix</motion.h2>
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
                <motion.div key={i} variants={fadeInUp} className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <group.icon size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{group.title}</h3>
                  <ul className="flex flex-col gap-3 text-slate-600 dark:text-zinc-400">
                    {group.skills.map(skill => (
                      <li key={skill.name} className="flex items-center gap-3">
                        <skill.Icon className="w-[18px] h-[18px] text-slate-400 dark:text-zinc-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
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
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-500 uppercase mb-8">Experience</h2>
            <div className="relative border-l border-black/10 dark:border-white/10 pl-8 ml-4 lg:ml-0">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 ring-4 ring-slate-50 dark:ring-[#020202]" />
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-medium text-slate-900 dark:text-white">Full Stack Developer Intern <span className="text-zinc-500">@ DigitalSens</span></h3>
                <span className="text-slate-600 dark:text-zinc-400 font-mono text-sm bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full w-fit">Oct 2025 - Feb 2026</span>
              </div>
              <ul className="flex flex-col gap-3 text-slate-700 dark:text-zinc-300 mt-6">
                {[
                  <span key="1">Designed and developed a comprehensive digital platform for GMED (<a href="https://gmed.ma" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">gmed.ma</a>), an accessible, high-performance web application to showcase medical German language programs.</span>,
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
            <h2 className="text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-500 uppercase mb-8">Highlighted Projects</h2>
            <div className="group relative glass-card rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500">
              <div className="p-8 lg:p-12 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Dar Tazart</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">E-Commerce Platform</p>
                  </div>
                  <a href="https://dartazart.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 transition-all text-slate-500 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <ul className="flex flex-col gap-3 text-slate-700 dark:text-zinc-300 mt-4">
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
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-zinc-500 dark:text-zinc-500 uppercase mb-8">Education</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Dual-Mode Professional Training in AI", school: "Incubateur Digital Solidaire", year: "2026" },
                { title: "Full Stack Software Developer Certificate", school: "IBM", year: "2023" },
                { title: "Front-End Engineer Career Path", school: "Codecademy", year: "2022" },
                { title: "Baccalaureate in Economic Sciences", school: "Lalla Aicha High School", year: "2021" },
              ].map((edu, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:bg-black/5 dark:hover:bg-white/[0.04] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                    <span className="font-mono text-sm text-slate-500 dark:text-zinc-400">{edu.year}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg leading-tight mb-1 text-slate-900 dark:text-white">{edu.title}</h4>
                    <p className="text-slate-500 dark:text-zinc-500">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CONTACT / FOOTER */}
          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="pt-20 pb-4 mt-10"
          >
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                Let's Build Something <span className="text-purple-600 dark:text-purple-500">GREAT</span> Together!
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start mb-20 max-w-5xl mx-auto">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                <p className="text-slate-600 dark:text-zinc-400 max-w-sm italic">
                  Have a project in mind or just building a team and looking for your next superstar?
                </p>
                <h3 className="text-2xl font-black tracking-widest text-slate-900 dark:text-white uppercase flex items-center justify-center lg:justify-start gap-3 w-full">
                  <span className="text-3xl">😎</span> I'M YOUR GUY !
                </h3>

                {/* Static Dark Globe Graphic */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mt-12 mx-auto lg:mx-0">
                  {/* Outer orbital rings */}
                  <div className="absolute inset-0 border border-blue-500/20 rounded-full rotate-45 transform scale-110" />
                  <div className="absolute inset-0 border border-purple-500/20 rounded-full -rotate-12 transform scale-[1.15]" />
                  {/* The Globe */}
                  <div className="absolute inset-0 z-10">
                    <ThreeGlobe />
                  </div>
                  <p className="text-xs text-slate-400 dark:text-zinc-600 italic mt-12 text-center w-full block absolute -bottom-16">
                    (btw, can you stop the globe from turning?)
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN (Form) */}
              <div className="w-full h-full flex flex-col justify-center">
                <div className="bg-[#f8fafc]/80 dark:bg-[#020202]/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                  <p className="text-sm text-slate-600 dark:text-zinc-400 italic mb-8 leading-relaxed">
                    Whether you're ready to get started or just want to chat, fill out the form, and let's explore how we can collaborate to achieve your goals!
                  </p>

                  <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-zinc-200">First name<span className="text-red-500">*</span></label>
                        <input type="text" name="first_name" required placeholder="Lalo" className="w-full bg-white dark:bg-[#111111] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-900 dark:text-zinc-200">Last name</label>
                        <input type="text" name="last_name" placeholder="Salamanca" className="w-full bg-white dark:bg-[#111111] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-900 dark:text-zinc-200">Email Address<span className="text-red-500">*</span></label>
                      <input type="email" name="email" required placeholder="Werner.Zeeeeegler@jmm.com" className="w-full bg-white dark:bg-[#111111] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-900 dark:text-zinc-200">Your Message<span className="text-red-500">*</span></label>
                      <textarea name="message" required rows={5} placeholder="Feel free..." className="w-full bg-white dark:bg-[#111111] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-[#1a1a1a] dark:hover:bg-[#222222] border border-transparent dark:border-white/10 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition-colors mt-2">
                      SEND <Send size={18} />
                    </button>

                    <span className="text-center text-sm font-medium text-slate-600 dark:text-zinc-400 mt-2 block">
                      {result}
                    </span>
                  </form>

                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto px-6">
              <p className="text-slate-600 dark:text-zinc-400 text-sm font-medium">
                Yahya Benjdy | ©{new Date().getFullYear()}
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/yahyabenjdy" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://linkedin.com/in/yahyabenjdy" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}