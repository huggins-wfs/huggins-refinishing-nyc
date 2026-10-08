// Landing Page: Eco‑Friendly Wood Floor Refinishing (New York City)
// Huggins Wood Floor Specialist — single‑file React component
// Notes: TailwindCSS styling, clean layout, strong CTAs, vcita booking link, SEO schema.

import React from "react";

export default function RefinishingNYCPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Meta & SEO (for frameworks that render <head/>) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Huggins Wood Floor Specialist',
            telephone: '+1-908-232-6600',
            url: 'https://www.gogreenwoodfloors.com/book-a-virtual-consultation',
            sameAs: [
              'https://www.luxurywoodnyc.com/',
              'https://newyorkcitywoodfloors.com/',
              'https://www.gogreenwoodfloors.com/'
            ],
            areaServed: ['New York City','Brooklyn','Queens','The Hamptons','Northern NJ','CT'],
            image: 'https://newyorkcitywoodfloors.com/og-image.jpg',
            description: 'Eco-friendly, dustless wood floor refinishing for luxury homes with zero-VOC options.'
          })
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-emerald-600" />
            <span className="text-sm font-medium tracking-wide text-neutral-600">Huggins Wood Floor Specialist</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#process" className="text-sm text-neutral-700 hover:text-neutral-900">Process</a>
            <a href="#work" className="text-sm text-neutral-700 hover:text-neutral-900">Projects</a>
            <a href="#faq" className="text-sm text-neutral-700 hover:text-neutral-900">FAQ</a>
            <a
              href="https://www.gogreenwoodfloors.com/book-a-virtual-consultation"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Book a Consultation
            </a>
          </div>
          <a href="tel:+19082326600" className="md:hidden rounded-full bg-neutral-900 px-3 py-2 text-xs font-semibold text-white">Call 908‑232‑6600</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Breathe Easy. <span className="text-emerald-700">Dustless</span>, Eco‑Friendly
              Wood Floor Refinishing in New York City
            </h1>
            <p className="mt-4 max-w-prose text-neutral-600">
              Luxury homes deserve finishes that are healthier for your family and immaculate for your interiors.
              Our certified craftsmen deliver museum‑grade surface prep, zero‑VOC options, and a concierge‑level experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.gogreenwoodfloors.com/book-a-virtual-consultation"
                className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Book a Virtual Consultation
              </a>
              <a
                href="#process"
                className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                See Our Process
              </a>
              <div className="text-xs text-neutral-500">or call <a href="tel:+19082326600" className="underline">908‑232‑6600</a></div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-500">
              <span className="rounded-full border px-3 py-1">Certified Wood Flooring Inspector</span>
              <span className="rounded-full border px-3 py-1">Zero‑VOC Finishes</span>
              <span className="rounded-full border px-3 py-1">Dust Containment</span>
              <span className="rounded-full border px-3 py-1">30+ Years Experience</span>
            </div>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-sm">
            {/* Placeholder image block */}
            <div className="flex h-full w-full items-center justify-center text-neutral-400">Project photography</div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            'NBC Feature',
            'AIA & ASID CEU Instructor',
            'Worked in 432 Park Ave',
            'Trusted by Top Architects'
          ].map((item) => (
            <div key={item} className="rounded-xl border bg-white p-4 text-center text-xs text-neutral-600">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Our 5‑Step Dustless Refinishing Process</h2>
          <p className="mt-3 text-neutral-600">Tailored systems for radiant heat, concrete subfloors, and high‑traffic luxury residences.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
          {[
            { n: '01', t: 'Evaluation & Moisture Readings', d: 'Certified inspection, species ID, and baseline RH/MC readings.' },
            { n: '02', t: 'Protection & Containment', d: 'Zip walls, HEPA dust containment, and surface masking for art & millwork.' },
            { n: '03', t: 'Precision Sanding', d: 'Flatness correction, edge detailing, and stair nosing refinishing.' },
            { n: '04', t: 'Color & Finish', d: 'Custom tints and zero‑VOC finishes matched to your design intent.' },
            { n: '05', t: 'Cure & Care', d: 'Walk‑through, maintenance plan, and optional white‑glove furniture reset.' }
          ].map(step => (
            <div key={step.n} className="rounded-2xl border p-5">
              <div className="text-xs font-mono text-neutral-400">{step.n}</div>
              <div className="mt-1 font-semibold">{step.t}</div>
              <div className="mt-2 text-sm text-neutral-600">{step.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight banner */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Zero‑VOC. Low Odor. Family‑Safe.</h3>
              <p className="mt-2 max-w-2xl text-sm opacity-90">We were among the first in the U.S. to adopt zero‑VOC systems—ideal for families, pets, and allergy‑sensitive environments.</p>
            </div>
            <a
              href="https://www.gogreenwoodfloors.com/book-a-virtual-consultation"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-neutral-50"
            >
              Check Dates & Times
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio snapshots */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Recent Projects</h2>
        <p className="mt-2 text-neutral-600">A selection of refinishing work from Manhattan penthouses to historic brownstones.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-neutral-100" />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Kind Words from Clients</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                q: 'The team protected our art, finished early, and the air smelled clean—no lingering odors.',
                a: 'Tribeca Penthouse'
              },
              {
                q: 'Their inspector‑level knowledge solved a moisture issue others missed. Flawless finish.',
                a: 'Upper East Side Townhouse'
              },
              {
                q: 'White‑glove experience from start to finish. We booked our next project immediately.',
                a: 'Greenwich, CT Residence'
              }
            ].map((t, idx) => (
              <figure key={idx} className="rounded-2xl border bg-white p-6">
                <blockquote className="text-sm text-neutral-700">“{t.q}”</blockquote>
                <figcaption className="mt-4 text-xs text-neutral-500">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
        <div className="mt-6 space-y-4">
          <details className="group rounded-2xl border p-5">
            <summary className="cursor-pointer list-none font-semibold">Do zero‑VOC finishes actually last?</summary>
            <p className="mt-2 text-sm text-neutral-600">Yes. Modern waterborne, zero‑VOC systems deliver superb durability with proper prep and cure. We specify by traffic level and sheen to match performance goals.</p>
          </details>
          <details className="group rounded-2xl border p-5">
            <summary className="cursor-pointer list-none font-semibold">Will there be dust or odor?</summary>
            <p className="mt-2 text-sm text-neutral-600">We use HEPA containment and low‑odor products. Odor is minimal and typically dissipates within hours depending on ventilation.</p>
          </details>
          <details className="group rounded-2xl border p-5">
            <summary className="cursor-pointer list-none font-semibold">Can you match our existing floors?</summary>
            <p className="mt-2 text-sm text-neutral-600">We create on‑site color samples for approval and explain tolerances up front—exact matches cannot be guaranteed, but our tints are renowned for seamless transitions.</p>
          </details>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border p-8 text-center md:p-12">
          <h3 className="text-xl font-semibold">Ready to Refine Your Floors?</h3>
          <p className="mt-2 text-sm text-neutral-600">Schedule a zero‑pressure virtual consultation. We’ll review your space, goals, and timeline.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.gogreenwoodfloors.com/book-a-virtual-consultation"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Book Now
            </a>
            <a href="tel:+19082326600" className="rounded-xl border px-5 py-3 text-sm font-semibold">Call 908‑232‑6600</a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Huggins Wood Floor Specialist · Eco‑friendly Wood Floor Refinishing</p>
          <nav className="flex items-center gap-4 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
            <a href="https://www.luxurywoodnyc.com/book-a-virtual-consultation" className="hover:text-neutral-800">Luxury Wood NYC</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
