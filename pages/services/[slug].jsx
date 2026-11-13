import DetailPage from "../../components/DetailPage";
import { business, city, services, floors } from "../../lib/site";

export const getStaticPaths = () => ({ paths: services.map((s) => ({ params: { slug: s.slug } })), fallback: false });
export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

export default function ServicePage({ slug }) {
  const s = services.find((x) => x.slug === slug);
  return (
    <DetailPage
      title={`${s.name} in ${city.name} | ${business.shortName}`}
      description={s.summary.split(". ")[0] + "."}
      path={`/services/${s.slug}`}
      trail={[[s.nav, `/services/${s.slug}`]]}
      eyebrow={`Services · ${city.name}`}
      h1={`${s.name} in ${city.name}`}
      summary={s.summary}
      sections={s.sections}
      faqs={s.faqs}
      visual={{ pattern: s.pattern, tone: s.tone }}
      related={[
        ...services.filter((x) => x.slug !== slug).map((x) => [x.nav, `/services/${x.slug}`]),
        [floors[0].name, `/flooring/${floors[0].slug}`],
      ]}
    />
  );
}
