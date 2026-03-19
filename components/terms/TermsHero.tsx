"use client";

import { motion } from "framer-motion";

const fadeUp = {
      initial: { opacity: 0, y: 40 },
      animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
      },
};

const stagger = {
      animate: {
            transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
            },
      },
};

export const TermsHero = () => {
      return (
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                  {/* Background image — replace src with an actual image */}
                  <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/terms-hero.jpg')" }}
                  />
                  {/* Fallback gradient (visible until a real image is added) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Content */}
                  <motion.div
                        className="relative z-10 text-center text-white px-6"
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                  >
                        <motion.p
                              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-sans opacity-90"
                              variants={fadeUp}
                        >
                              Understanding Our
                        </motion.p>
                        <motion.h1
                              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
                              variants={fadeUp}
                        >
                              Terms &amp;
                              <br />
                              Conditions
                        </motion.h1>
                  </motion.div>
            </section>
      );
};
