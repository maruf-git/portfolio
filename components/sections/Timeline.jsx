"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Trophy, Code2, Rocket, Clock } from "lucide-react";
import { TIMELINE } from "@/lib/constants";

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    dot: "bg-violet-500 border-violet-400",
    border: "border-l-violet-500",
    glow: "shadow-violet-500/20",
    label: "Education",
  },
  achievement: {
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    dot: "bg-amber-500 border-amber-400",
    border: "border-l-amber-500",
    glow: "shadow-amber-500/20",
    label: "Achievement",
  },
  skill: {
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    dot: "bg-cyan-500 border-cyan-400",
    border: "border-l-cyan-500",
    glow: "shadow-cyan-500/20",
    label: "Skill",
  },
  entrepreneurship: {
    icon: Rocket,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    dot: "bg-pink-500 border-pink-400",
    border: "border-l-pink-500",
    glow: "shadow-pink-500/20",
    label: "Venture",
  },
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="section-padding bg-muted/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <span className="section-header-tag">
                <Clock className="w-3 h-3" />
                Journey
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              My <span className="gradient-text">Timeline</span>
            </h2>
          </div>

          {/* ── Timeline ── */}
          <div className="relative">
            {/* Gradient vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-px rounded-full opacity-30" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => {
                const config = typeConfig[item.type] || typeConfig.skill;
                const Icon = config.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-start md:items-center md:justify-center`}
                  >
                    {/* ── Dot ── */}
                    <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-2.5 mt-2 md:mt-0 z-10`}>
                      <div className={`w-5 h-5 rounded-full border-2 ${config.dot} flex items-center justify-center shadow-lg ${config.glow}`}>
                        <div className="w-2 h-2 rounded-full bg-background" />
                      </div>
                      {/* Pulse ring for the first (latest) item */}
                      {i === 0 && (
                        <div className={`absolute inset-0 rounded-full border ${config.dot.replace("bg-", "border-").split(" ")[0]} animate-ping opacity-30`} />
                      )}
                    </div>

                    {/* ── Year label (desktop) ── */}
                    <div className={`hidden md:flex md:w-5/12 ${isLeft ? "justify-end" : "justify-start"}`}>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-border/60">
                        <Icon className={`w-3.5 h-3.5 ${config.color}`} />
                        <span className={`font-bold text-sm font-mono ${config.color}`}>{item.year}</span>
                      </div>
                    </div>

                    {/* ── Card ── */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 p-5 rounded-2xl border border-border/60 border-l-2 ${config.border} bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${config.glow}`}>
                      {/* Mobile: type badge + year */}
                      <div className="flex items-center gap-2 mb-3 md:hidden">
                        <div className={`p-1 rounded-md ${config.bg}`}>
                          <Icon className={`w-3 h-3 ${config.color}`} />
                        </div>
                        <span className={`font-bold text-xs font-mono ${config.color}`}>{item.year}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${config.bg} ${config.color} font-semibold uppercase tracking-wide`}>
                          {config.label}
                        </span>
                      </div>

                      {/* Desktop: type badge */}
                      <div className="hidden md:flex items-center gap-2 mb-3">
                        <div className={`p-1 rounded-md ${config.bg}`}>
                          <Icon className={`w-3 h-3 ${config.color}`} />
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${config.bg} ${config.color} font-semibold uppercase tracking-wide`}>
                          {config.label}
                        </span>
                      </div>

                      <h3
                        className="font-bold text-base text-foreground mb-0.5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className={`text-xs font-semibold ${config.color} mb-2`}>{item.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
