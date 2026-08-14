import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://renkon-no-megumi.example.com"),
  title: "れんこんパウダー",
  description: "国産れんこんをまるごと、毎日のひとさじに。無添加・食物繊維豊富な、やさしいれんこんパウダー。",
  icons: {
    icon: "/images/renkon-logo.png",
    shortcut: "/images/renkon-logo.png",
    apple: "/images/renkon-logo.png",
  },
  openGraph: { title: "れんこんパウダー", description: "からだを想う、毎日のひとさじ。", type: "website", images: [{ url: "/images/hero.png", width: 1200, height: 900 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
