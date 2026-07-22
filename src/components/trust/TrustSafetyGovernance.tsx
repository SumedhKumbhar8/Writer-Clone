import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Top-scoring LLMs",
    text: (
      <>
        Our models offer accuracy and quality through third-party testing and
        benchmarking. Read how Palmyra, the WRITER family of LLMs, ranks on{" "}
        <a
          href="https://crfm.stanford.edu/helm/lite/latest/#/leaderboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5551ff] underline underline-offset-2"
        >
          Stanford HELM benchmarking
        </a>
        .
      </>
    ),
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
    <section id="safety-governance" className="benefits-block-container section-pt-sm">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex gap-6 lg:gap-9">
          <Reveal className="benefits-block-icon hidden lg:block flex-shrink-0 w-[120px]">
            <Image
              src="https://writer.com/wp-content/uploads/2024/06/Frame-3651.svg"
              alt="Safety & governance"
              width={120}
              height={120}
              className="object-contain"
            />
          </Reveal>

          <Reveal className="benefits-block-content flex-1 min-w-0">
            <div className="benefits-block-icon mb-4 lg:hidden">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651.svg"
                alt="Safety & governance"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="head">Safety &amp; governance</p>
            <h2>Supervise safe, consistent AI behavior</h2>
            <p className="benefits-block-desc benefits-block-desc--wide">
              We give you the tools to supervise how AI operates across your
              organization, from controls over connected data and apps, to
              integrated guardrails that keep agent behavior aligned with your
              system requirements.
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
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3370-1.png"
                alt="Mary Ellen Slayter"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px] flex-shrink-0"
              />
              <div>
                <p className="platform-quote mb-3">
                  &ldquo;There are two reasons I chose WRITER: one was about
                  security, privacy, and compliance. And the other one was about
                  ethics and governance.&rdquo;
                </p>
                <p className="font-bold text-black">Mary Ellen Slayter</p>
                <p className="text-sm text-black/70">Chief Executive Officer</p>
                <div className="relative w-[100px] h-5 mt-1">
                  <Image
                    src="https://writer.com/wp-content/uploads/2024/06/rep-cap-c.png"
                    alt="Rep Cap"
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
