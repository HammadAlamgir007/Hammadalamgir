import { Dot, Sparkle } from "../components/Decor";
import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { fintech } from "../data/portfolio";

/** Mini-colour icon tiles (decorative; the text next to them carries the meaning). */
const TILE = {
  blue: "bg-tone-blue/10 text-tone-blue",
  green: "bg-tone-green/10 text-tone-green",
  amber: "bg-spark/20 text-tone-amber",
  orange: "bg-accent/10 text-accent",
  red: "bg-tone-red/10 text-tone-red",
};

function PaymentFlow() {
  return (
    <div data-reveal className="card relative p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="t-label font-sans text-muted">{fintech.flowTitle}</h3>
        <p className="t-meta text-muted">{fintech.flowNote}</p>
      </div>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
        {fintech.flow.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl bg-bg-2 p-4 lg:bg-transparent lg:p-0">
            <div className="flex items-center gap-3 lg:flex-col lg:items-start">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${TILE[step.tone]}`} aria-hidden="true">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
              <p className="font-display text-[0.9375rem] font-bold leading-snug text-fg">
                <span className="mr-1.5 font-mono text-xs font-normal text-muted">{String(i + 1).padStart(2, "0")}</span>
                {step.title}
              </p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-fg-2">{step.text}</p>

            {/* Arrow to the next step on wide screens */}
            {i < fintech.flow.length - 1 && (
              <Icon name="arrowRight" className="absolute -right-[1.15rem] top-3 hidden h-3.5 w-3.5 text-accent lg:block" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Fintech() {
  return (
    <section id="fintech" aria-labelledby="fintech-title" className="section band">
      <div className="container-page relative">
        <Sparkle tone="blue" size={18} delay={0.8} className="hidden md:block" style={{ right: 24, top: -40 }} />
        <Dot tone="amber" size={8} className="hidden md:block" style={{ right: 72, top: 10 }} />

        <SectionHeader
          id="fintech-title"
          index="02"
          eyebrow="Fintech & payments"
          title={
            <>
              {fintech.title} <span className="text-accent-ink">{fintech.titleAccent}</span>
            </>
          }
          intro={fintech.intro}
        />

        <PaymentFlow />

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fintech.areas.map((area, i) => (
            <li key={area.title} data-reveal style={{ "--i": i % 3 }} className="card card-hover flex flex-col p-6">
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${TILE[area.tone]}`} aria-hidden="true">
                <Icon name={area.icon} className="h-[22px] w-[22px]" />
              </span>
              <h3 className="t-h3 mt-5">{area.title}</h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{area.text}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${area.title} keywords`}>
                {area.tags.map((tag) => (
                  <li key={tag} className="chip !py-0.5 !text-xs">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
