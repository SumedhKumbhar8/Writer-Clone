"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";

type FeatureValue = boolean | string;

type Feature = {
  name: string;
  starter: FeatureValue;
  enterprise: FeatureValue;
};

type Category = {
  name: string;
  features: Feature[];
};

type PlansComparisonProps = {
  title: string;
  categories: Category[];
};

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#5551FF" />
      <path d="M5.5 10.5L8.5 13.5L14.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#e4e7ed" />
      <path d="M6 10H14" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === "boolean") {
    return value ? <CheckCircle /> : <DashCircle />;
  }
  return <span className="text-body text-slate-gray">{value}</span>;
}

const CTA_BUTTONS = [
  { label: "Try for free", href: "https://app.writer.com/register" },
  { label: "Contact sales", href: "https://go.writer.com/contact-sales" },
] as const;

export function PlansComparison({ title, categories }: PlansComparisonProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <h2 className="text-heading-lg mb-8 text-center">{title}</h2>
        </Reveal>

        <div className="mx-auto max-w-5xl">
          <div className="hidden grid-cols-3 gap-4 border-b border-cloud-white pb-5 md:grid">
            <div />
            {CTA_BUTTONS.map((btn) => (
              <div key={btn.label} className="flex justify-center">
                <Link
                  href={btn.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-action-blue px-6 py-3 text-body font-semibold text-canvas-white"
                >
                  {btn.label}
                </Link>
              </div>
            ))}
          </div>

          {categories.map((category) => (
            <div key={category.name} className="border-b border-cloud-white py-5">
              <h3 className="text-heading mb-3 text-slate-gray">{category.name}</h3>
              <div className="flex flex-col md:hidden">
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between border-t border-cloud-white py-3"
                  >
                    <span className="text-body flex-1 pr-4 text-slate-gray">{feature.name}</span>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center gap-1">
                        <span className="whitespace-nowrap text-caption text-ghost-gray">Starter</span>
                        <FeatureCell value={feature.starter} />
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="whitespace-nowrap text-caption text-ghost-gray">Enterprise</span>
                        <FeatureCell value={feature.enterprise} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden md:block">
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="grid grid-cols-3 gap-4 border-t border-cloud-white py-3"
                  >
                    <span className="text-body text-slate-gray">{feature.name}</span>
                    <div className="flex items-center justify-center">
                      <FeatureCell value={feature.starter} />
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureCell value={feature.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
