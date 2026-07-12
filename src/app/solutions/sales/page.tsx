import { SalesHeroSection } from "@/components/solutions/sales/SalesHeroSection";
import { SalesLogosSection } from "@/components/solutions/sales/SalesLogosSection";
import { SalesAgentsSection } from "@/components/solutions/sales/SalesAgentsSection";
import { SalesWhyWriterSection } from "@/components/solutions/sales/SalesWhyWriterSection";
import { SalesResourcesSection } from "@/components/solutions/sales/SalesResourcesSection";
import { SalesBottomCtaSection } from "@/components/solutions/sales/SalesBottomCtaSection";

export default function SalesPage() {
  return (
    <>
      <SalesHeroSection />
      <SalesLogosSection />
      <SalesAgentsSection />
      <SalesWhyWriterSection />
      <SalesResourcesSection />
      <SalesBottomCtaSection />
    </>
  );
}
