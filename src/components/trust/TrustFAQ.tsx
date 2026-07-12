"use client";

import React from "react";
import { Reveal } from "@/components/shared/Reveal";

const FAQS = [
  {
    id: "ch-1",
    label: "Data privacy",
    question: "Does WRITER train its models on my data?",
    answer: "WRITER does not train its models on your data, nor does it train on user inputs or any outputs. You control how your data is used.",
  },
  {
    id: "ch-2",
    label: "Data protection",
    question: "How does WRITER protect my data?",
    answer: "WRITER protects your data through admin tools for logging and periodic review, restricted access requiring security approval, SSO providers with MFA, secure keying practices, and data isolation between teams within the same organization. Contact security@writer.com for more information.",
  },
  {
    id: "ch-3",
    label: "Data retention",
    question: "What data does WRITER store?",
    answer: "WRITER stores customer data (company terms, snippets, documents, style guides) and AI inputs/outputs (uploaded media, tuning data, source material, prompts, responses, applications). WRITER takes a zero data retention approach. All data is owned by the customer.",
  },
  {
    id: "ch-4",
    label: "Bias and toxicity",
    question: "What mechanisms are in place to mitigate bias and inappropriate content?",
    answer: "WRITER employs data cleaning and preprocessing, oversight and annotation guidelines, model auditing, fine-tuning from human feedback, user feedback loops, and filters for sensitive data.",
  },
  {
    id: "ch-5",
    label: "Bias audits",
    question: "How does WRITER monitor for bias and toxicity?",
    answer: "An independent system classifies input and output textual data and predicts toxicity levels. It checks for insults, profanity, identity attacks, threats, and sexually explicit words.",
  },
  {
    id: "ch-6",
    label: "Prompt injections",
    question: "What measures are in place to protect against prompt injection?",
    answer: "The platform prevents rendering of any images or clickable links in output and cannot call out to any URL in the output.",
  },
  {
    id: "ch-7",
    label: "Compliance",
    question: "What compliance and security certifications does WRITER have?",
    answer: "WRITER maintains SOC 2 Type II (annual examinations), HIPAA Type 1, PCI compliance, and adheres to global privacy laws.",
  },
  {
    id: "ch-8",
    label: "EU AI Act",
    question: "How does WRITER comply with the EU AI Act?",
    answer: "WRITER is committed to complying with the EU AI Act, evaluating obligations, and following regulatory developments.",
  },
];

export function TrustFAQ() {
  const [activeId, setActiveId] = React.useState("ch-1");

  const activeFaq = FAQS.find((f) => f.id === activeId) || FAQS[0];

  return (
    <section className="section-pt section-pb section-faqs dc-content sec-bb py-[80px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-normal leading-[1.2] text-midnight-graphite mb-8">
            Security and trust at WRITER
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <Reveal className="w-full lg:w-4/12 flex-shrink-0">
            <nav className="faqs-captions flex flex-col gap-1">
              {FAQS.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => setActiveId(faq.id)}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeId === faq.id
                      ? "bg-midnight-graphite text-white"
                      : "text-midnight-graphite hover:bg-gray-100"
                  }`}
                  suppressHydrationWarning
                >
                  {faq.label}
                </button>
              ))}
            </nav>
          </Reveal>

          <Reveal className="w-full lg:w-8/12">
            <div className="scrollbar-wrap" key={activeId}>
              <h3 className="text-2xl font-semibold text-midnight-graphite mb-4">
                {activeFaq.question}
              </h3>
              <p className="text-lg leading-relaxed text-midnight-graphite/70">
                {activeFaq.answer}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
