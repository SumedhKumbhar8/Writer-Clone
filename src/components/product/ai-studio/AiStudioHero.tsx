import Image from "next/image";
import Link from "next/link";
import { AI_STUDIO_HERO } from "@/data/ai-studio";

export function AiStudioHero() {
  const { label, title, description, image, ctas } = AI_STUDIO_HERO;

  return (
    <section className="activate_product_hero">
      <div className="container-default-sm">
        <div className="ap_hero__content">
          <div className="pretitle">
            <p>{label}</p>
          </div>

          <div className="ap_hero__title">
            <h1>{title}</h1>
          </div>

          <div className="ap_hero__description">
            <p>{description}</p>
          </div>

          <div className="ap_hero__buttons">
            {ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`ap_btn${cta.variant === "filled" ? " ap_btn__light" : ""}`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="ap_hero__img">
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
      </div>
    </section>
  );
}
