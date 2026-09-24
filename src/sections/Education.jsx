import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section !pt-0">
      <div className="container-page">
        <SectionHeader id="education-title" eyebrow="Education" title="Computer Science foundations." />

        {education.map((item) => (
          <article key={item.degree} data-reveal className="card flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:p-10">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent" aria-hidden="true">
              <Icon name="graduation" className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <h3 className="t-h3">{item.degree}</h3>
                {item.start && (
                  <p className="t-meta text-fg-2">
                    <time>{item.start}</time> — <time>{item.end}</time>
                  </p>
                )}
              </div>
              <p className="mt-1 font-medium text-fg-2">{item.school}</p>
              <p className="t-meta mt-1 text-muted">{item.location}</p>
              <ul className="mt-5 space-y-1.5 text-[0.9375rem] text-fg-2">
                {item.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
