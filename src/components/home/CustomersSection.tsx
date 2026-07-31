"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const CASE_STUDIES = [
  {
    id: "kpmg",
    image: "https://writer.com/wp-content/uploads/2026/04/Slide-16_9-166.png",
    width: 976, height: 664, slideWidth: 515,
    alt: "KPMG case study",
    link: { href: "https://writer.com/blog/kpmg-customer-story/", text: "See the case study" },
  },
  {
    id: "clorox",
    image: "https://writer.com/wp-content/uploads/2026/04/Frame-2055246598-1.png",
    width: 976, height: 664, slideWidth: 515,
    alt: "Clorox case study",
  },
  {
    id: "qualcomm",
    image: "https://writer.com/wp-content/uploads/2026/04/Frame-2055246582.png",
    width: 980, height: 664, slideWidth: 515,
    alt: "Qualcomm case study",
    link: { href: "https://writer.com/blog/qualcomm-customer-story/", text: "See the case study" },
  },
  {
    id: "vanguard",
    image: "https://writer.com/wp-content/uploads/2026/04/Slide-16_9-166-1.png",
    width: 976, height: 664, slideWidth: 515,
    alt: "Vanguard case study",
    link: { href: "https://writer.com/blog/vanguard-customer-story/", text: "See the case study" },
  },
  {
    id: "uber",
    image: "https://writer.com/wp-content/uploads/2026/04/Slide-16_9-166-2.png",
    width: 1174, height: 664, slideWidth: 515,
    alt: "Uber case study",
    link: { href: "https://writer.com/blog/uber-customer-story/", text: "See the case study" },
  },
];

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={6} height={11} fill="none" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={dir === "prev" ? "M5.428 10.857 0 5.428 5.428 0v10.857Z" : "M0 10.857 5.429 5.428 0 0v10.857Z"}
        fill="currentColor"
      />
    </svg>
  );
}

export function CustomersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const update = useCallback(() => {
    const c = scrollRef.current;
    if (!c) return;
    setCanPrev(c.scrollLeft > 8);
    setCanNext(c.scrollLeft + c.clientWidth < c.scrollWidth - 8);
    const cl = c.getBoundingClientRect().left;
    let ci = 0, cd = Infinity;
    slideRefs.current.forEach((s, i) => {
      if (!s) return;
      const d = Math.abs(s.getBoundingClientRect().left - cl);
      if (d < cd) { cd = d; ci = i; }
    });
    setActiveIdx(ci);
  }, []);

  useEffect(() => {
    const c = scrollRef.current;
    if (!c) return;
    update();
    c.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { c.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [update]);

  const scrollTo = (i: number) => {
    const c = scrollRef.current;
    const s = slideRefs.current[i];
    if (c && s) c.scrollTo({ left: s.offsetLeft - c.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="bg-[#1B1B1D] py-[110px]" id="customers">
      <div className="container-default-sm">
        <h5 className="mb-[19px] text-[13px] font-medium uppercase leading-[1.6] tracking-[1px] text-canvas-white">
          CUSTOMERS
        </h5>
        <h2 className="mb-[25px] text-[40px] font-medium leading-[48px] tracking-[-0.8px] text-canvas-white">
          Measurable outcomes from leading enterprises.
        </h2>
      </div>

      <div className="relative mt-10">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto pl-[15px] pr-[15px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((s, i) => (
            <article
              key={s.id}
              ref={(n) => { slideRefs.current[i] = n; }}
              className="snap-start shrink-0"
              style={{ width: `min(515px, calc(100vw - 30px))` }}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  className="h-auto w-full rounded-xl"
                  sizes="515px"
                  draggable={false}
                />
              </div>
              {s.link ? (
                <div className="mt-4">
                  <Link
                    href={s.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-row-reverse items-center gap-3 text-[16px] font-medium leading-none text-canvas-white transition-opacity hover:opacity-70"
                  >
                    <span>{s.link.text}</span>
                    <Image
                      src="https://writer.com/wp-content/uploads/2026/03/Arrow-10.webp"
                      alt="" width={19} height={19} aria-hidden
                      className="h-[19px] w-[19px] shrink-0 invert"
                    />
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-[14px] flex gap-[14px] pl-[15px]">
          {mounted ? (
            <>
              <button
                type="button" aria-label="Previous"
                disabled={!canPrev}
                onClick={() => scrollTo(Math.max(activeIdx - 1, 0))}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#4F4F4F] text-canvas-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
              >
                <Arrow dir="prev" />
              </button>
              <button
                type="button" aria-label="Next"
                disabled={!canNext}
                onClick={() => scrollTo(Math.min(activeIdx + 1, CASE_STUDIES.length - 1))}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#4F4F4F] text-canvas-white transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
              >
                <Arrow dir="next" />
              </button>
            </>
          ) : (
            <div className="flex gap-[14px]" aria-hidden>
              <span className="h-[38px] w-[38px] rounded-full bg-[#4F4F4F] opacity-35" />
              <span className="h-[38px] w-[38px] rounded-full bg-[#4F4F4F]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
