"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const marqueeText1 = "Discover Axis Designers  ";
const marqueeText2 = "Crafting Extraordinary Spaces - ";

export const Discovery = () => {
      const sectionRef = useRef<HTMLDivElement>(null);
      const [videoOpen, setVideoOpen] = useState(false);

      const { scrollYProgress } = useScroll({
            target: sectionRef,
            offset: ["start end", "end start"],
      });

      // Move text left as user scrolls down
      const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
      // Move second row right as user scrolls down
      const xRight = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

      return (
            <>
                  <section
                        ref={sectionRef}
                        className="relative bg-neutral-950 overflow-hidden py-20 md:py-32"
                  >
                        {/* Scrolling text marquee */}
                        <div className="space-y-4 mb-20 md:mb-32 select-none">
                              {/* Row 1 - scrolls left */}
                              <div className="overflow-hidden">
                                    <motion.div
                                          style={{ x: xLeft }}
                                          className="flex whitespace-nowrap"
                                    >
                                          {[...Array(4)].map((_, i) => (
                                                <span
                                                      key={i}
                                                      className="pl-120 text-[12vw] md:text-[10vw] font-heading uppercase text-white leading-none tracking-tight px-4"
                                                >
                                                      {marqueeText1}
                                                </span>
                                          ))}
                                    </motion.div>
                              </div>

                              {/* Row 2 - scrolls right (stroke text) */}
                              <div className="overflow-hidden">
                                    <motion.div
                                          style={{ x: xRight }}
                                          className="flex whitespace-nowrap"
                                    >
                                          {[...Array(4)].map((_, i) => (
                                                <span
                                                      key={i + 10}
                                                      className=" text-[8vw] md:text-[6vw] font-heading uppercase leading-none tracking-tight px-4"
                                                      style={{
                                                            WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                                                            color: "transparent",
                                                      }}
                                                >
                                                      {marqueeText2}
                                                </span>
                                          ))}
                                    </motion.div>
                              </div>
                        </div>

                        {/* Video preview */}
                        <div className="max-w-7xl mx-auto px-8 md:px-16">
                              <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
                                    data-cursor-text="Play"
                                    onClick={() => setVideoOpen(true)}
                                    className="relative aspect-video rounded-2xl overflow-hidden cursor-none group"
                              >
                                    {/* Video thumbnail / preview loop */}
                                    <video
                                          autoPlay
                                          muted
                                          loop
                                          playsInline
                                          preload="auto"
                                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    >
                                          <source src="/axis_final_video.mp4" type="video/mp4" />
                                    </video>

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                                    {/* Play icon hint (center, for non-custom-cursor devices) */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                          <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ delay: 0.3, duration: 0.5 }}
                                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center md:hidden"
                                          >
                                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                      <path d="M8 5v14l11-7z" />
                                                </svg>
                                          </motion.div>
                                    </div>
                              </motion.div>
                        </div>
                  </section>

                  {/* Fullscreen video overlay */}
                  <AnimatePresence>
                        {videoOpen && (
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center"
                                    onClick={() => setVideoOpen(false)}
                              >
                                    {/* Close button */}
                                    <button
                                          onClick={() => setVideoOpen(false)}
                                          className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                    >
                                          <X className="w-5 h-5" />
                                    </button>

                                    {/* Video player */}
                                    <motion.div
                                          initial={{ scale: 0.9, opacity: 0 }}
                                          animate={{ scale: 1, opacity: 1 }}
                                          exit={{ scale: 0.9, opacity: 0 }}
                                          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] as const }}
                                          className="w-[90vw] max-w-6xl aspect-video"
                                          onClick={(e) => e.stopPropagation()}
                                    >
                                          <video
                                                autoPlay
                                                controls
                                                playsInline
                                                className="w-full h-full rounded-xl"
                                          >
                                                <source src="/axis_final_video.mp4" type="video/mp4" />
                                          </video>
                                    </motion.div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </>
      );
};
