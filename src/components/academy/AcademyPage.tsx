"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { academyData } from "@/data/academy";

const arrowSvg = (
  <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const searchIcon = (
  <svg className="academy-search-icon" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="5.5" stroke="#000" strokeWidth="1.4" />
    <path d="M11 11L14.5 14.5" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

function CourseCard({
  tag,
  title,
  href,
}: {
  tag: string;
  title: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      className="academy-card"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <div className="academy-card-tag-wrap">
        <span className="academy-card-tag">{tag}</span>
      </div>
      <h2 className="academy-card-title">{title}</h2>
      <img className="academy-card-arrow" src={academyData.arrowIcon} alt="" aria-hidden />
    </Link>
  );
}

export function AcademyPage() {
  const [query, setQuery] = useState("");
  const d = academyData;

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    window.open(
      `https://academy.writer.com/?search=${encodeURIComponent(q)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="academy-page">
      <header className="academy-header">
        <div className="academy-header-left">
          <Link href="/academy">
            <img
              className="academy-header-logo"
              src={d.logo.src}
              alt={d.logo.alt}
              width={d.logo.width}
              height={d.logo.height}
            />
          </Link>
        </div>

        <div className="academy-header-right">
          <Link href={d.nav.home.href} className="academy-nav-link">
            {d.nav.home.label}
          </Link>

          <div className="academy-learn">
            <button type="button" className="academy-learn-btn" aria-haspopup="menu">
              {d.nav.learn.label}
            </button>
            <div className="academy-learn-menu" role="menu">
              {d.nav.learn.items.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" role="menuitem">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href={d.nav.myLearning.href}
            className="academy-nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {d.nav.myLearning.label}
          </a>
          <a
            href={d.nav.writerLogin.href}
            className="academy-nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {d.nav.writerLogin.label}
          </a>

          <form className="academy-search" onSubmit={onSearch} role="search">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {searchIcon}
          </form>

          <a href={d.nav.signIn.href} className="academy-sign-in" target="_blank" rel="noopener noreferrer">
            {d.nav.signIn.label}
          </a>
        </div>
      </header>

      <section className="academy-hero">
        {d.hero.titleLines.map((line) => (
          <h1 key={line} className="academy-hero-title">
            {line}
          </h1>
        ))}
        <p className="academy-hero-sub">{d.hero.subtitle}</p>
      </section>

      <div className="academy-iframe-wrap">
        <iframe
          className="academy-iframe"
          src={d.searchIframe}
          title="Writer Academy AI Search"
          loading="lazy"
          allow="clipboard-write"
        />
      </div>

      <div className="academy-widgets">
        <section className="academy-widget">
          <div className="academy-widget-intro">
            <h2 className="academy-widget-heading">{d.startSection.title}</h2>
            <p className="academy-widget-sub">{d.startSection.subtitle}</p>
            <a
              href={d.startSection.cta.href}
              className="academy-widget-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.startSection.cta.label}
            </a>
          </div>
          <div className="academy-widget-cards">
            {d.startSection.cards.map((card) => (
              <CourseCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="academy-widget academy-widget--more">
          <div className="academy-widget-intro">
            <h2 className="academy-widget-heading">{d.moreSection.title}</h2>
            <p className="academy-widget-sub">{d.moreSection.subtitle}</p>
          </div>
          <div className="academy-widget-cards">
            {d.moreSection.cards.map((card) => (
              <CourseCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>

      <footer className="academy-resources-footer">
        <div className="academy-resources-inner">
          <div className="academy-resources-content">
            <div className="academy-resources-col">
              <h3 className="academy-resources-heading">{d.resourcesFooter.moreResources.title}</h3>
              <ul className="academy-resources-list">
                {d.resourcesFooter.moreResources.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="academy-resources-divider" />
            <div className="academy-resources-col">
              <h3 className="academy-resources-heading">{d.resourcesFooter.help.title}</h3>
              <a href={d.resourcesFooter.help.cta.href} className="academy-help-btn">
                {d.resourcesFooter.help.cta.label}
                {arrowSvg}
              </a>
            </div>
          </div>
        </div>

        <div className="academy-legal-bar">
          <div className="academy-legal-inner">
            <div className="academy-legal-text">{d.legal.copyright}</div>
            <img className="academy-legal-logo" src={d.footerLogo} alt="" width={85} height={84} />
            <div className="academy-legal-text">
              <a href={d.legal.terms.href} target="_blank" rel="noopener noreferrer">
                {d.legal.terms.label}
              </a>
              {" | "}
              <a href={d.legal.privacy.href} target="_blank" rel="noopener noreferrer">
                {d.legal.privacy.label}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
