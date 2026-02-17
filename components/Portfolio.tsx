"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
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

const fadeUp: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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

/* ──────────── Component ──────────── */

export const Portfolio = () => {
      const vantaRef = useRef<HTMLDivElement>(null);
      const effectRef = useRef<{ destroy: () => void } | null>(null);

      useEffect(() => {
            const initVanta = async () => {
                  if (effectRef.current) return;

                  try {
                        const THREE = await import("three");
                        (window as any).THREE = THREE;

                        const VANTA = await import("vanta/dist/vanta.waves.min");
                        const WAVES = VANTA.default || VANTA;

                        if (vantaRef.current) {
                              effectRef.current = WAVES({
                                    el: vantaRef.current,
                                    THREE: THREE,
                                    mouseControls: true,
                                    touchControls: true,
                                    gyroControls: false,
                                    minHeight: 200.0,
                                    minWidth: 200.0,
                                    scale: 1.0,
                                    scaleMobile: 1.0,
                                    color: 0x0a0a0a,
                                    shininess: 25.0,
                                    waveHeight: 12.0,
                                    waveSpeed: 0.8,
                                    zoom: 1.0,
                              });
                        }
                  } catch (err) {
                        console.error("Vanta Waves init failed:", err);
                  }
            };

            initVanta();

            return () => {
                  if (effectRef.current) {
                        effectRef.current.destroy();
                        effectRef.current = null;
                  }
            };
      }, []);

      return (
            <section className="relative min-h-screen w-full overflow-hidden">
                  {/* Vanta Waves Background */}
                  <div
                        ref={vantaRef}
                        className="absolute inset-0 z-0"
                        style={{ width: "100%", height: "100%" }}
                  />

                  {/* Dark overlays */}
                  <div className="absolute inset-0 z-[1] bg-black/40" />
                  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/30 to-black/50" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
                        {/* ═══════════ LEFT PANEL ═══════════ */}
                        <div className="w-full lg:w-[35%] flex items-center justify-center py-28 lg:py-0 px-8 md:px-16">
                              <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={stagger}
                              >
                                    {/* Orange bracket — top-left */}
                                    <motion.div variants={fadeUp} className="mb-10">
                                          <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                className="text-orange-500"
                                          >
                                                <path
                                                      d="M0 30V0H30"
                                                      stroke="currentColor"
                                                      strokeWidth="3"
                                                      fill="none"
                                                />
                                          </svg>
                                    </motion.div>

                                    <motion.p
                                          variants={fadeUp}
                                          className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4"
                                    >
                                          Works
                                    </motion.p>

                                    <motion.h1
                                          variants={fadeUp}
                                          className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase text-white tracking-tight leading-[1.05]"
                                    >
                                          Portfolio
                                    </motion.h1>

                                    <motion.div variants={fadeUp} className="mt-5 mb-10">
                                          <div className="w-16 h-[2px] bg-white/20" />
                                    </motion.div>

                                    {/* Orange bracket — bottom-right */}
                                    <motion.div variants={fadeUp} className="mt-14 flex justify-end">
                                          <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                className="text-orange-500"
                                          >
                                                <path
                                                      d="M32 2V32H2"
                                                      stroke="currentColor"
                                                      strokeWidth="3"
                                                      fill="none"
                                                />
                                          </svg>
                                    </motion.div>
                              </motion.div>
                        </div>

                        {/* ═══════════ RIGHT PANEL — Icon Grid ═══════════ */}
                        <div className="w-full lg:w-[65%] flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-0">
                              <motion.div
                                    className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6 max-w-3xl mx-auto lg:mx-0"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
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
      );
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
