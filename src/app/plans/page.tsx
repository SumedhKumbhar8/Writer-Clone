import { PlansBottomCTA } from "@/components/plans/PlansBottomCTA";
import { PlansCards } from "@/components/plans/PlansCards";
import { PlansComparison } from "@/components/plans/PlansComparison";
import { PlansFAQ } from "@/components/plans/PlansFAQ";
import { PlansHero } from "@/components/plans/PlansHero";
import { PlansLogos } from "@/components/plans/PlansLogos";
import { plansData } from "@/data/plans";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "WRITER plans",
  description: "Compare WRITER plans and empower your entire organization to transform work with agentic AI. Start a 14-day free trial, or contact sales.",
  path: "/plans",
});

export default function PlansPage() {
  const { hero, plans, logos, comparison, faq, cta } = plansData;

  return (
    <>
      <PlansHero {...hero} />
      <PlansCards plans={plans} />
      <PlansLogos {...logos} />
      <PlansComparison {...comparison} />
      <PlansFAQ {...faq} />
      <PlansBottomCTA {...cta} />
    </>
  );
}
