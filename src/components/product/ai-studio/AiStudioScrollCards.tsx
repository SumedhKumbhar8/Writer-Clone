import Link from "next/link";
import { AI_STUDIO_SCROLL_CARDS } from "@/data/ai-studio";
import { cn } from "@/lib/utils";

export function AiStudioScrollCards() {
  return (
    <section className="scroll_cards_section scroll_listener">
      <div className="cards">
        {AI_STUDIO_SCROLL_CARDS.map((card) => (
          <div key={card.id} className="scroll_card">
            <span
              className={cn(
                "badge",
                card.badgeColor === "yellow" ? "badge-yellow" : "badge-green",
              )}
            >
              {card.badge}
            </span>

            <h2 className="card-title">{card.title}</h2>

            <p className="card-text">{card.description}</p>

            <Link href={card.link.href} className="btn">
              {card.link.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
