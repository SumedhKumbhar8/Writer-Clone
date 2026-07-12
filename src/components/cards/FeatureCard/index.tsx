import Link from "next/link";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function FeatureCard({ title, description, href, className }: FeatureCardProps) {
  const content = (
    <>
      <h3 className="text-heading">{title}</h3>
      <p className="text-body text-slate-gray">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "flex flex-col gap-3 rounded-xl border border-cloud-white p-6 transition-colors hover:border-action-blue",
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("flex flex-col gap-3 rounded-xl border border-cloud-white p-6", className)}>
      {content}
    </div>
  );
}
