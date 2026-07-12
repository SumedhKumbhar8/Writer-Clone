import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

type HighlightItem = {
  title: string;
  image: string;
  link: { label: string; href: string };
};

type HighlightsProps = {
  title: string;
  items: HighlightItem[];
};

export function ResearchHighlights({ title, items }: HighlightsProps) {
  return (
    <section className="section-padding bg-canvas-white">
      <Container>
        <Reveal>
          <SectionHeading
            title={title}
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title}>
              <Link
                href={item.link.href}
                className="group flex flex-col overflow-hidden border border-cloud-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[710/402] w-full overflow-hidden bg-fog">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-canvas-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/images/research/d-arrow.svg"
                      alt=""
                      width={33}
                      height={28}
                      className="h-auto w-7"
                    />
                  </span>
                </div>
                <div className="flex flex-col gap-3 px-6 pb-8 pt-6">
                  <h3 className="text-heading text-midnight-graphite">
                    {item.title.split("\n").map((part, j) => (
                      <span key={j}>
                        {j > 0 && <br />}
                        {part}
                      </span>
                    ))}
                  </h3>
                  <span className="text-body font-semibold text-action-blue">
                    {item.link.label}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
