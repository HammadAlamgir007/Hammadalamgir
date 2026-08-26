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
  const [errorMessage, setErrorMessage] = useState("");
  const MAX_MSG = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MSG) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    let sent = false;

    // 1. Try local/deployed /api/contact endpoint if running on Node/Vercel
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok && data.success) {
          sent = true;
        }
      }
    } catch {
      // Ignore and proceed to FormSubmit fallback
    }

    // 2. Direct FormSubmit AJAX fallback (delivers straight to inbox with zero config)
    if (!sent) {
      try {
        const fsResponse = await fetch("https://formsubmit.co/ajax/hammadalamgir778@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject ? `📩 ${formData.subject} — from ${formData.name}` : `📩 Portfolio Contact from ${formData.name}`,
            message: formData.message,
            _captcha: "false",
            _template: "table",
          }),
        });

        const fsData = await fsResponse.json();
        if (fsResponse.ok && (fsData.success === "true" || fsData.success === true || fsData.message)) {
          sent = true;
        }
      } catch (err) {
        console.error("Form transmission failed:", err);
      }
    }

    if (sent) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setErrorMessage("Network issue with direct delivery. Please click below to send via your email client.");
    }
  };

  const inputClass =
    `w-full px-4 py-3.5 rounded-xl bg-card border border-border text-foreground
     placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2
     focus:ring-primary/40 focus:border-primary transition-all duration-200 text-sm font-normal`;

  return (
    <section id="contact" className="py-28 md:py-40 px-6 sm:px-8 md:px-12 bg-transparent relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">



        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge">Direct Line</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg font-normal leading-relaxed">
            Send a direct message below. I reply within 24 hours.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Info card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:w-96 flex-shrink-0"
          >
            <div className="glass-premium rounded-3xl p-8 flex flex-col h-full gap-8 border border-border shadow-soft">
              <div>
                <h3 className="text-2xl font-bold text-foreground font-heading mb-2.5">
                  Contact Info
                </h3>
                {/* Response time badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                                bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                  <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                  Replies within 24 hours
                </div>
              </div>

              <ul className="space-y-6">
                <li>
                  <a
                    href="tel:+923187646051"
                    className="flex items-center gap-4 text-foreground/90 hover:text-primary
                               transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center
                                    justify-center text-primary group-hover:bg-primary
                                    group-hover:text-primary-foreground transition-all flex-shrink-0 shadow-soft">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-0.5 uppercase tracking-wider">Phone</p>
                      <p className="text-sm font-semibold text-foreground">+92 318-764-6051</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hammadalamgir778@gmail.com"
                    className="flex items-center gap-4 text-foreground/90 hover:text-primary
                               transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center
                                    justify-center text-primary group-hover:bg-primary
                                    group-hover:text-primary-foreground transition-all flex-shrink-0 shadow-soft">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-0.5 uppercase tracking-wider">Email</p>
                      <p className="text-sm font-semibold text-foreground break-all">hammadalamgir778@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-4 text-foreground/90">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center
                                  justify-center text-primary flex-shrink-0 shadow-soft">
                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-0.5 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-foreground">Islamabad, Pakistan</p>
                  </div>
                </li>
              </ul>

              <div className="mt-auto">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-semibold mb-3">
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
                      className="w-11 h-11 rounded-2xl bg-card border border-border
                                 flex items-center justify-center text-foreground/80
                                 hover:text-primary hover:border-primary hover:shadow-glow
                                 transition-all duration-300 shadow-soft"
                      aria-label={s.label}
                    >
                      <FontAwesomeIcon icon={s.icon} className="w-5 h-5" />
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
            transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 glass-premium rounded-3xl p-8 flex flex-col gap-6 border border-border shadow-soft"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-muted-foreground mb-2 uppercase tracking-wider">
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
                <label htmlFor="email" className="block text-xs font-mono font-medium text-muted-foreground mb-2 uppercase tracking-wider">
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
              <label htmlFor="subject" className="block text-xs font-mono font-medium text-muted-foreground mb-2 uppercase tracking-wider">
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
                <label htmlFor="message" className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <span className="text-xs font-mono text-muted-foreground">
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

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className={`btn-solid w-full flex items-center justify-center gap-2.5 !py-4 text-sm font-semibold tracking-wide ${
                status === "success"
                  ? "!bg-emerald-600 !border-emerald-600 !text-white"
                  : status === "error"
                  ? "!bg-red-600 !border-red-600 !text-white"
                  : ""
              }`}
              data-cursor-text="Submit"
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
            </button>
            {/* Status and fallback actions */}
            {status === "error" && (
              <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/30 text-destructive text-xs space-y-3 text-center">
                <p className="font-medium">
                  {errorMessage || "Direct form submission encountered an issue."}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:hammadalamgir778@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact from ' + (formData.name || 'Visitor'))}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                    className="btn-solid !py-2 !px-5 !text-xs !bg-destructive !text-white inline-flex items-center gap-2"
                    data-cursor-text="Email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Open in Mail App
                  </a>
                  <a
                    href="mailto:hammadalamgir778@gmail.com"
                    className="btn-outline !py-2 !px-5 !text-xs inline-flex items-center gap-2"
                    data-cursor-text="Direct"
                  >
                    hammadalamgir778@gmail.com
                  </a>
                </div>
              </div>
            )}
          </motion.form>
        </div>

        {/* ── Giant Statement Footer (Matching Reference Screenshot 3) ── */}
        <div className="mt-28 md:mt-36 pt-12 border-t border-border/60">
          {/* Large Statement Name at Bottom (Clean, Contained, Zero Overflow) */}
          <div className="w-full overflow-hidden py-8 my-4 select-none border-y border-border/30 flex items-center justify-center">
            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tighter leading-none text-foreground/90 text-center uppercase whitespace-nowrap hover:text-gradient transition-all duration-700 max-w-full"
              data-cursor-text="Hammad"
            >
              Hammad Alamgir
            </h2>
          </div>

          {/* Footer bottom meta row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary via-accent to-purple-500 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">H</span>
              </div>
              <span className="font-heading font-bold text-foreground">Muhammad Hammad Alamgir</span>
              <span className="hidden sm:inline text-muted-foreground/60">&bull; Islamabad, PK</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
