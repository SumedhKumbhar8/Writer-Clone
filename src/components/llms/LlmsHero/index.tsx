import Image from "next/image";
import Link from "next/link";
import { LLMS_HERO } from "@/data/llms";

export function LlmsHero() {
  const { icon, label, title, description, primaryCta, secondaryCta } = LLMS_HERO;

  return (
    <div className="home-main-screen overflow-hidden">
      <div className="container" style={{ maxWidth: 1136 }}>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex flex-col items-center gap-3">
            <div className="mb-4">
              <Image src={icon} alt="" width={64} height={64} aria-hidden />
            </div>
            <p className="m-0 text-[13px] font-semibold uppercase tracking-[1.6px] text-midnight-graphite">
              {label}
            </p>
          </div>

          <div className="mx-auto mt-3 w-full px-0" style={{ maxWidth: 900 }}>
            <h1 className="m-0 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-2px] text-midnight-graphite">
              {title}
            </h1>
          </div>

          <p className="mb-0 mt-5 max-w-[540px] text-[18px] leading-relaxed text-slate-gray">
            {description}
          </p>

          <div className="mt-9 flex flex-row flex-wrap justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="dc-btn dc-btn_primary dc-btn_small-2"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="dc-btn dc-btn_secondary dc-btn_small-2"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
