"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(pathname === "/" ? "home" : pathname.replace("/", ""));
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (pathname === "/") {
        const sections = NAV_LINKS.map((l) => l.href.replace(/[/#]/g, "")).filter(Boolean);
        let currentSection = "home";
        for (const section of [...sections].reverse()) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 150) {
            currentSection = section;
            break;
          }
        }
        setActiveSection(currentSection);
      } else {
        setActiveSection(pathname.replace("/", ""));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      if (pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(href);
      }
      return;
    }
    if (pathname !== "/") {
      router.push(href === "#home" ? "/" : `/${href}`);
      return;
    }
    const id = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        // Sections already have 6rem (96px) of padding. 
        // Scrolling exactly to the element means the 64px navbar covers part of the padding,
        // leaving a nice tight margin above the content.
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "dark:bg-[rgba(8,11,20,0.85)] bg-[rgba(248,249,255,0.88)] backdrop-blur-2xl border-b border-border/40 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-1 group"
          >
            {/* Signature brand */}
            <span
              className="text-3xl font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-signature), 'Dancing Script', cursive",
                background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 60%, #93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.01em",
                transition: "filter 0.3s ease",
                filter: "drop-shadow(0 0 8px rgba(59,130,246,0.3))",
              }}
            >
              Maruf
            </span>
            {/* Online indicator dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-dot mb-0.5 ml-0.5" />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace(/[/#]/g, "");
              const isActive =
                activeSection === sectionId ||
                (pathname === `/${sectionId}` && link.href.startsWith("/"));
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:cursor-pointer group",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={cn(
                      "absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#6C63FF] transition-all duration-300",
                      isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60"
                    )}
                  />
                </button>
              );
            })}
          </nav>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2.5">
            <AnimatedThemeToggler className="hover:cursor-pointer" />

            {/* Hire Me CTA */}
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold btn-gradient hover:cursor-pointer relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse-dot" />
                Hire Me
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-border/60 bg-card/80 hover:border-primary/50 transition-all hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border/40 dark:bg-[rgba(8,11,20,0.95)] bg-[rgba(248,249,255,0.97)] backdrop-blur-2xl"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const sectionId = link.href.replace(/[/#]/g, "");
                const isActive =
                  activeSection === sectionId ||
                  (pathname === `/${sectionId}` && link.href.startsWith("/"));
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 hover:cursor-pointer",
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-3 w-full h-12 rounded-xl text-sm font-semibold btn-gradient hover:cursor-pointer"
                onClick={() => handleNavClick("#contact")}
              >
                Hire Me
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
