/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Inter for body copy, Plus Jakarta Sans for headings — the same on every device.
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      colors: {
        bg: token("bg"),
        "bg-2": token("bg-2"),
        surface: token("surface"),
        fg: token("fg"),
        "fg-2": token("fg-2"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        "on-accent": token("on-accent"),
        "tone-blue": token("tone-blue"),
        "tone-green": token("tone-green"),
        "tone-amber": token("tone-amber"),
        "tone-red": token("tone-red"),
        spark: token("spark"),
        blob: token("blob"),
      },
      maxWidth: {
        page: "72rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
