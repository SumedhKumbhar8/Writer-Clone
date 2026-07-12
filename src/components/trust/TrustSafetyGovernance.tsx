import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Top-scoring LLMs",
    text: "Our models offer accuracy and quality through third-party testing and benchmarking. Read how Palmyra, the WRITER family of LLMs, ranks on Stanford HELM benchmarking.",
    link: "https://crfm.stanford.edu/helm/lite/latest/#/leaderboard",
  },
  {
    title: "Consistency",
    text: "Policies and standardized execution paths support predictable performance across use cases.",
  },
  {
    title: "Explainability",
    text: "Activity traces, source citation, and decision logs provide clarity into how AI reached an answer.",
  },
  {
    title: "Governance",
    text: "Guardrails, identity validation, granular permissions and approval flows shape how agents interact with connected systems.",
  },
];

export function TrustSafetyGovernance() {
  return (
    <section id="safety-governance" className="benefits-block-container section-pt-sm py-[52px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex flex-col lg:flex-row gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-5/12 flex-shrink-0">
            <div className="benefits-block-icon mb-6">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651.svg"
                alt="Safety & governance"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite mb-4">
              Supervise safe, consistent AI behavior
            </h2>
            <p className="text-lg leading-relaxed text-midnight-graphite/70">
              We give you the tools to supervise how AI operates across your organization, from controls over connected data and apps, to integrated guardrails that keep agent behavior aligned with your system requirements.
            </p>
          </Reveal>

          <Reveal className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="border-t border-[#eff0f2] pt-5">
                  <h3 className="text-xl font-semibold text-midnight-graphite mb-3">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-midnight-graphite/70">
                    {feature.text}
                    {feature.link && (
                      <>
                        {" "}
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8]"
                        >
                          Read how Palmyra ranks
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#eff0f2]">
              <div className="flex items-center gap-5">
                <Image
                  src="https://writer.com/wp-content/uploads/2024/06/Frame-3370-1.png"
                  alt="Mary Ellen Slayter"
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-[100px] h-[100px]"
                />
                <div>
                  <p className="text-lg italic leading-relaxed text-midnight-graphite/80 mb-3">
                    &ldquo;There are two reasons I chose WRITER: one was about security, privacy, and compliance. And the other one was about ethics and governance.&rdquo;
                  </p>
                  <p className="font-bold text-midnight-graphite">Mary Ellen Slayter</p>
                  <p className="text-sm text-midnight-graphite/70">Chief Executive Officer</p>
                  <div className="relative w-[100px] h-5 mt-1">
                    <Image
                      src="https://writer.com/wp-content/uploads/2024/06/rep-cap-c.png"
                      alt="Rep cap"
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
