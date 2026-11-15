import Icon from "../components/Icon";
import { profile, socials } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="container-page pb-6">
      <div className="glass flex flex-col items-center justify-between gap-3 rounded-3xl px-5 py-4 text-sm text-muted sm:flex-row sm:rounded-full sm:py-2 sm:pl-6 sm:pr-2">
        <p>
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
      </div>
    </footer>
  );
}
