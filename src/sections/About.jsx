import { Fragment } from "react";
import SectionHeader from "../components/SectionHeader";
import Window from "../components/Window";
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
              <p key={i} data-reveal style={{ "--i": i }} className={i === 0 ? "t-lead font-medium text-fg" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* "About This Mac"-style card */}
          <Window data-reveal="scale" className="card self-start lg:col-span-5">
            <div className="px-6 pb-8 pt-4 text-center sm:px-8">
              <span aria-hidden="true" className="tile tile-blue mx-auto h-20 w-20 text-2xl font-bold tracking-tight">
                {profile.initials}
              </span>
              <p className="mt-5 text-xl font-semibold tracking-tight text-fg">{profile.fullName ?? profile.name}</p>
              <p className="mt-0.5 text-sm text-muted">{profile.role}</p>

              <dl className="mx-auto mt-7 grid max-w-sm grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-left text-sm">
                {facts.map((fact) => (
                  <Fragment key={fact.label}>
                    <dt className="text-right text-muted">{fact.label}</dt>
                    <dd className="font-medium text-fg">{fact.value}</dd>
                  </Fragment>
                ))}
              </dl>

              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="More info: view resume (PDF)"
                className="btn btn-plain mt-8 !min-h-[36px] !px-5 text-sm"
              >
                More Info…
              </a>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}
