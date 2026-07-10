"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { STATIC_PROJECTS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

const categoryColors = {
  web: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  mobile: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

const tabs = ["all", "web", "mobile"];

// Tech pill colors (cycling)
const techPillColors = [
  "bg-violet-500/10 text-violet-400 border-violet-500/25",
  "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  "bg-pink-500/10 text-pink-400 border-pink-500/25",
  "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "bg-sky-500/10 text-sky-400 border-sky-500/25",
];

function ProjectCard({ project, index, inView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        transform: hovered ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-6px)` : "perspective(1000px) rotateX(0) rotateY(0) translateY(0)",
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: hovered ? "0 25px 60px -10px rgba(0, 212, 255, 0.15), 0 8px 25px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.05)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-2xl bg-card border border-border overflow-hidden"
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] via-[#6C63FF] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* ── Image ── */}
      <div
        className={`relative w-full bg-gradient-to-br from-violet-900/40 via-card to-cyan-900/30 overflow-hidden flex-shrink-0 ${
          project.category === "mobile"
            ? "aspect-[3/3.5]"
            : "aspect-[16/9]"
        }`}
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
              project.category === "mobile" ? "object-top" : "object-center"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
            {project.category === "mobile" ? "📱" : "🌐"}
          </div>
        )}

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-center pb-5 gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00d4ff] text-[#080b14] text-xs font-bold hover:scale-105 transition-transform shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" />
              {project.category === "mobile" ? "View App" : "Live Demo"}
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3 h-3" />
              Code
            </a>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-bold border px-2.5 py-1 rounded-full uppercase tracking-wide backdrop-blur-sm ${categoryColors[project.category] || categoryColors.web}`}>
            {project.category === "web" ? "Web App" : "Mobile App"}
          </span>
        </div>
      </div>

      {/* ── Card Content ── */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={tech}
              className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${techPillColors[i % techPillColors.length]}`}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground font-medium">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons (visible on non-hover / mobile) */}
        <div className="flex gap-2 mt-auto md:group-hover:opacity-0 md:transition-opacity">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-semibold hover:bg-primary/20 transition-all"
            >
              <ExternalLink className="w-3 h-3" />
              {project.category === "mobile" ? "View App" : "Live Demo"}
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-border text-muted-foreground text-xs font-semibold hover:border-primary/40 hover:text-foreground transition-all"
            >
              <Github className="w-3 h-3" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ limit, showSeeMore = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState(STATIC_PROJECTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          activeTab === "all" ? "/api/projects" : `/api/projects?category=${activeTab}`
        );
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setProjects(data.data);
        } else {
          const filtered =
            activeTab === "all"
              ? STATIC_PROJECTS
              : STATIC_PROJECTS.filter((p) => p.category === activeTab);
          setProjects(filtered);
        }
      } catch {
        const filtered =
          activeTab === "all"
            ? STATIC_PROJECTS
            : STATIC_PROJECTS.filter((p) => p.category === activeTab);
        setProjects(filtered);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [activeTab]);

  return (
    <section id="projects" className="section-padding relative">
      {/* Subtle background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <span className="section-header-tag">
                <Layers className="w-3 h-3" />
                My Work
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Real-world applications I&apos;ve built — from full-stack web platforms to mobile apps and backend APIs.
            </p>
          </div>

          {/* ── Filter Tabs ── */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-1 p-1 rounded-2xl border border-border/60 glass-card">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-200 hover:cursor-pointer ${
                    activeTab === tab
                      ? "btn-gradient text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── Projects Grid ── */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 rounded-2xl border border-border shimmer" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, limit || projects.length).map((project, i) => (
                <ProjectCard key={project._id} project={project} index={i} inView={inView} />
              ))}
            </div>
          )}

          {/* ── See More ── */}
          {showSeeMore && (
            <div className="mt-14 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 group neon-border hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                See All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          {projects.length === 0 && !loading && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found in this category yet.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
