import { Container } from "@/components/shared/Container";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";

type PlansHeroProps = {
  title: string;
  description: string;
};

export function PlansHero({ title, description }: PlansHeroProps) {
  return (
    <Section variant="gradient" className="section-hero">
      <GradientOrb className="-top-20 right-0" size="lg" />
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 pt-20 text-center sm:pt-28">
            <p className="text-caption inline-flex items-center gap-2 text-action-blue">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-action-blue" />
              {title.split(" ")[0]}
            </p>
            <h1 className="text-display">{title}</h1>
            <p className="text-subheading max-w-2xl text-slate-gray">{description}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
