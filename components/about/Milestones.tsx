"use client";

import { motion } from "framer-motion";
import {
      Rocket,
      Globe,
      Award,
      TrendingUp,
      Star,
      Trophy,
      type LucideIcon,
} from "lucide-react";

interface Milestone {
      year: string;
      title: string;
      description: string;
      icon: LucideIcon;
      accent: string;
      glowFrom: string;
      glowTo: string;
}

const milestones: Milestone[] = [
      {
            year: "1997",
            title: "The Beginning",
            description:
                  "Founded by Ar. Amit Jain and Ar. Alok Singh, out of a small booth in the domestic market, created with pre used wood and furniture.",
            icon: Rocket,
            accent: "#f97316",
            glowFrom: "rgba(249,115,22,0.50)",
            glowTo: "rgba(234,88,12,0.0)",
      },
      {
            year: "2002",
            title: "Going Global",
            description:
                  "First international exhibition in Europe after building a happy clientele in India.",
            icon: Globe,
            accent: "#3b82f6",
            glowFrom: "rgba(59,130,246,0.50)",
            glowTo: "rgba(37,99,235,0.0)",
      },
      {
            year: "2008",
            title: "Award‑Winning Recognition",
            description:
                  "Won SMS award in the Largest Stall International category after multiple commendable gigs in the global market.",
            icon: Award,
            accent: "#10b981",
            glowFrom: "rgba(16,185,129,0.50)",
            glowTo: "rgba(5,150,105,0.0)",
      },
      {
            year: "2012",
            title: "Global Expansion",
            description:
                  "Running full-fledged global operations with an expansion to Middle East, North and South America, and the European Union, whereas winning aspired awards",
            icon: TrendingUp,
            accent: "#a855f7",
            glowFrom: "rgba(168,85,247,0.50)",
            glowTo: "rgba(139,92,246,0.0)",
      },
      {
            year: "2020",
            title: "Leading the Industry",
            description:
                  "Represented almost all the leading brands that we dreamt of exhibiting. Creating the biggest pavilion for MG Motors and winning multiple awards in the Best Car Pavilion category",
            icon: Star,
            accent: "#ec4899",
            glowFrom: "rgba(236,72,153,0.50)",
            glowTo: "rgba(219,39,119,0.0)",
      },
      {
            year: "2024",
            title: "New Horizons",
            description:
                  "KIA, Bharat Mobility 2024 India House, Paris Olympics in 2024 | Indo Count in Bharat Textile 2024",
            icon: Trophy,
            accent: "#06b6d4",
            glowFrom: "rgba(6,182,212,0.50)",
            glowTo: "rgba(8,145,178,0.0)",
      },
];

const cardVariants = {
      hidden: (isLeft: boolean) => ({
            opacity: 0,
            x: isLeft ? -60 : 60,
      }),
      visible: {
            opacity: 1,
            x: 0,
            transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as const,
            },
      },
};

const mobileCardVariants = {
      hidden: { opacity: 0, x: -40 },
      visible: {
            opacity: 1,
            x: 0,
            transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
            },
      },
};

function TimelineCard({ milestone, index }: { milestone: Milestone; index: number }) {
      const isLeft = index % 2 === 0;
      const Icon = milestone.icon;

      return (
            <div className="relative grid grid-cols-[1fr_auto_1fr] gap-6 md:gap-10">
                  {/* Left content or spacer */}
                  {isLeft ? (
                        <motion.div
                              custom={true}
                              variants={cardVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: false, amount: 0.3 }}
                              className="flex justify-end"
                        >
                              <div
                                    className="group relative max-w-md w-full rounded-2xl p-6 md:p-7 overflow-hidden transition-all duration-200"
                                    style={{
                                          background: "rgba(255,255,255,0.03)",
                                          backdropFilter: "blur(20px)",
                                          WebkitBackdropFilter: "blur(20px)",
                                          border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                              >
                                    {/* Bottom glow */}
                                    <div
                                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[120px] rounded-full blur-[40px] opacity-40 group-hover:opacity-80 transition-opacity duration-200"
                                          style={{ background: `radial-gradient(ellipse, ${milestone.glowFrom}, ${milestone.glowTo})` }}
                                    />
                                    {/* Top shine */}
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                                    <p className="relative z-10 text-xs font-sans uppercase tracking-[0.2em] mb-2" style={{ color: milestone.accent }}>
                                          {milestone.title}
                                    </p>
                                    <p className="relative z-10 text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                                          {milestone.description}
                                    </p>
                              </div>
                        </motion.div>
                  ) : (
                        <div />
                  )}

                  {/* Center line with icon bubble */}
                  <div className="relative flex flex-col items-center">
                        <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                    backgroundColor: `${milestone.accent}18`,
                                    border: `2px solid ${milestone.accent}40`,
                                    boxShadow: `0 0 20px ${milestone.accent}20`,
                              }}
                        >
                              <Icon className="w-5 h-5" style={{ color: milestone.accent }} strokeWidth={1.5} />
                        </motion.div>
                        {/* Year label */}
                        <motion.span
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.4, delay: 0.15 }}
                              className="mt-2 text-sm font-heading font-bold text-white"
                        >
                              {milestone.year}
                        </motion.span>
                  </div>

                  {/* Right content or spacer */}
                  {!isLeft ? (
                        <motion.div
                              custom={false}
                              variants={cardVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: false, amount: 0.3 }}
                              className="flex justify-start"
                        >
                              <div
                                    className="group relative max-w-md w-full rounded-2xl p-6 md:p-7 overflow-hidden transition-all duration-200"
                                    style={{
                                          background: "rgba(255,255,255,0.03)",
                                          backdropFilter: "blur(20px)",
                                          WebkitBackdropFilter: "blur(20px)",
                                          border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                              >
                                    {/* Bottom glow */}
                                    <div
                                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[120px] rounded-full blur-[40px] opacity-40 group-hover:opacity-80 transition-opacity duration-200"
                                          style={{ background: `radial-gradient(ellipse, ${milestone.glowFrom}, ${milestone.glowTo})` }}
                                    />
                                    {/* Top shine */}
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                                    <p className="relative z-10 text-xs font-sans uppercase tracking-[0.2em] mb-2" style={{ color: milestone.accent }}>
                                          {milestone.title}
                                    </p>
                                    <p className="relative z-10 text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                                          {milestone.description}
                                    </p>
                              </div>
                        </motion.div>
                  ) : (
                        <div />
                  )}
            </div>
      );
}

export const Milestones = () => {
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
                        {/* Heading */}
                        <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                              className="mb-16 md:mb-24"
                        >
                              <p className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-500 mb-4 md:mb-6">
                                    Our Journey
                              </p>
                              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
                                    Milestones that{" "}
                                    <span className="italic font-light text-neutral-400">shaped</span>
                                    <br />
                                    who we are.
                              </h2>
                        </motion.div>

                        {/* Desktop: Vertical alternating timeline */}
                        <div className="hidden md:block">
                              {/* Vertical center line */}
                              <div className="absolute left-1/2 top-[320px] bottom-36 w-px -translate-x-1/2">
                                    <motion.div
                                          initial={{ scaleY: 0 }}
                                          whileInView={{ scaleY: 1 }}
                                          viewport={{ once: false, amount: 0.1 }}
                                          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                          className="w-full h-full origin-top"
                                          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))" }}
                                    />
                              </div>

                              <div className="space-y-12">
                                    {milestones.map((milestone, i) => (
                                          <TimelineCard key={milestone.year} milestone={milestone} index={i} />
                                    ))}
                              </div>
                        </div>

                        {/* Mobile: Left-aligned vertical timeline */}
                        <div className="md:hidden space-y-0">
                              {milestones.map((milestone, i) => {
                                    const Icon = milestone.icon;
                                    return (
                                          <motion.div
                                                key={`mobile-${milestone.year}`}
                                                variants={mobileCardVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.3 }}
                                                className="flex gap-5"
                                          >
                                                {/* Left: icon + vertical line */}
                                                <div className="flex flex-col items-center flex-shrink-0">
                                                      <div
                                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                                            style={{
                                                                  backgroundColor: `${milestone.accent}18`,
                                                                  border: `2px solid ${milestone.accent}40`,
                                                                  boxShadow: `0 0 16px ${milestone.accent}20`,
                                                            }}
                                                      >
                                                            <Icon className="w-5 h-5" style={{ color: milestone.accent }} strokeWidth={1.5} />
                                                      </div>
                                                      {i < milestones.length - 1 && (
                                                            <div className="w-px flex-1 min-h-[40px]" style={{ background: "rgba(255,255,255,0.06)" }} />
                                                      )}
                                                </div>

                                                {/* Right: content card */}
                                                <div className="pb-10 pt-1">
                                                      <span className="text-sm font-heading font-bold text-white">{milestone.year}</span>
                                                      <p className="text-xs font-sans uppercase tracking-[0.2em] mt-1 mb-2" style={{ color: milestone.accent }}>
                                                            {milestone.title}
                                                      </p>
                                                      <p className="text-sm font-sans text-neutral-400 leading-relaxed">
                                                            {milestone.description}
                                                      </p>
                                                </div>
                                          </motion.div>
                                    );
                              })}
                        </div>
                  </div>
            </section>
      );
};
