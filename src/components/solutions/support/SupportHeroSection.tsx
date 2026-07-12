import Image from "next/image";
import Link from "next/link";
import { supportPageData } from "@/data/support";

export function SupportHeroSection() {
  const { hero } = supportPageData;

  return (
    <section className="bg-[#CBE2E2] pt-[129px] max-lg:pt-[120px] max-lg:pb-[50px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="flex flex-col items-start gap-[5px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[440px]">
            <div className="-mt-[15px] mb-[15px] flex items-center gap-3">
              <Image
                src={hero.icon}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h5 className="text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
                {hero.eyebrow}
              </h5>
            </div>

            <h1 className="text-[clamp(42px,4.5vw,56px)] font-normal leading-[92%] text-black max-w-[430px]">
              {hero.title}
            </h1>

            <p className="mt-5 max-w-[430px] text-[clamp(16px,1.8vw,19px)] leading-[158.333%] text-[#333]">
              {hero.description}
            </p>

            <div className="mt-8">
              <Link
                href={hero.cta.href}
                className="inline-flex items-center justify-center rounded-[82px] bg-black px-[26px] py-[17px] text-[18px] font-semibold text-white no-underline transition-colors hover:bg-[#262626]"
              >
                {hero.cta.label}
              </Link>
            </div>
          </div>

          <div className="max-w-[552px] pt-8 lg:pt-0">
            <Image
              src={hero.heroImage}
              alt="Support illustration"
              width={640}
              height={514}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
