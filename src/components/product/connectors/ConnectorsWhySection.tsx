import Image from "next/image";
import { WHY_CONNECTORS } from "@/data/connectors";

export function ConnectorsWhySection() {
  return (
    <section className="whyWriter__section">
      <div className="container-default-sm">
        <div className="whyWriter_section-title">
          <p>WHY CONNECTORS</p>
          <h2 id="h-connect-your-stack-automate-the-work">Connect your stack. Automate the work.</h2>
        </div>

        <div className="whyWriter__row">
          {WHY_CONNECTORS.map((item) => (
            <div key={item.title} className="whyWriter__col">
              <figure className="wp-block-image size-large">
                <Image
                  src={item.image}
                  alt=""
                  width={568}
                  height={312}
                />
              </figure>

              <h4 id={`h-${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}>
                {item.title}
              </h4>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
