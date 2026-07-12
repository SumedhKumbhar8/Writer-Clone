import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Safety & governance",
    icon: "https://writer.com/wp-content/uploads/2024/06/safety-icon-trust-1.svg",
    href: "#safety-governance",
  },
  {
    title: "Transparency & control",
    icon: "https://writer.com/wp-content/uploads/2024/06/Group-3008.svg",
    href: "#transparency-control",
  },
  {
    title: "Privacy & compliance",
    icon: "https://writer.com/wp-content/uploads/2024/06/Group-3006.svg",
    href: "#privacy-compliance",
  },
  {
    title: "Security",
    icon: "https://writer.com/wp-content/uploads/2024/06/Group-3007.svg",
    href: "#security",
  },
];

export function TrustFeatures() {
  return (
    <section className="section section-benefits section-pt-xs section-pb-xs py-[52px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="text-center mb-12">
            <div className="head text-[clamp(28px,3.5vw,36px)] font-medium leading-[1.2] tracking-[-0.72px] text-midnight-graphite max-w-[760px] mx-auto">
              The only full-stack generative AI platform built just for enterprises
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <Reveal key={feature.title}>
              <Link
                href={feature.href}
                className="ai-tools-item ai-tools-item_link w-full group block p-6 rounded-2xl border border-[#eff0f2] hover:border-[#d2d4d7] transition-all"
              >
                <div className="ai-tools-item__icon w-[68px] h-[68px] mb-5">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={68}
                    height={68}
                    className="object-contain"
                  />
                </div>
                <h3 className="wp-block-heading text-[20px] font-medium leading-[1.3] text-midnight-graphite mb-3">
                  {feature.title}
                </h3>
                <div className="dc-web-arrow-4 dc-web-arrow-4_size-3 flex items-center gap-2 text-sm font-medium text-midnight-graphite/50 group-hover:text-midnight-graphite transition-colors">
                  <span>Learn more</span>
                  <svg width="16" height="7" viewBox="0 0 16 7" fill="none">
                    <path d="M12.01 2.625H0V4.375H12.01V7L16 3.5L12.01 0V2.625Z" fill="currentColor" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
