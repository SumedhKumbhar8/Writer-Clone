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
    <section className="section section-benefits section-pt-xs section-pb-xs">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="trust-features__title">
            The only full-stack generative AI platform built just for enterprises
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {FEATURES.map((feature) => (
            <Reveal key={feature.title}>
              <Link href={feature.href} className="ai-tools-item ai-tools-item_link">
                <div className="ai-tools-item__icon">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={68}
                    height={68}
                    className="object-contain"
                  />
                </div>
                <h3 className="wp-block-heading">{feature.title}</h3>
                <div className="dc-web-arrow-4 dc-web-arrow-4_size-3" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
