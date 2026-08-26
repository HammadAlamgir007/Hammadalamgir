import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";

const socialLinks = [
  { icon: faGithub,   href: "https://github.com/ihammadalamgir",       label: "GitHub"   },
  { icon: faLinkedin, href: "https://linkedin.com/in/ihammadalamgir",   label: "LinkedIn" },
  { icon: faEnvelope, href: "mailto:hammadalamgir778@gmail.com",        label: "Email"    },
];

const stats = [
  { value: "3+",  label: "Enterprise Projects" },
  { value: "12+", label: "Backend Technologies"},
  { value: "100%",label: "Postman Validated"   },
];

/* Animated role text that cycles */
const ROLES = [
  "Spring Boot Engineer",
  "RESTful API Architect",
  "Enterprise Security Specialist",
  "Relational DBMS & JPA Developer",
];

function TypingRole() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex]   = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayed(ROLES[0]);
      return;
    }
    const current = ROLES[index];
    let charIndex = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          clearInterval(interval);
          setTimeout(() => {
            const nextInterval = setInterval(() => {
              setDisplayed(current.slice(0, charIndex));
              charIndex--;
              if (charIndex < 0) {
                isDeleting = false;
                setIndex((prev) => (prev + 1) % ROLES.length);
                clearInterval(nextInterval);
              }
            }, 30);
          }, 2000);
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, [index, shouldReduceMotion]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 md:px-12 pt-36 pb-28 md:pt-48 md:pb-40"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Left: Content (7 cols) ───────────────────── */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Profile Avatar + Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8 backdrop-blur-md"
              data-cursor-text="Hammad"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/40 flex-shrink-0 bg-card">
                <img
                  src={profile}
                  alt="Muhammad Hammad Alamgir"
                  className="w-full h-full object-cover object-[50%_18%]"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-heading font-bold text-foreground tracking-tight">
                  Muhammad Hammad Alamgir
                </span>
                <span className="text-muted-foreground/50 text-xs">&bull;</span>
                <span className="text-xs font-mono font-semibold text-primary">
                  Java Developer
                </span>
              </div>
            </motion.div>

            {/* Name & Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-5 leading-[1.06] tracking-tight text-foreground"
            >
              Java <span className="text-gradient">Backend Engineer.</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-7 min-h-[2.5rem] text-foreground/90"
            >
              <span>I'm a </span>
              <TypingRole />
            </motion.div>

            {/* Punch line / Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal"
            >
              Engineering enterprise-grade{" "}
              <span className="text-foreground font-semibold">Java &amp; Spring Boot</span> backends, secure{" "}
              <span className="text-foreground font-semibold">RESTful APIs</span>, and robust{" "}
              <span className="text-foreground font-semibold">Spring Security &amp; JWT</span> workflows with relational database precision.
            </motion.p>

            {/* Pill Action Buttons (Unique & Non-repetitive) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <ScrollLink to="project" smooth duration={600}>
                <button
                  className="btn-solid flex items-center gap-2.5 cursor-pointer"
                  data-cursor-text="Projects"
                >
                  Explore Work
                  <FontAwesomeIcon icon={faArrowDown} className="w-3.5 h-3.5" />
                </button>
              </ScrollLink>

              <ScrollLink to="contact" smooth duration={600}>
                <button
                  className="btn-outline flex items-center gap-2 cursor-pointer"
                  data-cursor-text="Contact"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
                  Get In Touch
                </button>
              </ScrollLink>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3.5"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-text={social.label}
                  className="p-3.5 rounded-2xl bg-card border border-border shadow-soft
                             hover:bg-foreground hover:text-background hover:border-foreground
                             hover:shadow-glow transition-all duration-300 text-foreground/70"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Stats + Java IDE Console (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 hidden lg:flex flex-col gap-6"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3.5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="glass-premium rounded-3xl p-5 text-center border border-border shadow-soft hover-lift"
                  data-cursor-text={s.value}
                >
                  <div className="stat-number">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Java IDE Window */}
            <div className="relative">
              {/* Subtle ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/25 via-accent/20 to-purple-500/20 rounded-3xl opacity-35 blur-2xl pointer-events-none" />

              {/* Window chrome */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0c101c] border border-white/10 shadow-elevated">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3.5 bg-[#111728] border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-mono font-semibold">
                      Spring Boot 3.3
                    </span>
                  </div>
                  <span className="text-xs text-white/40 ml-auto font-mono">AikTijaratController.java</span>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto">
                  <pre className="text-gray-100">
                    <code>
                      <span className="text-amber-400">@RestController</span>{"\n"}
                      <span className="text-amber-400">@RequestMapping</span>(<span className="text-emerald-400">"/api/v1/auth"</span>){"\n"}
                      <span className="text-violet-400">public class</span>{" "}
                      <span className="text-cyan-300 font-bold">AuthController</span> {"{\n\n"}
                      {"  "}
                      <span className="text-amber-400">@Autowired</span>{"\n"}
                      {"  "}
                      <span className="text-violet-400">private</span> <span className="text-cyan-300">SecurityService</span> <span className="text-white">securityService</span>;{"\n\n"}
                      {"  "}
                      <span className="text-amber-400">@PostMapping</span>(<span className="text-emerald-400">"/authenticate"</span>){"\n"}
                      {"  "}
                      <span className="text-violet-400">public</span> <span className="text-cyan-300">ResponseEntity</span>&lt;<span className="text-cyan-300">AuthDTO</span>&gt; <span className="text-yellow-300">login</span>({"@RequestBody LoginRequest req"}) {"{\n"}
                      {"    "}
                      <span className="text-cyan-300">String</span> token = securityService.<span className="text-yellow-300">generateJwt</span>(req);{"\n"}
                      {"    "}
                      <span className="text-violet-400">return</span> ResponseEntity.<span className="text-yellow-300">ok</span>(<span className="text-violet-400">new</span> <span className="text-cyan-300">AuthDTO</span>(token, <span className="text-emerald-400">"SUCCESS"</span>));{"\n"}
                      {"  }\n"}
                      {"}"}
                    </code>
                  </pre>
                </div>

                {/* Terminal status line */}
                <div className="px-6 py-3.5 bg-[#080b14] border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Spring Boot &bull; HikariCP &bull; Port :8080</span>
                  </div>
                  <span className="text-white/40">JVM 21 (LTS)</span>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
          <FontAwesomeIcon icon={faArrowDown} className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
