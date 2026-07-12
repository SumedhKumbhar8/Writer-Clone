import { CTASection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { platformData } from "@/data/platform";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Platform",
  description: platformData.hero.description,
  path: "/platform",
});

export default function PlatformPage() {
  const { hero, features, cta } = platformData;

  return (
    <>
      <HeroSection {...hero} />
      <FeaturesSection title={features.title} items={features.items} />
      <CTASection {...cta} />
    </>
  );
}
