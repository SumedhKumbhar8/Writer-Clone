import { MktHeroSection } from "@/components/solutions/marketing/MktHeroSection";
import { MktLogosSection } from "@/components/solutions/marketing/MktLogosSection";
import { MktSpotlightsSection } from "@/components/solutions/marketing/MktSpotlightsSection";
import { MktAgentsSection } from "@/components/solutions/marketing/MktAgentsSection";
import { MktWhyWriterSection } from "@/components/solutions/marketing/MktWhyWriterSection";
import { MktResourcesSection } from "@/components/solutions/marketing/MktResourcesSection";
import { MktBottomCtaSection } from "@/components/solutions/marketing/MktBottomCtaSection";

export default function MarketingPage() {
  return (
    <>
      <MktHeroSection />
      <MktLogosSection />
      <MktSpotlightsSection />
      <MktAgentsSection />
      <MktWhyWriterSection />
      <MktResourcesSection />
      <MktBottomCtaSection />
    </>
  );
}
