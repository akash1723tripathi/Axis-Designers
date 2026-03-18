"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
      Compass,
      Layers,
      Users,
      Clock,
      Globe,
      Award,
      type LucideIcon,
} from "lucide-react";

interface Reason {
      icon: LucideIcon;
      title: string;
      description: string;
      detail: string;
      accent: string;
}

const reasons: Reason[] = [
      {
            icon: Compass,
            title: "Design‑Led Thinking",
            description:
                  "Every project begins with a strong concept rooted in research, narrative, and brand identity.",
            detail:
                  "We don't just decorate spaces — we craft immersive brand experiences. Our process starts from strategy, moves through story, and ends with spaces that speak your brand language fluently.",
            accent: "#7c3aed",
      },
      {
            icon: Layers,
            title: "Turnkey Delivery",
            description:
                  "From concept to completion, we own the entire journey so you can focus on your business.",
            detail:
                  "Design, engineering, manufacturing, logistics, and on‑site execution — all under one roof. No coordination headaches, no finger‑pointing between vendors, just seamless delivery.",
            accent: "#db2777",
      },
      {
            icon: Users,
            title: "Client‑Centric Approach",
            description:
                  "Your goals drive our design. We listen, iterate, and deliver spaces that reflect your vision.",
            detail:
                  "With over 28 years of experience, we've learned that the best outcomes come from deep collaboration. We embed ourselves in your brand culture to design with empathy and precision.",
            accent: "#e11d48",
      },
      {
            icon: Clock,
            title: "On‑Time Execution",
            description:
                  "Deadlines matter. Our streamlined process ensures projects launch exactly when they should.",
            detail:
                  "Our in‑house manufacturing and dedicated project management team eliminate delays. We've delivered 500+ projects on schedule — from retail flagships to corporate headquarters.",
            accent: "#f97316",
      },
      {
            icon: Globe,
            title: "Pan‑India Presence",
            description:
                  "We operate across India with local teams who understand regional nuances and logistics.",
            detail:
                  "Whether it's a showroom in Mumbai or a corporate campus in Bangalore, our distributed teams ensure quality remains consistent regardless of geography.",
            accent: "#0ea5e9",
      },
      {
            icon: Award,
            title: "Proven Track Record",
            description:
                  "Trusted by leading brands across 20+ industries, with a portfolio that speaks for itself.",
            detail:
                  "From Fortune 500 companies to ambitious startups, our work spans retail, hospitality, corporate, and institutional spaces — each designed to elevate the brand experience.",
            accent: "#10b981",
      },
];

/* ─── Card animations ─── */
const cardVariants = {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
            },
      }),
};

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
      const [expanded, setExpanded] = useState(false);
      const Icon = reason.icon;

      return (
            <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
                  onClick={() => setExpanded(!expanded)}
                  className="group relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/60 rounded-2xl p-7 md:p-8 cursor-pointer overflow-hidden transition-colors duration-500 hover:border-neutral-700/80"
            >
                  {/* Accent glow on hover */}
                  <div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                        style={{ background: reason.accent }}
                  />

                  {/* Corner shine */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <motion.div
                        className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500"
                        style={{ backgroundColor: `${reason.accent}15`, border: `1px solid ${reason.accent}30` }}
                        whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                  >
                        <Icon
                              className="w-5 h-5 transition-colors duration-500"
                              style={{ color: reason.accent }}
                        />
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg md:text-xl font-heading font-bold text-white mb-3 leading-tight">
                        {reason.title}
                  </h3>

                  {/* Short description */}
                  <p className="relative z-10 text-sm font-sans text-neutral-400 leading-relaxed">
                        {reason.description}
                  </p>

                  {/* Expanded detail */}
                  <AnimatePresence>
                        {expanded && (
                              <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                              >
                                    <div className="pt-4 mt-4 border-t border-neutral-800/60">
                                          <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                                                {reason.detail}
                                          </p>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* Read more indicator */}
                  <motion.div
                        className="relative z-10 mt-5 flex items-center gap-2 text-xs font-sans uppercase tracking-widest"
                        style={{ color: reason.accent }}
                  >
                        <span>{expanded ? "Less" : "Read more"}</span>
                        <motion.span
                              animate={{ rotate: expanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                        >
                              ↓
                        </motion.span>
                  </motion.div>
            </motion.div>
      );
}

export const WhyAxisDesigners = () => {
      return (
            <section className="relative bg-neutral-950 overflow-hidden py-24 md:py-36">
                  {/* Ambient gradient glow — pink/violet center-right */}
                  <div
                        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                        style={{
                              background: `
                              radial-gradient(at 50% 40%, rgba(236,72,153,0.10) 0px, transparent 50%),
                              radial-gradient(at 80% 60%, rgba(167,139,250,0.08) 0px, transparent 50%),
                              radial-gradient(at 30% 70%, rgba(192,132,252,0.07) 0px, transparent 50%)
                              `,
                        }}
                  />
                  {/* Background texture */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                  }} />

                  <div className="relative max-w-7xl mx-auto px-6 md:px-16">
                        {/* Header area */}
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
                              {/* Headline */}
                              <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                              >
                                    <p className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-500 mb-4 md:mb-6">
                                          The Axis Advantage
                                    </p>
                                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
                                          Why brands{" "}
                                          <span className="italic font-light text-neutral-400">want to</span>
                                          <br />
                                          work with us.
                                    </h2>
                              </motion.div>

                              {/* CTA */}
                              <motion.a
                                    href="#contact"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-700 text-sm font-sans text-white hover:border-neutral-500 hover:bg-white/5 transition-all duration-300 self-start lg:self-auto whitespace-nowrap"
                                    data-cursor-hover
                              >
                                    <span className="text-base">✦</span>
                                    Let&apos;s build something
                              </motion.a>
                        </div>

                        {/* Cards grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                              {reasons.map((reason, i) => (
                                    <ReasonCard key={reason.title} reason={reason} index={i} />
                              ))}
                        </div>
                  </div>
            </section>
      );
};
