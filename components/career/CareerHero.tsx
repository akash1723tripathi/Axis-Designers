"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface CareerHeroProps {
      searchQuery: string;
      setSearchQuery: (q: string) => void;
      roleFilter: string;
      setRoleFilter: (r: string) => void;
      industryFilter: string;
      setIndustryFilter: (i: string) => void;
      locationFilter: string;
      setLocationFilter: (l: string) => void;
      openCount: number;
}

const roles = [
      "All Roles",
      "Design",
      "Engineering",
      "Management",
      "Marketing & Sales",
      "Operations",
];

const industries = [
      "All Industries",
      "Exhibition & Events",
      "Interior Design",
      "Architecture",
      "Digital & Media",
];

const locations = [
      "All Locations",
      "Ghaziabad, India",
      "New Delhi, India",
      "Mumbai, India",
      "Remote",
];

const fadeUp = {
      initial: { opacity: 0, y: 40 },
      animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
      },
};

const stagger = {
      animate: {
            transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
            },
      },
};

export const CareerHero = ({
      searchQuery,
      setSearchQuery,
      roleFilter,
      setRoleFilter,
      industryFilter,
      setIndustryFilter,
      locationFilter,
      setLocationFilter,
      openCount,
}: CareerHeroProps) => {
      return (
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden ">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 via-neutral-100 to-white" />
                  {/* Subtle noise texture overlay */}
                  <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        }}
                  />

                  {/* Content */}
                  <motion.div
                        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-16 flex flex-col items-center text-center mt-15"
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                  >
                        {/* Heading */}
                        <motion.h1
                              variants={fadeUp}
                              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-neutral-900 leading-[0.95]"
                        >
                              Find Your Role at{" "}
                              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    Axis Designers
                              </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                              variants={fadeUp}
                              className="mt-6 md:mt-8 text-neutral-600 text-base md:text-lg max-w-2xl font-sans leading-relaxed"
                        >
                              Discover how you can make an impact: browse our focus areas,
                              global locations, and current opportunities.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                              variants={fadeUp}
                              className="mt-12 w-full max-w-3xl"
                        >
                              <div className="flex items-center bg-white rounded-xl shadow-lg shadow-neutral-200/60 border border-neutral-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/80">
                                    <div className="flex items-center gap-3 flex-1 px-5 py-4">
                                          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
                                          <input
                                                type="text"
                                                placeholder="Search By Keyword"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="flex-1 bg-transparent outline-none text-neutral-800 placeholder:text-neutral-400 font-sans text-base"
                                          />
                                    </div>
                                    <button
                                          onClick={() => {}}
                                          className="bg-orange-500 hover:bg-orange-600 text-white font-heading uppercase tracking-wider text-sm px-8 py-4 h-full transition-colors duration-200 cursor-pointer"
                                    >
                                          Search
                                    </button>
                              </div>
                        </motion.div>

                        {/* Filter Dropdowns */}
                        <motion.div
                              variants={fadeUp}
                              className="mt-5 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3"
                        >
                              <select
                                    value={roleFilter}
                                    onChange={(e) => setRoleFilter(e.target.value)}
                                    className="w-full px-5 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-700 font-sans text-sm appearance-none cursor-pointer shadow-sm hover:border-neutral-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                                    style={{
                                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundPosition: "right 16px center",
                                    }}
                              >
                                    {roles.map((r) => (
                                          <option key={r} value={r}>
                                                {r}
                                          </option>
                                    ))}
                              </select>

                              <select
                                    value={industryFilter}
                                    onChange={(e) => setIndustryFilter(e.target.value)}
                                    className="w-full px-5 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-700 font-sans text-sm appearance-none cursor-pointer shadow-sm hover:border-neutral-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                                    style={{
                                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundPosition: "right 16px center",
                                    }}
                              >
                                    {industries.map((i) => (
                                          <option key={i} value={i}>
                                                {i}
                                          </option>
                                    ))}
                              </select>

                              <select
                                    value={locationFilter}
                                    onChange={(e) => setLocationFilter(e.target.value)}
                                    className="w-full px-5 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-700 font-sans text-sm appearance-none cursor-pointer shadow-sm hover:border-neutral-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                                    style={{
                                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundPosition: "right 16px center",
                                    }}
                              >
                                    {locations.map((l) => (
                                          <option key={l} value={l}>
                                                {l}
                                          </option>
                                    ))}
                              </select>
                        </motion.div>

                        {/* Open Positions Counter */}
                        <motion.div
                              variants={fadeUp}
                              className="mt-14"
                        >
                              <p className="text-neutral-800 font-sans text-xl md:text-2xl">
                                    Open Positions:{" "}
                                    <span className="font-bold text-neutral-900 tabular-nums">
                                          {openCount}
                                    </span>
                              </p>
                        </motion.div>
                  </motion.div>

                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
            </section>
      );
};
