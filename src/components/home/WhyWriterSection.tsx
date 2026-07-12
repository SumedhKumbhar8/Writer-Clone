import Image from "next/image";

const WHY_WRITER_FRAMES = [
  {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247794.png",
    alt: "WRITER helps teams delegate execution to AI agents",
    width: 2100,
    height: 858,
  },
  {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247818.png",
    alt: "WRITER keeps work on-brand and aligned with company standards",
    width: 2100,
    height: 858,
  },
  {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247842.png",
    alt: "WRITER scales team output without scaling headcount",
    width: 2100,
    height: 858,
  },
];

export function WhyWriterSection() {
  return (
    <section className="bg-[#F5F4EF] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h4 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
            WHY WRITER
          </h4>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
            Same team.
            <br />
            Exponential impact.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-slate-gray">
            AI agents handle execution, so your team can focus on the strategic, creative work they do
            best.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[1050px]">
          {WHY_WRITER_FRAMES.map((frame) => (
            <figure key={frame.src} className="mb-[30px] last:mb-0">
              <Image
                src={frame.src}
                alt={frame.alt}
                width={frame.width}
                height={frame.height}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1050px) calc(100vw - 40px), 1050px"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
