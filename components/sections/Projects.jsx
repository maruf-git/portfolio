"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { STATIC_PROJECTS } from "@/lib/constants";

const categoryColors = {
  web: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  mobile: "bg-green-500/10 text-green-400 border-green-500/30",
  backend: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  fullstack: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

const tabs = ["all", "fullstack", "web", "backend", "mobile"];

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 text-xs bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-yellow-500" />
            Featured
          </span>
        </div>
      )}

      {/* Project image placeholder */}
      <div className="w-full h-44 rounded-xl bg-gradient-to-br from-violet-900/50 via-card to-cyan-900/30 border border-border mb-4 overflow-hidden flex items-center justify-center">
        <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
          {project.category === "mobile" ? "📱" : project.category === "backend" ? "⚙️" : "🌐"}
        </div>
        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer transition-opacity rounded-xl" />
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <span
          className={`shrink-0 text-xs border px-2 py-0.5 rounded-full ${categoryColors[project.category] || categoryColors.fullstack}`}
        >
          {project.category}
        </span>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="text-xs text-muted-foreground px-2 py-0.5">
            +{project.techStack.length - 4} more
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        {project.liveUrl && (
          <Button size="sm" className="flex-1 rounded-xl" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button size="sm" variant="outline" className="flex-1 rounded-xl" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 mr-1.5" />
              Code
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
          // Fallback to static
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
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              My Work
            </p>
            <h2 className="text-4xl font-extrabold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Real-world applications I&apos;ve built — from full-stack web platforms to mobile apps and backend APIs.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex-wrap h-auto gap-1 p-1 bg-muted/50 border border-border rounded-2xl">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="capitalize rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 rounded-2xl bg-card border border-border shimmer" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={project._id} project={project} index={i} inView={inView} />
              ))}
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
