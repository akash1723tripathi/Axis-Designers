"use client";

import { motion } from "framer-motion";

const milestones = [
      {
            year: "1997",
            description: "Founded by Ar. Amit Jain and Ar. Alok Singh, out of a small booth in the domestic market, created with pre used wood and furniture.",
            color: "#7c3aed",
      },
      {
            year: "2002",
            description: "First international exhibition in Europe after building a happy clientele in India.",
            color: "#9333ea",
      },
      {
            year: "2008",
            description: "Won SMS award in the Largest Stall International category after multiple commendable gigs in the global market.",
            color: "#c026d3",
      },
      {
            year: "2012",
            description: "Running full-fledged global operations with an expansion to Middle East, North and South America, and the European Union, whereas winning aspired awards",
            color: "#db2777",
      },
      {
            year: "2020",
            description: "Represented almost all the leading brands that we dreamt of exhibiting. Creating the biggest pavilion for MG Motors and winning multiple awards in the Best Car Pavilion category",
            color: "#e11d48",
      },
      {
            year: "2024",
            description: "KIA, Bharat Mobility 2024 India House, Paris Olympics in 2024 | Indo Count in Bharat Textile 2024",
            color: "#f97316",
      },
];

export const Milestones = () => {
      return (
            <section className="relative bg-neutral-950 overflow-hidden py-24 md:py-32">
                  {/* Ambient gradient glow — amber/purple flowing from left */}
                  <div
                        className="absolute top-10 left-0 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
                        style={{
                              background: `
                              radial-gradient(at 30% 40%, rgba(249,115,22,0.10) 0px, transparent 50%),
                              radial-gradient(at 60% 70%, rgba(192,132,252,0.08) 0px, transparent 50%),
                              radial-gradient(at 20% 80%, rgba(236,72,153,0.07) 0px, transparent 50%)
                              `,
                        }}
                  />
                  <div className="max-w-7xl mx-auto px-6 md:px-16">
                        {/* Heading */}
                        <motion.h2
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="text-5xl md:text-7xl lg:text-8xl font-heading text-white text-center mb-20 md:mb-28"
                        >
                              Milestones
                        </motion.h2>

                        {/* Desktop Timeline */}
                        <div className="hidden md:block">
                              {/* Top descriptions (odd indices: 0, 2, 4 → 1997, 2008, 2020) */}
                              <div className="grid grid-cols-6 gap-0 mb-4">
                                    {milestones.map((m, i) => (
                                          <motion.div
                                                key={`top-${m.year}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                className="flex flex-col items-center px-2"
                                          >
                                                {i % 2 === 0 ? (
                                                      <>
                                                            <p className="text-xs lg:text-sm font-sans italic text-neutral-400 text-center leading-relaxed mb-3 min-h-[80px] lg:min-h-[100px] flex items-end">
                                                                  {m.description}
                                                            </p>
                                                            {/* Connector: dot + dashed line */}
                                                            <div className="flex flex-col items-center">
                                                                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                                                                  <div className="w-px h-6 border-l-2 border-dashed border-neutral-700" />
                                                            </div>
                                                      </>
                                                ) : (
                                                      <div className="min-h-[80px] lg:min-h-[100px]" />
                                                )}
                                          </motion.div>
                                    ))}
                              </div>

                              {/* Chevron Arrow Bar */}
                              <div className="relative flex">
                                    {milestones.map((m, i) => (
                                          <motion.div
                                                key={`chevron-${m.year}`}
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                whileInView={{ opacity: 1, scaleX: 1 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                style={{ originX: 0 }}
                                                className="flex-1 relative"
                                          >
                                                <svg
                                                      viewBox="0 0 200 60"
                                                      preserveAspectRatio="none"
                                                      className="w-full h-14 lg:h-16"
                                                >
                                                      <polygon
                                                            points={i === 0
                                                                  ? "0,0 170,0 200,30 170,60 0,60"
                                                                  : "0,0 170,0 200,30 170,60 0,60 30,30"
                                                            }
                                                            fill={m.color}
                                                      />
                                                </svg>
                                                <span className="absolute inset-0 flex items-center justify-center text-white font-heading text-lg lg:text-2xl tracking-wide">
                                                      {m.year}
                                                </span>
                                          </motion.div>
                                    ))}
                              </div>

                              {/* Bottom descriptions (even indices: 1, 3, 5 → 2002, 2012, 2024) */}
                              <div className="grid grid-cols-6 gap-0 mt-4">
                                    {milestones.map((m, i) => (
                                          <motion.div
                                                key={`bottom-${m.year}`}
                                                initial={{ opacity: 0, y: -20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                                className="flex flex-col items-center px-2"
                                          >
                                                {i % 2 === 1 ? (
                                                      <>
                                                            {/* Connector: dashed line + dot */}
                                                            <div className="flex flex-col items-center">
                                                                  <div className="w-px h-6 border-l-2 border-dashed border-neutral-700" />
                                                                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                                                            </div>
                                                            <p className="text-xs lg:text-sm font-sans italic text-neutral-400 text-center leading-relaxed mt-3 min-h-[80px] lg:min-h-[100px]">
                                                                  {m.description}
                                                            </p>
                                                      </>
                                                ) : (
                                                      <div className="min-h-[80px] lg:min-h-[100px]" />
                                                )}
                                          </motion.div>
                                    ))}
                              </div>
                        </div>

                        {/* Mobile Timeline (vertical) */}
                        <div className="md:hidden space-y-0">
                              {milestones.map((m, i) => (
                                    <motion.div
                                          key={`mobile-${m.year}`}
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                          className="flex gap-4"
                                    >
                                          {/* Left: year badge + vertical line */}
                                          <div className="flex flex-col items-center flex-shrink-0">
                                                <div
                                                      className="w-16 h-10 rounded-md flex items-center justify-center"
                                                      style={{ backgroundColor: m.color }}
                                                >
                                                      <span className="text-white font-heading text-sm tracking-wide">{m.year}</span>
                                                </div>
                                                {i < milestones.length - 1 && (
                                                      <div className="w-px flex-1 min-h-[40px] border-l-2 border-dashed border-neutral-700" />
                                                )}
                                          </div>

                                          {/* Right: description */}
                                          <div className="pb-8 pt-1">
                                                <p className="text-sm font-sans italic text-neutral-400 leading-relaxed">
                                                      {m.description}
                                                </p>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
