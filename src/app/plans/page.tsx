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
  description:
    "Compare WRITER plans and empower your entire organization to transform work with agentic AI. Start a 14-day free trial, or contact sales.",
  path: "/plans",
});

export default function PlansPage() {
  const { hero, plans, logos, comparison, faq, cta } = plansData;

  return (
    <div className="plans-page bg-canvas-white">
      <section className="plans-section plans_v2 main-screen pb-4 pt-[130px]">
        <PlansHero {...hero} />
        <div className="mt-[43px]">
          <PlansCards plans={plans} />
        </div>
      </section>
      <PlansLogos {...logos} />
      <PlansComparison {...comparison} />
      <PlansFAQ {...faq} />
      <PlansBottomCTA {...cta} />
    </div>
  );
}
