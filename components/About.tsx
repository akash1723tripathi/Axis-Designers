"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "@/components/PageTransition";

export const About = () => {
      const { navigateWithTransition } = usePageTransition();

      return (
            <section id="about" className="relative py-32 min-h-[80vh] flex items-center justify-center bg-neutral-950">
                  {/* Content */}
                  <div className="relative z-10 max-w-4xl px-4 text-center">
                        <motion.h2
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: false, amount: 0.3 }}
                              className="text-4xl md:text-6xl font-heading uppercase leading-tight text-white"
                        >
                              We don&apos;t just build booths. <br /> We create <span className="text-orange-400">experiential landmarks.</span>
                        </motion.h2>

                        <motion.p
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              viewport={{ once: false, amount: 0.3 }}
                              className="mt-8 text-xl md:text-2xl font-sans text-neutral-200 max-w-2xl mx-auto"
                        >
                              Axis Designers blends architectural precision with brand storytelling to deliver award-winning exhibition spaces globally.
                        </motion.p>

                        <motion.button
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              viewport={{ once: false, amount: 0.3 }}
                              onClick={(e) => navigateWithTransition("/team", { x: e.clientX, y: e.clientY })}
                              className="group relative inline-flex items-center gap-3 mt-12 px-10 py-5 rounded-full border border-neutral-600 text-white font-sans text-sm uppercase tracking-[0.2em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white cursor-pointer"
                        >
                              <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                              <span className="relative z-10 flex items-center gap-3">
                                    Meet the Team
                                    <svg className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                              </span>
                        </motion.button>
                  </div>
            </section>
      );
};
