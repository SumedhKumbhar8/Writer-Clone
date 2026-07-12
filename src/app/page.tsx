import { AgentSection } from "@/components/home/AgentSection";
import { BottomCTA } from "@/components/home/BottomCTA";
import { CustomersSection } from "@/components/home/CustomersSection";
import { HomeHero } from "@/components/home/HomeHero";
import { KeyFeaturesSection } from "@/components/home/KeyFeaturesSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { TrustedLogos } from "@/components/home/TrustedLogos";
import { WhyWriterSection } from "@/components/home/WhyWriterSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustedLogos />
      <AgentSection />
      <KeyFeaturesSection />
      <CustomersSection />
      <WhyWriterSection />
      <PlatformSection />
      <ResourcesSection />
      <BottomCTA />
    </>
  );
}
