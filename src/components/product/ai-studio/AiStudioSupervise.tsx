"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AI_STUDIO_SUPERVISE_TABS } from "@/data/ai-studio";
import { cn } from "@/lib/utils";

export function AiStudioSupervise() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const tabsRegionRef = useRef<HTMLDivElement>(null);

  const updateActiveFromScroll = useCallback(() => {
    const triggerLine = window.innerHeight * 0.45;
    let newTabIndex = 0;

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= triggerLine) {
        newTabIndex = index;
      }
    });

    setActiveTabIndex(newTabIndex);

    const activeSection = sectionRefs.current[newTabIndex];
    if (!activeSection) return;

    const items = activeSection.querySelectorAll("[data-supervise-item]");
    let newItemIndex = 0;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top <= triggerLine + 100) {
        newItemIndex = index;
      }
    });

    setActiveItemIndex(newItemIndex);

    const tabsRegion = tabsRegionRef.current;
    const introSection = document.querySelector("#supervise_section");
    if (tabsRegion && introSection) {
      const tabsRect = tabsRegion.getBoundingClientRect();
      const introRect = introSection.getBoundingClientRect();
      setNavVisible(introRect.bottom < 80 && tabsRect.top <= 150 && tabsRect.bottom > 160);
    }
  }, []);

  useEffect(() => {
    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [updateActiveFromScroll]);

  const scrollToSection = (tabIndex: number) => {
    sectionRefs.current[tabIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section id="supervise_section" className="ai-studio-supervise-intro pt-9">
        <div className="mx-auto max-w-[760px] px-5 text-center lg:px-[15px]">
          <span className="inline-flex items-center rounded-lg bg-[#ddff7b] px-5 py-2.5 text-[16px] font-medium tracking-[1.6px] text-black">
            SUPERVISE
          </span>
          <h2 className="mt-[19px] text-[40px] font-normal leading-[48px] text-canvas-white">
            Agent supervision that accelerates your business, and works with your systems
          </h2>
          <p className="my-5 text-[20px] leading-8 text-[#d2d4d7]">
            Our interoperable platform fits right into your existing tech stack. Give your team the
            fine-grained controls and system-wide policies they need to govern at scale.
          </p>
        </div>
      </section>

      <div
        className={cn(
          "ai-studio-supervise-nav pointer-events-none fixed left-1/2 top-[87px] z-30 -translate-x-1/2 transition-opacity duration-300",
          navVisible ? "pointer-events-auto opacity-100" : "opacity-0",
        )}
        aria-hidden={!navVisible}
      >
        <div
          role="tablist"
          aria-label="Supervise sections"
          className="flex items-center gap-[7px] rounded-full bg-black px-12 py-2.5"
        >
          {AI_STUDIO_SUPERVISE_TABS.map((tab, index) => (
            <div
              key={tab.id}
              role="tab"
              tabIndex={0}
              aria-selected={index === activeTabIndex}
              onClick={() => scrollToSection(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  scrollToSection(index);
                }
              }}
              className={cn(
                "cursor-pointer rounded-lg px-7 py-[7px] text-[15px] font-medium tracking-[1px] transition-colors",
                index === activeTabIndex
                  ? "text-canvas-white"
                  : "text-[#d2d4d7] hover:text-canvas-white",
              )}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={tabsRegionRef}
        className="ai-studio-supervise-tabs mx-auto max-w-[1080px] px-5 pb-[70px] lg:px-[15px]"
      >
        {AI_STUDIO_SUPERVISE_TABS.map((tab, tabIndex) => (
          <section
            key={tab.id}
            id={`${tab.id}_section`}
            ref={(node) => {
              sectionRefs.current[tabIndex] = node;
            }}
            className={cn(
              "ai-studio-supervise-tab",
              tabIndex < AI_STUDIO_SUPERVISE_TABS.length - 1 && "mb-[47px]",
            )}
          >
            <div className="flex flex-col overflow-hidden rounded-[20px] bg-black lg:flex-row">
              <div className="lg:w-[320px] lg:shrink-0 lg:px-[22px] lg:py-[30px]">
                <div className="px-[13px] py-5 lg:p-0">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={148}
                    height={27}
                    className="h-auto w-[148px]"
                  />

                  <p className="mb-5 mt-4 text-[18px] font-medium leading-[1.2] text-canvas-white">
                    {tab.subtitle}
                  </p>
                </div>

                <div className="flex flex-col px-[13px] pb-5 lg:px-0 lg:pb-0">
                  {tab.items.map((item, itemIndex) => {
                    const isActive =
                      tabIndex === activeTabIndex && itemIndex === activeItemIndex;

                    return (
                      <div
                        key={item.title}
                        data-supervise-item
                        className={cn(
                          "rounded-[7px] p-[10px] transition-colors duration-300",
                          itemIndex > 0 && "mt-[15px]",
                          isActive ? "bg-[#322d3a]" : "bg-transparent",
                        )}
                      >
                        <h4 className="text-[16px] font-medium leading-[1.3] text-[#ddff7b]">
                          {item.title}
                        </h4>

                        <div
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                            isActive
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="pt-[7px] text-[14px] leading-[1.6] text-[#d2d4d7]">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <figure className="mt-5 overflow-hidden rounded-xl lg:hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={1024}
                            height={585}
                            className={cn(
                              "h-auto w-full transition-opacity duration-300",
                              isActive ? "opacity-100" : "hidden opacity-0",
                            )}
                            sizes="(max-width: 1024px) 100vw, 480px"
                          />
                        </figure>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative hidden lg:block lg:flex-1">
                {tab.items.map((item, itemIndex) => (
                  <figure
                    key={item.title}
                    className={cn(
                      "absolute left-0 top-0 w-full transition-opacity duration-300",
                      tabIndex === activeTabIndex && itemIndex === activeItemIndex
                        ? "visible z-[2] opacity-100"
                        : "invisible z-[1] opacity-0",
                    )}
                    aria-hidden={!(tabIndex === activeTabIndex && itemIndex === activeItemIndex)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1024}
                      height={585}
                      className="h-auto w-full rounded-r-[20px]"
                      sizes="(max-width: 1280px) 65vw, 730px"
                    />
                  </figure>
                ))}
                <div className="aspect-[1024/585] w-full" aria-hidden />
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
