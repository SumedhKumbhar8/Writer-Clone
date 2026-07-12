import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const BENEFITS = [
  {
    title: "Maintain efficient costs",
    stat: "67%",
    statLabel: "LOWER COST",
    description: "We\u2019ve seen 67% lower cost than leading alternative approaches when you use WRITER instead of traditional RAG, with savings increasing as you scale.",
    icon: "https://writer.com/wp-content/uploads/2024/01/maintain.svg?w=40",
    variant: "green",
  },
  {
    title: "Increase your speed",
    stat: "",
    statLabel: "",
    description: "Integrate data sources quickly. Our full-stack platform of LLMs, Knowledge Graph, AI guardrails, and a flexible application layer makes it easy to deploy in days.",
    icon: "https://writer.com/wp-content/uploads/2024/01/increase.svg?w=33",
    variant: "default",
  },
  {
    title: "Stay secure and compliant",
    stat: "",
    statLabel: "",
    description: "Secure your data and leverage infrastructure, which enables you to meet your compliance obligations. Our full-stack platform maximizes security, and we do not train on your data.",
    icon: "https://writer.com/wp-content/uploads/2024/01/secure.svg?w=33",
    variant: "default",
  },
];

export function KgBenefits() {
  return (
    <>
      <section className="py-[70px] lg:py-[100px] bg-white">
        <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
          <Reveal>
            <div className="text-center mb-14">
              <div className="head text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite mb-4">
                BENEFITS
              </div>
              <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite">
                Deploy with confidence with integrated RAG
              </h2>
              <p className="mt-4 text-lg text-midnight-graphite/80 max-w-2xl mx-auto">
                Rather than stitch together your own RAG, WRITER Knowledge Graph makes it easy
                to build high-quality agents.
              </p>
            </div>
          </Reveal>

          <div className="knowledge-benefit-row grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title}>
                <div
                  className={`knowledge-benefit-item rounded-2xl p-8 h-full ${
                    index === 0
                      ? "bg-[#effaf3] border border-[#c8e6d9]"
                      : "bg-gray-50 border border-gray-100"
                  }`}
                >
                  <div className="knowledge-benefit-item__icon w-12 h-12 mb-5">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={40}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="knowledge-benefit-item__title text-xl font-semibold text-midnight-graphite mb-3">
                    {benefit.title}
                  </h3>
                  {benefit.stat && (
                    <div className="knowledge-benefit-item__val mb-3">
                      <span className="text-4xl font-bold text-[#2d8f5c]">{benefit.stat}</span>
                      <span className="text-lg font-semibold text-[#2d8f5c] ml-1">{benefit.statLabel}</span>
                    </div>
                  )}
                  {benefit.stat && (
                    <p className="knowledge-benefit-item__dsc text-base leading-relaxed text-midnight-graphite/70">
                      {benefit.description}
                    </p>
                  )}
                  {!benefit.stat && (
                    <p className="knowledge-benefit-item__content text-base leading-relaxed text-midnight-graphite/70">
                      {benefit.description}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[70px] lg:py-[100px]" style={{ backgroundColor: "#f4eeff" }}>
        <div className="mx-auto max-w-[760px] px-5 text-center">
          <Reveal>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite mb-8">
              Accelerate growth, increase productivity, and enable compliance
            </h2>
            <Link
              href="https://go.writer.com/demo"
              className="dc-btn dc-btn_outline-secondary inline-flex items-center justify-center rounded-full border-2 border-midnight-graphite text-midnight-graphite px-8 py-4 text-lg font-semibold hover:bg-midnight-graphite hover:text-white transition-all"
            >
              Request a demo
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
