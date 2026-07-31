import Image from "next/image";

const FEATURE_ROWS = [
  [
    {
      src: "https://writer.com/wp-content/uploads/2026/04/Group-5768.png",
      alt: "Playbooks — repeatable workflows, not one-off prompts",
      width: 1030, height: 819,
    },
    {
      src: "https://writer.com/wp-content/uploads/2026/04/Group-5767.png",
      alt: "Connectors — works across your tools",
      width: 1030, height: 819,
    },
  ],
  [
    {
      src: "https://writer.com/wp-content/uploads/2026/04/Group-5769.png",
      alt: "Voice & style guide — brand standards, enforced everywhere",
      width: 1030, height: 789,
    },
    {
      src: "https://writer.com/wp-content/uploads/2026/04/img-1.png",
      alt: "Skills — domain expertise, captured once and scaled",
      width: 1030, height: 789,
    },
  ],
];

export function KeyFeaturesSection() {
  return (
    <section className="bg-canvas-white pb-[60px]">
      <div className="container-default-sm">
        <div className="hp-head-section why-writer text-center">
          <h4 className="mb-[10px] text-[16px] font-medium uppercase leading-[1.6] tracking-[1.6px] text-midnight-graphite">
            KEY FEATURES
          </h4>
          <h2 className="mb-4 text-[40px] font-medium leading-[48px] tracking-[-0.8px] text-midnight-graphite">
            Your company&apos;s DNA,
            <br />
            encoded in AI agents.
          </h2>
          <p className="mx-auto mb-0 max-w-[670px] text-[20px] leading-[1.6] text-slate-gray">
            Embed the context, standards, and tools your team runs on, so AI agents have deep domain
            expertise to work like you do.
          </p>
        </div>

        <div className="mx-auto mt-[40px] max-w-[1050px]">
          {FEATURE_ROWS.map((row, ri) => (
            <div
              key={ri}
              className={`grid grid-cols-1 gap-[15px] sm:grid-cols-2${ri === 0 ? " mb-[15px]" : ""}`}
            >
              {row.map((card) => (
                <figure key={card.src} className="overflow-hidden rounded-[12px]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    className="h-auto w-full rounded-[12px]"
                    sizes="(max-width: 640px) 100vw, 540px"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
