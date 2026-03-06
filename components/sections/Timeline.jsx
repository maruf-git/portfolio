"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const typeColors = {
    education: "border-violet-500 bg-violet-500",
    achievement: "border-yellow-500 bg-yellow-500",
    entrepreneurship: "border-cyan-500 bg-cyan-500",
    skill: "border-green-500 bg-green-500",
  };

  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Journey
            </p>
            <h2 className="text-4xl font-extrabold">
              My <span className="gradient-text">Timeline</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-purple-400 to-cyan-400 transform md:-translate-x-px" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                const dotColor = typeColors[item.type] || "border-primary bg-primary";

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start md:items-center md:justify-center`}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-2 ${dotColor} transform md:-translate-x-2.5 mt-1.5 md:mt-0 z-10`}
                    />

                    {/* Year */}
                    <div
                      className={`hidden md:block md:w-5/12 ${isLeft ? "text-right" : "text-left"}`}
                    >
                      <span className="text-primary font-bold font-mono">{item.year}</span>
                    </div>

                    {/* Card */}
                    <div className="ml-12 md:ml-0 md:w-5/12 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors">
                      <span className="text-primary font-bold font-mono text-sm md:hidden">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-lg text-foreground mt-1 md:mt-0">{item.title}</h3>
                      <p className="text-primary text-sm font-medium">{item.subtitle}</p>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
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
