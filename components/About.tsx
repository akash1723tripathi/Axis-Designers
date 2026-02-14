"use client";

import { motion } from "framer-motion";

export const About = () => {
      return (
            <section id="about" className="relative py-32 min-h-[80vh] flex items-center justify-center bg-neutral-950">
                  {/* Content */}
                  <div className="relative z-10 max-w-4xl px-4 text-center">
                        <motion.h2
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              viewport={{ once: true }}
                              className="text-4xl md:text-6xl font-heading uppercase leading-tight text-white"
                        >
                              We don&apos;t just build booths. <br /> We create <span className="text-orange-400">experiential landmarks.</span>
                        </motion.h2>

                        <motion.p
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="mt-8 text-xl md:text-2xl font-sans text-neutral-200 max-w-2xl mx-auto"
                        >
                              Axis Designers blends architectural precision with brand storytelling to deliver award-winning exhibition spaces globally.
                        </motion.p>
                  </div>
            </section>
      );
};
