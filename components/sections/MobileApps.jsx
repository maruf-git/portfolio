"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ExternalLink, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATIC_APPS } from "@/lib/constants";

export default function MobileApps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mobile-apps" className="section-padding bg-muted/20">
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
              Mobile Development
            </p>
            <h2 className="text-4xl font-extrabold">
              My <span className="gradient-text">Mobile Apps</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Cross-platform mobile applications built with Flutter & Dart. Available for download.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {STATIC_APPS.map((app, i) => (
              <motion.div
                key={app._id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative flex flex-col rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all overflow-hidden"
              >
                {/* Phone mockup header */}
                <div className="relative h-52 bg-gradient-to-br from-violet-900/60 via-card to-cyan-900/40 flex items-center justify-center border-b border-border">
                  {/* Phone frame */}
                  <div className="relative w-28 h-44 rounded-[2rem] border-4 border-foreground/20 bg-background/60 flex items-center justify-center shadow-2xl">
                    <div className="absolute top-3 w-12 h-1.5 rounded-full bg-foreground/20" />
                    <span className="text-4xl">{app._id === "m1" ? "⛅" : "🛡️"}</span>
                  </div>
                  {/* Flutter badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-1 rounded-full flex items-center gap-1">
                      <Smartphone className="w-3 h-3" />
                      Flutter
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {app.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {app.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Download buttons */}
                  <div className="flex gap-2">
                    {app.appDownloadUrl && (
                      <Button
                        className="flex-1 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                        asChild
                      >
                        <a href={app.appDownloadUrl} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download APK
                        </a>
                      </Button>
                    )}
                    {app.playStoreUrl && (
                      <Button variant="outline" className="flex-1 rounded-xl" asChild>
                        <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Play Store
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
            More apps coming soon. Follow along on{" "}
            <a href="https://github.com/maruf" className="text-primary hover:underline">
              GitHub
            </a>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
