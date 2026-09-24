import SectionHeader from "../components/SectionHeader";
import { facts, profile, sections } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="about-title"
          eyebrow="About"
          title={
            <>
              {sections.about.title} <span className="text-gradient">{sections.about.titleAccent}</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 text-[1.0625rem] leading-relaxed text-fg-2 lg:col-span-7">
            {profile.summary.map((paragraph, i) => (
              <p key={i} data-reveal style={{ "--i": i }}>
                {paragraph}
              </p>
            ))}
          </div>

          <dl data-reveal="scale" className="card grid grid-cols-2 self-start overflow-hidden lg:col-span-5">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`p-5 sm:p-6 ${i % 2 === 0 ? "border-r border-line/70" : ""} ${
                  i < facts.length - 2 ? "border-b border-line/70" : ""
                }`}
              >
                <dt className="t-label mb-2 text-[0.6875rem] text-muted">{fact.label}</dt>
                <dd className="text-[0.9375rem] font-medium leading-snug text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
