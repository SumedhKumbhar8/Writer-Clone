"use client";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { cn } from "@/lib/utils";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqTab = {
  name: string;
  items: FaqItem[];
};

type PlansFAQProps = {
  title: string;
  tabs: FaqTab[];
};

export function PlansFAQ({ title, tabs }: PlansFAQProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (question: string) => {
    setOpenItems((prev) => ({ ...prev, [question]: !prev[question] }));
  };

  const currentTab = tabs[activeTab];

  return (
    <Section variant="muted">
      <Container>
        <Reveal>
          <h2 className="text-heading-lg mb-8 text-center">{title}</h2>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center gap-6 border-b border-cloud-white">
            {tabs.map((tab, i) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(i)}
                suppressHydrationWarning
                className={cn(
                  "relative pb-3 text-body font-medium transition-colors",
                  activeTab === i
                    ? "text-midnight-graphite after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-action-blue"
                    : "text-ghost-gray hover:text-slate-gray",
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {currentTab.items.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-cloud-white bg-canvas-white"
              >
                <button
                  onClick={() => toggleItem(item.question)}
                  suppressHydrationWarning
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-subheading pr-4 font-medium">{item.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={cn(
                      "shrink-0 transition-transform duration-200",
                      openItems[item.question] && "rotate-180",
                    )}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#2d2d2d"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openItems[item.question] ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 text-body text-slate-gray">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
