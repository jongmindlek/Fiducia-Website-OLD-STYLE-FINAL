const gallery = (folder: string, count: number) => Array.from(
  { length: count },
  (_, index) => `/media/projects/${folder}/still-${String(index + 1).padStart(2, "0")}.jpg`,
);

export const works = [
  { slug: "red-hot-chili-summer", no: "01", title: "여진(L∞na) ‘Red Hot Chili Summer’", type: "MUSIC VIDEO", role: "조명감독", year: "2026", image: "/media/portfolio/01/cover.jpg", statement: "여름의 열기와 아티스트의 에너지를 빛과 색의 리듬으로 확장했습니다.", gallery: gallery("01", 1) },
  { slug: "adult-child", no: "02", title: "어른아이", type: "SHORT FILM", role: "촬영 및 조명감독", year: "2024", image: "/media/portfolio/02/cover.jpg", statement: "인물의 흔들리는 마음을 가까운 시선과 절제된 빛으로 따라갑니다.", gallery: gallery("02", 7) },
  { slug: "della-in-seoul", no: "03", title: "서울의 델라", type: "SHORT FILM", role: "촬영 및 조명감독", year: "2026", image: "/media/portfolio/03/cover.jpg", statement: "서울이라는 도시 안에서 인물의 시간과 관계가 교차하는 순간을 담았습니다.", gallery: gallery("03", 9) },
  { slug: "because-we-are-family", no: "04", title: "우리는 가족이니까", type: "SHORT FILM", role: "촬영감독", year: "2024", image: "/media/portfolio/04/cover.jpg", statement: "가족이라는 가까운 관계 안의 거리와 온도를 차분한 화면에 담았습니다.", gallery: gallery("04", 15) },
  { slug: "broken-and-connected", no: "05", title: "지나고 이어져 망가진", type: "SHORT FILM", role: "연출감독", year: "2024", image: "/media/portfolio/05/cover.jpg", statement: "지나간 것과 남겨진 것 사이에서 이어지는 감정을 한 편의 이야기로 완성했습니다.", award: "전국대학독립영화제 본선 입상", gallery: gallery("05", 7) },
  { slug: "wall", no: "06", title: "벽", type: "SHORT FILM", role: "조명감독", year: "2023", image: "/media/portfolio/06/cover.jpg", statement: "닫힌 공간의 긴장과 인물의 심리를 빛의 대비로 표현했습니다.", gallery: gallery("06", 7) },
];

export const timeline = [
  { year: "2026", items: [["뮤직비디오", "여진(L∞na) ‘Red Hot Chili Summer’", "조명감독"], ["단편영화", "서울의 델라", "촬영 및 조명감독"]] },
  { year: "2025", items: [["단편영화", "클로즈업", "조명감독 · 충무로단편독립영화제 입상 · 제2회 화성영화제 장려상"], ["광고", "탑텐키즈", "촬영팀"], ["광고", "해밀로직스", "촬영팀"], ["광고", "늘봄 노타비스", "촬영팀"]] },
  { year: "2024", items: [["단편영화", "우리는 가족이니까", "촬영감독"], ["단편영화", "어른아이", "촬영 및 조명감독"], ["뮤직비디오", "blueprint! / Kash bang", "개퍼"], ["웹드라마", "레오를 죽이는 4가지 방법", "조명팀"], ["홍보 영상", "헌법재판소 공식 영상", "조명팀"], ["광고", "알파인더스트리", "조명팀"], ["광고", "동경규동", "조명팀"]] },
  { year: "2023", items: [["단편영화", "맨홀 속으로", "조명감독"], ["단편영화", "벽", "조명감독"], ["단편영화", "총성", "촬영 및 조명감독"], ["단편영화", "지나고 이어져 망가진", "연출 · 전국대학독립영화제 본선 입상"]] },
  { year: "2022", items: [["단편영화", "잠자리", "연출"]] },
  { year: "2021", items: [["단편영화", "호치킨", "편집감독"], ["단편영화", "300만원 짜리 사진", "편집감독"], ["단편영화", "리미티드", "편집감독"], ["단편영화", "가장 완벽한 순간", "연출"]] },
];
