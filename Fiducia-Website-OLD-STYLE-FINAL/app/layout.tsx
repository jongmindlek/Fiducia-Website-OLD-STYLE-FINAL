import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fiducia Collective — Creative Production",
  description: "브랜드와 사람의 이야기를 오래 기억되는 장면으로 만드는 크리에이티브 프로덕션, 피두사컬렉티브.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
