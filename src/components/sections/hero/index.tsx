import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";

type HeroCta = {
  label: string;
  href: string;
};

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <Section variant="gradient" className="section-hero">
      <GradientOrb className="-top-20 right-0" size="lg" />
      <Container>
        <Reveal>
          <div className="relative flex max-w-3xl flex-col gap-6">
            {eyebrow && <p className="text-caption text-action-blue">{eyebrow}</p>}
            <h1 className="text-display">{title}</h1>
            <p className="text-subheading text-slate-gray">{description}</p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col gap-4 sm:flex-row">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-action-blue px-6 py-3 text-body text-canvas-white"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-midnight-graphite px-6 py-3 text-body"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
