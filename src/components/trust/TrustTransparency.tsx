import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Transparency",
    text: "We don’t use the data you share with us to create, modify, or train our models. You can configure organization-wide data controls, including an automated data deletion schedule.",
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
    <section id="transparency-control" className="benefits-block-container section-pt-sm">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex gap-6 lg:gap-9">
          <Reveal className="benefits-block-icon hidden lg:block flex-shrink-0 w-[120px]">
            <Image
              src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-1.svg"
              alt="Transparency & control"
              width={120}
              height={120}
              className="object-contain"
            />
          </Reveal>

          <Reveal className="benefits-block-content flex-1 min-w-0">
            <div className="benefits-block-icon mb-4 lg:hidden">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-1.svg"
                alt="Transparency & control"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="head">Transparency &amp; control</p>
            <h2>Understand what’s happening across your deployment</h2>
            <p className="benefits-block-desc benefits-block-desc--wide">
              We believe you should have full insight into and control over product
              usage, data storage, and agent activity to meet your specific security
              requirements.
            </p>

            <div className="row grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 mt-8 max-w-[925px]">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="ben-block-inner">
                  <p>
                    <strong>{feature.title}</strong>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
