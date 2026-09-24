# Hammad Alamgir — Portfolio

Personal portfolio of **Muhammad Hammad Alamgir**, Java Backend Developer.

Built with React 18 (Create React App) and Tailwind CSS. There's no animation or icon library: motion uses CSS, IntersectionObserver and `requestAnimationFrame`, and the icons are inline SVGs.

## Updating content

All content comes from one file, **`src/data/portfolio.js`**: profile, experience, skills, projects, achievements, education and links. It mirrors the CV in `public/files/`. When the CV changes, replace the PDF and update that file. No component holds personal data.

SEO metadata and JSON-LD live in `public/index.html`.

## Structure

```
src/
  data/portfolio.js      single source of truth for content
  sections/              Hero, About, Experience, Skills, Projects, Impact, Education, Contact, Footer
  components/            Navbar, ParticleField, Button, Icon, SectionHeader, Emphasize
  hooks/                 useReveal, useActiveSection, usePointerEffects (magnetic/tilt), useTheme
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

## Contact form

Set `EMAIL_USER`, `EMAIL_APP_PASSWORD` (a Gmail app password) and optionally `EMAIL_TO` in the hosting environment (see `.env.example`). If delivery isn't configured, the form offers a pre-filled `mailto:` link instead.
