import Image from "next/image";

const points = [
  <><b>国産れんこん</b><strong>100%</strong></>,
  <><b>無添加・無着色</b><span>保存料不使用</span></>,
  <><b>使いやすい</b><span>パウダータイプ</span></>,
];

export default function Hero(){return <section id="top" className="hero-paper pt-24 lg:pt-28"><div className="container min-h-[680px] lg:min-h-[720px] grid lg:grid-cols-[.85fr_1.15fr] items-center gap-8 lg:gap-12 py-12 lg:py-16"><div className="relative z-10"><h1 className="serif text-[clamp(34px,4.1vw,58px)] tracking-[.12em] leading-[1.75] font-normal">毎日の健康を、<br/>れんこんのチカラで。</h1><p className="mt-7 text-[13px] lg:text-[14px] leading-[2.15]">国産れんこんを丁寧に乾燥・粉末化した、<br/>無添加のれんこんパウダー。<br/>いつもの食事にサッとプラスするだけで、<br/>食物繊維や栄養を手軽に補えます。</p><div className="grid grid-cols-3 gap-2 mt-8 max-w-[440px]">{points.map((p,i)=><div key={i} className="aspect-square rounded-full border border-[#cda976] flex flex-col items-center justify-center text-center text-[11px] leading-6 bg-white/60">{p}</div>)}</div></div><div className="relative z-10 h-[480px] lg:h-[620px]"><Image src="/images/renkon-hero.png" alt="れんこんパウダーの商品パッケージ" fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-contain"/></div></div></section>}
