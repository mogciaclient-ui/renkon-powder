import Image from "next/image";
const recipes=[
  {title:"朝のヨーグルト",image:"/images/renkon-yogurt.png"},
  {title:"甘酒に入れて",image:"/images/renkon-amasake.png"},
  {title:"ハンバーグに練り込んで",image:"/images/renkon-hanba-gu.png"},
  {title:"やさしいパンケーキ",image:"/images/renkon-pancake.png"},
  {title:"ぬるま湯に溶かして",image:"/images/renkon-yu.png"},
  {title:"毎日のお味噌汁",image:"/images/renkon-miso.png"},
];
export default function Recipe(){return <section id="recipe" className="section paper-band"><div className="wide-container"><h2 className="reference-title">いろいろなアレンジで楽しめます</h2><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{recipes.map(({title,image})=><article key={title} className="group text-center"><div className="relative aspect-square overflow-hidden"><Image src={image} alt={`れんこんパウダーを使った${title}`} fill loading="lazy" sizes="(max-width:768px) 50vw, 17vw" className="object-cover group-hover:scale-105 transition duration-700"/></div><h3 className="serif text-[15px] mt-4">{title}</h3><p className="text-[10px] leading-5 mt-2">いつものメニューに<br/>食物繊維をプラス。</p></article>)}</div></div></section>}
