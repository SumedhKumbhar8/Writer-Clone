import Link from "next/link";

export function AiStudioBottomCTA() {
  return (
    <section className="ai-studio-bottom-cta bg-[#131315] py-20 lg:py-[86px] lg:pb-[105px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-5 text-center lg:px-10">
        <p className="mb-9 max-w-[540px] text-[clamp(30px,4vw,44px)] font-medium leading-[1.25] tracking-[-0.88px] text-canvas-white">
          Scale AI safely across your business
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="https://dev.writer.com/home/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-canvas-white bg-midnight-graphite px-6 py-5 text-[16px] font-semibold leading-5 text-canvas-white transition-colors hover:border-[#4a4a4a] hover:bg-[#4a4a4a]"
          >
            Explore docs
          </Link>
          <Link
            href="https://go.writer.com/demo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-canvas-white px-6 py-5 text-[16px] font-semibold leading-5 text-midnight-graphite transition-colors hover:bg-[#828282] hover:text-canvas-white"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
