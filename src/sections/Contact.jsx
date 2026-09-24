import { useState } from "react";
import Icon from "../components/Icon";
import { useMagnetic } from "../hooks/usePointerEffects";
import { profile, sections, socials } from "../data/portfolio";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const MAX_MESSAGE = 1000;

function mailtoFor(form) {
  const subject = form.subject || `Portfolio contact from ${form.name || "a visitor"}`;
  const body = `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <button type="button" onClick={copy} className="icon-btn shrink-0" aria-label={copied ? "Email copied" : "Copy email address"}>
      <Icon name={copied ? "check" : "copy"} className="h-[18px] w-[18px]" />
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const submitRef = useMagnetic();

  const update = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) throw new Error(data.error || "Request failed");
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-2 block text-sm font-medium text-fg-2">
        {label}
      </label>
      <input id={`contact-${name}`} name={name} value={form[name]} onChange={update} className="field" {...props} />
    </div>
  );

  return (
    <form onSubmit={submit} data-reveal style={{ "--i": 1 }} className="glass-strong space-y-5 rounded-3xl p-6 shadow-[var(--shadow-lg)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name", { autoComplete: "name", required: true })}
        {field("email", "Email", { type: "email", autoComplete: "email", required: true })}
      </div>
      {field("subject", "Subject", { placeholder: "Role, project or collaboration" })}
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <label htmlFor="contact-message" className="text-sm font-medium text-fg-2">
            Message
          </label>
          <span className="t-meta text-muted" aria-hidden="true">
            {form.message.length}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={MAX_MESSAGE}
          required
          value={form.message}
          onChange={update}
          className="field resize-y"
        />
      </div>

      <button ref={submitRef} type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
        <Icon name="send" className="h-4 w-4" />
      </button>

      <div aria-live="polite" className="text-center text-sm">
        {status === "sent" && <p className="font-medium text-accent-2">Thanks — your message was sent.</p>}
        {status === "error" && (
          <p className="text-fg-2">
            The form couldn't be delivered right now.{" "}
            <a href={mailtoFor(form)} className="font-semibold text-accent underline underline-offset-4">
              Send it from your email app instead
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  const rows = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}`, extra: <CopyEmail /> },
    ...socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => ({ icon: s.icon, label: s.label, value: s.handle, href: s.href, external: true })),
    { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: "pin", label: "Location", value: [profile.location, profile.relocation].filter(Boolean).join(" · ") },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section relative overflow-hidden bg-bg-2/60">
      <div aria-hidden="true" className="ambient -right-40 top-10 h-[30rem] w-[30rem] bg-accent/15" />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p data-reveal className="t-label mb-5 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" data-reveal style={{ "--i": 1 }} className="t-h1">
            Let's build something <span className="text-gradient">meaningful.</span>
          </h2>
          <p data-reveal style={{ "--i": 2 }} className="t-lead mt-6 max-w-lg text-fg-2">
            {sections.contact.intro}
          </p>

          <ul data-reveal style={{ "--i": 3 }} className="mt-10 divide-y divide-line/70 border-y border-line/70">
            {rows.map((row) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface text-fg-2 shadow-[var(--shadow-sm)] transition-colors group-hover:text-accent" aria-hidden="true">
                    <Icon name={row.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="t-label block text-[0.6875rem] text-muted">{row.label}</span>
                    <span className="mt-1 block truncate font-medium text-fg">{row.value}</span>
                  </span>
                </>
              );
              return (
                <li key={row.label} className="flex items-center gap-2 py-4">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="group flex min-w-0 flex-1 items-center gap-4 rounded-xl"
                      {...(row.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {content}
                      {row.external && <Icon name="arrowUpRight" className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                    </a>
                  ) : (
                    <div className="flex min-w-0 flex-1 items-center gap-4">{content}</div>
                  )}
                  {row.extra}
                </li>
              );
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
