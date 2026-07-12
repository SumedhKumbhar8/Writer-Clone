import Image from "next/image";
import Link from "next/link";
import { fsPageData } from "@/data/financial-services";

export function FsHeroSection() {
  const { hero } = fsPageData;

  return (
    <section className="bg-[#BFDAD0] pt-[129px] max-lg:pt-[120px] max-lg:pb-[50px] max-lg:pb-0">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="finServ_hero_row flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="finServ_hero_content max-w-[460px]">
            <div className="-mt-[15px] mb-[15px] flex items-center gap-3">
              <Image
                src={hero.heroImage}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <h5 className="text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
                {hero.eyebrow}
              </h5>
            </div>

            <h1 className="text-[clamp(36px,4.5vw,49px)] font-normal leading-[100%] text-black max-w-[430px]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-[430px] text-[clamp(16px,1.8vw,20px)] leading-[158.333%] text-[#333]">
              {hero.description}
            </p>

            <div className="mt-8">
              <Link
                href={hero.cta.href}
                className="sf_btn_component dark inline-flex items-center justify-center rounded-[82px] bg-black px-[26px] py-[17px] text-[18px] font-semibold text-white no-underline transition-colors hover:bg-[#262626]"
              >
                {hero.cta.label}
              </Link>
            </div>
          </div>

          <div className="finServ_hero_img max-w-[552px] pt-8 lg:pt-0">
            <Image
              src={hero.briefImage}
              alt="Client portfolio brief"
              width={768}
              height={617}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
