"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMounted } from "@/hooks/useMounted";

const CASE_STUDIES = [
  {
    id: "kpmg",
    image: "https://writer.com/wp-content/uploads/2026/04/Slide-16_9-166.png",
    width: 976,
    height: 664,
    slideWidth: 488,
    alt: "KPMG case study — 70% time savings on derivative content",
    link: {
      href: "https://writer.com/blog/kpmg-customer-story/",
      text: "See the case study",
    },
  },
  {
    id: "clorox",
    image: "https://writer.com/wp-content/uploads/2026/04/Frame-2055246598-1.png",
    width: 976,
    height: 664,
    slideWidth: 488,
    alt: "The Clorox Company case study — 85% savings in time and tasks",
  },
  {
    id: "qualcomm",
    image: "https://writer.com/wp-content/uploads/2026/04/Frame-2055246582.png",
    width: 980,
    height: 664,
    slideWidth: 490,
    alt: "Qualcomm case study — 2.4k hours saved per month",
    link: {
      href: "https://writer.com/blog/qualcomm-customer-story/",
      text: "See the case study",
    },
  },
  {
    id: "vanguard",
    image: "https://writer.com/wp-content/uploads/2026/04/Slide-16_9-166-1.png",
    width: 976,
    height: 664,
    slideWidth: 488,
    alt: "Vanguard case study — 57% faster time to market",
    link: {
      href: "https://writer.com/blog/vanguard-customer-story/",
      text: "See the case study",
    },
  },
  {
    id: "uber",
    image: "https://writer.com/wp-content/uploads/2026/04/Slide-16_9-166-2.png",
    width: 1174,
    height: 664,
    slideWidth: 587,
    alt: "Uber case study — scales inbound support responses with WRITER",
    link: {
      href: "https://writer.com/blog/uber-customer-story/",
      text: "Uber scales inbound support responses with WRITER",
    },
  },
] as const;

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

function CaseStudyLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-row-reverse items-center gap-3 text-[16px] font-medium leading-none text-midnight-graphite transition-opacity hover:opacity-70"
    >
      <span>{text}</span>
      <Image
        src="https://writer.com/wp-content/uploads/2026/03/Arrow-10.webp"
        alt=""
        width={19}
        height={19}
        aria-hidden
        className="h-[19px] w-[19px] shrink-0"
      />
    </Link>
  );
}

export function CustomersSection() {
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
    <section className="customers-section bg-canvas-white py-20 lg:py-28" id="customers">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
            CUSTOMERS
          </h5>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
            Measurable outcomes from leading enterprises.
          </h2>
        </div>
      </div>

      <div className="customers-carousel-wrap mt-14">
        <div
          ref={scrollRef}
          className="customers-carousel flex snap-x snap-mandatory gap-[30px] overflow-x-auto pl-5 pr-5 [-ms-overflow-style:none] [scrollbar-width:none] lg:pl-10 lg:pr-10 [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((study, index) => (
            <article
              key={study.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              className="snap-start shrink-0"
              style={{ width: `min(${study.slideWidth}px, calc(100vw - 40px))` }}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={study.image}
                  alt={study.alt}
                  width={study.width}
                  height={study.height}
                  className="h-auto w-full rounded-xl"
                  sizes={`(max-width: 640px) calc(100vw - 40px), ${study.slideWidth}px`}
                  draggable={false}
                />
              </div>

              <div className="mt-4 min-h-[36px]">
                {"link" in study && study.link ? (
                  <CaseStudyLink href={study.link.href} text={study.link.text} />
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="customers-carousel-nav flex gap-3.5 pl-5 lg:pl-10">
          {mounted ? (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                disabled={!canScrollPrev}
                onClick={() => scrollToSlide(Math.max(activeIndex - 1, 0))}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-midnight-graphite transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                suppressHydrationWarning
              >
                <CarouselArrow direction="prev" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                disabled={!canScrollNext}
                onClick={() => scrollToSlide(Math.min(activeIndex + 1, CASE_STUDIES.length - 1))}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-midnight-graphite transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                suppressHydrationWarning
              >
                <CarouselArrow direction="next" />
              </button>
            </>
          ) : (
            <div className="flex gap-3.5" aria-hidden>
              <span className="h-[38px] w-[38px] rounded-full bg-midnight-graphite opacity-35" />
              <span className="h-[38px] w-[38px] rounded-full bg-midnight-graphite" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
