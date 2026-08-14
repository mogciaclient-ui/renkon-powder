"use client";

import { useState } from "react";
import { voices } from "../data/voices";

const featured = voices.slice(0, 2);
const remaining = voices.slice(2);

export default function Voice() {
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleVoices = remaining.slice(0, visibleCount);

  return (
    <section id="voice" className="section bg-white lotus-bg">
      <div className="container">
        <div className="mb-14 text-center">
          <span className="serif text-2xl font-normal tracking-wider text-[#e8dccb] md:text-3xl">
            100 VOICES
          </span>
          <h2 className="reference-title !mb-0">100人のお客様の声</h2>
          <p className="mt-4 text-xs text-[#8d8178]">パンフレットに寄せられた100件の声をご紹介します。</p>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-2">
          {featured.map((voice) => (
            <article key={voice.number} className="rounded-[24px] bg-[#F4EBDD]/55 p-7 md:p-9">
              <p className="mb-5 text-xs tracking-[.16em] text-[#b88d62]">
                VOICE {String(voice.number).padStart(3, "0")}
              </p>
              <p className="serif whitespace-pre-line text-[15px] leading-8">「{voice.text}」</p>
              <p className="mt-5 text-xs text-[#887a70]">{voice.author}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visibleVoices.map((voice) => (
            <article key={voice.number} className="rounded-[18px] border border-[#EFE7DB] p-6">
              <p className="mb-4 text-[10px] tracking-[.14em] text-[#b88d62]">
                VOICE {String(voice.number).padStart(3, "0")}
              </p>
              <p className="text-sm leading-7">{voice.text}</p>
              <p className="mt-4 text-[10px] text-[#9a8e84]">{voice.author}</p>
            </article>
          ))}
        </div>

        {visibleCount < remaining.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((count) => Math.min(count + 12, remaining.length))}
              className="btn btn-light"
            >
              もっと見る（{Math.min(visibleCount + 2, voices.length)} / {voices.length}）＋
            </button>
          </div>
        )}

        <p className="mt-10 text-center text-[10px] leading-5 text-[#9a8e84]">
          ※個人の感想であり、商品の効果・効能を保証するものではありません。
        </p>
      </div>
    </section>
  );
}
