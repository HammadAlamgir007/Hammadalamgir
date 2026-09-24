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

  // Glass state: a sentinel at the top of the page is cheaper than a scroll listener.
  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Sliding pill behind the active link.
  useLayoutEffect(() => {
    const measure = () => {
      const link = linksRef.current?.querySelector(`[data-id="${active}"]`);
      setIndicator(link ? { x: link.offsetLeft, y: link.offsetTop, w: link.offsetWidth, h: link.offsetHeight } : null);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-16 max-w-page items-center justify-between rounded-full pl-3 pr-2.5 transition-[background-color,border-color,box-shadow] duration-500 ease-out ${
          scrolled || menuOpen ? "glass-strong shadow-[var(--shadow-lg)]" : "glass shadow-[var(--shadow-sm)]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full pr-2 font-semibold tracking-tight" onClick={closeMenu}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full bg-fg text-[0.6875rem] font-bold tracking-wide text-bg"
          >
            {profile.initials}
          </span>
          <span className="hidden text-[0.9375rem] min-[400px]:inline">{profile.name}</span>
        </a>

        <ul ref={linksRef} className="relative hidden items-center rounded-full bg-fg/[0.04] p-1 md:flex">
          {indicator && (
            <li
              aria-hidden="true"
              className="absolute left-0 top-0 rounded-full bg-surface shadow-[var(--shadow-sm)] ring-1 ring-line/70 transition-[transform,width] duration-500 ease-out"
              style={{ transform: `translate(${indicator.x}px, ${indicator.y}px)`, width: indicator.w, height: indicator.h }}
            />
          )}
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative block rounded-full px-4 py-1.5 text-[0.9375rem] font-medium transition-colors duration-300 lg:px-5 ${
                  active === item.id ? "text-fg" : "text-fg-2 hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
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
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass !min-h-[40px] !px-4 text-sm"
          >
            Resume
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
          <a
            href={profile.cv}
            download
            className="btn btn-primary !hidden !min-h-[40px] !w-10 !px-0 sm:!inline-flex"
            aria-label="Download CV (PDF)"
            title="Download CV"
          >
            <Icon name="download" className="h-4 w-4" />
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

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className="glass-strong mx-auto mt-2 max-w-page rounded-3xl p-3 shadow-[var(--shadow-lg)] md:hidden"
      >
        <ul className="flex flex-col">
          {navItems.map((item, i) => (
            <li key={item.id} className="enter" style={{ "--i": i - 3 }}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={active === item.id ? "true" : undefined}
                className={`flex min-h-[48px] items-center justify-between rounded-2xl px-4 text-lg font-medium ${
                  active === item.id ? "bg-fg/[0.06] text-fg" : "text-fg-2"
                }`}
              >
                {item.label}
                <Icon name="arrowRight" className="h-4 w-4 opacity-40" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-glass" onClick={closeMenu}>
            View resume
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
          <a href={profile.cv} download className="btn btn-primary" onClick={closeMenu}>
            <Icon name="download" className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
