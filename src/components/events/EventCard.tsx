import Image from "next/image";
import type { EventItem } from "@/data/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <div>
      <article className="previously-recorded-card">
        <div className="previously-recorded-card__img">
          <Image
            src={event.image}
            alt=""
            fill
            sizes="(max-width:759px) 300px, 392px"
          />
          <div
            className="previously-recorded-card__tags"
            data-label={event.label}
          >
            <div className="previously-recorded-card__tag">{event.tag}</div>
          </div>
        </div>
        <div className="previously-recorded-card__content">
          <div className="previously-recorded-card__main">
            <a
              href={event.href}
              className="previously-recorded-card__title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.title}
            </a>
            {event.desc ? (
              <div className="previously-recorded-card__dsc">{event.desc}</div>
            ) : null}
          </div>
          {event.date ? (
            <div className="previously-recorded-card__date">{event.date}</div>
          ) : null}
          <div className="dc-web-arrow-4" aria-hidden />
        </div>
      </article>
    </div>
  );
}
