import Image from "next/image";
import { BRAND_WHY_WRITER } from "@/data/brand";

export function BrandWhyWriter() {
  const { icon, eyebrow, title, items } = BRAND_WHY_WRITER;

  return (
    <section className="ENTERPRISE_GRADE_PLATFORM">
      <div className="container-default-sm">
        <div className="enterprise-grade">
          <figure className="wp-block-image size-full">
            <Image src={icon} alt="" width={32} height={32} aria-hidden />
          </figure>

          <h5 className="wp-block-heading">{eyebrow}</h5>

          <h2 className="wp-block-heading">
            More output.
            <br />
            Fewer brand reviews.
          </h2>
        </div>

        <div className="grade-boxes">
          {items.map((item) => (
            <div key={item.title}>
              <figure className="wp-block-image size-full">
                <Image src={item.icon} alt="" width={48} height={48} aria-hidden />
              </figure>

              <h3 className="wp-block-heading">{item.title}</h3>

              <p className="wp-block-paragraph">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
