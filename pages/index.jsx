// Homepage — luxurywoodnyc.com
// Huggins Wood Floor Specialist. Editorial, image-led layout: full-bleed hero, quiet typography,
// warm neutral palette, generous whitespace.

import { useEffect, useState } from "react";
import Head from "next/head";
import Photo from "../components/Photo";

const BOOK_URL = "https://www.luxurywoodnyc.com/book-a-virtual-consultation";
const PHONE = "908-232-6600";
const PHONE_HREF = "tel:+19082326600";

const nav = [
  { label: "Floors", href: "#floors" },
  { label: "Craft", href: "#craft" },
  { label: "Projects", href: "#projects" },
  { label: "Professionals", href: "#professionals" },
  { label: "Studio", href: "#contact" },
];

const services = [
  { title: "Refinishing", text: "Dustless sanding and zero-VOC finishes that return original floors to their best.", src: "/images/service-refinishing.jpg", tone: "oak" },
  { title: "Custom Installation", text: "Wide-plank, herringbone and chevron floors laid by hand to the millimetre.", src: "/images/service-installation.jpg", tone: "white" },
  { title: "Restoration", text: "Board-by-board repair for pre-war and landmark homes, matched to the original.", src: "/images/service-restoration.jpg", tone: "walnut" },
  { title: "Stairs & Details", text: "Treads, nosings, borders and inlays finished with the same care as the room.", src: "/images/service-stairs.jpg", tone: "smoked" },
];

const method = [
  { n: "01", t: "Evaluation", d: "Certified inspection, species identification and baseline moisture readings." },
  { n: "02", t: "Protection", d: "HEPA dust containment and masking for art, stone and millwork." },
  { n: "03", t: "Precision sanding", d: "Flatness correction, edge detailing and stair nosings." },
  { n: "04", t: "Colour & finish", d: "On-site samples and custom tints in zero-VOC systems." },
  { n: "05", t: "Cure & care", d: "Final walk-through and a maintenance plan for the years ahead." },
];

const projects = [
  { place: "432 Park Avenue", kind: "Residence · Refinishing", src: "/images/project-park-avenue.jpg", tone: "ash" },
  { place: "Tribeca", kind: "Penthouse · Custom tint", src: "/images/project-tribeca.jpg", tone: "smoked" },
  { place: "Upper East Side", kind: "Townhouse · Restoration", src: "/images/project-ues.jpg", tone: "walnut" },
  { place: "The Hamptons", kind: "Residence · Installation", src: "/images/project-hamptons.jpg", tone: "white" },
  { place: "Greenwich, CT", kind: "Residence · Refinishing", src: "/images/project-greenwich.jpg", tone: "oak" },
];

const credentials = [
  "Certified Wood Flooring Inspector",
  "AIA & ASID CEU Instructor",
  "Featured on NBC",
  "Zero-VOC pioneers",
];

const quotes = [
  { q: "They protected our art, finished early, and the air smelled clean. No lingering odour at all.", a: "Tribeca Penthouse" },
  { q: "Their inspector-level knowledge solved a moisture issue others had missed. The finish is flawless.", a: "Upper East Side Townhouse" },
  { q: "A white-glove experience from start to finish. We booked our next project immediately.", a: "Greenwich, CT Residence" },
];

const areas = ["Manhattan", "Brooklyn", "Queens", "The Hamptons", "Northern New Jersey", "Connecticut"];

function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 24 12" className={`h-3 w-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M0 6h23M17 1l6 5-6 5" />
    </svg>
  );
}

function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !solid && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light ? "bg-transparent text-white" : "bg-bone/95 text-char backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-2xl tracking-wide">
          Huggins
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="label opacity-90 hover:opacity-60">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a href={PHONE_HREF} className="label hidden md:inline">
            {PHONE}
          </a>
          <a
            href={BOOK_URL}
            className={`label hidden border px-5 py-3 transition-colors sm:inline ${
              light ? "border-white/70 hover:bg-white hover:text-char" : "border-char hover:bg-char hover:text-bone"
            }`}
          >
            Book a consultation
          </a>
          <button className="label lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-char/10 bg-bone px-6 pb-8 pt-4 lg:hidden">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-char/10 py-4 font-serif text-3xl"
            >
              {n.label}
            </a>
          ))}
          <a href={BOOK_URL} className="label mt-6 inline-block bg-char px-5 py-3 text-bone">
            Book a consultation
          </a>
        </nav>
      )}
    </header>
  );
}

function SectionHead({ label, title, children }) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <p className="label text-stone md:col-span-3">{label}</p>
      <div className="md:col-span-9">
        <h2 className="max-w-3xl font-serif text-4xl font-light leading-[1.05] md:text-6xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-linen px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <p className="label text-stone">In their words</p>
        <figure className="mt-10 min-h-[220px] md:min-h-[260px]">
          <blockquote key={i} className="animate-[fade_0.8s_ease] font-serif text-3xl font-light leading-snug md:text-5xl">
            “{quotes[i].q}”
          </blockquote>
          <figcaption className="label mt-10 text-stone">{quotes[i].a}</figcaption>
        </figure>
        <div className="mt-6 flex justify-center gap-3">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-px w-10 transition-colors ${idx === i ? "bg-char" : "bg-char/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>Huggins | Luxury Wood Floors, New York City</title>
        <meta
          name="description"
          content="Huggins Wood Floor Specialist: dustless, zero-VOC refinishing, custom installation and restoration of fine wood floors in New York City, the Hamptons, New Jersey and Connecticut."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.luxurywoodnyc.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Huggins Wood Floor Specialist",
              telephone: "+1-908-232-6600",
              url: "https://www.luxurywoodnyc.com/",
              sameAs: ["https://newyorkcitywoodfloors.com/", "https://www.gogreenwoodfloors.com/"],
              areaServed: areas,
              description:
                "Dustless, zero-VOC wood floor refinishing, custom installation and restoration for luxury homes.",
            }),
          }}
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <Photo src="/images/hero.jpg" alt="Wide-plank oak floor in a sunlit Manhattan residence" tone="smoked" className="h-[100svh] min-h-[640px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-14 text-white md:px-10 md:pb-20">
            <p className="label opacity-80">Luxury wood floors · New York City</p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl font-light leading-[0.98] md:text-8xl">
              Floors made to outlast us.
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a href="#floors" className="link-line">
                Explore our work <Arrow />
              </a>
              <a href={BOOK_URL} className="link-line">
                Book a virtual consultation <Arrow />
              </a>
            </div>
          </div>
        </Photo>

        {/* Statement */}
        <section className="px-6 py-28 md:px-10 md:py-44">
          <div className="mx-auto max-w-5xl text-center">
            <p className="label text-stone">Three decades of craft</p>
            <p className="mt-10 font-serif text-3xl font-light leading-snug md:text-[3.25rem] md:leading-[1.15]">
              A floor is not a surface. It is the quiet foundation of a home, the thing you touch every day. We refinish,
              restore and install wood floors for New York’s most considered interiors, healthier for the people who
              live on them and built to be handed down.
            </p>
            <a href="#craft" className="link-line mt-12 text-char">
              Our approach <Arrow />
            </a>
          </div>
        </section>

        {/* Services as collection tiles */}
        <section id="floors" className="px-6 pb-28 md:px-10 md:pb-40">
          <div className="mx-auto max-w-[1600px]">
            <SectionHead label="What we do" title="Every floor, considered from the grain up." />
            <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <a key={s.title} href={BOOK_URL} className="group block">
                  <div className="overflow-hidden">
                    <Photo
                      src={s.src}
                      alt={s.title}
                      tone={s.tone}
                      className="aspect-[3/4] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between border-t border-char/15 pt-4">
                    <h3 className="font-serif text-2xl">{s.title}</h3>
                    <Arrow className="text-stone transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone">{s.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Craft / method split */}
        <section id="craft" className="bg-char text-bone">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
            <Photo src="/images/craft.jpg" alt="Craftsman hand-finishing an oak board" tone="walnut" className="min-h-[60vh] lg:min-h-full" />
            <div className="px-6 py-24 md:px-16 md:py-32">
              <p className="label text-oak-light">The Huggins method</p>
              <h2 className="mt-6 max-w-lg font-serif text-4xl font-light leading-[1.05] md:text-6xl">
                Dustless. Zero-VOC. Unhurried.
              </h2>
              <p className="mt-8 max-w-lg leading-relaxed text-bone/70">
                We were among the first in the U.S. to adopt zero-VOC finishing systems, ideal for families, pets and
                allergy-sensitive homes. Each project follows the same five steps, tailored for radiant heat, concrete
                subfloors and high-traffic residences.
              </p>
              <ol className="mt-12 max-w-lg">
                {method.map((m) => (
                  <li key={m.n} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-bone/15 py-5">
                    <span className="label pt-1 text-oak-light">{m.n}</span>
                    <div>
                      <p className="font-serif text-xl">{m.t}</p>
                      <p className="mt-1 text-sm text-bone/60">{m.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Projects carousel */}
        <section id="projects" className="py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <SectionHead label="Selected projects" title="From Park Avenue towers to Brooklyn brownstones." />
          </div>
          <div className="no-scrollbar mt-16 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 md:scroll-px-10 md:px-10">
            {projects.map((p) => (
              <figure key={p.place} className="w-[80vw] shrink-0 snap-start sm:w-[55vw] lg:w-[38vw]">
                <Photo src={p.src} alt={`${p.place} project`} tone={p.tone} className="aspect-[4/5]" />
                <figcaption className="mt-5 flex items-baseline justify-between">
                  <span className="font-serif text-2xl">{p.place}</span>
                  <span className="label text-stone">{p.kind}</span>
                </figcaption>
              </figure>
            ))}
            <div className="w-px shrink-0" />
          </div>
        </section>

        {/* Credentials */}
        <section className="border-y border-char/10 px-6 md:px-10">
          <ul className="mx-auto grid max-w-[1600px] grid-cols-2 lg:grid-cols-4">
            {credentials.map((c, idx) => (
              <li
                key={c}
                className={`label py-10 text-center text-stone ${idx % 2 ? "border-l" : ""} ${
                  idx > 1 ? "border-t lg:border-t-0" : ""
                } border-char/10 lg:border-l lg:first:border-l-0`}
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        <Testimonials />

        {/* Professionals */}
        <section id="professionals" className="px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="label text-stone">For architects & designers</p>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] md:text-6xl">A partner on the specification.</h2>
              <p className="mt-8 max-w-md leading-relaxed text-stone">
                As a certified wood flooring inspector and AIA & ASID continuing-education instructor, we work alongside
                design teams from first sample to final coat: species and grade selection, moisture planning, custom
                colour development and site supervision.
              </p>
              <a href={BOOK_URL} className="link-line mt-10">
                Start a project conversation <Arrow />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:col-span-6 lg:col-start-7">
              <Photo src="/images/samples.jpg" alt="Custom finish samples" tone="ash" className="aspect-[3/4]" />
              <Photo src="/images/detail.jpg" alt="Herringbone floor detail" tone="oak" className="mt-16 aspect-[3/4]" />
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <Photo src="/images/cta.jpg" alt="Living room with refinished walnut floors" tone="walnut" className="min-h-[80vh]">
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 text-center text-white">
            <p className="label opacity-80">Begin with a conversation</p>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-7xl">Let’s look at your floors together.</h2>
            <p className="mt-8 max-w-lg leading-relaxed text-white/80">
              A no-pressure virtual consultation to review your space, goals and timeline.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={BOOK_URL} className="label bg-bone px-7 py-4 text-char transition-colors hover:bg-white">
                Book a consultation
              </a>
              <a href={PHONE_HREF} className="label border border-white/70 px-7 py-4 transition-colors hover:bg-white hover:text-char">
                Call {PHONE}
              </a>
            </div>
          </div>
        </Photo>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-bone px-6 pt-24 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-12 pb-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl font-light leading-snug md:text-4xl">
              Fine wood floors for New York’s most considered homes.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <p className="label text-stone">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-stone">{n.label}</a>
                </li>
              ))}
              <li>
                <a href="/eco-refinishing" className="hover:text-stone">Eco refinishing</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label text-stone">Serving</p>
            <ul className="mt-5 space-y-3 text-sm">
              {areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label text-stone">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={PHONE_HREF} className="hover:text-stone">{PHONE}</a></li>
              <li><a href={BOOK_URL} className="hover:text-stone">Book a consultation</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-[1600px] overflow-hidden border-t border-char/10">
          <p className="select-none pb-10 pt-6 text-center font-serif text-[18vw] font-light leading-[1.1] tracking-tight text-char/90 md:text-[14vw]">
            Huggins
          </p>
        </div>
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-3 border-t border-char/10 py-6 text-xs text-stone md:flex-row">
          <p>© {new Date().getFullYear()} Huggins Wood Floor Specialist</p>
          <p>Dustless · Zero-VOC · Certified inspection</p>
        </div>
      </footer>
    </div>
  );
}
