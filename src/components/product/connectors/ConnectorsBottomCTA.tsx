import Link from "next/link";
import { CONNECTORS_BOTTOM_CTA } from "@/data/connectors";

export function ConnectorsBottomCTA() {
  const { title, description, ctas } = CONNECTORS_BOTTOM_CTA;

  return (
    <section className="connector-bottom-cta">
      <div className="inner-wrap container-default-sm">
        <h3 id="h-put-writer-to-work-across-your-tools">{title}</h3>

        <p>{description}</p>

        <div className="wp-block-buttons">
          <div className="wp-block-button">
            <Link href={ctas[0].href}>
              {ctas[0].label}
            </Link>
          </div>
          <div className="wp-block-button">
            <Link href={ctas[1].href}>
              {ctas[1].label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
