import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AnimatedBackground from "../components/AnimatedBackground";
import { ParallaxBackground } from "../components/ParallaxEffects";

const socialLinks = [
  { icon: faGithub, href: 'https://github.com/ihammadalamgir', label: 'GitHub' },
  { icon: faLinkedin, href: 'https://linkedin.com/in/ihammadalamgir', label: 'LinkedIn' },
  { icon: faEnvelope, href: '#contact', label: 'Email' },
];

const Home = () => {
  return (
    <section
      id="mainy"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-20"
    >
      {/* Animated Background - Only in Dark Mode */}
      <div className="hidden dark:block">
        <AnimatedBackground />
      </div>

      {/* Background Glow Effects with Parallax */}
      <ParallaxBackground speed={-0.3}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/10 dark:bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-accent/10 dark:bg-purple-600/10 rounded-full blur-[120px]" />
        </div>
      </ParallaxBackground>

      <div className="container max-w-6xl mx-auto relative z-10 pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Available for new projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2 leading-tight text-foreground"
            >
              Muhammad Hammad Alamgir
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient mb-6"
            >
              Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Specializing in{' '}
              <span className="text-primary font-medium">React</span>,{' '}
              <span className="text-primary font-medium">.NET</span>,{' '}
              <span className="text-primary font-medium">Node.js</span> &{' '}
              <span className="text-primary font-medium">Flutter</span>{' '}
              — Building web applications, database-driven systems, and REST APIs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <ScrollLink to="project" smooth={true} duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-glow flex items-center gap-2 cursor-pointer"
                >
                  View Projects
                  <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
                </motion.button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-all cursor-pointer"
                >
                  Contact Me
                </motion.button>
              </ScrollLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-3 rounded-full bg-card border border-border shadow-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-xl" />

              {/* Code window */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-elevated">
                {/* Window header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 ml-auto font-mono">Portfolio.tsx</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  <pre className="text-gray-100 leading-relaxed">
                    <code>
                      <span className="text-primary">const</span>{' '}
                      <span className="text-cyan-400">Developer</span>{' '}
                      <span className="text-gray-400">=</span>{' '}
                      <span className="text-gray-400">{'{'}</span>
                      {'\n'}
                      {'  '}<span className="text-primary">name:</span>{' '}
                      <span className="text-emerald-400">"Muhammad Hammad Alamgir"</span>,
                      {'\n'}
                      {'  '}<span className="text-primary">specialization:</span>{' '}
                      <span className="text-emerald-400">"Software Engineer"</span>,
                      {'\n'}
                      {'  '}<span className="text-primary">focus:</span>{' '}
                      <span className="text-gray-400">[</span>
                      {'\n'}
                      {'    '}<span className="text-emerald-400">"React & .NET"</span>,
                      {'\n'} 
                      {'    '}<span className="text-emerald-400">"Database-Driven Systems"</span>,
                      {'\n'}
                      {'    '}<span className="text-emerald-400">"REST API Development"</span>,
                      {'\n'}
                      {'  '}<span className="text-gray-400">],</span>
                      {'\n'}
                      {'  '}<span className="text-primary">passion:</span>{' '}
                      <span className="text-emerald-400">"Clean Code & Continuous Learning"</span>
                      {'\n'}
                      <span className="text-gray-400">{'}'};</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
