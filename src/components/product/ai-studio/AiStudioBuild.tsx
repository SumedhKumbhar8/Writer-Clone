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
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activateTab]);

  return (
    <section id="build_section" ref={sectionRef} className="ddd_section ddd_tabs_section">
      <div className="container-default-sm">
        <div className="ddd_title_top">
          <p className="badge badge-green" id="build">BUILD</p>

          <div className="headshots">
            {AI_STUDIO_BUILD_AVATARS.map((avatar) => (
              <figure key={avatar} className="wp-block-image size-full is-resized">
                <Image
                  src={avatar}
                  alt="Person"
                  width={108}
                  height={66}
                  style={{ width: "108px" }}
                />
              </figure>
            ))}
          </div>

          <h2 className="ddd_tile_text">Design, develop, and deploy. All in one place.</h2>

          <p className="ddd_description_text">
            A collaborative workspace where teams build agents
            <br />from front to back—UI, logic, prompts, and code.
          </p>
        </div>
      </div>

      <div className="ddd_tabs_wrap">
        <div className="container-default-sm ddd_tabsList_container">
          <div ref={tabsListRef} className="ddd_tabs_list" role="tablist" aria-label="Build features">
            {AI_STUDIO_BUILD_TABS.map((tab, index) => (
              <div
                key={tab.id}
                role="tab"
                tabIndex={index === activeIndex ? 0 : -1}
                aria-selected={index === activeIndex}
                ref={(node) => { tabRefs.current[index] = node; }}
                onClick={() => handleTabClick(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleTabClick(index);
                  }
                }}
                className={cn("ddd_tab_btn", index === activeIndex && "active")}
              >
                <div className="ddd_tab_btn_inner">
                  <h4 id={`h-${tab.id}`}>{tab.title}</h4>
                  <p>{tab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-default-sm">
          <div className="ddd_tab_content">
            {AI_STUDIO_BUILD_TABS.map((tab, index) => (
              <div
                key={tab.id}
                className={cn("ddd_tab_inner", index === activeIndex && "show")}
                aria-hidden={index !== activeIndex}
              >
                <figure className="wp-block-image size-full">
                  <video autoPlay loop muted playsInline className="w-full h-auto rounded-xl">
                    <source src={tab.video} type="video/mp4" />
                  </video>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
