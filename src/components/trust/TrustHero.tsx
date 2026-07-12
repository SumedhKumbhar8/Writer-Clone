import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function TrustHero() {
  return (
    <section className="section-home-mod-4 sz-h1-1 section-pb-xs pt-[140px] lg:pt-[180px] pb-[70px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px] text-center">
        <Reveal>
          <div className="trust-title-content">
            <p className="text-label text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite mb-4">
              TRUST
            </p>

            <h1 className="wp-block-heading wpm-ff-1 text-[clamp(36px,5vw,64px)] font-normal leading-[1.2] tracking-[-1.28px] text-midnight-graphite mx-auto max-w-[900px]">
              World-class enterprises trust WRITER
            </h1>

            <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-[1.6] text-midnight-graphite/70">
              Build with confidence on a generative AI platform developed with enterprise security, privacy, compliance, and centralized supervision in mind.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-center gap-4 mt-10">
            <Link
              href="https://writer.com/company/contact/"
              className="dc-btn dc-btn_secondary inline-flex items-center justify-center rounded-full bg-midnight-graphite text-white px-8 py-4 text-[16px] font-semibold hover:bg-[#2a2a2a] transition-colors min-w-[200px]"
            >
              Contact us
            </Link>
            <Link
              href="https://trustcenter.writer.com/"
              className="dc-btn scrollto dc-btn_outline-secondary inline-flex items-center justify-center rounded-full border-2 border-midnight-graphite text-midnight-graphite px-8 py-4 text-[16px] font-semibold hover:bg-midnight-graphite hover:text-white transition-colors min-w-[200px]"
            >
              Visit Trust Center
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
