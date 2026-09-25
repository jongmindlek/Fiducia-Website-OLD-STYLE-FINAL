import Link from "next/link";

const instagram = "https://www.instagram.com/fiduciacollective/";
const youtube = "https://www.youtube.com/@%ED%94%BC%EB%91%90%EC%82%AC%EC%BB%AC%EB%A0%89%ED%8B%B0%EB%B8%8C";

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Fiducia Collective 홈"><img src="/media/fiducia-logo-white.png" alt="Fiducia Collective" /></Link>
    <nav aria-label="주요 메뉴"><Link href="/work">WORKS</Link><Link href="/services">SERVICES</Link><Link href="/about">ABOUT</Link><Link href="/contact" className="nav-contact">CONTACT ↗</Link></nav>
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-lead"><span>LET’S MAKE SOMETHING<br/>WORTH REMEMBERING.</span><Link href="/contact">프로젝트 이야기하기 ↗</Link></div>
    <div className="footer-bottom">
      <img src="/media/fiducia-logo-white.png" alt="Fiducia Collective" />
      <div className="socials"><a href="http://pf.kakao.com/_WLxapn" target="_blank" rel="noreferrer">KAKAO ↗</a><a href={instagram} target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href={youtube} target="_blank" rel="noreferrer">YOUTUBE ↗</a></div>
      <p>사업자등록번호 872-28-01941<br/>© 2026 FIDUCIA COLLECTIVE</p>
    </div>
  </footer>;
}

export function PageShell({ children }: { children: React.ReactNode }) { return <><Header/><main>{children}</main><Footer/></>; }

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy: string }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro-copy">{copy}</p></section>;
}
