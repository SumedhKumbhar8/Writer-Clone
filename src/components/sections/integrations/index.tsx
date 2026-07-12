import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Integration = {
  title: string;
  description: string;
};

type IntegrationsSectionProps = {
  title: string;
  description?: string;
  items: Integration[];
};

export function IntegrationsSection({
  title,
  description,
  items,
}: IntegrationsSectionProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading title={title} description={description} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
