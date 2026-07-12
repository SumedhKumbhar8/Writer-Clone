import Image from "next/image";
import { BRAND_WHY_WRITER } from "@/data/brand";

export function BrandWhyWriter() {
  const { icon, eyebrow, title, items } = BRAND_WHY_WRITER;

  return (
    <section className="bg-[#f8f8fa] py-[80px] lg:py-[100px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="mb-4"
          aria-hidden
        />

        <p className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-midnight-graphite">
          {eyebrow}
        </p>

        <h2 className="whitespace-pre-line text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
          {title}
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white px-6 pb-[36px] pt-[30px]"
            >
              <Image
                src={item.icon}
                alt=""
                width={32}
                height={32}
                className="mb-5"
                aria-hidden
              />

              <h4 className="whitespace-pre-line text-[22px] font-medium leading-[1.25] tracking-[-0.44px] text-midnight-graphite">
                {item.title}
              </h4>

              <p className="mt-4 text-[16px] leading-[1.6] text-[#4f4f4f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
