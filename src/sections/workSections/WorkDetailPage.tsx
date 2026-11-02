import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import PageIntro from "../../components/PageIntro";
import BackLink from "../../components/BackLink";
import { getWorkBySlug } from "../../data/workData/workData";

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? getWorkBySlug(slug) : undefined;
  return <article className="site-container detail-page">
    <BackLink to="/work">All experience</BackLink>
    {!role ? <PageIntro title="Role not found" description="This role is unavailable. Browse all experience to explore more work." /> : <>
      <PageIntro eyebrow="Experience" title={role.title} description={`${role.place} · ${role.when}`}>
        {role.logo?.src && <img src={role.logo.src} alt={role.logo.alt} className="media-frame h-24 w-24 rounded-2xl border object-contain p-3" />}
      </PageIntro>
      <Card><h2 className="section-title mb-5">Responsibilities and impact</h2>
        <ul className="prose-copy reading-copy list-disc space-y-3 pl-5">{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      </Card>
    </>}
  </article>;
}
