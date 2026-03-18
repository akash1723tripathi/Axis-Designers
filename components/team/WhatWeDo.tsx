"use client";

import { motion } from "framer-motion";

const services = [
      {
            title: "Exhibition &\nBooth Design",
            description: "We craft custom-built exhibition stands that captivate audiences and elevate brand presence across global trade shows.",
            dotColor: "#f97316",
            meshGradient: `
                  radial-gradient(at 0% 0%, #f97316 0%, transparent 60%),
                  radial-gradient(at 100% 0%, #ef4444 0%, transparent 60%),
                  radial-gradient(at 100% 100%, #ec4899 0%, transparent 60%),
                  radial-gradient(at 0% 100%, #a855f7 0%, transparent 60%),
                  linear-gradient(135deg, #f97316, #ec4899, #a855f7)
            `,
      },
      {
            title: "Retail Branding\n& Visual Merchandising",
            description: "We create immersive retail experiences through strategic branding, signage, displays, and POS elements.",
            dotColor: "#ec4899",
            meshGradient: `
                  radial-gradient(at 0% 0%, #ec4899 0%, transparent 60%),
                  radial-gradient(at 100% 0%, #f43f5e 0%, transparent 60%),
                  radial-gradient(at 100% 100%, #be185d 0%, transparent 60%),
                  radial-gradient(at 0% 100%, #e11d48 0%, transparent 60%),
                  linear-gradient(135deg, #ec4899, #f43f5e, #be185d)
            `,
      },
      {
            title: "Event &\nActivation Setups",
            description: "From product launches to brand activations, we bring ideas to life with engaging, well-executed environments.",
            dotColor: "#a855f7",
            meshGradient: `
                  radial-gradient(at 0% 0%, #a855f7 0%, transparent 60%),
                  radial-gradient(at 100% 0%, #c026d3 0%, transparent 60%),
                  radial-gradient(at 100% 100%, #7c3aed 0%, transparent 60%),
                  radial-gradient(at 0% 100%, #9333ea 0%, transparent 60%),
                  linear-gradient(135deg, #a855f7, #c026d3, #7c3aed)
            `,
      },
      {
            title: "Interior &\nArchitectural Solutions",
            description: "From retail to corporate spaces, we design and execute modern interiors that reflect your identity and functionality.",
            dotColor: "#ef4444",
            meshGradient: `
                  radial-gradient(at 0% 0%, #ef4444 0%, transparent 60%),
                  radial-gradient(at 100% 0%, #f97316 0%, transparent 60%),
                  radial-gradient(at 100% 100%, #ea580c 0%, transparent 60%),
                  radial-gradient(at 0% 100%, #dc2626 0%, transparent 60%),
                  linear-gradient(135deg, #ef4444, #f97316, #ea580c)
            `,
      },
];

export const WhatWeDo = () => {
      return (
            <section className="relative bg-neutral-950 overflow-hidden py-24 md:py-32">
                  {/* Ambient gradient glow — purple/pink flowing from top-right */}
                  <div
                        className="absolute -top- right-0 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
                        style={{
                              background: `
                              radial-gradient(at 60% 30%, rgba(192,132,252,0.12) 0px, transparent 50%),
                              radial-gradient(at 80% 70%, rgba(236,72,153,0.10) 0px, transparent 50%),
                              radial-gradient(at 30% 80%, rgba(167,139,250,0.08) 0px, transparent 50%)
                              `,
                        }}
                  />
                  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
                        {/* Heading */}
                        <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="text-center mb-16 md:mb-24"
                        >
                              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
                                    <span className="italic font-light text-neutral-500">What</span>
                                    <br />
                                    <span className="text-white font-bold">We do</span>
                              </h2>
                        </motion.div>

                        {/* Cards grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {services.map((service, i) => (
                                    <motion.div
                                          key={service.title}
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                          whileHover={{ scale: 1.05, y: -12 }}
                                          className="group relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[360px] cursor-pointer transition-shadow duration-500 hover:shadow-[0_25px_60px_-12px_rgba(249,115,22,0.3)]"
                                    >
                                          {/* Default state: dark glass card */}
                                          <div className="absolute inset-0 bg-neutral-900/80 border border-neutral-800 rounded-2xl" />

                                          {/* Circle that scales up to cover the card on hover */}
                                          <div
                                                className="absolute top-7 left-7 md:top-8 md:left-8 w-8 h-8 rounded-full scale-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center group-hover:scale-[25]"
                                                style={{ background: service.meshGradient }}
                                          />

                                          {/* Card content */}
                                          <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
                                                {/* Spacer for circle area — collapses on hover */}
                                                <div className="h-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-0" />

                                                {/* Title — lifts up on hover */}
                                                <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight text-white group-hover:text-white whitespace-pre-line transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                                                      {service.title}
                                                </h3>

                                                {/* Flexible spacer */}
                                                <div className="flex-1" />

                                                {/* Description — lifts up on hover */}
                                                <p className="text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-white/80 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3">
                                                      {service.description}
                                                </p>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>

            </section>
      );
};
