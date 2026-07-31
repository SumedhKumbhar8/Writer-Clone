import Image from "next/image";
import Link from "next/link";
import { mktPageData } from "@/data/marketing";

export function MktHeroSection() {
  const { hero } = mktPageData;

  return (
    <section className="finServ_hero_section bg-[#DABFC0] pb-[82px] pt-[129px] max-lg:pb-[50px] max-lg:pt-[120px]">
      <div className="container-default-sm">
        <div className="finServ_hero_row flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="finServ_hero_content w-full max-w-[460px]">
            <figure className="-mt-[15px] mb-[15px]">
              <Image
                src={hero.heroImage}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </figure>

            <h5 className="mb-[11px] mt-0 text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
              {hero.eyebrow}
            </h5>

            <h1 className="mb-5 mt-0 max-w-[460px] text-[49px] font-normal leading-none text-black max-lg:text-[36px]">
              {hero.title}
            </h1>

            <p className="m-0 max-w-[460px] text-[20px] leading-[158%] text-[#333]">
              {hero.description}
            </p>

            <div className="mt-[33px]">
              <Link
                href={hero.cta.href}
                className="inline-flex h-[61px] items-center justify-center rounded-[82px] bg-black px-[26px] text-[18px] font-semibold text-white no-underline transition-colors hover:bg-[#262626]"
              >
                {hero.cta.label}
              </Link>
            </div>
          </div>

          <div className="finServ_hero_img w-full max-w-[552px]">
            <Image
              src={hero.briefImage}
              alt="Marketing illustration"
              width={768}
              height={617}
              className="h-auto w-full max-w-[552px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
