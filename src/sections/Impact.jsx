import Emphasize from "../components/Emphasize";
import SectionHeader from "../components/SectionHeader";
import { achievements } from "../data/portfolio";

export default function Impact() {
  if (achievements.length === 0) return null;

  return (
    <section id="impact" aria-labelledby="impact-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="impact-title"
          eyebrow="Engineering impact"
          title="Performance, delivery speed and security — measured."
        />

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-line/70 bg-line/70 sm:grid-cols-2 lg:grid-cols-6">
          {achievements.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              style={{ "--i": i }}
              className={`group relative bg-surface p-7 sm:p-8 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${
                i === achievements.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <p className="text-5xl font-semibold tracking-tight transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-6xl">
                <span className="text-gradient">{item.metric}</span>
              </p>
              <h3 className="t-h3 mt-6">{item.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-2">
                <Emphasize>{item.text}</Emphasize>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
