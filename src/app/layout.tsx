import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garimto.kr"),
  title: {
    default: "가림토 GARIMTO — 정통 보드게임을 다시 재미있게",
    template: "%s · GARIMTO",
  },
  description:
    "가림토는 바둑, 장기 등 정통 보드게임을 현대적으로 재해석하는 인디 게임 스튜디오입니다. 대표작 '바둑한판'을 지금 플레이해보세요.",
  keywords: ["가림토", "바둑한판", "GARIMTO", "바둑", "인디 게임", "KataGo AI", "온라인 바둑"],
  openGraph: {
    title: "가림토 GARIMTO",
    description: "정통 보드게임을 다시 재미있게 — 바둑한판을 만든 인디 게임 스튜디오",
    url: "https://garimto.kr",
    siteName: "GARIMTO",
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#dcb35c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
