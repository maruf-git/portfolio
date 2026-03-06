"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

const socialIconMap = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.76c-1.09-.74.08-.73.08-.73a2.52 2.52 0 0 1 1.84 1.24 2.55 2.55 0 0 0 3.49 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.37 11.37 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.18 4.64 4.64 0 0 1 1.24 3.22c0 4.61-2.81 5.63-5.49 5.92a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 0z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  ),
  // codeforces: (
  //   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  //     <path d="M4.5 7.5A1.5 1.5 0 013 6V3a1.5 1.5 0 013 0v3a1.5 1.5 0 01-1.5 1.5zM10.5 13.5A1.5 1.5 0 019 12V3a1.5 1.5 0 013 0v9a1.5 1.5 0 01-1.5 1.5zM19.5 21A1.5 1.5 0 0118 19.5v-18a1.5 1.5 0 013 0v18A1.5 1.5 0 0119.5 21z" />
  //   </svg>
  // ),
};

// roles for typing
const roles = [
  "Full Stack Web Developer",
  "Backend Enthusiast",
  "Flutter Developer",
  "Aspiring Entrepreneur",
];

// typing text component
function TypingText({ texts }) {
  const ref = useRef(null);
  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout;
    const type = () => {
      const current = texts[textIndex.current];
      if (deleting.current) {
        charIndex.current--;
        if (ref.current) ref.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === 0) {
          deleting.current = false;
          textIndex.current = (textIndex.current + 1) % texts.length;
          timeout = setTimeout(type, 400);
          return;
        }
        timeout = setTimeout(type, 40);
      } else {
        charIndex.current++;
        if (ref.current) ref.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(type, 2000);
          return;
        }
        timeout = setTimeout(type, 70);
      }
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, [texts]);

  return (
    <span>
      <span ref={ref} className="gradient-text font-bold" />
      <span className="animate-pulse text-primary font-bold">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* Background blobs */}
      <div className="hero-blob w-96 h-96 bg-violet-300 top-20 -left-32 opacity-20 dark:opacity-10" />
      <div className="hero-blob w-80 h-80 bg-cyan-500 bottom-20 -right-20 opacity-20 dark:opacity-10" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left order-2 lg:order-1 pt-8 lg:pt-0"
          >
            {/* <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm border-primary/40 text-primary bg-primary/10 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                Available for Opportunities
              </Badge>
            </motion.div> */}

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Hi, I&apos;m <br />
                <span className="gradient-text">Md. Maruf Ur Rahman Munna</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 min-h-[5rem] sm:min-h-[2.5rem] mt-2">
                <TypingText texts={roles} />
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              CSE undergraduate at{" "}
              <a
                href={SITE.universityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                {SITE.universityShort}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {" "}· Passionate about building scalable architectures and intuitive interfaces for web and mobile platforms.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 h-12"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border hover:bg-accent hover:text-foreground transition-all group h-12"
                asChild
              >
                <a href="/Maruf_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 pt-4"
            >
              <div className="flex items-center gap-4 border-t border-border/50 pt-6 mt-2 w-full max-w-sm mx-auto lg:mx-0 justify-center lg:justify-start">
                <span className="text-sm font-medium text-muted-foreground">Follow me:</span>
                {SOCIAL_LINKS.slice(0, 4).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 shadow-sm"
                    title={link.label}
                  >
                    {socialIconMap[link.icon] || <ExternalLink className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] rounded-full flex-shrink-0">
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-full border-4 border-background overflow-hidden bg-muted shadow-2xl group flex items-center justify-center">
                {/* Fallback pattern if image goes missing */}
                <div className="w-full h-full bg-muted flex items-center justify-center relative">
                  <span className="text-6xl font-bold text-muted-foreground opacity-20 select-none">M</span>
                  
                  {/* Actual Image (me.jpg in public dir) */}
                  <Image
                    src="/me.jpg"
                    alt="Md. Maruf Ur Rahman Munna"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 256px, 320px, 400px"
                    priority
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
            </div>
          </motion.div>

        </div>
        
        {/* Scroll indicator below the grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
