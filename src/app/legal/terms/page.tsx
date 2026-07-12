import { HeroSection } from "@/components/sections/hero";
import { LegalContentSection } from "@/components/sections/legal";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: legalData.terms.title,
  description: "Writer terms of service.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <HeroSection
        title={legalData.terms.title}
        description={`Last updated ${legalData.terms.lastUpdated}`}
      />
      <LegalContentSection {...legalData.terms} />
    </>
  );
}
