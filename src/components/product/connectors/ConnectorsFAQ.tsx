"use client";

import { FAQ_SIDEBAR, FAQ_ITEMS } from "@/data/connectors";

function FAQSidebar() {
  return (
    <nav className="sticky top-[170px] self-start" aria-label="FAQ navigation">
      <ul className="space-y-4">
        {FAQ_SIDEBAR.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block text-[16px] font-medium leading-[1.4] text-midnight-graphite transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FAQContent() {
  return (
    <div className="space-y-10">
      {FAQ_ITEMS.map((faq) => (
        <div key={faq.id} id={faq.id} className="scroll-mt-[170px]">
          <h4 className="text-[16px] font-medium leading-[1.4] text-midnight-graphite">
            {faq.title}
          </h4>
          {faq.content.map((paragraph, i) => (
            <p
              key={i}
              className="mt-4 text-[16px] leading-[1.6] text-[#4f4f4f]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ConnectorsFAQ() {
  return (
    <section className="bg-white pb-[93px] pt-[73px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-midnight-graphite">
          Frequently Asked Questions
        </p>

        <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
          FAQs about connectors
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <FAQSidebar />
          <FAQContent />
        </div>
      </div>
    </section>
  );
}
