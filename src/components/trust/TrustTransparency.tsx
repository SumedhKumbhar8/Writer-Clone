import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Transparency",
    text: "We don\u2019t use the data you share with us to create, modify, or train our models. You can configure organization-wide data controls, including an automated data deletion schedule.",
  },
  {
    title: "Access controls",
    text: "Role-based permissions and least-privilege access helps ensure every action is appropriately authorized, while audit logs surface how Writer is used across your organization.",
  },
  {
    title: "Agent observability",
    text: "Activity traces and performance reports help you monitor AI behavior, understand request patterns, and review how workflows are executed.",
  },
  {
    title: "Monitoring tools",
    text: "Centrally managed rate limits, caching, and alerts provide visibility into performance, help control costs, and surface issues quickly.",
  },
];

export function TrustTransparency() {
  return (
    <section id="transparency-control" className="benefits-block-container section-pt-sm py-[52px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex flex-col lg:flex-row gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-5/12 flex-shrink-0">
            <div className="benefits-block-icon mb-6">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-1.svg"
                alt="Transparency & control"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite mb-4">
              Understand what\u2019s happening across your deployment
            </h2>
            <p className="text-lg leading-relaxed text-midnight-graphite/70">
              We believe you should have full insight into and control over product usage, data storage, and agent activity to meet your specific security requirements.
            </p>
          </Reveal>

          <Reveal className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="border-t border-[#eff0f2] pt-5">
                  <h3 className="text-xl font-semibold text-midnight-graphite mb-3">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-midnight-graphite/70">{feature.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
