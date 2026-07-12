import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <p className="text-caption text-action-blue">{eyebrow}</p>}
      <h2 className="text-heading-lg">{title}</h2>
      {description && <p className="text-body max-w-2xl text-slate-gray">{description}</p>}
    </div>
  );
}
