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

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { to: "aboutMey",    label: "About"     },
    { to: "skills",      label: "Skills"    },
    { to: "project",     label: "Projects"  },
    { to: "practices",   label: "Practices" },
    { to: "contact",     label: "Contact"   },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-5 sm:px-7 py-2.5 sm:py-3 ${
          scrolled
            ? "bg-card/90 backdrop-blur-2xl border border-border shadow-elevated"
            : "bg-card/75 backdrop-blur-xl border border-border/80 shadow-soft"
        }`}
      >
        {/* ── Brand Logo ─────────────────── */}
        <ScrollLink to="mainy" spy smooth offset={-100} duration={600} className="cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5"
            data-cursor-text="Hammad"
          >
            {/* Orbital symbol */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary via-accent to-purple-500 flex items-center justify-center shadow-soft">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18" />
                <path d="M3 12h18" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold font-heading text-foreground tracking-tight">
                Hammad Alamgir
              </span>
              <span className="text-xs font-semibold text-primary font-mono hidden lg:inline">
                .java
              </span>
            </div>
          </motion.div>
        </ScrollLink>

        {/* ── Desktop Nav Links ──────────────────────────── */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/60 p-1 rounded-full border border-border/50">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy smooth offset={-100} duration={600}
              activeClass="!bg-card !text-primary !shadow-soft font-semibold"
              data-cursor-text={item.label}
              className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* ── Right Actions ─────────────────────────────── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            data-cursor-text="Theme"
            className="w-9 h-9 rounded-full bg-secondary border border-border text-foreground flex items-center justify-center hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-3.5 h-3.5" />
          </motion.button>

          {/* Download CV CTA */}
          <a
            href="/files/Hammad-AlamgirSR.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor-text="Download"
            className="btn-solid !py-2 !px-5 !text-xs !rounded-full flex items-center gap-1.5"
          >
            <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
            Resume
          </a>
        </div>

        {/* ── Mobile Menu Trigger ────────────────────────── */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-secondary border border-border text-foreground text-xs"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-3.5 h-3.5" />
          </button>
          <button
            className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-16 w-[92%] max-w-sm rounded-3xl bg-card/95 backdrop-blur-2xl border border-border shadow-elevated p-5 flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy smooth offset={-100} duration={600}
                activeClass="text-primary bg-primary/10 font-semibold"
                className="py-2.5 px-4 text-sm font-medium text-foreground rounded-2xl hover:bg-secondary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}

            <div className="pt-3 mt-1 border-t border-border flex items-center justify-between">
              <a
                href="/files/Hammad-AlamgirSR.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-solid !py-2.5 !px-5 !text-xs w-full text-center flex items-center justify-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
