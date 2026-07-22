import Image from "next/image";
import { WRITER_AGENT_QUOTE } from "@/data/writer-agent";

export function WriterAgentQuote() {
  const { text, author, role, company, photo, companyLogo, gradientOrb } = WRITER_AGENT_QUOTE;

  return (
    <section className="aia__quote-wrap">
      <div className="aia_quote_section">
        <div className="container-default-sm">
          <div className="platform-quote">
            <div className="platform-quote__quote">
              <p>&ldquo;{text}&rdquo;</p>
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
                    alt={company}
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
            src={gradientOrb}
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
