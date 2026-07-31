"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WORDS = ["marketer", "seller", "operator"];

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

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <section className="bg-canvas-white pt-[140px] pb-[30px]">
      <div className="container-default-sm text-center">
        <p className="mb-0 text-[16px] font-medium uppercase leading-normal tracking-[1.6px] text-midnight-graphite">
          ENTERPRISE AI PLATFORM
        </p>

        <h1 className="mx-auto mt-5 text-[64px] font-medium leading-none tracking-[-2px] text-midnight-graphite">
          <span
            className={`transition-opacity duration-250 ${visible ? "opacity-100" : "opacity-0"}`}
            aria-live="polite"
          >
            Your best <span className="text-agent-violet">{WORDS[wordIdx]}</span>
          </span>
          <br />
          can&apos;t be everywhere.
          <br />
          Their AI agents can.
        </h1>

        <div className="demo-form-wrapper">
          {mounted ? (
            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                name="work-email"
                placeholder="Work email"
                aria-label="Work email"
                className="demo-input"
              />
              <button type="submit" className="demo-btn">
                Request a demo
              </button>
            </form>
          ) : (
            <div className="h-[54px] w-full rounded-[50px] bg-[#E8EBF0]" aria-hidden />
          )}
        </div>
      </div>

      <div className="container-default-sm relative mt-[22px]">
        <div className="relative mx-auto h-[550px] w-full max-w-[1050px] overflow-hidden">
          {SLIDES.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className={`object-contain transition-opacity duration-700 ${i === slideIdx ? "opacity-100" : "pointer-events-none opacity-0"}`}
              sizes="1050px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
