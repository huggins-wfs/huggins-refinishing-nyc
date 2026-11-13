/**
 * All page copy. Every entry is a function of the city profile, so the
 * same content adapts to whichever city is active.
 * Each page opens with a direct answer (what AI engines quote), then detail.
 */

const services = (c) => [
  {
    slug: "installation",
    name: "Luxury Wood Floor Installation",
    nav: "Installation",
    pattern: "plank",
    tone: "natural",
    summary: `We supply and install luxury wood flooring in ${c.name}: wide-plank oak, walnut, herringbone, chevron and custom parquet. One team measures, sources, installs and finishes the floor, so a single craftsman is accountable for the result.`,
    sections: [
      { h: "What is included", p: `Site evaluation and moisture testing, subfloor preparation and flattening, material sourcing, acclimation, installation, sanding, colour and finish, and a written care plan. For ${c.homes}, we also plan stairs, thresholds, vents and transitions so the floor reads as one surface.` },
      { h: "Solid or engineered", p: "Solid hardwood suits homes with a wood subfloor and stable humidity. Engineered hardwood has a real hardwood wear layer over a cross-laminated core, which makes it the better choice over concrete, over radiant heat, and for very wide boards. We recommend one or the other after measuring your home, not before." },
      { h: `Installing in ${c.name}`, p: `${c.climate} ${c.logistics}` },
    ],
    faqs: [
      { q: `How long does wood floor installation take in ${c.name}?`, a: "Most single-level installations take one to two weeks on site once material has acclimated. Site-finished floors add time for sanding, colour, finish coats and cure. Herringbone, chevron and parquet take longer than straight plank because every piece is set by hand." },
      { q: "Can wood floors be installed over radiant heat or concrete?", a: "Yes. Engineered hardwood is the usual choice for both. We test the slab for moisture, specify the correct adhesive or membrane, and set limits for the surface temperature of the radiant system so the floor stays stable." },
    ],
  },
  {
    slug: "refinishing",
    name: "Dustless Wood Floor Refinishing",
    nav: "Refinishing",
    pattern: "herringbone",
    tone: "honey",
    summary: `We refinish hardwood floors in ${c.name} using HEPA dust containment and low-odour, zero-VOC finish options. The existing floor is sanded flat, coloured to an approved sample and sealed, typically without you having to empty the whole home.`,
    sections: [
      { h: "Our five-step process", p: "Evaluation and moisture readings. Protection and containment with sealed work zones and masking for art and millwork. Precision sanding, including edges and stair nosings. Colour and finish matched to a sample you approve on your own floor. Cure, walk-through and a maintenance plan." },
      { h: "Finishes we use", p: "Waterborne zero-VOC polyurethanes for hard-wearing, low-odour protection, and hardwax oils for a natural matte surface that can be repaired in place. We choose by traffic, sheen and how the room is used." },
      { h: "When refinishing is the right call", p: "If the boards are sound and there is enough wear layer left, refinishing restores the floor at a fraction of the disruption of replacement. If boards are loose, cupped or sanded too thin, we will tell you plainly and show you why." },
    ],
    faqs: [
      { q: "Is dustless floor refinishing really dust-free?", a: "It is very close. Sanders are connected to HEPA vacuums that capture dust at the source, and work areas are sealed off. A small amount of fine dust is possible, which is why we also mask and protect adjoining rooms." },
      { q: "Do zero-VOC finishes last as long as traditional ones?", a: "Yes. Modern waterborne zero-VOC systems deliver excellent durability with proper preparation and cure. We specify the product by traffic level and sheen to match how you live." },
      { q: "How soon can we walk on refinished floors?", a: "Usually in socks within a day of the final coat. Furniture can typically return after a few days, and rugs after the finish has fully cured. We give you exact times for the product used." },
    ],
  },
  {
    slug: "restoration-and-repair",
    name: "Wood Floor Restoration & Repair",
    nav: "Restoration",
    pattern: "basket",
    tone: "smoked",
    summary: `We repair and restore original wood floors in ${c.name}, including parquet, inlaid borders and antique boards. Damaged sections are replaced with matched species, cut and grain, then blended so the repair disappears into the floor.`,
    sections: [
      { h: "What we restore", p: "Water damage, pet stains, gaps, squeaks, cupping, loose parquet blocks, missing border pieces, and floors altered by past renovations. We weave in new boards rather than cutting straight patches." },
      { h: "Matching old floors", p: "We identify the species and cut, source matching or reclaimed stock, and make colour samples on site. Exact matches cannot be guaranteed on aged wood, and we explain the tolerance before work begins." },
    ],
    faqs: [
      { q: "Can water-damaged hardwood floors be saved?", a: "Often, yes. If the boards dry flat and the subfloor is sound, sanding and refinishing is enough. Boards that stay cupped, blackened or loose are replaced individually and blended into the surrounding floor." },
    ],
  },
  {
    slug: "inspection",
    name: "Certified Wood Floor Inspection & Consulting",
    nav: "Inspection",
    pattern: "chevron",
    tone: "walnut",
    summary: `We provide certified wood floor inspections in ${c.name} for homeowners, architects, designers and builders. You receive a written report that identifies the cause of the problem, supported by moisture readings and photographs.`,
    sections: [
      { h: "When to call an inspector", p: "Cupping, crowning, gapping, finish failure, noises, or a dispute about who is responsible. An inspection is also worth doing before specifying wood over radiant heat, over concrete, or in a newly built home that is still drying." },
      { h: "For design professionals", p: "We consult on species, cut, construction, subfloor assembly, acoustic underlayment and finish schedule during design, so the floor that is drawn is a floor that performs." },
    ],
    faqs: [
      { q: "What does a certified wood floor inspector do?", a: "An inspector examines the floor, measures moisture in the wood, subfloor and air, documents the conditions, and determines the cause of a failure. The written report can be used with contractors, manufacturers and insurers." },
    ],
  },
];

const floors = (c) => [
  {
    slug: "wide-plank-european-oak",
    name: "Wide-Plank European Oak",
    pattern: "plank",
    tone: "natural",
    width: "wide",
    summary: `Wide-plank European oak is the most requested luxury floor in ${c.name}. Long, broad boards in calm, even grain make rooms feel larger and quieter, and oak accepts almost any colour from pale Nordic tones to deep smoked brown.`,
    sections: [
      { h: "Why it works", p: "European white oak is hard, stable and rich in tannin, which lets us achieve colour through reactive stains, fuming and oils rather than paint-like pigment. The result has depth that surface stain cannot imitate." },
      { h: "What to specify", p: "For boards wider than about seven inches, we generally recommend engineered construction or rift-and-quartered solid stock. Both resist cupping far better than plain-sawn solid boards of the same width." },
    ],
    facts: [["Best for", "Open living spaces, lofts, whole-home installations"], ["Construction", "Engineered or solid, plain or rift-and-quartered"], ["Finish", "Hardwax oil or zero-VOC waterborne, matte to satin"]],
  },
  {
    slug: "herringbone-and-chevron",
    name: "Herringbone & Chevron Parquet",
    pattern: "herringbone",
    tone: "honey",
    width: "medium",
    summary: `Herringbone and chevron are the classic patterned wood floors, and both suit ${c.homes}. Herringbone uses rectangular blocks laid in a broken zigzag; chevron blocks are cut on an angle so they meet in a continuous point.`,
    sections: [
      { h: "Herringbone or chevron", p: "Herringbone looks woven and traditional and is more forgiving of walls that are out of square. Chevron looks sharper and more directional, and needs precise layout from a centre line. We set out both by hand before the first block is fixed." },
      { h: "Borders and custom work", p: "Patterned floors can be framed with a border, run wall to wall, or combined with plank in adjoining rooms. We also make custom parquet panels, such as Versailles and basketweave, to order." },
    ],
    facts: [["Best for", "Entry halls, living and dining rooms, libraries"], ["Material allowance", "Typically around 15% extra for cuts"], ["Finish", "Site-finished for a flat, seamless surface"]],
  },
  {
    slug: "american-walnut",
    name: "American Black Walnut",
    pattern: "chevron",
    tone: "walnut",
    width: "medium",
    summary: `American black walnut is a naturally dark, chocolate-brown hardwood chosen for its colour and figure rather than its hardness. In ${c.name} it is most often used in studies, bedrooms and formal rooms where warmth matters more than heavy wear.`,
    sections: [
      { h: "Living with walnut", p: "Walnut is softer than oak, so it will show dents sooner in a busy kitchen or entry. It also lightens gradually in sunlight. We finish it with oils or low-sheen waterborne systems that keep its colour clear and make wear easy to refresh." },
    ],
    facts: [["Best for", "Studies, bedrooms, formal rooms"], ["Colour", "Natural brown, no stain required"], ["Finish", "Hardwax oil or matte waterborne"]],
  },
  {
    slug: "reclaimed-and-antique",
    name: "Reclaimed & Antique Wood",
    pattern: "basket",
    tone: "smoked",
    width: "wide",
    summary: `Reclaimed flooring is wood salvaged from old buildings and re-milled for a new floor. It brings tight old-growth grain, original saw marks and patina that new timber cannot reproduce, and it suits both historic and modern ${c.name} homes.`,
    sections: [
      { h: "What to expect", p: "Every reclaimed lot is different. We show you the actual material before you commit, explain how much character and variation it carries, and prepare it properly so it is dry, flat and stable when it is installed." },
    ],
    facts: [["Best for", "Historic homes, feature rooms, modern contrast"], ["Sources", "Antique oak, heart pine and other salvaged timbers"], ["Finish", "Usually oil, to keep the patina"]],
  },
];

const process = [
  { n: "01", t: "Consultation", d: "A virtual or in-home conversation about the rooms, how you live, and the look you want." },
  { n: "02", t: "Measure & moisture", d: "Certified evaluation of subfloor, humidity and existing floors before anything is specified." },
  { n: "03", t: "Samples in your light", d: "Wood and finish samples made for your project and approved in the room they will live in." },
  { n: "04", t: "Installation & finish", d: "Protected work zones, dust containment, hand-set layout and zero-VOC finish options." },
  { n: "05", t: "Cure & care", d: "Walk-through, written maintenance plan and optional white-glove furniture reset." },
];

const faqs = (c, b) => [
  { q: `Who installs luxury wood flooring in ${c.name}?`, a: `${b.name} supplies, installs and refinishes luxury wood flooring in ${c.name}, including wide-plank oak, walnut, herringbone, chevron and custom parquet. The company has ${b.yearsExperience} years of experience and is led by a Certified Wood Flooring Inspector.` },
  { q: `How much does luxury wood flooring cost in ${c.name}?`, a: "Cost depends on the species, board width, pattern, subfloor preparation and finish. Patterned floors such as herringbone cost more than straight plank because they take more material and more labour. We provide a written, itemised quote after a consultation and site measure." },
  { q: "What is the best wood flooring for a luxury home?", a: "European white oak is the most versatile choice: it is hard, stable and takes colour beautifully. Walnut is chosen for natural dark colour, and reclaimed wood for character. The right construction, solid or engineered, depends on your subfloor and heating." },
  { q: "Is engineered hardwood real wood?", a: "Yes. Engineered hardwood has a top layer of real hardwood over a cross-laminated core. With a thick wear layer it can be sanded and refinished, and it is more stable than solid wood over concrete, radiant heat and in wide boards." },
  { q: "What is the difference between herringbone and chevron?", a: "Herringbone uses rectangular blocks laid at right angles in a broken zigzag. Chevron blocks have angled ends that meet in a straight line, forming continuous V shapes. Herringbone reads as woven; chevron reads as pointed." },
  { q: "How do I look after a wood floor?", a: "Keep indoor humidity steady, roughly 30 to 50 percent, vacuum grit regularly, use felt pads under furniture, and clean with the product recommended for your finish. Avoid steam mops and standing water." },
  ...c.localFaqs,
  { q: "How do I get started?", a: `Book a virtual consultation online or call ${b.phoneDisplay}. We review your space, goals and timeline, then arrange a site measure and samples.` },
];

module.exports = { services, floors, process, faqs };
