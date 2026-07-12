import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

type FaqItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  items: FaqItem[];
};

export function FAQSection({ title, items }: FAQSectionProps) {
  return (
    <Section variant="muted">
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading title={title} align="center" />
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
            {items.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-cloud-white bg-canvas-white p-6"
              >
                <summary className="cursor-pointer text-subheading font-medium">
                  {item.question}
                </summary>
                <p className="mt-4 text-body text-slate-gray">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
