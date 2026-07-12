import Image from "next/image";
import Link from "next/link";
import { BRAND_HERO } from "@/data/brand";

export function BrandHero() {
  const { icon, label, title, description, cta, image } = BRAND_HERO;

  return (
    <section className="bg-white pt-[120px] lg:pt-[140px]">
      <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-[15px]">
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="mx-auto mb-4"
          aria-hidden
        />

        <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
          {label}
        </h5>

        <h1 className="mx-auto max-w-[760px] text-[clamp(36px,5vw,64px)] font-medium leading-none tracking-[-1.28px] text-midnight-graphite">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.6] text-[#4f4f4f]">
          {description}
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[60px] items-center justify-center rounded-full bg-midnight-graphite px-6 text-[16px] font-semibold leading-5 text-canvas-white transition-colors hover:bg-[#333]"
          >
            {cta.label}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1080px] px-5 pb-[30px] lg:px-[15px]">
        <figure className="overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
            priority
            sizes="(max-width: 1080px) 100vw, 1080px"
          />
        </figure>
      </div>
    </section>
  );
}
