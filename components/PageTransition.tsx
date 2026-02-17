"use client";

import { useState, createContext, useContext, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

/* ──────────── Context ──────────── */

interface TransitionContextType {
      navigateWithTransition: (href: string, origin?: { x: number; y: number }) => void;
}

const TransitionContext = createContext<TransitionContextType>({
      navigateWithTransition: () => { },
});

export const usePageTransition = () => useContext(TransitionContext);

/* ──────────── Provider ──────────── */

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
      const router = useRouter();
      const [phase, setPhase] = useState<"idle" | "covering" | "covered" | "revealing">("idle");
      const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
      const busyRef = useRef(false);

      const navigateWithTransition = useCallback(
            (href: string, clickOrigin?: { x: number; y: number }) => {
                  if (busyRef.current) return;
                  busyRef.current = true;

                  // Prefetch the target route
                  router.prefetch(href);

                  if (clickOrigin) {
                        setOrigin({ x: `${clickOrigin.x}px`, y: `${clickOrigin.y}px` });
                  } else {
                        setOrigin({ x: "50%", y: "50%" });
                  }

                  // Phase 1: circle expands to cover screen
                  setPhase("covering");

                  // After cover animation completes, navigate
                  setTimeout(() => {
                        setPhase("covered");
                        router.push(href);

                        // Just reset state after navigation without retraction animation
                        setTimeout(() => {
                              setPhase("idle");
                              busyRef.current = false;
                        }, 500);
                  }, 500);
            },
            [router]
      );

      const isVisible = phase !== "idle";

      return (
            <TransitionContext.Provider value={{ navigateWithTransition }}>
                  {children}

                  {/* Transition overlay */}
                  <AnimatePresence>
                        {isVisible && (
                              <motion.div
                                    key="page-transition"
                                    className="fixed inset-0 z-[100] pointer-events-auto bg-neutral-950"
                                    initial={{
                                          clipPath: `circle(0% at ${origin.x} ${origin.y})`,
                                    }}
                                    animate={{
                                          clipPath:
                                                phase === "covered"
                                                      ? `circle(150% at ${origin.x} ${origin.y})`
                                                      : `circle(150% at ${origin.x} ${origin.y})`,
                                    }}
                                    exit={{
                                          opacity: 0,
                                    }}
                                    transition={{
                                          duration: 0.5,
                                          ease: [0.76, 0, 0.24, 1],
                                    }}
                              />
                        )}
                  </AnimatePresence>
            </TransitionContext.Provider>
      );
};
