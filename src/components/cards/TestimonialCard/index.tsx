import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote className={cn("flex flex-col gap-6 rounded-xl border border-cloud-white p-8", className)}>
      <p className="text-subheading">&ldquo;{quote}&rdquo;</p>
      <footer className="flex flex-col gap-1">
        <cite className="text-body font-medium not-italic">{author}</cite>
        <span className="text-caption text-slate-gray">
          {role}, {company}
        </span>
      </footer>
    </blockquote>
  );
}
