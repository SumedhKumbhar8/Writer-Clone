import { EngineeringGrid, EngineeringHero } from "@/components/engineering/EngineeringHero";
import { EngineeringHeader } from "@/components/engineering/EngineeringHeader";
import { EngineeringNewsletter } from "@/components/engineering/EngineeringNewsletter";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "WRITER Engineering blog | AI development news",
  description:
    "Engineering deep dives from WRITER — AI infrastructure, agents, research, and product updates.",
  path: "/engineering",
});

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <EngineeringHeader />
      <div className="pt-[110px]">
        <EngineeringHero />
        <EngineeringGrid />
      </div>
      <EngineeringNewsletter />
    </div>
  );
}
