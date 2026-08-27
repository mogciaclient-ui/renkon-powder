import Image from "next/image";

type FooterProps = {
  brandName?: string;
};

export default function Footer({ brandName = "れんこんパウダー" }: FooterProps){return <footer className="border-t border-[#EFE7DB] py-10"><div className="container flex max-sm:flex-col gap-6 items-center justify-between"><div className="flex items-center gap-3"><Image src="/images/renkon-logo.png" alt="" width={46} height={46} className="h-[46px] w-[46px] object-contain"/><p className="serif text-lg tracking-[.14em]">{brandName}</p></div><p className="text-[10px] text-[#9b8e84]">© 2026 {brandName}</p></div></footer>}
