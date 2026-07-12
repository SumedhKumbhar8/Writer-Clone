import Image from "next/image";
import Link from "next/link";
import { AI_STUDIO_HERO } from "@/data/ai-studio";

export function AiStudioHero() {
  const { label, title, description, image, ctas } = AI_STUDIO_HERO;

  return (
    <section className="ai-studio-hero pt-[140px] pb-[30px]">
      <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-[15px]">
        <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white">
          {label}
        </h5>

        <h1 className="mx-auto max-w-[900px] text-[clamp(36px,5vw,64px)] font-normal leading-[1.2] tracking-[-1.28px] text-[#f5f5f5]">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-[1.55] text-canvas-white">
          {description}
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                cta.variant === "filled"
                  ? "inline-flex items-center justify-center rounded-full bg-canvas-white px-6 py-5 text-[16px] font-semibold leading-5 text-midnight-graphite transition-colors hover:bg-[#828282] hover:text-canvas-white"
                  : "inline-flex items-center justify-center rounded-full border-2 border-canvas-white bg-transparent px-6 py-5 text-[16px] font-semibold leading-5 text-canvas-white transition-colors hover:border-[#4a4a4a] hover:bg-[#4a4a4a]"
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1080px] px-5 lg:px-[15px]">
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
