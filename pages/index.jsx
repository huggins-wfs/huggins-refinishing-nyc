import React from "react";

const studioMetrics = [
  { label: "Projects Delivered", value: "1,200+" },
  { label: "Years in Craft", value: "30" },
  { label: "Bespoke Finish Samples", value: "150+" },
  { label: "NYC / NJ / CT Coverage", value: "Tri-State" }
];

const partnershipPillars = [
  {
    title: "Design-Led Consultation",
    description:
      "We translate architectural intent into actionable wood specifications—species, finish systems, sheen, and durability profiles."
  },
  {
    title: "Material Partnership",
    description:
      "From bespoke planks to reclaimed selections, we source and coordinate mill partners aligned with your budget, timeline, and aesthetic."
  },
  {
    title: "Technical Specification Support",
    description:
      "We provide detail packages, installation guidance, and performance recommendations for hospitality, retail, and private residences."
  }
];

const projectTypes = [
  "Penthouses & Landmark Residences",
  "Boutique Hospitality Interiors",
  "Executive Offices & Flagship Retail"
];

const services = [
  "On-site wood floor consulting",
  "Material sourcing & finish mockups",
  "Refinishing and preservation plans",
  "Subfloor, moisture, and movement analysis",
  "Construction-phase specification support",
  "Post-install maintenance standards"
];

export default function RefinishingNYCPage() {
  return (
    <div className="min-h-screen bg-[#f6f2ec] text-[#1f1b17]">
      <header className="sticky top-0 z-50 border-b border-[#d8cfc4]/80 bg-[#f6f2ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="group flex items-center gap-4">
            <span className="h-9 w-9 rounded-full border border-[#b79d7f] bg-[#d7c1a2]/50 transition-colors duration-300 group-hover:bg-[#d7c1a2]" />
            <div>
              <p className="font-serif text-lg tracking-wide">Huggins Wood Floor Specialist</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#6d6154]">Architectural Flooring Studio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#5d5348] md:flex">
            <a href="#studio" className="transition hover:text-[#241e18]">Studio</a>
            <a href="#capabilities" className="transition hover:text-[#241e18]">Capabilities</a>
            <a href="#portfolio" className="transition hover:text-[#241e18]">Portfolio</a>
            <a href="#contact" className="transition hover:text-[#241e18]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#4b3e30] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] transition hover:bg-[#4b3e30] hover:text-[#f6f2ec] md:px-6"
          >
            Consultation
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-14 pt-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pt-24">
          <div className="space-y-8 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.36em] text-[#7c6f60]">For architects & interior designers</p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Wood flooring expertise for interiors where every detail is intentional.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#5d5348] sm:text-lg">
              We partner with design teams as wood flooring specialists, technical consultants, and material collaborators—delivering refined floor systems for luxury residential and commercial environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#2e251d] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#f6f2ec] transition hover:bg-[#493c2f]"
              >
                Book Design Consultation
              </a>
              <a
                href="#samples"
                className="rounded-full border border-[#7a6550] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] transition hover:bg-[#e9dfd2]"
              >
                Request Material Samples
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[2.5rem] border border-[#ccb8a0] shadow-[0_30px_80px_-40px_rgba(33,27,22,0.6)]">
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury interior featuring natural wood floors"
                className="h-[26rem] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-7 left-6 max-w-xs rounded-3xl border border-[#cab7a1] bg-[#f8f4ee]/95 p-5 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[#716354]">Specialized focus</p>
              <p className="mt-2 text-sm text-[#3b3229]">Custom specification and execution for warm, tactile, high-performance wood surfaces.</p>
            </div>
          </div>
        </section>

        <section id="studio" className="border-y border-[#ddd2c5] bg-[#f1e9df]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4 lg:px-10">
            {studioMetrics.map((item) => (
              <article key={item.label} className="space-y-1 border-l border-[#c6b6a2] pl-4">
                <p className="font-serif text-3xl text-[#2c241d]">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6f6458]">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7e6e5f]">Partnership model</p>
              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                We integrate with your team from concept through final coat.
              </h2>
            </div>
            <div className="space-y-6">
              {partnershipPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-3xl border border-[#d4c6b6] bg-[#fbf8f3] p-7 transition hover:-translate-y-0.5 hover:border-[#b79c82]">
                  <h3 className="font-serif text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-[#5c5247]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="samples" className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural detail with curated wood materials"
                className="h-full min-h-[18rem] w-full rounded-[2.3rem] object-cover"
              />
            </div>
            <aside className="flex flex-col justify-between rounded-[2.3rem] border border-[#d2c3b1] bg-[#efe5d8] p-8 lg:col-span-5">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#6d5c4a]">Specification support</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">Need finish schedules, sample kits, or performance guidance?</h3>
                <ul className="mt-5 space-y-2 text-sm text-[#4f463d]">
                  {services.map((service) => (
                    <li key={service}>• {service}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit rounded-full border border-[#4b3e30] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-[#4b3e30] hover:text-[#f7f2ea]"
              >
                Request Specification Support
              </a>
            </aside>
          </div>
        </section>

        <section id="portfolio" className="bg-[#1f1a16] px-6 py-20 text-[#e9dfd2] lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#b8a896]">Select interiors</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Refined work across private and commercial spaces.</h2>
              </div>
              <a
                href="#contact"
                className="text-xs uppercase tracking-[0.2em] text-[#ddc8b2] underline decoration-[#8e7963] underline-offset-8 transition hover:text-[#f2e6d8]"
              >
                Schedule a portfolio review
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projectTypes.map((project, index) => (
                <article key={project} className="group overflow-hidden rounded-3xl border border-[#4a4037]">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? "1512918728675-ed5a9ecdebfd" : index === 1 ? "1497366754035-f200968a6e72" : "1441986300917-64674bd600d8"}?auto=format&fit=crop&w=1000&q=80`}
                    alt={project}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl">{project}</h3>
                    <p className="mt-2 text-sm text-[#b6a999]">Materially rich, technically precise, and coordinated to demanding construction timelines.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7d6d5b]">Collaborate with us</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl">Let&apos;s specify flooring that elevates the entire interior narrative.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#5f5448]">
            Share drawings, inspirations, or finish requirements. We&apos;ll provide consultation, curated samples, and technical support tailored to your project team.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@gogreenwoodfloors.com?subject=Design%20Consultation"
              className="w-full rounded-full bg-[#2e251d] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5eee4] transition hover:bg-[#4a3c2e] sm:w-auto"
            >
              Consultation Inquiry
            </a>
            <a
              href="mailto:hello@gogreenwoodfloors.com?subject=Sample%20Request"
              className="w-full rounded-full border border-[#6f5b46] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-[#ebdfd2] sm:w-auto"
            >
              Request Samples
            </a>
            <a
              href="tel:+19082326600"
              className="w-full rounded-full border border-[#6f5b46] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-[#ebdfd2] sm:w-auto"
            >
              Call +1 (908) 232-6600
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
