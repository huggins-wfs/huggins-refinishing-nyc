# Huggins Wood Floor Specialist — luxury wood flooring site (multi-city)

One codebase, one site per city. Change the city name and every headline,
page title, description, structured-data block, sitemap, `robots.txt` and
`llms.txt` updates to match.

## Launch a city

1. Open `site.config.js` and set `ACTIVE_CITY`:
   - a profile key from `data/cities.js`, e.g. `"the-hamptons"`, or
   - any plain name for a new city, e.g. `"Austin, TX"`.
2. In `data/cities.js`, set that city's `url` to its real domain.
3. Deploy (`npm run build`).

Running several city sites from this one repo (for example on Vercel)? Leave
the file alone and set the `SITE_CITY` environment variable per deployment.

## Make each city rank

A site that differs only by city name is treated as duplicate content. Each
profile in `data/cities.js` has slots for real local detail. Fill them in:

| Field | What to write |
| --- | --- |
| `homes` | The kinds of homes you work in there |
| `climate` | How local weather and heating affect wood |
| `logistics` | Building rules, access, scheduling |
| `areas[].note` | 2–3 true sentences per neighbourhood. Areas with a note get their own page; areas without one are listed but get no page |
| `localFaqs` | Questions only that city's clients ask |
| `testimonials` | Real client quotes from that city |

## Where things live

- `site.config.js` — business name, phone, booking link, credentials, optional photos
- `data/cities.js` — city profiles
- `data/content.js` — all service, flooring, process and FAQ copy
- `components/WoodFloor.jsx` — draws the floors (no photos needed)
- `components/FloorStudio.jsx` — the interactive floor designer and material estimator
- `scripts/generate-seo.js` — writes `robots.txt`, `sitemap.xml`, `llms.txt` before every build

## Run locally

```bash
npm install
npm run dev
```
