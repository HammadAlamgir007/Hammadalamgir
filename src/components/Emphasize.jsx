// Matches CV metrics such as "~25%", "10M+", "500,000+", "99%+" or "70%+".
const METRIC = /(~?\d[\d,.]*[MK]?(?:%\+?|\+))/g;

/** Renders text with measurable results highlighted. */
export default function Emphasize({ children }) {
  const parts = String(children).split(METRIC);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-fg">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
