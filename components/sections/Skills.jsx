"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu } from "lucide-react";
import { SKILLS } from "@/lib/constants";

const categoryConfig = {
  languages: {
    title: "Languages",
    icon: "🖥️",
    gradient: "from-violet-500/15 to-violet-500/5",
    border: "border-violet-500/25",
    topBorder: "bg-gradient-to-r from-violet-500 to-violet-400",
    pillBg: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    glow: "hover:shadow-violet-500/10",
  },
  frontend: {
    title: "Frontend & Mobile",
    icon: "🎨",
    gradient: "from-cyan-500/15 to-cyan-500/5",
    border: "border-cyan-500/25",
    topBorder: "bg-gradient-to-r from-cyan-500 to-sky-400",
    pillBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    glow: "hover:shadow-cyan-500/10",
  },
  backend: {
    title: "Backend",
    icon: "⚙️",
    gradient: "from-emerald-500/15 to-emerald-500/5",
    border: "border-emerald-500/25",
    topBorder: "bg-gradient-to-r from-emerald-500 to-green-400",
    pillBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    glow: "hover:shadow-emerald-500/10",
  },
  databases: {
    title: "Databases & ORMs",
    icon: "🗄️",
    gradient: "from-orange-500/15 to-orange-500/5",
    border: "border-orange-500/25",
    topBorder: "bg-gradient-to-r from-orange-500 to-amber-400",
    pillBg: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    glow: "hover:shadow-orange-500/10",
  },
  tools: {
    title: "Tools & More",
    icon: "🛠️",
    gradient: "from-pink-500/15 to-pink-500/5",
    border: "border-pink-500/25",
    topBorder: "bg-gradient-to-r from-pink-500 to-rose-400",
    pillBg: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    glow: "hover:shadow-pink-500/10",
  },
};

const proficiencyBars = [
  { label: "Full Stack Web Dev", pct: 90, from: "#00d4ff", to: "#6C63FF", delay: 0.6 },
  { label: "Backend / APIs", pct: 85, from: "#6C63FF", to: "#a855f7", delay: 0.75 },
  { label: "Mobile (Flutter)", pct: 80, from: "#10b981", to: "#00d4ff", delay: 0.9 },
  { label: "Problem Solving", pct: 72, from: "#f59e0b", to: "#ef4444", delay: 1.05 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6C63FF, #00d4ff)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <span className="section-header-tag">
                <Cpu className="w-3 h-3" />
                What I Know
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              A diverse set of technologies I use to build full-stack web and mobile applications.
            </p>
          </div>

          {/* ── Skills Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(SKILLS).map(([key, items], catIdx) => {
              const config = categoryConfig[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className={`relative rounded-2xl bg-gradient-to-br ${config.gradient} border ${config.border} overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${config.glow}`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${config.topBorder}`} />

                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="text-xl">{config.icon}</span>
                      <h3
                        className="font-bold text-base text-foreground"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {config.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                          className={`skill-pill ${config.pillBg}`}
                        >
                          <span className="text-sm leading-none">{skill.icon}</span>
                          <span className="text-xs">{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* ── Proficiency Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="relative rounded-2xl border border-primary/20 overflow-hidden col-span-1 md:col-span-2 lg:col-span-1"
              style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(108,99,255,0.06))" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#6C63FF]" />

              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="text-xl">🎯</span>
                  <h3
                    className="font-bold text-base gradient-text"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Proficiency
                  </h3>
                </div>

                <div className="space-y-5">
                  {proficiencyBars.map((bar, i) => (
                    <div key={bar.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground font-medium">{bar.label}</span>
                        <span className="font-bold" style={{ color: bar.from }}>{bar.pct}%</span>
                      </div>
                      <div className="h-2 bg-muted/60 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${bar.from}, ${bar.to})` }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${bar.pct}%` } : {}}
                          transition={{ duration: 1, delay: bar.delay, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
