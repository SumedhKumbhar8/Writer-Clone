"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { WRITER_AGENT_FEATURES } from "@/data/writer-agent";
import { useMounted } from "@/hooks/useMounted";

function CarouselArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      aria-hidden
      className="text-canvas-white"
    >
      {direction === "prev" ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.42847 10.8569L-0.00010419 5.42836L5.42847 -0.000208855L5.42847 10.8569Z"
          fill="currentColor"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10.8569L5.42857 5.42836L-4.7458e-07 -0.000208855L0 10.8569Z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

export function WriterAgentFeatures() {
  const mounted = useMounted();
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);

    const containerLeft = container.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const distance = Math.abs(slide.getBoundingClientRect().left - containerLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) return;

    container.scrollTo({
      left: slide.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="writer-agent-features bg-[#1B1B1D] py-[70px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h5 className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-canvas-white">
            KEY FEATURES
          </h5>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-canvas-white">
            See WRITER Agent in action.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[20px] leading-[1.5] text-[#D2D4D7]">
            Take a peek at how WRITER works in under a minute.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-[15px] overflow-x-auto pl-5 pr-5 [-ms-overflow-style:none] [scrollbar-width:none] lg:pl-[calc((100vw-1080px)/2+15px)] lg:pr-10 [&::-webkit-scrollbar]:hidden"
        >
          {WRITER_AGENT_FEATURES.map((feature, index) => (
            <article
              key={feature.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="snap-start shrink-0"
              style={{ width: `min(${feature.slideWidth}px, calc(100vw - 40px))` }}
            >
              <figure className="overflow-hidden rounded-xl">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  className="h-auto w-full"
                  sizes={`(max-width: 640px) calc(100vw - 40px), ${feature.slideWidth}px`}
                  draggable={false}
                />
              </figure>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-[1080px] gap-3.5 px-5 lg:px-[15px]">
          {mounted ? (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                disabled={!canScrollPrev}
                onClick={() => scrollToSlide(Math.max(activeIndex - 1, 0))}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#333333] transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                suppressHydrationWarning
              >
                <CarouselArrow direction="prev" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                disabled={!canScrollNext}
                onClick={() =>
                  scrollToSlide(Math.min(activeIndex + 1, WRITER_AGENT_FEATURES.length - 1))
                }
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#333333] transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                suppressHydrationWarning
              >
                <CarouselArrow direction="next" />
              </button>
            </>
          ) : (
            <div className="flex gap-3.5" aria-hidden>
              <span className="h-[38px] w-[38px] rounded-full bg-[#333333] opacity-35" />
              <span className="h-[38px] w-[38px] rounded-full bg-[#333333]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
