import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { LlmsHero } from "@/components/llms/LlmsHero";
import { ThreePillars } from "@/components/llms/ThreePillars";
import { BenchmarksSection } from "@/components/llms/BenchmarksSection";
import { ModelsSection } from "@/components/llms/ModelsSection";
import { CapabilitiesSection } from "@/components/llms/CapabilitiesSection";
import { LLMS_CTA } from "@/data/llms";

export const metadata = createPageMetadata({
  title: "Enterprise LLMs for mission-critical workflows | Palmyra",
  description:
    "Meet Palmyra, our family of LLMs, engineered for precise, dependable performance. Built for any industry and adaptable to any workflow.",
  path: "/llms",
});

export default function LlmsPage() {
  const { title, primaryCta, secondaryCta } = LLMS_CTA;
  return (
    <div className="llms-page">
      <LlmsHero />
      <ThreePillars />
      <BenchmarksSection />
      <ModelsSection />
      <CapabilitiesSection />

      {/* Bottom CTA — matches writer.com section-bottom-cta-fs */}
      <div
        className="section-bottom-cta-fs section-pt-sm section-pb-sm"
        style={{ backgroundColor: "#f6effd", padding: "100px 0" }}
      >
        <div className="container" style={{ maxWidth: 1136 }}>
          <h2
            className="mx-auto px-0 text-center"
            style={{
              maxWidth: 830,
              fontFamily: "var(--font-poppins)",
              fontSize: 44,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#000",
              margin: 0,
            }}
          >
            {title}
          </h2>
          <div style={{ marginTop: 32 }}>
            <div className="wpm-btns-row">
              <Link
                href={primaryCta.href}
                className="dc-btn dc-btn_outline-secondary"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="dc-btn dc-btn_secondary"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
