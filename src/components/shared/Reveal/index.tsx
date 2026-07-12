"use client";

import { useAnimation } from "@/hooks/useAnimation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const { shouldAnimate } = useAnimation();

  return (
    <div className={cn(shouldAnimate && "animate-fade-in-up", className)}>
      {children}
    </div>
  );
}
