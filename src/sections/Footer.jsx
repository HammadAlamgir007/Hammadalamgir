import Icon from "../components/Icon";
import { profile, socials } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="container-page flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted sm:flex-row">
      {/* The build year can differ from the visitor's year after New Year — don't treat that as a hydration error. */}
      <p suppressHydrationWarning>
        © {new Date().getFullYear()} {profile.fullName ?? profile.name} · {profile.shortRole}
      </p>
      <div className="flex items-center gap-1">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="icon-btn"
            aria-label={s.label}
            {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon name={s.icon} className="h-4 w-4" />
          </a>
        ))}
        <a href="#top" className="icon-btn" aria-label="Back to top">
          <Icon name="arrowUp" className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
