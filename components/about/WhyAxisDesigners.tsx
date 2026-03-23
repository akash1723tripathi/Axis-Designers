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
      glowFrom: string;
      glowTo: string;
}

const reasons: Reason[] = [
      {
            icon: Compass,
            title: "Design‑Led Thinking",
            description:
                  "Every project begins with a strong concept rooted in research, narrative, and brand identity.",
            detail:
                  "We don't just decorate spaces — we craft immersive brand experiences. Our process starts from strategy, moves through story, and ends with spaces that speak your brand language fluently.",
            accent: "#f97316",
            glowFrom: "rgba(249,115,22,0.50)",
            glowTo: "rgba(234,88,12,0.0)",
      },
      {
            icon: Layers,
            title: "Turnkey Delivery",
            description:
                  "From concept to completion, we own the entire journey so you can focus on your business.",
            detail:
                  "Design, engineering, manufacturing, logistics, and on‑site execution — all under one roof. No coordination headaches, no finger‑pointing between vendors, just seamless delivery.",
            accent: "#3b82f6",
            glowFrom: "rgba(59,130,246,0.50)",
            glowTo: "rgba(37,99,235,0.0)",
      },
      {
            icon: Users,
            title: "Client‑Centric Approach",
            description:
                  "Your goals drive our design. We listen, iterate, and deliver spaces that reflect your vision.",
            detail:
                  "With over 28 years of experience, we've learned that the best outcomes come from deep collaboration. We embed ourselves in your brand culture to design with empathy and precision.",
            accent: "#10b981",
            glowFrom: "rgba(16,185,129,0.50)",
            glowTo: "rgba(5,150,105,0.0)",
      },
      {
            icon: Clock,
            title: "On‑Time Execution",
            description:
                  "Deadlines matter. Our streamlined process ensures projects launch exactly when they should.",
            detail:
                  "Our in‑house manufacturing and dedicated project management team eliminate delays. We've delivered 500+ projects on schedule — from retail flagships to corporate headquarters.",
            accent: "#a855f7",
            glowFrom: "rgba(168,85,247,0.50)",
            glowTo: "rgba(139,92,246,0.0)",
      },
      {
            icon: Globe,
            title: "Pan‑India Presence",
            description:
                  "We operate across India with local teams who understand regional nuances and logistics.",
            detail:
                  "Whether it's a showroom in Mumbai or a corporate campus in Bangalore, our distributed teams ensure quality remains consistent regardless of geography.",
            accent: "#ec4899",
            glowFrom: "rgba(236,72,153,0.50)",
            glowTo: "rgba(219,39,119,0.0)",
      },
      {
            icon: Award,
            title: "Proven Track Record",
            description:
                  "Trusted by leading brands across 20+ industries, with a portfolio that speaks for itself.",
            detail:
                  "From Fortune 500 companies to ambitious startups, our work spans retail, hospitality, corporate, and institutional spaces — each designed to elevate the brand experience.",
            accent: "#06b6d4",
            glowFrom: "rgba(6,182,212,0.50)",
            glowTo: "rgba(8,145,178,0.0)",
      },
];

/* ─── Card animations ─── */
const cardVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                  duration: 0.5,
                  delay: i * 0.08,
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
                  whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.05, ease: "easeOut" } }}
                  onClick={() => setExpanded(!expanded)}
                  className="group relative rounded-3xl p-7 md:p-8 cursor-pointer overflow-hidden transition-all duration-200"
                  style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.06)",
                  }}
            >
                  {/* Bottom edge colored glow — always visible, intensifies on hover */}
                  <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-[160px] rounded-full blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: `radial-gradient(ellipse, ${reason.glowFrom}, ${reason.glowTo})` }}
                  />

                  {/* Side edge glow on hover */}
                  <div
                        className="absolute -bottom-2 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: `linear-gradient(90deg, transparent, ${reason.accent}, transparent)` }}
                  />

                  {/* Top shine line on hover */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {/* Glassmorphic inner highlight */}
                  <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%)` }}
                  />

                  {/* Icon */}
                  <motion.div
                        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-150"
                        style={{
                              backgroundColor: `${reason.accent}12`,
                              border: `1px solid ${reason.accent}25`,
                              boxShadow: `0 0 0px ${reason.accent}00`,
                        }}
                        whileHover={{
                              rotate: [0, -8, 8, 0],
                              boxShadow: `0 0 20px ${reason.accent}30`,
                              transition: { duration: 0.3 },
                        }}
                  >
                        <Icon
                              className="w-6 h-6 transition-colors duration-150"
                              style={{ color: reason.accent }}
                              strokeWidth={1.5}
                        />
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg md:text-xl font-heading font-bold text-white mb-3 leading-tight">
                        {reason.title}
                  </h3>

                  {/* Short description */}
                  <p className="relative z-10 text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
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
                                    <div className="pt-4 mt-4 border-t border-white/[0.06]">
                                          <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                                                {reason.detail}
                                          </p>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* Read more indicator */}
                  <motion.div
                        className="relative z-10 mt-5 flex items-center gap-2 text-xs font-sans uppercase tracking-widest transition-colors duration-500"
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
                  {/* Ambient warm glows */}
                  <div
                        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(180,83,9,0.12) 0%, rgba(124,45,18,0.06) 50%, transparent 100%)" }}
                  />
                  <div
                        className="absolute top-1/3 right-1/5 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(120,53,15,0.04) 50%, transparent 100%)" }}
                  />
                  <div
                        className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, rgba(124,45,18,0.05) 50%, transparent 100%)" }}
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
