import Link from "next/link";

export function TrustHero() {
  return (
    <section className="section-home-mod-4 sz-h1-1 section-pb-xs trust-hero">
      <div className="container-default-sm text-center">
        <div className="trust-title-content">
          <p className="trust-hero__label">TRUST</p>

          <h1 className="trust-hero__title" id="h-world-class-enterprises-trust-writer">
            World-class
            <br />
            enterprises trust
            <br />
            WRITER
          </h1>

          <p className="trust-hero__desc">
            Build with confidence on a generative AI platform developed with
            enterprise security, privacy, compliance, and centralized supervision
            in mind.
          </p>
        </div>

        <div className="trust-hero__btns">
          <Link
            href="https://writer.com/company/contact/"
            className="dc-btn dc-btn_secondary trust-hero__btn"
          >
            Contact us
          </Link>
          <Link
            href="https://trustcenter.writer.com/"
            className="dc-btn dc-btn_outline-secondary trust-hero__btn"
          >
            Visit Trust Center
          </Link>
        </div>
      </div>
    </section>
  );
}
