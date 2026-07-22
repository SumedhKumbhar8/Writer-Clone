import Link from "next/link";
import { EventsOnDemand } from "@/components/events/EventsOnDemand";
import { eventsPageData } from "@/data/events";
import { createPageMetadata } from "@/lib/seo";
import "@/styles/events.css";

export const metadata = createPageMetadata({
  title: "Upcoming Events | On-demand Events & Webinars",
  description:
    "Join WRITER events and webinars — connect, learn, and watch on-demand sessions on enterprise AI.",
  path: "/events",
});

export default function EventsPage() {
  const { eyebrow, title, subtitle, cta } = eventsPageData;

  return (
    <>
      <section className="section-events-hub-main">
        <div className="container-default-sm text-center">
          <div className="head">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="hero-sub">{subtitle}</p>
        </div>
      </section>

      <section>
        <div className="container-default-sm">
          <EventsOnDemand />
        </div>
      </section>

      <section className="section-events-bottom-cta">
        <div className="container-default-sm">
          <h2>{cta.title}</h2>
          <div className="events-cta-btns">
            <Link href={cta.primary.href} className="outline">
              {cta.primary.label}
            </Link>
            <Link href={cta.secondary.href} className="solid">
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
