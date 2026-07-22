import Image from "next/image";
import { AI_STUDIO_WHY_WRITER } from "@/data/ai-studio";

export function AiStudioWhyWriter() {
  return (
    <section className="love_writer__section">
      <div className="container-default-sm">
        <div className="love_writer__title">
          <h2 className="love_writer__heading">
            Why enterprise technology leaders love WRITER
          </h2>
        </div>

        <div className="love_writer__row">
          {AI_STUDIO_WHY_WRITER.map((feature) => (
            <div key={feature.title} className="love_writer__card">
              <figure className="wp-block-image size-full">
                <Image
                  src={feature.icon}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden
                />
              </figure>

              <h4>{feature.title}</h4>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
