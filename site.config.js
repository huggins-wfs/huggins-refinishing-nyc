/**
 * ONE FILE TO CHANGE PER CITY
 * ------------------------------------------------------------------
 * 1. Set ACTIVE_CITY to a key from data/cities.js   e.g. "the-hamptons"
 *    or to any plain name for a new city            e.g. "Austin, TX"
 * 2. Deploy.
 *
 * Running many city sites from this one repo? Leave this file alone and
 * set the SITE_CITY environment variable on each deployment instead.
 */
const ACTIVE_CITY = "new-york-city";

const cities = require("./data/cities");

const business = {
  name: "Huggins Wood Floor Specialist",
  shortName: "Huggins",
  tagline: "Luxury wood flooring, installed and finished by hand",
  phone: "+19082326600",
  phoneDisplay: "908-232-6600",
  email: "", // optional, shown in the footer and schema when set
  bookingUrl: "https://www.gogreenwoodfloors.com/book-a-virtual-consultation",
  // Optional street address. Leave blank for a service-area business.
  address: { street: "", locality: "", region: "", postalCode: "" },
  yearsExperience: "30+",
  credentials: [
    "Certified Wood Flooring Inspector",
    "AIA & ASID continuing-education instructor",
    "Featured on NBC",
    "Zero-VOC finish specialists",
  ],
  sameAs: [
    "https://www.luxurywoodnyc.com/",
    "https://newyorkcitywoodfloors.com/",
    "https://www.gogreenwoodfloors.com/",
  ],
  // Optional photography. Drop files in /public and put paths here,
  // e.g. "/images/hero.jpg". Until then the site draws its own floors.
  images: { hero: "", og: "" },
};

const city = cities.get(process.env.SITE_CITY || ACTIVE_CITY);

module.exports = { business, city };
