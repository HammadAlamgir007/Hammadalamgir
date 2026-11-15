import Button from "../components/Button";
import { Dot, Doodle, Sparkle } from "../components/Decor";
import Icon from "../components/Icon";
import { hero, highlights, profile, socials } from "../data/portfolio";

/** Dividers for the 2-column (mobile) and 4-column (desktop) proof strip. */
const STAT_CELL =
  "flex flex-col border-line p-5 sm:p-6 [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0 lg:[&:not(:first-child)]:border-l";

/** Each stat number gets its own mini colour. */
const STAT_TONE = {
  blue: "text-tone-blue",
  orange: "text-accent-ink",
  green: "text-tone-green",
  amber: "text-tone-amber",
};

/**
 * Sparkles, dots and doodles around the hero. Offsets are in px from the
 * container's edges; the doodles and gutter pieces only show at xl, where
 * the container is a fixed 72rem wide and the layout is known.
 */
function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Sparkle tone="amber" size={24} className="hidden lg:block" style={{ left: 560, top: -56 }} />
      <Sparkle tone="amber" size={20} className="right-6 top-[-56px] lg:hidden" />
      <Dot tone="blue" size={7} className="left-6 top-[-36px] lg:hidden" />
      <Sparkle tone="blue" size={18} delay={1.2} className="hidden xl:block" style={{ left: 664, top: 130 }} />
      <Sparkle tone="red" size={16} delay={0.6} className="hidden xl:block" style={{ right: -40, top: 300 }} />
      <Dot tone="green" size={8} className="hidden xl:block" style={{ left: -34, top: 190 }} />
      <Dot tone="amber" size={8} className="hidden xl:block" style={{ right: 40, top: 560 }} />
      <Dot tone="blue" size={6} className="hidden xl:block" style={{ left: 700, top: 612 }} />
      <Doodle name="database" size={68} className="hidden xl:block" style={{ right: 4, top: -44 }} />
      <Doodle name="mug" size={60} className="hidden xl:block" style={{ left: 676, top: 430 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-4 pt-32 sm:pt-36 lg:pb-6 lg:pt-40">
      <div id="scroll-sentinel" className="absolute left-0 top-0 h-4 w-px" aria-hidden="true" />
      <div className="container-page relative">
        <HeroDecor />
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 id="hero-title">
              <span className="enter eyebrow mb-6 flex" style={{ "--i": 0 }}>
                {profile.name} · {profile.role}
              </span>
              <span className="enter t-display block" style={{ "--i": 1 }}>
                {hero.title} <span className="text-accent-ink">{hero.titleAccent}</span>
              </span>
            </h1>

            <p className="enter t-lead mt-7 max-w-2xl text-fg-2" style={{ "--i": 2 }}>
              {profile.headline}
            </p>

            <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--i": 3 }}>
              <Button href="#projects">
                View my work
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
              <Button href={profile.cv} download variant="outline">
                <Icon name="download" className="h-4 w-4" />
                Download CV
              </Button>
            </div>

            <ul className="enter mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-2" style={{ "--i": 4 }}>
              <li className="inline-flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-accent" />
                {profile.location}
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex min-h-[32px] items-center gap-2 font-medium transition-colors hover:text-fg"
                    {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="enter lg:col-span-5" style={{ "--i": 2 }}>
            <figure className="portrait mx-auto w-full max-w-[19rem] sm:max-w-[20rem]">
              <div className="card p-3">
                <img
                  src={profile.photo.src}
                  srcSet={profile.photo.srcSet}
                  sizes="(min-width: 640px) 296px, 280px"
                  alt={profile.photo.alt}
                  width={384}
                  height={384}
                  fetchpriority="high"
                  decoding="async"
                  className="aspect-square w-full rounded-2xl bg-bg-2 object-cover"
                />
                <figcaption className="flex items-start gap-3 px-2 pb-1.5 pt-4">
                  <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-snug text-fg-2">{profile.status}</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        <dl className="enter card mt-16 grid grid-cols-2 overflow-hidden lg:mt-20 lg:grid-cols-4" style={{ "--i": 5 }}>
          {highlights.map((h) => (
            <div key={h.label} className={STAT_CELL}>
              <dt className="order-2 mt-1 text-sm leading-snug text-muted">{h.label}</dt>
              <dd className={`order-1 font-display text-2xl font-extrabold tracking-tight sm:text-3xl ${STAT_TONE[h.tone] ?? "text-fg"}`}>
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
