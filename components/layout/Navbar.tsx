"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { X, MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
      { title: "Home", href: "/" },
      { title: "Solutions", href: "/solutions" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "About", href: "/team" },
      { title: "Contact", href: "/contact" },
];

const contactInfo = {
      addressLine1: "ANSAL PLAZA, CORPORATE SPACE -14, 1ST FLOOR",
      addressLine2: "Vaishali, Ghaziabad, Uttar Pradesh",
      mapLink: "https://maps.app.goo.gl/txVsqRGfBvQq58wH9",
      phone: "+91 (120) 427 3497",
      phone2: "+91 (981) 860-2480",
      email: "info@axisdesigners.com",
};

const socialLinks = [
      { icon: Facebook, href: "https://www.facebook.com/AxisDesigners2020/", label: "Facebook" },
      { icon: Twitter, href: "https://x.com/pvt_axis?mx=2", label: "Twitter" },
      { icon: Instagram, href: "https://www.instagram.com/_axisdesigners/#", label: "Instagram" },
      { icon: Linkedin, href: "https://www.linkedin.com/company/axisdesigners/", label: "LinkedIn" },
      { icon: Youtube, href: "https://www.youtube.com/channel/UCKdiNW_X68SE5C9hF8ui_uw", label: "YouTube" },
];

export const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [loaded, setLoaded] = useState(false);
      const [activeLink, setActiveLink] = useState(-1);
      const [logoHidden, setLogoHidden] = useState(false);
      const buttonRef = useRef<HTMLButtonElement>(null);
      const [origin, setOrigin] = useState({ x: "calc(100% - 3rem)", y: "2rem" });
      const router = useRouter();
      const pathname = usePathname();
      const isContactPage = pathname === "/contact" || pathname === "/career";

      // Magnetic sticky effect for nav button
      const btnX = useMotionValue(0);
      const btnY = useMotionValue(0);
      const springBtnX = useSpring(btnX, { stiffness: 250, damping: 20 });
      const springBtnY = useSpring(btnY, { stiffness: 250, damping: 20 });

      const handleBtnMouseMove = useCallback(
            (e: React.MouseEvent) => {
                  if (!buttonRef.current) return;
                  const rect = buttonRef.current.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  btnX.set((e.clientX - cx) * 0.4);
                  btnY.set((e.clientY - cy) * 0.4);
            },
            [btnX, btnY]
      );

      const handleBtnMouseLeave = useCallback(() => {
            btnX.set(0);
            btnY.set(0);
      }, [btnX, btnY]);

      const { scrollY } = useScroll();
      const logoScale = useTransform(scrollY, [0, 300], [1, 0.9]);
      const logoShiftY = useTransform(scrollY, [0, 300], [0, -10]);
      const [logoVisible, setLogoVisible] = useState(true);

      useEffect(() => {
            return scrollY.on("change", (latest) => {
                  setLogoVisible(latest < 300);
            });
      }, [scrollY]);

      useEffect(() => {
            const timer = setTimeout(() => setLoaded(true), 300);
            return () => clearTimeout(timer);
      }, []);

      // Reset logoHidden when route changes (new page loaded)
      useEffect(() => {
            setLogoHidden(false);
      }, [pathname]);

      // Prefetch all nav routes so pages load instantly
      useEffect(() => {
            navLinks.forEach((link) => {
                  if (!link.href.includes("#")) {
                        router.prefetch(link.href);
                  }
            });
      }, [router]);

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
                  // Set active link to current route
                  const currentIndex = navLinks.findIndex((link) => {
                        if (link.href === "/") return pathname === "/";
                        return pathname.startsWith(link.href);
                  });
                  setActiveLink(currentIndex);
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
                        className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-3 md:px-8 py-6 text-white pointer-events-none`}
                  >
                        <motion.div
                              style={{
                                    scale: logoScale,
                                    y: logoShiftY,
                                    pointerEvents: logoVisible && !isOpen ? 'auto' : 'none'
                              }}
                              animate={{ opacity: isOpen || logoHidden ? 0 : logoVisible ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="relative pointer-events-auto"
                        >
                              <motion.div
                                    key={pathname}
                                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative h-20 w-72 cursor-pointer group flex items-center"
                                    onClick={() => router.push("/")}
                              >
                                    <motion.img
                                          src={isContactPage ? "/logos/axis_b&w.png" : "/logos/axis_logo_color.png"}
                                          alt="Axis Designers"
                                          className="h-40 pt-4 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.6)]"
                                          animate={{
                                                y: [0, -6, 0],
                                          }}
                                          transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                          }}
                                          whileHover={{
                                                scale: 1.05,
                                                rotate: 1,
                                                transition: { duration: 0.4, ease: "easeOut" }
                                          }}
                                          whileTap={{ scale: 0.95 }}
                                    />
                              </motion.div>
                        </motion.div>

                        <motion.button
                              ref={buttonRef}
                              style={{ x: springBtnX, y: springBtnY }}
                              initial={{ opacity: 0 }}
                              animate={loaded ? { opacity: 1 } : {}}
                              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                              onMouseMove={handleBtnMouseMove}
                              onMouseLeave={handleBtnMouseLeave}
                              onClick={handleToggle}
                              className={`relative z-[60] ml-auto flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md pointer-events-auto ${isContactPage ? "border border-neutral-800/20 bg-neutral-800/5" : "border border-white/20 bg-white/5"}`}
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
                                                <span className={`block h-[2px] w-5 ${isContactPage ? "bg-neutral-900" : "bg-white"}`} />
                                                <span className={`block h-[2px] w-3.5 ${isContactPage ? "bg-neutral-900" : "bg-white"}`} />
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
                                          {/* Main content - split layout */}
                                          <div className="flex-1 flex flex-col-reverse md:flex-row items-stretch px-8 md:px-16 pb-8">

                                                {/* Left side - Contact info */}
                                                <motion.div
                                                      className="w-full md:w-2/5 flex flex-col justify-center gap-8 py-8"
                                                      initial="initial"
                                                      animate="animate"
                                                      variants={stagger}
                                                >
                                                      {/* Address */}
                                                      <motion.div variants={fadeSlideUp} className="space-y-3">
                                                            <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="block group">
                                                                  <MapPin className="w-8 h-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                                                  <p className="text-white text-lg font-sans font-bold uppercase tracking-wide group-hover:text-orange-400 transition-colors leading-tight">
                                                                        {contactInfo.addressLine1}
                                                                  </p>
                                                                  <p className="text-neutral-400 text-sm font-sans mt-2">
                                                                        {contactInfo.addressLine2}
                                                                  </p>
                                                            </a>
                                                      </motion.div>

                                                      {/* Contact details */}
                                                      <motion.div variants={fadeSlideUp} className="space-y-2 text-sm font-sans">
                                                            <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Phone className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.phone}</span>
                                                            </a>
                                                            <a href={`tel:${contactInfo.phone2.replace(/\D/g, '')}`} className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Phone className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.phone2}</span>
                                                            </a>
                                                            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-neutral-300 hover:text-orange-400 transition-colors cursor-pointer group">
                                                                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-orange-500 transition-colors" />
                                                                  <span>{contactInfo.email}</span>
                                                            </a>
                                                      </motion.div>

                                                      {/* Divider */}
                                                      <motion.div variants={fadeSlideUp}>
                                                            <div className="w-12 h-[2px] bg-neutral-700" />
                                                      </motion.div>

                                                      {/* Social icons */}
                                                      <motion.div variants={fadeSlideUp} className="flex gap-4">
                                                            {socialLinks.map((social, i) => (
                                                                  <a
                                                                        target="_blank"
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
                                                                  className="overflow-hidden group relative flex items-center"
                                                            >
                                                                  {/* Dot indicator for active/hovered link */}
                                                                  <motion.div
                                                                        className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500"
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: activeLink === index ? 1 : 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                  />
                                                                  <a
                                                                        href={link.href}
                                                                        onMouseEnter={() => setActiveLink(index)}
                                                                        onClick={(e) => {
                                                                              e.preventDefault();
                                                                              setLogoHidden(true);
                                                                              setIsOpen(false);
                                                                              router.push(link.href);
                                                                        }}
                                                                        className={`text-4xl md:text-6xl lg:text-7xl font-heading uppercase tracking-tight transition-all duration-300 ${activeLink === index
                                                                              ? "text-orange-500 font-bold"
                                                                              : "text-neutral-600 hover:text-neutral-300 font-medium"
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
                                                className="px-8 md:px-16 py-6 border-t border-neutral-800 flex flex-col-reverse md:flex-row justify-between items-center gap-4"
                                          >
                                                <p className="text-neutral-600 text-xs font-sans">
                                                      &copy; 2026 Axis Designers. All rights reserved.
                                                </p>
                                                <div className="flex gap-6 text-neutral-500 text-xs font-sans uppercase tracking-wider">
                                                      <a href="/career" onClick={(e) => { e.preventDefault(); setIsOpen(false); router.push("/career"); }} className="hover:text-orange-400 transition-colors">Career</a>
                                                      <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); setIsOpen(false); router.push("/privacy-policy"); }} className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                                                      <a href="/terms-and-conditions" onClick={(e) => { e.preventDefault(); setIsOpen(false); router.push("/terms-and-conditions"); }} className="hover:text-orange-400 transition-colors">Terms of Service</a>
                                                </div>
                                          </motion.div>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </>
      );
};
