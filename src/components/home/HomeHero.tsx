"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WORDS = [
  { text: "marketer", prefix: "Your best " },
  { text: "seller", prefix: "" },
  { text: "operator", prefix: "" },
];

const SLIDES = [
  { src: "/images/hero-slide-1.png", alt: "Marketing agent workflow" },
  { src: "/images/hero-slide-2.png", alt: "Sales agent workflow" },
  { src: "/images/hero-slide-3.png", alt: "Operations agent workflow" },
];

export function HomeHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((w) => (w + 1) % WORDS.length);
        setVisible(true);
      }, 250);
    }, 2800);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setSlideIdx((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(i);
  }, []);

  const word = WORDS[wordIdx];

  return (
    <section className="bg-canvas-white pt-[140px] pb-[30px]">
      <div className="mx-auto w-full max-w-[1080px] px-[15px] text-center">
        <p className="mb-5 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
          ENTERPRISE AI PLATFORM
        </p>

        <h1 className="mx-auto max-w-[920px] text-[64px] font-medium leading-[1] tracking-[-2px] text-midnight-graphite">
          <span
            className={`inline transition-opacity duration-250 ${visible ? "opacity-100" : "opacity-0"}`}
            aria-live="polite"
          >
            {word.prefix}
            <span className="text-agent-violet">{word.text}</span>
          </span>
          <br />
          <span>
            can&apos;t be everywhere.
            <br />
            Their AI agents can.
          </span>
        </h1>

        <div className="mx-auto mt-[26px] max-w-[460px]">
          {mounted ? (
            <form
              className="flex items-center rounded-full border-2.4 border-[#666]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="work-email"
                placeholder="Work email"
                aria-label="Work email"
                className="h-[54px] flex-1 rounded-full bg-transparent px-[25px] text-[16px] text-midnight-graphite outline-none placeholder:text-[#666]"
              />
              <button
                type="submit"
                className="mr-0 h-[54px] shrink-0 rounded-full bg-midnight-graphite px-[28px] text-[16px] font-medium text-canvas-white transition-colors hover:bg-[#333]"
              >
                Request a demo
              </button>
            </form>
          ) : (
            <div className="h-[54px] w-full rounded-full bg-[#E8EBF0]" aria-hidden />
          )}
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-[1080px] overflow-hidden px-[15px]">
        <div className="relative aspect-[1050/505] w-full overflow-hidden rounded-xl">
          {SLIDES.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ${i === slideIdx ? "opacity-100" : "pointer-events-none opacity-0"}`}
              sizes="(max-width: 1080px) 100vw, 1080px"
            />
          ))}
        </div>

        {mounted ? (
          <div className="mt-4 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setSlideIdx(i)}
                className={`h-2 rounded-full transition-all ${i === slideIdx ? "w-6 bg-midnight-graphite" : "w-2 bg-fog"}`}
              />
            ))}
          </div>
        ) : (
          <div className="mt-4 flex justify-center gap-2" aria-hidden>
            <span className="h-2 w-6 rounded-full bg-midnight-graphite" />
            <span className="h-2 w-2 rounded-full bg-fog" />
            <span className="h-2 w-2 rounded-full bg-fog" />
          </div>
        )}
      </div>
    </section>
  );
}
