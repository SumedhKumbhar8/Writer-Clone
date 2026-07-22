import { KgHero } from "@/components/product/knowledge-graph/KgHero";
import { KgHowItWorks } from "@/components/product/knowledge-graph/KgHowItWorks";
import { KgPerformance } from "@/components/product/knowledge-graph/KgPerformance";
import { KgUseCases } from "@/components/product/knowledge-graph/KgUseCases";
import { KgTestimonials } from "@/components/product/knowledge-graph/KgTestimonials";
import { KgDifferentiators } from "@/components/product/knowledge-graph/KgDifferentiators";
import { KgBenefits } from "@/components/product/knowledge-graph/KgBenefits";

export default function KnowledgeGraphPage() {
  return (
    <main className="min-h-screen">
      <section className="section-dark text-center overflow-hidden section-knowledge-graph-main section-pb-sm">
        <KgHero />
        <KgHowItWorks />
      </section>
      <KgPerformance />
      <KgUseCases />
      <KgTestimonials />
      <KgDifferentiators />
      <KgBenefits />
    </main>
  );
}
