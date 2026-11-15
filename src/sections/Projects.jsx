import CaseStudy from "../components/CaseStudy";
import { Dot, Sparkle } from "../components/Decor";
import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { projects, sections } from "../data/portfolio";

/** The live app: icon, store status, one-line pitch and a link to the listing. */
function AppPanel({ app }) {
  return (
    <div className="flex flex-col gap-4 self-start rounded-2xl bg-bg-2 p-5 ring-1 ring-line">
      <div className="flex items-center gap-3">
        <img src={app.icon} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 rounded-2xl bg-surface ring-1 ring-line" />
        <div>
          <p className="font-display font-bold leading-tight text-fg">{app.name}</p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-fg-2">
            <span className="h-1.5 w-1.5 rounded-full bg-tone-green" aria-hidden="true" />
            Live on {app.store}
          </p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-fg-2">{app.tagline}</p>
      <a href={app.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-full">
        <Icon name="play" className="h-4 w-4" />
        View on {app.store}
        <Icon name="arrowUpRight" className="h-4 w-4" />
      </a>
    </div>
  );
}

/** Four app screens; every other one sits a little lower for rhythm. */
function AppScreens({ app }) {
  return (
    <div className="relative border-t border-line bg-bg-2/60 px-6 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10">
      <Sparkle tone="amber" size={18} className="hidden sm:block" style={{ right: 28, top: 26 }} />
      <Dot tone="blue" size={6} className="hidden sm:block" style={{ right: 60, top: 52 }} />
      <h4 className="t-label mb-6 font-sans text-muted">Inside the app</h4>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-6">
        {app.screens.map((screen) => (
          <li key={screen.caption} className="sm:[&:nth-child(even)]:translate-y-6">
            <figure>
              <img
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={screen.alt}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-[13%/6%] shadow-[var(--shadow-md)] ring-1 ring-line"
              />
              <figcaption className="mt-3 text-center text-sm font-medium text-fg-2">{screen.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

const byline = (project) => [project.subtitle, project.context].filter(Boolean).join(" · ");

function TechList({ items, label = "Technologies", className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={label}>
      {items.map((tech) => (
        <li key={tech} className="chip !py-0.5 !text-xs">
          {tech}
        </li>
      ))}
    </ul>
  );
}

/** One labelled block of the case-study overview. */
function Block({ number, title, children }) {
  return (
    <div className="bg-surface p-6 sm:p-8">
      <h4 className="flex items-center gap-3 font-sans">
        <span className="font-mono text-xs text-muted">{number}</span>
        <span className="t-label text-accent-ink">{title}</span>
      </h4>
      <div className="mt-4 text-[0.9375rem] leading-relaxed text-fg-2">{children}</div>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Problem → contribution → decisions → outcome, in a 2×2 grid with hairline dividers. */
function CaseOverview({ study }) {
  return (
    <div className="grid gap-px border-t border-line bg-line md:grid-cols-2">
      <Block number="01" title="The problem">
        <p className="text-fg">{study.problem}</p>
      </Block>
      <Block number="02" title="My contribution">
        <Bullets items={study.contribution} />
      </Block>
      <Block number="03" title="Key technical decisions">
        <dl className="space-y-3">
          {study.decisions.map((d) => (
            <div key={d.title}>
              <dt className="font-semibold text-fg">{d.title}</dt>
              <dd>{d.text}</dd>
            </div>
          ))}
        </dl>
      </Block>
      <Block number="04" title="Outcome">
        <p className="text-fg">{study.outcome}</p>
      </Block>
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article data-reveal className="card overflow-hidden">
      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_17rem] lg:gap-12">
        <div>
          <p className="t-label mb-5 flex flex-wrap items-center gap-3 text-muted">
            <span className="rounded-full bg-accent-ink px-2.5 py-1 text-on-accent">Featured</span>
            {project.category}
          </p>
          <h3 className="t-h1">{project.name}</h3>
          <p className="mt-2 text-[0.9375rem] font-medium text-fg-2">{byline(project)}</p>
          <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-fg-2">{project.description}</p>
          <TechList items={project.tech} label="Stack" className="mt-6" />
        </div>
        {project.app ? <AppPanel app={project.app} /> : null}
      </div>

      {project.app && <AppScreens app={project.app} />}
      {project.caseStudy && <CaseOverview study={project.caseStudy} />}

      {project.details && (
        <div className="border-t border-line">
          <div className="flex items-baseline justify-between gap-4 px-6 pt-8 sm:px-8">
            <h4 className="t-label font-sans text-muted">Engineering deep dive</h4>
            <p className="t-meta text-muted">{project.details.length} topics</p>
          </div>
          <CaseStudy topics={project.details} label={`${project.name} engineering topics`} />
        </div>
      )}
    </article>
  );
}

function ProjectCard({ project, number }) {
  return (
    <li data-reveal style={{ "--i": number % 2 }}>
      <article className="card card-hover flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="t-label text-accent-ink">{project.category}</span>
          <span className="t-meta text-muted" aria-hidden="true">
            {String(number).padStart(2, "0")}
          </span>
        </div>
        <h3 className="t-h3 mt-6">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-muted">{byline(project)}</p>
        <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{project.description}</p>
        <TechList items={project.tech} className="mt-6" />
      </article>
    </li>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section band">
      <div className="container-page">
        <SectionHeader
          id="projects-title"
          index="04"
          eyebrow="Selected work"
          title={sections.projects.title}
          intro={sections.projects.intro}
        />

        <FeaturedProject project={featured} />

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} number={i + 2} />
          ))}
        </ul>
      </div>
    </section>
  );
}
