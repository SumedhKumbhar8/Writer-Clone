"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const TRUSTED_LOGOS = [
  { name: "Vanguard", src: "/logos/vanguard-logo-strip.svg", width: 115 },
  { name: "Salesforce", src: "/logos/salesforce-logo-strip.svg", width: 93 },
  { name: "KPMG", src: "/logos/kpmg-logo-strip.svg", width: 78 },
  { name: "Qualcomm", src: "/logos/qualcomm-logo-strip.svg", width: 122 },
  { name: "American Eagle", src: "/logos/american-eagle-logo-strip.svg", width: 111 },
  { name: "Uber", src: "/logos/uber-logo-strip.svg", width: 59 },
  { name: "Dropbox", src: "/logos/dropbox-logo-strip.svg", width: 120 },
  { name: "e.l.f. Cosmetics", src: "/logos/elf-logo-strip.svg", width: 36 },
  { name: "SCAN Health Plan", src: "/logos/scan-health-logo-strip.svg", width: 78 },
  { name: "VOIS", src: "/logos/vois-logo-strip.svg", width: 64 },
] as const;

const SCROLL_SPEED = 72;

function LogoStrip({ logo }: { logo: (typeof TRUSTED_LOGOS)[number] }) {
  return (
    <figure className="trusted-logos-item">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={60}
        className="h-[60px] w-auto max-w-none"
        draggable={false}
      />
    </figure>
  );
}

export function TrustedLogosMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const [ready, setReady] = useState(false);

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

  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <div className="trusted-logos-marquee">
      <div
        ref={trackRef}
        className={`trusted-logos-track ${ready ? "trusted-logos-track--ready" : ""}`}
        aria-hidden
      >
        {logos.map((logo, i) => (
          <LogoStrip key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
