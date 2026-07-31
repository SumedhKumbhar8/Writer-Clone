"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomersLogosSection } from "./CustomersLogosSection";

type FeaturedStory = {
  companyLogo: string;
  companyName: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

type Logo = {
  name: string;
  src: string;
  width?: number;
};

type CustomersHeroSectionProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  videoSrc: string;
  fullscreenVideoSrc?: string;
  featuredStory: FeaturedStory;
  logos: readonly Logo[];
};

export function CustomersHeroSection({
  description,
  primaryCta,
  videoSrc,
  fullscreenVideoSrc,
  featuredStory,
  logos,
}: CustomersHeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (video.paused) {
      void video.play();
    }
  };

  const openFullscreen = () => {
    if (fullscreenVideoSrc) {
      window.open(fullscreenVideoSrc, "_blank", "noopener,noreferrer");
      return;
    }
    const video = videoRef.current;
    if (video?.requestFullscreen) {
      void video.requestFullscreen();
    }
  };

  return (
    <section className="customers-page-hero">
      <div className="mx-auto max-w-[1080px] px-[15px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex w-full flex-col lg:max-w-[563px] lg:flex-1">
            <p className="mb-[43px] text-[14px] font-medium uppercase tracking-[3px] text-midnight-graphite">
              CUSTOMERS
            </p>
            <h1 className="customers-page-hero__title">
              Built for enterprises
              <br />
              and <em>loved</em> by champions
            </h1>
            <p className="max-w-[520px] text-lg leading-relaxed text-midnight-graphite">
              {description}
            </p>
            <div className="mt-6 pt-1">
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-midnight-graphite px-8 text-lg font-semibold text-canvas-white transition-opacity hover:opacity-90"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-[457px] lg:shrink-0">
            <div className="relative">
              <div className="customers-page-hero__video">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>

                <button
                  type="button"
                  onClick={toggleSound}
                  className="absolute right-3 top-3 z-10 flex h-9 items-center gap-1.5 rounded-full bg-midnight-graphite py-1 pl-1 pr-2 text-[11px] font-medium text-canvas-white"
                  suppressHydrationWarning
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-canvas-white">
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" aria-hidden>
                      <path d="M9.5 5.5L1.5 10.1V0.9L9.5 5.5Z" fill="#000" />
                    </svg>
                  </span>
                  <span>{isMuted ? "Play with sound" : "Mute"}</span>
                </button>

                <button
                  type="button"
                  onClick={openFullscreen}
                  aria-label="Open video fullscreen"
                  className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-black/35 text-canvas-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  suppressHydrationWarning
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M7 3H3V7" stroke="white" strokeWidth="2" />
                    <path d="M11 3H15V7" stroke="white" strokeWidth="2" />
                    <path d="M7 15H3V11" stroke="white" strokeWidth="2" />
                    <path d="M11 15H15V11" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              </div>

              <div className="customers-page-hero__featured">
                <Image
                  src={featuredStory.companyLogo}
                  alt={featuredStory.companyName}
                  width={72}
                  height={28}
                  className="h-7 w-auto shrink-0"
                />
                <p className="text-sm leading-snug text-midnight-graphite">
                  Accelerates time to market and empowers
                  <br className="hidden sm:block" /> people with AI and WRITER.{" "}
                  <Link
                    href={featuredStory.ctaHref}
                    className="font-semibold underline underline-offset-2"
                    target={
                      featuredStory.ctaHref.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      featuredStory.ctaHref.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {featuredStory.ctaLabel}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-[120px]">
          <CustomersLogosSection logos={logos} />
        </div>
      </div>
    </section>
  );
}
