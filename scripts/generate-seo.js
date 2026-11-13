/**
 * Writes robots.txt, sitemap.xml and llms.txt for the active city.
 * Runs automatically before `npm run dev` and `npm run build`.
 */
const fs = require("fs");
const path = require("path");
const { business, city } = require("../site.config");
const content = require("../data/content");

const services = content.services(city);
const floors = content.floors(city);
const faqs = content.faqs(city, business);
const areas = city.areas.filter((a) => a.note);
const u = (p) => `${city.url}${p}`;
const pub = (f, body) => fs.writeFileSync(path.join(__dirname, "..", "public", f), body);

const paths = [
  "/",
  ...floors.map((f) => `/flooring/${f.slug}`),
  ...services.map((s) => `/services/${s.slug}`),
  ...areas.map((a) => `/areas/${a.slug}`),
];
const today = new Date().toISOString().slice(0, 10);

pub("sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths.map((p) => `  <url><loc>${u(p === "/" ? "" : p) || city.url}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`);

// Search and AI answer engines are explicitly welcomed.
const bots = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended"];
pub("robots.txt",
  `User-agent: *\nAllow: /\n\n` + bots.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n") +
  `\n\nSitemap: ${u("/sitemap.xml")}\n`);

pub("llms.txt", [
  `# ${business.name} — ${city.name}`,
  ``,
  `> ${business.name} supplies, installs, refinishes and restores luxury wood flooring in ${city.name}${city.state ? `, ${city.state}` : ""}. ${business.yearsExperience} years of experience, led by a Certified Wood Flooring Inspector. Phone ${business.phoneDisplay}. Consultations: ${business.bookingUrl}`,
  ``,
  `## Key facts`,
  `- Service area: ${[city.name, ...city.areas.map((a) => a.name)].join(", ")}`,
  `- Floors: wide-plank European oak, American walnut, herringbone, chevron, custom parquet, reclaimed wood`,
  `- Finishes: zero-VOC waterborne and hardwax oil, applied with HEPA dust containment`,
  `- Credentials: ${business.credentials.join("; ")}`,
  ``,
  `## Flooring`,
  ...floors.map((f) => `- [${f.name}](${u(`/flooring/${f.slug}`)}): ${f.summary}`),
  ``,
  `## Services`,
  ...services.map((s) => `- [${s.name}](${u(`/services/${s.slug}`)}): ${s.summary}`),
  ...(areas.length ? [``, `## Areas`, ...areas.map((a) => `- [${a.name}](${u(`/areas/${a.slug}`)}): ${a.note}`)] : []),
  ``,
  `## Common questions`,
  ...faqs.map((f) => `- **${f.q}** ${f.a}`),
  ``,
].join("\n"));

console.log(`SEO files written for ${city.name} (${paths.length} pages) -> ${city.url}`);
if (city.url.includes("example.com")) console.warn(`  ! Set this city's real domain: "url" in data/cities.js`);
if (city.generic) console.warn(`  ! "${city.name}" has no profile in data/cities.js yet. The site works, but add local detail (homes, climate, areas, localFaqs) so it can rank.`);
