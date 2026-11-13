import DetailPage from "../../components/DetailPage";
import { business, city, services, floors, areaPages } from "../../lib/site";

// Only areas with their own written note get a page. Name-only pages are
// thin content and hurt rankings, so they are deliberately not generated.
export const getStaticPaths = () => ({ paths: areaPages.map((a) => ({ params: { slug: a.slug } })), fallback: false });
export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

export default function AreaPage({ slug }) {
  const a = areaPages.find((x) => x.slug === slug);
  const place = `${a.name}, ${city.short}`;
  return (
    <DetailPage
      title={`Luxury Wood Flooring in ${place} | ${business.shortName}`}
      description={`Wood floor installation, refinishing and restoration in ${place}. ${a.note.split(". ")[0]}.`}
      path={`/areas/${a.slug}`}
      trail={[[a.name, `/areas/${a.slug}`]]}
      eyebrow={`Areas · ${city.name}`}
      h1={`Luxury wood flooring in ${a.name}`}
      summary={a.note}
      sections={[
        { h: `What we do in ${a.name}`, p: `${business.name} supplies and installs new wood floors, refinishes and restores existing ones, and provides certified inspections throughout ${a.name}.` },
        { h: "Working in the building", p: city.logistics },
        { h: "Climate and wood movement", p: city.climate },
      ]}
      visual={{ pattern: "herringbone", tone: "natural" }}
      related={[
        ...services.map((x) => [x.nav, `/services/${x.slug}`]),
        ...floors.slice(0, 2).map((x) => [x.name, `/flooring/${x.slug}`]),
      ]}
    />
  );
}
