"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { BRAND_HOW_IT_WORKS } from "@/data/brand";

export function BrandHowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { eyebrow, title, items } = BRAND_HOW_IT_WORKS;

  const updateActiveStep = useCallback(() => {
    const triggerLine = window.innerHeight * 0.5;
    let newIndex = 0;

    stepRefs.current.forEach((step, index) => {
      if (!step) return;
      const rect = step.getBoundingClientRect();
      if (rect.top <= triggerLine + 200) {
        newIndex = index;
      }
    });

    setActiveIndex(newIndex);
  }, []);

  useEffect(() => {
    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);
    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [updateActiveStep]);

  return (
    <section className="how-it-works">
      <div className="container-default-sm flex-wrapper">
        <div className="hiw-left">
          <div className="how-it-works__title">
            <h5 className="wp-block-heading">{eyebrow}</h5>
            <h2 className="wp-block-heading">{title}</h2>
          </div>

          <div className="how-it-works__steps">
            {items.map((item, index) => (
              <div
                key={item.id}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                className={`hiw-step${index === activeIndex ? " active" : ""}`}
              >
                <h3 className="wp-block-heading">{item.title}</h3>
                <p className="wp-block-paragraph">{item.description}</p>

                <figure className="wp-block-image size-large">
                  <Image
                    src={item.image}
                    alt=""
                    width={936}
                    height={535}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="hiw-right">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`hiw-card${index === activeIndex ? " active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <figure>
                <Image
                  src={item.image}
                  alt=""
                  width={936}
                  height={535}
                  className="h-auto w-full"
                  sizes="(max-width: 1280px) 70vw, 900px"
                  priority={index === 0}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
