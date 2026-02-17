"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

/* ──────────── Data ──────────── */

const services = [
      {
            id: 1,
            number: "01",
            title: "Exhibitions & Events",
            highlight: "Top 10 in Germany · Precision & Quality",
            description:
                  "Axis Designers plays a major role in the German exhibition industry, recognized as one of the top 10 exhibition companies in Germany. Known for excellence and innovation, we consistently set high standards for trade show events with a focus on precision and quality. Our diverse range of exhibitions spans various industries, making us a crucial part of business interactions and industry showcases.",
            image:
                  "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",

      },
      {
            id: 2,
            number: "02",
            title: "Branding & Activation",
            highlight: "25+ Years Experience · Spaces Inspired by You",
            description:
                  "Every brand has a unique vision and message, and we bring yours to life by creating a space inspired by you, for you. Your customers shouldn't just be aware of your existence and services — they should understand what you stand for. With over 25 years of experience and undiminished passion, we craft brand activations that leave lasting impressions.",
            image:
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",

      },
      {
            id: 3,
            number: "03",
            title: "Architecture & Interiors",
            highlight: "Creating Spaces That Reflect Your Essence",
            description:
                  "We believe in creating spaces that reflect your essence, where living and working feel like bliss. Architecture and interior design are not just the bones of any physical place — they are the heart of Axis Designers. Our talented team of architects and designers is passionate about crafting spaces that resonate with your personal style, ensuring each environment feels uniquely yours.",
            image:
                  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",

      },
];

/* ──────────── Animations ──────────── */

const fadeUp = {
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
            },
      }),
};

/* ──────────── Service Section ──────────── */

interface ServiceSectionProps {
      service: (typeof services)[0];
      index: number;
      isLast: boolean;
}

const ServiceSection = ({ service, index, isLast }: ServiceSectionProps) => {
      const sectionRef = useRef<HTMLDivElement>(null);
      const textRef = useRef<HTMLDivElement>(null);
      const isTextInView = useInView(textRef, { once: true, margin: "-15%" });

      // Parallax for the image
      const { scrollYProgress } = useScroll({
            target: sectionRef,
            offset: ["start end", "end start"],
      });
      const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

      const isEven = index % 2 === 0;

      return (
            <section
                  ref={sectionRef}
                  className={`relative ${!isLast ? "border-b border-white/[0.06]" : ""}`}
            >
                  <div className="max-w-7xl mx-auto px-6 md:px-16">
                        <div
                              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } gap-12 lg:gap-20 py-24 md:py-32 lg:py-0 lg:min-h-screen items-center`}
                        >
                              {/* ─── Text side (sticky on desktop) ─── */}
                              <div className="w-full lg:w-[45%] lg:sticky lg:top-0 lg:self-center lg:py-32">
                                    <div ref={textRef}>
                                          <motion.div
                                                custom={0}
                                                variants={fadeUp}
                                                initial="hidden"
                                                animate={isTextInView ? "visible" : "hidden"}
                                                className="flex items-center gap-4 mb-6"
                                          >
                                                <span className="text-7xl md:text-8xl font-heading font-bold text-white/[0.06] leading-none select-none">
                                                      {service.number}
                                                </span>
                                                <div className="w-12 h-[2px] bg-orange-500" />
                                          </motion.div>

                                          <motion.h2
                                                custom={1}
                                                variants={fadeUp}
                                                initial="hidden"
                                                animate={isTextInView ? "visible" : "hidden"}
                                                className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white tracking-tight leading-[1.1] mb-5"
                                          >
                                                {service.title}
                                          </motion.h2>

                                          <motion.p
                                                custom={2}
                                                variants={fadeUp}
                                                initial="hidden"
                                                animate={isTextInView ? "visible" : "hidden"}
                                                className="text-sm md:text-base font-sans uppercase tracking-[0.15em] text-orange-500 mb-6"
                                          >
                                                {service.highlight}
                                          </motion.p>

                                          <motion.p
                                                custom={3}
                                                variants={fadeUp}
                                                initial="hidden"
                                                animate={isTextInView ? "visible" : "hidden"}
                                                className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed max-w-lg"
                                          >
                                                {service.description}
                                          </motion.p>
                                    </div>
                              </div>

                              {/* ─── Image side (parallax) ─── */}
                              <div className="w-full lg:w-[55%]">
                                    <motion.div
                                          className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800"
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          whileInView={{ opacity: 1, scale: 1 }}
                                          viewport={{ once: true, margin: "-10%" }}
                                          transition={{
                                                duration: 0.8,
                                                ease: [0.22, 1, 0.36, 1] as const,
                                          }}
                                    >
                                          <motion.div
                                                className="absolute inset-[-15%] w-[130%] h-[130%]"
                                                style={{ y: imageY }}
                                          >
                                                <Image
                                                      src={service.image}
                                                      alt={service.title}
                                                      fill
                                                      sizes="(max-width: 1024px) 100vw, 55vw"
                                                      className="object-cover"
                                                />
                                          </motion.div>

                                          {/* Gradient overlay */}
                                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent pointer-events-none" />
                                    </motion.div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

/* ──────────── Main Component ──────────── */

export const Solutions = () => {
      return (
            <div className="relative bg-[#1a1a1a] overflow-hidden">
                  {/* Subtle grid texture */}
                  <div
                        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                        style={{
                              backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                              backgroundSize: "60px 60px",
                        }}
                  />

                  {/* ─── Hero header ─── */}
                  <section className="relative z-10 pt-32 md:pt-44 pb-20 md:pb-28">
                        <div className="max-w-7xl mx-auto px-6 md:px-16">
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.2,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4"
                              >
                                    What We Do
                              </motion.p>

                              <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                          duration: 0.8,
                                          delay: 0.35,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-white tracking-tight leading-[1.05]"
                              >
                                    Our
                                    <br />
                                    <span className="text-orange-500">Solutions</span>
                              </motion.h1>

                              <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                          duration: 0.8,
                                          delay: 0.6,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="w-24 h-[2px] bg-orange-500 mt-8 origin-left"
                              />
                        </div>
                  </section>

                  {/* ─── Service sections ─── */}
                  <div className="relative z-10">
                        {services.map((service, idx) => (
                              <ServiceSection
                                    key={service.id}
                                    service={service}
                                    index={idx}
                                    isLast={idx === services.length - 1}
                              />
                        ))}
                  </div>

                  {/* ─── Bottom CTA ─── */}
                  <section className="relative z-10 py-24 md:py-32">
                        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
                              <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                          duration: 0.7,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-3xl md:text-5xl font-heading font-bold uppercase text-white mb-6"
                              >
                                    Ready to Build Something{" "}
                                    <span className="text-orange-500">Extraordinary</span>?
                              </motion.h2>

                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.15,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-neutral-400 font-sans text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
                              >
                                    Let&apos;s collaborate to create experiences that captivate,
                                    inspire, and leave a lasting mark on your audience.
                              </motion.p>

                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.3,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                              >
                                    <a
                                          href="/contact"
                                          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full border border-neutral-600 text-white font-sans text-sm uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-orange-500"
                                    >
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10">Get in Touch</span>
                                    </a>
                              </motion.div>
                        </div>
                  </section>

            </div>
      );
};
