"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const clientLogos = [
      "/clients/logo1.png",
      "/clients/logo2-1.png",
      "/clients/logo3-1.png",
      "/clients/logo4-1.png",
      "/clients/logo5-1.png",
      "/clients/logo6-1.png",
      "/clients/logo7-1.png",
      "/clients/logo8-1.png",
      "/clients/logo9-1.png",
      "/clients/logo10-1.png",
      "/clients/logo11-1.png",
      "/clients/logo12-1.png",
      "/clients/logo13-1.png",
      "/clients/logo14-1.png",
      "/clients/logo15-1.png",
      "/clients/logo16-1.png",
      "/clients/logo17-1.png",
      "/clients/logo18-1.png",
      "/clients/logo19-1.png",
      "/clients/logo20-1.png",
      "/clients/logo21.png",
      "/clients/logo22.png",
      "/clients/logo23.png",
      "/clients/logo24.png",
      "/clients/logo25.png",
      "/clients/logo26.png",
      "/clients/logo27.png",
      "/clients/logo28.png",
      "/clients/logo29.png",
      "/clients/logo30.png",
      "/clients/logo31.png",
      "/clients/logo32.png",
      "/clients/logo33.png",
      "/clients/logo34.png",
      "/clients/logo35.png",
      "/clients/logo36-1.png",
      "/clients/logo37.png",
      "/clients/logo38.png",
      "/clients/logo39.png",
];

// Split logos into two rows
const row1 = clientLogos.slice(0, 20);
const row2 = clientLogos.slice(20);

interface StickyLogoProps {
      src: string;
      index: number;
}

const StickyLogo = ({ src, index }: StickyLogoProps) => {
      const ref = useRef<HTMLDivElement>(null);
      const [offset, setOffset] = useState({ x: 0, y: 0 });
      const [isHovered, setIsHovered] = useState(false);

      const handleMouseMove = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                  if (!ref.current) return;
                  const rect = ref.current.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  // Move toward cursor slightly (sticky pull effect)
                  const x = (e.clientX - centerX) * 0.3;
                  const y = (e.clientY - centerY) * 0.3;
                  setOffset({ x, y });
            },
            []
      );

      const handleMouseLeave = useCallback(() => {
            setOffset({ x: 0, y: 0 });
            setIsHovered(false);
      }, []);

      return (
            <motion.div
                  ref={ref}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  animate={{
                        x: offset.x,
                        y: offset.y,
                        scale: isHovered ? 1.15 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
                  className="flex-shrink-0 w-[140px] h-[80px] md:w-[180px] md:h-[100px] flex items-center justify-center mx-6 md:mx-10 cursor-pointer relative"
            >
                  <Image
                        src={src}
                        alt={`Client ${index + 1}`}
                        width={140}
                        height={70}
                        className={`object-contain max-h-[60px] md:max-h-[70px] transition-all duration-300 ${isHovered
                              ? "brightness-110 contrast-110"
                              : "brightness-75 opacity-60 grayscale"
                              }`}
                  />
            </motion.div>
      );
};

interface MarqueeRowProps {
      logos: string[];
      direction?: "left" | "right";
      speed?: number;
      offset?: number;
}

const MarqueeRow = ({ logos, direction = "right", speed = 0.5, offset = 0 }: MarqueeRowProps) => {
      const trackRef = useRef<HTMLDivElement>(null);
      const xRef = useRef(offset);
      const [isPaused, setIsPaused] = useState(false);

      // Duplicate logos for seamless loop
      const allLogos = [...logos, ...logos, ...logos];

      useAnimationFrame(() => {
            if (isPaused || !trackRef.current) return;
            const dir = direction === "right" ? -1 : 1;
            xRef.current += speed * dir;

            // Single set width (approximate: count * item width with margins)
            const singleSetWidth = logos.length * 220;
            if (Math.abs(xRef.current) >= singleSetWidth) {
                  xRef.current = xRef.current % singleSetWidth;
            }

            trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      });

      return (
            <div
                  className="overflow-hidden w-full"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
            >
                  <div
                        ref={trackRef}
                        className="flex items-center py-6"
                        style={{ willChange: "transform" }}
                  >
                        {allLogos.map((logo, i) => (
                              <StickyLogo key={`${logo}-${i}`} src={logo} index={i} />
                        ))}
                  </div>
            </div>
      );
};

export const Clients = () => {
      return (
            <section className="py-24 md:py-32 bg-neutral-950 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 mb-16">
                        <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                              className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4"
                        >
                              They Trust Us
                        </motion.p>
                        <motion.h2
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className="text-4xl md:text-6xl font-heading uppercase text-white"
                        >
                              Our Clients
                        </motion.h2>
                  </div>

                  {/* Row 1 - scrolls right */}
                  <MarqueeRow logos={row1} direction="right" speed={0.6} />

                  {/* Row 2 - scrolls left */}
                  <MarqueeRow logos={row2} direction="left" speed={0.4} offset={-200} />
            </section>
      );
};
