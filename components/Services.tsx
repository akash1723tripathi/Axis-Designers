"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
      {
            id: "01",
            title: "Exhibition Stands",
            description: "Custom-built exhibition booths and pavilions designed to make your brand the center of attention at trade shows worldwide.",
      },
      {
            id: "02",
            title: "Corporate Interiors",
            description: "Transforming workspaces into inspiring environments that reflect your brand identity and culture.",
      },
      {
            id: "03",
            title: "Retail & Commercial",
            description: "Immersive retail experiences and commercial spaces that drive engagement and elevate customer journeys.",
      },
      {
            id: "04",
            title: "Event Production",
            description: "End-to-end event design and production — from concept and 3D visualization to on-site execution.",
      },
];

export const Services = () => {
      return (
            <section id="services" className="py-24 bg-neutral-950 text-white">
                  <div className="max-w-7xl mx-auto px-4">
                        <div className="mb-20">
                              <div className="flex items-center gap-4 mb-6">
                                    <a href="/solutions" className="group/arrow flex items-center justify-center w-12 h-12 rounded-full border border-orange-500/50 hover:bg-orange-500 transition-all duration-300 hover:scale-110">
                                          <ArrowUpRight size={24} className="text-orange-500 group-hover/arrow:text-white transition-colors duration-300" />
                                    </a>
                                    <h2 className="text-5xl md:text-7xl font-heading uppercase">Our Expertise</h2>
                              </div>
                              <div className="w-full h-px bg-neutral-800" />
                        </div>

                        <div className="grid grid-cols-1 gap-12">
                              {services.map((service, i) => (
                                    <motion.div
                                          key={i}
                                          initial={{ opacity: 0, y: 50 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: i * 0.1 }}
                                          viewport={{ once: true }}
                                          className="group border-b border-neutral-800 pb-12 cursor-pointer"
                                    >
                                          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                                                <span className="text-sm font-mono text-neutral-500">/{service.id}</span>
                                                <h3 className="text-4xl md:text-6xl font-heading uppercase group-hover:text-neutral-400 transition-colors w-full md:w-1/2">
                                                      {service.title}
                                                </h3>
                                                <p className="font-sans text-neutral-400 max-w-sm">
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
