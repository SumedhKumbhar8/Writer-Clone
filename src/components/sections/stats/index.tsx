import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Stat = {
  value: string;
  label: string;
};

type StatsSectionProps = {
  title?: string;
  items: Stat[];
};

export function StatsSection({ title, items }: StatsSectionProps) {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-12">
          {title && <SectionHeading title={title} align="center" />}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-2 text-center">
                <p className="text-display text-4xl font-semibold">{item.value}</p>
                <p className="text-body text-slate-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
