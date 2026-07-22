"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { WRITER_AGENT_FEATURES } from "@/data/writer-agent";
import { useMounted } from "@/hooks/useMounted";

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
    <section className="hp-customers">
      <div className="container-default-sm">
        <div className="spotlight_slider_title">
          <h5>KEY FEATURES</h5>
          <h2>See WRITER Agent in action.</h2>
          <p>Take a peek at how WRITER works in under a minute.</p>
        </div>
      </div>

      <div className="spotlight_swiper">
        <div className="flex snap-x snap-mandatory gap-[15px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={scrollRef}>
          {WRITER_AGENT_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              ref={(node) => { slideRefs.current[index] = node; }}
              className="swiper-slide snap-start shrink-0"
              style={{ width: `min(${feature.slideWidth}px, calc(100vw - 40px))` }}
            >
              <div className="spotlight_card">
                <figure className="wp-block-image size-full">
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
              </div>
            </div>
          ))}
        </div>

        <div className="swiper_spotlight_next_prev_wrapper">
          {mounted ? (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                disabled={!canScrollPrev}
                onClick={() => scrollToSlide(Math.max(activeIndex - 1, 0))}
                className="swiper-button-prev"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.42847 10.8569L-0.00010419 5.42836L5.42847 -0.000208855L5.42847 10.8569Z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                disabled={!canScrollNext}
                onClick={() => scrollToSlide(Math.min(activeIndex + 1, WRITER_AGENT_FEATURES.length - 1))}
                className="swiper-button-next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 10.8569L5.42857 5.42836L-4.7458e-07 -0.000208855L0 10.8569Z" fill="currentColor" />
                </svg>
              </button>
            </>
          ) : (
            <div className="flex gap-3.5" aria-hidden>
              <span className="h-[38px] w-[38px] rounded-full bg-[#4F4F4F] opacity-35" />
              <span className="h-[38px] w-[38px] rounded-full bg-[#4F4F4F]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
