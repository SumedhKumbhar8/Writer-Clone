import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { cn } from "@/lib/utils";

type PlanFeature = string;
type PlanCta = { label: string; href: string };

type Plan = {
  name: string;
  badge: string | null;
  description: string;
  cta: PlanCta;
  footnote: string | null;
  features: PlanFeature[];
  highlighted: boolean;
};

type PlansCardsProps = {
  plans: Plan[];
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
      <circle cx="8" cy="8" r="8" fill="#5551FF" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl p-8 sm:p-10",
        plan.highlighted
          ? "bg-midnight-graphite text-canvas-white"
          : "border border-cloud-white bg-canvas-white",
      )}
    >
      {plan.badge && (
        <span className="mb-4 inline-block w-fit rounded-full border border-canvas-white/20 px-3 py-1 text-caption uppercase tracking-wider text-canvas-white/80">
          {plan.badge}
        </span>
      )}

      <h3 className={cn("text-heading-lg", !plan.highlighted && "text-midnight-graphite")}>
        {plan.name}
      </h3>
      <p className={cn("mt-2 text-body", plan.highlighted ? "text-cloud-white" : "text-slate-gray")}>
        {plan.description}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Link
          href={plan.cta.href}
          className={cn(
            "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-body font-semibold",
            plan.highlighted
              ? "bg-action-blue text-canvas-white"
              : "border border-midnight-graphite text-midnight-graphite",
          )}
        >
          {plan.cta.label}
        </Link>
        {plan.footnote && (
          <p className={cn("text-center text-caption", plan.highlighted ? "text-ghost-gray" : "text-ghost-gray")}>
            {plan.footnote}
          </p>
        )}
      </div>

      <ul className="mt-8 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-body">
            <CheckIcon />
            <span className={cn(!plan.highlighted && "text-slate-gray")}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PlansCards({ plans }: PlansCardsProps) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
