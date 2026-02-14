"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Mail, Phone, Printer, Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

const navLinks = [
      { title: "Home", href: "/" },
      { title: "Solutions", href: "/#services" },
      { title: "Projects", href: "/#projects" },
      { title: "About", href: "/#about" },
      { title: "Contact", href: "/contact" },
];

const contactInfo = {
      address: "Villa No. 2 - 62nd St - Al Barsha 3",
      city: "Dubai, United Arab Emirates",
      poBox: "49800",
      phone: "+971 (0)4 338 7700",
      fax: "+971 (0)4 338 7707",
      email: "info@axisdesigners.ae",
};

const socialLinks = [
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Youtube, href: "#", label: "YouTube" },
];

export const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [loaded, setLoaded] = useState(false);
      const [activeLink, setActiveLink] = useState(0);
      const buttonRef = useRef<HTMLButtonElement>(null);
      const [origin, setOrigin] = useState({ x: "calc(100% - 3rem)", y: "2rem" });

      useEffect(() => {
            const timer = setTimeout(() => setLoaded(true), 300);
            return () => clearTimeout(timer);
      }, []);

      // Lock body scroll when menu is open
      useEffect(() => {
            if (isOpen) {
                  document.body.style.overflow = "hidden";
            } else {
                  document.body.style.overflow = "";
            }
            return () => { document.body.style.overflow = ""; };
      }, [isOpen]);

      const handleToggle = () => {
            if (!isOpen && buttonRef.current) {
                  const rect = buttonRef.current.getBoundingClientRect();
                  setOrigin({
                        x: `${rect.left + rect.width / 2}px`,
                        y: `${rect.top + rect.height / 2}px`,
                  });
            }
            setIsOpen(!isOpen);
      };

      // Stagger config
      const stagger = {
            animate: {
                  transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.3,
                  },
            },
      };

      const fadeSlideUp = {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
      };

      return (
            <>
                  {/* Navbar */}
                  <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={loaded ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-8 py-6 text-white`}
                  >
                        <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              animate={loaded ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className="text-2xl font-bold font-heading uppercase tracking-tighter"
                        >
                              Axis Designers
                        </motion.div>

                        <motion.button
                              ref={buttonRef}
                              initial={{ opacity: 0, x: 30 }}
                              animate={loaded ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              onClick={handleToggle}
                              className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-transform duration-300 hover:scale-110"
                              aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                              <AnimatePresence mode="wait">
                                    {isOpen ? (
                                          <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                          >
                                                <X className="h-5 w-5 text-white" />
                                          </motion.div>
                                    ) : (
                                          <motion.div
                                                key="menu"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex flex-col items-end gap-1.5"
                                          >
                                                <span className="block h-[2px] w-5 bg-white" />
                                                <span className="block h-[2px] w-3.5 bg-white" />
                                          </motion.div>
                                    )}
                              </AnimatePresence>
                        </motion.button>
                  </motion.nav>

                  {/* Full-screen navigation overlay */}
                  <AnimatePresence>
                        {isOpen && (
                              <motion.div
                                    initial={{ clipPath: `circle(0% at ${origin.x} ${origin.y})` }}
                                    animate={{ clipPath: `circle(150% at ${origin.x} ${origin.y})` }}
                                    exit={{ clipPath: `circle(0% at ${origin.x} ${origin.y})` }}
                                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                                    className="fixed inset-0 z-50 overflow-hidden"
                              >
                                    {/* Background with dot grid pattern */}
                                    <div className="absolute inset-0 bg-neutral-900">
                                          <div
                                                className="absolute inset-0 opacity-[0.05]"
                                                style={{
                                                      backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                                                      backgroundSize: "24px 24px",
                                                }}
                                          />
                                          {/* Gradient accent glow */}
                                          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
                                          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col">
                                          {/* Spacer for top navbar */}
                                          <div className="h-20" />

                                          {/* Main content - split layout */}
                                          <div className="flex-1 flex flex-col md:flex-row items-stretch px-8 md:px-16 pb-8">

                                                {/* Left side - Contact info */}
                                                <motion.div
                                                      className="w-full md:w-2/5 flex flex-col justify-center gap-8 py-8"
                                                      initial="initial"
                                                      animate="animate"
                                                      variants={stagger}
                                                >
                                                      {/* Address */}
                                                      <motion.div variants={fadeSlideUp} className="space-y-3">
                                                            <MapPin className="w-8 h-8 text-orange-500 mb-2" strokeWidth={1.5} />
                                                            <p className="text-white text-lg font-sans font-medium tracking-wide">
                                                                  {contactInfo.address}
                                                            </p>
                                                            <p className="text-neutral-400 text-sm font-sans">
                                                                  {contactInfo.city}
                                                            </p>
                                                      </motion.div>

                                                      {/* Contact details */}
                                                      <motion.div variants={fadeSlideUp} className="space-y-2 text-sm font-sans">
                                                            <div className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.poBox}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Phone className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.phone}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Printer className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.fax}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.email}</span>
                                                            </div>
                                                      </motion.div>

                                                      {/* Divider */}
                                                      <motion.div variants={fadeSlideUp}>
                                                            <div className="w-12 h-[2px] bg-neutral-700" />
                                                      </motion.div>

                                                      {/* Social icons */}
                                                      <motion.div variants={fadeSlideUp} className="flex gap-4">
                                                            {socialLinks.map((social, i) => (
                                                                  <a
                                                                        key={i}
                                                                        href={social.href}
                                                                        aria-label={social.label}
                                                                        className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110"
                                                                  >
                                                                        <social.icon className="w-4 h-4" />
                                                                  </a>
                                                            ))}
                                                      </motion.div>
                                                </motion.div>

                                                {/* Right side - Navigation links */}
                                                <motion.nav
                                                      className="w-full md:w-3/5 flex flex-col justify-center items-start md:items-end gap-2 md:gap-4 py-8"
                                                      initial="initial"
                                                      animate="animate"
                                                      variants={stagger}
                                                >
                                                      {navLinks.map((link, index) => (
                                                            <motion.div
                                                                  key={index}
                                                                  variants={fadeSlideUp}
                                                                  className="overflow-hidden group flex items-center gap-4"
                                                            >
                                                                  {/* Dot indicator for active/hovered link */}
                                                                  <motion.div
                                                                        className="hidden md:block w-2 h-2 rounded-full bg-orange-500"
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: activeLink === index ? 1 : 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                  />
                                                                  <a
                                                                        href={link.href}
                                                                        onMouseEnter={() => setActiveLink(index)}
                                                                        onClick={() => setIsOpen(false)}
                                                                        className={`text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase tracking-tight transition-all duration-300 ${activeLink === index
                                                                              ? "text-orange-500 translate-x-0"
                                                                              : "text-neutral-600 hover:text-neutral-300"
                                                                              }`}
                                                                  >
                                                                        {link.title}
                                                                  </a>
                                                            </motion.div>
                                                      ))}
                                                </motion.nav>
                                          </div>

                                          {/* Bottom bar */}
                                          <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                className="px-8 md:px-16 py-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
                                          >
                                                <p className="text-neutral-600 text-xs font-sans">
                                                      &copy; 2026 Axis Designers. All rights reserved.
                                                </p>
                                                <div className="flex gap-6 text-neutral-500 text-xs font-sans uppercase tracking-wider">
                                                      <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                                                      <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
                                                      <a href="#" className="hover:text-orange-400 transition-colors">Sitemap</a>
                                                </div>
                                          </motion.div>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </>
      );
};
