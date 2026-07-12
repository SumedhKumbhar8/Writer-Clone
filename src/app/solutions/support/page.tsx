import { SupportHeroSection } from "@/components/solutions/support/SupportHeroSection";
import { SupportLogosSection } from "@/components/solutions/support/SupportLogosSection";
import { SupportQuoteSection } from "@/components/solutions/support/SupportQuoteSection";
import { SupportSpotlightsSection } from "@/components/solutions/support/SupportSpotlightsSection";
import { SupportAgentsSection } from "@/components/solutions/support/SupportAgentsSection";
import { SupportWhyWriterSection } from "@/components/solutions/support/SupportWhyWriterSection";
import { SupportResourcesSection } from "@/components/solutions/support/SupportResourcesSection";
import { SupportBottomCtaSection } from "@/components/solutions/support/SupportBottomCtaSection";

export default function SupportPage() {
  return (
    <>
      <SupportHeroSection />
      <SupportLogosSection />
      <SupportQuoteSection />
      <SupportSpotlightsSection />
      <SupportAgentsSection />
      <SupportWhyWriterSection />
      <SupportResourcesSection />
      <SupportBottomCtaSection />
    </>
  );
}
