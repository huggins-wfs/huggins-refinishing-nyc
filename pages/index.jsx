import Link from "next/link";
import Layout, { Seo, Cta, Faq } from "../components/Layout";
import WoodFloor from "../components/WoodFloor";
import FloorStudio from "../components/FloorStudio";
import { business, city, services, floors, process, faqs, websiteSchema, faqSchema } from "../lib/site";

export default function Home() {
  const title = `Luxury Wood Flooring in ${city.name} | ${business.name}`;
  const description = `Wide-plank oak, herringbone, chevron and custom parquet for ${city.name} homes. Supplied, installed and finished by a Certified Wood Flooring Inspector with ${business.yearsExperience} years of experience.`;
  const quick = [
    ["What we do", "Supply, install, refinish and restore luxury wood floors"],
    ["Where", `${city.name}${city.areas.length ? `, including ${city.areas.slice(0, 4).map((a) => a.name).join(", ")}` : " and surrounding communities"}`],
    ["Floors", "Wide-plank oak, walnut, herringbone, chevron, parquet, reclaimed"],
    ["Finishes", "Zero-VOC waterborne and hardwax oil, applied with dust containment"],
    ["Experience", `${business.yearsExperience} years, led by a Certified Wood Flooring Inspector`],
    ["How to start", `Book a virtual consultation or call ${business.phoneDisplay}`],
  ];

  return (
    <Layout>
      <Seo title={title} description={description} schema={[websiteSchema(), faqSchema(faqs)]} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-bone">
        {business.images.hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={business.images.hero} alt={`Luxury wood floor in a ${city.name} home`} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        ) : (
          <WoodFloor pattern="herringbone" tone="smoked" width="wide" sheen="satin" label={`Herringbone oak floor, ${city.name}`} className="absolute inset-0 -z-10 h-full w-full" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="wrap py-24 md:py-36">
          <p className="eyebrow-light">{business.name} · {city.name}</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Luxury wood flooring in {city.name}, <em className="text-brass-light">made for your home.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
            We supply, install and finish wide-plank, herringbone and custom parquet floors for {city.homes}. One team, from first sample to final coat.
          </p>
          <div className="mt-9"><Cta /></div>
        </div>
        <ul className="wrap grid grid-cols-2 gap-px border-t border-bone/15 pb-0 text-xs text-bone/75 md:grid-cols-4">
          {business.credentials.map((c) => (
            <li key={c} className="py-5 pr-4 uppercase tracking-widest">{c}</li>
          ))}
        </ul>
      </section>

      {/* Direct answers: the block search and AI engines quote */}
      <section aria-labelledby="glance" className="border-b border-ink/10 py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">At a glance</p>
            <h2 id="glance" className="mt-4 text-4xl md:text-5xl">{city.name}&rsquo;s wood floor specialist</h2>
            <p className="mt-5 leading-relaxed text-ink/75">
              {business.name} designs, supplies and installs luxury wood flooring in {city.name}. The company also refinishes and restores existing floors and provides certified inspections for owners, architects and designers.
            </p>
          </div>
          <dl className="grid gap-px self-start bg-ink/10 sm:grid-cols-2">
            {quick.map(([k, v]) => (
              <div key={k} className="bg-bone p-6">
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2 leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Collections */}
      <section id="flooring" className="py-20 md:py-28">
        <div className="wrap">
          <p className="eyebrow">The floors</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Four ways to a remarkable floor</h2>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {floors.map((f) => (
              <Link key={f.slug} href={`/flooring/${f.slug}`} className="group block">
                <div className="overflow-hidden">
                  <WoodFloor pattern={f.pattern} tone={f.tone} width={f.width} className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 text-2xl">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.summary.split(". ")[0]}.</p>
                <span className="mt-3 inline-block border-b border-brass pb-0.5 text-sm font-semibold text-brass">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FloorStudio />

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Everything your floor needs, from one team</h2>
          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col bg-bone p-8 transition-colors hover:bg-sand md:p-10">
                <h3 className="text-3xl">{s.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/70">{s.summary.split(". ")[0]}.</p>
                <span className="mt-5 text-sm font-semibold text-brass">Learn more <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-sand py-20 md:py-28">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Five calm steps</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {process.map((p) => (
              <li key={p.n} className="border-t border-ink/25 pt-5">
                <span className="font-display text-3xl text-brass">{p.n}</span>
                <h3 className="mt-2 font-sans text-base font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Local */}
      <section id="local" className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Local knowledge</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Built for {city.name} homes</h2>
            <p className="mt-6 leading-relaxed text-ink/75">{city.climate}</p>
            <p className="mt-4 leading-relaxed text-ink/75">{city.logistics}</p>
          </div>
          {city.areas.length > 0 && (
            <div>
              <h3 className="eyebrow !font-sans">Where we work</h3>
              <ul className="mt-5 grid grid-cols-2 gap-px bg-ink/10">
                {city.areas.map((a) => (
                  <li key={a.slug} className="bg-bone">
                    {a.note ? (
                      <Link href={`/areas/${a.slug}`} className="flex min-h-[56px] items-center justify-between px-5 font-display text-xl hover:bg-sand">{a.name}<span aria-hidden className="text-brass">→</span></Link>
                    ) : (
                      <span className="flex min-h-[56px] items-center px-5 font-display text-xl">{a.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {city.testimonials.length > 0 && (
        <section className="bg-espresso py-20 text-bone md:py-28">
          <div className="wrap">
            <p className="eyebrow-light">Clients</p>
            <div className="mt-8 grid gap-12 md:grid-cols-2">
              {city.testimonials.map((t) => (
                <figure key={t.source}>
                  <blockquote className="font-display text-3xl italic leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 text-xs uppercase tracking-luxe text-brass-light">{t.source}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq items={faqs} heading={`Wood flooring in ${city.name}, answered`} />
      <Closing />
    </Layout>
  );
}

export function Closing() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <div className="wrap flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">Begin with a conversation</h2>
          <p className="mt-3 max-w-xl text-ink/75">A relaxed virtual consultation about your space, your goals and your timeline. No obligation.</p>
        </div>
        <Cta light />
      </div>
    </section>
  );
}
