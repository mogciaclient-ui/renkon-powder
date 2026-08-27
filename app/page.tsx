import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Product from "../components/Product";
import HowTo from "../components/HowTo";
import Recipe from "../components/Recipe";
import Voice from "../components/Voice";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  const jsonLd = { "@context":"https://schema.org", "@type":"Product", name:"れんこんパウダー", description:"国産れんこん100%の無添加パウダー", brand:{"@type":"Brand",name:"れんこんパウダー"}, offers:{"@type":"Offer",priceCurrency:"JPY",price:"1980",availability:"https://schema.org/InStock"} };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><Header instagramUrl="https://www.instagram.com/iimono_mitsuse?utm_source=qr"/><main><Hero/><Feature/><Product/><HowTo/><Recipe/><Voice/><FAQ/></main><Footer/></>;
}
