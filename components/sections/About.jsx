"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Trophy, Rocket, ExternalLink, Code2 } from "lucide-react";
import CountUp from "react-countup";
import { SITE, STATS } from "@/lib/constants";

function StatCard({ label, value, suffix, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
    >
      <div className="text-3xl font-extrabold gradient-text">
        {inView ? (
          <CountUp
            end={value}
            duration={2}
            decimals={value % 1 !== 0 ? 1 : 0}
            suffix={suffix}
          />
        ) : (
          <span>
            0{suffix}
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm mt-1 font-medium">{label}</p>
    </motion.div>
  );
}

const highlights = [
  {
    icon: GraduationCap,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    label: "CSE @ HSTU",
    sub: "3rd Year Undergraduate",
  },
   {
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    label: "Full Stack Developer",
    sub: "1.5+ Years Experience",
  },
  {
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    label: "Problem Solving",
    sub: "1.5+ Years · 500+ Problems",
  },
  {
    icon: Rocket,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    label: "Aspiring Entrepreneur",
    sub: "Web Solution Company Incoming",
  },
  {
    icon: MapPin,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    label: "Dinajpur, Bangladesh",
    sub: "Open to Remote Work",
  },
 
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Who Am I
            </p>
            <h2 className="text-4xl font-extrabold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Avatar / Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 blur-md opacity-50" />
                {/* Avatar box */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-violet-900/80 via-card to-cyan-900/40 border border-border flex items-center justify-center overflow-hidden">
                  {/* Code block decoration */}
                  <div className="text-center space-y-2 font-mono text-sm p-6">
                    <p className="text-muted-foreground">
                      <span className="text-cyan-400">const</span>{" "}
                      <span className="text-yellow-400">maruf</span>{" "}
                      <span className="text-foreground">= {"{"}</span>
                    </p>
                    <p className="text-muted-foreground pl-4">
                      <span className="text-violet-400">role</span>
                      <span className="text-foreground">: </span>
                      <span className="text-green-400">&apos;FullStack&apos;</span>
                      <span className="text-foreground">,</span>
                    </p>
                    <p className="text-muted-foreground pl-4">
                      <span className="text-violet-400">year</span>
                      <span className="text-foreground">: </span>
                      <span className="text-orange-400">2026</span>
                      <span className="text-foreground">,</span>
                    </p>
                    <p className="text-muted-foreground pl-4">
                      <span className="text-violet-400">cp</span>
                      <span className="text-foreground">: </span>
                      <span className="text-green-400">&apos;500+ Solved&apos;</span>
                      <span className="text-foreground">,</span>
                    </p>
                    <p className="text-muted-foreground pl-4">
                      <span className="text-violet-400">dream</span>
                      <span className="text-foreground">: </span>
                      <span className="text-pink-400">&apos;Entrepreneur&apos;</span>
                    </p>
                    <p className="text-foreground">{"}"}</p>
                    <div className="mt-4 flex items-center gap-2 text-muted-foreground text-xs">
                      <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                      Available for hire
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m <strong className="text-foreground">Md. Maruf</strong> — a passionate
                  Full Stack Web Developer and Backend Enthusiast currently pursuing my BSc in
                  Computer Science &amp; Engineering at{" "}
                  <a
                    href={SITE.universityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    {SITE.university}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  .
                </p>
                <p>
                  I love building <strong className="text-foreground">real-world applications</strong>{" "}
                  — from full-stack web platforms to cross-platform mobile apps. I&apos;ve been
                  competitive programming for <strong className="text-foreground">1.5+ years</strong>,
                  solving problems on Codeforces, LeetCode, and CodeChef, which has sharpened my
                  problem-solving mindset and programming skill.
                </p>
                <p>
                  I specialize in the <strong className="text-foreground">MERN stack</strong>, Next.js,
                  TypeScript, and Flutter. I&apos;m equally comfortable writing performant backend APIs
                  and beautiful, responsive UIs. I&apos;m also an aspiring{" "}
                  <strong className="text-foreground">entrepreneur</strong> — soon launching a web
                  solution company to help businesses build their digital presence.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  // Make the last item span full width if there's an odd number of items
                  const isLastOddItem = i === highlights.length - 1 && highlights.length % 2 !== 0;
                  
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors ${isLastOddItem ? "sm:col-span-2" : ""}`}
                    >
                      <div className={`p-2 rounded-lg ${item.bg}`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {STATS.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 0.1} />
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
