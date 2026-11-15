export default function SectionHeader({ id, eyebrow, title, intro, className = "" }) {
  return (
    <header className={`mb-14 max-w-3xl md:mb-20 ${className}`}>
      <p data-reveal className="glass eyebrow mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} data-reveal style={{ "--i": 1 }} className="t-h2">
        {title}
      </h2>
      {intro && (
        <p data-reveal style={{ "--i": 2 }} className="t-lead mt-6 text-fg-2">
          {intro}
        </p>
      )}
    </header>
  );
}
