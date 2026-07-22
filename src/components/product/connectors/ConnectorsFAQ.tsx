"use client";

import { FAQ_SIDEBAR, FAQ_ITEMS } from "@/data/connectors";

export function ConnectorsFAQ() {
  return (
    <section className="connector-faq">
      <div className="container">
        <p className="dc-content head">FREQUENTLY ASKED QUESTIONS</p>

        <h2 className="dc-h2-s2">FAQs about connectors</h2>

        <div className="faq-layout">
          <nav className="faq-nav" aria-label="FAQ navigation">
            {FAQ_SIDEBAR.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="faq-scroll">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.id} id={faq.id} className="faq-item">
                <h4>{faq.title}</h4>
                {faq.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
