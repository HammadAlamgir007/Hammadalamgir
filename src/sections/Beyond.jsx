import { Dot, Doodle, Sparkle } from "../components/Decor";
import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { beyond } from "../data/portfolio";

/** Doodles on a peach circle — fills the right side until interests are listed. */
function DoodleCluster() {
  return (
    <div aria-hidden="true" className="relative hidden h-64 lg:col-span-4 lg:block">
      <span className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blob" />
      <Doodle name="terminal" size={112} style={{ left: "50%", top: "50%", translate: "-62% -58%" }} />
      <Doodle name="braces" size={64} style={{ right: "6%", bottom: "4%" }} />
      <Sparkle tone="amber" size={22} style={{ left: "12%", top: "8%" }} />
      <Sparkle tone="blue" size={16} delay={1} style={{ right: "14%", top: "14%" }} />
      <Dot tone="green" size={8} style={{ left: "6%", bottom: "20%" }} />
      <Dot tone="red" size={6} style={{ right: "34%", bottom: "2%" }} />
    </div>
  );
}

/** The human side: a short note plus interest cards (if any are listed). */
export default function Beyond() {
  const { title, intro, interests } = beyond;
  const hasInterests = interests.length > 0;

  return (
    <section id="beyond" aria-labelledby="beyond-title" className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={hasInterests ? "lg:col-span-5" : "lg:col-span-8"}>
          <SectionHeader id="beyond-title" index="06" eyebrow="Beyond the code" title={title} intro={intro} className="!mb-0" />
        </div>

        {hasInterests ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {interests.map((item, i) => (
              <li key={item.title} data-reveal style={{ "--i": i }} className="card p-6">
                <span className="icon-tile h-10 w-10" aria-hidden="true">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="t-h3 mt-5">{item.title}</h3>
                {item.text && <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-2">{item.text}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <DoodleCluster />
        )}
      </div>
    </section>
  );
}
