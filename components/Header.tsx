import Image from "next/image";
import type { ReactNode } from "react";
import { Instagram } from "lucide-react";

type HeaderProps = {
  brandName?: ReactNode;
  instagramUrl?: string;
};

export default function Header({
  brandName = <><span>れんこん</span><br /><span>パウダー</span></>,
  instagramUrl,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/92 backdrop-blur-sm">
      <div className="wide-container h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/renkon-logo.png"
            alt=""
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain"
          />
          <span className="serif text-sm tracking-[.18em] leading-5">
            {brandName}
          </span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="https://lin.ee/OhfkLHA">
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="LINEで友だち追加"
              height="36"
              className="h-9 w-auto"
            />
          </a>
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="いい麺亭のInstagramを見る"
              className="grid h-9 w-9 place-items-center rounded-full border border-[#d8c6b0] text-[#8b6d53] hover:bg-[#f7efe5]"
            >
              <Instagram size={18} strokeWidth={1.6} />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
