import Head from "next/head";
import Link from "next/link";
import { business, city, services, floors, areaPages, abs, businessSchema } from "../lib/site";

const NAV = [
  ["Flooring", "/#flooring"],
  ["Floor Studio", "/#studio"],
  ["Services", "/#services"],
  ["Process", "/#process"],
  ["FAQ", "/#faq"],
];

export function Seo({ title, description, path = "/", schema = [] }) {
  const url = abs(path);
  const og = business.images.og ? abs(business.images.og) : null;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="theme-color" content="#14110E" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />
      {og && <meta property="og:image" content={og} />}
      <meta name="twitter:card" content={og ? "summary_large_image" : "summary"} />
      {[businessSchema(), ...schema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }} />
      ))}
    </Head>
  );
}

export function Cta({ light = false }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={business.bookingUrl} className={light ? "btn-ink" : "btn-brass"}>Book a virtual consultation</a>
      <a href={`tel:${business.phone}`} className={light ? "btn-ghost" : "btn-ghost-light"}>Call {business.phoneDisplay}</a>
    </div>
  );
}

export function Faq({ items, heading = "Questions, answered" }) {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{heading}</h2>
        </div>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {items.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-6 py-5">
                <h3 className="font-sans text-base font-semibold">{f.q}</h3>
                <span aria-hidden className="text-2xl font-light text-brass transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-bone/60">
      <Link href="/" className="hover:text-bone">Home</Link>
      {trail.map(([name]) => (
        <span key={name}> <span aria-hidden>/</span> <span className="text-bone/90">{name}</span></span>
      ))}
    </nav>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-bone focus:px-4 focus:py-2">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-bone/10 bg-ink/95 text-bone backdrop-blur">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-xl tracking-wide">{business.name}</span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-luxe text-brass-light">{city.name}</span>
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {NAV.map(([n, h]) => (
              <Link key={n} href={h} className="text-sm text-bone/80 hover:text-bone">{n}</Link>
            ))}
            <a href={`tel:${business.phone}`} className="text-sm font-semibold tabular-nums">{business.phoneDisplay}</a>
            <a href={business.bookingUrl} className="btn-brass !min-h-[40px] !px-5 !py-2">Book</a>
          </nav>
          <details className="group relative lg:hidden">
            <summary aria-label="Menu" className="flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-1.5">
              <span className="h-px w-6 bg-bone" /><span className="h-px w-6 bg-bone" /><span className="h-px w-6 bg-bone" />
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 top-14 w-64 border border-bone/15 bg-ink p-2 shadow-2xl">
              {NAV.map(([n, h]) => (
                <Link key={n} href={h} className="block px-4 py-3 text-sm hover:bg-bone/10">{n}</Link>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="bg-ink pb-28 pt-16 text-bone/75 lg:pb-16">
        <div className="wrap grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-bone">{business.name}</p>
            <p className="mt-3 text-sm">Luxury wood flooring in {city.name}{city.state ? `, ${city.state}` : ""}. Supplied, installed and finished by one team.</p>
            <p className="mt-4 text-sm">
              <a href={`tel:${business.phone}`} className="font-semibold text-bone">{business.phoneDisplay}</a>
              {business.email && <><br /><a href={`mailto:${business.email}`}>{business.email}</a></>}
            </p>
          </div>
          <FooterList title="Flooring" items={floors.map((f) => [f.name, `/flooring/${f.slug}`])} />
          <FooterList title="Services" items={services.map((s) => [s.nav, `/services/${s.slug}`])} />
          <div>
            <p className="eyebrow-light">Areas served</p>
            <ul className="mt-4 space-y-2 text-sm">
              {city.areas.map((a) => (
                <li key={a.slug}>{a.note ? <Link href={`/areas/${a.slug}`} className="hover:text-bone">{a.name}</Link> : a.name}</li>
              ))}
              {!city.areas.length && <li>{city.name} and surrounding communities</li>}
            </ul>
          </div>
        </div>
        <div className="wrap mt-12 border-t border-bone/10 pt-6 text-xs text-bone/50">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </footer>

      {/* Thumb-reach actions on phones */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-bone/15 bg-ink lg:hidden">
        <a href={`tel:${business.phone}`} className="flex min-h-[56px] items-center justify-center text-sm font-semibold text-bone">Call</a>
        <a href={business.bookingUrl} className="flex min-h-[56px] items-center justify-center bg-brass-light text-sm font-semibold text-ink">Book consultation</a>
      </div>
    </>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <p className="eyebrow-light">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map(([n, h]) => (
          <li key={h}><Link href={h} className="hover:text-bone">{n}</Link></li>
        ))}
      </ul>
    </div>
  );
}
