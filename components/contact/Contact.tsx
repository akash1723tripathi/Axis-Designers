"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, X, CheckCircle, FileText, Image, File as FileIcon, Loader2 } from "lucide-react";

const budgetOptions = ["10-20k", "30-40k", "40-50k", "50-100k", "> 100k"];

export const Contact = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
      const [showCaptcha, setShowCaptcha] = useState(false);
      const [captchaAnswer, setCaptchaAnswer] = useState("");
      const [captchaError, setCaptchaError] = useState(false);
      const [formSubmitted, setFormSubmitted] = useState(false);
      const [sending, setSending] = useState(false);
      const [submitError, setSubmitError] = useState<string | null>(null);
      const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

      const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                  setAttachedFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
            }
            e.target.value = "";
      }, []);

      const removeFile = useCallback((index: number) => {
            setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
      }, []);

      const getFileIcon = (file: File) => {
            if (file.type.startsWith("image/")) return Image;
            if (file.type === "application/pdf" || file.type.includes("document") || file.type.includes("text")) return FileText;
            return FileIcon;
      };

      const formatFileSize = (bytes: number) => {
            if (bytes < 1024) return `${bytes} B`;
            if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
            return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
      };

      const [captchaChallenge] = useState(() => {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return { a, b, answer: a + b };
      });

      const handleSendRequest = useCallback(() => {
            setShowCaptcha(true);
            setCaptchaAnswer("");
            setCaptchaError(false);
      }, []);

      const handleCaptchaSubmit = useCallback(async () => {
            if (parseInt(captchaAnswer) !== captchaChallenge.answer) {
                  setCaptchaError(true);
                  return;
            }

            setSending(true);
            setSubmitError(null);

            try {
                  const formData = new FormData();
                  formData.append("name", name);
                  formData.append("email", email);
                  formData.append("message", message);
                  if (selectedBudget) formData.append("budget", selectedBudget);
                  attachedFiles.forEach((file) => formData.append("files", file));

                  const res = await fetch("/api/contact", {
                        method: "POST",
                        body: formData,
                  });

                  const data = await res.json();

                  if (!res.ok) {
                        setSubmitError(data.error || "Failed to send. Please try again.");
                        return;
                  }

                  setShowCaptcha(false);
                  setFormSubmitted(true);
                  setName("");
                  setEmail("");
                  setMessage("");
                  setSelectedBudget(null);
                  setAttachedFiles([]);
                  setTimeout(() => setFormSubmitted(false), 5000);
            } catch {
                  setSubmitError("Network error. Please check your connection and try again.");
            } finally {
                  setSending(false);
            }
      }, [captchaAnswer, captchaChallenge.answer, name, email, message, selectedBudget, attachedFiles]);

      return (
            <section id="contact-form" className="relative">
                  {/* Curved top divider - light section appearing from dark */}
                  <div className="relative w-full bg-neutral-950">
                        <div className="relative w-full h-[60px] md:h-[80px]">
                              <div className="absolute bottom-0 left-0 right-0 h-full bg-[#f5f0eb] rounded-t-[40px] md:rounded-t-[60px]" />
                        </div>
                  </div>

                  {/* Hero viewscreen - "Say Hi" */}
                  <div className="bg-[#f5f0eb] relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-40 flex flex-col items-center text-center">


                              <div className="overflow-hidden">
                                    <motion.h2
                                          initial={{ y: "100%" }}
                                          whileInView={{ y: "0%" }}
                                          viewport={{ once: false }}
                                          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as const }}
                                          className="text-5xl md:text-7xl lg:text-[6rem] font-heading uppercase leading-[0.95] text-neutral-900 tracking-tight"
                                    >
                                          No Need
                                    </motion.h2>
                              </div>
                              <div className="overflow-hidden">
                                    <motion.h2
                                          initial={{ y: "100%" }}
                                          whileInView={{ y: "0%" }}
                                          viewport={{ once: false }}
                                          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] as const }}
                                          className="text-5xl md:text-7xl lg:text-[6rem] font-heading uppercase leading-[0.95] text-neutral-900 tracking-tight"
                                    >
                                          To Be Shy.
                                    </motion.h2>
                              </div>

                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mt-12"
                              >
                                    <a
                                          href="https://mail.google.com/mail/?view=cm&to=info@axisdesigners.com&su=Project%20Inquiry"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-neutral-400 text-neutral-800 font-sans text-sm uppercase tracking-[0.15em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white"
                                    >
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10 flex items-center gap-3">
                                                <span className="w-5 h-[1px] bg-current" />
                                                Talk to Axis Designers
                                          </span>
                                    </a>
                              </motion.div>
                        </div>
                  </div>

                  {/* Contact Form Section */}
                  <div id="contact-form-fields" className="bg-[#f5f0eb]">
                        <div className="max-w-3xl mx-auto px-8 md:px-16 pb-32">
                              {/* Name */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-12"
                              >
                                    <input
                                          type="text"
                                          placeholder="Name"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-sans text-neutral-800 placeholder:text-neutral-800 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                              </motion.div>

                              {/* Email */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.05, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-12"
                              >
                                    <input
                                          type="email"
                                          placeholder="Email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-sans text-neutral-800 placeholder:text-neutral-800 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                                    />
                              </motion.div>

                              {/* Project Description */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-16"
                              >
                                    <textarea
                                          placeholder="Tell us about your project"
                                          rows={1}
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
                                          className="w-full bg-transparent border-b border-neutral-300 py-4 text-lg font-sans text-neutral-800 placeholder:text-neutral-800 focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                                    />
                              </motion.div>

                              {/* Budget Selection */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-16"
                              >
                                    <p className="text-lg font-sans font-semibold text-neutral-800 mb-6">
                                          Project budget (USD)
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                          {budgetOptions.map((option) => (
                                                <button
                                                      key={option}
                                                      onClick={() => setSelectedBudget(option)}
                                                      className={`px-5 py-2.5 rounded-full border text-sm font-sans transition-all duration-300 ${selectedBudget === option
                                                            ? "bg-orange-500 border-orange-500 text-white"
                                                            : "border-neutral-400 text-neutral-700 hover:border-neutral-800"
                                                            }`}
                                                >
                                                      {option}
                                                </button>
                                          ))}
                                    </div>
                              </motion.div>

                              {/* Attachment */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] as const }}
                                    className="mb-16"
                              >
                                    <label className="inline-flex items-center gap-2 text-neutral-800 font-sans font-semibold cursor-pointer hover:text-orange-600 transition-colors group">
                                          <Paperclip className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                          <span className="border-b-2 border-current pb-0.5">Add attachment</span>
                                          <input type="file" className="hidden" multiple onChange={handleFileChange} />
                                    </label>

                                    {/* Attached files list */}
                                    {attachedFiles.length > 0 && (
                                          <div className="mt-5 flex flex-col gap-2">
                                                {attachedFiles.map((file, index) => {
                                                      const Icon = getFileIcon(file);
                                                      const isImage = file.type.startsWith("image/");
                                                      return (
                                                            <motion.div
                                                                  key={`${file.name}-${index}`}
                                                                  initial={{ opacity: 0, x: -10 }}
                                                                  animate={{ opacity: 1, x: 0 }}
                                                                  className="flex items-center gap-3 bg-white/60 rounded-lg px-4 py-3 border border-neutral-200"
                                                            >
                                                                  {isImage ? (
                                                                        <img
                                                                              src={URL.createObjectURL(file)}
                                                                              alt={file.name}
                                                                              className="w-10 h-10 rounded object-cover flex-shrink-0"
                                                                        />
                                                                  ) : (
                                                                        <Icon className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                                                                  )}
                                                                  <div className="flex-1 min-w-0">
                                                                        <p className="text-sm font-sans text-neutral-800 truncate">{file.name}</p>
                                                                        <p className="text-xs font-sans text-neutral-400">{formatFileSize(file.size)}</p>
                                                                  </div>
                                                                  <button
                                                                        onClick={() => removeFile(index)}
                                                                        className="text-neutral-400 hover:text-red-500 transition-colors flex-shrink-0"
                                                                  >
                                                                        <X className="w-4 h-4" />
                                                                  </button>
                                                            </motion.div>
                                                      );
                                                })}
                                          </div>
                                    )}
                              </motion.div>

                              {/* Send Button */}
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.25, ease: [0.76, 0, 0.24, 1] as const }}
                              >
                                    <button
                                          onClick={handleSendRequest}
                                          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border border-neutral-400 text-neutral-700 font-sans text-sm uppercase tracking-[0.15em] overflow-hidden transition-colors duration-500 hover:border-orange-500 hover:text-white"
                                    >
                                          <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
                                          <span className="relative z-10">Send request</span>
                                    </button>
                              </motion.div>

                              {/* Success message */}
                              <AnimatePresence>
                                    {formSubmitted && (
                                          <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="mt-6 flex items-center gap-2 text-green-700 font-sans"
                                          >
                                                <CheckCircle className="w-5 h-5" />
                                                <span>Your request has been sent successfully!</span>
                                          </motion.div>
                                    )}
                              </AnimatePresence>
                        </div>
                  </div>

                  {/* Curved transition from beige to dark for Footer */}
                  <div className="relative w-full bg-neutral-950">
                        <div className="relative w-full h-[80px] md:h-[100px]">
                              <div className="absolute top-0 left-0 right-0 h-full bg-[#f5f0eb] rounded-b-[40px] md:rounded-b-[60px]" />
                        </div>
                  </div>

                  {/* Human Verification Modal */}
                  <AnimatePresence>
                        {showCaptcha && (
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                                    onClick={() => setShowCaptcha(false)}
                              >
                                    <motion.div
                                          initial={{ scale: 0.9, opacity: 0 }}
                                          animate={{ scale: 1, opacity: 1 }}
                                          exit={{ scale: 0.9, opacity: 0 }}
                                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                          onClick={(e) => e.stopPropagation()}
                                          className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4"
                                    >
                                          <button
                                                onClick={() => setShowCaptcha(false)}
                                                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 transition-colors"
                                          >
                                                <X className="w-5 h-5" />
                                          </button>

                                          <h3 className="text-xl font-heading uppercase text-neutral-900 mb-2">
                                                Human Verification
                                          </h3>
                                          <p className="text-sm font-sans text-neutral-500 mb-6">
                                                Please solve this to confirm you&apos;re not a robot.
                                          </p>

                                          <p className="text-lg font-sans font-semibold text-neutral-800 mb-4">
                                                What is {captchaChallenge.a} + {captchaChallenge.b}?
                                          </p>

                                          <input
                                                type="number"
                                                value={captchaAnswer}
                                                onChange={(e) => {
                                                      setCaptchaAnswer(e.target.value);
                                                      setCaptchaError(false);
                                                }}
                                                onKeyDown={(e) => e.key === "Enter" && handleCaptchaSubmit()}
                                                placeholder="Your answer"
                                                className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 font-sans placeholder:text-neutral-400 focus:outline-none focus:border-orange-500 transition-colors"
                                                autoFocus
                                          />

                                          {captchaError && (
                                                <p className="text-red-500 text-sm font-sans mt-2">
                                                      Incorrect answer. Please try again.
                                                </p>
                                          )}

                                          {submitError && (
                                                <p className="text-red-500 text-sm font-sans mt-2">
                                                      {submitError}
                                                </p>
                                          )}

                                          <button
                                                onClick={handleCaptchaSubmit}
                                                disabled={sending}
                                                className="mt-4 w-full py-3 rounded-full bg-orange-500 text-white font-sans text-sm uppercase tracking-[0.15em] hover:bg-orange-600 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                          >
                                                {sending ? (
                                                      <>
                                                            <Loader2 className="w-4 h-4 animate-spin" />
                                                            Sending...
                                                      </>
                                                ) : (
                                                      <>Verify &amp; Send</>
                                                )}
                                          </button>
                                    </motion.div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </section>
      );
};
