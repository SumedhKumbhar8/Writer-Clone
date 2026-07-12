import { cn } from "@/lib/utils";

type GradientOrbProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-32 w-32",
  md: "h-64 w-64",
  lg: "h-96 w-96",
};

export function GradientOrb({ className, size = "md" }: GradientOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-40",
        "bg-gradient-to-br from-agent-violet to-lavender-mist",
        sizeClasses[size],
        className,
      )}
    />
  );
}
