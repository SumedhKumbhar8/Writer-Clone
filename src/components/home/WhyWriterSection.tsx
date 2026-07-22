import Image from "next/image";

const FRAMES = [
  {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247794.png",
    alt: "WRITER helps teams delegate execution to AI agents",
    width: 2100, height: 858,
  },
  {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247818.png",
    alt: "WRITER keeps work on-brand and aligned with company standards",
    width: 2100, height: 858,
  },
  {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247842.png",
    alt: "WRITER scales team output without scaling headcount",
    width: 2100, height: 858,
  },
];

export function WhyWriterSection() {
  return (
    <section id="why-writer" className="pb-[60px]">
      <div className="mx-auto w-full max-w-[1080px] px-[15px]">
        <div className="mx-auto mb-10 max-w-[760px] text-center" style={{ marginTop: "30px" }}>
          <h4 className="mb-[10px] text-[16px] font-medium uppercase leading-[1.6] tracking-[1.6px] text-midnight-graphite">
            WHY WRITER
          </h4>
          <h2 className="text-[40px] font-medium leading-[48px] tracking-[-0.8px] text-midnight-graphite">
            Same team.
            <br />
            Exponential impact.
          </h2>
          <p className="mx-auto mt-5 max-w-[670px] text-[20px] leading-[1.6] text-slate-gray">
            AI agents handle execution, so your team can focus on the strategic, creative work they do
            best.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1050px]">
          {FRAMES.map((f) => (
            <figure key={f.src} className="mb-[30px] last:mb-0">
              <Image
                src={f.src}
                alt={f.alt}
                width={f.width}
                height={f.height}
                className="h-auto w-full rounded-xl"
                sizes="(max-width: 1050px) 100vw, 1050px"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
