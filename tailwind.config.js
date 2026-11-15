/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // System font first: SF Pro on Apple devices, Inter everywhere else.
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "Segoe UI", "Roboto", "sans-serif"],
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
        "accent-2": token("accent-2"),
        "accent-3": token("accent-3"),
      },
      maxWidth: {
        page: "72rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
