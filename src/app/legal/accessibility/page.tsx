import { HeroSection } from "@/components/sections/hero";
import { LegalContentSection } from "@/components/sections/legal";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: legalData.accessibility.title,
  description: "Writer accessibility statement.",
  path: "/legal/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <HeroSection
        title={legalData.accessibility.title}
        description={`Last updated ${legalData.accessibility.lastUpdated}`}
      />
      <LegalContentSection {...legalData.accessibility} />
    </>
  );
}
