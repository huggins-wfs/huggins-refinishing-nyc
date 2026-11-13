import Link from "next/link";
import Layout, { Seo, Cta, Faq, Breadcrumbs } from "./Layout";
import WoodFloor from "./WoodFloor";
import { Closing } from "../pages/index";
import { faqSchema, breadcrumbSchema, serviceSchema } from "../lib/site";

/** Shared template for service, flooring and area pages. */
export default function DetailPage({ title, description, path, trail, eyebrow, h1, summary, sections = [], facts = [], faqs = [], related = [], visual }) {
  const schema = [breadcrumbSchema(trail), serviceSchema(h1, summary, path)];
  if (faqs.length) schema.push(faqSchema(faqs));
  return (
    <Layout>
      <Seo title={title} description={description} path={path} schema={schema} />
      <section className="relative isolate overflow-hidden bg-ink text-bone">
        <WoodFloor {...visual} sheen="satin" className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="wrap py-20 md:py-28">
          <Breadcrumbs trail={trail} />
          <p className="eyebrow-light mt-8">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">{h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/85">{summary}</p>
          <div className="mt-9"><Cta /></div>
        </div>
      </section>

      <article className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-[2fr_1fr]">
        <div className="max-w-2xl">
          {sections.map((s) => (
            <section key={s.h} className="mb-12 last:mb-0">
              <h2 className="text-3xl md:text-4xl">{s.h}</h2>
              <p className="mt-4 leading-relaxed text-ink/75">{s.p}</p>
            </section>
          ))}
        </div>
        <aside className="self-start lg:sticky lg:top-24">
          {facts.length > 0 && (
            <dl className="mb-8 divide-y divide-ink/15 border-y border-ink/15">
              {facts.map(([k, v]) => (
                <div key={k} className="py-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          )}
          {related.length > 0 && (
            <>
              <p className="eyebrow">Related</p>
              <ul className="mt-3 space-y-1">
                {related.map(([n, h]) => (
                  <li key={h}><Link href={h} className="flex min-h-[44px] items-center font-display text-xl hover:text-brass">{n}</Link></li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </article>

      {faqs.length > 0 && <div className="border-t border-ink/10"><Faq items={faqs} /></div>}
      <Closing />
    </Layout>
  );
}
