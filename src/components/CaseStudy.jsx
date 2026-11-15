import { useRef, useState } from "react";
import Icon from "./Icon";

const KEY_STEP = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

/**
 * Engineering deep dive: a list of topics (ARIA tabs) beside a detail pane.
 * Arrow keys, Home and End move between topics; the list becomes a
 * horizontal strip on small screens.
 */
export default function CaseStudy({ id, topics, label }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef(null);
  const topic = topics[active];

  const onKeyDown = (event) => {
    let next;
    if (event.key in KEY_STEP) next = (active + KEY_STEP[event.key] + topics.length) % topics.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = topics.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabsRef.current?.querySelectorAll('[role="tab"]')[next]?.focus();
  };

  return (
    <div className="grid md:grid-cols-[15rem_1fr]">
      <div
        ref={tabsRef}
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line bg-bg-2/70 p-2.5 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-3"
      >
        {topics.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${id}-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="side-item"
          >
            <Icon name={t.icon} className="h-4 w-4 shrink-0 text-accent" />
            <span className="whitespace-nowrap">{t.label}</span>
            <span className="ml-auto hidden pl-2 font-mono text-xs text-muted md:inline" aria-hidden="true">
              {String(t.items.length).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${topic.id}`}
        tabIndex={0}
        className="min-w-0 p-5 sm:p-8"
      >
        <div key={topic.id} className="pane-in">
          <div className="flex items-center gap-3.5">
            <span className="icon-tile h-11 w-11" aria-hidden="true">
              <Icon name={topic.icon} className="h-[22px] w-[22px]" />
            </span>
            <div>
              <h5 className="t-h3">{topic.title}</h5>
              <p className="text-sm text-muted">
                {[topic.meta, `${topic.items.length} ${topic.items.length === 1 ? "item" : "items"}`].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>

          <ul className="mt-6 divide-y divide-line border-y border-line">
            {topic.items.map((item) => (
              <li key={item.title} className="py-4">
                <p className="text-[0.9375rem] font-semibold leading-snug text-fg">{item.title}</p>
                {item.text && <p className="mt-1 text-[0.9375rem] leading-relaxed text-fg-2">{item.text}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
