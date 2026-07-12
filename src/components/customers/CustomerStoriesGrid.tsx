"use client";

import type { CustomerStory } from "@/data/customers";
import { CustomerStoryCard } from "./CustomerStoryCard";

type CustomerStoriesGridProps = {
  stories: CustomerStory[];
};

export function CustomerStoriesGrid({ stories }: CustomerStoriesGridProps) {
  if (stories.length === 0) {
    return (
      <section className="bg-canvas-white pt-8">
        <div className="mx-auto max-w-[1080px] px-[15px] py-16 text-center">
          <p className="text-[18px] text-midnight-graphite">
            No customer stories match these filters.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-canvas-white pt-8">
      <div className="mx-auto max-w-[1080px] px-[15px]">
        <div className="customers-row-v2 flex flex-wrap" style={{ margin: "0 -6px", rowGap: "30px" }}>
          {stories.map((story) => (
            <div
              key={story.id}
              className="customer-col-v2 w-full px-[6px] md:w-1/2 lg:w-1/3"
            >
              <CustomerStoryCard story={story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
