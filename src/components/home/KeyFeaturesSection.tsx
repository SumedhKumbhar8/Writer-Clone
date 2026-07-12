import Image from "next/image";

const FEATURE_ROWS = [
  [
    {
      src: "https://writer.com/wp-content/uploads/2026/04/Group-5768.png",
      alt: "Playbooks — repeatable workflows, not one-off prompts",
      width: 1030,
      height: 819,
    },
    {
      src: "https://writer.com/wp-content/uploads/2026/04/Group-5767.png",
      alt: "Connectors — works across your tools, so you don't have to",
      width: 1030,
      height: 819,
    },
  ],
  [
    {
      src: "https://writer.com/wp-content/uploads/2026/04/Group-5769.png",
      alt: "Voice & style guide — brand standards, enforced everywhere",
      width: 1030,
      height: 789,
    },
    {
      src: "https://writer.com/wp-content/uploads/2026/04/img-1.png",
      alt: "Skills — domain expertise, captured once and scaled",
      width: 1030,
      height: 789,
    },
  ],
];

export function KeyFeaturesSection() {
  return (
    <section className="bg-[#F5F4EF] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h4 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
            KEY FEATURES
          </h4>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
            Your company&apos;s DNA,
            <br />
            encoded in AI agents.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-slate-gray">
            Embed the context, standards, and tools your team runs on, so AI agents have deep domain
            expertise to work like you do.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[1080px]">
          {FEATURE_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-[15px] sm:grid-cols-2${
                rowIndex === 0 ? " mb-7" : ""
              }`}
            >
              {row.map((card) => (
                <figure key={card.src} className="overflow-hidden rounded-xl">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 540px"
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
