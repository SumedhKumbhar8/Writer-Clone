import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="sf_bottom_cta_block">
      <div className="sf_bottom_cta_wrapper">
        <div className="bottom-cta-text">
          Your AI transformation journey starts today.
        </div>

        <div className="bottom-cta-buttons">
          <Link
            href="https://app.writer.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-cta-button bottom-cta-button-0"
          >
            Try for free
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
