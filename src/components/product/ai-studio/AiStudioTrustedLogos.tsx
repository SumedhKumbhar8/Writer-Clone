"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AI_STUDIO_TRUSTED_LOGOS } from "@/data/ai-studio";

const SCROLL_SPEED = 72;

function LogoStrip({ logo }: { logo: (typeof AI_STUDIO_TRUSTED_LOGOS)[number] }) {
  return (
    <figure className="trusted-logos-item">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={60}
        className="h-[60px] w-auto max-w-none brightness-0 invert"
        draggable={false}
      />
    </figure>
  );
}

export function AiStudioTrustedLogos() {
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

  const logos = [...AI_STUDIO_TRUSTED_LOGOS, ...AI_STUDIO_TRUSTED_LOGOS];

  return (
    <section className="ai-studio-logos py-[38px]" aria-label="Customers automating enterprise work">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <h3 className="mb-[14px] text-center text-[16px] font-normal leading-[1.6] text-canvas-white">
          Customers are already automating enterprise work with WRITER agentic AI
        </h3>
      </div>

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
    </section>
  );
}
