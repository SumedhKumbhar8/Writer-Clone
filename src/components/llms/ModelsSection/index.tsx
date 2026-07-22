import Image from "next/image";
import Link from "next/link";
import { MODELS_SECTION } from "@/data/llms";

export function ModelsSection() {
  const { icon, label, title, description, disclaimer, models } = MODELS_SECTION;

  return (
    <div className="section-pt section-pb">
      <div className="container" style={{ maxWidth: 1136 }}>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div className="mb-2">
            <Image src={icon} alt="" width={48} height={48} aria-hidden />
          </div>
          <p className="llms-section-label">{label}</p>
        </div>

        <div className="text-center">
          <h2 className="llms-section-title">{title}</h2>
          <p className="llms-section-desc mt-2">{description}</p>
        </div>

        <div className="meet-team-row mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <div key={model.name} className="meet-team-card">
              <div className="meet-team-card__icon">
                <Image src={model.icon} alt="" width={72} height={72} aria-hidden />
              </div>

              <div className="meet-team-card__content-items">
                <div className="meet-team-card__item">
                  <h3>{model.name}</h3>
                  <p>{model.tagline}</p>
                </div>

                <div className="meet-team-card__item">
                  <h5>Details</h5>
                  <ul>
                    {model.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="meet-team-card__item">
                  <h5>Price</h5>
                  <ul>
                    {model.price.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="meet-team-card__link">
                <Link href={model.href} className="dc-btn">
                  Learn more
                </Link>
              </div>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="hidden md:flex">
            <div className="meet-team-card-bg">
              <Image
                src="https://writer.com/wp-content/uploads/2024/11/palmyra-card-bg.svg?w=640"
                alt=""
                width={96}
                height={96}
                aria-hidden
              />
              <div className="meet-team-card-bg__content">
                <p>
                  More<br />
                  coming<br />
                  soon
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="llms-disclaimer mt-3">{disclaimer}</p>
      </div>
    </div>
  );
}
