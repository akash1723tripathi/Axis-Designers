"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ElasticString } from "./ElasticString";

const text = "WE ARCHITECT SPACES";
const words = text.split(" ");

// Cuberto-style: whole-word mask reveal with luxurious easing
const container: Variants = {
      hidden: {},
      visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.6 },
      },
};

const wordReveal: Variants = {
      hidden: {
            y: "120%",
            rotate: 5,
      },
      visible: {
            y: "0%",
            rotate: 0,
            transition: {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
            },
      },
};

export const Hero = () => {
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
                                    color: 0x101010,
                                    waveSpeed: 1.0,
                                    waveHeight: 15.0,
                                    shininess: 30.0,
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
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a1628]">
                  {/* Vanta Waves Background */}
                  <div
                        ref={vantaRef}
                        className="absolute inset-0 z-0"
                        style={{ width: "100%", height: "100%" }}
                  />

                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 z-[1] bg-black/30" />
                  <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent to-black/30" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-7xl mx-auto">
                        <motion.div
                              className="flex flex-wrap justify-center gap-x-4 md:gap-x-6"
                              variants={container}
                              initial="hidden"
                              animate="visible"
                        >
                              {words.map((word, index) => (
                                    <div
                                          key={index}
                                          className="overflow-hidden pb-2"
                                    >
                                          <motion.span
                                                variants={wordReveal}
                                                className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight leading-none inline-block will-change-transform text-white"
                                          >
                                                {word}
                                          </motion.span>
                                    </div>
                              ))}
                        </motion.div>

                        <div className="overflow-hidden mt-8">
                              <motion.p
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    transition={{ delay: 1.8, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                                    className="text-lg md:text-xl font-sans tracking-[0.25em] uppercase text-white/90"
                              >
                                    Premium Exhibition Booths &amp; Spatial Design
                              </motion.p>
                        </div>

                        {/* Animated divider line */}
                        <motion.div
                              initial={{ scaleX: 0, opacity: 0 }}
                              animate={{ scaleX: 1, opacity: 1 }}
                              transition={{ delay: 2.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                              className="mt-6 h-[1px] w-24 origin-center"
                              style={{
                                    background: "linear-gradient(90deg, transparent, rgba(255, 153, 25, 0.6), transparent)",
                              }}
                        />
                  </div>

                  <ElasticString />
            </section>
      );
};
