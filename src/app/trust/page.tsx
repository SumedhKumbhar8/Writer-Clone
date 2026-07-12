import { TrustHero } from "@/components/trust/TrustHero";
import { TrustLogos } from "@/components/trust/TrustLogos";
import { TrustFeatures } from "@/components/trust/TrustFeatures";
import { TrustTestimonials } from "@/components/trust/TrustTestimonials";
import { TrustSafetyGovernance } from "@/components/trust/TrustSafetyGovernance";
import { TrustTransparency } from "@/components/trust/TrustTransparency";
import { TrustPrivacy } from "@/components/trust/TrustPrivacy";
import { TrustSecurity } from "@/components/trust/TrustSecurity";
import { TrustFAQ } from "@/components/trust/TrustFAQ";
import { TrustBottomCTA } from "@/components/trust/TrustBottomCTA";

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-white">
      <TrustHero />
      <TrustLogos />
      <TrustFeatures />
      <TrustTestimonials />
      <TrustSafetyGovernance />
      <TrustTransparency />
      <TrustPrivacy />
      <TrustSecurity />
      <TrustFAQ />
      <TrustBottomCTA />
    </main>
  );
}
