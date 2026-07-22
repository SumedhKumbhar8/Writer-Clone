import Link from "next/link";

export function AiStudioBottomCTA() {
  return (
    <section className="sf_bottom_cta_block">
      <div className="sf_bottom_cta_wrapper">
        <p className="bottom-cta-text">
          Scale AI safely across your business
        </p>

        <div className="bottom-cta-buttons">
          <Link
            href="https://dev.writer.com/home/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-cta-button bottom-cta-button-0"
          >
            Explore docs
          </Link>
          <Link
            href="https://go.writer.com/demo/"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-cta-button bottom-cta-button-1"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
