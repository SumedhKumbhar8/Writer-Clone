"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AI_STUDIO_TRUSTED_LOGOS } from "@/data/ai-studio";

const SCROLL_SPEED = 72;

function LogoStrip({ logo }: { logo: (typeof AI_STUDIO_TRUSTED_LOGOS)[number] }) {
  return (
    <figure className="wp-block-image size-full logo-item-xs m-0">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={77}
        className="h-[77px] w-auto max-w-none object-contain"
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
    <section className="logos_array" aria-label="Customers automating enterprise work">
      <div className="container-default-sm">
        <div className="text-center wr-mb-3 pb-1">
          <h3
            className="mwxs:wr-fz-4 wr-fz-4 wr-font-4 wr-leading-relaxed tw-text-white has-text-color has-link-color"
            style={{ color: "#d2d4d7" }}
          >
            Customers are already automating enterprise work with WRITER agentic AI
          </h3>
        </div>
      </div>

      <div className="wr-color-logos-1">
        <div className="container-default-sm logos-gradient-container">
          <div
            ref={trackRef}
            className={`logos-gradient-1 logos-gradient-1_resp logos-gradient-1_flex overflow-hidden ${ready ? "" : ""}`}
            aria-hidden
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  transform: ready ? `translate3d(-${offsetRef.current}px, 0, 0)` : "translate3d(0, 0, 0)",
                }}
              >
                {logos.map((logo, i) => (
                  <LogoStrip key={`${logo.name}-${i}`} logo={logo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
