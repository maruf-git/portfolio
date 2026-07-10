"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, Globe, ArrowRight } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

// ── Social SVGs ────────────────────────────────────────────────
const socialIconMap = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.37 11.37 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.24 3.22c0 4.61-2.81 5.63-5.49 5.92a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 0z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  ),
  codeforces: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4.5 7.5A1.5 1.5 0 013 6V3a1.5 1.5 0 013 0v3a1.5 1.5 0 01-1.5 1.5zM10.5 13.5A1.5 1.5 0 019 12V3a1.5 1.5 0 013 0v9a1.5 1.5 0 01-1.5 1.5zM19.5 21A1.5 1.5 0 0118 19.5v-18a1.5 1.5 0 013 0v18A1.5 1.5 0 0119.5 21z" />
    </svg>
  ),
};

// ─── Smooth Typewriter ─────────────────────────────────────────
// Uses React state + requestAnimationFrame for silky smooth animation
const roles = [
  "Full Stack Web Developer",
  "Flutter App Developer",
  "Backend Engineer",
  "Aspiring Entrepreneur",
];

function Typewriter() {
  const spanRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const phaseRef = useRef("typing"); // typing | pausing | deleting | waiting

  useEffect(() => {
    let raf;
    let lastTime = 0;

    const TYPING_SPEED  = 58;
    const DELETE_SPEED  = 28;
    const PAUSE_AFTER   = 1800;
    const WAIT_BETWEEN  = 380;

    const tick = (now) => {
      const word = roles[indexRef.current];

      if (phaseRef.current === "typing") {
        if (now - lastTime < TYPING_SPEED) { raf = requestAnimationFrame(tick); return; }
        lastTime = now;
        charRef.current = Math.min(charRef.current + 1, word.length);
        if (spanRef.current) spanRef.current.textContent = word.slice(0, charRef.current);
        if (charRef.current >= word.length) {
          phaseRef.current = "pausing";
        }
        raf = requestAnimationFrame(tick);
      }
      else if (phaseRef.current === "pausing") {
        if (now - lastTime < PAUSE_AFTER) { raf = requestAnimationFrame(tick); return; }
        lastTime = now;
        phaseRef.current = "deleting";
        raf = requestAnimationFrame(tick);
      }
      else if (phaseRef.current === "deleting") {
        if (now - lastTime < DELETE_SPEED) { raf = requestAnimationFrame(tick); return; }
        lastTime = now;
        charRef.current = Math.max(charRef.current - 1, 0);
        if (spanRef.current) spanRef.current.textContent = word.slice(0, charRef.current);
        if (charRef.current <= 0) {
          phaseRef.current = "waiting";
        }
        raf = requestAnimationFrame(tick);
      }
      else if (phaseRef.current === "waiting") {
        if (now - lastTime < WAIT_BETWEEN) { raf = requestAnimationFrame(tick); return; }
        lastTime = now;
        indexRef.current = (indexRef.current + 1) % roles.length;
        charRef.current = 0;
        if (spanRef.current) spanRef.current.textContent = "";
        phaseRef.current = "typing";
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span className="inline-flex items-baseline gap-px">
      {/* 
        Using a data-placeholder ensures the span retains height when empty 
        without needing a non-breaking space that might mess up selection.
      */}
      <span
        ref={spanRef}
        className="gradient-text font-bold empty:after:content-['\200b']"
        style={{ minWidth: "1ch" }}
      >
      </span>
      <span
        className="text-blue-400 font-bold animate-blink"
        style={{ lineHeight: "inherit" }}
      >
        |
      </span>
    </span>
  );
}

// ── Animation variants ────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const quickStats = [
  { value: "10+", label: "Projects Built" },
  { value: "500+", label: "Problems Solved" },
  { value: "1.5+", label: "Years Coding" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* ── Dot grid background ── */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* ── Ambient blue blobs ── */}
      <div
        className="absolute -top-48 -left-32 w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.07] dark:opacity-[0.11] pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, #3B82F6, #1D4ED8)",
          transform: "translateZ(0)", 
          willChange: "transform" 
        }}
      />
      <div
        className="absolute bottom-[-80px] right-[-60px] w-[550px] h-[550px] rounded-full blur-[110px] opacity-[0.05] dark:opacity-[0.08] pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, #60A5FA, #3B82F6)",
          transform: "translateZ(0)", 
          willChange: "transform" 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* ════════════════════════════════
              LEFT — Text
          ════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  border: "1px solid rgba(59,130,246,0.3)",
                  background: "rgba(59,130,246,0.08)",
                  color: "#60A5FA",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Open to Work — Available for Hire
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Hello, I&apos;m
              </p>
              <h1
                className="font-bold tracking-tight leading-[1.05]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                }}
              >
                Md. Maruf
                <br />
                <span className="gradient-text">Ur Rahman</span>
              </h1>
            </motion.div>

            {/* Typewriter — fixed height container prevents jumps */}
            <motion.div variants={itemVariants}>
              <div
                className="flex items-center justify-center lg:justify-start"
                style={{ height: "2.25rem" }}
              >
                <p
                  className="text-lg sm:text-xl text-muted-foreground leading-none"
                  style={{ minHeight: "1em" }}
                >
                  <Typewriter />
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-[0.95rem] leading-[1.85] max-w-lg mx-auto lg:mx-0"
            >
              CSE undergraduate at{" "}
              <a
                href={SITE.universityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1 transition-colors"
              >
                {SITE.universityShort}
                <ExternalLink className="w-3 h-3" />
              </a>
              , Bangladesh. I build{" "}
              <strong className="text-foreground font-semibold">scalable web platforms</strong> and{" "}
              <strong className="text-foreground font-semibold">cross-platform mobile apps</strong>{" "}
              that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gradient flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm hover:cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/Maruf_Resume.pdf"
                download
                className="btn-glass flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs text-muted-foreground font-medium tracking-wide">Find me on</span>
              <div className="h-px w-6 bg-border/60" />
              {SOCIAL_LINKS.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-400/40 hover:scale-110 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200"
                >
                  {socialIconMap[link.icon] || <ExternalLink className="w-4 h-4" />}
                </a>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                title="Email"
                className="w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-400/40 hover:scale-110 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z" />
                </svg>
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 justify-center lg:justify-start pt-3 border-t border-border/40"
            >
              {quickStats.map((s) => (
                <div key={s.label} className="pt-3">
                  <p
                    className="text-2xl font-bold gradient-text"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════
              RIGHT — Photo Card
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Corner accent brackets */}
              {[
                { pos: "-top-3 -left-3", h: "from-blue-400 to-transparent", v: "from-blue-400 to-transparent", dir: { h: "right", v: "bottom" } },
                { pos: "-top-3 -right-3", h: "from-indigo-400 to-transparent", v: "from-indigo-400 to-transparent", dir: { h: "left", v: "bottom" } },
                { pos: "-bottom-3 -left-3", h: "from-blue-500 to-transparent", v: "from-blue-500 to-transparent", dir: { h: "right", v: "top" } },
                { pos: "-bottom-3 -right-3", h: "from-blue-400 to-transparent", v: "from-blue-400 to-transparent", dir: { h: "left", v: "top" } },
              ].map((c, i) => (
                <div key={i} className={`absolute ${c.pos} w-9 h-9 pointer-events-none z-20`}>
                  <div className={`absolute ${c.dir.v === "bottom" ? "top-0" : "bottom-0"} ${c.dir.h === "right" ? "left-0" : "right-0"} w-full h-[2px] bg-gradient-to-${c.dir.h} ${c.h} rounded-full`} />
                  <div className={`absolute ${c.dir.v === "bottom" ? "top-0" : "bottom-0"} ${c.dir.h === "right" ? "left-0" : "right-0"} w-[2px] h-full bg-gradient-to-${c.dir.v} ${c.v} rounded-full`} />
                </div>
              ))}

              {/* ── Image card ── */}
              <div
                className="relative overflow-hidden shadow-2xl shadow-blue-900/20 group"
                style={{
                  width: "clamp(270px, 35vw, 410px)",
                  aspectRatio: "4 / 5",
                  borderRadius: "1.25rem",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {/* Fallback bg */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(145deg, #050A14 0%, #0A1628 60%, #071220 100%)" }}
                />

                {/* Photo */}
                <Image
                  src="/me.jpg"
                  alt="Md. Maruf Ur Rahman Munna — Full Stack Developer"
                  fill
                  className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 330px, 410px"
                  priority
                  onError={(e) => { e.target.style.display = "none"; }}
                />

                {/* Vignette depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(5,10,20,0.3) 100%)" }}
                />

                {/* ── Bottom Overlay ── */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10"
                  style={{
                    padding: "4.5rem 1.4rem 1.4rem",
                    background: "linear-gradient(to top, rgba(5,10,20,0.97) 0%, rgba(5,10,20,0.8) 50%, rgba(5,10,20,0.35) 72%, transparent 100%)",
                  }}
                >
                  {/* Available badge */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(52,211,153,0.12)",
                        border: "1px solid rgba(52,211,153,0.35)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
                        Available for Work
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h2
                    className="text-white font-bold leading-tight mb-0.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                    }}
                  >
                    Md. Maruf Ur Rahman
                  </h2>

                  {/* Role */}
                  <p className="text-white/55 text-[11px] font-medium mb-4">
                    Full Stack &amp; Flutter Developer · Bangladesh 🇧🇩
                  </p>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-3.5"
                    style={{ background: "linear-gradient(to right, rgba(59,130,246,0.5), rgba(99,102,241,0.4), transparent)" }}
                  />

                  {/* Tech stack label */}
                  <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.18em] mb-2">
                    Main Tech Stack
                  </p>

                  {/* Tech pills — each in its brand color */}
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: "React.js",  color: "#61DAFB" },
                      { name: "Next.js",   color: "#E5E7EB" },
                      { name: "Node.js",   color: "#68A063" },
                      { name: "Flutter",   color: "#54C5F8" },
                      { name: "MongoDB",   color: "#47A248" },
                      { name: "Firebase",  color: "#FCD34D" },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-[10px] font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: tech.color,
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow behind card */}
              <div
                className="absolute inset-[-24px] -z-10 rounded-[3rem] blur-3xl opacity-[0.1] dark:opacity-[0.15] pointer-events-none"
                style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
