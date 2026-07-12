import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "dark" | "muted" | "gradient";
};

const variantClasses = {
  light: "section-light",
  dark: "section-dark",
  muted: "section-muted",
  gradient: "section-gradient",
};

export function Section({
  children,
  className,
  id,
  variant = "light",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", variantClasses[variant], className)}>
      {children}
    </section>
  );
}
