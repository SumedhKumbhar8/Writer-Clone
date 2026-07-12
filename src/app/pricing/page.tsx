import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing";
import { pricingData } from "@/data/pricing";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description: pricingData.hero.description,
  path: "/pricing",
});

export default function PricingPage() {
  const { hero, plans, faq, cta } = pricingData;

  return (
    <>
      <HeroSection {...hero} description={hero.description} />
      <PricingSection plans={plans} />
      <FAQSection {...faq} />
      <CTASection {...cta} />
    </>
  );
}
