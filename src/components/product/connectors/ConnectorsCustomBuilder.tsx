import Image from "next/image";
import Link from "next/link";
import { CUSTOM_CONNECTORS } from "@/data/connectors";

export function ConnectorsCustomBuilder() {
  const { title, description, cta, image } = CUSTOM_CONNECTORS;

  return (
    <section className="connectors__builder-section">
      <div className="container-default-sm">
        <div className="connectors__builder-title">
          <h2 id="h-can-t-find-what-you-need">{title}</h2>

          <p>{description}</p>

          <p>
            <Link href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label}
            </Link>
          </p>
        </div>

        <figure className="wp-block-image size-large">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1080px) 100vw, 1080px"
          />
        </figure>
      </div>
    </section>
  );
}
