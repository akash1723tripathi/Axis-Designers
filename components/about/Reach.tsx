"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Reach = () => {
      return (
            <section className="relative flex flex-col items-center bg-black overflow-hidden">
                  {/* Text overlay - positioned above the image */}
                  <div className="relative z-10 text-center px-6 pt-16 md:pt-20 pb-6 md:pb-8">
                        <motion.h2
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="text-4xl md:text-6xl lg:text-7xl font-heading uppercase text-white"
                        >
                              Our Global{" "}
                              <span className="text-orange-400">Reach</span>
                        </motion.h2>
                        <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1],
                              }}
                              className="mt-3 md:mt-4 text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto"
                        >
                              Active in Southeast Asia, Europe, Africa and America,
                              scaling to 15+ countries
                        </motion.p>
                  </div>

                  {/* Globe image - responsive height */}
                  <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                              duration: 1,
                              delay: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative w-full h-[20vh] md:h-[70vh] lg:h-[100vh]"
                  >
                        <Image
                              src="/global_reach2.png"
                              alt="Global reach map showing connections across continents"
                              fill
                              className="object-cover md:object-contain object-bottom"
                              sizes="100vw"
                              priority
                        />
                  </motion.div>
            </section>
      );
};
