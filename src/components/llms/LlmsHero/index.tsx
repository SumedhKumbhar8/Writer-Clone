import Image from "next/image";
import Link from "next/link";
import { LLMS_HERO } from "@/data/llms";

export function LlmsHero() {
  const { icon, label, title, description, primaryCta, secondaryCta } = LLMS_HERO;

  return (
    <div className="home-main-screen overflow-hidden">
      <div className="container" style={{ maxWidth: 1136 }}>
        <div className="flex flex-col items-center text-center">
          <div className="llms-hero-icon" style={{ marginBottom: 30 }}>
            <Image src={icon} alt="" width={170} height={48} aria-hidden />
          </div>

          <div style={{ marginBottom: 16 }}>
            <p className="llms-section-label">{label}</p>
          </div>

          <div className="mx-auto w-full" style={{ maxWidth: 760 }}>
            <h1
              className="m-0 text-[clamp(2.5rem,5vw,4rem)] font-normal leading-none"
              style={{ fontFamily: "var(--font-caneladeck)", color: "#151515" }}
            >
              {title}
            </h1>
          </div>

          <p
            className="mb-0"
            style={{ fontSize: 20, lineHeight: "32px", color: "#333", marginTop: 20 }}
          >
            {description}
          </p>

          <div
            className="flex flex-row flex-wrap justify-center gap-4"
            style={{ marginTop: 36 }}
          >
            <Link
              href={primaryCta.href}
              className="dc-btn dc-btn_primary dc-btn_small-2 dc-btn_gray border-0"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="dc-btn dc-btn_secondary dc-btn_small-2 dc-btn_gray border-0"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
