"use client";

import { motion } from "framer-motion";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
      const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
      };

      return (
            <footer className="relative bg-neutral-950 text-white overflow-hidden">
                  {/* Large background text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <h1 className="text-[20vw] font-heading uppercase leading-none text-white/[0.02] tracking-tighter whitespace-nowrap">
                              Axis Designers
                        </h1>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-8">
                        {/* Top section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-neutral-800">
                              {/* CTA */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true }}
                                    className="md:col-span-2"
                              >
                                    <p className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4">
                                          Let&apos;s Work Together
                                    </p>
                                    <h2 className="text-4xl md:text-6xl font-heading uppercase leading-tight">
                                          Have a project<br />in mind?
                                    </h2>
                                    <a
                                          href="/contact"
                                          className="group relative inline-flex items-center gap-3 mt-10 px-10 py-5 rounded-full border border-neutral-600 text-white font-sans text-sm uppercase tracking-[0.2em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white"
                                    >
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10 flex items-center gap-3">
                                                Connect
                                                <svg className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                          </span>
                                    </a>
                              </motion.div>

                              {/* Contact Quick Info */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true }}
                                    className="space-y-6 text-sm font-sans"
                              >
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Address</span>
                                          </div>
                                          <p className="text-neutral-300">Villa No. 2 - 62nd St</p>
                                          <p className="text-neutral-300">Al Barsha 3, Dubai, UAE</p>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Phone className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Phone</span>
                                          </div>
                                          <p className="text-neutral-300">+971 (0)4 338 7700</p>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Mail className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Email</span>
                                          </div>
                                          <p className="text-neutral-300">info@axisdesigners.ae</p>
                                    </div>
                              </motion.div>
                        </div>

                        {/* Bottom bar */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
                              <p className="text-neutral-600 text-xs font-sans">
                                    &copy; 2026 Axis Designers. All rights reserved.
                              </p>

                              <button
                                    onClick={scrollToTop}
                                    className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
                              >
                                    <ArrowUp className="w-4 h-4" />
                              </button>
                        </div>
                  </div>
            </footer>
      );
};
