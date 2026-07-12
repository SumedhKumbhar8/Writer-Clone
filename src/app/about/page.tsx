import { CTASection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutData } from "@/data/about";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description: aboutData.hero.description,
  path: "/about",
});

export default function AboutPage() {
  const { hero, mission, leadership, culture, stats, cta } = aboutData;

  return (
    <>
      <HeroSection {...hero} />
      <Section>
        <Container>
          <SectionHeading title={mission.title} description={mission.description} />
        </Container>
      </Section>
      <Section variant="muted">
        <Container>
          <div className="flex flex-col gap-8">
            <SectionHeading title={leadership.title} />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.members.map((member) => (
                <div key={member.name} className="flex flex-col gap-2">
                  <p className="text-heading">{member.name}</p>
                  <p className="text-body text-slate-gray">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeading title={culture.title} description={culture.description} />
        </Container>
      </Section>
      <StatsSection {...stats} />
      <CTASection {...cta} />
    </>
  );
}
