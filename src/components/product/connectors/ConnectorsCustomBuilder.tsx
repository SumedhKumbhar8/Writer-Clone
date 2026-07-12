import Image from "next/image";
import Link from "next/link";
import { CUSTOM_CONNECTORS } from "@/data/connectors";

export function ConnectorsCustomBuilder() {
  const { title, description, cta, image } = CUSTOM_CONNECTORS;

  return (
    <section className="bg-white pb-[89px] pt-[62px]">
      <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-[15px]">
        <h2 className="text-[clamp(24px,3vw,32px)] font-medium leading-[1.25] tracking-[-0.64px] text-midnight-graphite">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.6] text-[#4f4f4f]">
          {description}
        </p>

        <Link
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-[16px] font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          {cta.label}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        <figure className="mt-10 overflow-hidden rounded-xl bg-[#f3f5ff]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
            sizes="(max-width: 1080px) 100vw, 1080px"
          />
        </figure>
      </div>
    </section>
  );
}
