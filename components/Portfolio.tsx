"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
      Pill,
      Car,
      Monitor,
      Building2,
      ShoppingCart,
      Shirt,
      Plane,
      Shield,
      Fuel,
      Gem,
      GraduationCap,
      Rocket,
      type LucideIcon,
} from "lucide-react";
import { usePageTransition } from "@/components/PageTransition";

/* ──────────── Industry Data ──────────── */

const industries: { title: string; icon: LucideIcon }[] = [
      { title: "Pharmaceutical & Healthcare", icon: Pill },
      { title: "Automotive & Engineering", icon: Car },
      { title: "Technology & IT (SaaS/AI)", icon: Monitor },
      { title: "Real Estate & Construction", icon: Building2 },
      { title: "FMCG & Food/Bev", icon: ShoppingCart },
      { title: "Fashion & Lifestyle", icon: Shirt },
      { title: "Travel & Tourism", icon: Plane },
      { title: "Defense & Aerospace", icon: Shield },
      { title: "Energy, Oil & Gas", icon: Fuel },
      { title: "Jewelry & Gemstones", icon: Gem },
      { title: "Education & EdTech", icon: GraduationCap },
      { title: "Startups & Innovation", icon: Rocket },
];

/* ──────────── Animation Variants ──────────── */

const stagger: Variants = {
      hidden: {},
      visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.3 },
      },
};

const cardVariant: Variants = {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      },
};

/* ──────────── Industry Card ──────────── */

interface IndustryCardProps {
      title: string;
      Icon: LucideIcon;
}

const IndustryCard = ({ title, Icon }: IndustryCardProps) => {
      return (
            <motion.div
                  variants={cardVariant}
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col items-center justify-center gap-4 p-5 md:p-7 rounded-2xl cursor-pointer
                        bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]
                        hover:border-orange-500/40 hover:bg-white/[0.06]
                        transition-colors duration-500"
            >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-orange-500/[0.08] to-transparent" />

                  {/* Icon container */}
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.08] group-hover:border-orange-500/30 group-hover:bg-orange-500/[0.08] transition-all duration-500">
                        <Icon
                              className="w-6 h-6 md:w-7 md:h-7 text-neutral-400 group-hover:text-orange-400 transition-colors duration-500"
                              strokeWidth={1.5}
                        />
                  </div>

                  {/* Label */}
                  <p className="relative z-10 text-[10px] md:text-xs font-sans uppercase tracking-[0.12em] text-neutral-400 group-hover:text-neutral-200 transition-colors duration-500 text-center leading-snug">
                        {title}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-[2px] bg-orange-500 rounded-full transition-all duration-500" />
            </motion.div>
      );
};

/* ──────────── Main Component ──────────── */

export const Portfolio = () => {
      const { navigateWithTransition } = usePageTransition();
      const gridRef = useRef<HTMLDivElement>(null);
      const isGridInView = useInView(gridRef, { once: false, margin: "-10%" });

      return (
            <div className="relative bg-neutral-950 overflow-hidden">
                  {/* Ambient warm glows — consistent with Solutions & Team pages */}
                  <div
                        className="fixed top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(180,83,9,0.12) 0%, rgba(124,45,18,0.06) 50%, transparent 100%)" }}
                  />
                  <div
                        className="fixed top-1/3 right-1/5 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(120,53,15,0.04) 50%, transparent 100%)" }}
                  />
                  <div
                        className="fixed bottom-1/4 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, rgba(124,45,18,0.05) 50%, transparent 100%)" }}
                  />

                  {/* ─── Hero header ─── */}
                  <section className="relative z-10 h-screen flex flex-col justify-center overflow-hidden">
                        {/* Hero-specific glow */}
                        <div
                              className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                              style={{ background: "radial-gradient(circle, rgba(180,83,9,0.18) 0%, rgba(124,45,18,0.08) 50%, transparent 100%)" }}
                        />

                        <div className="max-w-7xl mx-auto px-6 md:px-16">
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.2,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4 ml-2"
                              >
                                    Works
                              </motion.p>

                              <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                          duration: 0.8,
                                          delay: 0.35,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-white tracking-tight leading-[1.05]"
                              >
                                    Our
                                    <br />
                                    <span className="text-orange-500">Portfolio</span>
                              </motion.h1>

                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.5,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-neutral-400 font-sans text-sm md:text-base max-w-lg mt-6 leading-relaxed"
                              >
                                    We&apos;ve delivered award-winning exhibition spaces across diverse industries — each one crafted to tell a unique brand story.
                              </motion.p>

                              <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                          duration: 0.8,
                                          delay: 0.6,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="w-24 h-[2px] bg-orange-500 mt-8 origin-left"
                              />
                        </div>

                        {/* Scroll indicator */}
                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 1 }}
                              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                        >
                              <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-600 to-transparent"
                              />
                        </motion.div>
                  </section>

                  {/* ─── Industries We Serve ─── */}
                  <section className="relative z-10 py-24 md:py-32">
                        <div className="max-w-7xl mx-auto px-6 md:px-16">
                              {/* Section header */}
                              <div className="mb-16 md:mb-20">
                                    <motion.p
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                                          className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4 ml-1"
                                    >
                                          Industries We Serve
                                    </motion.p>
                                    <motion.h2
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                                          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white tracking-tight leading-[1.1]"
                                    >
                                          Diverse Expertise,
                                          <br />
                                          <span className="text-neutral-500">One Standard of Excellence</span>
                                    </motion.h2>
                                    <motion.div
                                          initial={{ scaleX: 0 }}
                                          whileInView={{ scaleX: 1 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                                          className="w-full h-px bg-white/[0.06] mt-10 origin-left"
                                    />
                              </div>

                              {/* Industry cards grid */}
                              <div ref={gridRef}>
                                    <motion.div
                                          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6"
                                          initial="hidden"
                                          animate={isGridInView ? "visible" : "hidden"}
                                          variants={stagger}
                                    >
                                          {industries.map((industry) => (
                                                <IndustryCard
                                                      key={industry.title}
                                                      title={industry.title}
                                                      Icon={industry.icon}
                                                />
                                          ))}
                                    </motion.div>
                              </div>
                        </div>
                  </section>

                  {/* ─── Bottom CTA ─── */}
                  {/* <section className="relative z-10 py-24 md:py-40">
                        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
                              <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                          duration: 0.7,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-3xl md:text-5xl font-heading font-bold uppercase text-white mb-6"
                              >
                                    Have a Project in{" "}
                                    <span className="text-orange-500">Mind</span>?
                              </motion.h2>

                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.15,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-neutral-400 font-sans text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
                              >
                                    Whatever your industry, we bring the same passion and precision
                                    to every exhibition space we create.
                              </motion.p>

                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.3,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                              >
                                    <button
                                          onClick={(e) => navigateWithTransition("/contact", { x: e.clientX, y: e.clientY })}
                                          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full border border-neutral-600 text-white font-sans text-sm uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-orange-500 cursor-pointer"
                                    >
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10 flex items-center gap-3">
                                                Get in Touch
                                                <svg className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                          </span>
                                    </button>
                              </motion.div>
                        </div>
                  </section> */}
            </div>
      );
};
