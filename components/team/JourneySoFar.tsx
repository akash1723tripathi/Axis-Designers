"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Animated counter ─── */
function CountUp({ target, suffix = "", duration = 1.5 }: { target: number; suffix?: string; duration?: number }) {
      const ref = useRef<HTMLSpanElement>(null);
      const inView = useInView(ref, { once: true, margin: "-50px" });
      const [count, setCount] = useState(0);

      useEffect(() => {
            if (!inView) return;
            const start = performance.now();
            const step = (now: number) => {
                  const elapsed = now - start;
                  const progress = Math.min(elapsed / (duration * 1000), 1);
                  // Ease-out cubic for a fast start, smooth finish
                  const eased = 1 - Math.pow(1 - progress, 3);
                  setCount(Math.round(eased * target));
                  if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
      }, [inView, target, duration]);

      return <span ref={ref}>{count}{suffix}</span>;
}

export const JourneySoFar = () => {
      const [hovered, setHovered] = useState(false);

      return (
            <section className="relative bg-neutral-950 overflow-hidden py-32 md:py-40">
                  {/* Background gradient — same as AboutHero */}
                  <div
                        className="absolute top-1/9 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                        style={{
                              background: `
                              radial-gradient(at 27% 37%, rgba(249,168,212,0.15) 0px, transparent 50%),
                              radial-gradient(at 97% 21%, rgba(192,132,252,0.12) 0px, transparent 50%),
                              radial-gradient(at 52% 99%, rgba(236,72,153,0.10) 0px, transparent 50%),
                              radial-gradient(at 10% 29%, rgba(167,139,250,0.08) 0px, transparent 50%),
                              radial-gradient(at 97% 96%, rgba(244,114,182,0.10) 0px, transparent 50%)
                              `,
                        }}
                  />
                  <div
                        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.10) 0%, rgba(120,53,15,0.05) 50%, transparent 100%)" }}
                  />

                  <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
                        {/* Heading */}
                        <motion.h2
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="text-5xl md:text-7xl lg:text-8xl font-heading italic font-light text-white text-center mb-30 -mt-30"
                        >
                              Journey so far
                        </motion.h2>

                        {/* Paragraphs */}
                        <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              className="space-y-8 mb-20"
                        >
                              <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed text-justify">
                                    Axis Designers began in 1997 with a small booth and a big vision. Founded by architects Amit Jain and Alok Singh, we quickly earned recognition in the Indian exhibition space. By 2015, we expanded to the UAE, and in 2018, established a strong foothold in Europe with our Germany office.
                              </p>
                              {/* <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed text-justify">
                                    Today, we operate in over 15 countries, delivering turnkey exhibition and design solutions to global brands across industries.
                              </p> */}
                              <div className="flex flex-wrap gap-8 md:gap-18 pt-4">
                                                <div>
                                                      <p className="font-heading text-3xl md:text-4xl text-white"><CountUp target={28} suffix="+" /></p>
                                                      <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mt-1">
                                                            Years of <br/>
                                                            Experience
                                                      </p>
                                                </div>
                                                <div>
                                                      <p className="font-heading text-3xl md:text-4xl text-white"><CountUp target={100} suffix="+" /></p>
                                                      <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mt-1">
                                                            Global
                                                            <br/> Clients
                                                      </p>
                                                </div>
                                                <div>
                                                      <p className="font-heading text-3xl md:text-4xl text-white"><CountUp target={15} suffix="+" /></p>
                                                      <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mt-1">
                                                            Countries
                                                      </p>
                                                </div>
                                                <div>
                                                      <p className="font-heading text-3xl md:text-4xl text-white"><CountUp target={5000} suffix="+" /></p>
                                                      <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mt-1">
                                                            Projects
                                                            <br/> Delivered
                                                      </p>
                                                </div>
                                                <div>
                                                      <p className="font-heading text-3xl md:text-4xl text-white"><CountUp target={1000} suffix="+" /></p>
                                                      <p className="text-xs font-sans uppercase tracking-widest text-neutral-500 mt-1">
                                                            Exhibitions
                                                            <br/> Events
                                                      </p>
                                                </div> 
                                                
                                          </div>
                        </motion.div>

                        {/* Animated gradient bar */}
                        <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: false, amount: 0.5 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="flex justify-center"
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                        >
                              <motion.div
                                    animate={{ width: hovered ? "100%" : "280px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative h-2 rounded-full overflow-hidden"
                              >
                                    <div
                                          className="absolute inset-0 rounded-full"
                                          style={{
                                                background: "linear-gradient(90deg, #8b5cf6, #d946ef, #ec4899, #f43f5e, #f97316)",
                                                backgroundSize: "200% 100%",
                                                animation: "riverFlow 3s linear infinite",
                                          }}
                                    />
                              </motion.div>
                        </motion.div>
                  </div>

                  {/* River animation keyframes */}
                  <style jsx>{`
                        @keyframes riverFlow {
                              0% { background-position: 0% 50%; }
                              100% { background-position: 200% 50%; }
                        }
                  `}</style>
            </section>
      );
};
