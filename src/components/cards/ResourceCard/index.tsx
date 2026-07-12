import Link from "next/link";
import { cn } from "@/lib/utils";

type ResourceCardProps = {
  title: string;
  description: string;
  href: string;
  category?: string;
  date?: string;
  className?: string;
};

export function ResourceCard({
  title,
  description,
  href,
  category,
  date,
  className,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-cloud-white p-6 transition-colors hover:border-action-blue",
        className,
      )}
    >
      {category && <span className="text-caption text-action-blue">{category}</span>}
      <h3 className="text-heading">{title}</h3>
      <p className="text-body text-slate-gray">{description}</p>
      {date && <time className="text-caption text-ghost-gray">{date}</time>}
    </Link>
  );
}
