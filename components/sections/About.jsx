"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin, GraduationCap, Trophy, Rocket, ExternalLink, Code2,
  Briefcase, Globe
} from "lucide-react";
import CountUp from "react-countup";
import { SITE, STATS } from "@/lib/constants";

// ── Stat Card ─────────────────────────────────────────────────
function StatCard({ label, value, suffix, delay, icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="pro-card text-center p-5 group"
    >
      <div
        className="text-3xl font-bold gradient-text mb-1"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {inView ? (
          <CountUp end={value} duration={2} decimals={value % 1 !== 0 ? 1 : 0} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{label}</p>
    </motion.div>
  );
}

// ── Highlights ────────────────────────────────────────────────
const highlights = [
  {
    icon: GraduationCap,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-l-violet-500",
    label: "CSE @ HSTU",
    sub: "3rd Year Undergraduate",
  },
  {
    icon: Code2,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-l-cyan-500",
    label: "Full Stack Developer",
    sub: "1.5+ Years Experience",
  },
  {
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-l-amber-500",
    label: "Competitive Programmer",
    sub: "1.5+ Years · 500+ Problems",
  },
  {
    icon: Rocket,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-l-pink-500",
    label: "Aspiring Entrepreneur",
    sub: "Web Solution Company — Soon",
  },
  {
    icon: MapPin,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-l-emerald-500",
    label: "Dinajpur, Bangladesh",
    sub: "Open to Remote Work",
  },
];

const stats = [
  { label: "Projects Built", value: 10, suffix: "+", delay: 0 },
  { label: "Problems Solved", value: 500, suffix: "+", delay: 0.1 },
  { label: "Tech Stack", value: 15, suffix: "+", delay: 0.2 },
  { label: "Years Coding", value: 1.5, suffix: "+", delay: 0.3 },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ── Section Header ── */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <span className="section-header-tag">
                <Code2 className="w-3 h-3" />
                Who Am I
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Left: VS Code Card ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="vscode-block w-full max-w-md">
                {/* Titlebar */}
                <div className="vscode-titlebar">
                  <div className="flex gap-1.5 mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="vscode-tab">maruf.js</div>
                </div>

                {/* Editor body */}
                <div className="flex overflow-x-auto code-scroll">
                  {/* Line numbers */}
                  <div className="vscode-gutter flex-shrink-0">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="text-[#3c3f58] text-xs leading-[1.8]">{i + 1}</div>
                    ))}
                  </div>

                  {/* Code content */}
                  <div className="vscode-content flex-1">
                    <div>
                      <span className="token-keyword">const</span>{" "}
                      <span className="token-var-name">maruf</span>{" "}
                      <span className="token-punctuation">= {"{"}</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">name</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;Md. Maruf Ur Rahman&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">role</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;Full Stack Dev&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">mobile</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;Flutter Dev&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">university</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;HSTU, CSE&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">year</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-number">2026</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">cp</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;500+ solved&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">stack</span>
                      <span className="token-punctuation">: [</span>
                    </div>
                    <div className="pl-10">
                      <span className="token-string">&apos;React&apos;</span>
                      <span className="token-punctuation">, </span>
                      <span className="token-string">&apos;Next.js&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-10">
                      <span className="token-string">&apos;Node.js&apos;</span>
                      <span className="token-punctuation">, </span>
                      <span className="token-string">&apos;Flutter&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-10">
                      <span className="token-string">&apos;MongoDB&apos;</span>
                      <span className="token-punctuation">, </span>
                      <span className="token-string">&apos;Firebase&apos;</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-punctuation">],</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">dream</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;Entrepreneur 🚀&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div className="pl-5">
                      <span className="token-property">status</span>
                      <span className="token-punctuation">: </span>
                      <span className="token-string">&apos;available&apos;</span>
                      <span className="token-punctuation">,</span>
                    </div>
                    <div>
                      <span className="token-punctuation">{"}"}</span>
                    </div>
                    <div className="mt-1">
                      <span className="token-comment">// Let&apos;s build something great!</span>
                    </div>
                    {/* Blinking cursor line */}
                    <div className="flex items-center gap-0.5 mt-1">
                      <span className="token-punctuation">&nbsp;</span>
                      <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-blink opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="px-4 py-1.5 bg-[#181825] border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#6c7086]">JavaScript</span>
                    <span className="text-[10px] text-[#6c7086]">UTF-8</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400">Available for hire</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Text & Highlights ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
                <p>
                  I&apos;m{" "}
                  <strong className="text-foreground font-semibold">Md. Maruf</strong> — a passionate
                  Full Stack Web Developer and Backend Enthusiast currently pursuing my BSc in
                  Computer Science &amp; Engineering at{" "}
                  <a
                    href={SITE.universityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1 hover:underline font-medium"
                  >
                    {SITE.university}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  .
                </p>
                <p>
                  I love building{" "}
                  <strong className="text-foreground">real-world applications</strong>{" "}
                  — from full-stack web platforms to cross-platform mobile apps. I&apos;ve been
                  into competitive programming for{" "}
                  <strong className="text-foreground">1.5+ years</strong>, solving 500+ problems
                  across Codeforces, LeetCode, and CodeChef.
                </p>
                <p>
                  I specialize in the{" "}
                  <strong className="text-foreground">MERN stack</strong>, Next.js, TypeScript, and
                  Flutter — equally comfortable writing performant backend APIs and polished, responsive
                  UIs. Soon launching a{" "}
                  <strong className="text-foreground">web solution company</strong> to help businesses
                  build their digital presence.
                </p>
              </div>

              {/* Highlight Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  const isLast = i === highlights.length - 1 && highlights.length % 2 !== 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border border-border/60 border-l-2 ${item.border} bg-card hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5 ${isLast ? "sm:col-span-2" : ""}`}
                    >
                      <div className={`p-2 rounded-lg ${item.bg} flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-xs text-foreground truncate">{item.label}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{item.sub}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ── Stats Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
