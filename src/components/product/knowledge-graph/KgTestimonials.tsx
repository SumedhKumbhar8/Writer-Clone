"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const TESTIMONIALS = [
  {
    quote: "With Knowledge Graph, we\u2019ve built digital assistants that enable salespeople in real time, giving them accurate, on-brand insights on objection handling, competitive differentiation, personas, and more.",
    author: "Anna Griffin",
    role: "Chief Market Officer",
    image: "https://writer.com/wp-content/uploads/2024/02/Anna_Griffin_b_and_w_color-compressed.png",
    companyLogo: "https://writer.com/wp-content/uploads/2024/04/commvault.svg",
    companyLink: "https://writer.com/blog/commvault-customer-story/",
  },
  {
    quote: "WRITER nailed it: agentic AI that actually works at scale, Knowledge Graphs that unlock real value, UX that users love, and a customer success model that ensures impact. This is what differentiation looks like.",
    author: "Ajay Dhaul",
    role: "Founder & CEO, Omnea Ventures",
    image: "https://writer.com/wp-content/uploads/2024/02/Ajay-Dhaul-green.png",
    companyLogo: "https://writer.com/wp-content/uploads/2026/01/Omnea-Ventures-Logo-2.svg",
    companyLink: "",
  },
  {
    quote: "WRITER enables my technology team to provide high quality generative AI applications, without compromising on our security needs or responsible AI guidelines. From digital assistants to editorial content, we\u2019ve been able to build powerful, secure applications on the WRITER full-stack platform.",
    author: "Nitin Tandon",
    role: "CIO of Vanguard",
    image: "https://writer.com/wp-content/uploads/2024/02/Nitin_Tandon_b_w_color-compressed.png",
    companyLogo: "https://writer.com/wp-content/uploads/2024/05/vanguard.svg",
    companyLink: "",
  },
];

export function KgTestimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const item = TESTIMONIALS[activeIndex];

  return (
    <section className="py-[70px] lg:py-[100px] bg-white overflow-hidden">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="platform-quote max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="transition-all duration-500" key={activeIndex}>
              <blockquote className="text-xl lg:text-2xl leading-relaxed text-midnight-graphite font-medium italic mb-10">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="get-proven-approach-quote flex items-center justify-center gap-5">
                <Image
                  src={item.image}
                  alt={item.author}
                  width={99}
                  height={99}
                  className="rounded-full object-cover w-[99px] h-[99px]"
                />
                <div className="text-left">
                  <p className="text-lg font-bold text-midnight-graphite">{item.author}</p>
                  <p className="text-base text-midnight-graphite/70">{item.role}</p>
                  {item.companyLogo && (
                    <div className="relative w-24 h-6 mt-2">
                      <Image
                        src={item.companyLogo}
                        alt="Company Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="home3-btns-nav prev w-[38px] h-[38px] rounded-full bg-[#e4e7ed] flex items-center justify-center hover:bg-[#d2d4d7] transition-colors"
              aria-label="Previous quote"
              suppressHydrationWarning
            >
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path d="M6 1L1 6.5L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 6.5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === activeIndex ? "bg-midnight-graphite" : "bg-[#e4e7ed]"
                  }`}
                  aria-label={`Go to quote ${i + 1}`}
                  suppressHydrationWarning
                />
              ))}
            </div>

            <button
              onClick={next}
              className="home3-btns-nav next w-[38px] h-[38px] rounded-full bg-[#e4e7ed] flex items-center justify-center hover:bg-[#d2d4d7] transition-colors"
              aria-label="Next quote"
              suppressHydrationWarning
            >
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path d="M10 12L15 6.5L10 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0 6.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
