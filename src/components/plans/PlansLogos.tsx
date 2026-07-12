"use client";

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { useEffect, useRef, useState } from "react";

type Logo = {
  name: string;
  src: string;
  width: number;
};

type PlansLogosProps = {
  title: string;
  companies: Logo[];
};

export function PlansLogos({ title, companies }: PlansLogosProps) {
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
    const SCROLL_SPEED = 72;

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

  const duplicated = [...companies, ...companies];

  return (
    <Section variant="muted">
      <Container>
        <p className="mb-6 text-center text-body text-slate-gray">{title}</p>
        <div className="trusted-logos-marquee">
          <div
            ref={trackRef}
            className={`trusted-logos-track ${ready ? "trusted-logos-track--ready" : ""}`}
            aria-hidden
          >
            {duplicated.map((logo, i) => (
              <figure key={`${logo.name}-${i}`} className="trusted-logos-item">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={60}
                  className="h-[60px] w-auto max-w-none"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
