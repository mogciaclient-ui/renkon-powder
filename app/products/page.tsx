import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import { ArrowDown, ExternalLink, MapPin } from "lucide-react";
import { shopAreas } from "../../data/shopAreas";

const products = [
  {
    name: "おはぎ",
    image: "/images/ohagi.png",
    prices: ["1個 150円", "3個 450円", "5個 700円"],
  },
  { name: "きなこおはぎ", image: "/images/kinako.png", prices: ["5個 700円"] },
  {
    name: "桜餅",
    image: "/images/sakura.png",
    prices: ["1個 150円", "5個 700円"],
    description: "もち米一粒一粒にまごころをこめた、手つつみの商品です。",
  },
  { name: "わらび餅", image: "/images/warabi.png", prices: ["300円"] },
  {
    name: "赤飯",
    image: "/images/sekihan.png",
    prices: ["1パック 小 300円", "1パック 大 400円"],
    description: "佐賀県産もち米と北海道産十勝小豆のコラボ商品。丁寧に蒸し上げた小豆たっぷりの商品が、お客様に喜ばれています。",
  },
  {
    name: "あんもち",
    image: "/images/anmochi.png",
    prices: ["ヨモギ・白セット 5個 700円"],
  },
  { name: "こもち", image: "/images/komochi.png", prices: ["10個 700円"] },
  {
    name: "かしわもち",
    image: "/images/kashiwa.png",
    prices: ["1個 150円", "5個セット 700円"],
    description: "清流でたくましく育ったお米を、丁寧に搗き上げました。",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header
        brandName="いい麺亭"
        instagramUrl="https://www.instagram.com/iimono_mitsuse?utm_source=qr"
      />
      <main>
        <section id="top" className="products-paper pt-[76px]">
          <div className="container flex min-h-[calc(100svh-76px)] max-w-5xl items-center py-16 sm:min-h-[680px] sm:py-24 lg:min-h-[720px]">
            <div className="mx-auto max-w-[620px] text-center">
              <p className="mb-5 text-[10px] tracking-[.28em] text-[#a9825b]">AUTUMN EQUINOX</p>
              <h1 className="serif text-[clamp(34px,5vw,56px)] font-normal leading-[1.65] tracking-[.12em]">
                <span className="block text-[23px] tracking-[.1em] sm:text-[clamp(30px,3.5vw,42px)]">お彼岸に</span>
                <span className="block whitespace-nowrap text-[27px] tracking-[.06em] sm:text-[inherit] sm:tracking-[inherit]">
                  いつものやさしい味を
                </span>
              </h1>
              <p className="mt-6 text-[13px] leading-[2.1] text-[#6f6259] sm:text-sm">
                ご家族で囲むひとときや、<br className="sm:hidden" />大切な方を想う日に。<br />
                おはぎをはじめ、昔ながらの味をご用意しています。
              </p>
              <div className="mx-auto mt-9 grid max-w-[430px] gap-3 sm:grid-cols-2">
                <a href="#products" className="btn min-h-14 bg-[#a9825b] px-7 text-white">
                  商品を見る <ArrowDown size={15} />
                </a>
                <a href="#shop" className="btn min-h-14 border border-[#bfa582] bg-white/80 px-7">
                  販売店舗を見る <MapPin size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-[76px] bg-white py-20 sm:py-24 lg:py-28">
          <div className="wide-container">
            <div className="mb-11 text-center sm:mb-14">
              <span className="eyebrow">OUR PRODUCTS</span>
              <h2 className="section-title serif">年中お楽しみいただける<br className="sm:hidden" />商品</h2>
              <p className="mt-4 text-[13px] leading-7 text-[#786b61]">
                季節を問わずお楽しみいただける、<br />定番の商品をご用意しています。
              </p>
              <p className="mx-auto mt-5 max-w-2xl border-y border-[#ded1c2] px-3 py-4 text-left text-[11px] leading-6 text-[#75675e] sm:px-6 sm:text-center sm:text-xs">
                <strong className="font-normal text-[#9a704b]">健康宣言：</strong>
                おはぎやあん餅に使用する「あんこ」は、原材料にブドウ糖果糖液糖、食用油脂、添加物としてグリシン、pH調整剤、重曹、乳化剤等を一切使用しておりません。
              </p>
              <p className="mt-2 text-[10px] text-[#9a8e84]">※価格はすべて税込です。</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
              {products.map((product) => (
                <article key={product.name} className="flex flex-col text-center">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#f7f1e8]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="serif mt-4 text-[15px] tracking-[.1em] sm:text-base">{product.name}</h3>
                  <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[12px] leading-6 text-[#6f5c4c] sm:text-[13px]">
                    {product.prices.map((price) => <span key={price}>{price}</span>)}
                  </div>
                  {product.description && (
                    <p className="mt-3 text-left text-[10px] leading-[1.9] text-[#81746a] sm:text-[11px]">
                      {product.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
            <article className="mx-auto mt-16 grid max-w-5xl overflow-hidden border-y border-[#ded1c2] bg-[#fffdfa]/80 md:grid-cols-2 md:items-center lg:mt-24">
              <div className="px-6 py-10 text-center sm:px-10 md:px-12 md:py-12 md:text-left lg:px-16">
                <span className="eyebrow">RECOMMENDED</span>
                <h3 className="serif mt-3 text-[26px] font-normal tracking-[.1em] sm:text-[30px]">れんこんパウダー</h3>
                <p className="mt-5 text-[13px] leading-7 text-[#786b61]">商品説明は現在確認中です。</p>
                <p className="serif mt-6 text-lg tracking-[.08em]">価格：確認中</p>
                <a href="/" className="btn mt-7 min-h-14 bg-[#a9825b] px-9 text-white">
                  詳しくはこちら <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="relative aspect-[5/4] min-h-[260px] md:order-last md:aspect-square">
                <Image
                  src="/images/renkon.png"
                  alt="れんこんパウダー"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </section>

        <section className="products-message-paper py-20 text-center sm:py-24">
          <div className="container max-w-2xl">
            <h2 className="serif text-[clamp(26px,4vw,36px)] font-normal leading-[1.7] tracking-[.1em]">
              お彼岸にも、<br className="sm:hidden" />日々のおやつにも。
            </h2>
            <p className="mt-7 text-[13px] leading-[2.2] text-[#70645b] sm:text-sm">
              おはぎ、お餅、赤飯。<br />昔から親しまれてきた味を、<br />日々の暮らしの中でもお楽しみください。
            </p>
          </div>
        </section>

        <section id="shop" className="scroll-mt-[76px] bg-[#fffdfa] py-20 sm:py-24 lg:py-28">
          <div className="container max-w-4xl">
            <div className="mb-11 text-center sm:mb-14">
              <span className="eyebrow">SHOP</span>
              <h2 className="section-title serif">お近くの店舗で<br />お求めいただけます。</h2>
              <p className="mt-4 text-[13px] leading-7 text-[#786b61]">
                商品は各販売店舗にてお買い求めいただけます。<br className="hidden sm:block" />
                お近くの店舗をお探しください。
              </p>
            </div>

            <div>
              {shopAreas.map((shopArea) => (
                <div key={shopArea.area}>
                  <div className="mb-5 flex items-center justify-between border-b border-[#ded1c2] pb-4 sm:px-3">
                    <h3 className="serif text-[17px] tracking-[.08em] sm:text-xl">{shopArea.area}</h3>
                    <span className="text-xs text-[#8d7e73]">{shopArea.shops.length}店舗</span>
                  </div>
                  <div className="grid gap-px bg-[#e5d9ca] sm:grid-cols-2">
                    {shopArea.shops.map((shop) => (
                      <article key={shop.name} className="bg-white p-5 sm:p-6">
                        <h3 className="serif text-base tracking-[.08em]">{shop.name}</h3>
                        <address className="mt-3 not-italic text-xs leading-6 text-[#756960]">{shop.address}</address>
                        <a
                          href={shop.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#bda27f] text-xs text-[#765d43]"
                        >
                          Google Mapsで見る <ExternalLink size={13} />
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="products-bottom-paper py-20 text-center sm:py-24">
          <div className="container">
            <h2 className="serif text-[clamp(27px,4vw,38px)] font-normal leading-[1.7] tracking-[.1em]">
              お近くの店舗で<br />お待ちしております。
            </h2>
            <a href="#shop" className="btn mt-8 min-h-14 bg-[#a9825b] px-10 text-white">
              販売店舗を見る <ArrowDown size={15} className="rotate-180" />
            </a>
          </div>
        </section>
      </main>
      <Footer brandName="いい麺亭" />
    </>
  );
}
