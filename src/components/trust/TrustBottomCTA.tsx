import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function TrustBottomCTA() {
  return (
    <section className="section-pt-sm section-pb-sm dc-content section-bg-3 trust-contact-section py-[52px]" style={{ backgroundColor: "#f4eeff" }}>
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-7/12">
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-medium leading-[1.2] text-midnight-graphite mb-4">
              Security questions?
            </h2>
            <p className="text-lg leading-relaxed text-midnight-graphite/70 mb-6">
              Please reach out to{" "}
              <a href="mailto:security@writer.com" className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8]">
                security@writer.com
              </a>{" "}
              with additional questions about security at WRITER, or to discuss how we can meet your specific security requirements.
            </p>

            <div className="border-block border-block_w1 border-l-4 border-[#5551ff] pl-5">
              <p className="text-sm font-medium text-midnight-graphite/60 mb-1">Learn more</p>
              <Link
                href="https://writer.com/legal/privacy/"
                className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8] font-medium"
              >
                Read our privacy policy
              </Link>
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <Link
              href="https://writer.com/company/contact/"
              className="dc-btn dc-btn_outline-secondary dc-btn_lg inline-flex items-center justify-center rounded-full border-2 border-midnight-graphite text-midnight-graphite px-10 py-4 text-[16px] font-semibold hover:bg-midnight-graphite hover:text-white transition-colors"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
