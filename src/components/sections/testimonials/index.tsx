import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

type TestimonialsSectionProps = {
  title: string;
  items: Testimonial[];
};

export function TestimonialsSection({ title, items }: TestimonialsSectionProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading title={title} align="center" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <TestimonialCard key={item.author} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
