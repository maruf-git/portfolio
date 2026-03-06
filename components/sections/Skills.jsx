"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/constants";

const categoryConfig = {
  languages: {
    title: "Languages",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  },
  frontend: {
    title: "Frontend & Mobile",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  backend: {
    title: "Backend",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
    badge: "bg-green-500/10 text-green-400 border-green-500/30",
  },
  databases: {
    title: "Databases & ORMs",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  },
  tools: {
    title: "Tools & More",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/30",
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              What I Know
            </p>
            <h2 className="text-4xl font-extrabold">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              A diverse set of technologies I use to build full-stack web and mobile applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([key, items], catIdx) => {
              const config = categoryConfig[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${config.color} border ${config.border} hover:shadow-lg transition-all hover:-translate-y-1`}
                >
                  <h3 className="font-bold text-lg mb-4 text-foreground">{config.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: catIdx * 0.1 + i * 0.05 }}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${config.badge}`}
                        >
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Experience highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 col-span-1 md:col-span-2 lg:col-span-1"
            >
              <h3 className="font-bold text-lg mb-4 gradient-text">Programming Focus</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Full Stack Web</span>
                    <span className="text-primary font-semibold">90%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "90%" } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Backend / APIs</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "85%" } : {}}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Competitive Programming</span>
                    <span className="text-primary font-semibold">75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "75%" } : {}}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Mobile Development</span>
                    <span className="text-primary font-semibold">70%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: "70%" } : {}}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
