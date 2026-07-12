import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type CTASectionProps = {
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "light" | "dark";
  className?: string;
};

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "dark",
  className,
}: CTASectionProps) {
  const secondaryBorder =
    variant === "dark" ? "border-canvas-white" : "border-midnight-graphite";
  const secondaryText =
    variant === "dark" ? "text-canvas-white" : "text-midnight-graphite";
  return (
    <Section variant={variant} className={className}>
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading title={title} description={description} align="center" />
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-action-blue px-6 py-3 text-body text-canvas-white"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-flex min-h-11 items-center justify-center rounded-full border px-6 py-3 text-body ${secondaryBorder} ${secondaryText}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
