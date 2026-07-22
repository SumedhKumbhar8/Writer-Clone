"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  playbookHub,
  type PlaybookCard,
  type PlaybookSection,
} from "@/data/marketing-playbooks";

const ChecklistIcon = () => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.31396 18.7768L5.52327 20.9862L9.94189 16.5675M14.3605 6.62565H23.1977M14.3605 13.2536H23.1977M14.3605 19.8815H23.1977M4.41862 5.521H8.83724C9.44732 5.521 9.94189 6.01557 9.94189 6.62565V11.0443C9.94189 11.6544 9.44732 12.1489 8.83724 12.1489H4.41862C3.80854 12.1489 3.31396 11.6544 3.31396 11.0443V6.62565C3.31396 6.01557 3.80854 5.521 4.41862 5.521Z"
      stroke="black"
      strokeWidth="1.46204"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#F5F5F9" />
    <path
      d="M19 23V19C19 17.6739 19.5268 16.4021 20.4645 15.4645C21.4021 14.5268 22.6739 14 24 14C25.3261 14 26.5979 14.5268 27.5355 15.4645C28.4732 16.4021 29 17.6739 29 19V23M17 23H31C32.1046 23 33 23.8954 33 25V32C33 33.1046 32.1046 34 31 34H17C15.8954 34 15 33.1046 15 32V25C15 23.8954 15.8954 23 17 23Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OutputArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <line x1="4.5534" y1="14.6717" x2="14.6715" y2="4.55357" stroke="black" strokeWidth="1.43092" />
    <path
      d="M15.1772 13.1535L14.6713 4.55315L6.07086 4.04724"
      stroke="black"
      strokeWidth="1.43092"
      strokeLinecap="square"
    />
  </svg>
);

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function ytEmbed(id: string, autoplay = false) {
  return `https://www.youtube.com/embed/${id}?controls=1&rel=0&autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}&enablejsapi=1`;
}

function UnlockForm({
  compact,
  onSubmit,
}: {
  compact?: boolean;
  onSubmit?: () => void;
}) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      {!compact && (
        <>
          <label htmlFor="pb-email">Work email*</label>
          <input id="pb-email" name="email" type="email" required placeholder="Work email*" />
        </>
      )}
      {compact && (
        <>
          <input name="email" type="email" required placeholder="Work email*" aria-label="Work email" />
          <input name="firstname" type="text" required placeholder="First name*" aria-label="First name" />
          <input name="lastname" type="text" required placeholder="Last name*" aria-label="Last name" />
        </>
      )}
      <button type="submit">{compact ? "Access the hub" : "Access the hub"}</button>
      {compact && (
        <p className="pb-legal">
          By completing and submitting this form, you agree that WRITER may email or call you with
          product updates, educational resources, and other promotional information. To learn more
          about how WRITER uses your information, see our{" "}
          <Link href="/legal/privacy/">Privacy Policy</Link>.
        </p>
      )}
    </form>
  );
}

function VideoCard({
  card,
  onUnlock,
}: {
  card: PlaybookCard;
  onUnlock: () => void;
}) {
  const output =
    card.outputHref === "unlock" ? (
      <button type="button" className="pb-view-output" onClick={onUnlock}>
        View output <OutputArrow />
      </button>
    ) : card.outputHref ? (
      <a href={card.outputHref} target="_blank" rel="noopener noreferrer">
        View output <OutputArrow />
      </a>
    ) : null;

  return (
    <div className="pb-videos-card">
      <div
        className={`pb-videos-video ${card.locked ? "is-locked" : "is-unlocked"}`}
        data-video-id={card.videoId}
      >
        {card.locked ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pb-thumb" src={ytThumb(card.videoId)} alt="" />
            <div className="pb-lock-overlay" onClick={onUnlock} role="button" tabIndex={0}>
              <LockIcon />
            </div>
          </>
        ) : (
          <iframe
            src={ytEmbed(card.videoId)}
            title={card.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
      <div className="pb-videos-info">
        <div className="pb-videos-info-head">
          <div className="pb-videos-info-icon">
            <ChecklistIcon />
          </div>
          {card.badge && <span className="pb-videos-info-badge">{card.badge}</span>}
        </div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        {output}
      </div>
    </div>
  );
}

function SectionBlock({
  section,
  onUnlock,
}: {
  section: PlaybookSection;
  onUnlock: () => void;
}) {
  return (
    <section className="pb-videos-section" id={section.id}>
      <div className="pb-container">
        <div className="pb-section-title">
          <span>playbook</span>
          <h2>{section.title}</h2>
        </div>
        {section.intro && <div className="pb-content-wrap">{section.intro}</div>}
        <div className="pb-videos-row">
          {section.cards.map((card) => (
            <VideoCard key={card.videoId + card.title} card={card} onUnlock={onUnlock} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BannerContent({ className }: { className?: string }) {
  const { hero } = playbookHub;
  return (
    <div className={`pb-banner-content ${className ?? ""}`}>
      <h3>{hero.contentTitle[0]}</h3>
      <h3>{hero.contentTitle[1]}</h3>
      {hero.paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
}

function BannerRight() {
  const { hero } = playbookHub;
  return (
    <div className="pb-banner-content pb-banner-right">
      <p>{hero.seeTitle}</p>
      <ul>
        {hero.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p>{hero.closing}</p>
    </div>
  );
}

export function PlaybookHub() {
  const [active, setActive] = useState("intro");
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { hero, nav, sections, workflow, differences, footer } = playbookHub;

  const openModal = useCallback(() => {
    setModalOpen(true);
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const ids = ["intro", ...sections.map((s) => s.id)];
    const onScroll = () => {
      let current = "intro";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  useEffect(() => {
    document.body.style.overflow = modalOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, menuOpen]);

  return (
    <div className="playbook-hub">
      <div
        className={`pb-sidebar-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`pb-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="pb-sidebar-top">
          <div className="pb-sidebar-logo">
            <Link href="/">
              <Image src="/images/logo.svg" alt="WRITER" width={108} height={35} priority />
            </Link>
          </div>
          <h2>{playbookHub.title}</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "active" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-sidebar-form">
          <div className="form_title">Unlock all resources</div>
          <UnlockForm />
        </div>
      </aside>

      <div className="pb-main">
        <header className="pb-mobile-header">
          <div className="pb-mobile-header-inner">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="WRITER"
                width={108}
                height={35}
                className="invert"
              />
            </Link>
            <button
              type="button"
              className={`pb-menu-btn ${menuOpen ? "active" : ""}`}
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <section className="pb-hero" id="intro">
          <div className="pb-hero-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/playbooks/hero-bg.png" alt="" className="desktop-image" />
          </div>
          <div className="pb-container">
            <div className="pb-hero-banner">
              <div className="pb-hero-left">
                <h1>{hero.headline}</h1>
                <p className="pb-hero-sub">{hero.subhead}</p>
                <div className="pb-button-wrap">
                  <button type="button" className="pb-hero-cta" onClick={openModal}>
                    {hero.cta}
                  </button>
                </div>
                <BannerContent className="pb-banner-left" />
              </div>
              <div className="pb-hero-right">
                <div className="pb-youtube-wrap">
                  <iframe
                    src={ytEmbed(hero.videoId, true)}
                    title={hero.headline}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="pb-banner-right-mobile">
                  <BannerContent />
                  <BannerRight />
                </div>
                <BannerRight />
              </div>
            </div>
          </div>
        </section>

        <SectionBlock section={sections[0]} onUnlock={openModal} />

        <section className="pb-workflow">
          <div className="pb-container">
            <div className="pb-workflow-inner">
              <div className="pb-workflow-title">
                <h3>{workflow.title}</h3>
                <p>{workflow.description}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={workflow.image} alt="" width={2000} />
            </div>
          </div>
        </section>

        {sections.slice(1, 3).map((section) => (
          <SectionBlock key={section.id} section={section} onUnlock={openModal} />
        ))}

        <section className="pb-differences" id="differences">
          <div className="pb-container">
            <h2>{differences.title}</h2>
            <div className="pb-diff-desc">
              {differences.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="pb-diff-table-wrap">
              <table>
                <thead>
                  <tr>
                    {differences.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {differences.rows.map((row) => (
                    <tr key={row[0]}>
                      <td className="dimensions">{row[0]}</td>
                      <td>{row[1]}</td>
                      <td className="playbook">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {sections.slice(3).map((section) => (
          <SectionBlock key={section.id} section={section} onUnlock={openModal} />
        ))}

        <footer className="pb-footer">
          <div className="pb-footer-inner">
            <p className="pb-footer-copy">{footer.copyright}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pb-footer-mark"
              src="/images/playbooks/footer-mark.svg"
              alt="WRITER"
            />
            <ul className="pb-footer-links">
              {footer.links.map((link) => (
                <li key={link.label}>
                  {link.href === "#" ? (
                    <button type="button">{link.label}</button>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>

      <div className={`pb-modal ${modalOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="pb-modal-overlay" onClick={() => setModalOpen(false)} />
        <div className="pb-modal-content">
          <button
            type="button"
            className="pb-modal-close"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
          >
            ×
          </button>
          <h3>Unlock all resources</h3>
          <UnlockForm compact onSubmit={() => setModalOpen(false)} />
        </div>
      </div>
    </div>
  );
}
