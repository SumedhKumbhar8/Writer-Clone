"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { hcPageData } from "@/data/healthcare";

export function HcAgentsSection() {
  const { agents } = hcPageData;
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentTab = agents.tabs[activeTab];

  const stopAutoCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoCycle = useCallback(() => {
    stopAutoCycle();
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % currentTab.slides.length);
    }, 5000);
  }, [currentTab.slides.length, stopAutoCycle]);

  useEffect(() => {
    setActiveSlide(0);
    startAutoCycle();
    return stopAutoCycle;
  }, [activeTab, startAutoCycle, stopAutoCycle]);

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
    stopAutoCycle();
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % currentTab.slides.length);
    stopAutoCycle();
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setActiveSlide(0);
    stopAutoCycle();
  };

  return (
    <section className="hsc-ai-agent-wrap mt-[78px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mb-8">
          <h4 className="m-0 text-[18px] font-medium leading-[120%] text-black">
            {agents.eyebrow}
          </h4>
          <h2 className="my-[13px] max-w-[729px] text-[clamp(28px,3.5vw,40px)] font-normal leading-[48px] text-[#1B1B1B]">
            {agents.title}
          </h2>
          <p className="max-w-[753px] text-[15px] font-normal leading-[140%] text-[#333]">
            {agents.description}
          </p>
        </div>
      </div>

      <div className="bg-[#EDF5F7]">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="relative overflow-visible rounded-[12px] border border-[#E4E7ED] bg-white pb-[60px]">
            <div className="ai_agents_hc_container px-[30px] pt-[32px] max-lg:px-[25px]">
              <ul className="ai_agents_hc_tab_links mx-auto flex w-fit list-none items-center gap-[12px] rounded-[200px] bg-[#CAE1E7] p-[19px_27px] max-lg:flex-wrap max-lg:justify-start">
                {agents.tabs.map((tab, idx) => (
                  <li
                    key={tab.id}
                    onClick={() => handleTabClick(idx)}
                    className={`ai_agents_hc_tab_link cursor-pointer rounded-[200px] px-[33px] py-[9px] text-[14px] font-normal leading-[160%] text-black transition-all duration-300 ${
                      activeTab === idx
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>

              <div className="ai_agents_hc_tab_content mt-[32px]">
                <div className="ai_agents_hc_tc_col_top mb-[20px] text-center">
                  <h3 className="mx-auto mb-[17px] max-w-[610px] text-[clamp(24px,3vw,36px)] font-normal leading-[48px] tracking-[-0.72px] text-[#1B1B1B]">
                    {currentTab.title}
                  </h3>
                  <div className="tags_wrapper flex flex-wrap items-center justify-center gap-[15px]">
                    <div className="ai_agents_hc_tags flex flex-wrap items-center gap-[7px]">
                      {currentTab.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-[12.882px] rounded-[5.153px] bg-[#BFCBFF] px-[12.882px] py-[2.576px] text-[15.459px] font-normal leading-[140%] tracking-[1.546px] text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ai_hc_block rounded-[8px]">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 overflow-hidden bg-white p-[25px_30px_25px_10px] max-lg:p-0">
                      <div className="relative">
                        <Image
                          src={currentTab.slides[activeSlide].image}
                          alt=""
                          width={690}
                          height={400}
                          className="h-auto w-full object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 pb-4">
                          {currentTab.slides.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSlideClick(idx)}
                              className={`h-[9px] w-[9px] rounded-full transition-all duration-300 ${
                                idx === activeSlide
                                  ? "h-[15px] w-[15px] bg-black"
                                  : "bg-[#8F9394]"
                              }`}
                              aria-label={`Slide ${idx + 1}`}
                              suppressHydrationWarning
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[240px] flex-col p-[84px_14px_35px_30px] max-lg:w-full max-lg:p-[20px]">
                      <p className="mb-4 text-[20px] font-normal leading-[160%] text-black max-lg:text-[18px]">
                        {currentTab.slides[activeSlide].caption}
                      </p>
                      <button
                        type="button"
                        onClick={handleNextSlide}
                        className="mt-auto inline-flex items-center gap-2 self-start text-[14px] font-semibold text-[#333] no-underline transition-opacity hover:opacity-70"
                        suppressHydrationWarning
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="16" viewBox="0 0 35 16" fill="none">
                          <path d="M33.9132 8.70711C34.3037 8.31658 34.3037 7.68342 33.9132 7.29289L27.5492 0.928932C27.1587 0.538408 26.5255 0.538408 26.135 0.928932C25.7445 1.31946 25.7445 1.95262 26.135 2.34315L31.7918 8L26.135 13.6569C25.7445 14.0474 25.7445 14.6805 26.135 15.0711C26.5255 15.4616 27.1587 15.4616 27.5492 15.0711L33.9132 8.70711ZM0.206055 8V9H33.2061V8V7H0.206055V8Z" fill="black" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ai_agents_hc_tc_cols mt-[40px] grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div className="ai_agents_hc_tc_col flex flex-col gap-3">
                    <h4 className="m-0 text-[18px] font-medium leading-[120%] text-black">
                      Challenge
                    </h4>
                    <p className="m-0 text-[15px] font-normal leading-[140%] text-[#333]">
                      {currentTab.challenge}
                    </p>
                  </div>
                  <div className="ai_agents_hc_tc_col flex flex-col gap-3">
                    <h4 className="m-0 text-[18px] font-medium leading-[120%] text-black">
                      Solution
                    </h4>
                    <p className="m-0 text-[15px] font-normal leading-[140%] text-[#333]">
                      {currentTab.solution}
                    </p>
                  </div>
                  <div className="ai_agents_hc_tc_col flex flex-col gap-3">
                    <h4 className="m-0 text-[18px] font-medium leading-[120%] text-black">
                      Customer impact
                    </h4>
                    <ul className="m-0 list-disc pl-[30px]">
                      {currentTab.impact.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[15px] font-normal leading-[140%] text-[#333]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
