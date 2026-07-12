"use client";

import Link from "next/link";
import { AI_STUDIO_SCROLL_CARDS } from "@/data/ai-studio";
import { cn } from "@/lib/utils";

export function AiStudioScrollCards() {
  return (
    <section className="ai-studio-scroll-cards py-[50px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {AI_STUDIO_SCROLL_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex min-h-[420px] w-[min(510px,calc(100vw-40px))] shrink-0 flex-col rounded-[20px] bg-black px-7 py-10"
            >
              <span
                className={cn(
                  "mb-6 inline-flex w-fit items-center rounded-lg px-5 py-2.5 text-[16px] font-medium tracking-[1.6px] text-black",
                  card.badgeColor === "yellow" ? "bg-[#ddff7b]" : "bg-[#7bffb8]",
                )}
              >
                {card.badge}
              </span>

              <h2 className="text-[clamp(28px,4vw,36px)] font-medium leading-[1.2] tracking-[-0.72px] text-canvas-white">
                {card.title}
              </h2>

              <p className="mt-4 flex-1 text-[16px] leading-[1.6] text-[#d2d4d7]">
                {card.description}
              </p>

              <Link
                href={card.link.href}
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#333333] px-6 py-3.5 text-[16px] font-medium text-canvas-white transition-opacity hover:opacity-80"
              >
                {card.link.label}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
