import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { sections, skills } from "../data/portfolio";

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

        {/* Widget grid; "dense" back-fills gaps left by the two-column cards */}
        <ul className="grid grid-flow-row-dense gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <li
              key={group.title}
              data-reveal
              style={{ "--i": i % 3 }}
              className={`card card-hover p-6 sm:p-7 ${group.size === "lg" ? "sm:col-span-2" : ""}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className={`tile tile-${group.tint} h-9 w-9`} aria-hidden="true">
                  <Icon name={group.icon} className="h-[18px] w-[18px]" />
                </span>
                <h3 className="text-[1.0625rem] font-semibold tracking-tight">{group.title}</h3>
                <span className="t-meta ml-auto text-muted" aria-label={`${group.items.length} skills`}>
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
