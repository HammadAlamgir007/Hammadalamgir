import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : true;
    }
    return true;
  });

  /* Theme persistence */
  useEffect(() => {
    const html = document.documentElement;
    isDark ? html.classList.add("dark") : html.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  /* Scroll-aware glass navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { to: "aboutMey",    label: "About"    },
    { to: "skills",      label: "Skills"   },
    { to: "project",     label: "Projects" },
    { to: "services",    label: "Services" },
    { to: "contact",     label: "Contact"  },
  ];

  const navbarClass = scrolled
    ? "bg-card/90 backdrop-blur-lg shadow-soft border-b border-border"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${navbarClass}`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

        {/* ── Brand ─────────────────────────────────────── */}
        <ScrollLink to="mainy" spy smooth offset={-80} duration={600} className="cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-1.5"
          >
            <span className="text-xl font-bold font-heading text-foreground">
              Hammad
            </span>
            <span className="text-xl font-bold text-gradient">.</span>
          </motion.div>
        </ScrollLink>

        {/* ── Desktop nav ───────────────────────────────── */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy smooth offset={-80} duration={600}
              activeClass="!text-primary"
              className="cursor-pointer text-sm font-medium text-foreground/65 hover:text-primary
                         transition-colors duration-200 link-underline"
            >
              {item.label}
            </ScrollLink>
          ))}

          {/* Theme toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-secondary/70 text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-4 h-4" />
          </motion.button>

          {/* Resume CTA */}
          <motion.a
            href="/files/Hammad-AlamgirSR.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-primary text-primary-foreground text-sm font-semibold
                       shadow-glow hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]
                       transition-all duration-300"
          >
            <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
            Resume
          </motion.a>
        </div>

        {/* ── Mobile hamburger ──────────────────────────── */}
        <motion.button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-5 h-5" />
        </motion.button>
      </nav>

      {/* ── Mobile slide-down menu ────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col items-center py-6 gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="w-full"
                >
                  <ScrollLink
                    to={item.to}
                    spy smooth offset={-80} duration={600}
                    activeClass="text-primary bg-primary/8"
                    className="block py-3 px-8 text-center text-foreground/80
                               hover:text-primary hover:bg-secondary/60 transition-all
                               font-medium rounded-lg mx-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                </motion.div>
              ))}

              <div className="flex items-center gap-4 mt-4 px-8">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center gap-2 py-2 px-4 rounded-lg
                             bg-secondary text-foreground/80 hover:text-primary
                             text-sm font-medium transition-colors"
                >
                  <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-4 h-4" />
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>

                <a
                  href="/files/Hammad_Alamgir_SoftwareEngineer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-lg
                             bg-primary text-primary-foreground text-sm font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
