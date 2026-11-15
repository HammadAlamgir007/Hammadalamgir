import Icon from "./Icon";

/**
 * Engineering deep dive: every topic open at once, as cards in a two-column
 * masonry layout (CSS columns), so nothing is hidden behind tabs.
 */
export default function CaseStudy({ topics, label }) {
  return (
    <ul aria-label={label} className="columns-1 gap-5 px-6 pb-8 pt-5 sm:px-8 md:columns-2">
      {topics.map((topic) => (
        <li key={topic.id} className="mb-5 break-inside-avoid rounded-2xl bg-bg-2/60 p-5 ring-1 ring-line sm:p-6">
          <div className="flex items-center gap-3">
            <span className="icon-tile h-10 w-10" aria-hidden="true">
              <Icon name={topic.icon} className="h-5 w-5" />
            </span>
            <div>
              <h5 className="font-display text-lg font-bold leading-snug tracking-tight">{topic.title}</h5>
              <p className="text-sm text-muted">
                {[topic.meta, `${topic.items.length} ${topic.items.length === 1 ? "item" : "items"}`].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>

          <ul className="mt-4 space-y-3">
            {topic.items.map((item) => (
              <li key={item.title}>
                <p className="text-[0.9375rem] font-semibold leading-snug text-fg">{item.title}</p>
                {item.text && <p className="mt-0.5 text-sm leading-relaxed text-fg-2">{item.text}</p>}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
