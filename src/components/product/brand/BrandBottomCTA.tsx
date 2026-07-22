import Link from "next/link";
import { BRAND_BOTTOM_CTA } from "@/data/brand";

export function BrandBottomCTA() {
  const { title, ctas } = BRAND_BOTTOM_CTA;

  return (
    <section className="sf_bottom_cta_block">
      <div className="sf_bottom_cta_wrapper">
        <p className="bottom-cta-text">{title}</p>

        <div className="bottom-cta-buttons">
          <Link
            href={ctas[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-cta-button bottom-cta-button-0"
          >
            {ctas[0].label}
          </Link>
          <Link
            href={ctas[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-cta-button bottom-cta-button-1"
          >
            {ctas[1].label}
          </Link>
        </div>
      </div>
    </section>
  );
}
