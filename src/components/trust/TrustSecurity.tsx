import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Authentication",
    text: "We support all major SSO providers and multi-factor authentication so you can leverage your existing security and identity solutions when deploying WRITER.",
  },
  {
    title: "ISO and SOC 2 Type II certifications",
    text: "We undergo annual SOC 2 Type II evaluations and hold ISO/IEC 27001, 27701, and 42001 certifications, confirming our implemented controls for security, privacy, and responsible AI management.",
  },
  {
    title: "Data protection",
    text: "We encrypt data shared within our platform at rest and in transit, and provision data in an isolated production project.",
  },
  {
    title: "System access controls",
    text: "Agent requests to connected systems pass through a governed execution layer that validates identity, checks permissions, and records activity.",
  },
];

export function TrustSecurity() {
  return (
    <section id="security" className="benefits-block-container section-pt-sm">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex gap-6 lg:gap-9">
          <Reveal className="benefits-block-icon hidden lg:block flex-shrink-0 w-[120px]">
            <Image
              src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-2.svg"
              alt="Security"
              width={120}
              height={120}
              className="object-contain"
            />
          </Reveal>

          <Reveal className="benefits-block-content flex-1 min-w-0">
            <div className="benefits-block-icon mb-4 lg:hidden">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-2.svg"
                alt="Security"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="head">Security</p>
            <h2>Protect company data with a fully-integrated approach</h2>
            <p className="benefits-block-desc benefits-block-desc--wide">
              Instead of stitching together your own stack of third-party models, RAG
              capabilities, and interfaces, choose an integrated generative AI
              platform that minimizes risk and maximizes control.
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

            <div className="platform-quote-wrap flex items-start gap-5 mt-10 max-w-[615px]">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3370-1-1.png"
                alt="Anna Griffin"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px] flex-shrink-0"
              />
              <div>
                <p className="platform-quote mb-3">
                  &ldquo;WRITER is a platform that meets the highest level of
                  security clearance, is done responsibly and done well, and
                  eliminates a lot of the potential risks.&rdquo;
                </p>
                <p className="font-bold text-black">Anna Griffin</p>
                <p className="text-sm text-black/70">Chief Market Officer</p>
                <div className="relative w-[122px] h-6 mt-1">
                  <Image
                    src="https://writer.com/wp-content/uploads/2024/06/Group-3497.png"
                    alt="Commvault"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
