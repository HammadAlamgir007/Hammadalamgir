import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import SectionHeader from "../components/SectionHeader";
import { experience, sections } from "../data/portfolio";

const VISIBLE_POINTS = 3;

/** Fills the timeline rail as the list scrolls past; only listens while on screen. */
function useTimelineProgress() {
  const listRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill || !("IntersectionObserver" in window)) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const progress = (window.innerHeight * 0.55 - rect.top) / rect.height;
      fill.style.transform = `scaleY(${Math.min(Math.max(progress, 0), 1)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    });
    observer.observe(list);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { listRef, fillRef };
}

function Role({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const isCurrent = job.end === "Present";
  const hidden = job.points.length - VISIBLE_POINTS;
  const points = expanded ? job.points : job.points.slice(0, VISIBLE_POINTS);
  const listId = `role-${index}-points`;

  return (
    <li className="relative grid gap-3 pl-8 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0">
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className={`absolute left-[3px] top-2 h-[11px] w-[11px] rounded-full border-2 md:left-[calc(11rem+1.25rem-5px)] ${
          isCurrent ? "border-accent bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.18)]" : "border-fg/20 bg-bg"
        }`}
      />

      <div data-reveal="left" className="md:pt-0.5 md:text-right">
        <p className="t-meta text-fg-2">
          <time>{job.start}</time>
          {job.end && (
            <>
              {" — "}
              <time>{job.end}</time>
            </>
          )}
        </p>
        {isCurrent && (
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-2/10 px-2.5 py-0.5 text-xs font-semibold text-accent-2">
            Current
          </p>
        )}
      </div>

      <article data-reveal className="card card-hover p-6 sm:p-8 md:ml-10">
        <header>
          <h3 className="t-h3">{job.role}</h3>
          <p className="mt-1.5 text-[0.9375rem] font-medium text-fg-2">
            {job.company}
            {job.client && <span className="text-muted"> · {job.client}</span>}
          </p>
          {job.location && <p className="t-meta mt-1 text-muted">{job.location}</p>}
        </header>

        <ul id={listId} className="mt-5 space-y-3 text-[0.9375rem] leading-relaxed text-fg-2">
          {points.map((point) => (
            <li key={point} className="relative pl-5">
              <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-accent/70" />
              {point}
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={listId}
            className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 rounded-full text-sm font-semibold text-accent hover:underline"
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
            <Icon name="chevronDown" className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {job.tags.map((tag) => (
            <li key={tag} className="chip !py-0.5 !text-xs">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function Experience() {
  const { listRef, fillRef } = useTimelineProgress();

  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="experience-title"
          eyebrow="Experience"
          title={sections.experience.title}
          intro={sections.experience.intro}
        />

        <div className="relative">
          {/* Rail + scroll-driven fill */}
          <div aria-hidden="true" className="absolute bottom-2 left-2 top-2 w-px bg-fg/10 md:left-[calc(11rem+1.25rem)]">
            <div ref={fillRef} className="h-full w-full origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-3" />
          </div>

          <ol ref={listRef} className="space-y-10 md:space-y-14">
            {experience.map((job, i) => (
              <Role key={`${job.company}-${job.start}`} job={job} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
