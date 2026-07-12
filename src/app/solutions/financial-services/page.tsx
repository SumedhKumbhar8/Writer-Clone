import { FsHeroSection } from "@/components/solutions/financial-services/FsHeroSection";
import { FsLogosSection } from "@/components/solutions/financial-services/FsLogosSection";
import { FsTestimonialSection } from "@/components/solutions/financial-services/FsTestimonialSection";
import { FsSpotlightsSection } from "@/components/solutions/financial-services/FsSpotlightsSection";
import { FsAgentsSection } from "@/components/solutions/financial-services/FsAgentsSection";
import { FsWhyWriterSection } from "@/components/solutions/financial-services/FsWhyWriterSection";
import { FsResourcesSection } from "@/components/solutions/financial-services/FsResourcesSection";
import { FsBottomCtaSection } from "@/components/solutions/financial-services/FsBottomCtaSection";

export default function FinancialServicesPage() {
  return (
    <>
      <FsHeroSection />
      <FsLogosSection />
      <FsTestimonialSection />
      <FsSpotlightsSection />
      <FsAgentsSection />
      <FsWhyWriterSection />
      <FsResourcesSection />
      <FsBottomCtaSection />
    </>
  );
}
