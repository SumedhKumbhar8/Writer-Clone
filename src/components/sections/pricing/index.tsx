import { PricingCard } from "@/components/cards/PricingCard";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

type PricingSectionProps = {
  title?: string;
  description?: string;
  plans: Plan[];
};

export function PricingSection({ title, description, plans }: PricingSectionProps) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-12">
          {title && <SectionHeading title={title} description={description} align="center" />}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
