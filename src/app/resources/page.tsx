import { CTASection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { ResourcesSection } from "@/components/sections/resources";
import { resourcesData } from "@/data/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resources",
  description: resourcesData.hero.description,
  path: "/resources",
});

export default function ResourcesPage() {
  const { hero, blog, webinars, guides, cta } = resourcesData;

  return (
    <>
      <HeroSection {...hero} />
      <ResourcesSection {...blog} />
      <ResourcesSection {...webinars} />
      <ResourcesSection {...guides} />
      <CTASection {...cta} />
    </>
  );
}
