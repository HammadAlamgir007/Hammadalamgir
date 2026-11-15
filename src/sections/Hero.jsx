import { useEffect, useRef } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { canUsePointerEffects } from "../hooks/usePointerEffects";
import { highlights, profile, socials } from "../data/portfolio";

function Words({ text, offset = 0, trailingSpace = false, className }) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span key={i} className="word">
      <span className={className} style={{ "--i": offset + i }}>
        {word}
      </span>
      {(trailingSpace || i < words.length - 1) && " "}
    </span>
  ));
}

/** Writes pointer position (-0.5…0.5) to CSS vars for cheap parallax. */
function useParallax() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !canUsePointerEffects()) return undefined;
    let frame = 0;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--px", (event.clientX / window.innerWidth - 0.5).toFixed(3));
        el.style.setProperty("--py", (event.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };
    el.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
    };
  }, []);
  return ref;
}

/** macOS-style Dock: profiles on the left, the CV past the divider. */
function Dock() {
  const items = [
    ...socials.map((s) => ({ ...s, external: s.href.startsWith("http") })),
    { label: "Download CV", ariaLabel: "Download CV (PDF)", href: profile.cv, icon: "file", tint: "paper", download: true },
  ];

  return (
    <ul className="glass dock" aria-label="Profiles and CV">
      {items.map((item) => (
        <li key={item.label} className={item.download ? "dock-split" : undefined}>
          <a
            href={item.href}
            className="dock-item"
            aria-label={item.ariaLabel ?? item.label}
            {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
            {...(item.download && { download: true })}
          >
            <span className={`tile tile-${item.tint} dock-tile`} aria-hidden="true">
              <Icon name={item.icon} className="h-[22px] w-[22px]" />
            </span>
            <span className="dock-label" aria-hidden="true">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  const ref = useParallax();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <div id="scroll-sentinel" className="absolute left-0 top-0 h-4 w-px" aria-hidden="true" />

      {/* Background: drifting light clouds over the page wallpaper */}
      <div aria-hidden="true" className="mist pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="mist-cloud left-[-18%] top-[-30%] h-[60rem] w-[60rem]" style={{ "--c": "var(--mist-1)" }} />
        <div className="mist-cloud right-[-22%] top-[-10%] h-[52rem] w-[52rem]" style={{ "--c": "var(--mist-2)", animationDelay: "-9s" }} />
        <div className="mist-cloud bottom-[-35%] left-[20%] h-[50rem] w-[70rem]" style={{ "--c": "var(--mist-3)", animationDelay: "-16s" }} />
        <div className="mist-glow" />
      </div>

      <div className="container-page relative text-center">
        {profile.photo && (
          <div className="enter mx-auto mb-7 w-fit" style={{ "--i": -3 }}>
            <div className="float glass depth-lg rounded-full p-1.5">
              <img
                src={profile.photo.src}
                srcSet={profile.photo.srcSet}
                sizes="(min-width: 640px) 112px, 96px"
                alt={profile.photo.alt}
                width={112}
                height={112}
                fetchpriority="high"
                decoding="async"
                className="h-24 w-24 rounded-full bg-bg-2 object-cover sm:h-28 sm:w-28"
              />
            </div>
          </div>
        )}

        <p className="enter glass mx-auto mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full px-4 py-2 text-[0.8125rem] font-medium text-fg-2" style={{ "--i": -2 }}>
          <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-accent-2" aria-hidden="true" />
          <span className="truncate">{profile.status}</span>
        </p>

        <h1 id="hero-title" className="t-display mx-auto max-w-5xl">
          <span className="sr-only">
            {profile.fullName ?? profile.name}, {profile.role}
          </span>
          <span aria-hidden="true">
            <Words text={first} trailingSpace />
            <Words text={rest.join(" ")} offset={1} className="text-gradient" />
          </span>
        </h1>

        <p className="enter t-h3 mx-auto mt-6 max-w-3xl font-medium text-fg" style={{ "--i": 1 }} aria-hidden="true">
          {profile.role}
        </p>

        <p className="enter t-lead mx-auto mt-4 max-w-2xl text-fg-2" style={{ "--i": 2 }}>
          {profile.headline}
        </p>

        <div className="enter mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ "--i": 3 }}>
          <Button href="#projects" className="w-full sm:w-auto">
            View work
            <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
          <Button href={profile.cv} target="_blank" rel="noopener noreferrer" variant="glass" className="w-full sm:w-auto">
            View resume
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </Button>
        </div>

        <div className="enter mt-9 flex justify-center" style={{ "--i": 4 }}>
          <Dock />
        </div>

        {/* Highlights — widgets that float gently and drift with the pointer */}
        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {highlights.map((h, i) => (
            <div key={h.label} className="enter" style={{ "--i": 5 + i }}>
              <div
                className="float glass flex h-full flex-col rounded-[1.375rem] px-4 py-5 text-left transition-transform duration-700 ease-out md:px-5"
                style={{
                  "--i": i,
                  transform: `translate3d(calc(var(--px, 0) * ${(i % 2 ? -1 : 1) * (10 + i * 4)}px), calc(var(--py, 0) * ${8 + i * 3}px), 0)`,
                }}
              >
                <dt className="order-2 mt-1 text-[0.8125rem] leading-snug text-muted">{h.label}</dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{h.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        className="enter absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-1 text-muted transition-colors hover:text-fg md:flex"
        style={{ "--i": 10 }}
        aria-label="Scroll to About"
      >
        <span className="t-label text-[0.625rem]">Scroll</span>
        <Icon name="chevronDown" className="h-4 w-4" />
      </a>
    </section>
  );
}
