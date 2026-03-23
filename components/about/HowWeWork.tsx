"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
      {
            title: "Discovery &\nBriefing",
            description:
                  "We begin by understanding your goals, brand identity, and space requirements through in-depth discussions and research.",
            accent: "#f97316",
      },
      {
            title: "Creative Ideation &\nConceptual Design",
            description:
                  "Our design team transforms insights into innovative concepts that align with your brand and engage your audience.",
            accent: "#fb923c",
      },
      {
            title: "Budgeting, Technical\nDrawings & Approvals",
            description:
                  "We prepare precise cost estimates and detailed drawings for client approval, ensuring clarity and compliance before execution.",
            accent: "#f59e0b",
      },
      {
            title: "Manufacturing &\nOn-Site Execution",
            description:
                  "From production to installation, we manage every detail with craftsmanship and on-ground coordination across locations.",
            accent: "#d97706",
      },
      {
            title: "Project Delivery &\nFeedback Loop",
            description:
                  "We hand over a fully finished project — on time and on point — and incorporate client feedback to continually refine our approach.",
            accent: "#b45309",
      },
];

/*
  Desktop layout (matching reference tree diagram):
  ┌──────────┐                    ┌──────────┐
  │  Step 1   │  (left, mid)       │  Step 3   │  (right, top)
  └─────┬────┘                    └─────┬────┘
        │          ┌──────────┐         │
        │          │  Step 5   │         │
  ┌─────┴────┐     └─────┬────┘   ┌─────┴────┐
  │  Step 2   │          │         │  Step 4   │
  └─────┬────┘     ◉◉◉◉◉◉◉◉◉     └─────┬────┘
        └──────── glowing base ────────┘
*/

function StepCard({ step, index, className }: { step: (typeof steps)[number]; index: number; className?: string }) {
      return (
            <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-2xl p-6 overflow-hidden transition-all duration-200 ${className || ""}`}
                  style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: `1px solid ${step.accent}25`,
                  }}
            >
                  {/* Bottom glow */}
                  <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[100px] rounded-full blur-[40px] opacity-25 group-hover:opacity-60 transition-opacity duration-200"
                        style={{ background: `radial-gradient(ellipse, ${step.accent}80, transparent)` }}
                  />
                  {/* Top border shine */}
                  <div
                        className="absolute top-0 left-0 w-full h-px opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: `linear-gradient(90deg, transparent, ${step.accent}60, transparent)` }}
                  />
                  {/* Inner highlight on hover */}
                  <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 50%)" }}
                  />

                  {/* Step number */}
                  <span
                        className="relative z-10 text-xs font-sans uppercase tracking-[0.25em] mb-3 block"
                        style={{ color: step.accent }}
                  >
                        Step 0{index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 text-base md:text-lg font-heading font-bold leading-tight text-white whitespace-pre-line mb-3">
                        {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm font-sans text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                        {step.description}
                  </p>
            </motion.div>
      );
}

function ConnectingLines() {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: false, amount: 0.15 });

      return (
            <svg
                  ref={ref}
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 780"
                  fill="none"
            >
                  {/* Step 1 (left-mid) → platform: line exits bottom-right of card, curves down to center */}
                  <motion.path
                        d="M 340 220 C 340 340, 500 420, 500 610"
                        stroke="url(#lineGrad1)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Step 2 (left-lower) → platform: shorter curve from bottom-right to center */}
                  <motion.path
                        d="M 340 470 C 340 530, 430 580, 500 610"
                        stroke="url(#lineGrad2)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Step 3 (right-top) → platform: long curve from bottom-left down to center */}
                  <motion.path
                        d="M 660 175 C 660 340, 500 420, 500 610"
                        stroke="url(#lineGrad3)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Step 4 (right-lower) → platform: shorter curve from bottom-left to center */}
                  <motion.path
                        d="M 660 445 C 660 520, 570 575, 500 610"
                        stroke="url(#lineGrad4)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1.2, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Small glowing dots at line starts */}
                  {isInView && (
                        <>
                              <motion.circle cx="340" cy="220" r="3" fill="rgba(249,115,22,0.5)"
                                    initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6] }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                              />
                              <motion.circle cx="340" cy="470" r="3" fill="rgba(251,146,60,0.5)"
                                    initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6] }}
                                    transition={{ duration: 0.8, delay: 0.45 }}
                              />
                              <motion.circle cx="660" cy="175" r="3" fill="rgba(245,158,11,0.5)"
                                    initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6] }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                              />
                              <motion.circle cx="660" cy="445" r="3" fill="rgba(217,119,6,0.5)"
                                    initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6] }}
                                    transition={{ duration: 0.8, delay: 0.75 }}
                              />
                        </>
                  )}

                  <defs>
                        <linearGradient id="lineGrad1" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(249,115,22,0.5)" />
                              <stop offset="100%" stopColor="rgba(249,115,22,0.05)" />
                        </linearGradient>
                        <linearGradient id="lineGrad2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(251,146,60,0.5)" />
                              <stop offset="100%" stopColor="rgba(251,146,60,0.05)" />
                        </linearGradient>
                        <linearGradient id="lineGrad3" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(245,158,11,0.5)" />
                              <stop offset="100%" stopColor="rgba(245,158,11,0.05)" />
                        </linearGradient>
                        <linearGradient id="lineGrad4" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(217,119,6,0.5)" />
                              <stop offset="100%" stopColor="rgba(217,119,6,0.05)" />
                        </linearGradient>
                  </defs>
            </svg>
      );
}

function GlowingPlatform() {
      return (
            <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-[420px] h-[100px] mx-auto"
            >
                  {/* Outer glow */}
                  <div
                        className="absolute inset-0 rounded-[50%]"
                        style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.04) 50%, transparent 75%)" }}
                  />
                  {/* Middle ring */}
                  <div
                        className="absolute left-[12%] right-[12%] top-[15%] bottom-[15%] rounded-[50%]"
                        style={{
                              background: "radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, rgba(249,115,22,0.06) 60%, transparent 80%)",
                              border: "1px solid rgba(249,115,22,0.1)",
                        }}
                  />
                  {/* Inner ring */}
                  <div
                        className="absolute left-[25%] right-[25%] top-[28%] bottom-[28%] rounded-[50%]"
                        style={{
                              background: "radial-gradient(ellipse at center, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0.08) 60%, transparent 100%)",
                              border: "1px solid rgba(249,115,22,0.18)",
                        }}
                  />
                  {/* Core */}
                  <div
                        className="absolute left-[38%] right-[38%] top-[38%] bottom-[38%] rounded-[50%] blur-sm"
                        style={{ background: "rgba(249,115,22,0.45)" }}
                  />
            </motion.div>
      );
}

export const HowWeWork = () => {
      return (
            <section className="relative bg-neutral-950 overflow-hidden py-24 md:py-36">
                  {/* Ambient warm glows */}
                  <div
                        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(180,83,9,0.12) 0%, rgba(124,45,18,0.06) 50%, transparent 100%)" }}
                  />
                  <div
                        className="absolute top-1/3 right-1/5 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(120,53,15,0.04) 50%, transparent 100%)" }}
                  />
                  <div
                        className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(217,119,6,0.10) 0%, rgba(124,45,18,0.05) 50%, transparent 100%)" }}
                  />

                  <div className="relative max-w-6xl mx-auto px-6 md:px-16">
                        {/* Heading */}
                        <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                              className="text-center mb-16 md:mb-24"
                        >
                              <p className="text-xs font-sans uppercase tracking-[0.3em] text-neutral-500 mb-4 md:mb-6">
                                    Our Process
                              </p>
                              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
                                    How We{" "}
                                    <span className="italic font-light text-neutral-400">Work</span>
                              </h2>
                        </motion.div>

                        {/* ─── Desktop: Tree layout with absolute positioned cards ─── */}
                        <div className="hidden lg:block">
                              <div className="relative" style={{ height: "780px" }}>
                                    {/* SVG connecting lines */}
                                    <ConnectingLines />

                                    {/* Step 1 — left, mid-high */}
                                    <div className="absolute z-10 w-[320px]" style={{ left: "10%", top: "20px" }}>
                                          <StepCard step={steps[0]} index={0} />
                                    </div>

                                    {/* Step 3 — right, top (swapped with Step 2) */}
                                    <div className="absolute z-10 w-[320px]" style={{ right: "5%", top: "0px" }}>
                                          <StepCard step={steps[2]} index={2} />
                                    </div>

                                    {/* Step 2 — left, lower (swapped with Step 3) */}
                                    <div className="absolute z-10 w-[320px]" style={{ left: "5%", top: "310px" }}>
                                          <StepCard step={steps[1]} index={1} />
                                    </div>

                                    {/* Step 4 — right, lower */}
                                    <div className="absolute z-10 w-[320px]" style={{ right: "4%", top: "320px" }}>
                                          <StepCard step={steps[3]} index={3} />
                                    </div>

                                    {/* Step 5 — center bottom */}
                                    <div className="absolute z-10 w-[360px] left-1/2 -translate-x-1/2" style={{ top: "600px" }}>
                                          <StepCard step={steps[4]} index={4} />
                                    </div>

                                    {/* Glowing platform — anchored below Step 5 */}
                                    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "800px" }}>
                                          <GlowingPlatform />
                                    </div>
                              </div>
                        </div>

                        {/* ─── Tablet: 2-column grid ─── */}
                        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5">
                              {steps.map((step, i) => (
                                    <div key={step.title} className={i === steps.length - 1 ? "col-span-2 max-w-sm mx-auto w-full" : ""}>
                                          <StepCard step={step} index={i} />
                                    </div>
                              ))}
                              <div className="col-span-2 mt-6">
                                    <GlowingPlatform />
                              </div>
                        </div>

                        {/* ─── Mobile: Single column ─── */}
                        <div className="sm:hidden space-y-4">
                              {steps.map((step, i) => (
                                    <StepCard key={step.title} step={step} index={i} />
                              ))}
                              <div className="mt-8">
                                    <GlowingPlatform />
                              </div>
                        </div>
                  </div>
            </section>
      );
};
