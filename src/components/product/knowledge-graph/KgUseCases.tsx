"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const USE_CASES = [
  {
    id: "insurance",
    label: "Insurance",
    chat: "https://writer.com/wp-content/uploads/2024/01/insurance-content.png",
    image: "https://writer.com/wp-content/uploads/2024/01/insurance-img.png",
  },
  {
    id: "retail",
    label: "Retail",
    chat: "https://writer.com/wp-content/uploads/2024/01/retail-content_upd.png",
    image: "https://writer.com/wp-content/uploads/2024/01/retail-img.png",
  },
  {
    id: "technology",
    label: "Technology",
    chat: "https://writer.com/wp-content/uploads/2024/01/technology-content.png",
    image: "https://writer.com/wp-content/uploads/2024/01/technology-img.png",
  },
];

export function KgUseCases() {
  const [activeTab, setActiveTab] = React.useState("insurance");

  const activeCase = USE_CASES.find((c) => c.id === activeTab) || USE_CASES[0];

  return (
    <section className="knowledge-graph-tab-section py-[70px] lg:py-[100px] overflow-hidden bg-white">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="text-center mb-12">
            <div className="head text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite mb-4">
              USE CASES
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite max-w-[760px] mx-auto">
              Build digital assistants you can trust
            </h2>
            <p className="mt-4 text-lg text-midnight-graphite/80 max-w-2xl mx-auto">
              Knowledge Graph anchors your generative AI solutions in your company knowledge.
              Create expert assistants for any use case and be confident that your people are
              getting the correct information.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          <Reveal className="w-full lg:w-5/12">
            <ul className="flex lg:flex-col gap-2 lg:gap-0 list-none m-0 p-0">
              {USE_CASES.map((caseItem) => (
                <li key={caseItem.id} className={activeTab === caseItem.id ? "active" : ""}>
                  <button
                    onClick={() => setActiveTab(caseItem.id)}
                    className={`w-full text-left px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                      activeTab === caseItem.id
                        ? "bg-midnight-graphite text-white"
                        : "text-midnight-graphite hover:bg-gray-100"
                    }`}
                    suppressHydrationWarning
                  >
                    {caseItem.label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="w-full lg:w-6/12 relative">
            <div className="knowledge-graph-usecases-tab-content active">
              <div className="knowledge-graph-usecases-tab-content__img-wrap relative">
                <div className="knowledge-graph-usecases-tab-content__img-shadow absolute -inset-4 bg-[#f4eeff] rounded-2xl -z-10" />
                <div className="relative">
                  <figure className="m-0 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={activeCase.chat}
                      alt={`${activeCase.label} chat preview`}
                      width={1052}
                      height={988}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </figure>
                </div>
                <div className="knowledge-graph-usecases-tab-content__person absolute -bottom-6 -right-6 w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={activeCase.image}
                    alt="Person"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="knowledge-graph-usecases-tab-content__circle absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-[#5551ff]/20" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
