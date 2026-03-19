"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";

export interface Job {
      id: number;
      title: string;
      department: string;
      role: string;
      industry: string;
      location: string;
      type: string;
      description: string;
}

export const jobData: Job[] = [
      {
            id: 1,
            title: "Senior 3D Visualizer",
            department: "Design",
            role: "Design",
            industry: "Exhibition & Events",
            location: "Ghaziabad, India",
            type: "Full-time",
            description:
                  "Create stunning 3D renders and walk-throughs for exhibition booths and spatial environments using 3ds Max, V-Ray, and Unreal Engine.",
      },
      {
            id: 2,
            title: "Project Manager",
            department: "Management",
            role: "Management",
            industry: "Exhibition & Events",
            location: "New Delhi, India",
            type: "Full-time",
            description:
                  "Lead end-to-end exhibition projects from concept to on-site installation, managing timelines, budgets, and cross-functional teams.",
      },
      {
            id: 3,
            title: "Exhibition Booth Designer",
            department: "Design",
            role: "Design",
            industry: "Exhibition & Events",
            location: "Ghaziabad, India",
            type: "Full-time",
            description:
                  "Design innovative and functional exhibition booth layouts that captivate audiences and elevate brand presence at trade shows.",
      },
      {
            id: 4,
            title: "Graphic Designer",
            department: "Design",
            role: "Design",
            industry: "Digital & Media",
            location: "Ghaziabad, India",
            type: "Full-time",
            description:
                  "Produce high-quality visual collateral including branding, signage, presentations, and digital assets for exhibitions and clients.",
      },
      {
            id: 5,
            title: "Marketing Executive",
            department: "Marketing & Sales",
            role: "Marketing & Sales",
            industry: "Digital & Media",
            location: "Remote",
            type: "Full-time",
            description:
                  "Drive brand awareness through digital marketing campaigns, social media strategy, and content creation for the exhibition industry.",
      },
      {
            id: 6,
            title: "Sales Manager",
            department: "Marketing & Sales",
            role: "Marketing & Sales",
            industry: "Exhibition & Events",
            location: "New Delhi, India",
            type: "Full-time",
            description:
                  "Build and maintain client relationships, prepare proposals, and close deals for exhibition booth design and fabrication services.",
      },
      {
            id: 7,
            title: "Fabrication Lead",
            department: "Operations",
            role: "Operations",
            industry: "Exhibition & Events",
            location: "Ghaziabad, India",
            type: "Full-time",
            description:
                  "Oversee the fabrication and production of exhibition structures, ensuring quality standards and on-time delivery of booth components.",
      },
      {
            id: 8,
            title: "Interior Designer",
            department: "Design",
            role: "Design",
            industry: "Interior Design",
            location: "Mumbai, India",
            type: "Full-time",
            description:
                  "Design sophisticated interior spaces for corporate offices, retail environments, and hospitality projects with a focus on spatial storytelling.",
      },
      {
            id: 9,
            title: "Business Development Executive",
            department: "Marketing & Sales",
            role: "Marketing & Sales",
            industry: "Exhibition & Events",
            location: "New Delhi, India",
            type: "Full-time",
            description:
                  "Identify new business opportunities, expand the client portfolio, and develop strategic partnerships across the exhibition and events sector.",
      },
];

interface CareerListingsProps {
      jobs: Job[];
}

const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as const,
            },
      }),
};

export const CareerListings = ({ jobs }: CareerListingsProps) => {
      return (
            <section className="relative bg-white py-16 md:py-24">
                  <div className="max-w-6xl mx-auto px-6 md:px-12">
                        {jobs.length === 0 ? (
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-center py-20"
                              >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
                                          <Briefcase className="w-8 h-8 text-neutral-400" />
                                    </div>
                                    <h3 className="text-2xl font-heading uppercase text-neutral-800 mb-3">
                                          No positions found
                                    </h3>
                                    <p className="text-neutral-500 font-sans max-w-md mx-auto">
                                          Try adjusting your search or filters to find the role that&apos;s right for you.
                                    </p>
                              </motion.div>
                        ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {jobs.map((job, i) => (
                                          <motion.div
                                                key={job.id}
                                                custom={i}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.15 }}
                                                variants={cardVariants}
                                          >
                                                <div className="group relative bg-white border border-neutral-200 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/60 hover:border-orange-300 hover:-translate-y-1">
                                                      {/* Department tag */}
                                                      <div className="flex items-center gap-2 mb-4">
                                                            <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-sans font-semibold uppercase tracking-wider">
                                                                  {job.department}
                                                            </span>
                                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-sans font-medium">
                                                                  <Clock className="w-3 h-3" />
                                                                  {job.type}
                                                            </span>
                                                      </div>

                                                      {/* Title */}
                                                      <h3 className="font-heading text-xl uppercase tracking-tight text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                                                            {job.title}
                                                      </h3>

                                                      {/* Location */}
                                                      <div className="flex items-center gap-1.5 mb-4">
                                                            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                                                            <span className="text-sm font-sans text-neutral-500">
                                                                  {job.location}
                                                            </span>
                                                      </div>

                                                      {/* Description */}
                                                      <p className="text-sm font-sans text-neutral-500 leading-relaxed flex-1 mb-6">
                                                            {job.description}
                                                      </p>

                                                      {/* Apply button */}
                                                      <button className="inline-flex items-center gap-2 text-sm font-heading uppercase tracking-wider text-orange-500 group-hover:text-orange-600 transition-colors duration-200 cursor-pointer">
                                                            Apply Now
                                                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                                      </button>

                                                      {/* Hover accent line */}
                                                      <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                </div>
                                          </motion.div>
                                    ))}
                              </div>
                        )}
                  </div>
            </section>
      );
};
