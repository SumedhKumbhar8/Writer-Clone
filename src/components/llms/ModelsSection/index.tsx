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
          <p className="m-0 text-[13px] font-semibold uppercase tracking-[1.6px] text-midnight-graphite">
            {label}
          </p>
        </div>

        <div className="text-center">
          <h2 className="m-0 text-[clamp(28px,3vw,40px)] font-medium leading-snug text-midnight-graphite">
            {title}
          </h2>
          <p className="mb-0 mt-2 text-[14px] leading-relaxed text-slate-gray">
            {description}
          </p>
        </div>

        <div className="meet-team-row mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <div key={model.name} className="meet-team-card">
              <div className="meet-team-card__icon">
                <Image src={model.icon} alt="" width={96} height={96} aria-hidden />
              </div>

              <div className="meet-team-card__content-items" style={{ marginTop: 24 }}>
                <div className="meet-team-card__item">
                  <h3 style={{ marginBottom: 4 }}>{model.name}</h3>
                  <p className="mb-0">{model.tagline}</p>
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
                <Link href={model.href} className="dc-btn dc-btn_secondary dc-btn_small-2 border-0">
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

        <p className="mb-0 mt-3 text-center text-[14px] leading-relaxed text-ghost-gray">
          {disclaimer}
        </p>
      </div>
    </div>
  );
}
