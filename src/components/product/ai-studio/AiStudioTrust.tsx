import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AI_STUDIO_TRUST } from "@/data/ai-studio";

export function AiStudioTrust() {
  const { badge, title, lockIcon, complianceBadges, blocks } = AI_STUDIO_TRUST;

  return (
    <section className="ai_trust__section">
      <div className="container-default-sm">
        <div className="ai_trust__block">
          <div className="ai_trust__title">
            <figure className="wp-block-image size-full">
              <Image
                src={lockIcon}
                alt="Lock"
                width={36}
                height={36}
              />
            </figure>

            <h5>{badge}</h5>

            <h2>{title}</h2>
          </div>

          <div className="ai_trust__logos">
            {complianceBadges.slice(0, 3).map((b) => (
              <figure key={b.alt} className="wp-block-image size-full">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={234}
                  height={322}
                />
              </figure>
            ))}
          </div>

          <div className="ai_trust__logos">
            {complianceBadges.slice(3).map((b) => (
              <figure key={b.alt} className="wp-block-image size-full">
                <Image
                  src={b.src}
                  alt={b.alt}
                  width={234}
                  height={322}
                />
              </figure>
            ))}
          </div>

          {blocks.map((block) => (
            <React.Fragment key={block.title}>
              <h3 id={`h-${block.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                {block.title}
              </h3>
              <p>{block.description}</p>
              {"link" in block && block.link ? (
                <div className="ap_hero__buttons">
                  <Link href={block.link.href} className="ap_btn">
                    {block.link.label}
                  </Link>
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
