import Image from "next/image";
import { BRAND_TESTIMONIAL } from "@/data/brand";

export function BrandTestimonial() {
  const { quote, author, role, photo, companyLogo, backgroundImage } =
    BRAND_TESTIMONIAL;

  return (
    <section className="relative overflow-hidden bg-white py-[80px] lg:py-[100px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <figure className="shrink-0">
            <Image
              src={photo}
              alt={author}
              width={200}
              height={200}
              className="h-[200px] w-[200px] rounded-full object-cover"
            />
          </figure>

          <div className="flex-1">
            <blockquote className="text-[clamp(18px,2.5vw,28px)] font-medium leading-[1.4] tracking-[-0.56px] text-midnight-graphite">
              {quote}
            </blockquote>

            <div className="mt-6">
              <p className="text-[16px] font-semibold text-midnight-graphite">
                {author}
              </p>
              <p className="text-[14px] text-[#4f4f4f]">{role}</p>
            </div>

            <figure className="mt-6">
              <Image
                src={companyLogo}
                alt="Company logo"
                width={100}
                height={30}
                className="h-[30px] w-auto object-contain"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
