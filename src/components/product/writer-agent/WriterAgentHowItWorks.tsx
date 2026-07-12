"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS_STEPS } from "@/data/writer-agent";
import { cn } from "@/lib/utils";

export function WriterAgentHowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className="writer-agent-hiw py-[70px] pt-[130px] lg:pb-[70px]">
      <div className="mx-auto max-w-[1490px] px-5 lg:px-[15px]">
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-[10px]">
          <div className="lg:w-[30%] lg:shrink-0">
            <div className="writer-agent-hiw__title mb-0">
              <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white">
                HOW IT WORKS
              </h5>
              <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-canvas-white">
                Delegate complex work, from start to finish.
              </h2>
            </div>

            <div className="writer-agent-hiw__steps mt-10 flex flex-col gap-0">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <div
                  key={step.id}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  className={cn(
                    "writer-agent-hiw__step flex flex-col gap-[10px] transition-all duration-[400ms]",
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-20",
                    index === HOW_IT_WORKS_STEPS.length - 1 && "pb-0 lg:pb-[100px]",
                  )}
                >
                  <h3 className="m-0 text-[28px] font-medium leading-[1.3] text-canvas-white lg:text-[31px]">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[18px] leading-[1.6] text-[#D2D4D7] lg:text-[20px]">
                    {step.description}
                  </p>

                  <figure className="writer-agent-hiw__step-image mt-5 overflow-hidden rounded-[10px] lg:hidden">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={step.image.width}
                      height={step.image.height}
                      className="h-auto w-full rounded-[10px]"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="writer-agent-hiw__right relative hidden lg:block lg:w-[70%] lg:shrink-0">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "writer-agent-hiw__card absolute left-0 top-0 w-full",
                  index === activeIndex
                    ? "visible z-[2]"
                    : "invisible z-[1]",
                )}
                aria-hidden={index !== activeIndex}
              >
                <figure className="m-0 w-full">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={step.image.width}
                    height={step.image.height}
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
    </section>
  );
}
