"use client";

import { motion } from "framer-motion";
import { ArrowUp, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { usePageTransition } from "@/components/layout/PageTransition";

export const Footer = () => {
      const { navigateWithTransition } = usePageTransition();

      const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
      };

      return (
            <footer className="relative bg-neutral-900 text-white overflow-hidden min-h-[90vh] flex flex-col">
                  {/* Curved top edge */}
                  <div className="relative w-full bg-neutral-950 shrink-0">
                        <div className="relative w-full h-[60px] md:h-[80px]">
                              <div className="absolute bottom-0 left-0 right-0 h-full bg-neutral-900 rounded-t-[40px] md:rounded-t-[60px]" />
                        </div>
                  </div>

                  {/* Content — grows to fill 90vh */}
                  <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-16 md:pt-24 pb-8 flex-1 flex flex-col justify-between w-full">
                        {/* CTA Section */}
                        <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                              viewport={{ once: false, amount: 0.3 }}
                              className="pb-16 border-b border-white/[0.06]"
                        >
                              <p className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4">
                                    Let&apos;s Work Together
                              </p>
                              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading uppercase leading-tight">
                                    Have a project in mind?
                              </h2>
                              <button
                                    onClick={(e) => navigateWithTransition("/contact", { x: e.clientX, y: e.clientY })}
                                    className="group relative inline-flex items-center gap-3 mt-10 px-10 py-5 rounded-full border border-neutral-600 text-white font-sans text-sm uppercase tracking-[0.2em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white cursor-pointer"
                              >
                                    <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                    <span className="relative z-10 flex items-center gap-3">
                                          Connect
                                          <svg className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                          </svg>
                                    </span>
                              </button>
                        </motion.div>

                        {/* Global Offices */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-16 border-b border-white/[0.06]">
                              {/* India */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="space-y-5 text-sm font-sans"
                              >
                                    <p className="text-orange-500 uppercase tracking-[0.3em] text-xs font-semibold">India</p>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Address</span>
                                          </div>
                                          <a href="https://www.google.com/maps/search/?api=1&query=Corporate+Space+14+1st+Floor+ANSAL+PLAZA+Neelpadam+Kunj+Complex+Kamma+1+Vaishali+Ghaziabad+Uttar+Pradesh+201010" target="_blank" rel="noopener noreferrer" className="text-neutral-300 leading-relaxed block hover:text-orange-500 transition-colors duration-300">
                                                Corporate Space -14, 1st Floor, ANSAL PLAZA, Vaishali, Ghaziabad  201010
                                                <br />
                                                Uttar Pradesh, India
                                          </a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Phone className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Phone</span>
                                          </div>
                                          <a href="tel:+919811200735" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">+91 (981) 120-0735</a>
                                          
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MessageCircle className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">WhatsApp</span>
                                          </div>
                                          <a href="https://wa.me/919811200735" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">+91 (981) 120-0735</a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Mail className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Email</span>
                                          </div>
                                          <a href="https://mail.google.com/mail/?view=cm&to=info@axisdesigners.com&su=Project%20Inquiry" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">info@axisdesigners.com</a>
                                    </div>
                              </motion.div>

                              {/* Germany */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="space-y-5 text-sm font-sans"
                              >
                                    <p className="text-orange-500 uppercase tracking-[0.3em] text-xs font-semibold">Germany</p>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Address</span>
                                          </div>
                                          <a href="https://www.google.com/maps/search/?api=1&query=Axis+Designers+GmbH+Medienhaus+M%C3%B6rikestrasse+67+170199+Stuttgart+Germany" target="_blank" rel="noopener noreferrer" className="text-neutral-300 leading-relaxed block hover:text-orange-500 transition-colors duration-300">
                                                Axis Designers <br />
                                                GmbH, Medienhaus, M&ouml;rikestrasse 67, 170199 Stuttgart, Germany
                                          </a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Phone className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Phone</span>
                                          </div>
                                          <a href="tel:+919811200735" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">+91 (981) 120-0735</a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MessageCircle className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">WhatsApp</span>
                                          </div>
                                          <a href="https://wa.me/919811200735" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">+91 (981) 120-0735</a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Mail className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Email</span>
                                          </div>
                                          <a href="https://mail.google.com/mail/?view=cm&to=info@axisdesigners.com&su=Project%20Inquiry" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">info@axisdesigners.com</a>
                                    </div>
                              </motion.div>

                              {/* Spain */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="space-y-5 text-sm font-sans"
                              >
                                    <p className="text-orange-500 uppercase tracking-[0.3em] text-xs font-semibold">Spain</p>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Address</span>
                                          </div>
                                          <a href="https://www.google.com/maps/search/?api=1&query=Axis+Designers+GmbH+Medienhaus+M%C3%B6rikestrasse+67+170199+Stuttgart+Germany" target="_blank" rel="noopener noreferrer" className="text-neutral-300 leading-relaxed block hover:text-orange-500 transition-colors duration-300">
                                                Axis Designers <br />
                                                GmbH, Medienhaus, M&ouml;rikestrasse 67, 170199 Stuttgart, Germany
                                          </a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Phone className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Phone</span>
                                          </div>
                                          <a href="tel:+919811200735" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">+91 (981) 120-0735</a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <MessageCircle className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">WhatsApp</span>
                                          </div>
                                          <a href="https://wa.me/919811200735" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">+91 (981) 120-0735</a>
                                    </div>
                                    <div className="space-y-1">
                                          <div className="flex items-center gap-2 text-neutral-500 mb-2">
                                                <Mail className="w-4 h-4" />
                                                <span className="uppercase tracking-wider text-xs">Email</span>
                                          </div>
                                          <a href="https://mail.google.com/mail/?view=cm&to=info@axisdesigners.com&su=Project%20Inquiry" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">info@axisdesigners.com</a>
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
