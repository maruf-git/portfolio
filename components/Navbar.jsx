"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
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
      setScrolled(window.scrollY > 20);

      // Active section detection
      if (pathname === "/") {
        const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
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
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);

    // Handle full route links
    if (href.startsWith("/")) {
      if (pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(href);
      }
      return;
    }

    // Handle hash links when NOT on the home page
    if (pathname !== "/") {
      router.push(href === "#home" ? "/" : `/${href}`);
      return;
    }

    // Handle hash links when ON the home page
    const id = href.replace("#", "");
    
    // Give time for mobile menu to close before calculating scroll position
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        // Offset for the fixed navbar height
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg">
              <span className="gradient-text">Maruf</span>
              <span className="text-muted-foreground text-sm font-normal">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace(/[/#]/g, "");
              const isActive = activeSection === sectionId || (pathname === `/${sectionId}` && link.href.startsWith("/"));
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:cursor-pointer",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <AnimatedThemeToggler className="hover:cursor-pointer" />
            <Button
              size="sm"
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 shadow-lg shadow-primary/25c hover:cursor-pointer"
              onClick={() => handleNavClick("#contact")}
            >
              Hire Me
            </Button>
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="px-4 pt-2 pb-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace(/[/#]/g, "");
                const isActive = activeSection === sectionId || (pathname === `/${sectionId}` && link.href.startsWith("/"));
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
              <Button
                className="mt-2 w-full h-12 bg-primary text-primary-foreground rounded-xl hover:cursor-pointer"
                onClick={() => handleNavClick("#contact")}
              >
                Hire Me
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
