import Link from "next/link";
import { cn } from "@/lib/utils";

type CustomerCardProps = {
  title: string;
  company: string;
  description: string;
  href: string;
  className?: string;
};

export function CustomerCard({
  title,
  company,
  description,
  href,
  className,
}: CustomerCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-cloud-white p-6 transition-colors hover:border-action-blue",
        className,
      )}
    >
      <span className="text-caption text-action-blue">{company}</span>
      <h3 className="text-heading">{title}</h3>
      <p className="text-body text-slate-gray">{description}</p>
    </Link>
  );
}
