import { ResearchHero } from "@/components/research/Hero";
import { ApproachCards } from "@/components/research/ApproachCards";
import { ResearchHighlights } from "@/components/research/Highlights";
import { PillarsFilter } from "@/components/research/PillarsFilter";
import { researchData } from "@/data/research";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Research",
  description:
    "Learn about Writer's approach to advancing AI for the enterprise. Discover the four pillars driving our AI solutions.",
  path: "/research",
});

export default function ResearchPage() {
  const { hero, approach, highlights, pillars } = researchData;

  return (
    <>
      <ResearchHero {...hero} />
      <ApproachCards items={approach.items} />
      <ResearchHighlights {...highlights} />
      <PillarsFilter
        title={pillars.title}
        pillars={pillars.items}
        filters={pillars.filters}
        papers={pillars.papers}
      />
    </>
  );
}
