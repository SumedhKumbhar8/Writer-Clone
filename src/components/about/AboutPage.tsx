import Image from "next/image";
import Link from "next/link";
import {
  ADVISORS,
  BODY_PARAS,
  FOUNDERS,
  INVESTORS,
  LEADERSHIP,
  LEARN_MORE,
  OFFICES,
  PROMISE_PARAS,
  TEAM_PHOTOS,
  VALUES,
} from "@/data/about";
import "@/styles/about.css";

function PersonCard({
  name,
  role,
  image,
  variant,
}: {
  name: string;
  role: string;
  image: string;
  variant: "founder" | "leader";
}) {
  const cls = variant === "founder" ? "founder-card" : "leader-card";
  const w = variant === "founder" ? 264 : 213;
  const h = variant === "founder" ? 177 : 143;
  return (
    <div className={cls}>
      <Image src={image} alt={name} width={w} height={h} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="about-page section-stories-wrap section-pb">
      <div className="container dc-content-2 section-pt-xs">
        <Image
          className="about-page__logo"
          src="https://writer.com/wp-content/uploads/2024/03/writer-circle-logo-about.svg"
          alt="Writer"
          width={32}
          height={33}
        />
        <h1 className="about-page__h1">The world’s enterprise AI pioneer</h1>

        <div className="team-grid">
          <ul className="team-grid__row">
            {TEAM_PHOTOS.map((src) => (
              <li key={src} className="team-card-sm">
                <Image src={src} alt="" width={150} height={92} />
              </li>
            ))}
          </ul>
        </div>

        <div className="newsroom-about-row">
          <div className="newsroom-about-col-content">
            <p>{BODY_PARAS[0]}</p>
            <div className="newsroom-content-item__title">
              We’re creating a world where you can dream bigger and build faster
            </div>
            <p>{BODY_PARAS[1]}</p>
            <div className="newsroom-content-item__title">
              Purpose-built for the enterprise
            </div>
            <p>{BODY_PARAS[2]}</p>
          </div>

          <div className="newsroom-about-col-items">
            <div className="newsroom-about-items">
              {OFFICES.map((item) => (
                <div key={item.label} className="newsroom-about-item">
                  <div className="newsroom-about-item__img">
                    <Image src={item.icon} alt="" width={24} height={24} />
                  </div>
                  <div className="newsroom-about-item__content">{item.label}</div>
                </div>
              ))}
              <div className="newsroom-about-item">
                <div className="newsroom-about-item__img">
                  <Image
                    src="https://writer.com/wp-content/uploads/2024/03/link_541d54.png"
                    alt="Share"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="newsroom-about-item__content">
                  <div className="newsroom-about-item__social">
                    <a href="https://www.linkedin.com/company/writer/" aria-label="LinkedIn">
                      in
                    </a>
                    <a href="https://x.com/writer" aria-label="X">
                      X
                    </a>
                    <a href="https://www.facebook.com/writer" aria-label="Facebook">
                      f
                    </a>
                    <a href="https://writer.com/" aria-label="Link">
                      ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teams-block">
          <h2>Founders</h2>
          <div className="teams-block__grid">
            {FOUNDERS.map((p) => (
              <PersonCard key={p.name} {...p} variant="founder" />
            ))}
          </div>
        </div>

        <div className="teams-block">
          <h2>Leadership</h2>
          <div className="teams-block__grid">
            {LEADERSHIP.map((p) => (
              <PersonCard key={p.name} {...p} variant="leader" />
            ))}
          </div>
        </div>

        <div className="teams-block">
          <h2>Investors</h2>
          <div className="teams-block__grid">
            {INVESTORS.map((p) => (
              <div key={p.name} className="leader-card">
                <Image src={p.image} alt={p.name} width={213} height={143} />
              </div>
            ))}
          </div>
        </div>

        <div className="teams-block">
          <h2>Advisors</h2>
          <div className="teams-block__grid">
            {ADVISORS.map((p) => (
              <PersonCard key={p.name} {...p} variant="leader" />
            ))}
          </div>
        </div>

        <div className="commitment-block">
          <div className="commitment-block-inner">
            <div className="newsroom-content-item__title">Our promise</div>
            {PROMISE_PARAS.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="values-block">
          <div className="values-wrap__title">Our values</div>
          <div className="values-block-wrap">
            {VALUES.map((v) => (
              <div key={v.title} className="values-block-col">
                <Image src={v.image} alt={v.title} width={48} height={48} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hiring-block">
          <div className="values-wrap__title">We’re hiring</div>
          <Link
            href="https://writer.com/company/careers/"
            className="hiring-block__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the open positions
          </Link>
        </div>

        <div className="learn-more-block">
          <div className="values-wrap__title">Learn more about WRITER</div>
          <div className="learn-more-block__grid">
            {LEARN_MORE.map((item) => (
              <div key={item.title} className="learn-more-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href}>Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
