"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type PillarItem = {
  title: string;
  description: string;
  icon: string;
  slug: string;
};

type PaperItem = {
  title: string;
  categories: string[];
  date: string;
  href: string;
};

type PillarsFilterProps = {
  title: string;
  pillars: PillarItem[];
  filters: string[];
  papers: PaperItem[];
};

export function PillarsFilter({
  title,
  pillars,
  filters,
  papers,
}: PillarsFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPapers = useMemo(() => {
    if (activeFilter === "All") return papers;
    return papers.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter, papers]);

  return (
    <section className="section-padding bg-canvas-white">
      <Container>
        <Reveal>
          <SectionHeading title={title} align="center" className="mb-14" />
        </Reveal>

        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className="flex flex-col gap-4">
                <Image
                  src={pillar.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <h4 className="font-display text-heading text-midnight-graphite">
                  {pillar.title}
                </h4>
                <p className="text-body leading-relaxed text-slate-gray">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap gap-3 border-b border-cloud-white pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              suppressHydrationWarning
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 py-2 text-body font-semibold transition-all duration-200",
                activeFilter === filter
                  ? "bg-midnight-graphite text-canvas-white"
                  : "bg-cloud-white text-midnight-graphite hover:bg-fog",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredPapers.map((paper) => (
            <Link
              key={paper.title + paper.date}
              href={paper.href}
              className="group flex items-start gap-4 border border-cloud-white p-6 transition-all duration-300 hover:border-action-blue"
            >
              <Image
                src="/images/research/paper-icon.svg"
                alt=""
                width={22}
                height={22}
                className="mt-1 h-[22px] w-[22px] shrink-0"
              />
              <div className="flex flex-1 flex-col gap-1.5">
                <span className="text-body font-medium leading-snug text-midnight-graphite transition-colors duration-300 group-hover:text-action-blue">
                  {paper.title}
                </span>
                <span className="flex items-center gap-2 text-caption text-ghost-gray">
                  <span>{paper.categories.join(", ")}</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-ghost-gray" />
                  {paper.date}
                </span>
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              >
                <circle cx="14" cy="14" r="13.3333" fill="#E4E7ED" />
                <line x1="7.3335" y1="14.8335" x2="20.6668" y2="14.8335" stroke="#000" />
                <path d="M15.3334 20.6667L20.6667 14.6667L15.3334 8.66675" stroke="#000" strokeLinecap="square" />
              </svg>
            </Link>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <p className="py-16 text-center text-body text-ghost-gray">
            No results found.
          </p>
        )}
      </Container>
    </section>
  );
}
