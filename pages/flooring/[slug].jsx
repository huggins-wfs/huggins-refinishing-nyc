import DetailPage from "../../components/DetailPage";
import { business, city, services, floors } from "../../lib/site";

export const getStaticPaths = () => ({ paths: floors.map((f) => ({ params: { slug: f.slug } })), fallback: false });
export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

export default function FloorPage({ slug }) {
  const f = floors.find((x) => x.slug === slug);
  return (
    <DetailPage
      title={`${f.name} Flooring in ${city.name} | ${business.shortName}`}
      description={f.summary.split(". ")[0] + "."}
      path={`/flooring/${f.slug}`}
      trail={[[f.name, `/flooring/${f.slug}`]]}
      eyebrow={`Flooring · ${city.name}`}
      h1={`${f.name} in ${city.name}`}
      summary={f.summary}
      sections={f.sections}
      facts={f.facts}
      visual={{ pattern: f.pattern, tone: f.tone, width: f.width }}
      related={[
        ...floors.filter((x) => x.slug !== slug).map((x) => [x.name, `/flooring/${x.slug}`]),
        [services[0].nav, `/services/${services[0].slug}`],
      ]}
    />
  );
}
