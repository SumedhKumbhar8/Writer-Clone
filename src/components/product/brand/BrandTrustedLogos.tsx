"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BRAND_TRUSTED_LOGOS } from "@/data/brand";

const SCROLL_SPEED = 72;

function LogoItem({ logo }: { logo: (typeof BRAND_TRUSTED_LOGOS.logos)[number] }) {
  return (
    <figure className="flex shrink-0 items-center px-5">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={30}
        className="h-[30px] w-auto max-w-none object-contain brightness-0 invert"
        draggable={false}
      />
    </figure>
  );
}

export function BrandTrustedLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const [ready, setReady] = useState(false);
  const logos = [...BRAND_TRUSTED_LOGOS.logos, ...BRAND_TRUSTED_LOGOS.logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
      setReady(true);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    let frameId = 0;
    let lastTime = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const paused = track.matches(":hover");

      if (!reducedMotion && !paused && halfWidthRef.current > 0) {
        offsetRef.current += SCROLL_SPEED * delta;
        if (offsetRef.current >= halfWidthRef.current) {
          offsetRef.current -= halfWidthRef.current;
        }
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#111113] py-[38px]">
      <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-[15px]">
        <p className="mb-[14px] text-[16px] font-normal leading-[1.6] text-canvas-white">
          {BRAND_TRUSTED_LOGOS.title}
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: "linear-gradient(270deg, #111113 0%, transparent 15%, transparent 85%, #111113 100%)",
          }}
        />
        <div className="h-[60px] w-full overflow-hidden">
          <div
            ref={trackRef}
            className={`flex w-max items-center gap-[40px] will-change-transform ${ready ? "" : ""}`}
            style={ready ? {} : { transform: "none" }}
            aria-hidden
          >
            {logos.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
