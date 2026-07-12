import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
type Cta = {
  label: string;
  href: string;
};

type PlansBottomCTAProps = {
  title: string;
  description: string | null;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export function PlansBottomCTA({ title, description, primaryCta, secondaryCta }: PlansBottomCTAProps) {
  return (
    <Section variant="dark" className="text-center">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-heading-lg text-canvas-white">{title}</h2>
            {description && (
              <p className="text-subheading max-w-xl text-cloud-white">{description}</p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-action-blue px-7 py-3 text-body font-semibold text-canvas-white"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-canvas-white px-7 py-3 text-body font-semibold text-canvas-white"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
