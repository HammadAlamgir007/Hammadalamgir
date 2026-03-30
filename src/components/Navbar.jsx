import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return true; // Default to dark
    }
    return true;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  const navItems = [
    { to: "aboutMey", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "project", label: "Projects" },
    { to: "services", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-soft border-b border-border transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Name */}
        <ScrollLink
          to="mainy"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          className="cursor-pointer"
        >
          <h2 className="text-xl font-bold text-primary font-heading">
            Portfolio
          </h2>
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="cursor-pointer text-foreground/70 hover:text-primary transition font-medium text-sm"
            >
              {item.label}
            </ScrollLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition"
            aria-label="Toggle Theme"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-4 h-4" />
          </button>

          {/* Resume Button */}
          <a
            href="/files/Hammad_Alamgir_SoftwareEngineer.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition shadow-glow"
          >
            <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-5 h-5" />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-card shadow-md flex flex-col items-center py-4 md:hidden border-b border-border">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="py-3 w-full text-center text-foreground hover:text-primary transition font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="py-3 w-full text-center text-foreground hover:text-primary transition font-medium flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-4 h-4" />
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Mobile Resume Button */}
            <a
              href="/files/Hammad_Alamgir_SoftwareEngineer.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
