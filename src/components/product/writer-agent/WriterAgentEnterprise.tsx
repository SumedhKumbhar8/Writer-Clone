import Image from "next/image";
import Link from "next/link";
import { ENTERPRISE_FEATURES } from "@/data/writer-agent";

export function WriterAgentEnterprise() {
  return (
    <section className="ENTERPRISE_GRADE_PLATFORM">
      <div className="container-default-sm">
        <div className="enterprise-grade">
          <figure className="wp-block-image size-full">
            <Image
              src="https://writer.com/wp-content/uploads/2026/04/mouse-pointer-click_8bcc37.png?w=32"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
          </figure>

          <h5 className="wp-block-heading">ENTERPRISE-GRADE PLATFORM</h5>

          <h2 className="wp-block-heading">
            Complete IT control,
            <br />
            without the governance overhead.
          </h2>

          <div className="wp-block-buttons">
            <div className="wp-block-button">
              <Link className="wp-block-button__link wp-element-button" href="/product/ai-studio/">
                →&nbsp; Explore AI Studio
              </Link>
            </div>
          </div>
        </div>

        <div className="grade-boxes">
          {ENTERPRISE_FEATURES.map((feature) => (
            <div key={feature.title}>
              <figure className="wp-block-image size-full">
                <Image src={feature.icon} alt="" width={48} height={48} aria-hidden />
              </figure>

              <h3 className="wp-block-heading">{feature.title}</h3>

              <p className="wp-block-paragraph">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
