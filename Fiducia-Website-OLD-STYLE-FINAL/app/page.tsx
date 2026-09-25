"use client";

import { useEffect, useState } from "react";
import { timeline, works } from "./data";

const services = [
  ["01", "WEDDING FILM", "웨딩 필름", "두 사람만의 온도와 이야기를 한 편의 영화처럼 오래 남깁니다."],
  ["02", "INTERVIEW", "인터뷰", "사람의 목소리와 태도에 집중해 진정성 있는 메시지를 만듭니다."],
  ["03", "BRAND FILM", "브랜드 필름", "브랜드의 본질을 발견하고 고유한 이미지와 서사로 설계합니다."],
  ["04", "MUSIC VIDEO", "뮤직비디오", "음악과 아티스트의 세계를 감각적인 장면과 리듬으로 확장합니다."],
  ["05", "LONG & SHORT FILM", "장편 및 단편영화", "이야기의 호흡을 이해하고 기획부터 완성까지 함께 만듭니다."],
];

export default function Home() {
  const [active, setActive] = useState(2);
  const [opened, setOpened] = useState<number | null>(null);
  const [still, setStill] = useState(0);
  const selected = opened === null ? null : works[opened];

  useEffect(() => {
    document.body.style.overflow = opened === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  const openWork = (index: number) => { setOpened(index); setStill(0); };
  const moveWork = (direction: number) => setActive((active + direction + works.length) % works.length);
  const moveStill = (direction: number) => {
    if (!selected) return;
    setStill((still + direction + selected.gallery.length) % selected.gallery.length);
  };

  return <main>
    <header className="site-header">
      <a className="mini-brand" href="#top" aria-label="Fiducia Collective 홈"><img src="/media/fiducia-logo-white.png" alt="FIDUCIA COLLECTIVE"/></a>
      <nav aria-label="주요 메뉴"><a href="#works">WORKS</a><a href="#services">SERVICES</a><a href="#about">ABOUT</a><a className="nav-contact" href="#contact">CONTACT ↗</a></nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/AnSGSP2tx3M?autoplay=1&mute=1&loop=1&playlist=AnSGSP2tx3M&controls=0&modestbranding=1&playsinline=1&rel=0" title="Fiducia Collective Showreel" allow="autoplay; encrypted-media"/></div>
      <div className="hero-shade"/><div className="hero-grain"/>
      <div className="hero-controls"><a className="reel-link" href="https://youtu.be/AnSGSP2tx3M" target="_blank" rel="noreferrer"><span className="play">▶</span><span>2025 SHOWREEL</span></a></div>
    </section>

    <section className="intro section-shell">
      <p className="eyebrow">BUILT AROUND YOU</p>
      <h2>당신을 이해하고<br/>브랜드를 설계합니다</h2>
      <p className="intro-copy">피두사컬렉티브는 정해진 형식에 이야기를 끼워 맞추지 않습니다. 당신이 누구인지, 브랜드가 왜 존재하는지, 사람들에게 어떤 감정으로 기억되고 싶은지를 먼저 발견합니다. 충분한 대화에서 찾은 본질을 시선과 빛, 장면과 리듬으로 설계해 오직 당신과 브랜드만이 가질 수 있는 한 편의 영상으로 완성합니다.</p>
    </section>

    <section className="works" id="works">
      <div className="section-shell works-heading section-heading"><div><p className="eyebrow">RECENT WORKS</p><h2>최근 작품</h2></div><p>{String(active + 1).padStart(2,"0")} / {String(works.length).padStart(2,"0")} PORTFOLIO</p></div>
      <div className="work-carousel"><div className="work-track" style={{transform:`translateX(calc(50vw - ${active * 60}vw - ${active * 24}px - 30vw))`}}>{works.map((work,index)=><article className={`work-card ${index===active?"is-active":""}`} key={work.slug}>
        <button className="work-image" onClick={()=>openWork(index)} aria-label={`${work.title} 상세 보기`}><img src={work.image} alt={`${work.title} 스틸`}/><span className="work-arrow">VIEW ↗</span></button>
        <div className="work-info"><span>{work.no}</span><div><small>{work.type}</small><h3>{work.title}</h3></div><span>{work.role}</span><span>{work.year}</span></div>
        {work.award&&<p className="award-slot">AWARD — {work.award}</p>}
      </article>)}</div></div>
      <div className="section-shell work-nav"><button onClick={()=>moveWork(-1)} aria-label="이전 작품">←</button><div>{works.map((work,index)=><button className={index===active?"active":""} onClick={()=>setActive(index)} key={work.slug} aria-label={`${work.title} 보기`}/>)}</div><button onClick={()=>moveWork(1)} aria-label="다음 작품">→</button></div>
    </section>

    <section className="services" id="services"><div className="section-shell service-page">
      <div className="section-heading"><div><p className="eyebrow">WHAT WE CREATE</p><h2>본질을 발견하고<br/>장면으로 만듭니다</h2></div><p className="services-note">당신과 브랜드가 가진 고유한 이야기에 가장 어울리는 영상 언어를 함께 설계합니다.</p></div>
      <div className="service-list">{services.map(item=><article key={item[0]}><span>{item[0]}</span><div><b>{item[1]}</b><h3>{item[2]}</h3></div><p>{item[3]}</p></article>)}</div>
    </div></section>

    <section className="about section-shell" id="about"><div className="about-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="trust-bars"><span/><span/><span/></div><img className="about-mark" src="/media/fiducia-mark-white.png" alt="Fiducia symbol"/><span className="about-caption">FIDUCIA / TRUST</span></div><div className="about-copy"><p className="eyebrow">ABOUT FIDUCIA</p><h2>당신의 본질에서<br/>시작하는 장면</h2><p className="about-manifesto">좋은 영상은 멋진 화면보다<br/>정확한 이해에서 시작된다고 믿습니다.</p><p>피두사의 세 막대는 서로 다른 사람과 브랜드, 그리고 그 가능성을 상징합니다. 우리는 모두를 같은 방식으로 만들지 않습니다. 각자의 모양과 방향을 이해하고, 가장 자기다운 이야기가 선명해지는 지점을 찾아 하나의 세계로 완성합니다.</p></div></section>

    <section className="filmography section-shell"><div className="section-heading"><div><p className="eyebrow">FILMOGRAPHY</p><h2>참여 작품</h2></div><p>2021—2026<br/>CHRONOLOGICAL</p></div><div className="history-list">{[...timeline].reverse().map(group=><article key={group.year}><h3>{group.year}</h3><div>{group.items.map((item,index)=><div className="history-entry" key={index}><span>{item[0]}</span><strong>{item[1]}</strong><span>{item[2]}</span></div>)}</div></article>)}</div></section>

    <section className="contact section-shell" id="contact"><p className="eyebrow">LET’S TALK</p><h2>Your story<br/>starts here</h2><div className="contact-actions"><a href="http://pf.kakao.com/_WLxapn" target="_blank" rel="noreferrer"><span>카카오톡 채널</span><span>↗</span></a><a href="https://www.instagram.com/fiduciacollective/" target="_blank" rel="noreferrer"><span>인스타그램</span><span>↗</span></a></div><div className="contact-bottom"><img src="/media/fiducia-logo-white.png" alt="FIDUCIA COLLECTIVE"/><div><a href="http://pf.kakao.com/_WLxapn" target="_blank" rel="noreferrer">KAKAO ↗</a><a href="https://www.instagram.com/fiduciacollective/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://www.youtube.com/@%ED%94%BC%EB%91%90%EC%82%AC%EC%BB%AC%EB%A0%89%ED%8B%B0%EB%B8%8C" target="_blank" rel="noreferrer">YOUTUBE ↗</a></div><p>© 2026 FIDUCIA COLLECTIVE</p></div></section>

    {selected&&<div className="work-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} 상세 스틸`}><button className="modal-close" onClick={()=>setOpened(null)}>CLOSE ×</button><div className="modal-meta"><div><span>{selected.type} · {selected.year}</span><h2>{selected.title}</h2></div><div><strong>{selected.role}</strong>{selected.award&&<em>{selected.award}</em>}</div></div><div className="gallery-window"><div className="gallery-track" style={{transform:`translateX(calc(12vw - ${still * 78}vw))`}}>{selected.gallery.map((image,index)=><img className={index===still?"active":""} src={image} alt={`${selected.title} 스틸컷 ${index+1}`} key={image}/>)}</div>{selected.gallery.length>1&&<><button className="gallery-prev" onClick={()=>moveStill(-1)} aria-label="이전 스틸컷">←</button><button className="gallery-next" onClick={()=>moveStill(1)} aria-label="다음 스틸컷">→</button></>}</div><div className="gallery-count">{String(still+1).padStart(2,"0")} / {String(selected.gallery.length).padStart(2,"0")}</div>{opened===0&&<div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/AnSGSP2tx3M?rel=0" title="Fiducia Collective Showreel" allowFullScreen/></div>}</div>}
  </main>;
}
