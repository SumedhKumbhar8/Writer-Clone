import Image from "next/image";
import { BRAND_TESTIMONIAL } from "@/data/brand";

export function BrandTestimonial() {
  const { quote, author, role, photo, companyLogo, backgroundImage } =
    BRAND_TESTIMONIAL;

  return (
    <section className="aia__quote-wrap">
      <div className="aia_quote_section">
        <div className="container-default-sm">
          <div className="platform-quote">
            <div className="platform-quote__quote">
              <p>{quote}</p>
            </div>

            <div className="get-proven-approach-quote justify-content-center">
              <div className="get-proven-approach-quote__img">
                <figure className="wp-block-image size-full">
                  <Image src={photo} alt={author} width={99} height={123} />
                </figure>
              </div>

              <div className="get-proven-approach-quote__content">
                <p>
                  <strong>{author}</strong>
                  <br />
                  {role}
                </p>

                <figure className="wp-block-image size-large">
                  <Image
                    src={companyLogo}
                    alt="Company logo"
                    width={134}
                    height={36}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote__after-img">
        <figure className="wp-block-image size-large">
          <Image
            src={backgroundImage}
            alt=""
            width={640}
            height={400}
            className="h-auto w-full max-w-[800px]"
            aria-hidden
          />
        </figure>
      </div>
    </section>
  );
}
