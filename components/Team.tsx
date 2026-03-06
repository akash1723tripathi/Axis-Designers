"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

interface TeamMember {
      id: number;
      name: string;
      role: string;
      bio: string;
      image: string;
      socials: { label: string; url: string }[];
}

const teamMembers: TeamMember[] = [
      {
            id: 1,
            name: "Alok\nSingh",
            role: "Principle & Co-Founder",
            bio: "Alok guides the organisation by continuously pushing boundaries through widening the business world wide. He adds practical perspective in the organisation through design implication with ever changing technology, materiality and innovative market. He is a Tennis player which reflects in his understanding of the subject in the broader market.",
            image: "/team_photos/alok_singh_image.png",
            socials: [
                  { label: "Li", url: "https://www.linkedin.com/in/alok-singh-67546167/?originalSubdomain=in" },
            ],
      },
      {
            id: 2,
            name: "Amit\nJain",
            role: "Principle & Co-Founder",
            bio: "Amit’s desire to experiment with the new design ideas and innovative creative process which influences our office design approach. He brings insights and experience of the evolving design landscape around the globe. His love for cooking new delicious food, traveling, writing and hands-on approach to design reflect in his meticulous details in every project.",
            image: "/team_photos/amit_jain_image.png",
            socials: [
                  // { label: "Ig", url: "#" },
                  { label: "Li", url: "https://www.linkedin.com/in/amit-jain-70927a7b/?originalSubdomain=in" },
            ],
      },
      {
            id: 3,
            name: "Pancham\nSingh",
            role: "Associate Partner & Project Manager",
            bio: "Pancham has over a decade of experience in handling large scale projects and is a long-standing member of our team. His professionalism and strong managing skills facilitate exchanges with our clients, consultants, and contractors, and ensure that the project runs smoothly from start to finish.",
            image: "/team_photos/Pancham_singh_image.png",
            socials: [
                  { label: "Li", url: "https://www.linkedin.com/in/pancham-singh-36a62b30/?originalSubdomain=in" },
            ],
      }
];

const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
      }),
};

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
      const [expanded, setExpanded] = useState(false);
      const cardRef = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start end", "end start"],
      });
      const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
      const isEven = index % 2 === 0;

      return (
            <motion.div
                  ref={cardRef}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  className="relative py-16 md:py-24"
            >
                  {/* Main content area */}
                  <div className="relative">
                        {/* Photo + Name + Toggle layout — zigzag */}
                        <div className={`relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 ${isEven ? "" : "md:flex-row-reverse"}`}>
                              {/* Photo column with role label above */}
                              <div className="flex flex-col flex-shrink-0">
                                    {/* Role label — aligned with photo */}
                                    <motion.p
                                          variants={fadeUp}
                                          custom={0}
                                          className={`text-center md:text-left text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-neutral-500 mb-4 md:mb-6 ${isEven ? "" : "md:text-right"}`}
                                    >
                                          {member.role}
                                    </motion.p>

                                    {/* Photo container */}
                                    <motion.div
                                          variants={fadeUp}
                                          custom={1}
                                          className="relative w-[280px] h-[370px] md:w-[350px] md:h-[460px] lg:w-[400px] lg:h-[530px] overflow-hidden flex-shrink-0"
                                    >
                                          {/* Warm amber glow behind photo */}
                                          <div
                                                className="absolute -inset-8 rounded-full blur-3xl"
                                                style={{ background: "radial-gradient(circle, rgba(217,119,6,0.20) 0%, rgba(124,45,18,0.10) 50%, transparent 100%)" }}
                                          />
                                          <motion.div
                                                style={{ y: imageY }}
                                                className="relative w-full h-full"
                                          >
                                                <Image
                                                      src={member.image}
                                                      alt={member.name.replace("\n", " ")}
                                                      fill
                                                      className="object-cover"
                                                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                                                />
                                                {/* Warm color overlay on photo */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                                                <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-amber-500/30 via-orange-600/15 to-transparent" />
                                          </motion.div>
                                    </motion.div>
                              </div>

                              {/* Name + Toggle + Bio */}
                              <div className={`flex flex-col items-center md:pt-16 lg:pt-24 ${isEven ? "md:items-start md:pl-10 lg:pl-16" : "md:items-end md:pr-10 lg:pr-16"}`}>
                                    {/* Name */}
                                    <motion.h2
                                          variants={fadeUp}
                                          custom={2}
                                          className={`text-4xl md:text-5xl lg:text-7xl font-heading uppercase leading-[0.95] text-white whitespace-pre-line text-center ${isEven ? "md:text-left" : "md:text-right"}`}
                                    >
                                          {member.name}
                                    </motion.h2>

                                    {/* Expand/Collapse toggle */}
                                    <motion.button
                                          variants={fadeUp}
                                          custom={3}
                                          onClick={() => setExpanded(!expanded)}
                                          className="mt-6 md:mt-8 w-14 h-14 md:w-16 md:h-16 rounded-full border border-neutral-700 flex items-center justify-center hover:border-orange-500 transition-colors duration-300 group"
                                          data-cursor-hover
                                    >
                                          <AnimatePresence mode="wait">
                                                {expanded ? (
                                                      <motion.div
                                                            key="minus"
                                                            initial={{ rotate: -90, opacity: 0 }}
                                                            animate={{ rotate: 0, opacity: 1 }}
                                                            exit={{ rotate: 90, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                      >
                                                            <Minus className="w-5 h-5 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                                                      </motion.div>
                                                ) : (
                                                      <motion.div
                                                            key="plus"
                                                            initial={{ rotate: -90, opacity: 0 }}
                                                            animate={{ rotate: 0, opacity: 1 }}
                                                            exit={{ rotate: 90, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                      >
                                                            <Plus className="w-5 h-5 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                                                      </motion.div>
                                                )}
                                          </AnimatePresence>
                                    </motion.button>

                                    {/* Bio (expandable) */}
                                    <AnimatePresence>
                                          {expanded && (
                                                <motion.div
                                                      initial={{ opacity: 0, height: 0 }}
                                                      animate={{ opacity: 1, height: "auto" }}
                                                      exit={{ opacity: 0, height: 0 }}
                                                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                      className="overflow-hidden"
                                                >
                                                      <p className={`mt-6 md:mt-8 max-w-sm text-sm md:text-[15px] leading-relaxed text-neutral-400 font-sans text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
                                                            {member.bio}
                                                      </p>

                                                      {/* Social links */}
                                                      {member.socials.length > 0 && (
                                                            <div className={`mt-6 flex gap-6 ${isEven ? "" : "justify-center md:justify-end"}`}>
                                                                  {member.socials.map((social) => (
                                                                        <a
                                                                              key={social.label}
                                                                              href={social.url}
                                                                              className="text-sm font-sans text-neutral-500 hover:text-orange-500 transition-colors duration-300"
                                                                              data-cursor-hover
                                                                        >
                                                                              {social.label}
                                                                        </a>
                                                                  ))}
                                                            </div>
                                                      )}
                                                </motion.div>
                                          )}
                                    </AnimatePresence>
                              </div>
                        </div>

                        {/* Member number */}
                        <motion.span
                              variants={fadeUp}
                              custom={2}
                              className={`absolute bottom-0 text-xs font-sans text-neutral-600 tracking-wider ${isEven ? "left-0" : "right-0"}`}
                        >
                              ({index + 1})
                        </motion.span>
                  </div>
            </motion.div>
      );
}

export const Team = () => {
      const heroRef = useRef<HTMLDivElement>(null);
      const { scrollYProgress: heroScroll } = useScroll({
            target: heroRef,
            offset: ["start start", "end start"],
      });
      const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
      const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

      return (
            <section className="relative bg-neutral-950 min-h-screen overflow-hidden">
                  {/* Hero Section */}
                  <div ref={heroRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                        {/* Ambient warm glow */}
                        <div
                              className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
                              style={{ background: "radial-gradient(circle, rgba(180,83,9,0.15) 0%, rgba(124,45,18,0.08) 50%, transparent 100%)" }}
                        />
                        <div
                              className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
                              style={{ background: "radial-gradient(circle, rgba(234,88,12,0.10) 0%, rgba(120,53,15,0.05) 50%, transparent 100%)" }}
                        />

                        {/* Main headline */}
                        <motion.div
                              style={{ y: heroTextY, opacity: heroOpacity }}
                              className="relative z-10 px-6 md:px-16 max-w-5xl"
                        >
                              <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-heading uppercase leading-[1.05] text-white text-center"
                              >
                                    From Vision to{" "}
                                    <span className="italic font-light">Reality,</span>
                                    <br />
                                    <span className="text-neutral-400">We craft spaces</span>
                                    <br />
                                    that inspire
                              </motion.h1>
                        </motion.div>

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
                  </div>

                  {/* Team Members */}
                  <div className="relative px-6 md:px-16 max-w-7xl mx-auto pb-24">
                        {teamMembers.map((member, index) => (
                              <TeamMemberCard key={member.id} member={member} index={index} />
                        ))}
                  </div>
            </section>
      );
};
