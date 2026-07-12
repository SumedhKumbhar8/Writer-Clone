import Link from "next/link";
import { fsPageData } from "@/data/financial-services";

export function FsBottomCtaSection() {
  const { bottomCta } = fsPageData;

  return (
    <section className="sf_bottom_cta_block bg-[#F3F5FF]">
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-5 py-[112px] pb-[96px] text-center max-lg:py-20 max-lg:px-4">
        <h2 className="mb-9 text-[clamp(28px,4vw,44px)] font-normal leading-[1.3] text-black">
          {bottomCta.title}
        </h2>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={bottomCta.primaryCta.href}
            className="inline-flex items-center justify-center rounded-[60px] border-2 border-black bg-transparent px-[23px] py-[22px] text-[clamp(16px,2vw,20px)] font-semibold text-black no-underline transition-colors hover:bg-black hover:text-white"
          >
            {bottomCta.primaryCta.label}
          </Link>
          <Link
            href={bottomCta.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-[60px] border-2 border-black bg-black px-[23px] py-[22px] text-[clamp(16px,2vw,20px)] font-semibold text-white no-underline transition-colors hover:border-[#828282] hover:bg-[#828282]"
          >
            {bottomCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
