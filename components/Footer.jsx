"use client";

import Link from "next/link";
import { Code2, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  codeforces: ExternalLink,
  leetcode: ExternalLink,
  codechef: ExternalLink,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg gradient-text">Maruf.dev</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer & Backend Enthusiast. Building real-world applications
              for web and mobile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.toLowerCase());
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors hover:cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.icon] || ExternalLink;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors group hover:cursor-pointer"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{SITE.email}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center">
            © {year}{" "}
            <span className="text-primary font-medium">{SITE.name}</span>. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with Next.js · shadcn/ui · MongoDB ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
