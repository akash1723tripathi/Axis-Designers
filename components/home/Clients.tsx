"use client";

import { motion } from "framer-motion";
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

// Split logos evenly into two rows
const mid = Math.ceil(clientLogos.length / 2);
const row1 = clientLogos.slice(0, mid);
const row2 = clientLogos.slice(mid);

const LogoItem = ({ src, index }: { src: string; index: number }) => (
      <div className="flex-shrink-0 w-[140px] h-[70px] md:w-[180px] md:h-[90px] flex items-center justify-center mx-3 md:mx-5">
            <Image
                  src={src}
                  alt={`Client ${index + 1}`}
                  width={160}
                  height={80}
                  className="object-contain w-100 h-auto max-h-[50px] md:max-h-[70px] brightness-90 opacity-80  hover:brightness-110 hover:opacity-100 transition-all duration-300 "
            />
      </div>
);

const MarqueeRow = ({ logos, direction = "left", duration = 40 }: { logos: string[]; direction?: "left" | "right"; duration?: number }) => {
      // Render two identical sets — CSS animation shifts by exactly 50% for seamless loop
      const doubled = [...logos, ...logos];

      return (
            <div className="overflow-hidden w-full">
                  <div
                        className="flex items-center w-max py-10 hover:[animation-play-state:paused]"
                        style={{
                              animation: `marquee-${direction} ${duration}s linear infinite`,
                              willChange: "transform",
                        }}
                  >
                        {doubled.map((logo, i) => (
                              <LogoItem key={`${logo}-${i}`} src={logo} index={i % logos.length} />
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
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                              className="text-sm font-sans uppercase tracking-[0.3em] text-orange-500 mb-4"
                        >
                              They Trust Us
                        </motion.p>
                        <motion.h2
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className="text-4xl md:text-6xl font-heading uppercase text-white"
                        >
                              Our Clients
                        </motion.h2>
                  </div>

                  {/* Row 1 - scrolls left continuously */}
                  <MarqueeRow logos={row1} direction="left" duration={35} />

                  {/* Row 2 - scrolls right continuously */}
                  <MarqueeRow logos={row2} direction="right" duration={40} />
            </section>
      );
};
