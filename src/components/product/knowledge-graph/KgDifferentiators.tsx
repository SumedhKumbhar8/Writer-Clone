import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const DIFFERENTIATORS = [
  {
    title: "Excels at advanced tasks",
    description: "Knowledge Graph supports multi-hop questions, handles complex data formats, and produces fewer hallucinations.",
    icon: "https://writer.com/wp-content/uploads/2024/07/KG_icon_1.svg?w=35",
  },
  {
    title: "Provides explainable AI",
    description: "Knowledge Graph shows thought process, decomposes broad question into subquestions, and provides specific source citations.",
    icon: "https://writer.com/wp-content/uploads/2024/07/KG_icon_2.svg?w=26",
  },
  {
    title: "Scales with enterprise data",
    description: "Unlike traditional RAG, Knowledge Graph excels at retrieval with concentrated data, and updating data is fast, easy, and inexpensive.",
    icon: "https://writer.com/wp-content/uploads/2024/07/KG_icon_3.svg?w=27",
  },
  {
    title: "Supports your file types",
    description: "Knowledge Graph handles structured and unstructured data, including spreadsheets, docs, charts, presentations, PDFs, and more.",
    icon: "https://writer.com/wp-content/uploads/2024/07/KG_icon_4.svg?w=32",
  },
];

export function KgDifferentiators() {
  return (
    <section className="py-[70px] lg:py-[100px] bg-white">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="text-center mb-14">
            <div className="head text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite mb-4">
              DIFFERENTIATORS
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite">
              Designed to meet enterprise requirements
            </h2>
          </div>
        </Reveal>

        <div className="knowledge-enterprise-data-row grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DIFFERENTIATORS.map((diff, index) => (
            <Reveal key={diff.title}>
              <div className="knowledge-enterprise-data-item flex gap-5 items-start">
                <div className="knowledge-enterprise-data-item__icon flex-shrink-0 w-[52px] h-[52px] rounded-xl bg-[#f4eeff] flex items-center justify-center">
                  <Image
                    src={diff.icon}
                    alt={diff.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="knowledge-enterprise-data-item__content">
                  <h3 className="text-xl font-semibold text-midnight-graphite mb-2">{diff.title}</h3>
                  <p className="text-base leading-relaxed text-midnight-graphite/70">{diff.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
