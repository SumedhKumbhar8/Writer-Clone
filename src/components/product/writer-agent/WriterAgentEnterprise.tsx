import Image from "next/image";
import Link from "next/link";
import { ENTERPRISE_FEATURES } from "@/data/writer-agent";

export function WriterAgentEnterprise() {
  return (
    <section className="writer-agent-enterprise py-[50px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="mx-auto max-w-[760px] text-center">
          <Image
            src="https://writer.com/wp-content/uploads/2026/04/mouse-pointer-click_8bcc37.png?w=32"
            alt=""
            width={32}
            height={32}
            className="mx-auto mb-4"
            aria-hidden
          />

          <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white">
            ENTERPRISE-GRADE PLATFORM
          </h5>

          <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-canvas-white">
            Complete IT control,
            <br />
            without the governance overhead.
          </h2>

          <Link
            href="/product/ai-studio/"
            className="mt-6 inline-flex text-[16px] font-medium text-canvas-white transition-opacity hover:opacity-70"
          >
            → Explore AI Studio
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-[15px]">
          {ENTERPRISE_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-[#1B1B1D] px-5 py-[30px]"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="mb-5"
                aria-hidden
              />

              <h3 className="whitespace-pre-line text-[25px] font-medium leading-[1.2] tracking-[-0.5px] text-canvas-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-[16px] leading-[1.6] text-[#D2D4D7]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
