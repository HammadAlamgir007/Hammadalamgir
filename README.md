# Hammad Alamgir — Portfolio

Personal portfolio of **Muhammad Hammad Alamgir**, Java Backend Developer.

Built with React 18 (Create React App) and Tailwind CSS. There's no animation or icon library: motion uses CSS, IntersectionObserver and `requestAnimationFrame`, and the icons are inline SVGs.

The design is warm and minimal, with three colours in a fixed order: white (`#FFFFFF`) for the page, cream (`#F5EFE5`) for section bands and inner surfaces, and burnt orange (`#D96B35`) for accents only — with the darker `#A3481F` for orange text and buttons so they meet WCAG AA. Type is charcoal (`#292621`). Headings use Plus Jakarta Sans and body text uses Inter. A warm dark theme follows the visitor's system setting or the toggle in the navbar. Motion is limited to a quiet fade-and-rise on scroll and respects reduced-motion settings.

## Updating content

All content comes from one file, **`src/data/portfolio.js`**: profile and story, experience, core stack and skills, projects (including the Aik Tijarat case study), education, "Beyond the code" and links. It mirrors the CV in `public/files/`, plus case-study details taken from the Aik Tijarat commit history. When the CV changes, replace the PDF and update that file. No component holds personal data.

SEO metadata and JSON-LD live in `public/index.html`.

## Structure

```
src/
  data/portfolio.js      single source of truth for content
  sections/              Hero, About, Experience, Projects, Skills, Beyond, Contact, Footer
  components/            Navbar, Button, Icon, SectionHeader, CaseStudy
  hooks/                 useReveal, useActiveSection, useTheme
  index.css              design tokens (light/dark), type scale, surfaces, motion
api/contact.js           contact-form endpoint (Vercel function, also used by server.js locally)
server.js                local dev API on :3034 (CRA proxies /api to it)
```

## Scripts

```bash
npm start          # dev server
npm run server     # local contact API (needs .env, see .env.example)
npm test           # tests
npm run lint       # ESLint, zero warnings allowed
npm run build      # production build
```

## SEO

- **Prerendered HTML.** `npm run build` runs `react-scripts build` and then `scripts/prerender.mjs`, which renders the app with `react-dom/server` into `build/index.html`. Crawlers and link previews get the full page without JavaScript; the browser hydrates it (`src/index.js`). Code that touches `window`/`document` must do so in effects, not during render, or the prerender fails.
- **Site address.** The canonical URL in `public/index.html` is the single source of truth; the prerender reads it to write `build/sitemap.xml`. If the domain changes (for example to an is-a.dev subdomain), update every `https://hammadalamgir-wec3.vercel.app` in `public/index.html` and `public/robots.txt`.
- **Structured data.** `public/index.html` holds JSON-LD for a `ProfilePage` about a `Person`; `dateModified` is stamped at build time.
- **Share previews.** `og:image` / `twitter:image` use absolute URLs to `public/og-image.png` (1200×630).
- **404s.** `public/404.html` is the not-found page, but Vercel's "Create React App" framework preset still answers unknown URLs with the home page (status 200). The canonical link points those back to the home page, so search engines don't index duplicates. For real 404s, set the Vercel project's Framework Preset to "Other" (build command `npm run build`, output directory `build`).

## Deployment

Hosted on Vercel from the GitHub repository [HammadAlamgir007/Hammadalamgir](https://github.com/HammadAlamgir007/Hammadalamgir). Every pushed branch gets a preview URL; `main` deploys to production. `vercel.json` routes `/api/*` to the serverless contact function and everything else to the app.

## Contact form

Set `EMAIL_USER`, `EMAIL_APP_PASSWORD` (a Gmail app password) and optionally `EMAIL_TO` in the hosting environment (see `.env.example`). If delivery isn't configured, the form offers a pre-filled `mailto:` link instead.
