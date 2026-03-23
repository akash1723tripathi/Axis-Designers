"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

/* ─── Industry descriptions ─── */
const industryDescriptions: Record<string, string> = {
      "Pharmaceutical & Healthcare":
            "The healthcare and pharmaceutical sector demands precision, trust, and innovation. Our exhibition designs for this industry combine clinical sophistication with compelling storytelling — creating immersive spaces that showcase medical breakthroughs, diagnostic technologies, and wellness solutions with world-class craftsmanship.",
      "Automotive & Engineering":
            "The automotive industry thrives on innovation, performance, and design excellence. We craft exhibition experiences that mirror the precision engineering of the vehicles themselves — from interactive displays and experiential test zones to sleek, high-impact booth environments that captivate audiences.",
      "Technology & IT (SaaS/AI)":
            "In the fast-evolving world of technology and IT, standing out requires more than just screens and demos. We design exhibition spaces that translate complex digital solutions into tangible, engaging experiences — blending futuristic aesthetics with hands-on interactivity.",
      "Real Estate & Construction":
            "Real estate exhibitions demand scale, elegance, and vision. Our designs transform architectural concepts into walkable experiences — featuring scale models, immersive visualisations, and premium finishes that convey the grandeur and quality of every development.",
      "FMCG & Food/Bev":
            "Consumer goods and food brands need exhibition spaces that are vibrant, inviting, and memorable. We create sensory-rich environments with product sampling zones, dynamic displays, and bold branding that drive engagement and leave lasting impressions.",
      "Fashion & Lifestyle":
            "Fashion and lifestyle brands demand spaces that reflect their aesthetic DNA. Our exhibition designs blend editorial styling with experiential retail — creating runway-worthy environments that showcase collections, tell brand stories, and inspire audiences.",
      "Travel & Tourism":
            "Tourism exhibitions require the power to transport visitors to new destinations. We design immersive pavilions that capture the spirit of places — using rich imagery, cultural storytelling, and interactive elements that inspire wanderlust and drive bookings.",
      "Defense & Aerospace":
            "The defense and aerospace sector demands authority, precision, and cutting-edge presentation. Standing out in such a competitive field requires immersive experiences, strategic storytelling, experiential design, precision planning, and seamless execution with world-class craftsmanship.",
      "Energy, Oil & Gas":
            "Energy companies need exhibition spaces that communicate scale, sustainability, and innovation. Our designs balance industrial strength with forward-thinking aesthetics — showcasing technologies, infrastructure projects, and green energy solutions with impact.",
      "Jewelry & Gemstones":
            "Luxury jewellery exhibitions demand an atmosphere of exclusivity and refinement. We create opulent display environments with precision lighting, premium materials, and intimate viewing spaces that elevate every piece to a work of art.",
      "Education & EdTech":
            "Education and EdTech brands need spaces that inspire learning and demonstrate innovation. Our exhibition designs combine interactive demos, collaborative zones, and engaging visuals to showcase platforms, curricula, and educational technologies effectively.",
      "Startups & Innovation":
            "Startups need to make maximum impact with bold, creative exhibition spaces. We design high-energy environments that communicate disruption, innovation, and vision — helping emerging brands punch above their weight and capture investor and audience attention.",
};

/* ─── Placeholder gallery items ─── */
interface GalleryItem {
      id: number;
      title: string;
      image: string;
}

const galleryItems: GalleryItem[] = [
      { id: 1, title: "Project Alpha", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 2, title: "Project Beta", image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 3, title: "Project Gamma", image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 4, title: "Project Delta", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 5, title: "Project Epsilon", image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 6, title: "Project Zeta", image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 7, title: "Project Eta", image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 8, title: "Project Theta", image: "https://images.pexels.com/photos/87080/aircraft-landing-reach-injection-87080.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 9, title: "Project Iota", image: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 10, title: "Project Kappa", image: "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 11, title: "Project Lambda", image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800" },
      { id: 12, title: "Project Mu", image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

/* ─── Animation variants ─── */
const stagger: Variants = {
      hidden: {},
      visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
      },
};

const itemVariant: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
};

/* ─── Gallery Card ─── */
const GalleryCard = ({ item }: { item: GalleryItem }) => {
      return (
            <motion.div
                  variants={itemVariant}
                  className="group relative overflow-hidden"
                  data-cursor-hover
            >
                  <div className="relative w-full aspect-square overflow-hidden">
                        <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover gallery-img"
                              sizes="(max-width: 768px) 50vw, 25vw"
                        />

                        {/* Permanent subtle vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 pointer-events-none gallery-overlay" />

                        {/* Project title */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6">
                              <div className="gallery-title">
                                    <p className="font-heading text-sm md:text-base lg:text-lg text-white uppercase tracking-wider leading-snug drop-shadow-lg">
                                          {item.title}
                                    </p>
                              </div>
                        </div>
                  </div>
            </motion.div>
      );
};

/* ─── Main Component ─── */
interface CommonGalleryProps {
      industry?: string;
}

export const CommonGallery = ({ industry }: CommonGalleryProps) => {
      const gridRef = useRef<HTMLDivElement>(null);
      const isInView = useInView(gridRef, { once: true, margin: "-5%" });

      const title = industry || "Our Projects";
      const description = industry
            ? industryDescriptions[industry] || ""
            : "Explore our portfolio of award-winning exhibition spaces, immersive brand experiences, and bespoke spatial designs crafted with precision and creativity.";

      return (
            <section className="relative bg-neutral-950 min-h-screen pt-24 md:pt-28">
                  {/* Scoped smooth transition styles */}
                  <style>{`
                        .gallery-img {
                              filter: grayscale(100%);
                              transform: scale(1);
                              transition: filter 1s cubic-bezier(0.22, 1, 0.36, 1),
                                          transform 1s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .group:hover .gallery-img {
                              filter: grayscale(0%);
                              transform: scale(1.04);
                        }
                        .gallery-overlay {
                              background-color: transparent;
                              transition: background-color 0.8s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .group:hover .gallery-overlay {
                              background-color: rgba(0, 0, 0, 0.15);
                        }
                        .gallery-title {
                              opacity: 0;
                              transform: translateY(12px);
                              transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                                          transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
                        }
                        .group:hover .gallery-title {
                              opacity: 1;
                              transform: translateY(0);
                        }
                  `}</style>

                  {/* ─── Ambient warm glows (consistent with Portfolio & Solutions) ─── */}
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

                  {/* ─── Industry description header ─── */}
                  <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16 md:py-20">
                        <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                              className="max-w-2xl"
                        >
                              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-5">
                                    {title}
                              </h2>
                              {description && (
                                    <p className="text-sm md:text-[15px] font-sans text-neutral-400 leading-relaxed">
                                          {description}
                                    </p>
                              )}
                        </motion.div>
                  </div>

                  {/* ─── Gallery grid ─── */}
                  <div ref={gridRef}>
                        <motion.div
                              className="grid grid-cols-2 md:grid-cols-4"
                              variants={stagger}
                              initial="hidden"
                              animate={isInView ? "visible" : "hidden"}
                        >
                              {galleryItems.map((item) => (
                                    <GalleryCard key={item.id} item={item} />
                              ))}
                        </motion.div>
                  </div>
            </section>
      );
};
