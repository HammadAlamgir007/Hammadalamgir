import { Dot, Sparkle } from "../components/Decor";
import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { education, facts, profile, sections } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="about-title"
          index="01"
          eyebrow="About me"
          title={
            <>
              {sections.about.title} <span className="text-accent-ink">{sections.about.titleAccent}</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-fg-2">
              {profile.story.map((paragraph, i) => (
                <p key={i} data-reveal style={{ "--i": i }} className={i === 0 ? "t-lead text-fg" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote data-reveal className="relative mt-12 border-l-[3px] border-accent pl-6">
              <Sparkle tone="amber" size={20} style={{ right: 0, top: -30 }} />
              <Dot tone="blue" size={6} style={{ right: 30, top: -14 }} />
              <p className="font-display text-xl font-semibold leading-snug tracking-tight text-fg sm:text-2xl">
                “{profile.belief}”
              </p>
            </blockquote>
          </div>

          <div data-reveal style={{ "--i": 1 }} className="card self-start p-6 sm:p-8 lg:col-span-5">
            <p className="t-label text-muted">At a glance</p>
            <dl className="mt-4 divide-y divide-line">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 py-3">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="text-right text-[0.9375rem] font-medium text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {education.map((item) => (
              <div key={item.degree} className="mt-5 flex items-start gap-4 rounded-2xl bg-bg-2 p-4">
                <span className="icon-tile h-10 w-10" aria-hidden="true">
                  <Icon name="graduation" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-fg">{item.degree}</p>
                  <p className="text-sm text-fg-2">{item.school}</p>
                  <p className="t-meta mt-1 text-muted">{item.notes.join(" · ")}</p>
                </div>
              </div>
            ))}

            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6 w-full">
              View full CV
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
