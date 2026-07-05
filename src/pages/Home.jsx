import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faArrowDown,
  faEnvelope,
  faCode,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  { icon: faGithub,   href: "https://github.com/ihammadalamgir",       label: "GitHub"   },
  { icon: faLinkedin, href: "https://linkedin.com/in/ihammadalamgir",   label: "LinkedIn" },
  { icon: faEnvelope, href: "mailto:hammadalamgir778@gmail.com",        label: "Email"    },
];

const stats = [
  { value: "3+",  label: "Projects Shipped"   },
  { value: "10+", label: "Technologies"        },
  { value: "2+",  label: "Years Coding"        },
];

/* Animated role text that cycles */
const ROLES = [
  ".NET Engineer",
  "React Developer",
  "REST API Builder",
  "Full-Stack Dev",
];

function TypingRole() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const current = ROLES[index];
    const speed   = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1));
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, index, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className="text-gradient">.NET Engineer</span>;
  }

  return (
    <span className="text-gradient">
      {displayed}
      <span className="animate-cursor text-primary">|</span>
    </span>
  );
}

const Home = () => {
  return (
    <section
      id="mainy"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-24"
    >

      <div className="container-wide relative z-10 pt-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Content ───────────────────────────── */}
          <div className="text-center lg:text-left">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                         bg-emerald-500/10 border border-emerald-500/30
                         text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-3 leading-tight text-foreground"
            >
              Muhammad Hammad Alamgir
            </motion.h1>

            {/* Animated role */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-3xl font-heading font-bold mb-5 min-h-[2.5rem]"
            >
              <TypingRole />
            </motion.h2>

            {/* Punch line */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I engineer{" "}
              <span className="text-foreground font-semibold">performant web applications</span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">scalable REST APIs</span>{" "}
              using{" "}
              <span className="text-primary font-medium">ASP.NET Core</span>,{" "}
              <span className="text-primary font-medium">React</span>, and{" "}
              <span className="text-primary font-medium">SQL Server</span>{" "}
              — from concept to production.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <ScrollLink to="project" smooth duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 40px hsl(var(--primary)/0.45)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold
                             shadow-glow flex items-center gap-2 cursor-pointer text-sm"
                >
                  View My Work
                  <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
                </motion.button>
              </ScrollLink>

              <motion.a
                href="/files/Hammad-AlamgirSR.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 border-2 border-primary/40 text-foreground rounded-xl font-semibold
                           hover:bg-primary/10 hover:border-primary transition-all cursor-pointer text-sm
                           flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                Download CV
              </motion.a>

              <ScrollLink to="contact" smooth duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-secondary/80 text-foreground rounded-xl font-semibold
                             hover:bg-secondary transition-all cursor-pointer text-sm"
                >
                  Hire Me
                </motion.button>
              </ScrollLink>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-3 rounded-full bg-card border border-border shadow-card
                             hover:bg-primary hover:text-primary-foreground hover:border-primary
                             hover:shadow-glow transition-all duration-300 text-foreground/70"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Stats + Code Window ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-6"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-premium rounded-2xl p-4 text-center"
                >
                  <div className="stat-number">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Code window */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-15 blur-2xl" />

              {/* Window chrome */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/10 shadow-elevated">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#13131f] border-b border-white/8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-white/30 ml-auto font-mono">Developer.cs</span>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-sm leading-loose">
                  <pre className="text-gray-100">
                    <code>
                      <span className="text-violet-400">public class</span>{" "}
                      <span className="text-cyan-300">Developer</span>
                      {"\n"}{"{"}
                      {"\n  "}
                      <span className="text-violet-400">public string</span>{" "}
                      <span className="text-white">Name</span>
                      {" => "}
                      <span className="text-emerald-400">"Hammad Alamgir"</span>;
                      {"\n  "}
                      <span className="text-violet-400">public string[]</span>{" "}
                      <span className="text-white">Stack</span>
                      {" => new[] {"}
                      {"\n    "}
                      <span className="text-emerald-400">"ASP.NET Core"</span>,{" "}
                      <span className="text-emerald-400">"React"</span>,
                      {"\n    "}
                      <span className="text-emerald-400">"SQL Server"</span>,{" "}
                      <span className="text-emerald-400">"Node.js"</span>
                      {"\n  };\n  "}
                      <span className="text-violet-400">public bool</span>{" "}
                      <span className="text-white">OpenToWork</span>
                      {" => "}
                      <span className="text-orange-400">true</span>;
                      {"\n}"}
                    </code>
                  </pre>
                </div>

                {/* Skill pills */}
                <div className="px-6 pb-5 flex flex-wrap gap-2">
                  {[
                    { icon: faCode,     label: "C# / .NET" },
                    { icon: faServer,   label: "REST APIs"  },
                    { icon: faDatabase, label: "SQL Server" },
                  ].map((tag) => (
                    <span
                      key={tag.label}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs
                                 bg-primary/20 text-primary border border-primary/25 font-medium"
                    >
                      <FontAwesomeIcon icon={tag.icon} className="w-3 h-3" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
          <FontAwesomeIcon icon={faArrowDown} className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
