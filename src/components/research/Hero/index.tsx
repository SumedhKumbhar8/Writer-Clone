"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

type HeroProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  navItems: { label: string; href: string }[];
};

export function ResearchHero({
  title,
  description,
  primaryCta,
  navItems,
}: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-midnight-graphite pt-40 pb-20 md:pt-48 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px at 50% -10%, #5551ff 0%, transparent 70%), radial-gradient(600px at 80% 90%, #a95ef8 0%, transparent 60%)",
        }}
      />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <div className="flex max-w-4xl flex-col items-center gap-6">
            <h1 className="font-display text-display text-canvas-white">
              {title}
            </h1>
            <p className="max-w-2xl whitespace-pre-line text-subheading text-ghost-gray">
              {description}
            </p>
            <Link
              href={primaryCta.href}
              className="dc-btn dc-btn_primary dc-btn_fix-5 mt-2"
            >
              {primaryCta.label}
            </Link>
            <nav className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 text-body font-medium text-ghost-gray transition-colors hover:text-canvas-white"
                >
                  <span className="inline-block h-px w-8 bg-ghost-gray transition-all duration-300 group-hover:w-12 group-hover:bg-canvas-white" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
