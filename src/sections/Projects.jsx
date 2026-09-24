import SectionHeader from "../components/SectionHeader";
import { useTilt } from "../hooks/usePointerEffects";
import { projects, sections } from "../data/portfolio";

// Each supporting project gets a distinct but restrained cover tint.
const TINTS = [
  ["98 66 240", "59 108 246"],
  ["22 150 110", "59 108 246"],
  ["59 108 246", "98 66 240"],
  ["190 88 220", "98 66 240"],
  ["22 150 110", "98 66 240"],
  ["59 108 246", "22 150 110"],
];

const byline = (project) => [project.subtitle, project.context].filter(Boolean).join(" · ");

function TechList({ items, label = "Technologies" }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((tech) => (
        <li key={tech} className="chip !py-0.5 !text-xs">
          {tech}
        </li>
      ))}
    </ul>
  );
}

/** Pointer-following sheen used on tilting cards. */
function Sheen() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 0%), rgb(var(--accent) / 0.08), transparent 60%)" }}
    />
  );
}

function FeaturedProject({ project }) {
  const ref = useTilt();
  return (
    <div data-reveal="scale" className="mb-6">
      <article ref={ref} className="tilt card group overflow-hidden">
        <Sheen />
        <div className="grid lg:grid-cols-2">
          <div className="relative p-7 sm:p-10">
            <p className="t-label mb-6 flex flex-wrap items-center gap-3 text-muted">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">Featured</span>
              {project.category}
            </p>
            <h3 className="t-h1">{project.name}</h3>
            <p className="mt-2 text-[0.9375rem] font-medium text-fg-2">{byline(project)}</p>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">{project.description}</p>

            <h4 className="t-label mb-3 mt-8 text-muted">Delivered</h4>
            <ul className="grid gap-2 text-[0.9375rem] text-fg-2 sm:grid-cols-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <TechList items={project.tech} />
            </div>
          </div>

          {/* Architecture visual: the feature pipeline described in the CV */}
          <div className="relative flex items-center justify-center overflow-hidden border-t border-line/70 bg-gradient-to-br from-accent/[0.07] via-transparent to-accent-2/[0.08] p-7 sm:p-10 lg:border-l lg:border-t-0">
            <figure className="w-full max-w-sm">
              <figcaption className="t-label mb-5 text-center text-muted">{project.architectureCaption}</figcaption>
              <ol className="relative space-y-2.5">
                {project.architecture.map((layer, i) => (
                  <li
                    key={layer}
                    className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3.5 shadow-[var(--shadow-sm)] transition-transform duration-500 ease-out group-hover:translate-x-[var(--shift)]"
                    style={{ "--shift": `${(i - 2) * 4}px` }}
                  >
                    <span className="font-mono text-sm text-fg">{layer}</span>
                    <span className="t-meta text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 grid grid-cols-2 gap-2.5 text-center">
                {project.platforms.map((platform) => (
                  <div key={platform} className="rounded-2xl border border-dashed border-line px-4 py-3 text-sm font-semibold text-fg-2">
                    {platform}
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </article>
    </div>
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
          className="relative h-36 overflow-hidden border-b border-line/60"
          style={{ background: `radial-gradient(120% 140% at 0% 0%, rgb(${from} / 0.22), transparent 55%), radial-gradient(120% 140% at 100% 100%, rgb(${to} / 0.2), transparent 55%)` }}
        >
          <span className="absolute -bottom-6 right-4 select-none text-[6.5rem] font-bold leading-none tracking-tighter text-fg/[0.06] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-105">
            {initials}
          </span>
          <span className="t-label absolute left-6 top-6 text-fg-2">{project.category}</span>
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
    <section id="projects" aria-labelledby="projects-title" className="section bg-bg-2/60">
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
