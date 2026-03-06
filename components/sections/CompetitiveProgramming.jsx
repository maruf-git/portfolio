"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { CP_PROFILES } from "@/lib/constants";

function CPCard({ profile, index, inView }) {
  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group block p-6 rounded-2xl bg-linear-to-br ${profile.bgColor} border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            {profile.platform}
          </h3>
          <p className="text-muted-foreground text-sm font-mono mt-0.5">@{profile.handle}</p>
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <div
        className="text-2xl font-extrabold mb-2"
        style={{ color: profile.color }}
      >
        {profile.rating}
      </div>
      <p className="text-muted-foreground text-sm">{profile.description}</p>
    </motion.a>
  );
}

export default function CompetitiveProgramming() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cp" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Competitive Programming
            </p>
            <h2 className="text-4xl font-extrabold">
              CP <span className="gradient-text">Profiles</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              1.5+ years of competitive programming. Problem-solving is my passion.
            </p>
          </div>

          {/* CP Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {CP_PROFILES.map((profile, i) => (
              <CPCard key={profile.platform} profile={profile} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
