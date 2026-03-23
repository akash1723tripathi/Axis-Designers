"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
      {
            id: "8-U8aJQD5As",
            url: "https://youtu.be/8-U8aJQD5As?si=AfRrvDGKib5xms3H",
      },
      {
            id: "sRegB8_b6QY",
            url: "https://youtu.be/sRegB8_b6QY?si=PRNVpW-DtBOMVLgE",
      },
      {
            id: "fCGL-GY0OiM",
            url: "https://youtu.be/fCGL-GY0OiM?si=CYhDCCClVGQLDd1M",
      },
      {
            id: "iCqu8I4eY50",
            url: "https://youtu.be/iCqu8I4eY50?si=-Fk69V0zBY4RLseH",
      },
      {
            id: "dc8fI7PWxpo",
            url: "https://youtu.be/dc8fI7PWxpo?si=y78wXRSeKuVeLcdK",
      },
];

const slideVariants = {
      enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
      }),
      center: {
            x: 0,
            opacity: 1,
      },
      exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
      }),
};

export const VideoCarousel = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [direction, setDirection] = useState(0);

      const paginate = (newDirection: number) => {
            setDirection(newDirection);
            setCurrentIndex((prev) => {
                  const next = prev + newDirection;
                  if (next < 0) return videos.length - 1;
                  if (next >= videos.length) return 0;
                  return next;
            });
      };

      const getVisibleIndices = () => {
            const prev = (currentIndex - 1 + videos.length) % videos.length;
            const next = (currentIndex + 1) % videos.length;
            return [prev, currentIndex, next];
      };

      const visibleIndices = getVisibleIndices();

      return (
            <section className="relative z-10 py-24 md:py-32 overflow-hidden">
                  {/* Ambient warm glows — matching Portfolio page */}
                  <div
                        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(180,83,9,0.12) 0%, rgba(124,45,18,0.06) 50%, transparent 100%)" }}
                  />
                  <div
                        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(120,53,15,0.04) 50%, transparent 100%)" }}
                  />

                  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
                        {/* Section heading */}
                        <div className="mb-16 md:mb-20">
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4 ml-1"
                              >
                                    Watch
                              </motion.p>
                              <div className="flex items-center justify-between">
                                    <motion.h2
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white tracking-tight"
                                    >
                                          Our Work 
                                    </motion.h2>

                                    {/* Navigation arrows — desktop only */}
                                    <motion.div
                                          initial={{ opacity: 0 }}
                                          whileInView={{ opacity: 1 }}
                                          viewport={{ once: false, amount: 0.3 }}
                                          transition={{ duration: 0.6, delay: 0.2 }}
                                          className="hidden md:flex items-center gap-3"
                                    >
                                          <button
                                                onClick={() => paginate(-1)}
                                                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 cursor-pointer"
                                          >
                                                <ChevronLeft size={20} />
                                          </button>
                                          <button
                                                onClick={() => paginate(1)}
                                                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 cursor-pointer"
                                          >
                                                <ChevronRight size={20} />
                                          </button>
                                    </motion.div>
                              </div>
                              <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full h-px bg-white/[0.06] mt-10 origin-left"
                              />
                        </div>

                        {/* Desktop: 3-card animated carousel */}
                        <div className="hidden md:block overflow-hidden">
                              <div className="grid grid-cols-3 gap-6">
                                    <AnimatePresence mode="popLayout" custom={direction}>
                                          {visibleIndices.map((videoIndex) => (
                                                <motion.div
                                                      key={`${videoIndex}-${currentIndex}`}
                                                      custom={direction}
                                                      variants={slideVariants}
                                                      initial="enter"
                                                      animate="center"
                                                      exit="exit"
                                                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                                >
                                                      <VideoCard video={videos[videoIndex]} />
                                                </motion.div>
                                          ))}
                                    </AnimatePresence>
                              </div>

                              {/* Dot indicators — desktop */}
                              <div className="flex justify-center gap-2 mt-10">
                                    {videos.map((_, i) => (
                                          <button
                                                key={i}
                                                onClick={() => {
                                                      setDirection(i > currentIndex ? 1 : -1);
                                                      setCurrentIndex(i);
                                                }}
                                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                                      i === currentIndex
                                                            ? "bg-orange-500 w-6"
                                                            : "bg-neutral-600 hover:bg-neutral-400 w-2"
                                                }`}
                                          />
                                    ))}
                              </div>
                        </div>

                        {/* Mobile: horizontally scrollable */}
                        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
                              <div className="flex gap-4" style={{ width: "max-content" }}>
                                    {videos.map((video) => (
                                          <div key={video.id} className="w-[80vw] flex-shrink-0">
                                                <VideoCard video={video} />
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};

interface VideoCardProps {
      video: {
            id: string;
            url: string;
      };
}

const VideoCard = ({ video }: VideoCardProps) => {
      return (
            <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  data-cursor-text="Watch"
            >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-800">
                        <Image
                              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                              alt={`Video ${video.id}`}
                              fill
                              sizes="(max-width: 768px) 80vw, 33vw"
                              className="object-cover scale-[1.15] transition-transform duration-700 group-hover:scale-[1.2]"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Play size={22} className="text-white ml-1" fill="white" />
                              </div>
                        </div>
                  </div>

            </a>
      );
};
