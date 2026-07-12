import { Container } from "@/components/shared/Container";
import { LogoCloud } from "@/components/shared/LogoCloud";
import { Section } from "@/components/shared/Section";

type Logo = {
  name: string;
  src: string;
};

type LogosSectionProps = {
  title?: string;
  logos: Logo[];
};

export function LogosSection({ title, logos }: LogosSectionProps) {
  return (
    <Section variant="muted">
      <Container>
        <LogoCloud title={title} logos={logos} />
      </Container>
    </Section>
  );
}
