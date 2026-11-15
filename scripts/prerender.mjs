/**
 * Build-time prerender (runs after `react-scripts build`).
 *
 * Renders <App /> with react-dom/server and writes the HTML into
 * build/index.html, so search engines and link previews (LinkedIn, WhatsApp,
 * Slack, Bing…) get the whole page without running JavaScript. In the browser,
 * src/index.js hydrates this markup instead of rendering from scratch.
 *
 * Image imports resolve to the exact hashed URLs webpack emitted (read from
 * build/asset-manifest.json), so server and client markup match. CSS imports
 * are ignored — the built stylesheet is already linked in index.html.
 *
 * Also writes build/sitemap.xml, using the canonical URL in public/index.html
 * as the single source of truth for the site address.
 */
import { build } from "esbuild";
import { readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const indexPath = path.join(buildDir, "index.html");
const manifest = JSON.parse(await readFile(path.join(buildDir, "asset-manifest.json"), "utf8")).files;

/** Map `import x from "./photo.webp"` to the built URL; drop CSS imports. */
const craAssets = {
  name: "cra-assets",
  setup(b) {
    b.onResolve({ filter: /\.(webp|png|jpe?g|gif|svg|avif)$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path),
      namespace: "cra-asset",
    }));
    b.onLoad({ filter: /.*/, namespace: "cra-asset" }, (args) => {
      const { base } = path.parse(args.path);
      const url = manifest[`static/media/${base}`];
      if (!url) throw new Error(`prerender: no built file for ${base} in asset-manifest.json`);
      return { contents: `export default ${JSON.stringify(url)};`, loader: "js" };
    });
    b.onResolve({ filter: /\.css$/ }, (args) => ({ path: args.path, namespace: "cra-css" }));
    b.onLoad({ filter: /.*/, namespace: "cra-css" }, () => ({ contents: "", loader: "js" }));
  },
};

// 1. Bundle the app for Node and render it to a string.
const bundlePath = path.join(buildDir, ".prerender.cjs");
await build({
  stdin: {
    contents: `import { renderToString } from "react-dom/server";
import App from "./src/App";
export const render = () => renderToString(<App />);`,
    resolveDir: root,
    sourcefile: "prerender-entry.jsx",
    loader: "jsx",
  },
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  loader: { ".js": "jsx" },
  define: { "process.env.NODE_ENV": '"production"' },
  plugins: [craAssets],
  outfile: bundlePath,
  logLevel: "warning",
});

let appHtml;
try {
  appHtml = createRequire(import.meta.url)(bundlePath).render();
} finally {
  await rm(bundlePath, { force: true }); // never deploy the server bundle
}

// 2. Inject it into the built page and stamp the structured data with the build date.
const today = new Date().toISOString().slice(0, 10);
const html = await readFile(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in build/index.html`);
await writeFile(
  indexPath,
  html.replace(marker, `<div id="root">${appHtml}</div>`).replace(/"dateModified":\s*"[^"]*"/, `"dateModified":"${today}"`)
);

// 3. Sitemap from the canonical URL.
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
if (!canonical) throw new Error("prerender: no <link rel=\"canonical\"> in public/index.html");
await writeFile(
  path.join(buildDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${canonical}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`
);

console.log(`Prerendered build/index.html (${(appHtml.length / 1024).toFixed(1)} KB of HTML) and wrote build/sitemap.xml for ${canonical}`);
