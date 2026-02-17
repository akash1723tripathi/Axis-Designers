"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { usePageTransition } from "./PageTransition";

const projects = [
      {
            id: 1,
            title: "Punto Pago",
            description: "The First Super-App in Latin America",
            image: "https://images.pexels.com/photos/2228583/pexels-photo-2228583.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            tall: true,
      },
      {
            id: 2,
            title: "Kelvin Zero",
            description: "A digital product for passwordless authentication",
            image: "https://images.pexels.com/photos/305833/pexels-photo-305833.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            tall: false,
      },
      {
            id: 3,
            title: "DayWay",
            description: "Astrology planner app: plan, achieve, thrive",
            image: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            tall: false,
      },
      {
            id: 4,
            title: "Magma",
            description: "The ultimate tool for building in the Web3 era",
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            tall: true,
      },
      {
            id: 5,
            title: "Riyadh",
            description: "Official website of Riyadh, Saudi Arabia's capital",
            image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            tall: true,
      },
      {
            id: 6,
            title: "FlipaClip",
            description: "The best tool for stop-motion animation",
            image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
            tall: false,
      },
];

const cardVariants = {
      hidden: { opacity: 0, y: 60 },
      visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] as const,
            },
      }),
};

export const FeaturedProjects = () => {
      const { navigateWithTransition } = usePageTransition();

      // Split projects into two columns for masonry
      const leftColumn = projects.filter((_, i) => i % 2 === 0);
      const rightColumn = projects.filter((_, i) => i % 2 !== 0);

      const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            navigateWithTransition("/portfolio", {
                  x: rect.left + rect.width / 2,
                  y: rect.top + rect.height / 2,
            });
      };

      return (
            <section id="projects" className="relative z-20 -mt-[60px] md:-mt-[80px]">
                  {/* Curved section divider with seamless rounded corners */}
                  <div className="relative w-full bg-transparent">
                        <div className="relative w-full h-[60px] md:h-[80px]">
                              {/* Main dark block that peeks up with rounded top corners */}
                              <div className="absolute bottom-0 left-0 right-0 h-full bg-neutral-900 rounded-t-[40px] md:rounded-t-[60px]" />
                        </div>
                  </div>

                  {/* Projects content */}
                  <div className="bg-neutral-900 pb-32">
                        {/* Section heading */}
                        <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-20">
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                                    className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4"
                              >
                                    Works
                              </motion.p>
                              <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                                    className="text-4xl md:text-6xl font-heading uppercase text-white"
                              >
                                    Featured Projects
                              </motion.h2>
                        </div>

                        {/* Masonry grid */}
                        <div className="max-w-7xl mx-auto px-8 md:px-16">
                              <div className="flex flex-col md:flex-row gap-12">
                                    {/* Left column */}
                                    <div className="flex-1 flex flex-col gap-16">
                                          {leftColumn.map((project, i) => (
                                                <ProjectCard key={project.id} project={project} index={i * 2} />
                                          ))}
                                    </div>
                                    {/* Right column - offset down for masonry effect */}
                                    <div className="flex-1 flex flex-col gap-16 md:mt-32">
                                          {rightColumn.map((project, i) => (
                                                <ProjectCard key={project.id} project={project} index={i * 2 + 1} />
                                          ))}
                                    </div>
                              </div>
                        </div>

                        {/* Cuberto-style CTA Button */}
                        <motion.div
                              className="flex justify-center pt-24 pb-8"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                        >
                              <button
                                    onClick={handleExploreClick}
                                    className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full border border-neutral-600 text-white font-sans text-sm uppercase tracking-[0.2em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white cursor-pointer"
                              >
                                    {/* Background fill animation */}
                                    <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />

                                    {/* Text */}
                                    <span className="relative z-10">Explore More Projects</span>

                                    {/* Arrow that slides in */}
                                    <span className="relative z-10 inline-flex overflow-hidden w-0 group-hover:w-5 transition-all duration-500 ease-out">
                                          <svg
                                                className="w-5 h-5 -translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-out"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                          >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                          </svg>
                                    </span>
                              </button>
                        </motion.div>
                  </div>
            </section>
      );
};

interface ProjectCardProps {
      project: {
            id: number;
            title: string;
            description: string;
            image: string;
            tall: boolean;
      };
      index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
      const cardRef = useRef<HTMLDivElement>(null);
      const isInView = useInView(cardRef, { margin: "-20% 0px -20% 0px" });

      return (
            <motion.div
                  ref={cardRef}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  data-cursor-text="Explore"
                  className="group cursor-none"
            >
                  {/* Image container */}
                  <motion.div
                        className={`relative w-full overflow-hidden rounded-2xl bg-neutral-800 ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                              }`}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                        <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className={`object-cover transition-all duration-700 ease-out group-hover:scale-105
                                    ${isInView ? "grayscale-0" : "grayscale"}
                                    md:grayscale md:group-hover:grayscale-0`}
                        />
                        {/* Dark overlay: fades on hover (desktop) or when in view (mobile) */}
                        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-700
                              ${isInView ? "opacity-0" : "opacity-100"}
                              md:opacity-100 md:group-hover:opacity-0`}
                        />
                  </motion.div>

                  {/* Animated text below card */}
                  <motion.div
                        className="mt-5 px-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                        <h3 className="text-white font-heading text-lg font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-orange-400">
                              {project.title}
                        </h3>
                        <motion.p
                              className="text-neutral-400 font-sans text-sm mt-1.5 leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                        >
                              {project.description}
                        </motion.p>
                  </motion.div>
            </motion.div>
      );
};
