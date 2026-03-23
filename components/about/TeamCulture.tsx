"use client";

import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Team culture photos ─── */
const culturePhotos = [
      { src: "/LifeAtAxis/WhatsApp Image 2026-03-19 at 10.35.15 PM.jpeg", alt: "Life at Axis Designers" },
      { src: "/LifeAtAxis/WhatsApp Image 2026-03-19 at 10.35.16 PM.jpeg", alt: "Team collaboration" },
      { src: "/LifeAtAxis/WhatsApp Image 2026-03-19 at 10.35.18 PM.jpeg", alt: "Creative workspace" },
      { src: "/LifeAtAxis/WhatsApp Image 2026-03-19 at 10.38.37 PM.jpeg", alt: "Design in action" },
      { src: "/LifeAtAxis/WhatsApp Image 2026-03-19 at 10.41.40 PM.jpeg", alt: "Team moments" },
];

/* ─── Slide direction variants ─── */
const slideVariants = {
      enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
      }),
      center: {
            x: 0,
            opacity: 1,
      },
      exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
      }),
};

export const TeamCulture = () => {
      const [[current, direction], setCurrent] = useState([0, 0]);
      const constraintsRef = useRef<HTMLDivElement>(null);

      const paginate = useCallback(
            (newDir: number) => {
                  setCurrent(([prev]) => {
                        const next = (prev + newDir + culturePhotos.length) % culturePhotos.length;
                        return [next, newDir];
                  });
            },
            [],
      );

      const goTo = useCallback((idx: number) => {
            setCurrent(([prev]) => [idx, idx > prev ? 1 : -1]);
      }, []);

      return (
            <section className="relative bg-black overflow-hidden">
                  {/* ═══ Top 70 %  — Full‑width photo carousel ═══ */}
                  <div
                        ref={constraintsRef}
                        className="relative w-full overflow-hidden"
                        style={{ height: "70vh" }}
                  >
                        {/* Photos */}
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                              <motion.div
                                    key={current}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                                    className="absolute inset-0"
                              >
                                    <Image
                                          src={culturePhotos[current].src}
                                          alt={culturePhotos[current].alt}
                                          fill
                                          className="object-cover"
                                          sizes="100vw"
                                          priority
                                    />
                                    {/* Dark gradient overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/30 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
                              </motion.div>
                        </AnimatePresence>

                        {/* ─── Left side overlay text ─── */}
                        <div className="absolute inset-0 z-10 flex flex-col justify-center pointer-events-none">
                              <div className="px-8 md:px-16 lg:px-24 max-w-xl">
                                    <motion.p
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.5 }}
                                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                          className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-400 mb-3 md:mb-5"
                                    >
                                          Our Culture
                                    </motion.p>
                                    <motion.h2
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.5 }}
                                          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white"
                                    >
                                          Life at
                                          <br />
                                          <span className="italic font-light text-neutral-300">Axis</span>
                                    </motion.h2>
                              </div>
                        </div>

                        {/* ─── Navigation arrows ─── */}
                        <div className="absolute bottom-8 right-8 md:right-16 z-20 flex items-center gap-3">
                              {/* Dot indicators */}
                              <div className="hidden md:flex items-center gap-2 mr-4">
                                    {culturePhotos.map((_, i) => (
                                          <button
                                                key={i}
                                                onClick={() => goTo(i)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                      i === current
                                                            ? "bg-white w-6"
                                                            : "bg-white/30 hover:bg-white/50"
                                                }`}
                                                aria-label={`Go to photo ${i + 1}`}
                                          />
                                    ))}
                              </div>

                              <button
                                    onClick={() => paginate(-1)}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                                    aria-label="Previous photo"
                                    data-cursor-hover
                              >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                              </button>
                              <button
                                    onClick={() => paginate(1)}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                                    aria-label="Next photo"
                                    data-cursor-hover
                              >
                                    <ChevronRight className="w-5 h-5 text-white" />
                              </button>

                              {/* Counter */}
                              <span className="ml-3 text-sm font-sans text-white/50 tabular-nums">
                                    {String(current + 1).padStart(2, "0")} / {String(culturePhotos.length).padStart(2, "0")}
                              </span>
                        </div>
                  </div>

                  {/* ═══ Bottom 30 %  — Team description ═══ */}
                  <div className="relative" style={{ minHeight: "30vh" }}>
                        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                                    {/* Left — bold statement */}
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                          <h3 className="mb-5 font-heading text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-white">
                                                A team of{" "}
                                                <span className="italic font-light text-neutral-400">
                                                      passionate designers, engineers,
                                                </span>{" "}
                                                and craftspeople.
                                          </h3>
                                          {/* Stats row */}
                                          <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
                                                <div>
                                                      <p className="font-heading text-3xl md:text-4xl text-white">200+</p>
                                                      <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mt-1">
                                                            Team Members
                                                      </p>
                                                </div>  
                                          </div>
                                    </motion.div>

                                    {/* Right — descriptive paragraph */}
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                          className="space-y-5"
                                    >
                                          <p className="text-sm md:text-[15px] font-sans text-neutral-400 leading-relaxed">
                                                With over 28 years of collective experience, our multi‑disciplinary team
                                                brings together architects, interior designers, project managers, and
                                                skilled artisans — all under one roof. We believe great spaces are born
                                                from collaboration, curiosity, and an unwavering commitment to quality.
                                          </p>
                                          <p className="text-sm md:text-[15px] font-sans text-neutral-400 leading-relaxed">
                                                From concept to completion, every member of our team is invested in
                                                delivering spaces that don&apos;t just meet expectations — they exceed them.
                                                Our culture is built on continuous learning, creative freedom, and the
                                                shared belief that design has the power to transform businesses.
                                          </p>

                                          
                                    </motion.div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
