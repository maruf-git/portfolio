"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    color: "text-violet-500 bg-violet-500/10",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.whatsapp,
    href: `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}`,
    color: "text-green-500 bg-green-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
    href: null,
    color: "text-cyan-500 bg-cyan-500/10",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="contact" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="text-4xl font-extrabold">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hi? I&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Let&apos;s work together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently available for freelance projects, full-time roles, and internship
                  opportunities. Whether you need a full-stack web developer, backend engineer,
                  or mobile developer, let&apos;s build something amazing together.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border"
                    >
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-muted-foreground uppercase text-xs tracking-widest">
                  Find me on
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = socialIconMap[link.icon] || ExternalLink;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/50 hover:text-primary text-sm font-medium transition-all hover:-translate-y-0.5"
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-card border border-border space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 group hover:cursor-pointer"
                  size="lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
