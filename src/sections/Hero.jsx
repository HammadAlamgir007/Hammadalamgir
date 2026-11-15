import Button from "../components/Button";
import { Dot, Doodle, Sparkle } from "../components/Decor";
import Icon from "../components/Icon";
import { hero, profile } from "../data/portfolio";

/**
 * A few sparkles, dots and one doodle around the hero. Offsets are in px from
 * the container's edges; the gutter pieces only show at xl, where the
 * container is a fixed 72rem wide and the layout is known.
 */
function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Sparkle tone="amber" size={24} className="hidden lg:block" style={{ left: 560, top: -64 }} />
      <Sparkle tone="amber" size={20} className="right-6 top-[-56px] lg:hidden" />
      <Sparkle tone="blue" size={18} delay={1.2} className="hidden xl:block" style={{ left: 664, top: 150 }} />
      <Dot tone="green" size={8} className="hidden xl:block" style={{ left: -34, top: 210 }} />
      <Dot tone="amber" size={8} className="hidden xl:block" style={{ right: 16, bottom: 0 }} />
      <Doodle name="database" size={64} className="hidden xl:block" style={{ right: 0, top: -56 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-[min(100svh,60rem)] lg:pb-16 lg:pt-28"
    >
      <div id="scroll-sentinel" className="absolute left-0 top-0 h-4 w-px" aria-hidden="true" />
      <div className="container-page relative">
        <HeroDecor />
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 id="hero-title">
              <span className="enter eyebrow mb-7 flex" style={{ "--i": 0 }}>
                {profile.name} · {profile.role}
              </span>
              <span className="enter t-display block" style={{ "--i": 1 }}>
                {hero.title} <span className="text-accent-ink">{hero.titleAccent}</span>
              </span>
            </h1>

            <p className="enter t-lead mt-8 max-w-xl text-fg-2" style={{ "--i": 2 }}>
              {profile.headline}
            </p>

            <div className="enter mt-11 flex flex-col gap-3 sm:flex-row" style={{ "--i": 3 }}>
              <Button href="#projects">
                View my work
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
              <Button href={profile.cv} download variant="outline">
                <Icon name="download" className="h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="enter lg:col-span-5" style={{ "--i": 2 }}>
            <figure className="portrait mx-auto w-full max-w-[16rem] sm:max-w-[18rem]">
              <div className="card p-3">
                <img
                  src={profile.photo.src}
                  srcSet={profile.photo.srcSet}
                  sizes="(min-width: 640px) 264px, 232px"
                  alt={profile.photo.alt}
                  width={384}
                  height={384}
                  fetchpriority="high"
                  decoding="async"
                  className="aspect-square w-full rounded-2xl bg-bg-2 object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
