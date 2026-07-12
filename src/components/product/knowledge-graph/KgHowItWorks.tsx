"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const HOW_IT_WORKS_DATA = [
  {
    step: "1",
    title: "Richer semantic understanding",
    description: "Knowledge Graph draws on a specialized LLM that\u2019s trained to process data at scale and build valuable semantic relationships between data points. It stores data in a cost-effective, easy-to-update graph structure.",
    image: "https://writer.com/wp-content/uploads/2024/01/how_it_w-1.png",
    alternativeTitle: "The alternative approach",
    alternativeDescription: "By converting data into vector embeddings, traditional RAG can only define similarity by distance between data points but has no context on their semantic relationships. Vector databases are also difficult and costly to maintain and update.",
  },
  {
    step: "2",
    title: "Accurate retrieval methodology",
    description: "Because graph structures retain semantic relationships, Knowledge Graph accurately retrieves relevant data for each query. Our retrieval-aware compression technique condenses data and indexes it with metadata, which gives it rich context.",
    image: "https://writer.com/wp-content/uploads/2024/01/how_it_w-2.png",
    alternativeTitle: "The alternative approach",
    alternativeDescription: "Traditional RAG converts the query into a vector embedding and uses a rough algorithm to find the closest data points to the query, without any understanding of the relationship between the data points. When data is dense, this method fails to return the most relevant data consistently.",
  },
  {
    step: "3",
    title: "State-of-the-art LLMs",
    description: "To generate a response, Knowledge Graph sends relevant data to our Palmyra LLMs, which are top-ranked and trained with 1 trillion tokens of quality data. We apply advanced techniques to enhance performance and minimize hallucinations.",
    image: "https://writer.com/wp-content/uploads/2024/01/how_it_w-3.png",
    alternativeTitle: "The alternative approach",
    alternativeDescription: "The quality of the answer depends on the quality of the retrieval, and the level of hallucination depends on the quality of the underlying LLM and the techniques you employ.",
  },
];

function HowItWorksStep({ item, index }: { item: typeof HOW_IT_WORKS_DATA[0]; index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Reveal>
      <div className="knowledge-hiw-row flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-20 lg:mb-32">
        <div className="knowledge-hiw-col-l w-full lg:w-1/2">
          <div className="relative aspect-[1120/829] w-full overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="knowledge-hiw-col-r w-full lg:w-1/2 flex flex-col items-start gap-6">
          <span className="text-5xl lg:text-7xl font-bold text-canvas-white/20 leading-none">
            {item.step}
          </span>
          <h3 className="text-2xl lg:text-3xl font-semibold text-canvas-white leading-tight">
            {item.title}
          </h3>
          <p className="text-lg leading-relaxed text-[#D2D4D7]">
            {item.description}
          </p>

          <div className="knowledge-hiw-col-r__tooltip-wrap w-full mt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sf_simple_link knowledge-hiw-col-r__btn inline-flex items-center gap-2 text-[16px] font-medium text-[#BFCBFF] hover:text-[#8FA3FF] transition-colors"
              suppressHydrationWarning
            >
              <span>What\u2019s the alternative approach?</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={`knowledge-hiw-col-r__tooltip-content overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="font-bold text-lg text-canvas-white">{item.alternativeTitle}</h4>
                <p className="text-base leading-relaxed text-[#D2D4D7]">
                  {item.alternativeDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function KgHowItWorks() {
  return (
    <section className="section-dark py-[70px] lg:py-[130px] overflow-hidden">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="head text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white mb-4">
              HOW IT WORKS
            </div>
          </div>
        </Reveal>

        <div className="knowledge-hiw-row-wrap">
          {HOW_IT_WORKS_DATA.map((item, index) => (
            <HowItWorksStep key={item.step} item={item} index={index} />
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-16 lg:mt-20">
            <p className="mb-6 text-lg text-[#D2D4D7]">
              Want to learn more about the limitations of RAG approaches that uses vector retrieval?
            </p>
            <Link
              href="https://writer.com/blog/vector-based-retrieval-limitations-rag/"
              className="dc-btn dc-btn_dark-200 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#151515] text-white text-[16px] font-semibold hover:bg-[#2a2a2a] transition-colors"
            >
              Read the blog post
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
