import { useState } from "react";
import WoodFloor, { TONES, PATTERNS, WIDTHS } from "./WoodFloor";
import { business, city } from "../lib/site";

function Choice({ legend, options, value, onChange, swatch }) {
  return (
    <fieldset>
      <legend className="eyebrow-light">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {Object.entries(options).map(([key, o]) => (
          <label key={key} className={`flex min-h-[44px] cursor-pointer items-center gap-2 border px-4 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brass-light ${value === key ? "border-brass-light bg-brass-light text-ink" : "border-bone/25 text-bone/85 hover:border-bone/60"}`}>
            <input type="radio" name={legend} value={key} checked={value === key} onChange={() => onChange(key)} className="sr-only" />
            {swatch && <span aria-hidden className="h-4 w-4 rounded-full border border-black/30" style={{ background: `hsl(${o.h} ${o.s}% ${o.l}%)` }} />}
            {o.name}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function FloorStudio() {
  const [pattern, setPattern] = useState("herringbone");
  const [tone, setTone] = useState("natural");
  const [width, setWidth] = useState("medium");
  const [sheen, setSheen] = useState("matte");
  const [len, setLen] = useState("20");
  const [wid, setWid] = useState("15");
  const [copied, setCopied] = useState(false);

  const area = Math.max(0, parseFloat(len) || 0) * Math.max(0, parseFloat(wid) || 0);
  const waste = PATTERNS[pattern].waste;
  const order = Math.ceil(area * (1 + waste / 100));
  const spec = `${PATTERNS[pattern].name}, ${TONES[tone].name}, ${WIDTHS[width].name.toLowerCase()} boards, ${sheen} finish` + (area ? `, about ${Math.round(area)} sq ft (${order} sq ft to order)` : "") + `, ${city.name}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`My floor: ${spec}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <section id="studio" className="bg-ink py-20 text-bone md:py-28">
      <div className="wrap">
        <p className="eyebrow-light">The Floor Studio</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">Design your floor in a minute</h2>
        <p className="mt-4 max-w-xl text-bone/70">Choose a pattern, a tone and a board width. See it drawn instantly, get a material estimate, and bring the result to your consultation.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          {/* On phones the preview pins under the header so it stays visible while choosing */}
          <div className="contents lg:sticky lg:top-24 lg:block lg:self-start">
            <div className="sticky top-16 z-10 -mx-5 bg-ink px-5 py-3 md:-mx-8 md:px-8 lg:static lg:m-0 lg:p-0">
              <WoodFloor pattern={pattern} tone={tone} width={width} sheen={sheen} className="aspect-[2/1] w-full lg:aspect-[4/3]" />
            </div>
            <div className="-mt-6 lg:mt-4">
              <p aria-live="polite" className="font-display text-xl italic text-bone/90">{spec}</p>
              <p className="mt-1 text-xs text-bone/50">An illustration to guide the conversation. Real samples are made for your project and approved in your own light.</p>
            </div>
          </div>

          <div className="space-y-8">
            <Choice legend="Pattern" options={PATTERNS} value={pattern} onChange={setPattern} />
            <Choice legend="Tone" options={TONES} value={tone} onChange={setTone} swatch />
            <Choice legend="Board width" options={WIDTHS} value={width} onChange={setWidth} />
            <Choice legend="Sheen" options={{ matte: { name: "Matte" }, satin: { name: "Satin" } }} value={sheen} onChange={setSheen} />

            <fieldset>
              <legend className="eyebrow-light">Room size (feet)</legend>
              <div className="mt-3 flex items-end gap-3">
                {[["Length", len, setLen], ["Width", wid, setWid]].map(([l, v, set]) => (
                  <label key={l} className="text-xs text-bone/60">
                    {l}
                    <input type="number" inputMode="decimal" min="0" value={v} onChange={(e) => set(e.target.value)} className="mt-1 block h-12 w-24 border border-bone/25 bg-transparent px-3 text-base text-bone" />
                  </label>
                ))}
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-px bg-bone/15 text-center">
                {[["Room area", `${Math.round(area)} sq ft`], ["Cutting allowance", `${waste}%`], ["Material to order", `${order} sq ft`]].map(([k, v]) => (
                  <div key={k} className="bg-ink px-2 py-4">
                    <dt className="text-[0.65rem] uppercase tracking-widest text-bone/50">{k}</dt>
                    <dd className="mt-1 font-display text-2xl tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-xs text-bone/50">Typical allowance for this pattern. Exact quantities are confirmed at the site measure.</p>
            </fieldset>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={business.bookingUrl} className="btn-brass">Book a consultation with this design</a>
              <button type="button" onClick={copy} className="btn-ghost-light">{copied ? "Copied" : "Copy my specification"}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
