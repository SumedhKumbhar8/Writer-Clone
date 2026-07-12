import { HeroSection } from "@/components/sections/hero";
import { LegalContentSection } from "@/components/sections/legal";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: legalData.security.title,
  description: "Writer security practices.",
  path: "/legal/security",
});

export default function SecurityPage() {
  return (
    <>
      <HeroSection
        title={legalData.security.title}
        description={`Last updated ${legalData.security.lastUpdated}`}
      />
      <LegalContentSection {...legalData.security} />
    </>
  );
}
