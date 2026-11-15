/** Section label (rule · index · name), heading and optional intro. */
export default function SectionHeader({ id, index, eyebrow, title, intro, className = "" }) {
  return (
    <header className={`mb-12 max-w-3xl md:mb-16 ${className}`}>
      <p data-reveal className="eyebrow mb-5">
        {index && <span className="font-mono tracking-normal text-muted">{index}</span>}
        {eyebrow}
      </p>
      <h2 id={id} data-reveal style={{ "--i": 1 }} className="t-h2">
        {title}
      </h2>
      {intro && (
        <p data-reveal style={{ "--i": 2 }} className="t-lead mt-5 text-fg-2">
          {intro}
        </p>
      )}
    </header>
  );
}
