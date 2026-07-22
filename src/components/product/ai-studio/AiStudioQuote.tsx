import Image from "next/image";

type AiStudioQuoteProps = {
  text: string;
  author: string;
  role: string;
  photo: string;
  companyLogo?: string;
  company?: string;
  className?: string;
};

export function AiStudioQuote({
  text,
  author,
  role,
  photo,
  companyLogo,
  company,
  className,
}: AiStudioQuoteProps) {
  return (
    <section className={className ?? "quotes_section"}>
      <div className="container-default-sm">
        <div className="ap_tabs_quote">
          <div className="quote">
            <p>&ldquo;{text}&rdquo;</p>
          </div>

          <div className="author">
            <div className="left">
              <figure className="wp-block-image size-full is-resized">
                <Image
                  src={photo}
                  alt={author}
                  width={200}
                  height={249}
                  className="wp-image-62875"
                  style={{ width: "100px" }}
                />
              </figure>
            </div>

            <div className="right">
              <div className="name">
                <p><strong>{author}</strong></p>
              </div>

              <div className="title">
                <p>{role}</p>
              </div>

              {companyLogo ? (
                <div className="logo">
                  <figure className="wp-block-image size-full is-resized">
                    <Image
                      src={companyLogo}
                      alt={company ?? ""}
                      width={127}
                      height={27}
                      style={{ width: company === "Vanguard" ? "126px" : "156px" }}
                    />
                  </figure>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
