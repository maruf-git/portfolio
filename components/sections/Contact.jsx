"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle, AtSign } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { toast } from "sonner";

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  codeforces: ExternalLink,
  leetcode: ExternalLink,
  codechef: ExternalLink,
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/25",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.whatsapp,
    href: `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}`,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/25",
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
    href: null,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
  },
];

function FormInput({ id, name, type = "text", label, value, onChange, placeholder }) {
  return (
    <div className="group">
      <label className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-foreground placeholder:text-muted-foreground/50 text-sm
          focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-background
          transition-all duration-300"
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent! I'll get back to you soon. 🙌");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.05] dark:opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6C63FF, #00d4ff)" }}
      />
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-3">
              <span className="section-header-tag">
                <AtSign className="w-3 h-3" />
                Get In Touch
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              Have a project in mind? Want to collaborate? Or just want to say hi? I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Left: Info (2 cols) ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Let&apos;s work{" "}
                  <span className="gradient-text">together</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m currently available for freelance projects, full-time roles, and
                  internship opportunities. Whether you need a full-stack web developer, backend
                  engineer, or mobile developer, let&apos;s build something amazing together.
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-4 p-4 rounded-2xl border ${item.border} bg-card hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5 group`}
                    >
                      <div className={`p-2.5 rounded-xl ${item.bg} flex-shrink-0`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium text-sm hover:text-primary transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-sm truncate">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = socialIconMap[link.icon] || ExternalLink;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-card text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* ── Right: Form (3 cols) ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="relative p-7 rounded-2xl border border-border/60 glass-card space-y-5 overflow-hidden"
              >
                {/* Top border glow */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] via-[#6C63FF] to-[#ff6b35]" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput
                    id="name"
                    name="name"
                    label="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  <FormInput
                    id="contact-email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border/60 text-foreground placeholder:text-muted-foreground/50 text-sm
                      focus:outline-none focus:border-primary/70 focus:ring-2 focus:ring-primary/20 focus:bg-background
                      transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm btn-gradient disabled:opacity-60 disabled:cursor-not-allowed group hover:cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
