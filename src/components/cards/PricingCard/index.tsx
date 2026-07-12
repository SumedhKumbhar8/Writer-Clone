import Link from "next/link";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  className?: string;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl border p-8",
        highlighted ? "border-action-blue bg-lavender-mist/30" : "border-cloud-white",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-heading">{name}</h3>
        <p className="text-display text-3xl font-semibold">{price}</p>
        <p className="text-body text-slate-gray">{description}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="text-body">
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={cta.href}
        className={cn(
          "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-body",
          highlighted
            ? "bg-action-blue text-canvas-white"
            : "border border-midnight-graphite text-midnight-graphite",
        )}
      >
        {cta.label}
      </Link>
    </div>
  );
}
