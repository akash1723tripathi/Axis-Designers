"use client";

import { motion } from "framer-motion";

const fadeUp = {
      initial: { opacity: 0, y: 30 },
      whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      },
      viewport: { once: true, margin: "-50px" },
};

const sections = [
      {
            title: "1. Terms",
            body: "By accessing the website at axisdesigners.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
      },
      {
            title: "2. Use License",
            body: "Permission is granted to temporarily download one copy of the materials (information or software) on Axis Designers\u2019 website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Axis Designers\u2019 website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or \u201cmirror\u201d the materials on any other server.",
            body2: "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Axis Designers at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.",
      },
      {
            title: "3. Disclaimer",
            body: "The materials on Axis Designers\u2019 website are provided on an \u2018as is\u2019 basis. Axis Designers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Axis Designers does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
      },
      {
            title: "4. Limitations",
            body: "In no event shall Axis Designers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Axis Designers\u2019 website, even if Axis Designers or an Axis Designers authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      },
      {
            title: "5. Accuracy of Materials",
            body: "The materials appearing on Axis Designers\u2019 website could include technical, typographical, or photographic errors. Axis Designers does not warrant that any of the materials on its website are accurate, complete or current. Axis Designers may make changes to the materials contained on its website at any time without notice. However Axis Designers does not make any commitment to update the materials.",
      },
      {
            title: "6. Links",
            body: "Axis Designers has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Axis Designers of the site. Use of any such linked website is at the user\u2019s own risk.",
      },
      {
            title: "7. Modifications",
            body: "Axis Designers may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",
      },
      {
            title: "8. Governing Law",
            body: "These terms and conditions are governed by and construed in accordance with the laws of Delhi, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
      },
];

export const TermsContent = () => {
      return (
            <section className="bg-white py-20 md:py-28 px-6">
                  <div className="max-w-3xl mx-auto">
                        <motion.h2
                              className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-snug mb-4"
                              {...fadeUp}
                        >
                              Axis Designers Terms of Service
                        </motion.h2>
                        <motion.p
                              className="text-neutral-500 font-sans text-base mb-12"
                              {...fadeUp}
                        >
                              Please read these terms carefully before using our website.
                        </motion.p>

                        <div className="space-y-0">
                              {sections.map((section, i) => (
                                    <motion.div
                                          key={i}
                                          className="border-t border-neutral-200 pt-8 pb-8"
                                          initial={{ opacity: 0, y: 30 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{
                                                duration: 0.7,
                                                ease: [0.22, 1, 0.36, 1],
                                                delay: 0.05,
                                          }}
                                          viewport={{ once: true, margin: "-50px" }}
                                    >
                                          <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                                {section.title}
                                          </h3>
                                          <p className="text-neutral-700 font-sans text-base md:text-lg leading-relaxed">
                                                {section.body}
                                          </p>
                                          {section.body2 && (
                                                <p className="text-neutral-700 font-sans text-base md:text-lg leading-relaxed mt-4">
                                                      {section.body2}
                                                </p>
                                          )}
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
