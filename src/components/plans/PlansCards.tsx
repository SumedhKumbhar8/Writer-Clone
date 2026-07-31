import Link from "next/link";
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

export function PlansCards({ plans }: PlansCardsProps) {
  return (
    <div className="row_price mx-auto flex w-full max-w-[1074px] flex-wrap justify-center px-[15px]">
      {plans.map((plan) => (
        <div key={plan.name} className="mb-0 w-full max-w-[484px] px-3 md:w-1/2">
          <div
            className={cn(
              "price-box flex h-full min-h-[733px] flex-col rounded-[16px] px-10 pb-[52px] pt-7",
              plan.highlighted ? "bg-[#E4E9FF]" : "bg-[#F5F5F9]",
            )}
          >
            <div className="price-box-top">
              <p className="m-0 text-[24px] font-semibold uppercase leading-[36px] tracking-[3px] text-midnight-graphite">
                {plan.name}
              </p>
              <p className="mt-2.5 mb-[5px] text-[16px] font-normal leading-6 text-midnight-graphite">
                {plan.description}
              </p>

              <div className="mt-[37px]">
                <Link
                  href={plan.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[43px] min-w-[266px] items-center justify-center rounded-[82px] bg-midnight-graphite px-5 text-[16px] font-semibold text-canvas-white"
                >
                  {plan.cta.label}
                </Link>
                {plan.footnote ? (
                  <p className="mt-[5px] mb-0 pl-[7px] text-[14px] leading-5 text-[#333]">
                    {plan.footnote}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="price-box-bottom mt-auto pt-[37px]">
              <p className="mb-[18px] text-[18px] font-semibold leading-none text-midnight-graphite">
                {plan.highlighted
                  ? "Everything in Starter, plus:"
                  : "What’s included in Starter:"}
              </p>
              <ul className="m-0 list-none p-0">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative mb-3 pl-[27px] text-[14px] leading-5 text-midnight-graphite last:mb-0"
                  >
                    <span
                      className="absolute left-0 top-[3px] inline-block h-[14px] w-[14px] rounded-full bg-action-blue"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
