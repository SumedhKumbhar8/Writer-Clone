import { CTASection } from "@/components/sections/cta";
import { ContactFormSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { contactData } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: contactData.hero.description,
  path: "/contact",
});

export default function ContactPage() {
  const { hero, locations, support, cta } = contactData;

  return (
    <>
      <HeroSection {...hero} />
      <ContactFormSection />
      <Section variant="muted">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <SectionHeading title={locations.title} />
              {locations.items.map((location) => (
                <address key={location.city} className="text-body not-italic text-slate-gray">
                  <strong className="block text-midnight-graphite">{location.city}</strong>
                  {location.address}
                </address>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <SectionHeading title={support.title} description={support.description} />
              <a href={`mailto:${support.email}`} className="text-body text-action-blue">
                {support.email}
              </a>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection {...cta} />
    </>
  );
}
