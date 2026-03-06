"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Globe, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { toast } from "sonner";

const features = [
  "Custom Web Application Development",
  "E-commerce Solutions",
  "API Design & Integration",
  "Mobile App Development (Flutter)",
  "UI/UX Design & Prototyping",
  "Database Architecture & Optimization",
];

export default function Company() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("You're on the waitlist! We'll notify you at launch. 🚀");
        setEmail("");
      } else {
        toast.info(data.error || "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="company" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Coming Soon Card */}
          <div className="relative rounded-3xl overflow-hidden border border-primary/30">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-background to-cyan-900/30" />
            <div className="hero-blob w-72 h-72 bg-violet-600 top-0 right-0 opacity-10" />
            <div className="hero-blob w-64 h-64 bg-cyan-500 bottom-0 left-0 opacity-10" />

            <div className="relative z-10 p-8 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Info */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                      <Sparkles className="w-4 h-4" />
                      Coming Soon
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
                      <span className="gradient-text">{SITE.company.name}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mt-2 font-light">
                      {SITE.company.tagline}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {SITE.company.description} We are a team of passionate developers building
                    scalable, beautiful, and reliable digital products for growing businesses in
                    Bangladesh and beyond.
                  </p>

                  {/* Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.07 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Subscribe */}
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-primary/40"
                  >
                    <Globe className="w-12 h-12 text-white" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold">Get Early Access</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Join the waitlist and be the first to know when we launch.
                    </p>
                  </div>

                  <form onSubmit={handleSubscribe} className="w-full max-w-sm space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 group"
                    >
                      {loading ? "Joining..." : "Notify Me at Launch"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Rocket className="w-4 h-4 text-primary" />
                    <span>Launching in 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
