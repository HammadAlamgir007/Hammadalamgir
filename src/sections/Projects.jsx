import CaseStudy from "../components/CaseStudy";
import SectionHeader from "../components/SectionHeader";
import Window from "../components/Window";
import { useTilt } from "../hooks/usePointerEffects";
import { projects, sections } from "../data/portfolio";

// Each supporting project gets a distinct but restrained tint (system colours).
const TINTS = [
  ["48 176 199", "0 122 255"],
  ["175 82 222", "88 86 214"],
  ["52 199 89", "48 176 199"],
  ["255 149 0", "255 45 85"],
  ["0 122 255", "175 82 222"],
  ["88 86 214", "0 122 255"],
];

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

/** Pointer-following light used on tilting cards. */
function Sheen() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 0%), var(--sheen), transparent 60%)" }}
    />
  );
}

function FeaturedProject({ project }) {
  return (
    <Window as="article" title={`${project.name} — ${project.subtitle}`} data-reveal="scale" className="card card-hover mb-6">
      <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <div>
          <p className="t-label mb-5 flex flex-wrap items-center gap-3 text-muted">
            <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">Featured</span>
            {project.category}
          </p>
          <h3 className="t-h1">{project.name}</h3>
          <p className="mt-2 text-[0.9375rem] font-medium text-fg-2">{byline(project)}</p>
          <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-fg-2">{project.description}</p>
        </div>
        <TechList items={project.tech} label="Stack" className="lg:max-w-[16rem] lg:justify-end" />
      </div>

      {project.details && (
        <div className="border-t border-fg/[0.07]">
          <CaseStudy id={`case-${project.name.toLowerCase().replace(/\W+/g, "-")}`} topics={project.details} label={`${project.name} engineering topics`} />
        </div>
      )}
    </Window>
  );
}

function ProjectCard({ project, index }) {
  const ref = useTilt();
  const [from, to] = TINTS[index % TINTS.length];
  const initials = project.name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <li data-reveal style={{ "--i": index % 3 }}>
      <article ref={ref} className="tilt card group flex h-full flex-col overflow-hidden">
        <Sheen />
        <div
          aria-hidden="true"
          className="relative h-36 overflow-hidden border-b border-fg/[0.07]"
          style={{ background: `radial-gradient(120% 140% at 0% 0%, rgb(${from} / 0.26), transparent 60%), radial-gradient(120% 140% at 100% 100%, rgb(${to} / 0.24), transparent 60%)` }}
        >
          <span className="t-label absolute left-6 top-6 text-fg-2">{project.category}</span>
          <span
            className="tile absolute bottom-5 right-6 h-14 w-14 text-lg font-bold tracking-tight transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-105"
            style={{ "--tile": `linear-gradient(180deg, rgb(${from}), rgb(${to}))` }}
          >
            {initials}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="t-h3">{project.name}</h3>
          <p className="mt-1 text-sm font-medium text-muted">{byline(project)}</p>
          <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{project.description}</p>
          <div className="mt-6">
            <TechList items={project.tech} />
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="projects-title"
          eyebrow="Selected projects"
          title={sections.projects.title}
          intro={sections.projects.intro}
        />

        <FeaturedProject project={featured} />

        <ul className={`grid gap-6 md:grid-cols-2 ${rest.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
