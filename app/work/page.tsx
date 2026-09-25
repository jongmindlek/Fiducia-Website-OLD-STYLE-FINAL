import { PageIntro, PageShell } from "../components";
import { works } from "../data";
import Link from "next/link";

export default function WorkPage(){return <PageShell><PageIntro eyebrow="SELECTED WORK" title={<>Stories in<br/><em>motion.</em></>} copy="브랜드와 사람, 음악과 영화. 서로 다른 이야기마다 가장 어울리는 시선과 리듬을 찾아 완성한 피두사의 작업입니다."/><section className="work-list">{works.map((work)=><Link className="work-row" href={`/work/${work.slug}`} key={work.slug}><div className="work-number">{work.no}</div><div className="work-image"><img src={work.image} alt={`${work.title} 스틸`}/><span>VIEW PROJECT ↗</span></div><div className="work-detail"><small>{work.type} · {work.year}</small><h2>{work.title}</h2><p>{work.statement}</p><div className="role">ROLE — {work.role}</div>{work.award&&<div className="award">AWARD — {work.award}</div>}</div></Link>)}</section></PageShell>}
