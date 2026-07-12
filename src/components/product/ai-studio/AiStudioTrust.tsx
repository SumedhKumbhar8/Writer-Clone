import Image from "next/image";
import Link from "next/link";
import { AI_STUDIO_TRUST } from "@/data/ai-studio";

export function AiStudioTrust() {
  const { badge, title, lockIcon, complianceBadges, blocks } = AI_STUDIO_TRUST;

  return (
    <section className="ai-studio-trust py-[70px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="mx-auto max-w-[760px] text-center">
          <Image
            src={lockIcon}
            alt=""
            width={36}
            height={36}
            className="mx-auto mb-4"
            aria-hidden
          />

          <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white">
            {badge}
          </h5>

          <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-canvas-white">
            {title}
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {complianceBadges.map((badgeItem) => (
            <figure key={badgeItem.alt} className="m-0">
              <Image
                src={badgeItem.src}
                alt={badgeItem.alt}
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-[15px]">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-2xl bg-[#1b1b1d] px-5 py-[30px]">
              <h3 className="text-[25px] font-medium leading-[1.2] tracking-[-0.5px] text-canvas-white">
                {block.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-[#d2d4d7]">{block.description}</p>
              {"link" in block && block.link ? (
                <Link
                  href={block.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-[16px] font-medium text-canvas-white transition-opacity hover:opacity-70"
                >
                  → {block.link.label}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
