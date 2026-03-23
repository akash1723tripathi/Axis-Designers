"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ─── Scroll‑driven text roller ─── */
function ScrollRoller({
      words,
      scrollProgress,
      className = "",
}: {
      words: [string, string, string];
      scrollProgress: MotionValue<number>;
      className?: string;
}) {
      // Smooth continuous scroll through 3 words
      const y = useTransform(
            scrollProgress,
            [0.05, 0.2, 0.35],
            ["0%", "-33.33%", "-66.66%"]
      );

      return (
            <span
                  className={`roller-wrap ${className}`}
                  style={{
                        display: "inline-block",
                        height: "1.15em",
                        lineHeight: "1.15em",
                        position: "relative",
                        overflow: "hidden",
                        verticalAlign: "bottom",
                  }}
            >
                  <motion.span
                        style={{ y, display: "block" }}
                  >
                        {words.map((word, i) => (
                              <span key={i} style={{ display: "block", height: "1.15em", lineHeight: "1.15em" }}>
                                    {word}
                              </span>
                        ))}
                  </motion.span>
            </span>
      );
}

export const AboutHero = () => {
      const sectionRef = useRef<HTMLDivElement>(null);

      // Track scroll progress across the entire tall section (200vh)
      const { scrollYProgress } = useScroll({
            target: sectionRef,
            offset: ["start start", "end end"],
      });

      // Text parallax & fade happen in the second half of the scroll (after text roll completes)
      const heroTextY = useTransform(scrollYProgress, [0.5, 1], ["0%", "30%"]);
      const heroOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);

      // Hide scroll indicator once scroll begins
      const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

      return (
            // Tall section provides the scroll runway — the page "stays" here while the animation plays
            <section ref={sectionRef} className="relative bg-neutral-950" style={{ height: "200vh" }}>
                  {/* Sticky inner panel — pinned to viewport while user scrolls through the 200vh section */}
                  <div
                        className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden"
                  >
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

                        {/* Main headline with scroll‑driven text rollers */}
                        <motion.div
                              style={{ y: heroTextY, opacity: heroOpacity }}
                              className="relative z-10 px-6 md:px-16 max-w-6xl"
                        >
                              <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-heading uppercase leading-[1.05] text-white text-center"
                              >
                                    From{" "}
                                    <ScrollRoller
                                          words={["Vision", "Ideas", "Spaces"]}
                                          scrollProgress={scrollYProgress}
                                          className="text-orange-400"
                                    />{" "}
                                    to{" "}
                                    <ScrollRoller
                                          words={["Reality ," ,"Exhibits ," ,"Statements ,"]}
                                          scrollProgress={scrollYProgress}
                                          className="text-orange-400 italic font-light"
                                    />
                                    <br />
                                    <span className="text-neutral-400">We craft spaces</span>
                                    <br />
                                    that inspire
                              </motion.h1>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 1 }}
                              style={{ opacity: scrollIndicatorOpacity }}
                              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                        >
                              <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-600 to-transparent"
                              />
                        </motion.div>
                  </div>
            </section>
      );
};
