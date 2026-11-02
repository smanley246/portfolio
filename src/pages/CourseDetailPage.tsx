import { useParams } from "react-router-dom";
import Card from "../components/Card";
import PageIntro from "../components/PageIntro";
import BackLink from "../components/BackLink";
import TagList from "../components/TagList";
import { getCourseBySlug } from "../data/educationData/educationData";

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;
  return <article className="site-container detail-page">
    <BackLink to="/education">All education</BackLink>
    {!course ? <PageIntro title="Course not found" description="This course is unavailable. Browse all education to explore more courses." /> : <>
      <PageIntro eyebrow="Education" title={`${course.code} — ${course.title}`} description={[course.term, course.badge].filter(Boolean).join(" · ")}>
        {course.image?.src && <img src={course.image.src} alt={course.image.alt} className="media-frame h-24 w-24 rounded-2xl border object-cover" />}
        <TagList tags={course.tags} />
      </PageIntro>
      {course.description?.length ? <Card><h2 className="section-title mb-5">Topics &amp; outcomes</h2>
        {Array.isArray(course.description) ? <ul className="prose-copy reading-copy list-disc space-y-3 pl-5">{course.description.map(item => <li key={item}>{item}</li>)}</ul> : <p className="prose-copy reading-copy whitespace-pre-line">{course.description}</p>}
      </Card> : null}
    </>}
  </article>;
}
