"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONNECTORS_HERO } from "@/data/connectors";

export function ConnectorsHero() {
  const [showVideo, setShowVideo] = useState(false);
  const { icon, label, title, description, ctas, image } = CONNECTORS_HERO;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") setShowVideo(false);
    },
    [],
  );

  return (
    <section className="connectors-hero relative overflow-hidden bg-white pt-[120px] lg:pt-[140px]">
      <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-[15px]">
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="mx-auto mb-4"
          aria-hidden
        />

        <h5 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
          {label}
        </h5>

        <h1 className="mx-auto max-w-[907px] whitespace-pre-line text-[clamp(36px,5vw,64px)] font-medium leading-none tracking-[-1.28px] text-midnight-graphite">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-[907px] text-[16px] leading-[1.6] text-[#4f4f4f]">
          {description}
        </p>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={ctas[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[60px] items-center justify-center rounded-full bg-midnight-graphite px-6 text-[16px] font-semibold leading-5 text-canvas-white transition-colors hover:bg-[#333]"
          >
            {ctas[0].label}
          </Link>
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="inline-flex h-[60px] items-center justify-center rounded-full border-2 border-[#e4e7ed] bg-canvas-white px-6 text-[16px] font-semibold leading-5 text-midnight-graphite transition-colors hover:border-[#d2d4d7] hover:bg-[#f5f5f5]"
            suppressHydrationWarning
          >
            {ctas[1].label}
          </button>
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

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          tabIndex={-1}
        >
          <div
            className="relative w-full max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-4 text-white/80 transition-colors hover:text-white"
              aria-label="Close video"
              suppressHydrationWarning
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/hmeJLLcRa6s?autoplay=1"
                title="See how it works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
