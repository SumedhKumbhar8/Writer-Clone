"use client";

import Image from "next/image";
import { useMounted } from "@/hooks/useMounted";
import { WRITER_AGENT_HERO } from "@/data/writer-agent";

export function WriterAgentHero() {
  const mounted = useMounted();
  const { icon, label, title, description, image } = WRITER_AGENT_HERO;

  return (
    <section className="activate_product_hero">
      <div className="container-default-sm">
        <div className="ap_hero__content">
          <figure className="wp-block-image size-full arrow-icon">
            <Image src={icon} alt="" width={40} height={40} aria-hidden />
          </figure>

          <h5 className="wp-block-heading">{label}</h5>

          <h1 className="wp-block-heading">{title}</h1>

          <p className="wp-block-paragraph">{description}</p>

          <div className="demo-form-wrapper">
            {mounted ? (
              <form
                className="demo-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  name="work-email"
                  placeholder="Work email"
                  className="demo-input"
                  aria-label="Work email"
                  autoComplete="email"
                />
                <button type="submit" className="demo-btn">
                  Request a demo
                </button>
              </form>
            ) : (
              <div className="h-[54px] w-full rounded-full bg-[#333333]" aria-hidden />
            )}
          </div>
        </div>
      </div>

      <div className="container-default-sm ap_hero__img">
        <figure className="wp-block-image size-full">
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
    </section>
  );
}
