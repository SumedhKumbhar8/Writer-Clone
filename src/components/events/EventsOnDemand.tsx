"use client";

import { useMemo, useState } from "react";
import { EventCard } from "@/components/events/EventCard";
import { eventsPageData } from "@/data/events";

type FilterId = (typeof eventsPageData.filters)[number]["id"];

export function EventsOnDemand() {
  const { onDemand, filters, pageSize, events } = eventsPageData;
  const [filter, setFilter] = useState<FilterId>("all");
  const [visible, setVisible] = useState(pageSize);

  const filtered = useMemo(
    () =>
      filter === "all" ? events : events.filter((e) => e.label === filter),
    [events, filter],
  );

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div className="events-hub-wrapper">
      <div className="events-hub-item">
        <div className="events-hub-item__header">
          <h2>{onDemand.title}</h2>
          <p>{onDemand.subtitle}</p>
        </div>

        <div className="events-hub-item-main">
          <div className="events-hub-item-nav2">
            <div className="events-hub-item-nav2__list">
              <ul>
                {filters.map((f) => (
                  <li key={f.id}>
                    <a
                      href="#"
                      className={filter === f.id ? "-active" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        setFilter(f.id);
                        setVisible(pageSize);
                      }}
                    >
                      {f.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="events-hub-item-content">
            <div className="previously-recorded-event-wrap">
              <div className="row-previously-recorded">
                {shown.map((event) => (
                  <EventCard key={event.href + event.date} event={event} />
                ))}
              </div>

              {hasMore ? (
                <div className="previously-recorded-event-wrap__btn">
                  <button
                    type="button"
                    className="dc-btn dc-btn_secondary"
                    onClick={() => setVisible((v) => v + pageSize)}
                  >
                    Show more
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
