import { Suspense } from "react";
import { CustomersHeroSection } from "@/components/customers/CustomersHeroSection";
import { CustomersContent } from "@/components/customers/CustomersContent";
import { customersPageData } from "@/data/customers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "WRITER customer spotlights - WRITER",
  description:
    "Find out why world-class companies trust WRITER to maximize productivity and creativity across every team with enterprise generative AI.",
  path: "/customers",
});

export default function CustomersPage() {
  const { hero, featuredStory, logos, filters, stories } = customersPageData;

  return (
    <div className="min-h-screen bg-canvas-white">
      <CustomersHeroSection
        {...hero}
        featuredStory={featuredStory}
        logos={logos}
      />
      <Suspense
        fallback={
          <div className="mx-auto max-w-[1080px] px-[15px] py-16 text-center text-body text-slate-gray">
            Loading stories…
          </div>
        }
      >
        <CustomersContent filters={filters} stories={stories} />
      </Suspense>
    </div>
  );
}
