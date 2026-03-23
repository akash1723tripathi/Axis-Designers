"use client";

import { motion } from "framer-motion";

const services = [
      {
            title: "Exhibition &\nBooth Design",
            description: "We craft custom-built exhibition stands that captivate audiences and elevate brand presence across global trade shows.",
            dotColor: "#f97316",
            meshGradient: `
                  radial-gradient(at 0% 0%, #fb923c 0%, transparent 50%),
                  radial-gradient(at 100% 0%, #f43f5e 0%, transparent 50%),
                  radial-gradient(at 100% 100%, #f472b6 0%, transparent 50%),
                  radial-gradient(at 0% 100%, #c084fc 0%, transparent 50%),
                  linear-gradient(135deg, #fb923c, #f472b6, #c084fc)
            `,
      },
      {
            title: "Retail Branding\n& Visual Merchandising",
            description: "We create immersive retail experiences through strategic branding, signage, displays, and POS elements.",
            dotColor: "#ec4899",
            meshGradient: `
                  radial-gradient(at 0% 0%, #f472b6 0%, transparent 50%),
                  radial-gradient(at 100% 0%, #fb7185 0%, transparent 50%),
                  radial-gradient(at 100% 100%, #e879f9 0%, transparent 50%),
                  radial-gradient(at 0% 100%, #f43f5e 0%, transparent 50%),
                  linear-gradient(135deg, #f472b6, #fb7185, #e879f9)
            `,
      },
      {
            title: "Event &\nActivation Setups",
            description: "From product launches to brand activations, we bring ideas to life with engaging, well-executed environments.",
            dotColor: "#a855f7",
            meshGradient: `
                  radial-gradient(at 0% 0%, #c084fc 0%, transparent 50%),
                  radial-gradient(at 100% 0%, #e879f9 0%, transparent 50%),
                  radial-gradient(at 100% 100%, #a78bfa 0%, transparent 50%),
                  radial-gradient(at 0% 100%, #c084fc 0%, transparent 50%),
                  linear-gradient(135deg, #c084fc, #e879f9, #a78bfa)
            `,
      },
      {
            title: "Interior &\nArchitectural Solutions",
            description: "From retail to corporate spaces, we design and execute modern interiors that reflect your identity and functionality.",
            dotColor: "#ef4444",
            meshGradient: `
                  radial-gradient(at 0% 0%, #f87171 0%, transparent 50%),
                  radial-gradient(at 100% 0%, #fb923c 0%, transparent 50%),
                  radial-gradient(at 100% 100%, #fdba74 0%, transparent 50%),
                  radial-gradient(at 0% 100%, #f43f5e 0%, transparent 50%),
                  linear-gradient(135deg, #f87171, #fb923c, #fdba74)
            `,
      },
];

export const WhatWeDo = () => {
      return (
            <section className="relative bg-neutral-950 overflow-hidden py-24 md:py-32">
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
                                                className="absolute top-7 right-7 md:top-8 md:right-8 w-9 h-9 rounded-full scale-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center group-hover:scale-[25]"
                                                style={{ background: service.meshGradient }}
                                          />

                                          {/* Card content */}
                                          <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
                                                {/* Fixed-height top zone for title alignment */}
                                                <div className="min-h-[120px] md:min-h-[140px] flex items-start">
                                                      <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight text-white whitespace-pre-line transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                                                            {service.title}
                                                      </h3>
                                                </div>

                                                {/* Spacer pushes description to bottom */}
                                                <div className="flex-1" />

                                                {/* Description — always anchored to bottom */}
                                                <p className="text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-white/80 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
