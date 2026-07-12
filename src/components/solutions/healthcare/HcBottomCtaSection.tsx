import Link from "next/link";
import { hcPageData } from "@/data/healthcare";

export function HcBottomCtaSection() {
  const { bottomCta } = hcPageData;

  return (
    <section className="health-solutions-cta" style={{ background: "linear-gradient(0deg, #EDF5F7 0%, #EDF5F7 100%), #F3EBE6" }}>
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-5 py-[127px] pb-[151px] text-center max-lg:py-20 max-lg:px-4">
        <h2 className="mb-[19px] text-[clamp(30px,4vw,44px)] font-normal leading-[55px] text-black max-lg:leading-[1.33]">
          {bottomCta.title}
        </h2>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={bottomCta.primaryCta.href}
            className="inline-flex h-[72px] w-[212px] items-center justify-center rounded-[60px] border-2 border-black bg-transparent px-[23px] text-[20px] font-semibold text-black no-underline transition-colors hover:bg-black hover:text-white"
          >
            {bottomCta.primaryCta.label}
          </Link>
          <Link
            href={bottomCta.secondaryCta.href}
            className="inline-flex h-[72px] w-[212px] items-center justify-center rounded-[60px] border-2 border-black bg-black px-[23px] text-[20px] font-semibold text-white no-underline transition-colors hover:border-[#828282] hover:bg-[#828282]"
          >
            {bottomCta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
