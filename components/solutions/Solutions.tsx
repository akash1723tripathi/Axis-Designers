"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { usePageTransition } from "@/components/layout/PageTransition";


const services = [
      {
            id: 1,
            number: "01",
            title: "Exhibitions & Events",
            highlight: "Top 10 in Germany ┬╖ Precision & Quality",
            description:
                  "Axis Designers plays a major role in the German exhibition industry, recognized as one of the top 10 exhibition companies in Germany. Known for excellence and innovation, we consistently set high standards for trade show events with a focus on precision and quality. Our diverse range of exhibitions spans various industries, making us a crucial part of business interactions and industry showcases.",
            image:
                  "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",

      },
      {
            id: 2,
            number: "02",
            title: "Branding & Activation",
            highlight: "25+ Years Experience ┬╖ Spaces Inspired by You",
            description:
                  "Every brand has a unique vision and message, and we bring yours to life by creating a space inspired by you, for you. Your customers shouldn't just be aware of your existence and services ΓÇö they should understand what you stand for. With over 25 years of experience and undiminished passion, we craft brand activations that leave lasting impressions.",
            image:
                  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",

      },
      {
            id: 3,
            number: "03",
            title: "Architecture & Interiors",
            highlight: "Creating Spaces That Reflect Your Essence",
            description:
                  "We believe in creating spaces that reflect your essence, where living and working feel like bliss. Architecture and interior design are not just the bones of any physical place ΓÇö they are the heart of Axis Designers. Our talented team of architects and designers is passionate about crafting spaces that resonate with your personal style, ensuring each environment feels uniquely yours.",
            image:
                  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",

      },
];


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

interface ServiceSectionProps {
      service: (typeof services)[0];
      index: number;
      isLast: boolean;
}

const ServiceSection = ({ service, index, isLast }: ServiceSectionProps) => {
      const sectionRef = useRef<HTMLDivElement>(null);
      const textRef = useRef<HTMLDivElement>(null);
      const isTextInView = useInView(textRef, { once: false, margin: "-15%" });

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
                  className="relative"
            >
                  <div className="max-w-7xl mx-auto px-6 md:px-16">
                        <div
                              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } gap-12 lg:gap-20 py-24 md:py-32 lg:py-[50px] lg:min-h-screen items-center`}
                        >
                              {/*  Text side (sticky on desktop)  */}
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

                              {/*  Image side (parallax)  */}
                              <div className="w-full lg:w-[55%]">
                                    <motion.div
                                          className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800"
                                          initial={{ opacity: 0, scale: 0.95 }}
                                          whileInView={{ opacity: 1, scale: 1 }}
                                          viewport={{ once: false, margin: "-10%" }}
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

export const Solutions = () => {
      const { navigateWithTransition } = usePageTransition();

      return (
            <div className="relative bg-neutral-950 overflow-hidden">
                  {/* Ambient warm glows consistent with Team page */}
                  <div
                        className="fixed top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(180,83,9,0.12) 0%, rgba(124,45,18,0.06) 50%, transparent 100%)" }}
                  />
                  <div
                        className="fixed top-1/3 right-1/5 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(120,53,15,0.04) 50%, transparent 100%)" }}
                  />
                  <div
                        className="fixed bottom-1/4 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, rgba(124,45,18,0.05) 50%, transparent 100%)" }}
                  />

                  {/*  Hero header  */}
                  <section className="relative z-10 h-screen flex flex-col justify-center overflow-hidden">
                        {/* Hero-specific glow */}
                        <div
                              className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                              style={{ background: "radial-gradient(circle, rgba(180,83,9,0.18) 0%, rgba(124,45,18,0.08) 50%, transparent 100%)" }}
                        />

                        <div className="max-w-7xl mx-auto px-6 md:px-16">
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                          duration: 0.6,
                                          delay: 0.2,
                                          ease: [0.22, 1, 0.36, 1] as const,
                                    }}
                                    className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4 ml-2"
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

                        {/* Scroll indicator */}
                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 1 }}
                              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                        >
                              <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-px h-12 bg-gradient-to-b from-transparent via-neutral-600 to-transparent"
                              />
                        </motion.div>
                  </section>

                  {/*  Service sections  */}
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

            </div>
      );
};
