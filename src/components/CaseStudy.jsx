import { useRef, useState } from "react";
import Icon from "./Icon";

const KEY_STEP = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

/**
 * System Settings–style split view: a sidebar of topics (ARIA tabs) and a
 * detail pane. Arrow keys, Home and End move between topics; the sidebar
 * becomes a horizontal strip on small screens.
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
    <div className="grid md:grid-cols-[15.5rem_1fr]">
      <div
        ref={tabsRef}
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-fg/[0.07] bg-fg/[0.025] p-2.5 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-3"
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
            <span className={`tile tile-${t.tint} h-7 w-7`} aria-hidden="true">
              <Icon name={t.icon} className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap">{t.label}</span>
            <span className="ml-auto hidden pl-2 text-xs tabular-nums opacity-70 md:inline" aria-hidden="true">
              {t.items.length}
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
            <span className={`tile tile-${topic.tint} h-11 w-11`} aria-hidden="true">
              <Icon name={topic.icon} className="h-[22px] w-[22px]" />
            </span>
            <div>
              <h4 className="t-h3">{topic.title}</h4>
              <p className="text-sm text-muted">
                {[topic.meta, `${topic.items.length} ${topic.items.length === 1 ? "item" : "items"}`].filter(Boolean).join(" · ")}
              </p>
            </div>
          </div>

          <ul className="panel settings-group mt-6 rounded-2xl">
            {topic.items.map((item) => (
              <li key={item.title} className="px-4 py-3.5 sm:px-5">
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
