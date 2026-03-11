"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      const [isHovered, setIsHovered] = useState(false);
      const [cursorText, setCursorText] = useState("");
      const [isMobile, setIsMobile] = useState(true);

      // Detect mobile / touch devices
      useEffect(() => {
            const check = () => {
                  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
                  const isWide = window.innerWidth >= 768;
                  setIsMobile(!hasFinePointer || !isWide);
            };
            check();
            window.addEventListener("resize", check);
            return () => window.removeEventListener("resize", check);
      }, []);

      // Mouse tracking & hover detection
      useEffect(() => {
            if (isMobile) return;

            const updateMousePosition = (e: MouseEvent) => {
                  setMousePosition({ x: e.clientX, y: e.clientY });
            };

            const handleMouseOver = (e: MouseEvent) => {
                  const target = e.target as HTMLElement;

                  const cursorTextEl = target.closest("[data-cursor-text]") as HTMLElement | null;
                  if (cursorTextEl) {
                        setCursorText(cursorTextEl.getAttribute("data-cursor-text") || "");
                        setIsHovered(true);
                        return;
                  }

                  if (
                        target.tagName === "A" ||
                        target.tagName === "BUTTON" ||
                        target.closest("a") ||
                        target.closest("button") ||
                        target.closest("[data-cursor-hover]")
                  ) {
                        setCursorText("");
                        setIsHovered(true);
                  } else {
                        setCursorText("");
                        setIsHovered(false);
                  }
            };

            window.addEventListener("mousemove", updateMousePosition);
            window.addEventListener("mouseover", handleMouseOver);

            return () => {
                  window.removeEventListener("mousemove", updateMousePosition);
                  window.removeEventListener("mouseover", handleMouseOver);
            };
      }, [isMobile]);

      if (isMobile) return null;

      const size = cursorText ? 100 : isHovered ? 64 : 16;
      const offset = size / 2;

      return (
            <motion.div
                  className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
                  animate={{
                        x: mousePosition.x - offset,
                        y: mousePosition.y - offset,
                        width: size,
                        height: size,
                        backgroundColor: cursorText ? "rgba(234, 88, 12, 0.9)" : "rgba(255, 255, 255, 1)",
                        mixBlendMode: cursorText ? "normal" : "difference",
                  }}
                  transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                        mass: 0.1,
                  }}
            >
                  <AnimatePresence>
                        {cursorText && (
                              <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    className="text-white text-xs font-sans font-bold uppercase tracking-wider select-none"
                              >
                                    {cursorText}
                              </motion.span>
                        )}
                  </AnimatePresence>
            </motion.div>
      );
};
