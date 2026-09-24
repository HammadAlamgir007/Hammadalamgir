import SectionHeader from "../components/SectionHeader";
import { sections, skills } from "../data/portfolio";

const SPAN = {
  lg: "sm:col-span-2 bg-gradient-to-br from-surface to-accent/[0.05]",
  wide: "lg:col-span-2",
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="skills-title"
          eyebrow="Technical expertise"
          title={sections.skills.title}
          intro={sections.skills.intro}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <li
              key={group.title}
              data-reveal
              style={{ "--i": i % 3 }}
              className={`card p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-[var(--shadow-lg)] sm:p-7 ${
                SPAN[group.size] ?? ""
              }`}
            >
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h3 className={`font-semibold tracking-tight ${group.size === "lg" ? "text-xl" : "text-[1.0625rem]"}`}>{group.title}</h3>
                <span className="t-meta text-muted" aria-label={`${group.items.length} skills`}>
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
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
