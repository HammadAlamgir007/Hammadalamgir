import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import useTheme from "../hooks/useTheme";
import Icon from "./Icon";

export default function Navbar() {
  const active = useActiveSection(navItems.map((item) => item.id));
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const linksRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  // Solid bar once the page scrolls: a sentinel at the top is cheaper than a scroll listener.
  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Orange underline that slides under the active link's text.
  useLayoutEffect(() => {
    const measure = () => {
      const label = linksRef.current?.querySelector(`[data-id="${active}"] span`);
      setIndicator(label ? { x: label.offsetLeft, w: label.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Mobile menu: lock scroll, focus first link, close on Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? "bg-bg/90 shadow-[0_1px_0_rgb(var(--line))] backdrop-blur-md" : ""
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 rounded-lg" onClick={closeMenu}>
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-xl bg-accent-ink font-display text-xs font-extrabold tracking-wide text-on-accent"
          >
            {profile.initials}
          </span>
          <span className="hidden font-display text-[1.0625rem] font-bold tracking-tight text-fg min-[400px]:inline">
            {profile.name}
          </span>
        </a>

        <ul ref={linksRef} className="relative hidden items-center md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={active === item.id ? "true" : undefined}
                className={`block px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200 lg:px-4 ${
                  active === item.id ? "text-fg" : "text-fg-2 hover:text-fg"
                }`}
              >
                <span>{item.label}</span>
              </a>
            </li>
          ))}
          {indicator && (
            <li
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-accent transition-[transform,width] duration-500 ease-out"
              style={{ transform: `translateX(${indicator.x}px)`, width: indicator.w }}
            />
          )}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            className="icon-btn"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Icon name={isDark ? "sun" : "moon"} className="h-[18px] w-[18px]" />
          </button>
          <a href={profile.cv} download className="btn btn-primary btn-sm hidden sm:inline-flex">
            <Icon name="download" className="h-4 w-4" />
            Download CV
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-btn md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" ref={menuRef} hidden={!menuOpen} className="container-page pb-4 md:hidden">
        <div className="card p-2">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.id} className="enter" style={{ "--i": i - 1 }}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`flex min-h-[48px] items-center justify-between rounded-2xl px-4 font-display text-lg font-semibold ${
                    active === item.id ? "bg-bg-2 text-fg" : "text-fg-2"
                  }`}
                >
                  {item.label}
                  <Icon name="arrowRight" className="h-4 w-4 text-accent" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-2 p-1">
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline" onClick={closeMenu}>
              View CV
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <a href={profile.cv} download className="btn btn-primary" onClick={closeMenu}>
              <Icon name="download" className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
