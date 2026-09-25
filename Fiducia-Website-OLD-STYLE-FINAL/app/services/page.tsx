import { PageIntro, PageShell } from "../components";

const services=[
  {no:"01",en:"WEDDING FILM",ko:"웨딩 필름",copy:"가장 가까운 시선으로 하루의 온도와 감정을 오래 남깁니다. 정해진 장면을 반복하기보다 두 사람의 분위기와 관계가 자연스럽게 드러나는 순간을 담습니다."},
  {no:"02",en:"INTERVIEW",ko:"인터뷰",copy:"사람의 목소리와 표정에 집중해 진정성 있는 메시지를 전합니다. 질문과 대화의 흐름부터 화면의 온도까지 이야기의 성격에 맞춰 설계합니다."},
  {no:"03",en:"BRAND FILM",ko:"브랜드 필름",copy:"브랜드가 시작된 이유와 지키고 싶은 가치를 발견해 하나의 이야기로 만듭니다. 설명보다 감정으로 기억되는 브랜드의 장면을 완성합니다."},
  {no:"04",en:"MUSIC VIDEO",ko:"뮤직비디오",copy:"음악의 분위기와 아티스트의 세계를 감각적인 장면으로 확장합니다. 사운드의 리듬과 감정을 이미지의 흐름으로 번역합니다."},
  {no:"05",en:"LONG & SHORT FILM",ko:"장편 및 단편영화",copy:"이야기의 호흡을 이해하고 기획부터 완성까지 함께 만들어갑니다. 인물과 장면이 가진 감정을 영화적인 시선으로 섬세하게 담습니다."}
];

export default function ServicesPage(){return <PageShell><PageIntro eyebrow="WHAT WE CREATE" title={<>필요한 이야기를<br/>정확하게 만듭니다</>} copy="형식을 먼저 정하기보다 무엇을 전해야 하는지부터 살핍니다. 프로젝트의 목적과 이야기의 성격을 이해하고 가장 알맞은 표현 방식을 함께 찾습니다."/><section className="services service-page"><div className="service-list">{services.map(s=><article key={s.no}><span>{s.no}</span><small>{s.en}</small><h3>{s.ko}</h3><p>{s.copy}</p></article>)}</div></section><section className="process compact-process"><p className="eyebrow">OUR PROCESS</p><div className="process-list"><article><span>01</span><h2>Conversation</h2><p>만들고 싶은 것과 전하고 싶은 이야기를 충분히 나눕니다.</p></article><article><span>02</span><h2>Direction</h2><p>핵심 메시지를 정리하고 이미지와 장면의 방향을 설계합니다.</p></article><article><span>03</span><h2>Production</h2><p>기획과 촬영, 후반작업을 거쳐 하나의 영상으로 완성합니다.</p></article></div></section></PageShell>}
