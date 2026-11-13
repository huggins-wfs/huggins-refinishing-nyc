import config from "../site.config";
import content from "../data/content";

export const business = config.business;
export const city = config.city;
export const services = content.services(city);
export const floors = content.floors(city);
export const process = content.process;
export const faqs = content.faqs(city, business);
export const areaPages = city.areas.filter((a) => a.note);

export const abs = (path = "/") => `${city.url}${path === "/" ? "" : path}`;
const ID = `${city.url}/#business`;

export function businessSchema() {
  const a = business.address;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ID,
    name: business.name,
    description: `Luxury wood flooring sales, installation, refinishing and certified inspection in ${city.name}.`,
    url: city.url,
    telephone: business.phone,
    ...(business.email && { email: business.email }),
    ...(business.images.og && { image: abs(business.images.og) }),
    ...(a.street && {
      address: { "@type": "PostalAddress", streetAddress: a.street, addressLocality: a.locality, addressRegion: a.region, postalCode: a.postalCode, addressCountry: "US" },
    }),
    areaServed: [
      { "@type": "City", name: city.name, ...(city.region && { containedInPlace: { "@type": "State", name: city.region } }) },
      ...city.areas.map((x) => ({ "@type": "Place", name: `${x.name}, ${city.name}` })),
    ],
    knowsAbout: ["Hardwood flooring", "Engineered wood flooring", "Herringbone parquet", "Chevron parquet", "Wood floor refinishing", "Zero-VOC wood finishes", "Wood floor inspection", "Radiant heat wood flooring"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wood flooring services",
      itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: abs(`/services/${s.slug}`) } })),
    },
    potentialAction: { "@type": "ReserveAction", name: "Book a virtual consultation", target: business.bookingUrl },
    sameAs: business.sameAs.filter((u) => !u.startsWith(city.url)),
  };
}

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${city.url}/#website`,
  url: city.url,
  name: `${business.name} | ${city.name}`,
  publisher: { "@id": ID },
});

export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbSchema = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"], ...trail].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

export const serviceSchema = (name, description, path) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(path),
  serviceType: name,
  provider: { "@id": ID },
  areaServed: { "@type": "City", name: city.name },
});
