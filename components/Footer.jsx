"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { SITE, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  codeforces: ExternalLink,
  leetcode: ExternalLink,
  codechef: ExternalLink,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, #1D4ED8)" }}
      />

      <div className="relative dark:bg-[rgba(8,11,20,0.8)] bg-[rgba(248,249,255,0.8)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* ── Brand (2 cols) ── */}
            <div className="md:col-span-2 space-y-5">
              {/* Logo */}
              <div className="flex items-center gap-1 group">
                <span
                  className="text-4xl font-bold leading-none select-none"
                  style={{
                    fontFamily: "var(--font-signature), 'Dancing Script', cursive",
                    background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 60%, #93C5FD 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.01em",
                    filter: "drop-shadow(0 0 8px rgba(59,130,246,0.3))",
                  }}
                >
                  Maruf
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-dot mb-0.5 ml-1" />
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Full Stack Web Developer &amp; Flutter Mobile App Developer.
                Building scalable real-world applications for web and mobile.
                Based in Dinajpur, Bangladesh — open to remote work.
              </p>

              {/* Social icons row */}
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIcons[link.icon] || ExternalLink;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className="w-9 h-9 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 hover:shadow-md hover:shadow-primary/15 transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </Link>
                  );
                })}
                <Link
                  href={`mailto:${SITE.email}`}
                  title={SITE.email}
                  className="w-9 h-9 rounded-full border border-border/60 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 hover:shadow-md hover:shadow-primary/15 transition-all duration-200"
                >
                  <Mail className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <h3 className="font-bold text-sm mb-5 text-foreground uppercase tracking-widest">
                Navigation
              </h3>
              <ul className="space-y-2.5">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-1.5 group hover:cursor-pointer"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200 rounded-full" />
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200 rounded-full" />
                    All Projects
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* ── Contact Quick ── */}
            <div>
              <h3 className="font-bold text-sm mb-5 text-foreground uppercase tracking-widest">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                    <span className="truncate">{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>{SITE.whatsapp}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.592 19.592 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span>{SITE.location}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom ── */}
          <div className="mt-12 pt-8 border-t border-border/40">
            {/* Gradient line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mb-8" />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm text-center">
                © {year}{" "}
                <span className="gradient-text font-semibold">{SITE.name}</span>. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs text-center">
                Built with{" "}
                <span className="text-foreground/70">Next.js 16 · TailwindCSS · shadcn/ui · MongoDB</span>{" "}
                <span>❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
