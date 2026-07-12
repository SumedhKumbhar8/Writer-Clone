import Link from "next/link";
import { CONNECTORS_BOTTOM_CTA } from "@/data/connectors";

export function ConnectorsBottomCTA() {
  const { title, description, ctas } = CONNECTORS_BOTTOM_CTA;

  return (
    <section className="bg-[#1e1e22] py-[117px]">
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-5 text-center">
        <h3 className="whitespace-pre-line text-[clamp(30px,4vw,44px)] font-medium leading-[1.3] tracking-[-0.88px] text-canvas-white">
          {title}
        </h3>

        <p className="mt-4 text-[20px] leading-[1.5] text-canvas-white">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={ctas[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[60px] items-center justify-center rounded-full bg-midnight-graphite px-6 text-[16px] font-semibold leading-5 text-canvas-white transition-colors hover:bg-[#333]"
          >
            {ctas[0].label}
          </Link>
          <Link
            href={ctas[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[60px] items-center justify-center rounded-full bg-canvas-white px-6 text-[16px] font-semibold leading-5 text-midnight-graphite transition-colors hover:bg-[#e4e7ed]"
          >
            {ctas[1].label}
          </Link>
        </div>
      </div>
    </section>
  );
}
