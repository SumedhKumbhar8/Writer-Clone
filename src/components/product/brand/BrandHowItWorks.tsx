"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { BRAND_HOW_IT_WORKS } from "@/data/brand";
import { cn } from "@/lib/utils";

export function BrandHowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { eyebrow, title, items } = BRAND_HOW_IT_WORKS;

  const updateActiveStep = useCallback(() => {
    const triggerLine = window.innerHeight * 0.5;
    let newIndex = 0;

    stepRefs.current.forEach((step, index) => {
      if (!step) return;
      const rect = step.getBoundingClientRect();
      if (rect.top <= triggerLine + 200) {
        newIndex = index;
      }
    });

    setActiveIndex(newIndex);
  }, []);

  useEffect(() => {
    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);
    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [updateActiveStep]);

  return (
    <section className="bg-[#111113] py-[70px] pt-[130px] lg:pb-[70px]">
      <div className="mx-auto max-w-[1490px] px-5 lg:px-[15px]">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-[10px]">
          <div className="lg:w-[30%] lg:shrink-0">
            <div className="mb-0">
              <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white">
                {eyebrow}
              </h5>
              <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-canvas-white">
                {title}
              </h2>
            </div>

            <div className="mt-10 flex flex-col" style={{ gap: "160px" }}>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  className={cn(
                    "flex flex-col gap-[10px] transition-all duration-[400ms]",
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-20",
                    index === items.length - 1 && "pb-0 lg:pb-[100px]",
                  )}
                >
                  <h3 className="m-0 whitespace-pre-line text-[clamp(24px,2.5vw,31px)] font-medium leading-[1.3] text-canvas-white">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[18px] leading-[1.6] text-[#D2D4D7] lg:text-[20px]">
                    {item.description}
                  </p>

                  <figure className="mt-5 overflow-hidden rounded-[10px] lg:hidden">
                    <Image
                      src={item.image}
                      alt=""
                      width={620}
                      height={388}
                      className="h-auto w-full rounded-[10px]"
                      aria-hidden
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block lg:w-[70%] lg:shrink-0">
            <div
              className="sticky"
              style={{ top: "27vh", height: "558px", alignSelf: "flex-start" }}
            >
              <div
                className="absolute inset-0 z-[-1] rounded-[14px]"
                style={{ background: "#1B1B1D" }}
              />
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    "absolute left-0 top-0 h-full w-full transition-[opacity,visibility] duration-[400ms]",
                    index === activeIndex
                      ? "visible z-[2] opacity-100"
                      : "invisible z-[1] opacity-0",
                  )}
                  aria-hidden={index !== activeIndex}
                >
                  <figure className="m-0 flex h-full w-full items-start pt-[30px]">
                    <Image
                      src={item.image}
                      alt=""
                      width={620}
                      height={388}
                      className="h-auto w-full rounded-xl"
                      sizes="(max-width: 1280px) 70vw, 900px"
                      priority={index === 0}
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
