"use client";

import Image from "next/image";
import { useMounted } from "@/hooks/useMounted";
import { WRITER_AGENT_HERO } from "@/data/writer-agent";

export function WriterAgentHero() {
  const mounted = useMounted();
  const { icon, label, title, description, image } = WRITER_AGENT_HERO;

  return (
    <section className="writer-agent-hero pt-[140px] pb-[30px]">
      <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-[15px]">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="mx-auto mb-4"
          aria-hidden
        />

        <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white">
          {label}
        </h5>

        <h1 className="mx-auto max-w-[760px] text-[clamp(36px,5vw,60px)] font-medium leading-none tracking-[-1.28px] text-canvas-white">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-[1.55] text-canvas-white">
          {description}
        </p>

        <div className="mx-auto mt-10 flex max-w-[480px] justify-center">
          {mounted ? (
            <form
              className="flex h-[54px] w-full overflow-hidden rounded-full bg-[#333333]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Work email"
                aria-label="Work email"
                autoComplete="email"
                className="min-w-0 flex-1 bg-transparent px-[25px] text-[16px] text-canvas-white outline-none placeholder:text-[#999]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-action-blue px-7 text-[16px] font-semibold text-canvas-white transition-opacity hover:opacity-90"
                suppressHydrationWarning
              >
                Request a demo
              </button>
            </form>
          ) : (
            <div className="h-[54px] w-full rounded-full bg-[#333333]" aria-hidden />
          )}
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
