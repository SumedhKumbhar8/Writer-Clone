import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

type ApproachItem = {
  id: string;
  title: string;
  description: string;
  points?: string[];
};

type ApproachCardsProps = {
  items: ApproachItem[];
};

export function ApproachCards({ items }: ApproachCardsProps) {
  return (
    <section className="bg-canvas-white">
      <Container>
        <div className="flex flex-col border-b border-cloud-white md:flex-row">
          {items.map((item, i) => (
            <Reveal key={item.id} className="flex-1">
              <div
                id={item.id}
                className="flex h-full scroll-mt-24 flex-col gap-5 border-b border-cloud-white px-6 py-16 last:border-b-0 md:border-b-0 md:border-r md:border-cloud-white md:px-10 md:py-20 md:last:border-r-0 lg:px-14 lg:py-24"
              >
                <span className="text-caption text-action-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-heading-lg text-midnight-graphite">
                  {item.title}
                </h2>
                <p className="text-body leading-relaxed text-slate-gray">
                  {item.description}
                </p>
                {item.points && (
                  <ul className="mt-2 flex flex-col gap-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-body leading-relaxed text-slate-gray"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="mt-0.5 shrink-0"
                          aria-hidden
                        >
                          <circle cx="8" cy="8" r="8" fill="#5551ff" />
                          <path
                            d="M11 6L7 10L5 8"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
