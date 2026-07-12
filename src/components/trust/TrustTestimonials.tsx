"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const QUOTES = [
  {
    quote: "WRITER stood out in our due diligence process to meet our privacy and compliance requirements. Their transparent policy around not retaining or training on our data was a key factor in our selection of and partnership with WRITER.",
    author: "Ajay Dhaul",
    title: "Founder & CEO",
    image: "https://writer.com/wp-content/uploads/2024/06/Ajay-Dhaul-1.png",
    companyLogo: "https://writer.com/wp-content/uploads/2026/01/omnea-ventures-logo-1.svg",
  },
];

export function TrustTestimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const item = QUOTES[activeIndex];

  return (
    <section className="section-pb-xs section-pt-xs py-[52px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="swiper js-swiper-quotes css-swiper-quotes-equal">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Reveal>
                <div className="text-center max-w-[860px] mx-auto" key={activeIndex}>
                  <blockquote className="text-xl lg:text-2xl leading-relaxed text-midnight-graphite font-medium italic mb-10">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-center gap-5">
                    <Image
                      src={item.image}
                      alt={item.author}
                      width={99}
                      height={99}
                      className="rounded-full object-cover w-[99px] h-[99px]"
                    />
                    <div className="text-left">
                      <p className="text-lg font-bold text-midnight-graphite">{item.author}</p>
                      <p className="text-base text-midnight-graphite/70">{item.title}</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
