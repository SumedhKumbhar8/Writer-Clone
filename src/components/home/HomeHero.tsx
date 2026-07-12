"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMounted } from "@/hooks/useMounted";

const ROTATING_WORDS = [
  { text: "marketer", mono: false, prefix: "Your best " },
  { text: "seller", mono: true, prefix: "" },
  { text: "operator", mono: true, prefix: "" },
] as const;

const SLIDES = [
  { src: "/images/hero-slide-1.png", alt: "Marketing agent workflow with derivative content playbook" },
  { src: "/images/hero-slide-2.png", alt: "Sales agent workflow with account intelligence playbook" },
  { src: "/images/hero-slide-3.png", alt: "Operations agent workflow with territory intelligence playbook" },
];

export function HomeHero() {
  const mounted = useMounted();
  const [wordIndex, setWordIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 250);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const word = ROTATING_WORDS[wordIndex];

  return (
    <section className="bg-canvas-white pt-[140px] pb-8">
      <div className="mx-auto max-w-[1280px] px-5 text-center lg:px-10">
        <p className="mb-6 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
          Enterprise AI Platform
        </p>

        <h1 className="mx-auto max-w-[920px] text-[clamp(36px,5vw,64px)] font-medium leading-[1] tracking-[-2px] text-midnight-graphite">
          <span
            className={`block min-h-[64px] transition-opacity duration-250 ${visible ? "opacity-100" : "opacity-0"}`}
            aria-live="polite"
          >
            {word.prefix && <span>{word.prefix}</span>}
            {word.mono ? (
              <code className="font-mono text-[clamp(36px,5vw,64px)] font-medium not-italic text-agent-violet">
                {word.text}
              </code>
            ) : (
              <span className="text-agent-violet">{word.text}</span>
            )}
          </span>
          <span className="block">
            can&apos;t be everywhere.
            <br />
            Their AI agents can.
          </span>
        </h1>

        <div className="mx-auto mt-10 flex max-w-[480px] justify-center" id="demo">
          {mounted ? (
            <form
              className="flex w-full overflow-hidden rounded-full bg-[#E8EBF0]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Work email"
                aria-label="Work email"
                autoComplete="email"
                className="min-w-0 flex-1 bg-transparent px-6 py-4 text-[16px] text-midnight-graphite outline-none placeholder:text-[#666]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-midnight-graphite px-7 py-4 text-[16px] font-medium text-canvas-white transition-colors hover:bg-[#242424]"
                suppressHydrationWarning
              >
                Request a demo
              </button>
            </form>
          ) : (
            <div
              className="h-[56px] w-full rounded-full bg-[#E8EBF0]"
              aria-hidden
            />
          )}
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-[1280px] overflow-hidden px-5 lg:px-10">
        <div className="relative aspect-[1050/505] w-full overflow-hidden rounded-xl">
          {SLIDES.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ${i === slideIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          ))}
        </div>

        {mounted ? (
          <div className="mt-4 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setSlideIndex(i)}
                className={`h-2 rounded-full transition-all ${i === slideIndex ? "w-6 bg-midnight-graphite" : "w-2 bg-fog"}`}
                suppressHydrationWarning
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
