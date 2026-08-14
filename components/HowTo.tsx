import { Coffee, GlassWater, PackageOpen, Utensils } from "lucide-react";

const steps = [
  { icon: PackageOpen, text: "コップやお椀に\nれんこんパウダーを\n入れます。" },
  { icon: GlassWater, text: "お好みの飲み物や\nお料理にプラスします。" },
  { icon: Utensils, text: "よくかき混ぜて\n溶かします。" },
  { icon: Coffee, text: "できあがり！\n毎日の食事に手軽に\n取り入れられます。" },
];

export default function HowTo() {
  return (
    <section id="howto" className="section bg-[#fcfaf7]">
      <div className="container">
        <h2 className="reference-title">使い方はとっても簡単！</h2>

        <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-5 snap-x snap-mandatory">
          {steps.map(({ icon: Icon, text }, index) => (
            <article
              key={index}
              className="relative min-w-[220px] lg:min-w-0 lg:flex-1 snap-start rounded-[22px] border border-[#eadbc7] bg-white px-6 py-9 text-center shadow-[0_8px_30px_rgba(111,82,48,.06)]"
            >
              <p className="text-[10px] tracking-[.2em] text-[#b88d62]">
                STEP <span className="text-base">0{index + 1}</span>
              </p>
              <div className="mx-auto my-6 grid h-24 w-24 place-items-center rounded-full bg-[#f7efe4] text-[#a77f53]">
                <Icon size={42} strokeWidth={1.2} />
              </div>
              <p className="whitespace-pre-line text-[13px] leading-7">{text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-9 w-fit rounded-full border border-[#d8b987] bg-white px-10 py-5 text-center serif text-[15px] leading-7">
          1回2gを、1日2回がおすすめ
        </div>
      </div>
    </section>
  );
}
