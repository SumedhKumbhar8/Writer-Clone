"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { fsPageData } from "@/data/financial-services";

export function FsSpotlightsSection() {
  const { spotlights } = fsPageData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPos(scrollRef.current.scrollLeft);
    }
  };

  return (
    <section className="bg-white py-[43px] pb-[140px] max-lg:pb-[60px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mb-10 max-w-[760px]">
          <h5 className="mb-4 text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
            {spotlights.eyebrow}
          </h5>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-normal leading-[120%] text-black">
            {spotlights.title}
          </h2>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar flex gap-3 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {spotlights.items.map((item, i) => (
            <article
              key={i}
              className="spotlight_card group flex min-w-[280px] max-w-[350px] flex-shrink-0 flex-col overflow-hidden rounded-[16px] bg-[#F5F5F9]"
            >
              <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                <Image
                  src={item.image}
                  alt={item.company}
                  fill
                  className="object-cover"
                  sizes="350px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-[26px] p-[22px_18px]">
                <h3 className="min-h-[100px] text-[18px] font-normal leading-[140%] text-black">
                  {item.description}
                </h3>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#333] no-underline transition-opacity hover:opacity-70"
                  >
                    Read the story
                    <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#E4E7ED] transition-all duration-200 group-hover:bg-black">
                      <svg width="16" height="7" viewBox="0 0 16 7" fill="none" className="text-black transition-colors duration-200 group-hover:text-white">
                        <path d="M10.293 0.293L9 1.586L12.414 5H0V7H12.414L9 10.414L10.293 11.707L15.293 6.707C15.683 6.317 15.683 5.683 15.293 5.293L10.293 0.293Z" fill="currentColor" />
                      </svg>
                    </span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-black transition-opacity hover:opacity-70"
            aria-label="Previous"
            suppressHydrationWarning
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="white" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-black transition-opacity hover:opacity-70"
            aria-label="Next"
            suppressHydrationWarning
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
              <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
