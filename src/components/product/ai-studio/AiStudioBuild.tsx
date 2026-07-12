"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AI_STUDIO_BUILD_AVATARS, AI_STUDIO_BUILD_TABS } from "@/data/ai-studio";
import { cn } from "@/lib/utils";

const TAB_CYCLE_MS = 5000;

export function AiStudioBuild() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cycleIndexRef = useRef(0);
  const userClickedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTabIntoView = useCallback((index: number) => {
    const container = tabsListRef.current;
    const tab = tabRefs.current[index];
    if (!container || !tab) return;

    const scrollOffset =
      tab.offsetLeft - container.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2;

    container.scrollTo({ left: scrollOffset, behavior: "smooth" });
  }, []);

  const activateTab = useCallback(
    (index: number) => {
      cycleIndexRef.current = index;
      setActiveIndex(index);
      scrollTabIntoView(index);
    },
    [scrollTabIntoView],
  );

  const handleTabClick = useCallback(
    (index: number) => {
      userClickedRef.current = true;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      activateTab(index);
    },
    [activateTab],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const startCycling = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        if (userClickedRef.current) return;
        cycleIndexRef.current = (cycleIndexRef.current + 1) % AI_STUDIO_BUILD_TABS.length;
        activateTab(cycleIndexRef.current);
      }, TAB_CYCLE_MS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCycling();
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activateTab]);

  return (
    <section
      id="build_section"
      ref={sectionRef}
      className="ai-studio-build relative pt-[78px] pb-[30px]"
    >
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="mx-auto flex max-w-[1050px] flex-col items-center text-center">
          <p className="inline-flex h-9 items-center rounded-lg bg-[#aaf9e1] px-5 py-2.5 text-[16px] font-medium tracking-[1.6px] text-black">
            BUILD
          </p>

          <div className="mt-[35px] flex items-center justify-center">
            {AI_STUDIO_BUILD_AVATARS.map((avatar) => (
              <figure key={avatar} className="m-0">
                <Image
                  src={avatar}
                  alt="Person"
                  width={108}
                  height={66}
                  className="h-auto w-[108px]"
                />
              </figure>
            ))}
          </div>

          <h2 className="mt-5 text-[40px] font-medium leading-[48px] text-canvas-white">
            Design, develop, and deploy. All in one place.
          </h2>
          <p className="mt-5 max-w-[1050px] text-[20px] leading-8 text-[#d2d4d7]">
            A collaborative workspace where teams build agents
            <br className="hidden sm:block" />
            from front to back—UI, logic, prompts, and code.
          </p>
        </div>

        <div className="mx-auto mt-[29px] max-w-[1050px]">
          <div
            ref={tabsListRef}
            role="tablist"
            aria-label="Build features"
            className="mb-[35px] flex gap-[37px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {AI_STUDIO_BUILD_TABS.map((tab, index) => (
              <div
                key={tab.id}
                role="tab"
                tabIndex={index === activeIndex ? 0 : -1}
                aria-selected={index === activeIndex}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                onClick={() => handleTabClick(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleTabClick(index);
                  }
                }}
                className={cn(
                  "shrink-0 cursor-pointer rounded-[20px] p-0.5 text-left transition-shadow duration-300",
                  index === activeIndex
                    ? "bg-[linear-gradient(180deg,rgb(119,119,255)_-11.88%,rgb(255,139,243)_63.49%)] shadow-[0_3px_40px_rgba(172,185,220,0.4)]"
                    : "bg-black",
                )}
              >
                <div className="flex h-full min-h-[244px] w-[min(230px,calc(100vw-72px))] flex-col rounded-[18px] bg-black px-4 pb-6 pt-[18px] lg:w-[230px]">
                  <h4 className="text-[18px] font-medium leading-[1.2] text-canvas-white">
                    {tab.title}
                  </h4>
                  <p className="mt-[11px] text-[15px] leading-[25.5px] text-canvas-white">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative min-h-[230px] w-full">
            {AI_STUDIO_BUILD_TABS.map((tab, index) => (
              <figure
                key={tab.id}
                className={cn(
                  "m-0 overflow-hidden rounded-xl transition-opacity duration-500",
                  index === activeIndex
                    ? "relative z-[2] opacity-100"
                    : "pointer-events-none absolute inset-0 z-[1] opacity-0",
                )}
                aria-hidden={index !== activeIndex}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[2880/2160] h-auto w-full rounded-xl object-cover"
                >
                  <source src={tab.video} type="video/mp4" />
                </video>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
