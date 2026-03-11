"use client";

import { useRef, useEffect, useCallback, useState } from "react";

export const ElasticString = () => {
      const svgRef = useRef<SVGSVGElement>(null);
      const animFrameRef = useRef<number>(0);
      const [visible, setVisible] = useState(false);

      // Physics state - stored in refs to avoid re-renders
      const displacement = useRef(0);
      const velocity = useRef(0);
      const pathRef = useRef<SVGPathElement>(null);

      // Physics constants
      const SPRING = 0.08;
      const DAMPING = 0.85;
      const INFLUENCE_RADIUS = 80;
      const MAX_DISPLACEMENT = 30;
      const LINE_HEIGHT = 64;

      const updatePath = useCallback(() => {
            if (!pathRef.current) return;
            const midY = LINE_HEIGHT / 2;
            const cx = 1 + displacement.current;
            pathRef.current.setAttribute(
                  "d",
                  `M1,0 Q${cx},${midY} 1,${LINE_HEIGHT}`
            );
      }, []);

      useEffect(() => {
            // Reveal after delay
            const timer = setTimeout(() => setVisible(true), 2500);

            const handleMouseMove = (e: MouseEvent) => {
                  if (!svgRef.current) return;

                  const rect = svgRef.current.getBoundingClientRect();
                  const lineCenterX = rect.left + rect.width / 2;
                  const lineCenterY = rect.top + rect.height / 2;

                  const dx = e.clientX - lineCenterX;
                  const dy = e.clientY - lineCenterY;
                  const distance = Math.sqrt(dx * dx + dy * dy);

                  if (distance < INFLUENCE_RADIUS) {
                        const strength = 1 - distance / INFLUENCE_RADIUS;
                        const force = dx * strength * 0.6;
                        displacement.current = Math.max(
                              -MAX_DISPLACEMENT,
                              Math.min(MAX_DISPLACEMENT, displacement.current + force * 0.15)
                        );
                  }
            };

            // Physics loop
            const animate = () => {
                  // Spring force pulling back to center
                  const springForce = -SPRING * displacement.current;
                  velocity.current += springForce;
                  velocity.current *= DAMPING;
                  displacement.current += velocity.current;

                  // Settle when very small
                  if (
                        Math.abs(displacement.current) < 0.01 &&
                        Math.abs(velocity.current) < 0.01
                  ) {
                        displacement.current = 0;
                        velocity.current = 0;
                  }

                  updatePath();
                  animFrameRef.current = requestAnimationFrame(animate);
            };

            window.addEventListener("mousemove", handleMouseMove);
            animFrameRef.current = requestAnimationFrame(animate);

            return () => {
                  clearTimeout(timer);
                  window.removeEventListener("mousemove", handleMouseMove);
                  cancelAnimationFrame(animFrameRef.current);
            };
      }, [updatePath]);

      return (
            <div
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 z-30"
                  style={{ opacity: visible ? 1 : 0 }}
            >
                  <svg
                        ref={svgRef}
                        width="3"
                        height={LINE_HEIGHT}
                        viewBox={`0 0 3 ${LINE_HEIGHT}`}
                        className="overflow-visible"
                  >
                        <path
                              ref={pathRef}
                              d={`M1,0 Q1,${LINE_HEIGHT / 2} 1,${LINE_HEIGHT}`}
                              stroke="rgba(255,255,255,0.4)"
                              strokeWidth="1"
                              fill="none"
                              strokeLinecap="round"
                        />
                  </svg>
            </div>
      );
};
