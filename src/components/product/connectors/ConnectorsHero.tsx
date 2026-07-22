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
    <section className="connector-hero">
      <div className="container-default-sm">
        <div className="content-wrap">
          <figure className="wp-block-image size-full" style={{ margin: 0 }}>
            <Image
              src={icon}
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
          </figure>

          <h6 id="h-connectors">{label}</h6>

          <h1 id="h-put-writer-to-work-across-your-tools">{title}</h1>

          <p>{description}</p>

          <div className="wp-block-buttons">
            <div className="wp-block-button get-a-demo">
              <Link href={ctas[0].href}>
                {ctas[0].label}
              </Link>
            </div>
            <div className="wp-block-button watch-the-demo">
              <button
                type="button"
                onClick={() => setShowVideo(true)}
              >
                {ctas[1].label}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-img container-default-sm">
        <figure className="wp-block-image size-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
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
