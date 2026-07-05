import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faCheckCircle,
  faExclamationCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import BackToTopButton from "./BackToTopButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const MAX_MSG = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MSG) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    `w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border text-foreground
     placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2
     focus:ring-primary/40 focus:border-primary transition-all duration-200 text-sm`;

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 bg-background relative overflow-hidden">

      {/* Ambient gradient top */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                      bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Let's Talk</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to full-time roles, freelance projects, and collaboration opportunities.
            I reply within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* ── Info card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-80 flex-shrink-0"
          >
            <div className="glass-premium rounded-2xl p-7 flex flex-col h-full gap-7">
              <div>
                <h3 className="text-xl font-bold text-foreground font-heading mb-2">
                  Contact Info
                </h3>
                {/* Response time badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                bg-emerald-500/10 border border-emerald-500/25 text-emerald-600
                                dark:text-emerald-400 text-xs font-semibold">
                  <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                  Replies within 24 hours
                </div>
              </div>

              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+923187646051"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary
                               transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center
                                    justify-center text-primary group-hover:bg-primary
                                    group-hover:text-primary-foreground transition-all flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                      <p className="text-sm font-medium">+92 318-764-6051</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hammadalamgir778@gmail.com"
                    className="flex items-center gap-4 text-foreground/80 hover:text-primary
                               transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center
                                    justify-center text-primary group-hover:bg-primary
                                    group-hover:text-primary-foreground transition-all flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <p className="text-sm font-medium break-all">hammadalamgir778@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center
                                  justify-center text-primary flex-shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                    <p className="text-sm font-medium">Islamabad, Pakistan</p>
                  </div>
                </li>
              </ul>

              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: faGithub,   href: "https://github.com/ihammadalamgir",     label: "GitHub"   },
                    { icon: faLinkedin, href: "https://linkedin.com/in/ihammadalamgir", label: "LinkedIn" },
                  ].map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-11 h-11 rounded-xl bg-secondary border border-border
                                 flex items-center justify-center text-foreground/65
                                 hover:text-primary hover:border-primary hover:bg-primary/8
                                 transition-all duration-300"
                      aria-label={s.label}
                    >
                      <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Contact form ──────────────────────────── */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 glass-premium rounded-2xl p-7 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={inputClass}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputClass}
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={inputClass}
                placeholder="Project inquiry / Job opportunity / Collaboration"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Message
                </label>
                <span className={`text-xs ${formData.message.length > MAX_MSG * 0.85 ? "text-amber-500" : "text-muted-foreground"}`}>
                  {formData.message.length}/{MAX_MSG}
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows="5"
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project, role, or idea..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              whileHover={status === "idle" ? { scale: 1.02 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
              className={`w-full py-4 rounded-xl font-bold text-base flex items-center
                          justify-center gap-2.5 transition-all duration-300 ${
                status === "success"
                  ? "bg-emerald-600 text-white cursor-default"
                  : status === "error"
                  ? "bg-red-600 text-white cursor-default"
                  : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow"
              }`}
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Sending...
                </span>
              ) : status === "success" ? (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                  Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <FontAwesomeIcon icon={faExclamationCircle} />
                  Failed — Please retry
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
