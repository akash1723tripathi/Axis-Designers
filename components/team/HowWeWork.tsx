"use client";

import { motion } from "framer-motion";

const steps = [
      {
            title: "Discovery &\nBriefing",
            description: "We begin by understanding your goals, brand identity, and space requirements through in-depth discussions and research.",
            color: "#4c1d95",
      },
      {
            title: "Creative Ideation &\nConceptual Design",
            description: "Our design team transforms insights into innovative concepts that align with your brand and engage your audience.",
            color: "#7c3aed",
      },
      {
            title: "Budgeting, Technical\nDrawings & Approvals",
            description: "We prepare precise cost estimates and detailed drawings for client approval, ensuring clarity and compliance before execution.",
            color: "#db2777",
      },
      {
            title: "Manufacturing &\nOn-Site Execution",
            description: "From production to installation, we manage every detail with craftsmanship and on-ground coordination across locations.",
            color: "#e11d48",
      },
      {
            title: "Project Delivery &\nFeedback Loop",
            description: "We hand over a fully finished project — on time and on point — and incorporate client feedback to continually refine our approach.",
            color: "#f97316",
      },
];

export const HowWeWork = () => {
      return (
            <section className="relative bg-neutral-950 overflow-hidden">
                  {/* Ambient gradient glow — amber/rose flowing from bottom-left */}
                  <div
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                        style={{
                              background: `
                              radial-gradient(at 40% 60%, rgba(249,115,22,0.10) 0px, transparent 50%),
                              radial-gradient(at 70% 30%, rgba(244,114,182,0.08) 0px, transparent 50%),
                              radial-gradient(at 20% 80%, rgba(234,88,12,0.07) 0px, transparent 50%)
                              `,
                        }}
                  />
                  {/* Heading */}
                  <div className="max-w-7xl mx-auto px-6 md:px-16 pt-24 md:pt-32 pb-16 md:pb-24">
                        <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="text-center"
                        >
                              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
                                    <span className="italic font-light text-neutral-500">How We</span>
                                    <br />
                                    <span className="text-white font-bold">Work?</span>
                              </h2>
                        </motion.div>
                  </div>

                  {/* Steps row — edge to edge */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 px-3 pb-3">
                        {steps.map((step, i) => (
                              <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ scale: 1.05, y: -12, transition: { duration: 0.15, ease: "easeOut" } }}
                                    className="group relative p-6 md:p-8 min-h-[300px] md:min-h-[340px] flex flex-col justify-between overflow-hidden cursor-default rounded-2xl hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] hover:z-10"
                                    style={{ backgroundColor: step.color }}
                              >
                                    {/* Hover brightening overlay */}
                                    <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 transition-colors duration-150" />

                                    <div className="relative z-10">
                                          {/* Step number */}
                                          <span className="text-white/30 font-heading text-sm tracking-widest mb-4 block">
                                                0{i + 1}
                                          </span>

                                          {/* Title */}
                                          <h3 className="text-lg md:text-xl font-heading font-bold leading-tight text-white whitespace-pre-line">
                                                {step.title}
                                          </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="relative z-10 text-sm font-sans text-white/65 leading-relaxed mt-8">
                                          {step.description}
                                    </p>
                              </motion.div>
                        ))}
                  </div>
            </section>
      );
};
