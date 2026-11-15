import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { coreStack, sections, skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="skills-title"
          index="05"
          eyebrow="Technical profile"
          title={sections.skills.title}
          intro={sections.skills.intro}
        />

        <div data-reveal className="card p-6 sm:p-8">
          <h3 className="t-label font-sans text-muted">Core stack</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {coreStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded-full bg-bg-2 px-4 py-2 font-display text-[0.9375rem] font-semibold text-fg ring-1 ring-inset ring-line"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <li key={group.title} data-reveal style={{ "--i": i % 3 }} className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="icon-tile h-9 w-9" aria-hidden="true">
                  <Icon name={group.icon} className="h-[18px] w-[18px]" />
                </span>
                <h3 className="text-base font-bold tracking-tight">{group.title}</h3>
                <span className="t-meta ml-auto text-muted" aria-label={`${group.items.length} skills`}>
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
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
