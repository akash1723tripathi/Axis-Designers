"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
      {
            id: "01",
            title: "Custom Fabrication",
            description: "Bespoke booth structures built with precision engineering in our dedicated workshops.",
      },
      {
            id: "02",
            title: "3D Visualization",
            description: "Photorealistic renders and walkthroughs to visualize your space before production begins.",
      },
      {
            id: "03",
            title: "Global Logistics",
            description: "Seamless turnkey execution anywhere in the world, handling shipping, installation and storage.",
      },
      {
            id: "04",
            title: "Interactive Tech",
            description: "Integrating AR, VR and touch displays to create immersive brand experiences.",
      },
];

export const Services = () => {
      return (
            <section id="services" className="py-24 bg-neutral-950 text-white">
                  <div className="max-w-7xl mx-auto px-4">
                        <div className="mb-20">
                              <h2 className="text-5xl md:text-7xl font-heading uppercase mb-6">Our Expertise</h2>
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
                                                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                                      <ArrowUpRight size={48} className="text-white" />
                                                </div>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
