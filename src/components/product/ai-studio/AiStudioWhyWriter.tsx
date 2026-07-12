import Image from "next/image";
import { AI_STUDIO_WHY_WRITER } from "@/data/ai-studio";

export function AiStudioWhyWriter() {
  return (
    <section className="ai-studio-why py-[70px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <h2 className="mx-auto max-w-[760px] text-center text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-canvas-white">
          Why enterprise technology leaders love WRITER
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-[15px] lg:grid-cols-4">
          {AI_STUDIO_WHY_WRITER.map((feature) => (
            <article key={feature.title} className="rounded-2xl bg-[#1b1b1d] px-5 py-[30px]">
              <Image
                src={feature.icon}
                alt=""
                width={32}
                height={32}
                className="mb-5"
                aria-hidden
              />

              <h4 className="text-[20px] font-medium leading-[1.3] tracking-[-0.4px] text-canvas-white">
                {feature.title}
              </h4>

              <p className="mt-4 text-[16px] leading-[1.6] text-[#d2d4d7]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
