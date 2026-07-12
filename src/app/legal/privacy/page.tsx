import { HeroSection } from "@/components/sections/hero";
import { LegalContentSection } from "@/components/sections/legal";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: legalData.privacy.title,
  description: "Writer privacy policy.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        title={legalData.privacy.title}
        description={`Last updated ${legalData.privacy.lastUpdated}`}
      />
      <LegalContentSection {...legalData.privacy} />
    </>
  );
}
