// Homepage — luxurywoodnyc.com
// Huggins Wood Floor Specialist. Editorial, image-led layout: full-bleed hero, quiet typography,
// warm neutral palette, generous whitespace. Focused on selling wood floors.

import { useEffect, useState } from "react";
import Head from "next/head";
import Photo from "../components/Photo";

const BOOK_URL = "https://www.luxurywoodnyc.com/book-a-virtual-consultation";
const PHONE = "908-232-6600";
const PHONE_HREF = "tel:+19082326600";

const nav = [
  { label: "Collections", href: "#collections" },
  { label: "Patterns", href: "#patterns" },
  { label: "Finishes", href: "#finishes" },
  { label: "Projects", href: "#projects" },
  { label: "Professionals", href: "#professionals" },
];

const SITE = "https://newyorkcitywoodfloors.com";
const UP = `${SITE}/wp-content/uploads`;

// Photography and video are served from newyorkcitywoodfloors.com for now.
const media = {
  hero: `${UP}/2025/04/Private-Residence_12.jpeg`,
  craft: `${UP}/2025/03/Attachment-6.jpeg`,
  ctaVideo: `${UP}/2023/12/2331696372.mp4`,
  ctaPoster: `${UP}/2025/03/IMG_1890.jpg`,
  trade1: `${UP}/2025/03/348868655_196785586643724_2733245359147025975_n.jpg`,
  trade2: `${UP}/2025/02/Snapinst.app_49622779_573019906547706_6258991298048687985_n_1080.jpg`,
};

const collections = [
  {
    title: "Rift & Quartered White Oak",
    text: "Straight, quiet grain and exceptional stability. Our most specified floor, in plank or herringbone.",
    src: `${UP}/2025/04/Screen-Shot-2022-06-21-at-3.32.25-PM.webp`,
    href: `${SITE}/product/rift-and-quartersawn-white-oak/`,
    tone: "ash",
  },
  {
    title: "White Ash",
    text: "Pale, lively and hard-wearing, with a Scandinavian calm in long, wide boards.",
    src: `${UP}/2025/04/ash-natural_22x175-200-250-300_2-5-m_no-laquer_the-artillery-workshop_-dk_mogens-de-linde_photo-claus-troelsgaard_6.webp`,
    href: `${SITE}/product/white-ash/`,
    tone: "white",
  },
  {
    title: "African Doussie",
    text: "A rare, dense hardwood with deep amber colour, laid in chevron at Carnegie Hall Towers.",
    src: `${UP}/2025/04/DSC_6650-2.jpg`,
    href: `${SITE}/rare-violins-project-page/`,
    tone: "walnut",
  },
  {
    title: "Listone Italian Floors",
    text: "From the renowned Italian mill: teak, wenge, European oak and other exceptional hardwoods.",
    src: `${UP}/2025/04/Rovere-Europeo-rustico1-e1743888927492.jpg`,
    href: `${SITE}/listone-wood-floors-nyc/`,
    tone: "oak",
  },
];

const patterns = [
  { title: "Herringbone", note: "Historic River House, NYC", src: `${UP}/2025/02/IMG_3742-rotated.jpg`, href: `${SITE}/river-house-nyc/`, tone: "white" },
  { title: "Chevron", note: "Alpine Estate, NJ", src: `${UP}/2025/02/Snapinst.app_463601547_1070655431362476_1636920651427280467_n_1080-1.jpg`, href: `${SITE}/alpine-chevron-project/`, tone: "oak" },
  { title: "Versailles parquet", note: "Upper East Side", src: `${UP}/2025/03/Parquet.jpg`, href: `${SITE}/product/versailles-parquet/`, tone: "ash" },
  { title: "Metallic inlays", note: "68 Madison Avenue, NYC", src: `${UP}/2025/02/Snapinst.app_49831349_599692997138192_521416009095523084_n_1080.jpg`, href: `${SITE}/68-madison-ave/`, tone: "walnut" },
];

const finishes = [
  { name: "Raw", tone: "white" },
  { name: "Natural", tone: "ash" },
  { name: "Honey", tone: "oak" },
  { name: "Smoked", tone: "smoked" },
  { name: "Walnut", tone: "walnut" },
  { name: "Ebony", tone: "ebony" },
];

const steps = [
  { n: "01", t: "Consultation", d: "We talk through your rooms, how you live in them and the look you want." },
  { n: "02", t: "Samples", d: "Boards in your shortlisted species, widths and finishes, seen in your own light." },
  { n: "03", t: "Specification", d: "Moisture readings, subfloor checks and a written plan from a certified inspector." },
  { n: "04", t: "Installation", d: "Laid by our own craftsmen, with care for every transition and threshold." },
  { n: "05", t: "Aftercare", d: "A maintenance plan so the floor keeps improving for decades." },
];

const projects = [
  { place: "Madison Square Tower", kind: "Rift & quartered white oak herringbone", src: `${UP}/2025/03/Snapinst.app_117752504_326276408554429_9115491535755131618_n_1080-1.jpg`, href: `${SITE}/madison-square-tower/`, tone: "ash" },
  { place: "Carnegie Hall Towers", kind: "Rare African Doussie chevron", src: `${UP}/2025/02/dsc6006-v2.jpg`, href: `${SITE}/rare-violins-project-page/`, tone: "walnut" },
  { place: "Historic River House", kind: "Herringbone", src: `${UP}/2025/03/227605981_1010369033070574_7832537436658830885_n.jpg`, href: `${SITE}/river-house-nyc/`, tone: "white" },
  { place: "Brooklyn Town House", kind: "Chevron", src: `${UP}/2025/03/Snapinst.app_18512871_404952376556547_9182493117952032768_n_1080.jpg`, href: `${SITE}/brooklyn-town-house/`, tone: "oak" },
  { place: "Forbes Estate, Bedminster", kind: "Parquet", src: `${UP}/2025/02/Snapinst.app_263733478_784417912351127_2966313413964367707_n_1080.jpg`, href: `${SITE}/forbes-estate-bedminster-nj/`, tone: "smoked" },
  { place: "Upper Montclair Residence", kind: "White oak herringbone, natural oil", src: `${UP}/2025/04/168bfa_950b318cd97f47a8b75507462015e8d2mv2.webp`, href: `${SITE}/upper-montclair-residence/`, tone: "ash" },
  { place: "845 UN Plaza", kind: "Residence", src: `${UP}/2025/03/Attachment-6.jpeg`, href: `${SITE}/845-un-plaza-project/`, tone: "oak" },
];

const credentials = [
  "Certified Wood Flooring Inspector",
  "AIA · IDCEC · ASID CEU instructor",
  "700+ design professionals trained",
  "200+ firms represented",
];

const quotes = [
  { q: "Joe Avila is a knowledgeable expert, responsive and collaborative. The team are true artisans and the final product is beautiful!", a: "Nora Ryan" },
  { q: "Replaced our entire loft floors. Professional, courteous, and fast. Highly recommend.", a: "Jean-Pierre L." },
  { q: "Absolutely love my floors! The natural products were a huge plus. They transformed my entire apartment beautifully.", a: "Heather Svenson" },
  { q: "Delivered what was promised, on time, on budget. Guidance in selecting a color was extremely helpful.", a: "Dennis Simon" },
  { q: "I'm obsessed with my floors! Team was wonderful, professional, very caring and patient. As good as it gets!", a: "Dar Gitane Inc." },
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
            Order samples
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
            Order samples
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
        <p className="label text-stone">★★★★★ · In their words</p>
        <figure className="mt-10 min-h-[220px] md:min-h-[260px]">
          <blockquote key={i} className="animate-[fade_0.8s_ease] font-serif text-3xl font-light leading-snug md:text-[2.75rem] md:leading-tight">
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
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <a href="https://g.page/r/CScKhgXvNUUbEAI/review" className="link-line">
            Google reviews <Arrow />
          </a>
          <a href="https://www.houzz.com/professionals/flooring-contractors/huggins-wood-floor-specialist-pfvwus-pf~722580934" className="link-line">
            Houzz reviews <Arrow />
          </a>
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
          content="Wide-plank, herringbone and chevron wood floors in white oak, European oak, walnut and reclaimed wood, supplied and installed by Huggins Wood Floor Specialist across New York City, the Hamptons, New Jersey and Connecticut."
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
                "Luxury wood floors in white oak, European oak, walnut and reclaimed wood, supplied and installed for fine homes.",
            }),
          }}
        />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <Photo src={media.hero} alt="Rift and quartered white oak herringbone at Madison Square Tower" tone="smoked" className="h-[100svh] min-h-[640px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-14 text-white md:px-10 md:pb-20">
            <p className="label opacity-80">Luxury wood floors · New York City</p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl font-light leading-[0.98] md:text-8xl">
              Floors made to outlast us.
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a href="#collections" className="link-line">
                Explore the collections <Arrow />
              </a>
              <a href={BOOK_URL} className="link-line">
                Order samples <Arrow />
              </a>
            </div>
          </div>
        </Photo>

        {/* Statement */}
        <section className="px-6 py-28 md:px-10 md:py-44">
          <div className="mx-auto max-w-5xl text-center">
            <p className="label text-stone">Three decades of craft</p>
            <p className="mt-10 font-serif text-3xl font-light leading-snug md:text-[3.25rem] md:leading-[1.15]">
              A floor is the one thing in a home you touch every day. We supply rare and classic hardwoods, from rift and
              quartered white oak to African Doussie and Italian floors by Listone, finish them in natural oils, and
              install them by hand.
            </p>
            <a href="#collections" className="link-line mt-12 text-char">
              See the woods <Arrow />
            </a>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="px-6 pb-28 md:px-10 md:pb-40">
          <div className="mx-auto max-w-[1600px]">
            <SectionHead label="Collections" title="Species chosen board by board." />
            <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {collections.map((c) => (
                <a key={c.title} href={c.href} target="_blank" rel="noopener" className="group block">
                  <div className="overflow-hidden">
                    <Photo
                      src={c.src}
                      alt={`${c.title} floor`}
                      tone={c.tone}
                      className="aspect-[3/4] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between border-t border-char/15 pt-4">
                    <h3 className="font-serif text-2xl">{c.title}</h3>
                    <Arrow className="text-stone transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone">{c.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Patterns: large feature + three */}
        <section id="patterns" className="bg-linen px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1600px]">
            <SectionHead label="Patterns" title="Laid straight, or laid in a pattern.">
              <p className="mt-6 max-w-xl leading-relaxed text-stone">
                Every species is available as long planks or cut for herringbone, chevron, parquet and inlaid floors.
              </p>
            </SectionHead>
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <a href={patterns[0].href} target="_blank" rel="noopener" className="flex flex-col">
                <Photo src={patterns[0].src} alt={`${patterns[0].title} floor`} tone={patterns[0].tone} className="aspect-[4/5] lg:aspect-auto lg:min-h-[560px] lg:flex-1" />
                <span className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-char/15 pt-4">
                  <span className="font-serif text-3xl">{patterns[0].title}</span>
                  <span className="label text-stone">{patterns[0].note}</span>
                </span>
              </a>
              <div className="grid gap-6">
                {patterns.slice(1).map((p) => (
                  <a key={p.title} href={p.href} target="_blank" rel="noopener" className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-end gap-5">
                    <Photo src={p.src} alt={`${p.title} floor`} tone={p.tone} className="aspect-square" />
                    <span className="block border-t border-char/15 pt-4">
                      <span className="block font-serif text-2xl">{p.title}</span>
                      <span className="mt-1 block text-sm text-stone">{p.note}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Finishes */}
        <section id="finishes" className="px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1600px]">
            <SectionHead label="Finishes" title="Any colour, mixed for your floor.">
              <p className="mt-6 max-w-xl leading-relaxed text-stone">
                Natural oils, hard-wax oils and waterborne finishes from WOCA Denmark, Rubio Monocoat and Loba, all
                low- to zero-VOC, tinted to match your stone, joinery and light.
              </p>
            </SectionHead>
            <ul className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {finishes.map((f) => (
                <li key={f.name}>
                  <Photo alt={`${f.name} finish sample`} tone={f.tone} className="aspect-[2/3]" />
                  <p className="mt-4 border-t border-char/15 pt-3 font-serif text-xl">{f.name}</p>
                </li>
              ))}
            </ul>
            <a href={BOOK_URL} className="link-line mt-14">
              Order finish samples <Arrow />
            </a>
          </div>
        </section>

        {/* How it works */}
        <section id="process" className="bg-char text-bone">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
            <Photo src={media.craft} alt="Finished wood floor at 845 UN Plaza" tone="walnut" className="min-h-[60vh] lg:min-h-full" />
            <div className="px-6 py-24 md:px-16 md:py-32">
              <p className="label text-oak-light">From sample to floor</p>
              <h2 className="mt-6 max-w-lg font-serif text-4xl font-light leading-[1.05] md:text-6xl">
                One team, start to finish.
              </h2>
              <p className="mt-8 max-w-lg leading-relaxed text-bone/70">
                We supply the wood and we install it, so one team is responsible for the floor from the first sample to
                the last board.
              </p>
              <ol className="mt-12 max-w-lg">
                {steps.map((m) => (
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
            <SectionHead label="Selected projects" title="From Carnegie Hall Towers to Brooklyn town houses." />
          </div>
          <div className="no-scrollbar mt-16 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 md:scroll-px-10 md:px-10">
            {projects.map((p) => (
              <a key={p.place} href={p.href} target="_blank" rel="noopener" className="group w-[80vw] shrink-0 snap-start sm:w-[55vw] lg:w-[32vw]">
                <div className="overflow-hidden">
                  <Photo src={p.src} alt={`${p.place}: ${p.kind}`} tone={p.tone} className="aspect-[4/5] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" />
                </div>
                <span className="mt-5 block font-serif text-2xl">{p.place}</span>
                <span className="label mt-2 block text-stone">{p.kind}</span>
              </a>
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
                More than 700 professionals from over 200 architecture and design firms have taken our AIA, IDCEC and
                ASID-accredited wood flooring courses. We bring the same knowledge to your project: sample boards,
                custom colours and specification support from a certified wood flooring inspector.
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <a href={BOOK_URL} className="link-line">
                  Request a trade consultation <Arrow />
                </a>
                <a href="https://www.ceuevents.com/instructors/joe_avila" className="link-line">
                  View CEU courses <Arrow />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:col-span-6 lg:col-start-7">
              <Photo src={media.trade1} alt="Custom parquet with metallic inlays" tone="ash" className="aspect-[3/4]" />
              <Photo src={media.trade2} alt="Brass inlays in a New York City floor" tone="oak" className="mt-16 aspect-[3/4]" />
            </div>
          </div>
        </section>

        {/* Samples CTA */}
        <Photo src={media.ctaPoster} video={media.ctaVideo} alt="Wood floor in a finished room" tone="walnut" className="min-h-[80vh]">
          <div className="absolute inset-0 z-[1] bg-black/45" />
          <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 text-center text-white">
            <p className="label opacity-80">See it in your own light</p>
            <h2 className="mt-6 font-serif text-5xl font-light leading-[1.02] md:text-7xl">Start with a sample.</h2>
            <p className="mt-8 max-w-lg leading-relaxed text-white/80">
              Tell us about your project and we’ll send boards in the woods and finishes you’re considering.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={BOOK_URL} className="label bg-bone px-7 py-4 text-char transition-colors hover:bg-white">
                Order samples
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
            <p className="label text-stone">Floors</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:text-stone">{n.label}</a>
                </li>
              ))}
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
              <li><a href={BOOK_URL} className="hover:text-stone">Order samples</a></li>
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
          <p>Oak · Walnut · Reclaimed</p>
        </div>
      </footer>
    </div>
  );
}
