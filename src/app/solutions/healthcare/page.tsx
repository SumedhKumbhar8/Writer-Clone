import { HcHeroSection } from "@/components/solutions/healthcare/HcHeroSection";
import { HcLogosSection } from "@/components/solutions/healthcare/HcLogosSection";
import { HcTestimonialSection } from "@/components/solutions/healthcare/HcTestimonialSection";
import { HcSpotlightsSection } from "@/components/solutions/healthcare/HcSpotlightsSection";
import { HcAgentsSection } from "@/components/solutions/healthcare/HcAgentsSection";
import { HcWhyWriterSection } from "@/components/solutions/healthcare/HcWhyWriterSection";
import { HcResourcesSection } from "@/components/solutions/healthcare/HcResourcesSection";
import { HcBottomCtaSection } from "@/components/solutions/healthcare/HcBottomCtaSection";

export default function HealthcarePage() {
  return (
    <>
      <HcHeroSection />
      <HcLogosSection />
      <HcTestimonialSection />
      <HcSpotlightsSection />
      <HcAgentsSection />
      <HcWhyWriterSection />
      <HcResourcesSection />
      <HcBottomCtaSection />
    </>
  );
}
