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

export const PrivacyContent = () => {
      return (
            <section className="bg-white py-20 md:py-28 px-6">
                  <div className="max-w-3xl mx-auto">
                        <motion.h2
                              className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-snug mb-10"
                              {...fadeUp}
                        >
                              In using this website you are deemed to have read and
                              agreed to the following terms and conditions:
                        </motion.h2>

                        <motion.div
                              className="space-y-6 text-neutral-700 font-sans text-base md:text-lg leading-relaxed"
                              initial="initial"
                              whileInView="whileInView"
                              viewport={{ once: true, margin: "-50px" }}
                              variants={{
                                    whileInView: {
                                          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                                    },
                              }}
                        >
                              <motion.p variants={fadeUp}>
                                    The following terminology applies to these Terms and Conditions,
                                    Privacy Statement and Disclaimer Notice and any or all Agreements:
                                    &ldquo;customer&rdquo;, &ldquo;You&rdquo; and &ldquo;Your&rdquo;
                                    refers to you, the person accessing this website and accepting the
                                    Company&rsquo;s terms and conditions. &ldquo;The Company&rdquo;,
                                    &ldquo;Ourselves&rdquo;, &ldquo;We&rdquo; and &ldquo;Us&rdquo;, refers
                                    to our Company. &ldquo;Party&rdquo;, &ldquo;Parties&rdquo;, or
                                    &ldquo;Us&rdquo;, refers to both the customer and ourselves, or either
                                    the customer or ourselves. All terms refer to the offer, acceptance and
                                    consideration of payment necessary to undertake the process of our
                                    assistance to the customer in the most appropriate manner, whether by
                                    formal meetings of a fixed duration, or any other means, for the express
                                    purpose of meeting the customer&rsquo;s needs in respect of provision of
                                    the Company&rsquo;s stated services/products, in accordance with and
                                    subject to, prevailing English Law. Any use of the above terminology or
                                    other words in the singular, plural, capitalization and/or he/she or
                                    they, are taken as interchangeable and therefore as referring to the same.
                              </motion.p>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          Information We Collect
                                    </h3>
                                    <p>
                                          Your privacy is important to us. It is Axis Designers&rsquo; policy
                                          to respect your privacy regarding any information we may collect
                                          from you across our website, axisdesigners.com, and other sites we
                                          own and operate.
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          Purpose of Data Collection
                                    </h3>
                                    <p>
                                          We only ask for personal information when we truly need it to
                                          provide a service to you. We collect it by fair and lawful means,
                                          with your knowledge and consent. We also let you know why
                                          we&rsquo;re collecting it and how it will be used.
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          Data Retention & Protection
                                    </h3>
                                    <p>
                                          We only retain collected information for as long as necessary to
                                          provide you with your requested service. What data we store,
                                          we&rsquo;ll protect within commercially acceptable means to prevent
                                          loss and theft, as well as unauthorised access, disclosure, copying,
                                          use or modification.
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          Third-Party Sharing
                                    </h3>
                                    <p>
                                          We don&rsquo;t share any personally identifying information
                                          publicly or with third-parties, except when required to by law.
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          External Links
                                    </h3>
                                    <p>
                                          Our website may link to external sites that are not operated by us.
                                          Please be aware that we have no control over the content and
                                          practices of these sites, and cannot accept responsibility or
                                          liability for their respective privacy policies.
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          Your Rights
                                    </h3>
                                    <p>
                                          You are free to refuse our request for your personal information,
                                          with the understanding that we may be unable to provide you with
                                          some of your desired services.
                                    </p>
                              </motion.div>

                              <motion.div
                                    className="border-t border-neutral-200 pt-8 mt-8"
                                    variants={fadeUp}
                              >
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                                          Acceptance of Terms
                                    </h3>
                                    <p>
                                          Your continued use of our website will be regarded as acceptance of
                                          our practices around privacy and personal information. If you have
                                          any questions about how we handle user data and personal
                                          information, feel free to contact us.
                                    </p>
                              </motion.div>

                              <motion.p
                                    className="text-sm text-neutral-500 pt-8 border-t border-neutral-200 mt-8"
                                    variants={fadeUp}
                              >
                                    This policy is effective as of 1 April 2019.
                              </motion.p>
                        </motion.div>
                  </div>
            </section>
      );
};
