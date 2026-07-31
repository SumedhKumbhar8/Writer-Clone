"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { mktPageData } from "@/data/marketing";

export function MktAgentsSection() {
  const { agents } = mktPageData;
  const [activeTab, setActiveTab] = useState(agents.tabs[0].id);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentTab = agents.tabs.find((t) => t.id === activeTab)!;

  const stopAutoCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoCycle = useCallback(() => {
    stopAutoCycle();
    intervalRef.current = setInterval(() => {
      setActiveAccordion((prev) => (prev + 1) % currentTab.features.length);
    }, 5000);
  }, [currentTab.features.length, stopAutoCycle]);

  useEffect(() => {
    setActiveAccordion(0);
    startAutoCycle();
    return stopAutoCycle;
  }, [activeTab, startAutoCycle, stopAutoCycle]);

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(index);
    stopAutoCycle();
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setActiveAccordion(0);
    stopAutoCycle();
    intervalRef.current = setInterval(() => {
      setActiveAccordion((prev) => (prev + 1) % currentTab.features.length);
    }, 5000);
  };

  return (
    <section className="ai-agent-marketing-wrapper bg-[#1C1B1E] py-[70px] pb-[135px] max-lg:py-[60px]">
      <div className="container-default-sm">
        <div className="mb-10 max-w-[760px]">
          <Image
            src={agents.icon}
            alt=""
            width={36}
            height={27}
            className="mb-4 h-[27px] w-auto"
          />
          <h5 className="mb-4 text-[14px] font-semibold uppercase tracking-[4.2px] text-white">
            {agents.eyebrow}
          </h5>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium leading-[120%] text-white">
            {agents.title}
          </h2>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium leading-[48px] text-[#828282]">
            {agents.description}
          </h2>
        </div>

        <div className="mb-12 inline-flex items-center rounded-[128px] border border-[#333] bg-black p-[13px_69px] shadow-[0_0_50px_0_rgba(60,100,250,0.10)] max-lg:w-full max-lg:overflow-x-auto max-lg:p-[13px_20px]">
          {agents.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 text-[15px] font-medium uppercase tracking-[1px] text-[#D2D4D7] transition-all ${
                activeTab === tab.id
                  ? "rounded-[8px] bg-[#1C1B1E]"
                  : "hover:rounded-[8px] hover:bg-[#1C1B1E]"
              }`}
              suppressHydrationWarning
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <div
            className={`flex flex-col overflow-hidden rounded-[20px] bg-black lg:flex-row`}
          >
            <div className="flex w-full flex-col p-[30px_22px] lg:max-w-[320px]" style={{ minHeight: 600 }}>
              <h4 className="mb-6 text-[24px] font-medium leading-[1.25] text-white">
                {currentTab.title}
              </h4>
              <p className="mb-8 text-[14px] leading-[160%] text-[#D2D4D7]">
                {currentTab.description}
              </p>

              <div className="flex flex-col gap-3">
                {currentTab.features.map((feature, j) => (
                  <button
                    key={j}
                    type="button"
                    onClick={() => handleAccordionClick(j)}
                    className={`w-full rounded-[7px] p-4 text-left transition-all ${
                      j === activeAccordion ? "bg-[#1C1B1E]" : ""
                    }`}
                    suppressHydrationWarning
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[16px] font-semibold leading-[111%] text-[#D4B2F7]">
                        {feature.label}
                      </span>
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        className={`mt-1 shrink-0 transition-transform ${
                          j === activeAccordion ? "rotate-0" : "-rotate-90"
                        }`}
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="#D4B2F7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {j === activeAccordion && (
                      <p className="mt-2 text-[14px] leading-[160%] text-[#D2D4D7]">
                        {feature.detail}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex w-full items-center justify-center bg-[#F5F5F9] lg:flex-1">
              <Image
                src={currentTab.image}
                alt={currentTab.title}
                width={600}
                height={494}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
