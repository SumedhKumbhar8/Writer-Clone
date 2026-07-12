import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

type LegalSection = {
  heading: string;
  content: string;
};

type LegalContentSectionProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalContentSection({
  title,
  lastUpdated,
  sections,
}: LegalContentSectionProps) {
  return (
    <Section>
      <Container>
        <article className="mx-auto flex max-w-3xl flex-col gap-8">
          <header className="flex flex-col gap-2">
            <h1 className="text-heading-lg">{title}</h1>
            <p className="text-caption text-ghost-gray">Last updated: {lastUpdated}</p>
          </header>
          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-heading">{section.heading}</h2>
              <p className="text-body text-slate-gray">{section.content}</p>
            </section>
          ))}
        </article>
      </Container>
    </Section>
  );
}
