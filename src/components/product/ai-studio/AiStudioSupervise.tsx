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
      <section id="supervise_section" className="supervise_section">
        <div className="supervise_section_inner container-default-sm text-center">
          <p className="badge badge-yellow">SUPERVISE</p>

          <h2 className="supervise_section_title">
            Agent supervision that accelerates your business, and works with your systems
          </h2>

          <p className="supervise_section_text">
            Our interoperable platform fits right into your existing tech stack. Give your team the
            fine-grained controls and system-wide policies they need to govern at scale.
          </p>
        </div>
      </section>

      <section className="scroller_section scroll_listener" aria-label="Supervise navigation">
        <div className="container-default-sm">
          <div className="scroller_container">
            <div className="scroller_list">
              {AI_STUDIO_SUPERVISE_TABS.map((tab) => (
                <a key={tab.id} href={`#${tab.id}_section`} className="scroller_anchor">
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        className={cn(
          "scroller_list scroller_list--sticky",
          navVisible ? "is-fixed" : "hidden",
        )}
        aria-hidden={!navVisible}
      >
        <div
          role="tablist"
          aria-label="Supervise sections"
          className="scroller_list_inner"
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
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      <div ref={tabsRegionRef}>
        {AI_STUDIO_SUPERVISE_TABS.map((tab, tabIndex) => {
          const tabClass = tabIndex === 1 ? "ap_tabs_wrap reverse" : "ap_tabs_wrap";

          return (
            <section
              key={tab.id}
              id={`${tab.id}_section`}
              ref={(node) => { sectionRefs.current[tabIndex] = node; }}
              className={tabClass}
            >
              <div className="container-default-sm">
                <div className="finServ_agents_tab_block">
                  <div className="finServ_agents_block_left">
                    <div className="accordion_heading">
                      <Image
                        src={tab.icon}
                        alt={tab.label}
                        width={tab.iconWidth}
                        height={27}
                        className="h-auto"
                      />
                      <p className="text">{tab.subtitle}</p>
                    </div>

                    <div className="finServ_agents_accordion_list">
                      {tab.items.map((item, itemIndex) => {
                        const isActive = tabIndex === activeTabIndex && itemIndex === activeItemIndex;

                        return (
                          <div
                            key={item.title}
                            data-supervise-item
                            className={cn("finServ_agents_accordion", isActive && "open")}
                          >
                            <div className="finServ_agents_accordion_header">
                              <h4>{item.title}</h4>
                            </div>

                            <div className={cn("finServ_agents_accordion_content", isActive && "block")}>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="finServ_agents_block_right">
                    {tab.items.map((item, itemIndex) => (
                      <figure
                        key={item.title}
                        className={cn(tabIndex === activeTabIndex && itemIndex === activeItemIndex ? "block" : "hidden")}
                        aria-hidden={!(tabIndex === activeTabIndex && itemIndex === activeItemIndex)}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={730}
                          height={600}
                          className="h-full w-full object-cover"
                          sizes="(max-width: 1280px) 65vw, 730px"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
