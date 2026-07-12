"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Logo = {
  name: string;
  src: string;
  width?: number;
};

type CustomersLogosSectionProps = {
  logos: readonly Logo[];
};

const SCROLL_SPEED = 48;

export function CustomersLogosSection({ logos }: CustomersLogosSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    let frameId = 0;
    let lastTime = 0;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

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

  const loop = [...logos, ...logos];

  return (
    <div className="customers-page-logos" aria-label="Customer logos">
      <div ref={trackRef} className="customers-page-logos__track" aria-hidden>
        {loop.map((logo, i) => (
          <figure key={`${logo.name}-${i}`} className="customers-page-logos__item">
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width ?? 80}
              height={44}
              className="h-11 w-auto max-w-none object-contain"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
