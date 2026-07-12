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
    <section id="security" className="benefits-block-container section-pt-sm py-[52px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex flex-col lg:flex-row gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-5/12 flex-shrink-0">
            <div className="benefits-block-icon mb-6">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-2.svg"
                alt="Security"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite mb-4">
              Protect company data with a fully-integrated approach
            </h2>
            <p className="text-lg leading-relaxed text-midnight-graphite/70">
              Instead of stitching together your own stack of third-party models, RAG capabilities, and interfaces, choose an integrated generative AI platform that minimizes risk and maximizes control.
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

            <div className="mt-12 pt-8 border-t border-[#eff0f2]">
              <div className="flex items-center gap-5">
                <Image
                  src="https://writer.com/wp-content/uploads/2024/06/Frame-3370-1-1.png"
                  alt="Anna Griffin"
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-[100px] h-[100px]"
                />
                <div>
                  <p className="text-lg italic leading-relaxed text-midnight-graphite/80 mb-3">
                    &ldquo;WRITER is a platform that meets the highest level of security clearance, is done responsibly and done well, and eliminates a lot of the potential risks.&rdquo;
                  </p>
                  <p className="font-bold text-midnight-graphite">Anna Griffin</p>
                  <p className="text-sm text-midnight-graphite/70">Chief Market Officer</p>
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
