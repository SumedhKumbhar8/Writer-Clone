import Image from "next/image";
import Link from "next/link";
import { SECURITY_GOVERNANCE } from "@/data/connectors";

export function ConnectorsSecurityGovernance() {
  const { eyebrow, title, description, items, architecture } = SECURITY_GOVERNANCE;

  return (
    <section className="security-governance__section">
      <div className="container-default-sm">
        <div className="security-governance_section-title">
          <p>{eyebrow}</p>

          <h2 id="h-powerful-enough-for-the-business-safe-enough-for-it">{title}</h2>

          <p>{description}</p>
        </div>

        <div className="security-governance__row">
          {items.map((item) => (
            <div key={item.title} className="security-governance__card">
              <figure className="wp-block-image size-large">
                <Image
                  src={item.icon}
                  alt=""
                  width={33}
                  height={33}
                />
              </figure>

              <h4 id={`h-${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                {item.title}
              </h4>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="security-governance__architecture">
          <h5 id="h-dive-into-the-architecture">{architecture.title}</h5>
          <p>{architecture.description}</p>
          <Link href={architecture.cta.href} target="_blank" rel="noopener noreferrer">
            {architecture.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
