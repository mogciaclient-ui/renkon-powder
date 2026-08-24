import Image from "next/image";

export default function Header() {
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
            れんこん
            <br />
            パウダー
          </span>
        </a>
        <a href="https://lin.ee/OhfkLHA">
          <img
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="友だち追加"
            height="36"
            className="h-9 w-auto"
          />
        </a>
      </div>
    </header>
  );
}
