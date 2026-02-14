"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Paperclip } from "lucide-react";

const budgetOptions = ["10-20k", "30-40k", "40-50k", "50-100k", "> 100k"];

export const Contact = () => {
      const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

      return (
            <section id="contact-form" className="relative">
                  {/* Curved top divider - light section appearing from dark */}
                  <div className="relative w-full bg-neutral-950">
                        <div className="relative w-full h-[60px] md:h-[80px]">
                              <div className="absolute bottom-0 left-0 right-0 h-full bg-[#f5f0eb] rounded-t-[40px] md:rounded-t-[60px]" />
                        </div>
                  </div>

                  {/* Hero viewscreen - "Say Hi" */}
                  <div className="bg-[#f5f0eb] relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-40 flex flex-col items-center text-center">
                              <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="text-sm font-sans uppercase tracking-[0.3em] text-neutral-500 mb-8 border border-neutral-300 rounded-full px-5 py-2"
                              >
                                    Say Hi
                              </motion.span>

                              <div className="overflow-hidden">
                                    <motion.h2
                                          initial={{ y: "100%" }}
                                          whileInView={{ y: "0%" }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as const }}
                                          className="text-5xl md:text-7xl lg:text-[6rem] font-heading uppercase leading-[0.95] text-neutral-900 tracking-tight"
                                    >
                                          No Need
                                    </motion.h2>
                              </div>
                              <div className="overflow-hidden">
                                    <motion.h2
                                          initial={{ y: "100%" }}
                                          whileInView={{ y: "0%" }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] as const }}
                                          className="text-5xl md:text-7xl lg:text-[6rem] font-heading uppercase leading-[0.95] text-neutral-900 tracking-tight"
                                    >
                                          To Be Shy.
                                    </motion.h2>
                              </div>

                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mt-12"
                              >
                                    <a
                                          href="#contact-form-fields"
                                          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-neutral-400 text-neutral-800 font-sans text-sm uppercase tracking-[0.15em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white"
                                    >
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10 flex items-center gap-3">
                                                <span className="w-5 h-[1px] bg-current" />
                                                Talk to Axis Designers
                                          </span>
                                    </a>
                              </motion.div>
                        </div>
                  </div>

                  {/* Contact Form Section */}
                  <div id="contact-form-fields" className="bg-[#f5f0eb]">
                        <div className="max-w-3xl mx-auto px-8 md:px-16 pb-32">
                              {/* Name */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-12"
                              >
                                    <input
                                          type="text"
                                          placeholder="Name"
                                          className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-sans text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                              </motion.div>

                              {/* Email */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.05, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-12"
                              >
                                    <input
                                          type="email"
                                          placeholder="Email"
                                          className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-sans text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                              </motion.div>

                              {/* Project Description */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-16"
                              >
                                    <textarea
                                          placeholder="Tell us about your project"
                                          rows={1}
                                          className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-sans text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                                    />
                              </motion.div>

                              {/* Budget Selection */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-16"
                              >
                                    <p className="text-lg font-sans font-semibold text-neutral-800 mb-6">
                                          Project budget (USD)
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                          {budgetOptions.map((option) => (
                                                <button
                                                      key={option}
                                                      onClick={() => setSelectedBudget(option)}
                                                      className={`px-5 py-2.5 rounded-full border text-sm font-sans transition-all duration-300 ${selectedBudget === option
                                                            ? "bg-orange-500 border-orange-500 text-white"
                                                            : "border-neutral-400 text-neutral-700 hover:border-neutral-800"
                                                            }`}
                                                >
                                                      {option}
                                                </button>
                                          ))}
                                    </div>
                              </motion.div>

                              {/* Attachment */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-16"
                              >
                                    <label className="inline-flex items-center gap-2 text-neutral-800 font-sans font-semibold cursor-pointer hover:text-orange-600 transition-colors group">
                                          <Paperclip className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                          <span className="border-b-2 border-current pb-0.5">Add attachment</span>
                                          <input type="file" className="hidden" />
                                    </label>
                              </motion.div>

                              {/* Send Button */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.25, ease: [0.76, 0, 0.24, 1] as const }}
                              >
                                    <button className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-neutral-400 text-neutral-700 font-sans text-sm uppercase tracking-[0.15em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white">
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10">Send request</span>
                                    </button>
                              </motion.div>
                        </div>
                  </div>

                  {/* Bottom curved divider - back to dark */}
                  <div className="relative w-full bg-[#f5f0eb]">
                        <div className="relative w-full h-[60px] md:h-[80px]">
                              <div className="absolute bottom-0 left-0 right-0 h-full bg-neutral-950 rounded-t-[40px] md:rounded-t-[60px]" />
                        </div>
                  </div>
            </section>
      );
};
