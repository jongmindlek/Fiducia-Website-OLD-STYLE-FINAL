import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components";
import { works } from "../../data";

export function generateStaticParams() {
  return works.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = works.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const work = works[index];
  const next = works[(index + 1) % works.length];

  return <PageShell>
    <section className="project-hero">
      <Link className="project-back" href="/work">← ALL WORKS</Link>
      <div className="project-kicker">{work.no} / {work.type}</div>
      <h1>{work.title}</h1>
      <div className="project-summary">
        <p>{work.statement}</p>
        <div className="project-facts"><span>YEAR<br/>{work.year}</span><span>ROLE<br/>{work.role}</span>{work.award&&<span>AWARD<br/>{work.award}</span>}</div>
      </div>
    </section>
    <section className="project-gallery" aria-label={`${work.title} 스틸컷`}>
      {work.gallery.map((image, imageIndex) => <figure key={image}><img src={image} alt={`${work.title} 스틸컷 ${imageIndex + 1}`} loading={imageIndex > 1 ? "lazy" : "eager"}/></figure>)}
    </section>
    <Link className="project-next" href={`/work/${next.slug}`}><span>NEXT PROJECT</span><span>{next.title} →</span></Link>
  </PageShell>;
}
