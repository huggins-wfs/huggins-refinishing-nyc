/**
 * CITY PROFILES
 * ------------------------------------------------------------------
 * One entry per city you work in. The whole site (headlines, copy,
 * titles, schema, sitemap, llms.txt) is generated from the active one.
 *
 * To launch a new city: copy a profile, change the fields, then set
 * ACTIVE_CITY in site.config.js (or the SITE_CITY environment variable).
 *
 * The more real local detail you put in `homes`, `climate`, `logistics`,
 * `areas[].note` and `localFaqs`, the better the site ranks. Google and AI
 * engines both demote sites that are identical except for the city name.
 */

const slugify = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const profiles = {
  "new-york-city": {
    name: "New York City",
    short: "NYC",
    state: "NY",
    region: "New York",
    url: "https://newyorkcitywoodfloors.com",
    homes: "prewar co-ops, brownstones, lofts and new-development condominiums",
    climate:
      "New York interiors swing from steam-heated, very dry winters to humid summers. Wood moves with that swing, so we take moisture readings before anything is ordered, acclimate material on site, and favour rift-and-quartered or engineered construction where the building calls for it.",
    logistics:
      "Most Manhattan and Brooklyn buildings require a certificate of insurance, an alteration agreement, protected common areas and booked freight-elevator time. We prepare that paperwork with your managing agent and schedule the work inside the building's permitted hours.",
    areas: [
      { name: "Upper East Side", note: "Prewar co-ops here often hide original oak herringbone and parquet under later finishes. We restore those floors where they can be saved and match new sections where they cannot, working within co-op board rules and work-hour limits." },
      { name: "Upper West Side", note: "Classic sixes and sevens on the Upper West Side tend to have strip oak with decorative borders over old sleepers. Levelling, border repair and a low-odour finish schedule that suits an occupied building are the usual brief." },
      { name: "Tribeca", note: "Tribeca lofts combine long sightlines with concrete or heavy timber subfloors. Wide-plank engineered oak, sound-control underlayment required by the condominium, and flatness correction across large open rooms are the core of most projects." },
      { name: "West Village", note: "Townhouses in the West Village are narrow, tall and old. Floors are rarely level and stairs are part of every job, so we plan installation floor by floor and hand-finish treads, nosings and landings to match." },
      { name: "Brooklyn Heights", note: "Brownstones in Brooklyn Heights often keep their original parquet with inlaid borders on the parlour floor. We repair and re-lay missing pieces by hand and refinish with dust containment so plaster and millwork stay clean." },
      { name: "Park Slope", note: "Park Slope row houses usually pair parlour-floor parquet with pine subfloors upstairs. We advise which original boards are worth keeping, which need replacing, and how to make new flooring sit comfortably beside the old." },
      { name: "SoHo" },
      { name: "Queens" },
    ],
    localFaqs: [
      {
        q: "Do you handle co-op and condo board requirements in New York City?",
        a: "Yes. We supply certificates of insurance, follow the building's alteration agreement, protect lobbies, hallways and elevators, and work within permitted hours. Tell us your managing agent and we coordinate directly.",
      },
      {
        q: "Can wood flooring meet my building's soundproofing rules?",
        a: "Usually, yes. Many New York buildings require an acoustic underlayment with a stated impact rating beneath new floors. We specify an assembly that meets the building's written requirement and document it for the board.",
      },
    ],
    testimonials: [
      { quote: "The team protected our art, finished early, and the air smelled clean. No lingering odors.", source: "Tribeca Penthouse" },
      { quote: "Their inspector-level knowledge solved a moisture issue others missed. Flawless finish.", source: "Upper East Side Townhouse" },
    ],
  },

  "the-hamptons": {
    name: "The Hamptons",
    short: "the Hamptons",
    state: "NY",
    region: "New York",
    url: "https://www.example.com", // TODO: this city's domain
    homes: "oceanfront estates, shingle-style homes and modern retreats",
    climate:
      "Homes on the East End sit in salt air and high summer humidity, and many are closed for part of the year. We specify stable board constructions and finishes that tolerate seasonal swings, and we set out the humidity range the house needs to hold while it is unoccupied.",
    logistics:
      "We schedule around the season so floors are cured and furniture is reset before you arrive, and we coordinate with your builder, architect or house manager while you are away.",
    areas: [
      { name: "East Hampton" }, { name: "Southampton" }, { name: "Sag Harbor" },
      { name: "Bridgehampton" }, { name: "Amagansett" }, { name: "Montauk" },
    ],
    localFaqs: [
      {
        q: "Is wide-plank flooring a good idea near the ocean?",
        a: "It can be, with the right construction. Wide boards move more with humidity, so near the water we typically recommend engineered wide plank or rift-and-quartered solid oak, plus year-round humidity control.",
      },
    ],
    testimonials: [],
  },

  "greenwich-ct": {
    name: "Greenwich",
    short: "Greenwich",
    state: "CT",
    region: "Connecticut",
    url: "https://www.example.com", // TODO: this city's domain
    homes: "estates, colonials and waterfront homes",
    climate:
      "Connecticut's cold, dry heating season and humid summers make wood expand and contract through the year. We measure the subfloor and the room before ordering and design the floor to move without gapping or cupping.",
    logistics:
      "We work alongside your architect, designer and general contractor, and sequence flooring after wet trades are complete so the house is dry before wood arrives.",
    areas: [
      { name: "Old Greenwich" }, { name: "Riverside" }, { name: "Cos Cob" },
      { name: "Darien" }, { name: "New Canaan" }, { name: "Westport" },
    ],
    localFaqs: [],
    testimonials: [
      { quote: "White-glove experience from start to finish. We booked our next project immediately.", source: "Greenwich, CT Residence" },
    ],
  },

  "northern-new-jersey": {
    name: "Northern New Jersey",
    short: "Northern NJ",
    state: "NJ",
    region: "New Jersey",
    url: "https://www.example.com", // TODO: this city's domain
    homes: "colonials, Tudors, estates and new custom homes",
    climate:
      "Northern New Jersey homes see dry forced-air winters and humid summers. We take moisture readings of the wood and the subfloor before installation and specify board widths and constructions that stay flat through both.",
    logistics:
      "We coordinate with your builder or designer and sequence the work so the floor is installed, finished and cured before final trim and furniture.",
    areas: [
      { name: "Westfield" }, { name: "Summit" }, { name: "Short Hills" },
      { name: "Montclair" }, { name: "Ridgewood" }, { name: "Alpine" },
    ],
    localFaqs: [],
    testimonials: [],
  },
};

/** Fills in defaults so a profile only needs the fields you actually know. */
function finish(key, p) {
  const name = p.name;
  return {
    slug: key,
    short: name,
    state: "",
    region: "",
    url: "https://www.example.com",
    homes: "fine homes and residences",
    climate:
      "Wood expands and contracts with the seasons. We take moisture readings of the wood and the subfloor before anything is ordered, acclimate material on site, and specify board constructions suited to the home.",
    logistics:
      "We coordinate with your architect, designer or builder and schedule the work so the floor is finished and cured before you move back in.",
    localFaqs: [],
    testimonials: [],
    generic: !profiles[key],
    ...p,
    areas: (p.areas || []).map((a) => ({ ...a, slug: slugify(a.name) })),
  };
}

/**
 * get("new-york-city")  -> the full profile above
 * get("Austin, TX")     -> a working site for a city with no profile yet
 */
function get(key) {
  if (profiles[key]) return finish(key, profiles[key]);
  const [name, state = ""] = String(key).split(",").map((s) => s.trim());
  return finish(slugify(name), { name, state });
}

module.exports = { get, profiles, slugify };
