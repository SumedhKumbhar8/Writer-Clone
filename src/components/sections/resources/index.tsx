import { ResourceCard } from "@/components/cards/ResourceCard";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Resource = {
  title: string;
  description: string;
  href: string;
  category?: string;
  date?: string;
};

type ResourcesSectionProps = {
  title: string;
  items: Resource[];
};

export function ResourcesSection({ title, items }: ResourcesSectionProps) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading title={title} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ResourceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
